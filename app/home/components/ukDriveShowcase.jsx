import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
  IconButton,
  Avatar,
  Chip,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

const screenshots = [
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20services%205.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%206.avif",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%207.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%208.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%209.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%2010%20.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%205%20.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%202.jpg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%201.jpg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20showcase%203%20.jpg",
];

const features = [
  {
    title: "Ride Booking",
    desc: "Tap, book & go — Cars, Autos & Bikes in minutes with live tracking.",
    icon: <DirectionsCarIcon sx={{ fontSize: 34 }} />,
    color: "linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)",
  },
  {
    title: "Ride Sharing",
    desc: "Share routes, cut costs & reduce emissions with smart matching.",
    icon: <GroupIcon sx={{ fontSize: 34 }} />,
    color: "linear-gradient(135deg,#f6d365 0%,#fda085 100%)",
  },
  {
    title: "Parcel Delivery",
    desc: "Safe, affordable parcel & document delivery with proof & tracking.",
    icon: <InventoryIcon sx={{ fontSize: 34 }} />,
    color: "linear-gradient(135deg,#a1c4fd 0%,#c2e9fb 100%)",
  },
  {
    title: "On-Demand Delivery",
    desc: "Groceries, food & urgent items — delivered fast by local partners.",
    icon: <LocalShippingIcon sx={{ fontSize: 34 }} />,
    color: "linear-gradient(135deg,#f093fb 0%,#f5576c 100%)",
  },
];

export default function UkdriveShowcase() {
  const sliderRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideInterval = 4000;
    const resetDelay = 1200;

    const interval = setInterval(() => {
      const isEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

      if (isEnd) {
        setTimeout(() => {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }, resetDelay);
      } else {
        slider.scrollBy({ left: 520, behavior: "smooth" });
      }
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        borderRadius: 8,
        overflow: "hidden",
        bgcolor: "#0f1724",
        color: "#fff",
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, lineHeight: 1.05 }}
              >
                UKDrive — Ride. Share. Deliver.
              </Typography>

              <Typography
                sx={{ color: "rgba(255,255,255,0.78)", fontSize: 18 }}
              >
                All-in-one mobility & delivery app built for your city. Book a
                ride, share costs, send parcels and get groceries — fast and
                secure.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: 3, px: 4 }}
                >
                  Download on Play Store
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.12)",
                    borderRadius: 3,
                  }}
                >
                  Download on App Store
                </Button>

                <Button
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    borderRadius: 3,
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.06)",
                    ml: 1,
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mt: 3 }}
              >
                <Chip
                  label="4.8 ★"
                  variant="filled"
                  sx={{ bgcolor: "#ffd54f", color: "#000", fontWeight: 700 }}
                />
                <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Trusted by 50k+ riders
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Box
            ref={sliderRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              scrollBehavior: "smooth",
              pb: 2,
              px: 1,
              "&::-webkit-scrollbar": { display: "none" },
              WebkitOverflowScrolling: "touch",
            }}
          >
            {screenshots.map((src, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 400,
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={src}
                    alt={`App screenshot ${index + 1}`}
                    width={300}
                    height={isMobile ? 400 : 500}
                    style={{ width: "100%", height: "40" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, textAlign: "center", mb: 3 }}
          >
            Powerful features — made simple
          </Typography>

          <Grid container spacing={3}>
            {features.map((f, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div whileHover={{ y: -8 }}>
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      minHeight: 160,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: "#e3e4f2ff",
                      border: "1px solid rgba(216, 219, 243, 0.04)",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          display: "grid",
                          placeItems: "center",
                          background: f.color,
                        }}
                      >
                        {f.icon}
                      </Box>

                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>
                          {f.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}>{f.desc}</Typography>
                      </Box>
                    </Box>

                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      sx={{ mt: 2 }}
                    >
                      <Button size="small">Learn more</Button>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 10 }, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Ready to go?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", m: 2 }}>
            Download UKDrive & start your first ride or delivery.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="outlined"
              size="large"
              href="https://play.google.com/store/search?q=ukdrive&c=apps"
              sx={{
                background: "#efeff0ff",
                borderRadius: 3,
                color: "#080808ff",
                borderColor: "rgba(255,255,255,0.12)",
                borderRadius: 3,
              }}
            >
              Get the App
            </Button>
            <Button
              onClick={() => router.push("/contactUs")}
              variant="outlined"
              size="large"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.12)",
                borderRadius: 3,
              }}
            >
              Contact Sales
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
