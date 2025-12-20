import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PremiumCarSlider from "../home/components/premiumCarSlider";
import CarCategorySection from "../home/components/carCategorySection";
import RecentBlogSlider from "../home/components/recentBlogSlider";
import UkdriveStories from "../home/components/ukdriveStories";
import FaqSection from "../home/components/faqSection";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "@/context/authContext";
import UkdriveShowcase from "./components/ukDriveShowcase";
import UKdriveIntro from "./components/ukDriveIntro";
import { motion } from "framer-motion";
import ServiceShowcase from "./components/ServiceShowcase";
import { useRouter } from "next/navigation";
export default function UkdriveHome() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? 400 : 650,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/ukdrive%20banner%201.png"
          alt="Hero"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
            display: "block",
          }}
        />
      </Box>

      <ServiceShowcase />
      <UkdriveShowcase />
      <PremiumCarSlider />
      <CarCategorySection />
      <RecentBlogSlider />
      <UkdriveStories />
      <FaqSection />

      <Box
        sx={{
          width: "100%",
          mt: 6,
          display: "flex",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            maxWidth: 1100,
            width: "100%",
          }}
        >
          {[
            {
              title: "Quick Booking",
              desc: "Book a ride in under 10 seconds. Track your driver live on the map.",
            },
            {
              title: "Real-Time Tracking",
              desc: "Track your driver live on the map. See exact ETA and driver route.",
            },
            {
              title: "Secure Payments",
              desc: "Pay safely using multiple payment modes. Cashless & secure.",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  minHeight: 160,
                  p: { xs: 3, md: 4 },
                  mx: "auto",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 6px 18px rgba(13, 17, 23, 0.06)",
                  transition: "transform 0.28s, box-shadow 0.28s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(13, 17, 23, 0.12)",
                  },
                  background:
                    "linear-gradient(160deg, #d1dbf3ff 0%, #c6cdf3ff 100%)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.6 }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          px: 0,
        }}
      >
        <Box
          sx={{
            mt: 4,
            textAlign: "center",
            px: 4,
            py: 6,
            maxWidth: "100%",
            bgcolor: "secondary.light",
            color: "black",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Become a Driver & Earn More With UKDrive
          </Typography>

          <Typography sx={{ mt: 1, color: "text.secondary" }}>
            Join thousands of drivers already earning in Uttarakhand.
          </Typography>

          <Button
            component="a"
            href="https://play.google.com/store/search?q=ukdrive&c=apps"
            variant="contained"
            sx={{
              mt: 3,
              px: 4,
              py: 1.2,
              bgcolor: "secondary.main",
              "&:hover": { bgcolor: "secondary.dark" },
            }}
          >
            Join as Driver
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
