"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import api from "@/lib/api";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  Card,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
  CircularProgress,
  CardContent,
} from "@mui/material";
import { AuthContext } from "@/context/authContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Image from "next/image";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast, Toaster } from "sonner";
import CarBookingConfirmForm from "../../../components/rent-vehicle/carBookingConfirmForm";

export default function VehicleDetailsPage() {
  const { id } = useParams();
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const { isAuthenticated } = useContext(AuthContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openConsult, setOpenConsult] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [consultLoading, setConsultLoading] = useState(false);
  const [days, setDays] = useState(1);
  const [loadingDays, setLoadingDays] = useState(false);
  const [confirmFormOpen, setConfirmFormOpen] = useState(false);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await api.get(`/api/v1/vehicle/getvehicle/${id}`);
        if (res.data.success) {
          setCar(res?.data?.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  const minDays = car?.type === "Luxury" ? 2 : 1;

  useEffect(() => {
    if (!car) return;

    setDays((prev) => Math.max(prev, minDays));
  }, [car?.type]);

  const handleConfirmBooking = () => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    setConfirmFormOpen(true);
  };

  const validateConsultForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name can contain only letters";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const consultBeforeBooking = async () => {
    try {
      if (!validateConsultForm()) {
        return;
      }
      const res = await api.post(`/api/v1/booking/consultbeforebooking`, {
        carId: car?._id,
        name: name,
        phone: phone,
        vehicleName: car?.vehicleName,
      });
      if (res?.data?.success) {
        toast.success(res?.data?.message, {
          description: "Thanks !! Our team will contact you shortly",
        });
        setConsultLoading(false);
        setOpenConsult(false);
      }
    } catch (error) {
      toast.error(error?.res?.data?.message, {
        description: "Sorry , try again later ",
      });
    }
  };

  const updateDays = (type) => {
    setDays((prev) => {
      if (type === "dec") {
        return Math.max(prev - 1, minDays);
      }
      return prev + 1;
    });
  };

  const handleShare = () => {
    const shareData = {
      title: "UKDrive – Rent a Vehicle",
      text: "Check out this vehicle on UKDrive. Easy booking, affordable pricing.",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard");
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "4px solid #e5e7eb",
            borderTop: "4px solid #03167d",
            animation: "spin 1s linear infinite",
          }}
        />
        <Typography fontWeight={700} color="grey.700">
          Loading vehicle details…
        </Typography>

        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </Box>
    );
  }

  if (!car) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 1.5,
          px: 2,
        }}
      >
        <Typography variant="h5" fontWeight={800} color="#03167d">
          Vehicle Not Found
        </Typography>

        <Typography color="grey.600">
          The vehicle you’re looking for doesn’t exist or has been removed.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 2, borderRadius: 2 }}
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
        }}
      >
        <Box>
          <Box
            ref={sliderRef}
            onScroll={() => {
              const slider = sliderRef.current;
              if (!slider) return;

              const index = Math.round(slider.scrollLeft / slider.offsetWidth);
              setActiveIndex(index);
            }}
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {car?.images?.map((img, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "100%",
                  scrollSnapAlign: "center",
                }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    height: { xs: 260, sm: 320, md: 580 },
                  }}
                >
                  <Image
                    src={img.url}
                    alt={`Car image ${index + 1}`}
                    width={500}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                  />
                </Card>
              </Box>
            ))}
          </Box>
          <Stack direction="row" justifyContent="center" spacing={1} mt={1.5}>
            {car?.images?.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: activeIndex === i ? 10 : 8,
                  height: activeIndex === i ? 10 : 8,
                  borderRadius: "50%",
                  bgcolor: activeIndex === i ? "#03167d" : "#c5c7d0",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Stack>
        </Box>

        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Chip label="NEW" color="info" />
            <Box>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton onClick={handleShare}>
                <ShareIcon />
              </IconButton>
            </Box>
          </Stack>

          <Typography variant="h4" fontWeight={700} mt={2}>
            {car?.vehicleName}
          </Typography>

          <Typography color="#f7750bff" mt={1}>
            ★★★★☆
          </Typography>

          <Stack direction="row" spacing={2} mt={2} alignItems="center">
            <Typography sx={{ textDecoration: "line-through", color: "gray" }}>
              {car?.rentPerDay + 2000}
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              ₹{car?.rentPerDay}
            </Typography>
          </Stack>

          <Typography color="text.secondary" mt={2}>
            {car?.description}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#1a237e",
                letterSpacing: 0.5,
              }}
            >
              Vehicle Details
            </Typography>

            <Stack spacing={1.8}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocalGasStationIcon sx={{ color: "#3f51b5" }} />
                <Typography sx={{ fontWeight: 600, color: "#333" }}>
                  Fuel Type:
                  <Box
                    component="span"
                    sx={{ ml: 2, fontWeight: 700, color: "#3f51b5" }}
                  >
                    {car?.fuelType}
                  </Box>
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <AirlineSeatReclineNormalIcon sx={{ color: "#009688" }} />
                <Typography sx={{ fontWeight: 600, color: "#333" }}>
                  Seating Capacity:
                  <Box
                    component="span"
                    sx={{ ml: 2, fontWeight: 700, color: "#3f51b5" }}
                  >
                    {car?.seatingCapacity}
                  </Box>
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <DirectionsCarIcon sx={{ color: "#ff7043" }} />
                <Typography sx={{ fontWeight: 600, color: "#333" }}>
                  Vehicle Type:
                  <Box
                    component="span"
                    sx={{ ml: 2, fontWeight: 700, color: "#3f51b5" }}
                  >
                    {car?.type}
                  </Box>
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          {car?.type === "Luxury" && (
            <Card
              sx={{
                my: 2,
                borderRadius: 3,
                bgcolor: "#0b0489ff",
                color: "#FFD700",
              }}
            >
              <CardContent
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <StarIcon />
                <Typography fontWeight={500}>
                  Minimum booking period for luxury cars is 2 days.
                </Typography>
              </CardContent>
            </Card>
          )}

          <Box
            sx={{
              p: 2.5,
              borderRadius: 3,
              bgcolor: "#f9fafc",
              border: "1px solid #e0e0e0",
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{ mb: 1.5, color: "#1a237e" }}
            >
              Select Booking Days
            </Typography>

            <Stack direction="row" alignItems="center" spacing={3}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  px: 1.5,
                  py: 1,
                  bgcolor: "#fff",
                }}
              >
                <IconButton
                  onClick={() => updateDays("dec")}
                  disabled={days <= minDays || loadingDays}
                  sx={{
                    bgcolor: "#0A5CFF",
                    color: "#fff",
                    "&:hover": { bgcolor: "#084bcc" },
                  }}
                >
                  <RemoveIcon />
                </IconButton>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  minWidth={24}
                  textAlign="center"
                >
                  {loadingDays ? <CircularProgress size={22} /> : days}
                </Typography>

                <IconButton
                  onClick={() => updateDays("inc")}
                  disabled={loadingDays}
                  sx={{
                    bgcolor: "#0A5CFF",
                    color: "#fff",
                    "&:hover": { bgcolor: "#084bcc" },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>

              <Box>
                <Typography variant="body2" color="text.secondary">
                  ₹{car?.rentPerDay} / day
                </Typography>
                <Typography variant="subtitle1" fontWeight={700}>
                  Total: ₹{car?.rentPerDay * days}
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Stack
            direction="row"
            spacing={2}
            alignItems={isMobile ? "center" : ""}
            justifyContent={isMobile ? "center" : ""}
          >
            <Button
              onClick={handleConfirmBooking}
              startIcon={<CheckCircleOutlineIcon />}
              variant="contained"
              color="primary"
              sx={{ px: 4, py: 1.5 }}
            >
              Confirm
            </Button>

            <Button
              onClick={() => setOpenConsult(true)}
              startIcon={<SupportAgentIcon />}
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: "#1a7f37",
                "&:hover": { bgcolor: "#14632c" },
              }}
            >
              Consult
            </Button>
          </Stack>
        </Box>
      </Box>

      <Stack spacing={2.5} mt={5}>
        <Card
          sx={{
            p: 3,
            borderRadius: 4,
            bgcolor: "#e0e8fdff",
            border: "1px solid #e0e6ff",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0 12px 30px rgba(3,22,125,0.12)",
            },
          }}
        >
          <Stack spacing={1.4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleOutlineIcon sx={{ color: "#03167d" }} />
              <Typography fontWeight={700} fontSize={18}>
                Confirm Booking
              </Typography>
            </Stack>

            <Typography
              fontSize={13}
              fontWeight={600}
              sx={{ color: "#03167d" }}
            >
              Secure your vehicle instantly with guaranteed availability
            </Typography>

            <Typography fontSize={14} color="text.secondary">
              Proceed with booking by paying the booking amount. Once payment is
              completed, the vehicle is safely reserved exclusively for you,
              ensuring confirmed availability and a worry-free booking
              experience.
            </Typography>
          </Stack>
        </Card>

        <Card
          sx={{
            p: 3,
            borderRadius: 4,
            bgcolor: "#e5faf0ff",
            border: "1px dashed #c7e6d3",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0 12px 30px rgba(26,127,55,0.12)",
            },
          }}
        >
          <Stack spacing={1.4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <SupportAgentIcon sx={{ color: "#1a7f37" }} />
              <Typography fontWeight={700} fontSize={18}>
                Consult Before Booking
              </Typography>
            </Stack>

            <Typography
              fontSize={13}
              fontWeight={600}
              sx={{ color: "#1a7f37" }}
            >
              Get expert guidance before making any payment
            </Typography>

            <Typography fontSize={14} color="text.secondary">
              Talk to our support team to confirm availability, pricing, or any
              other details before booking. This free consultation helps you
              choose the right vehicle with complete confidence and zero
              pressure.
            </Typography>
          </Stack>
        </Card>
      </Stack>

      <Divider sx={{ my: 3 }} />
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent={isMobile ? "center" : "space-between"}
        mx={isMobile ? 2 : 20}
        mt={8}
      >
        <TrustItem
          icon={<VerifiedUserIcon />}
          title="Verified Vehicles"
          description="All rental vehicles are thoroughly verified, professionally inspected, and carefully approved by our quality team before being listed on the platform."
        />

        <TrustItem
          icon={<AssignmentTurnedInIcon />}
          title="Valid Documents"
          description="Every vehicle is provided with valid and up-to-date RC, insurance, and required permits, ensuring complete legal compliance and peace of mind throughout your journey."
        />

        <TrustItem
          icon={<BuildCircleIcon />}
          title="Regular Maintenance"
          description="Vehicles are regularly serviced and carefully maintained to ensure smooth performance, maximum safety, and enhanced comfort."
        />
      </Stack>
      <Dialog
        open={openConsult}
        onClose={() => setOpenConsult(false)}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: { borderRadius: 4, p: 1 },
        }}
      >
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SupportAgentIcon sx={{ color: "#1a7f37" }} />
          <Typography fontWeight={700} fontSize={18}>
            Consult Before Booking
          </Typography>

          <IconButton onClick={() => setOpenConsult(false)} sx={{ ml: "auto" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2.5} mt={1}>
            <Typography fontSize={14} color="text.secondary">
              Share your details and our support team will contact you shortly
              to assist with availability, pricing, or any questions.
            </Typography>

            <TextField
              label="Your Name"
              fullWidth
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />

            <TextField
              label="Phone Number"
              fullWidth
              size="small"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />

            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                py: 1.2,
                fontWeight: 700,
                textTransform: "none",
                bgcolor: "#1a7f37",
                "&:hover": { bgcolor: "#14632c" },
              }}
              onClick={consultBeforeBooking}
            >
              {consultLoading ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "#fff",
                  }}
                />
              ) : (
                "Request Callback"
              )}
            </Button>

            <Typography textAlign="center" fontSize={13} color="text.secondary">
              OR
            </Typography>

            <Button
              variant="outlined"
              startIcon={<CallIcon />}
              sx={{
                borderRadius: 3,
                py: 1.1,
                fontWeight: 700,
                textTransform: "none",
                borderColor: "#1a7f37",
                color: "#1a7f37",
                "&:hover": {
                  bgcolor: "#eaf7ef",
                  borderColor: "#1a7f37",
                },
              }}
              onClick={() => {
                window.location.href = "tel:+01382297500";
              }}
            >
              Call Customer Support
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
      <CarBookingConfirmForm
        open={confirmFormOpen}
        onClose={() => {
          setConfirmFormOpen(false);
        }}
        car={car}
        days={days}
      />
    </Box>
  );
}

const TrustItem = ({ icon, title, description }) => (
  <Box
    textAlign="center"
    sx={{
      maxWidth: 260,
      p: 3,
      borderRadius: 3,
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
        bgcolor: "#f5f8ff",
      },
    }}
  >
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        bgcolor: "#e8efff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        mb: 2,
        color: "#3f51b5",
        fontSize: 28,
      }}
    >
      {icon}
    </Box>

    <Typography fontWeight={700} fontSize={18}>
      {title}
    </Typography>

    <Typography color="text.secondary" fontSize={14} mt={1}>
      {description}
    </Typography>
  </Box>
);
