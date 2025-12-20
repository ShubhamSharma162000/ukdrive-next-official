"use client";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const router = useRouter();
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        minHeight: "100vh",
        bgcolor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "center",
        p: 1,
      })}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 450,
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            p: 2,
            pb: 0,
          }}
        >
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{ width: 90, height: 90 }}
            src="https://i.pravatar.cc/300"
          />

          <Typography variant="h5" fontWeight={600}>
            Shubham Sharma
          </Typography>
          <Typography variant="body2" color="text.secondary">
            shubham@example.com
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "100%",
              gap: 2,
              mt: 3,
            }}
          >
            {[
              { label: "Orders", value: 12 },
              { label: "Wishlist", value: 4 },
              { label: "Saved", value: 2 },
            ].map((i) => (
              <Box
                key={i.label}
                sx={{ bgcolor: "white", p: 2, borderRadius: 3, boxShadow: 2 }}
              >
                <Typography variant="h6" fontWeight={700}>
                  {i.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {i.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ width: "100%", my: 3 }} />

          <List sx={{ width: "100%" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Addresses" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary="Payment Methods" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingBagIcon />
                </ListItemIcon>
                <ListItemText primary="Order History" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: "error.main" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
