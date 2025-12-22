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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CarCard } from "../components/CarCard";
import api from "@/lib/api";

const NoData = ({ text = "No vehicles available" }) => (
  <Box
    sx={{
      py: 6,
      textAlign: "center",
      color: "grey.600",
    }}
  >
    <Typography variant="h6" fontWeight={600}>
      {text}
    </Typography>
  </Box>
);

export default function RentingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const [mobileCategory, setMobileCategory] = useState("Sedan");
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllVehicle = async () => {
      try {
        setLoading(true);
        const res = await api.get("/api/v1/vehicle/getallvehicle");
        if (res.data.success) {
          setVehicles(res.data.data);
        }
      } catch (error) {
        console.error("API ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    getAllVehicle();
  }, []);

  const categories = ["Hatchback", "Sedan", "SUV", "Luxury", "Van"];

  const getVehiclesByCategory = (category) =>
    vehicles.filter((v) => v.type?.toLowerCase() === category.toLowerCase());

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ChatGPT%20Image%20Dec%2022,%202025%20at%2005_08_06%20PM.png"
          alt="UKDrive Hero"
          sx={{
            width: "100%",
            height: { xs: 260, sm: 320, md: 420 }, // 🔥 reduced height
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.65)",
          }}
        />
      </Box>
      <Box sx={{ width: "100%", py: 2, px: { xs: 1, md: 4 } }}>
        <Box textAlign="center" mb={6}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.5rem", sm: "1.6rem", md: "2.2rem" },
              lineHeight: 1.15,
              color: "#03167d",
            }}
          >
            Rent Your
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #03167d, #2563eb, #4f46e5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                ml: 1,
              }}
            >
              Perfect Vehicle
            </Box>
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: "#2563eb",
              mx: "auto",
              borderRadius: 99,
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "grid", md: "none" },
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            mb: 4,
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat}
              onClick={() => setMobileCategory(cat)}
              sx={{
                p: 1.5,
                textAlign: "center",
                fontWeight: 700,
                borderRadius: 2,
                cursor: "pointer",
                bgcolor: mobileCategory === cat ? "#03167d" : "#e5e7eb",
                color: mobileCategory === cat ? "#fff" : "#222",
                transition: "0.3s",
              }}
            >
              {cat}
            </Box>
          ))}
        </Box>
        {getVehiclesByCategory(mobileCategory).length === 0 && (
          <Grid sx={{ gridColumn: "span 12" }}>
            <NoData text={`No ${mobileCategory} vehicles available`} />
          </Grid>
        )}

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Grid container spacing={4}>
            {getVehiclesByCategory(mobileCategory).map((car) => (
              <Grid key={car._id} sx={{ gridColumn: "span 12", width: "100%" }}>
                <CarCard car={car} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {categories.map((category) => {
            const cars = getVehiclesByCategory(category);
            if (cars.length === 0) return null;

            return (
              <Box key={category} sx={{ mb: 8 }}>
                {/* <Typography
                variant="h4"
                sx={{ fontWeight: 800, mb: 3, color: "#222" }}
              >
                {category} Cars
              </Typography> */}

                <Grid container spacing={4}>
                  {cars.map((car) => (
                    <Grid
                      key={car._id}
                      sx={{
                        gridColumn: {
                          xs: "span 12",
                          md: "span 6",
                        },
                      }}
                    >
                      <CarCard car={car} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
