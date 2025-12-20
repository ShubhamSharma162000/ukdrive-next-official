"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Tabs,
  Tab,
  Stack,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import api from "../../../lib/api";
import { useRouter } from "next/navigation";

export const CarCard = ({ car }) => {
  const images = car.images || [];
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <Paper
        elevation={4}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          transition: "0.3s",
          "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
        }}
      >
        <Box sx={{ position: "relative", height: 220 }}>
          <Box
            component="img"
            src={images[activeIndex]?.url || "/car-placeholder.png"}
            alt={car.vehicleName}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.4s ease-in-out",
            }}
          />

          {images.length > 1 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {images.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    cursor: "pointer",
                    bgcolor:
                      activeIndex === i ? "#fff" : "rgba(255,255,255,0.6)",
                  }}
                />
              ))}
            </Box>
          )}
        </Box>

        <Box sx={{ p: 2.5 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography variant="h6" fontWeight={800}>
                {car.vehicleName}
              </Typography>
            </Box>

            <Chip
              label={car.type}
              size="small"
              sx={{
                bgcolor: "#03167d",
                color: "#fff",
                fontWeight: 700,
                px: 1,
              }}
            />
          </Stack>

          <Stack direction="row" spacing={1} mt={1.5} flexWrap="wrap">
            <Chip label={car.fuelType} size="small" />
            <Chip label={`${car.seatingCapacity} Seats`} size="small" />
            <Chip
              label={car.status === "available" ? "Available" : "Unavailable"}
              size="small"
              sx={{
                bgcolor: car.status === "available" ? "#dcfce7" : "#fee2e2",
                color: car.status === "available" ? "#166534" : "#991b1b",
                fontWeight: 600,
              }}
            />
          </Stack>

          <Box
            sx={{
              mt: 2,
              p: 1.5,
              borderRadius: 2,
              bgcolor: "#eeedfaff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontWeight={700}>
              ₹{car.rentPerDay}
              <Typography component="span" sx={{ fontSize: 12 }}>
                {" "}
                / day
              </Typography>
            </Typography>

            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              Security ₹{car.securityDeposit}
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mt: 1, color: "grey.700" }}>
            📍 Pickup: <b>{car.pickupLocation}</b>
          </Typography>

          <Button
            variant="contained"
            fullWidth
            onClick={() => router.push(`/home/renting/vehicle/${car._id}`)}
            sx={{
              mt: 2,
              borderRadius: 2,
              bgcolor: "#03167d",
              fontWeight: 800,
              py: 1.2,
              "&:hover": {
                bgcolor: "#02125f",
                transform: "translateY(-1px)",
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </Paper>
    </motion.div>
  );
};
