import * as React from "react";
import { Box, Grid, Typography, Container, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";

// 🚀 Features based on your services
const FEATURES = [
  {
    title: "Ride Booking",
    description:
      "Book bikes, autos, and cabs instantly. Affordable rides, verified drivers, and smooth city travel anytime.",
    image:
      "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ride%20booking%20service.jpg",
  },
  {
    title: "Ride Sharing",
    description:
      "Share your ride, save money, and reduce traffic. Smart ride sharing for daily commuters and city travel.",
    image:
      "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ride%20sharing%20services.png",
  },
  {
    title: "Parcel Delivery",
    description:
      "Fast and secure parcel delivery within the city. From documents to packages — we deliver it safely.",
    image:
      "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/delivery-%20parcel%20services.png",
  },
];

const MotionPaper = motion(Paper);

export default function ServiceShowcase() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          fontWeight={900}
          mb={6}
          sx={{ justifyContent: "center", textAlign: "center" }}
        >
          One App. Multiple Smart Services
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="stretch"
        >
          {FEATURES.map((item, index) => (
            <>
              <Stack direction="column" spacing={1} alignItems="stretch">
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    height: 180,
                    mx: "auto",
                    mb: 1,
                    display: "block",
                  }}
                />

                <Typography variant="h6" fontWeight={700}>
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  lineHeight={1.7}
                >
                  {item.description}
                </Typography>
              </Stack>
            </>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
