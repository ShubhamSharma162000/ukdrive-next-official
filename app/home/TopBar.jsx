"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { styled, alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button, Stack, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";
import Link from "next/link";
const menuItems = [
  { label: "Home", href: "/home" },
  { label: "Download", href: "/home/download" },
  { label: "Rent", href: "/home/rentVehicles" },
  { label: "Contact Us", href: "/home/contactUs" },
  { label: "About Us", href: "/home/aboutUs" },
];

export default function TopBar({ onMenuClick }) {
  const theme = useTheme();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });

  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]?.label);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      square
      sx={{
        bgcolor: "primary.main",
        borderRadius: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: 1,
          py: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {mounted && isMobile && (
              <IconButton onClick={onMenuClick} sx={{ color: "#ffffff" }}>
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h4"
              sx={{ fontWeight: 900, cursor: "pointer" }}
            >
              UKDRive
            </Typography>
          </Box>

          {mounted && !isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItems.map((item) => {
                const isSelected = selectedMenu === item.label;

                return (
                  <Box
                    key={item.label}
                    onClick={() => {
                      setSelectedMenu(item.label);
                      router.push(item.href);
                    }}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: 999,
                      cursor: "pointer",
                      transition: "0.25s ease",
                      bgcolor: isSelected ? "#ffffff" : "transparent",
                      "&:hover": {
                        bgcolor: "#b9c8f8ff",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: isSelected ? 700 : 600,
                        color: isSelected ? "#000000" : "#ffffff",
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
            <Stack direction="row" spacing={3} alignItems={"center"}>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: "#1e40af",
                    color: "white",
                    fontWeight: 700,
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Login
                </Button>
              </Link>

              <Link href="/signup" style={{ textDecoration: "none" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  Signup
                </Typography>
              </Link>
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
