"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
  Divider,
  Avatar,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const screenshots = [
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-19%20at%203.20.05%20PM.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-11%20at%206.02.49%20PM.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-11%20at%206.02.49%20PM-2.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-11%20at%206.02.44%20PM.jpeg",
];

export default function AboutUsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const sliderRef = useRef(null);
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const CARD_WIDTH = 300;
    const GAP = 24; // gap: 3 => 3 * 8px
    const STEP = CARD_WIDTH + GAP;

    const interval = setInterval(() => {
      const isEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - STEP;

      if (isEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: STEP, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ bgcolor: "#f9fafb" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "#fff",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={800}>
          About UKDRIVE
        </Typography>
        <Typography mt={2} sx={{ maxWidth: 800, mx: "auto", opacity: 0.9 }}>
          Building a trusted, local-first ride & delivery ecosystem that
          empowers drivers, supports communities, and makes everyday travel
          effortless.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              style={{ display: "flex", justifyContent: "center" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontWeight: 900,
                  mb: 4,
                  position: "relative",
                  display: "inline-block",
                  color: "#03167d",
                  px: 1,
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-120%",
                    width: "50%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                    transform: "skewX(-20deg)",
                    animation: "shine 3s infinite",
                  },
                  "@keyframes shine": {
                    "0%": { left: "-120%" },
                    "60%": { left: "160%" },
                    "100%": { left: "160%" },
                  },
                }}
              >
                Our Story
              </Typography>
            </motion.div>

            <Typography color="text.secondary" paragraph>
              UKDRIVE was born from a simple but powerful idea — solving
              everyday transportation challenges with trust, transparency, and
              technology. In many cities and towns, daily commuting and local
              deliveries still face issues like pricing confusion, driver
              availability, and lack of accountability.
            </Typography>
            <Typography color="text.secondary" paragraph>
              We saw an opportunity to create a platform that works for both
              passengers and drivers — one that is fair, community-focused, and
              easy to use. UKDRIVE is built with real-world local needs in mind,
              not just big-city assumptions.
            </Typography>
          </Grid>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 4 : 12}
          >
            <Grid item xs={12} md={6} sx={{}}>
              <Paper
                sx={{
                  background: "#c0cefdff",
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" fontWeight={900} mb={2}>
                  What Makes Us Different
                </Typography>
                <Stack spacing={2}>
                  <Typography fontWeight={600}>
                    ✔ Transparent pricing, no hidden charges
                  </Typography>
                  <Typography fontWeight={600}>
                    ✔ Driver-first policies and fair commissions
                  </Typography>
                  <Typography fontWeight={600}>
                    ✔ Designed for Tier-2 & Tier-3 cities
                  </Typography>
                  <Typography fontWeight={600}>
                    ✔ Ride + Delivery on a single platform
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sx={{}}>
              <Paper
                sx={{
                  background: "#c0cefdff",
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" fontWeight={900} mb={2}>
                  What Makes Us Different
                </Typography>
                <Stack spacing={2}>
                  <Typography fontWeight={600}>
                    ✔ Transparent pricing, no hidden charges
                  </Typography>
                  <Typography fontWeight={600}>
                    ✔ Driver-first policies and fair commissions
                  </Typography>
                  <Typography fontWeight={600}>
                    ✔ Designed for Tier-2 & Tier-3 cities
                  </Typography>
                  <Typography fontWeight={600}>
                    ✔ Ride + Delivery on a single platform
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sx={{}}>
              <Paper
                sx={{
                  background: "#c0cefdff",
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" fontWeight={600} mb={2}>
                  What Makes Us Different
                </Typography>
                <Stack spacing={2}>
                  <Typography>
                    ✔ Transparent pricing, no hidden charges
                  </Typography>
                  <Typography>
                    ✔ Driver-first policies and fair commissions
                  </Typography>
                  <Typography>✔ Designed for Tier-2 & Tier-3 cities</Typography>
                  <Typography>
                    ✔ Ride + Delivery on a single platform
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Stack>
        </Grid>

        <Box sx={{ mt: 12 }}>
          <motion.div
            style={{ display: "flex", justifyContent: "center" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                mb: 4,
                position: "relative",
                display: "inline-block",
                color: "#03167d",
                px: 1,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-120%",
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                  transform: "skewX(-20deg)",
                  animation: "shine 3s infinite",
                },
                "@keyframes shine": {
                  "0%": { left: "-120%" },
                  "60%": { left: "160%" },
                  "100%": { left: "160%" },
                },
              }}
            >
              Building UKDrive, Together
            </Typography>
          </motion.div>

          {isMobile && (
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              autoplay={true}
              autoplaySpeed={1000}
              slidesToShow={1}
              slidesToScroll={1}
              responsive={[
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {screenshots.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: 5,
                      overflow: "hidden",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`App screenshot ${index + 1}`}
                      width={300}
                      height={500}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Box>
              ))}
            </Slider>
          )}

          {!isMobile && (
            <Box
              ref={sliderRef}
              sx={{
                display: "flex",
                gap: 3,
                overflowX: "hidden", // ✅ CHANGE
                scrollBehavior: "smooth",
                pb: 2,
                px: 1,
              }}
            >
              {screenshots.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    flexShrink: 0, // ✅ REQUIRED
                    width: 300, // ✅ FIXED WIDTH
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: 5,
                      overflow: "hidden",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`App screenshot ${index + 1}`}
                      width={300}
                      height={500}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Box mt={10}>
          <motion.div
            style={{ display: "flex", justifyContent: "center" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                mb: 4,
                position: "relative",
                display: "inline-block",
                color: "#03167d",
                px: 1,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-120%",
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                  transform: "skewX(-20deg)",
                  animation: "shine 3s infinite",
                },
                "@keyframes shine": {
                  "0%": { left: "-120%" },
                  "60%": { left: "160%" },
                  "100%": { left: "160%" },
                },
              }}
            >
              Our Mission & Vision
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={infoCard}>
                <Typography variant="h6" fontWeight={900}>
                  Our Mission
                </Typography>
                <Typography color="text.secondary" fontWeight={500}>
                  To provide safe, affordable, and reliable mobility while
                  empowering local drivers with sustainable income
                  opportunities. To provide safe, affordable, and reliable
                  mobility while empowering local drivers with sustainable
                  income opportunities.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={infoCard}>
                <Typography variant="h6" fontWeight={900}>
                  Our Vision
                </Typography>
                <Typography color="text.secondary" fontWeight={500}>
                  To become India’s most trusted local mobility and delivery
                  network, built on fairness, respect, and innovation. To
                  provide safe, affordable, and reliable mobility while
                  empowering local drivers with sustainable income
                  opportunities.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={infoCard}>
                <Typography variant="h6" fontWeight={900}>
                  Our Values
                </Typography>
                <Typography color="text.secondary" fontWeight={500}>
                  Transparency • Community • Reliability • Growth with purpose
                  To provide safe, affordable, and reliable mobility while
                  empowering local drivers with sustainable income
                  opportunities.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box mt={12}>
          <Paper
            sx={{
              background: "#e8f6a4ff",
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight={900} mb={2}>
              Looking Ahead
            </Typography>
            <Typography maxWidth={900} mx="auto" fontWeight={600}>
              Our journey has just begun. With every city we enter, our focus
              remains the same — empowering drivers, serving passengers, and
              strengthening local mobility ecosystems. UKDRIVE is not just a
              platform; it’s a long-term commitment to sustainable growth.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
const infoCard = {
  background: "#f4d3b5ff",
  width: "100%",
  height: "100%",
  p: 4,
  borderRadius: 3,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  },
};
