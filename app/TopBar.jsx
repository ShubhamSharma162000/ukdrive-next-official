"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Download", href: "/download" },
  { label: "Rent", href: "/rentVehicles" },
  { label: "Contact Us", href: "/contactUs" },
  { label: "About Us", href: "/aboutUs" },
];

export default function TopBar({ onMenuClick }) {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useContext(AuthContext);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "primary.main", borderRadius: 0 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {isMobile && (
            <IconButton onClick={onMenuClick} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h4"
            sx={{ fontWeight: 900, cursor: "pointer", color: "#fff" }}
            onClick={() => router.push("/")}
          >
            UKDrive
          </Typography>
        </Box>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 1 }}>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Box
                  key={item.label}
                  onClick={() => router.push(item.href)}
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: 999,
                    cursor: "pointer",
                    bgcolor: isActive ? "#fff" : "transparent",
                    "&:hover": { bgcolor: "#b9c8f8ff" },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "#000" : "#fff",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        )}

        {!isAuthenticated && !isMobile && (
          <Stack direction="row" spacing={3} alignItems="center">
            <Link href="/login" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  backgroundColor: "#1e40af",
                  color: "white",
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                Login
              </Button>
            </Link>

            <Link href="/signup" style={{ textDecoration: "none" }}>
              <Typography sx={{ fontWeight: 700, color: "#fff" }}>
                Signup
              </Typography>
            </Link>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
