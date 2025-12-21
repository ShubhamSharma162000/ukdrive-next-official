"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import api from "@/lib/api";
import { toast } from "sonner";

export default function CarBookingConfirmForm({ open, onClose, car, days }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.address || formData.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error for this field only
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      await loadRazorpay();

      const res = await api.post("/api/v1/payment/create-order-car-booking", {
        amount: car?.rentPerDay * days,
        carId: car?._id,
        vehicleName: car?.vehicleName,
      });
      console.log("ORDER CREATED:", res.data);
      const order = res?.data?.order;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        // amount: 1,    order?.amount
        amount: 1,
        currency: "INR",
        name: "UKDrive",
        description: `${car?.vehicleName} Confirmation Payment`,
        order_id: order?.id,

        handler: async function (response) {
          const verifyRes = await api.post(
            "/api/v1/payment/verify-order-car-booking",
            {
              razorpay_order_id: response?.razorpay_order_id,
              razorpay_payment_id: response?.razorpay_payment_id,
              razorpay_signature: response?.razorpay_signature,
              bookingId: order?.id,
              formData: formData,
              vehicleName: car?.vehicleName,
              bookingDays: days,
              rentPrice: car?.rentPerDay * days,
            }
          );
          console.log(verifyRes);
          if (verifyRes?.data?.success) {
            toast.success("Booking Confirmed ", {
              description: "Thanks !! Our team will contact you shortly",
            });
            onClose();
          } else {
            toast.success("Booking Cancel", {
              description: "Thanks !! Our team will contact you shortly",
            });
          }
        },

        prefill: {
          name: "UKDrive",
          contact: "",
        },

        theme: {
          color: "#0A5CFF",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 700 }}>Booking Details</DialogTitle>

      <DialogContent>
        <Stack spacing={2.5} mt={1}>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            error={Boolean(errors.name)}
            helperText={errors.name || ""}
          />

          <TextField
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            fullWidth
            required
            inputProps={{ maxLength: 10 }}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile || ""}
          />

          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
            required
            error={Boolean(errors.address)}
            helperText={errors.address || ""}
          />

          <TextField
            label="Vehicle Name"
            value={car?.vehicleName}
            fullWidth
            disabled
          />

          <TextField
            label="Booking Days"
            value={car?.rentPerDay * days}
            fullWidth
            disabled
          />

          <Box
            sx={{
              p: 2,
              bgcolor: "#f5f7ff",
              borderRadius: 2,
              border: "1px solid #dbe1ff",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#1a237e"
              gutterBottom
            >
              Important Information
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Documentation will be completed at the time of car delivery.
              Please keep your <strong>Driving License</strong> and
              <strong> Aadhaar Card</strong> ready at the destination.
            </Typography>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{ px: 4 }}
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}
