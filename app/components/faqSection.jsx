"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";
const FAQ_DATA = {
  rideBooking: [
    {
      q: "How do I book a ride on UKDrive?",
      a: "Open the UKDrive app or website, choose your preferred vehicle, select pickup and drop details, confirm the fare, and complete the booking.",
    },
    {
      q: "How do I book a self-drive car?",
      a: "Select a self-drive car, choose your dates and time, upload a valid driving license, verify your details, and complete the payment.",
    },
    {
      q: "What is the minimum age required to book a ride?",
      a: "The minimum age is usually 18 years. For self-drive vehicles, the required age may be 21 years or above depending on the vehicle type.",
    },
    {
      q: "What documents are required for self-drive booking?",
      a: "You need a valid driving license and a government-issued ID for verification before confirming a self-drive booking.",
    },
    {
      q: "Can I cancel or modify my booking?",
      a: "Yes, you can cancel or modify your booking from the app before the trip starts. Cancellation charges may apply based on the policy.",
    },
    {
      q: "Is advance payment required to book a ride?",
      a: "Yes, booking confirmation requires payment. You can pay using UPI, cards, or other available payment options.",
    },
    {
      q: "Are UKDrive vehicles safe and verified?",
      a: "Yes, all vehicles listed on UKDrive are verified, well-maintained, and driven by reliable drivers or provided for secure self-drive use.",
    },
    {
      q: "Can I book rides anytime?",
      a: "Yes, UKDrive allows bookings 24/7, subject to vehicle availability in your area.",
    },
  ],
  delivery: [
    {
      q: "Can I use a UKDrive vehicle for deliveries or parcels?",
      a: "Yes, UKDrive allows vehicles to be used for parcel and delivery purposes, as long as the usage follows UKDrive’s policies.",
    },
    {
      q: "What types of deliveries are allowed?",
      a: "You can use UKDrive vehicles for local parcel delivery, food delivery, business shipments, and other legal delivery purposes.",
    },
    {
      q: "What documents are required for delivery usage?",
      a: "You must have a valid driving license, government-issued ID, and approved vehicle details to use a vehicle for deliveries.",
    },
    {
      q: "How do I book a vehicle for delivery on UKDrive?",
      a: "Open the UKDrive app, select a suitable vehicle, choose delivery mode, set your pickup and drop location, and confirm the booking.",
    },
    {
      q: "Is there a minimum age requirement for delivery bookings?",
      a: "Yes, the minimum age is generally 18 years. For certain vehicles, the age requirement may be 21 years or above.",
    },
    {
      q: "Are delivery fares affordable on UKDrive?",
      a: "Yes, UKDrive offers competitive and budget-friendly fares for parcel and delivery bookings.",
    },
    {
      q: "Can I do deliveries 24/7 with UKDrive?",
      a: "Yes, delivery bookings are available 24/7, subject to vehicle availability in your area.",
    },
    {
      q: "Is insurance provided for delivery trips?",
      a: "UKDrive provides basic insurance coverage as per policy. Users are advised to check specific coverage details before booking.",
    },
  ],
  renting: [
    {
      q: "Is fuel included in the rental price?",
      a: "Fuel is generally not included in the rental cost unless specifically mentioned in the booking details.",
    },
    {
      q: "Can I extend my car rental period?",
      a: "Yes, you can request a rental extension through the UKDrive app, subject to vehicle availability and updated charges.",
    },
    {
      q: "How do I book a self-drive car on UKDrive?",
      a: "Open the UKDrive app or website, select a self-drive car, choose your rental dates and time, upload your driving license, and confirm payment.",
    },
    {
      q: "What is the minimum age to rent a car?",
      a: "The minimum age is usually 18 years. For certain vehicle categories, the minimum age requirement may be 21 years or above.",
    },
    {
      q: "What documents are required to rent a car?",
      a: "You need a valid driving license and a government-issued ID for verification before renting a self-drive vehicle.",
    },
    {
      q: "Are there any mileage limits on rental cars?",
      a: "Some rentals may include a daily mileage limit. Any extra distance traveled beyond the limit may incur additional charges.",
    },
    {
      q: "Can I cancel my car rental booking?",
      a: "Yes, you can cancel your booking from the app before the rental period begins. Cancellation charges may apply as per policy.",
    },
    {
      q: "Are UKDrive rental cars insured?",
      a: "Yes, all UKDrive rental cars come with basic insurance coverage as per policy. Users are advised to review coverage details before booking.",
    },
    {
      q: "Can I use a rental car for outstation trips?",
      a: "Yes, rental cars can be used for outstation travel unless restricted in the booking terms.",
    },
  ],
  rideSharing: [
    {
      q: "Is ride-sharing allowed on UKDrive?",
      a: "Yes, UKDrive supports safe and secure ride-sharing for passengers and drivers.",
    },
    {
      q: "How do I book a ride-sharing cab on UKDrive?",
      a: "Open the UKDrive app, enter your pickup and drop location, choose a ride-sharing option, confirm the fare, and book your ride.",
    },
    {
      q: "Who pays tolls during a ride-sharing trip?",
      a: "Toll charges, if applicable, are generally paid by the customer as part of the trip fare.",
    },
    {
      q: "Is there a minimum age requirement for ride-sharing?",
      a: "Yes, passengers must generally be at least 18 years old. Age requirements may vary depending on local regulations.",
    },
    {
      q: "Are ride-sharing trips safe on UKDrive?",
      a: "Yes, UKDrive ensures verified drivers, tracked rides, and safety features to provide a secure ride-sharing experience.",
    },
    {
      q: "Can I share a ride with multiple passengers?",
      a: "Yes, ride-sharing allows multiple passengers traveling in the same direction to share a single ride, subject to availability.",
    },
    {
      q: "Are fares cheaper for ride-sharing?",
      a: "Yes, ride-sharing fares are generally more affordable compared to private cab bookings.",
    },
    {
      q: "Is ride-sharing available 24/7?",
      a: "Yes, ride-sharing services on UKDrive are available 24/7, subject to driver availability in your area.",
    },
  ],
};

