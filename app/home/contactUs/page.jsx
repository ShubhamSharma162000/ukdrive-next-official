"use client";

import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import api from "../../../lib/api";
import { toast } from "sonner";

export default function ContactPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = ({ name, phone, email, message }) => {
    if (!name.trim()) {
      return "Name is required";
    }

    if (!/^[a-zA-Z\s]{2,50}$/.test(name)) {
      return "Enter a valid name";
    }

    if (!phone.trim()) {
      return "Phone number is required";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return "Enter a valid 10-digit Indian mobile number";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Enter a valid email address";
    }

    if (!message.trim()) {
      return "Message is required";
    }

    if (message.length < 10) {
      return "Message should be at least 10 characters";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm(formData);
    if (error) {
      toast.error(error);
      return;
    }

    const { name, phone, email, subject, message } = formData;

    if (!name || !phone || !message) {
      toast.error("!!", {
        description: "All Fields are required",
      });
      return;
    }

    try {
      setSubmitting(true);
      const res = await api.post("/api/v1/user/postuserquery", {
        name,
        phone,
        email,
        subject,
        message,
      });
      if (res?.data?.success) {
        toast.success("Message sent successfully", {
          description: "Our team will reach out to you shortly.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Failed to send message !! Try again later ");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh" }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "#fff",
          py: { xs: 6, md: 10 },
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={700}>
          Contact Us
        </Typography>
        <Typography mt={2} sx={{ maxWidth: 700, mx: "auto", opacity: 0.9 }}>
          Have questions, feedback, or business inquiries? We’re here to help
          and would love to hear from you.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, py: 6 }}>
        <Grid container spacing={4}>
          <Stack direction={isMobile ? "column" : "row"} spacing={8}>
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                <Typography variant="h5" fontWeight={600}>
                  Get in Touch
                </Typography>

                <Typography color="text.secondary">
                  Reach us via phone, email, or visit our office. Our support
                  team responds within 24 hours.
                </Typography>

                <Paper sx={infoCardStyle}>
                  <PhoneIcon color="primary" />
                  <Box>
                    <Typography fontWeight={600}>Phone</Typography>
                    <Typography color="text.secondary">
                      +91 95205 59469
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={infoCardStyle}>
                  <EmailIcon color="primary" />
                  <Box>
                    <Typography fontWeight={600}>Email</Typography>
                    <Typography color="text.secondary">
                      support@ukdrive.in
                    </Typography>
                  </Box>
                </Paper>

                <Paper sx={infoCardStyle}>
                  <LocationOnIcon color="primary" />
                  <Box>
                    <Typography fontWeight={600}>Office Address</Typography>
                    <Typography color="text.secondary">
                      Durgapuri, Kotdwara, Uttarakhand – 246149, India
                    </Typography>
                  </Box>
                </Paper>

                <Divider />

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 2 }}
                >
                  Office Hours: <br />
                  Mon – Sat: 9:00 AM – 7:00 PM
                </Typography>
              </Stack>
            </Grid>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/support%20image.png"
                alt="Contact Us"
                sx={{
                  maxWidth: "100%",
                  maxHeight: 320,
                  objectFit: "contain",
                }}
              />
            </Box>
          </Stack>
          <Grid item xs={12} md={7}>
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" fontWeight={600} mb={1}>
                Send Us a Message
              </Typography>
              <Typography color="text.secondary" mb={3}>
                Fill out the form below and our team will contact you shortly.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                textAlign={isMobile ? "center" : ""}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ width: isMobile ? 300 : 250 }}
                      fullWidth
                      label="Your Name"
                      placeholder="Enter full name"
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{ width: isMobile ? 300 : 250 }}
                      fullWidth
                      label="Phone Number"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ width: isMobile ? 300 : 250 }}
                      fullWidth
                      label="Email Address"
                      placeholder="your@email.com"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{ width: isMobile ? 300 : 250 }}
                      fullWidth
                      label="Subject"
                      placeholder="How can we help?"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      sx={{ width: isMobile ? 300 : 1050 }}
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      placeholder="Write your message here..."
                      required
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} textAlign="center">
                  <Button
                    type="submit"
                    size="medium"
                    variant="contained"
                    endIcon={<SendIcon />}
                    disabled={submitting}
                    sx={{
                      mt: 3,
                      py: 1.4,
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: 16,
                      px: 5,
                    }}
                  >
                    {submitting ? "Sending..." : "Submit Message"}
                  </Button>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Paper
          sx={{
            mt: 5,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={1}>
            Connect With Us
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Follow us on social media or reach out directly via email.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              component="a"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/m-a-ride-sharing-llp-9826bb398",
                  "_blank"
                )
              }
              target="_blank"
              startIcon={<LinkedInIcon />}
              sx={socialBtn}
            >
              LinkedIn
            </Button>
            <Button
              component="a"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/ukdrive_uk15?igsh=NXNycTc5OThlenF4",
                  "_blank"
                )
              }
              target="_blank"
              startIcon={<InstagramIcon />}
              sx={socialBtn}
            >
              Instagram
            </Button>

            <Button
              component="a"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/share/16KKwdxtb7/",
                  "_blank"
                )
              }
              target="_blank"
              startIcon={<FacebookIcon />}
              sx={socialBtn}
            >
              Facebook
            </Button>

            <Button
              component="a"
              href="mailto:support@ukdrive.in"
              startIcon={<EmailIcon />}
              sx={socialBtn}
            >
              Email
            </Button>

            <Button
              component="a"
              onClick={() =>
                window.open(
                  "https://youtube.com/@ukdrive-15?si=senzZ8V7WuTQN4C_",
                  "_blank"
                )
              }
              target="_blank"
              startIcon={<YouTubeIcon />}
              sx={socialBtn}
            >
              YouTube
            </Button>
          </Box>
        </Paper>

        <Box mt={6}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Find Us on Map
          </Typography>

          <Paper sx={{ overflow: "hidden", borderRadius: 3 }}>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Kotdwara%20Uttarakhand&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

const infoCardStyle = {
  p: 2,
  display: "flex",
  gap: 2,
  alignItems: "center",
  borderRadius: 2,
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  },
};

const socialBtn = {
  px: 2.5,
  py: 1.2,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  color: "text.primary",
  textTransform: "none",
  fontWeight: 500,
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    bgcolor: "primary.main",
    color: "#fff",
    borderColor: "primary.main",
  },
};
