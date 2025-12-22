"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/Verified";

export default function SmartExperienceSection() {
  return (
    <Box sx={{ bgcolor: "#d7ebffff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#0f1724",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Experience the smarter way to travel
            </Typography>

            <Chip
              label="Trusted across Uttarakhand"
              sx={{
                bgcolor: "rgba(89,134,247,0.12)",
                color: "#5986f7",
                fontWeight: 600,
                mb: 2,
              }}
            />

            <Typography
              sx={{
                fontSize: 18,
                color: "text.secondary",
                maxWidth: 420,
                mb: 4,
              }}
            >
              Book rides, share trips, and send deliveries — all in one powerful
              UKDrive app.
            </Typography>

            <Grid container spacing={3}>
              {[
                {
                  icon: <DirectionsCarIcon />,
                  text: "Ride booking & sharing",
                },
                {
                  icon: <PaymentsIcon />,
                  text: "Easy & secure payments",
                },
                {
                  icon: <LocalShippingIcon />,
                  text: "Fast local delivery",
                },
              ].map((item, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                    <Box
                      sx={{
                        color: "#5986f7",
                        fontSize: 28,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 600 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/mobile-app-location-digital-art.jpg"
              alt="UKDrive Experience"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
