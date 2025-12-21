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

export default function DownloadPage() {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const startAutoScroll = (ref) => {
    const slider = ref.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const cardWidth = 300 + 16; // width + gap

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - cardWidth
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 2000);

    return interval;
  };
  useEffect(() => {
    const i1 = startAutoScroll(sliderRef);
    const i2 = startAutoScroll(sliderRef2);

    return () => {
      clearInterval(i1);
      clearInterval(i2);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", px: 0, mx: 0 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          textAlign: "center",
          py: { xs: 8, md: 12 },
          px: 2,
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Download UKDrive
        </Typography>
        <Typography
          sx={{ maxWidth: 500, mx: "auto", fontSize: 18, opacity: 0.9 }}
        >
          Ride Sharing • Delivery • Rentals — All in one super app for daily
          travel.
        </Typography>

        <Button
          component="a"
          href="https://play.google.com/store/search?q=ukdrive&c=apps"
          target="_blank"
          variant="contained"
          sx={{
            mt: 4,
            background: "white",
            color: "#0057ff",
            px: 4,
            py: 1.8,
            fontSize: 18,
            borderRadius: 3,
            "&:hover": { background: "#e5e8ff" },
          }}
        >
          <AndroidIcon sx={{ mr: 1 }} /> Get it on Play Store
        </Button>
      </Box>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
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
            Why Choose UKDrive?
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {[
            {
              icon: <DirectionsCarIcon sx={{ fontSize: 45 }} />,
              title: "Fast & Safe Rides",
              desc: "Verified drivers with live tracking for secure travel.",
            },
            {
              icon: <LocalShippingIcon sx={{ fontSize: 45 }} />,
              title: "Quick Delivery",
              desc: "Affordable same-day delivery for parcels & documents.",
            },
            {
              icon: <StarIcon sx={{ fontSize: 45 }} />,
              title: "Top Rated Service",
              desc: "Thousands of happy customers trust UKDrive daily.",
            },
            {
              icon: <VerifiedIcon sx={{ fontSize: 45 }} />,
              title: "Reliable Support",
              desc: "24/7 customer support for rides & rent & delivery help.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.04 }}
                sx={{
                  mx: 4,
                  textAlign: "center",
                  py: 3,
                  borderRadius: 4,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
                  background: "#dae6fdff",
                }}
              >
                <CardContent>
                  <Box sx={{ color: "#07348dff", mb: 1 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: "gray" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

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
            UKDrive App Screenshots
          </Typography>
        </motion.div>

        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: 2,
            "&::-webkit-scrollbar": { display: "none" },
            WebkitOverflowScrolling: "touch",
          }}
        >
          {appScreenshots.map((src, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                minWidth: 300,
                maxWidth: 300,
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
                  height={300}
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

      <Box sx={{ mt: 10 }}>
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
            What Our Users Say
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // ✅ center horizontally
            width: "100%",
          }}
        >
          <Grid container spacing={3} alignItems={"center"}>
            {[
              {
                name: "Amit Sharma",
                review:
                  "UKDrive is the fastest app I’ve used. Very good service !",
              },
              {
                name: "Priya Singh",
                review:
                  "Delivery service is super quick. I use it weekly for sending parcels.",
              },
              {
                name: "Rahul Verma",
                review: "Affordable rides and clean vehicles. 5/5 experience.",
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    borderRadius: 4,
                    p: 2,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                    background: "#dae6fdff",
                  }}
                >
                  <Typography sx={{ fontSize: 16, mb: 2, color: "gray" }}>
                    “{item.review}”
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ my: 12 }}>
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
            Recents Comments
          </Typography>
        </motion.div>

        <Box
          ref={sliderRef2}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: 2,
            "&::-webkit-scrollbar": { display: "none" },
            WebkitOverflowScrolling: "touch",
          }}
        >
          {screenshots.map((src, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                minWidth: 300,
                maxWidth: 300,
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
                  height={600}
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
    </Box>
  );
}
