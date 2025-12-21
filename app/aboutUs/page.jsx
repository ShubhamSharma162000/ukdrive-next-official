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
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3.5, md: 5 },
                  height: "100%",
                  borderRadius: 5,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(213, 219, 245, 0.95))",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 25px 60px rgba(30,64,175,0.18)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 35px 80px rgba(30,64,175,0.28)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "1.6rem",
                    mb: 3,
                    background: "linear-gradient(90deg, #001f62ff, #080363ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  What Makes Us Different
                </Typography>

                <Stack spacing={2.2}>
                  {[
                    "Transparent pricing, no hidden charges",
                    "Driver-first policies with fair commissions",
                    "Built specially for Tier-2 & Tier-3 cities",
                    "Ride + Delivery on a single platform",
                  ].map((text, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                      sx={{
                        transition: "all 0.25s ease",
                        "&:hover": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          bgcolor: "#070595ff",
                          color: "#fff",
                          fontSize: "0.9rem",
                          fontWeight: 900,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          lineHeight: 1.5,
                        }}
                      >
                        {text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3.5, md: 5 },
                  height: "100%",
                  borderRadius: 5,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(213, 219, 245, 0.95))",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 25px 60px rgba(30,64,175,0.18)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 35px 80px rgba(30,64,175,0.28)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "1.6rem",
                    mb: 3,
                    background: "linear-gradient(90deg, #001f62ff, #080363ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Passenger Experience
                </Typography>

                <Stack spacing={2.2}>
                  {[
                    "Transparent pricing with no hidden charges",
                    "Verified drivers for safe and comfortable rides",
                    "Real-time ride tracking with accurate ETAs",
                    "Multiple ride options for every travel need",
                    "24×7 customer support for peace of mind",
                  ].map((text, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                      sx={{
                        transition: "all 0.25s ease",
                        "&:hover": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          bgcolor: "#070595ff",
                          color: "#fff",
                          fontSize: "0.9rem",
                          fontWeight: 900,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          lineHeight: 1.5,
                        }}
                      >
                        {text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3.5, md: 5 },
                  height: "100%",
                  borderRadius: 5,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(213, 219, 245, 0.95))",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 25px 60px rgba(30,64,175,0.18)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 35px 80px rgba(30,64,175,0.28)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "1.6rem",
                    mb: 3,
                    background: "linear-gradient(90deg, #001f62ff, #080363ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Driver Empowerment
                </Typography>

                <Stack spacing={2.2}>
                  {[
                    "Fair commissions and driver-first policies",
                    "Flexible working hours with freedom to earn",
                    "Transparent payouts and timely settlements",
                    "Easy onboarding with local support",
                    "Consistent ride requests in nearby areas",
                  ].map((text, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                      sx={{
                        transition: "all 0.25s ease",
                        "&:hover": {
                          transform: "translateX(6px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          bgcolor: "#070595ff",
                          color: "#ffffffff",
                          fontSize: "0.9rem",
                          fontWeight: 900,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          lineHeight: 1.5,
                        }}
                      >
                        {text}
                      </Typography>
                    </Stack>
                  ))}
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

          <Box
            ref={sliderRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "hidden",
              scrollBehavior: "smooth",
              pb: 2,
              px: 1,
            }}
          >
            {screenshots.map((src, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  width: 300,
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
            {[
              {
                title: "Our Mission",
                text: "To provide safe, affordable, and reliable mobility while empowering local drivers with sustainable income opportunities.",
              },
              {
                title: "Our Vision",
                text: "To become India’s most trusted local mobility and delivery network, built on fairness, respect, and innovation.",
              },
              {
                title: "Our Values",
                text: "Transparency • Community • Reliability • Growth with purpose",
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    backgroundColor: "#f5f7ff", // subtle brand match
                    border: "1px solid rgba(99,102,241,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 16px 40px rgba(30,64,175,0.18)",
                    },
                  }}
                >
                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: "1.2rem",
                      mb: 1.5,
                      color: "primary.main",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Divider accent */}
                  <Box
                    sx={{
                      width: 40,
                      height: 3,
                      bgcolor: "primary.main",
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />

                  {/* Content */}
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={{ xs: 10, md: 14 }}>
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              overflow: "hidden",
              p: { xs: 4, md: 7 },
              borderRadius: 5,
              textAlign: "center",
              background: "linear-gradient(145deg, #f1f5ff 0%, #e8edff 100%)",
              border: "1px solid rgba(99,102,241,0.18)",
              boxShadow: "0 30px 80px rgba(30,64,175,0.18)",
              transition: "all 0.35s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 45px 120px rgba(30,64,175,0.28)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "rgba(99,102,241,0.15)",
                top: -120,
                right: -120,
                filter: "blur(90px)",
              }}
            />

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                mb: 2,
                color: "primary.main",
              }}
            >
              Looking Ahead
            </Typography>

            <Box
              sx={{
                width: 60,
                height: 4,
                bgcolor: "primary.main",
                mx: "auto",
                mb: 3,
                borderRadius: 99,
              }}
            />

            <Typography
              sx={{
                maxWidth: 880,
                mx: "auto",
                fontWeight: 500,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.7,
                color: "text.secondary",
              }}
            >
              Our journey has just begun. With every city we enter, our focus
              remains the same — empowering drivers, serving passengers, and
              strengthening local mobility ecosystems. UKDrive is not just a
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
