import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CarCategorySection() {
  const categories = [
    {
      title: "Sedans",
      desc: `Your best rental-like option, perfect for road trips with your 
family or group outings with ample space and comfort for 5–6 passengers.`,
      btn: "RENT SEDANS",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/sedan.jpg",
    },
    {
      title: "Hatchbacks",
      desc: `Want the most budget-friendly option? Spacious, convenient, and fuel-efficient. 
Great for daily commutes and city rides.`,
      btn: "HATCHBACKS",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/FAMLIY%20CAR.jpg",
    },
    {
      title: "Electric Cars",
      desc: `Go green with electric vehicles! Eco-friendly, cost-saving, and perfect 
for city commutes and weekend getaways.`,
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/electric.jpg",
      btn: "EVs",
    },
    {
      title: "SUVs and Family Cars",
      desc: `Spacious, powerful, and perfect for long trips and family travel. 
Comfortable for 6–7 passengers with extra luggage room.`,
      btn: "SUVs",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/xuv.webp",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 0 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: 1,
            bgcolor: "grey.300",
            borderRadius: 2,
          }}
        />

        <motion.div
          style={{ display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 900,
              mb: 2,
              position: "relative",
              display: "inline-block",
              color: "#03167d",
              px: 1,
              "&:after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-120%",
                width: "50%",
                height: "100%",
                background:
                  "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                transform: "skewX(-20deg)",
                animation: "shine 3s infinite",
              },
              "@keyframes shine": {
                "0%": { left: "-120%" },
                "60%": { left: "160%" },
                "100%": { left: "160%" },
              },
            }}
          >
            Perfect Car for Every Journey in India
          </Typography>
        </motion.div>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          color: "grey.700",
          fontSize: { xs: 16, md: 18 },
          lineHeight: 1.6,
          mb: { xs: 5, md: 8 },
          px: 2,
        }}
      >
        Whether you're traveling with family, heading out for a solo ride, or
        simply looking for a premium rental—UKDrive has the perfect car for
        every journey.
      </Typography>

      <Grid
        container
        spacing={{ xs: 6, md: 6 }}
        sx={{
          width: "100%",
          maxWidth: "100%",
          mx: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {categories.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#1A1A1A",
                  fontSize: { xs: 20, md: 22 },
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  width: 300,
                  aspectRatio: "3 / 2",
                  position: "relative",
                  borderRadius: 5,
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Typography
                sx={{
                  color: "grey.600",
                  lineHeight: 1.6,
                  mb: 3,
                  mt: 1,
                  fontSize: { xs: 14.5, md: 15.5 },
                  maxWidth: 260,
                }}
              >
                {item.desc}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#000",
                  color: "white",
                  py: 1.4,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  "&:hover": {
                    bgcolor: "#222",
                  },
                }}
              >
                {item.btn} IN INDIA
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
