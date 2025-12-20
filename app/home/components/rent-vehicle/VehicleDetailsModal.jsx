"use client";

import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
  Rating,
} from "@mui/material";

export default function VehicleDetailsModal({ open, onClose, car }) {
  if (!car) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" fontWeight={800}>
            {car.vehicleName}
          </Typography>
          <Chip label={car.type} color="primary" />
        </Stack>

        {/* IMAGE */}
        <Box
          component="img"
          src={car.images?.[0]?.url}
          sx={{
            width: "100%",
            height: 260,
            objectFit: "cover",
            borderRadius: 2,
            mt: 2,
          }}
        />

        {/* BASIC INFO */}
        <Stack spacing={1} mt={2}>
          <Typography>
            <b>Fuel:</b> {car.fuelType}
          </Typography>
          <Typography>
            <b>Seats:</b> {car.seatingCapacity}
          </Typography>
          <Typography>
            <b>Pickup Location:</b> {car.pickupLocation}
          </Typography>
          <Typography>
            <b>Status:</b>{" "}
            <Chip
              size="small"
              label={car.status}
              color={car.status === "available" ? "success" : "error"}
            />
          </Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* PRICING */}
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight={700}>₹{car.rentPerDay} / day</Typography>
          <Typography>Deposit: ₹{car.securityDeposit}</Typography>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* DESCRIPTION */}
        <Typography fontWeight={700}>Description</Typography>
        <Typography color="grey.700" mt={0.5}>
          {car.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* REVIEWS (STATIC DEMO – CONNECT API LATER) */}
        <Typography fontWeight={700}>Reviews</Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography>(4.5 / 5)</Typography>
        </Stack>

        <Typography color="grey.600" mt={1}>
          “Very smooth ride and well maintained vehicle.”
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* CTA */}
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" fullWidth onClick={onClose}>
            Close
          </Button>

          <Button variant="contained" fullWidth sx={{ fontWeight: 700 }}>
            Continue Booking
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
