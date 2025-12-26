"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import ShareIcon from "@mui/icons-material/Share";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function ReferAndEarn() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0f1724 0%, #121c2d 100%)",
        color: "white",
        borderRadius: { md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Chip
            label="REFER & EARN"
            sx={{
              bgcolor: "rgba(89,134,247,0.15)",
              color: "#5986f7",
              fontWeight: 700,
              mb: 2,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Invite Friends. <br /> Earn on Every Ride.
          </Typography>

          <Typography
            sx={{
              maxWidth: 520,
              mx: "auto",
              color: "rgba(255,255,255,0.8)",
              fontSize: 18,
            }}
          >
            Share UKDrive with your friends. When they ride, you earn rewards —
            simple and transparent.
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          {[
            {
              icon: <ShareIcon />,
              title: "Share Your Code",
              desc: "Invite friends using your unique referral code.",
            },
            {
              icon: <DirectionsCarIcon />,
              title: "Friend Takes a Ride",
              desc: "Your friend completes their first UKDrive trip.",
            },
            {
              icon: <CurrencyRupeeIcon />,
              title: "You Earn Rewards",
              desc: "Get instant rewards directly in your UKDrive wallet.",
            },
          ].map((step, index) => (
            <Card
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              sx={{
                flex: 1,
                borderRadius: 4,
                background: "linear-gradient(180deg, #1a2538 0%, #141e30 100%)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 3,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(89,134,247,0.15)",
                    color: "#5986f7",
                    fontSize: 32,
                  }}
                >
                  {step.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{ color: "#5986f7", fontWeight: 700, mb: 1 }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{ color: "rgba(255,255,255,0.75)", fontSize: 15 }}
                >
                  {step.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          sx={{
            mt: 8,
            textAlign: "center",
            bgcolor: "rgba(255,255,255,0.04)",
            borderRadius: 4,
            p: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, color: "#5986f7", mb: 1 }}
          >
            Earn ₹100 on Every Successful Referral
          </Typography>

          <Typography
            sx={{
              mb: 4,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            No limits. More referrals = more earnings.
          </Typography>

          <Button
            size="large"
            variant="contained"
            href="https://play.google.com/store/search?q=ukdrive&c=apps"
            sx={{
              bgcolor: "#5986f7",
              px: 5,
              py: 1.6,
              fontSize: 17,
              fontWeight: 700,
              borderRadius: 3,
              boxShadow: "0 15px 35px rgba(89,134,247,0.4)",
              "&:hover": {
                bgcolor: "#4b76e8",
              },
            }}
          >
            Invite Friends Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
