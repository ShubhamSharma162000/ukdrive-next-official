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
  Button,
  Chip,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useRef } from "react";

const screenshots = [
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-19%20at%203.20.05%20PM.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-11%20at%206.02.49%20PM.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-11%20at%206.02.49%20PM-2.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/WhatsApp%20Image%202025-12-11%20at%206.02.44%20PM.jpeg",
];

const metadata = {
  title: "About UKDrive | Ride Booking, Ride Sharing & Delivery App",
  description:
    "Learn about UKDrive, a trusted ride booking, ride sharing, and delivery platform in Kotdwara and Uttarakhand. Our mission is to provide safe, affordable, and reliable transportation with verified drivers and 24x7 support.",
  alternates: {
    canonical: "https://ukdrive.in/aboutUs",
  },
  openGraph: {
    title: "About UKDrive – Your Ride, Your Way",
    description:
      "UKDrive is a local ride booking and delivery app serving Kotdwara and Uttarakhand with verified drivers, real-time tracking, and affordable fares.",
    url: "https://ukdrive.in/aboutUs",
    type: "website",
  },
};

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
          position: "relative",
          width: "100%",
          height: isMobile ? 450 : 820,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/202.jpg"
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
            display: "flex",
            alignItems: "center",
            px: { xs: 2.5, sm: 6, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              About UKDrive
              <br />
              Driving Uttarakhand Forward
            </Typography>

            <Typography
              sx={{
                color: "#d1d5db",
                fontSize: "0.95rem",
                mb: 4,
                maxWidth: 560,
              }}
            >
              From cab bookings and ride sharing to local delivery services,
              UKDrive is designed to support both riders and drivers with
              transparency, security, and 24×7 support.
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              sx={{ mt: 4, color: "#d1d5db", fontSize: "0.85rem" }}
            >
              <span>✔ Built for Uttarakhand</span>
              <span>✔ Verified</span>
              <span>✔ Safety & 24×7 </span>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
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
          India’s Beloved Bike Taxi Service
        </Typography>

        <Box sx={{ maxWidth: 520 }}>
          <Typography color="text.secondary" paragraph>
            UKDRIVE was born from a simple but powerful idea — solving everyday
            transportation challenges with trust, transparency, and technology.
            In many cities and towns, daily commuting and local deliveries still
            face issues like pricing confusion, driver availability, and lack of
            accountability.
          </Typography>

          <Typography color="text.secondary" paragraph>
            We saw an opportunity to create a platform that works for both
            passengers and drivers — one that is fair, community-focused, and
            easy to use. UKDRIVE is built with real-world local needs in mind,
            not just big-city assumptions.
          </Typography>
        </Box>
      </Grid>

      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#fff",
          px: { xs: 3, md: 10 },
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip
              label="Built for Uttarakhand"
              sx={{
                mb: 2,
                bgcolor: "rgba(255,255,255,0.1)",
                color: "#fff",
              }}
            />

            <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>
              We’re Not Just a Ride App.
              <br /> We’re UKDrive.
            </Typography>

            <Typography sx={{ color: "#cbd5f5", mb: 4, maxWidth: 520 }}>
              UKDrive connects passengers, drivers, and delivery partners
              through a secure, reliable, and local-first mobility platform
              designed specially for Uttarakhand.
            </Typography>

            <Button
              size="large"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/ukdrive_uk15?igsh=NXNycTc5OThlenF4",
                  "_blank"
                )
              }
              sx={{
                bgcolor: "#f97316",
                color: "#fff",
                px: 4,
                "&:hover": { bgcolor: "#ea580c" },
              }}
            >
              Know Our Journey
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/about%20us%20.jpeg"
              alt="UKDrive Hero"
              sx={{
                borderRadius: 4,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.65)",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box my={10} mx={2}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              mb: 4,
              position: "relative",
              display: "inline-block",
              color: "#03167d",
              px: 1,
              textAlign: "center",
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
        </Box>

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
                  backgroundColor: "#f5f7ff",
                  border: "1px solid rgba(99,102,241,0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 40px rgba(30,64,175,0.18)",
                  },
                }}
              >
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

                <Box
                  sx={{
                    width: 40,
                    height: 3,
                    bgcolor: "primary.main",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />

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
            textAlign: "center",
            background: "linear-gradient(145deg, #f1f5ff 0%, #e8edff 100%)",
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
