"use client";
import { AuthContext } from "@/context/authContext";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  Button,
  Dialog,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Sidebar({ open, onClose }) {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const [loggingOut, setLoggingOut] = useState(false);
  console.log(user);
  const userLogout = async () => {
    setLoggingOut(true);
    await logout();
    router.push("/");
    setTimeout(() => {
      onClose();
      setLoggingOut(false);
    }, 600);
  };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="left"
      PaperProps={{
        sx: (theme) => ({
          backgroundColor: theme.palette.primary.main,
          width: 260,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }),
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
            p: 1,
          }}
        >
          <Box
            component="img"
            src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/no%20profile%20.png"
            alt="Profile"
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(255,255,255,0.4)",
            }}
          />

          <Box>
            <Typography sx={{ fontSize: "0.85rem", opacity: 0.8 }}>
              {user?.phone}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          {[
            { label: "Home", href: "/" },
            { label: "Download", href: "/download" },
            { label: "Rent", href: "/rentVehicles" },
            { label: "Contact Us", href: "/contactUs" },
            { label: "About Us", href: "/aboutUs" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              <Typography
                onClick={onClose}
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  px: 1.5,
                  py: 1,
                  borderRadius: 1.5,
                  color: "white",
                  cursor: "pointer",
                  transition: "0.25s",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transform: "translateX(6px)",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>

      {!isAuthenticated && (
        <Box sx={{ p: 2 }}>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={onClose}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.5)",
                mb: 1.5,
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 2,
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.15)",
                },
              }}
            >
              Login
            </Button>
          </Link>

          <Link href="/signup" style={{ textDecoration: "none" }}>
            <Button
              fullWidth
              variant="contained"
              onClick={onClose}
              sx={{
                backgroundColor: "white",
                color: "#055849ff",
                fontWeight: 700,
                textTransform: "none",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.9)",
                },
              }}
            >
              Signup
            </Button>
          </Link>
        </Box>
      )}

      {isAuthenticated && (
        <Box sx={{ p: 2 }}>
          <Button
            onClick={userLogout}
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "#055849ff",
              mb: 1.5,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.15)",
              },
            }}
          >
            LogOut
          </Button>
        </Box>
      )}
      <Dialog open={loggingOut}>
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CircularProgress size={40} />
          <Typography sx={{ mt: 2, fontWeight: 600 }}>
            Logging you out...
          </Typography>
        </Box>
      </Dialog>
    </Drawer>
  );
}
