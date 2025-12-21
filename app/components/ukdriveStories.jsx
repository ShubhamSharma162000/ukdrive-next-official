import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Chip,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VerifiedIcon from "@mui/icons-material/Verified";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function UkdriveStories() {
  const router = useRouter();

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollBy({ left: 1000, behavior: "smooth" });

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        setTimeout(() => {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stories = [
    {
      name: "Rohit negi ",
      car: "Maruti Suzuki XL6",
      year: "2025",
      booked: "49 days ago",
      review:
        "I had an outstanding experience with the car I rented. The vehicle was in pristine condition, offering a smooth and comfortable ride.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/boy%20story5.jpg",
      rating: "4.36",
      trips: "20 trips",
    },
    {
      name: "jai prakash",
      car: "Hyundai Venue",
      year: "2025",
      booked: "49 days ago",
      review:
        "Excellent host and a great car. The ride was smooth and comfortable throughout.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/boy%20story%203.jpg",
      rating: "5.0",
      trips: "18 trips",
    },
    {
      name: "Raghavendra",
      car: "Maruti Suzuki Brezza",
      year: "2025",
      booked: "9 days ago",
      review:
        "Nice car and friendly host! The pick-up and drop experience was smooth and hassle-free.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/boy%20story%202%20.jpg",
      rating: "4.25",
      trips: "6 trips",
    },
    {
      name: "Amit Sharma",
      car: "Hyundai Creta",
      year: "2025",
      booked: "12 days ago",
      review:
        "The car was extremely clean and well-maintained. Pickup was on time and the host was very cooperative throughout the trip.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/boy%20story%201%20.jpg",
      rating: "4.8",
      trips: "142 trips",
    },
    {
      name: "Neha Verma",
      car: "Tata Nexon",
      year: "2025",
      booked: "4 days ago",
      review:
        "Loved the driving experience! Smooth ride, great mileage, and hassle-free booking. Definitely booking again.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/boy%20story%204.jpg",
      rating: "4.9",
      trips: "96 trips",
    },
    {
      name: "Sureshi pal",
      car: "Toyota Innova Crysta",
      year: "2025",
      booked: "21 days ago",
      review:
        "Perfect car for family travel. Spacious, comfortable, and reliable for long-distance journeys.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/story%20boy%2012.jpeg",
      rating: "4.7",
      trips: "8 trips",
    },
    {
      name: "Pooja Singh",
      car: "Maruti Suzuki Baleno",
      year: "2025",
      booked: "7 days ago",
      review:
        "Very smooth booking process. The car was in excellent condition and the host was very polite and helpful.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/boy%20story.jpg",
      rating: "4.6",
      trips: "4 trips",
    },
    {
      name: "kanika Mehta",
      car: "Kia Seltos",
      year: "2025",
      booked: "30 days ago",
      review:
        "Amazing experience! The car felt brand new and pickup/drop was seamless. Highly recommended.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/story%20gril%2012.jpeg",
      rating: "5.0",
      trips: "12 trips",
    },
    {
      name: "Anjali Patel",
      car: "Honda City",
      year: "2025",
      booked: "3 days ago",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/girl%20story2.jpg",
      rating: "5.0",
      trips: "12 trips",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: 900,
          mx: "auto",
          mb: 4,
          width: "100%",
        }}
      >
        <Box
          sx={{ flex: 1, height: 2, bgcolor: "grey.400", borderRadius: 2 }}
        />

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
            UKDrive Stories
          </Typography>
        </motion.div>

        <Box
          sx={{ flex: 1, height: 2, bgcolor: "grey.400", borderRadius: 2 }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: 1300,
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            left: -25,
            zIndex: 10,
            width: 60,
            height: 60,
            bgcolor: "#f5f5f5",
            borderRadius: "50%",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
            "&:hover": { bgcolor: "#eeeeee" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 4,
            scrollBehavior: "smooth",
            px: 2,
            "&::-webkit-scrollbar": { display: "none" },
            WebkitOverflowScrolling: "touch",
          }}
        >
          {stories.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Box
                sx={{
                  display: "flex",
                  minWidth: 560,
                  height: 330,
                  bgcolor: "white",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ position: "relative", width: 250 }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      bgcolor: "rgba(255,255,255,0.9)",
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>

                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      color: "white",
                      fontWeight: 700,
                      textShadow: "0px 2px 6px rgba(0,0,0,0.6)",
                    }}
                  >
                    {item.name}
                    <Typography sx={{ fontSize: 13 }}>
                      {item.car} • {item.year}
                    </Typography>
                  </Box>

                  <Chip
                    label={`${item.rating} ★ | ${item.trips}`}
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      bgcolor: "#2e7d32",
                      color: "white",
                      fontWeight: 700,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h6" fontWeight={800}>
                      {item.name.toUpperCase()}
                    </Typography>
                    <VerifiedIcon sx={{ color: "#1e88e5", fontSize: 20 }} />
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "#fdf7df",
                      px: 2,
                      py: 0.6,
                      width: "fit-content",
                      borderRadius: "4px 8px 8px 4px",
                      borderLeft: "4px solid #e6c15a",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#b28f2d",
                    }}
                  >
                    Last booked {item.booked}
                  </Box>

                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: 15,
                      color: "grey.700",
                      lineHeight: 1.6,
                    }}
                  >
                    “{item.review}”
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      mt: 2,
                      fontSize: 14,
                      color: "grey.700",
                    }}
                  >
                    <Typography>🚗 {item.trips}</Typography>
                    <Typography>⭐ {item.rating}</Typography>
                    <Typography>📅 {item.year}</Typography>
                  </Box>

                  <Typography
                    onClick={() => router.push("/home/rentVehicles")}
                    sx={{
                      fontWeight: 800,
                      mt: 2,
                      color: "#03167d",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    View Cars <ArrowOutwardIcon fontSize="small" />
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            right: -25,
            zIndex: 10,
            width: 60,
            height: 60,
            bgcolor: "#f5f5f5",
            borderRadius: "50%",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
            "&:hover": { bgcolor: "#eeeeee" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
