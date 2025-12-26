import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function PremiumCarSlider() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState([]);
  const MotionCard = motion(Card);
  useEffect(() => {
    const getAllVehicle = async () => {
      try {
        const res = await api.get("/api/v1/vehicle/getallvehicle");
        if (res.data.success) {
          setVehicles(res.data.data);
        }
      } catch (error) {
        console.error("API ERROR:", error);
      } finally {
      }
    };

    getAllVehicle();
  }, []);

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector < HTMLElement > "[data-card]";
    if (!card) return;

    const cardWidth = card.offsetWidth + 24;

    const interval = setInterval(() => {
      const isEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;

      if (isEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        bgcolor: "#f5f5f7",
        borderRadius: 4,
        px: { xs: 2, md: 6 },
      }}
    >
      <motion.div
        style={{ display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            mb: 4,
            position: "relative",
            color: "#03167d",
            fontSize: { xs: "2.2rem", md: "3.2rem" },
          }}
        >
          Premium Cars for Rent
        </Typography>
      </motion.div>

      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: -20,
            zIndex: 10,
            bgcolor: "white",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 2,
            px: 1,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {vehicles.map((car) => (
            <MotionCard
              key={car._id}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              sx={{
                minWidth: 320,
                maxWidth: 320,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={car?.images?.[0]?.url}
                  alt={car.vehicleName}
                />

                <Chip
                  label={car.status.toUpperCase()}
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    bgcolor: car.status === "available" ? "#2e7d32" : "#c62828",
                    color: "white",
                    fontWeight: 700,
                  }}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "rgba(255,255,255,0.8)",
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>

              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight={800}>
                  {car.vehicleName}
                </Typography>

                <Typography sx={{ fontSize: 14, color: "grey.700" }}>
                  {car.type} • {car.fuelType}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mt: 2 }}
                >
                  <Typography sx={{ fontSize: 13 }}>
                    💺 {car.seatingCapacity} Seater
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: 18,
                      color: "#03167d",
                    }}
                  >
                    ₹{car.rentPerDay}/day
                  </Typography>
                </Stack>

                <Typography sx={{ fontSize: 12, mt: 1, color: "grey.600" }}>
                  🔐 Deposit: ₹{car.securityDeposit} <br />
                  💳 Advance: ₹{car.advancePayment}
                </Typography>
              </CardContent>

              <Stack direction="row" spacing={1} sx={{ p: 2, pt: 0 }}>
                <Button
                  onClick={() => router.push(`/renting/vehicle/${car._id}`)}
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#03167d",
                    fontWeight: 700,
                    "&:hover": { bgcolor: "#020f55" },
                  }}
                >
                  Book Now
                </Button>

                <Button
                  onClick={() => router.push(`/renting/vehicle/${car._id}`)}
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderColor: "#03167d",
                    color: "#03167d",
                    fontWeight: 700,
                  }}
                >
                  Details
                </Button>
              </Stack>

              <Box
                sx={{
                  p: 1.5,
                  bgcolor: "#e7f6ff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar sx={{ width: 26, height: 26, bgcolor: "#90caf9" }}>
                  {car.status[0].toUpperCase()}
                </Avatar>
                <Typography
                  sx={{
                    fontSize: 13,
                    maxWidth: 200,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={car.pickupLocation}
                >
                  📍 {car.pickupLocation}
                </Typography>
              </Box>
            </MotionCard>
          ))}
        </Box>

        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: -20,
            zIndex: 10,
            bgcolor: "white",
            boxShadow: 2,
            display: { xs: "none", md: "flex" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => router.push("/rentVehicles")}
          sx={{
            px: 4,
            py: 1.4,
            fontSize: 16,
            borderRadius: 2,
            bgcolor: "#000",
            "&:hover": { bgcolor: "#222" },
          }}
        >
          Browse All Cars
        </Button>
      </Box>
    </Box>
  );
}
