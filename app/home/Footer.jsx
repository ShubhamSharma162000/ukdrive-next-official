"use client";

import { Box, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        px: { xs: 3, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-start" }}
        spacing={4}
      >
        <Box sx={{ maxWidth: 320, textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            UKDrive
          </Typography>
          <Typography sx={{ mt: 1, color: "grey.400", lineHeight: 1.6 }}>
            Uttarakhand’s trusted ride-sharing platform. Safe, fast, and
            affordable rides anytime.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <IconButton
              sx={{ color: "white" }}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/share/16KKwdxtb7/",
                  "_blank"
                )
              }
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/ukdrive_uk15?igsh=NXNycTc5OThlenF4",
                  "_blank"
                )
              }
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              onClick={() =>
                window.open(
                  "https://youtube.com/@ukdrive-15?si=senzZ8V7WuTQN4C_",
                  "_blank"
                )
              }
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/m-a-ride-sharing-llp-9826bb398",
                  "_blank"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              sx={{ color: "white" }}
              component="a"
              href="mailto:support@ukdrive.in"
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Quick Links
          </Typography>
          <Stack spacing={1.2}>
            <Typography
              onClick={() => router.push("/home/aboutUs")}
              sx={{
                color: "grey.400",
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
            >
              About Us
            </Typography>
            <Typography
              onClick={() => router.push("/home/contactUs")}
              sx={{
                color: "grey.400",
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
            >
              Support
            </Typography>
            <Typography
              onClick={() => router.push("/home/rentVehicles")}
              sx={{
                color: "grey.400",
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
            >
              Rent a car
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Contact
          </Typography>

          <Link
            href="mailto:support@ukdrive.in"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                color: "grey.400",
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
            >
              <EmailIcon fontSize="small" />
              support@ukdrive.in
            </Typography>
          </Link>

          <Typography
            component="a"
            href="tel:01382297500"
            sx={{
              color: "grey.400",
              mt: 1,
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": { color: "white" },
            }}
          >
            01382-297500
          </Typography>

          <Typography sx={{ color: "grey.400", mt: 1 }}>
            Kotdwara, Uttarakhand
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          mt: 5,
          pt: 3,
          borderTop: "1px solid rgba(255,255,255,0.15)",
          textAlign: "center",
          color: "grey.500",
        }}
      >
        © {new Date().getFullYear()} UKDrive — All Rights Reserved
      </Box>
    </Box>
  );
}