export default function FaqSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  const [tab, setTab] = useState("rideBooking");

  const sectionTitles = {
    rideBooking: "Ride Booking",
    delivery: "Delivery Services",
    renting: "Vehicle Renting",
    rideSharing: "Ride Sharing",
  };

  return (
    <Box
      sx={{
        width: "100vw",
        py: 10,
        px: { xs: 2, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: 900,
          mb: 5,
          color: "#03167d",
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Paper
        elevation={3}
        sx={{
          borderRadius: { xs: 2, sm: 3, md: 4 },
          mb: { xs: 3, md: 5 },
          px: { xs: 1, md: 2 },
          py: { xs: 0.5, md: 1 },
          bgcolor: "white",
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          variant="scrollable"
          scrollButtons
          textColor="primary"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": {
              fontWeight: 700,
              textTransform: "none",
              fontSize: isMobile ? 14 : 16,
              minWidth: isMobile ? 90 : 120,
              px: isMobile ? 1 : 2,
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#030761",
            },
          }}
        >
          <Tab label="Ride" value="rideBooking" />
          <Tab label="Delivery" value="delivery" />
          <Tab label="Renting" value="renting" />
          <Tab label="Ride Sharing" value="rideSharing" />
        </Tabs>
      </Paper>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: "#030e38ff",
          textAlign: "center",
        }}
      >
        {sectionTitles[tab]} FAQs
      </Typography>
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.main",
          p: isMobile ? 2 : 4,
          borderRadius: isMobile ? 4 : 6,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ width: "100 " }}
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{
                width: "100%",
                gap: 1,
                px: { xs: 1, md: 4 },
              }}
            >
              {FAQ_DATA[tab].map((item, i) => (
                <Box
                  key={item.q}
                  sx={{
                    width: "100%",
                  }}
                >
                  <Accordion
                    elevation={1}
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
                      "&:before": { display: "none" },
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                        {item.q}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography sx={{ fontSize: 15, color: "grey.700" }}>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
