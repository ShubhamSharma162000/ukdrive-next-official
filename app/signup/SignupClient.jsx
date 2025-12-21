"use client";
import React, { useContext, useMemo, useState } from "react";
import Head from "next/head";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Select,
  MenuItem,
  FormControl,
  Stack,
  Link,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/api";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";
import OTPInput from "../utils/OTPInput";
import { toast } from "sonner";
import { AuthContext } from "@/context/authContext";

const isValidPhone = (phone) => {
  return /^[0-9]{10}$/.test(phone);
};

export default function SignUpPage() {
  const router = useRouter();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);
  const [country, setCountry] = React.useState("+91");
  const [phone, setPhone] = React.useState("");
  const [sessionId, setSessionId] = useState();
  const [otp, setOtp] = useState("");
  const [openVerifyOTP, setOpenVerifyOTP] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!isValidPhone(phone)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setSendingOtp(true);
    try {
      const res = await api.post("/api/v1/auth/user-signup", {
        phoneNumber: phone,
        isRegistration: true,
      });
      console.log(res);
      if (res?.data?.success) {
        setSessionId(res?.data?.sessionId);
        setOpenVerifyOTP(true);
        setSendingOtp(false);
      }
    } catch (err) {
      toast.error(err.response?.data?.message, {
        description: "Error while sending OTP",
      });
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setVerifying(true);
    try {
      const res = await api.post("/api/v1/auth/verifyotp", {
        otp: otp,
        sessionId: sessionId,
        isRegistration: true,
      });
      console.log(res);
      if (res?.data?.success) {
        toast.success("OTP Verified 🎉", {
          description: "Redirecting you to home...",
        });

        router.push(redirect);

        setUser(res.data.user);
        setIsAuthenticated(true);
        setVerifying(false);
      }
    } catch (err) {
      toast.error(err.response?.data?.message, {
        description: "Something went wrong",
      });
      setVerifying(false);
      console.error("Error sending OTP:", err);
    }
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          width: "100%",
          position: "fixed",
          top: 0,
          left: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        })}
      >
        <img src={"/logo.png"} alt="logo" style={{ width: 172, height: 172 }} />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, cursor: "pointer", color: "white", mr: 3 }}
        >
          Need help?
        </Typography>
      </Box>

      <Head>
        <title>Siguo to UKDrive</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Box
        sx={(theme) => ({
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: theme.palette.primary.main,
          p: 3,
        })}
      >
        <Card
          elevation={6}
          sx={{
            width: { xs: "95%", sm: 520 },
            borderRadius: 3,
            py: 6,
            px: 4,
          }}
        >
          <CardContent sx={{ px: 0 }}>
            {/* <Box sx={{ textAlign: "center", mb: 3 }}>
              <img
                src={"/logo.png"}
                alt="StoreWings logo"
                style={{ width: 96, height: 96, objectFit: "contain" }}
              />
            </Box> */}
            {!openVerifyOTP && (
              <>
                <Typography
                  variant="h5"
                  component="h1"
                  align="center"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  Sign Up to Ukdrive
                </Typography>

                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Please enter your mobile no.
                </Typography>
              </>
            )}
            {openVerifyOTP && (
              <Typography
                variant="subtitle2"
                align="center"
                sx={{ fontWeight: 500, mb: 4 }}
              >
                {`We have sent a 6-digit OTP to ${phone}, please enter the code in below box to verify your phone number.`}
              </Typography>
            )}

            <Box component="form" onSubmit={(e) => e.preventDefault()}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <TextField
                  placeholder="Enter phone number"
                  value={phone}
                  disabled={openVerifyOTP}
                  onChange={(e) => setPhone(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          size="small"
                          sx={{ maxWidth: 72 }}
                          variant="standard"
                        >
                          <MenuItem value={"+91"}> +91</MenuItem>
                          <MenuItem value={"+1"}>+11</MenuItem>
                          <MenuItem value={"+44"}>+44</MenuItem>
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              {openVerifyOTP && (
                <>
                  <OTPInput value={otp} onChange={setOtp} />

                  <Box sx={{ mt: 3 }}>
                    <LoadingButton
                      fullWidth
                      loading={verifying}
                      loadingPosition="start"
                      loadingIndicator={
                        <CircularProgress size={18} sx={{ color: "#fff" }} />
                      }
                      onClick={handleVerifyOtp}
                      disabled={otp?.length !== 6 || verifying}
                      variant="contained"
                      sx={(theme) => ({
                        bgcolor: theme.palette.primary.main,
                        py: 1.6,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 700,
                        color: "#fff",

                        "&.Mui-disabled": {
                          color: "#fff",
                          bgcolor: theme.palette.primary.main,
                          opacity: 0.6,
                        },
                      })}
                    >
                      {verifying ? "Verifying..." : "Verify OTP"}
                    </LoadingButton>
                  </Box>
                </>
              )}

              {!openVerifyOTP && (
                <Button
                  fullWidth
                  type="submit"
                  onClick={handleSendOtp}
                  disabled={sendingOtp}
                  variant="contained"
                  sx={{
                    py: 1.6,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  {sendingOtp ? (
                    <CircularProgress size={22} sx={{ color: "#fff" }} />
                  ) : (
                    "Send OTP"
                  )}
                </Button>
              )}

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{ color: "text.primary" }}
                  onClick={() => router.back()}
                >
                  &lt; Back
                </Link>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{ mt: 2 }}
              >
                <Typography variant="body2" color="text.secondary">
                  Already have an account?
                </Typography>

                <Link
                  href="/login"
                  underline="none"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    cursor: "pointer",
                  }}
                >
                  LogIn
                </Link>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
