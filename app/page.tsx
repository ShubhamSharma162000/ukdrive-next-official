"use client";

import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PremiumCarSlider from "./components/premiumCarSlider";
import RecentBlogSlider from "./components/recentBlogSlider";
import UkdriveStories from "./components/ukdriveStories";
import FaqSection from "./components/faqSection";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "@/context/authContext";
import UkdriveShowcase from "./components/ukDriveShowcase";
import UKdriveIntro from "./components/ukDriveIntro";
import { motion } from "framer-motion";
import ServiceShowcase from "./components/ServiceShowcase";
import { useRouter } from "next/navigation";
import CarCategorySection from "./components/carCategorySection";
export default function UkdriveHome() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? 450 : 820,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20banner%201.png"
          alt="UKDrive Hero"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.65)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 45%, rgba(2,6,23,0.2) 100%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            px: { xs: 2.5, sm: 6, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Your Ride,
              <br /> Your Way
            </Typography>

            <Typography
              sx={{
                color: "#e5e7eb",
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                mb: 4,
                maxWidth: 520,
              }}
            >
              Book cabs, rent vehicles, and travel comfortably with trusted
              drivers. Simple, safe, and reliable rides—anytime, anywhere.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                size="large"
                href="https://play.google.com/store/search?q=ukdrive&c=apps"
                sx={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 700,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#1e40af",
                  },
                }}
              >
                Download App
              </Button>

              <Button
                size="large"
                variant="outlined"
                href="https://play.google.com/store/search?q=ukdrive&c=apps"
                sx={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  px: 3,
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#c7d2fe",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Book a Ride
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              sx={{ mt: 4, color: "#d1d5db", fontSize: "0.85rem" }}
            >
              <span>✔ 24×7 Service</span>
              <span>✔ Verified Drivers</span>
              <span>✔ Affordable Fares</span>
            </Stack>
          </Box>
        </Box>
      </Box>

      <ServiceShowcase />
      <UkdriveShowcase />
      <PremiumCarSlider />
      <CarCategorySection />
      <RecentBlogSlider />
      <UkdriveStories />
      <FaqSection />

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #312e81 100%)",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            px: 2,
            mb: 6,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{
              width: "100%",
              maxWidth: 1200,
              mx: "auto",
              px: 2,
            }}
          >
            {[
              {
                title: "Quick Booking",
                desc: "Book a ride in seconds and get instant driver confirmation.",
                icon: "⚡",
              },
              {
                title: "Real-Time Tracking",
                desc: "Live map tracking with accurate ETA and driver route.",
                icon: "📍",
              },
              {
                title: "Secure Payments",
                desc: "Multiple payment options with complete safety.",
                icon: "🔒",
              },
            ].map((item, i) => (
              <Stack
                key={i}
                spacing={2}
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 5,
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,243,255,0.9))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 60px rgba(30,64,175,0.25)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "2rem" }}>{item.icon}</Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            top: -100,
            right: -100,
            filter: "blur(80px)",
          }}
        />

        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 1,
          }}
        >
          Become a Driver & Earn More
        </Typography>

        <Typography
          sx={{
            color: "#dbeafe",
            maxWidth: 520,
            mx: "auto",
            mt: 1,
            fontSize: "1.05rem",
          }}
        >
          Join thousands of drivers across Uttarakhand and start earning on your
          own schedule with UKDrive.
        </Typography>

        <Button
          component="a"
          href="https://play.google.com/store/search?q=ukdrive&c=apps"
          size="large"
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            fontWeight: 700,
            fontSize: "1rem",
            bgcolor: "#ffffff",
            color: "#1e40af",
            borderRadius: 3,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#e0e7ff",
              transform: "translateY(-2px)",
            },
          }}
        >
          Join as Driver
        </Button>
      </Box>
    </Box>
  );
}
