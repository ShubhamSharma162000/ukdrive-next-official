"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import StarIcon from "@mui/icons-material/Star";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";

import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SmartExperienceSection from "./SmartExperienceSection";
import ReferAndEarn from "./ReferAndEarn";

const metadata = {
  title: "Download UKDrive App | Ride Booking & Delivery in Uttarakhand",
  description:
    "Download the UKDrive app to book cabs, bike taxis, autos, and delivery services in Kotdwara and across Uttarakhand. Safe rides, verified drivers, affordable fares, and 24x7 support.",
  alternates: {
    canonical: "https://ukdrive.in/download",
  },
  openGraph: {
    title: "Download UKDrive App – Your Ride, Your Way",
    description:
      "Install the UKDrive app for easy ride booking, ride sharing, and parcel delivery in Kotdwara and Uttarakhand. Available on Android.",
    url: "https://ukdrive.in/download",
    type: "website",
  },
};

const screenshots = [
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/playstore1.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/playstore2.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/playstore3.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/playstore4.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/playstore5.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/playstore6.jpeg",
];

const appScreenshots = [
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%201%20.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%202.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%203.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%204.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%205.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%206.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%207.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%208.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%209.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%2010.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%2011.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%2013.jpeg",
  "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/app%20screenshot%2014.jpeg",
];

const faqColors = ["#fcb0a6ff", "#e8f7e5", "#fff4d9"];

const features = [
  {
    icon: <DirectionsCarIcon fontSize="inherit" />,
    title: "Fast & Safe Rides",
    desc: "Verified drivers with real-time tracking and safe travel.",
  },
  {
    icon: <LocalShippingIcon fontSize="inherit" />,
    title: "Quick Delivery",
    desc: "Affordable same-day delivery for parcels and documents.",
  },
  {
    icon: <VerifiedIcon fontSize="inherit" />,
    title: "24/7 Support",
    desc: "Always available for rides, rentals, and delivery help.",
  },
];

export default function DownloadPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        sx={{
          textAlign: "center",
          py: { xs: 10, md: 14 },
          px: 2,
          background: `linear-gradient(135deg, #0f1724 0%, #1a2550 100%)`,
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            bgcolor: "#5986f7",
            filter: "blur(120px)",
            opacity: 0.25,
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          Download UKDrive
        </Typography>

        <Typography
          sx={{
            maxWidth: 520,
            mx: "auto",
            fontSize: 18,
            opacity: 0.9,
            mb: 4,
          }}
        >
          Ride Booking • Ride Sharing • Delivery — One super app for your daily
          travel and logistics.
        </Typography>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
          <Button
            component="a"
            href="https://play.google.com/store/search?q=ukdrive&c=apps"
            target="_blank"
            variant="contained"
            startIcon={<AndroidIcon />}
            sx={{
              background: "#5986f7",
              color: "white",
              px: 5,
              py: 1.8,
              fontSize: 18,
              borderRadius: 3,
              boxShadow: "0 12px 30px rgba(89,134,247,0.35)",
              "&:hover": {
                background: "#4b76e8",
              },
            }}
          >
            Get it on Play Store
          </Button>
        </motion.div>
      </Box>
      <SmartExperienceSection />
      <ReferAndEarn />
      <Box sx={{ py: 6, px: 2, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mb: 6,
            color: "#0f1724",
            position: "relative",
            display: "inline-block",
          }}
        >
          Why Choose UKDrive?
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.4 }}
                sx={{
                  height: "100%",
                  borderRadius: 5,
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #f4f7ff 100%)",
                }}
              >
                <CardContent sx={{ py: 5 }}>
                  <Box
                    sx={{
                      fontSize: 44,
                      color: "#5986f7",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
