import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UKdriveIntro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        sx={{
          width: "100%",
          py: { xs: 8, md: 12 },
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          background: "linear-gradient(160deg, #f6f8faff 0%, #9eacf4ff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
            top: -80,
            right: -80,
            opacity: 0.4,
            filter: "blur(70px)",
            animation: "float 8s ease-in-out infinite alternate",
            "@keyframes float": {
              "0%": { transform: "translateY(0px)" },
              "100%": { transform: "translateY(25px)" },
            },
          }}
        />
        {!isMobile && (
          <>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                position: "absolute",
                left: { xs: -10, md: 40 },
                top: { xs: 40, md: 80 },
                zIndex: 1,
              }}
            >
              <Image
                src="/example.jpeg"
                alt="Ride Illustration"
                width={260}
                height={260}
                style={{
                  opacity: 0.9,
                  filter: "drop-shadow(0px 12px 25px rgba(0,0,0,0.15))",
                }}
              />
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                position: "absolute",
                right: { xs: -10, md: 40 },
                top: { xs: 60, md: 100 },
                zIndex: 1,
              }}
            >
              <Image
                src="/example.jpeg"
                alt="App Screenshot"
                width={260}
                height={520}
                style={{
                  borderRadius: "24px",
                  boxShadow: "0px 10px 40px rgba(0,0,0,0.28)",
                }}
              />
            </Box>
          </>
        )}
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "#05266B",
            letterSpacing: "-0.5px",
            opacity: 0.95,
          }}
        >
          Ride Anywhere, Anytime with
        </Typography>

        <Typography
          component={motion.div}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
          variant="h2"
          sx={{
            fontWeight: 900,
            mt: 1,
            background:
              "linear-gradient(90deg, #b02bea 0%, #6a11cb 40%, #2575fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-1px",
            textShadow: "0px 4px 18px rgba(176,43,234,0.22)",
          }}
        >
          UKDrive
        </Typography>

        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          variant="h6"
          sx={{
            mt: 3,
            maxWidth: 680,
            lineHeight: 1.55,
            color: "rgba(0,0,0,0.75)",
            fontSize: { xs: 15, md: 18 },
          }}
        >
          Smart, fast and affordable daily rides across Uttarakhand. Enjoy{" "}
          <Box
            component="span"
            sx={{
              px: 0.6,
              borderRadius: 1,
              bgcolor: "rgba(255,215,0,0.6)",
              fontWeight: 700,
            }}
          >
            zero convenience fees
          </Box>{" "}
          for life.
        </Typography>

        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <Avatar sx={{ bgcolor: "#4CAF50", width: 48, height: 48 }}>A</Avatar>
          <Avatar sx={{ bgcolor: "#66BB6A", width: 48, height: 48 }}>N</Avatar>
          <Avatar sx={{ bgcolor: "#81C784", width: 48, height: 48 }}>L</Avatar>

          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 600,
              color: "rgba(0,0,0,0.8)",
            }}
          >
            Trusted by 50,000+ Riders
          </Typography>
        </Stack>

        <Button
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200 }}
          variant="contained"
          sx={{
            mt: 6,
            fontSize: 18,
            px: 5,
            py: 1.6,
            borderRadius: 3,
            textTransform: "none",
            backgroundColor: "#000",
            color: "#fff",
            boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#1A1A1A",
              boxShadow: "0 6px 22px rgba(0,0,0,0.35)",
            },
          }}
          startIcon={<FlashOnIcon />}
        >
          Download App
        </Button>
      </Box>
    </>
  );
}
