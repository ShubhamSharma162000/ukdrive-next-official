import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RecentBlogSlider() {
  const blogs = [
    {
      title: "Top Travel Bloggers Of India Who Give us Travel Goals",
      desc: "Their blogs have inspired us to travel the world and they have set an example for everyone. They believe that nothing can stop you from seeking adventures and exploring the globe",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/tourist-carrying-luggage.jpg",
      link: "https://share.google/HFzt8VYgpB3aQelHH",
    },
    {
      title: "Local Transport In India",
      desc: "India is a country where the crowds are relentless. It takes great time, patience, and determination to understand how to travel using local transport",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/local%20transaport.jpg",
      link: "https://www.sodhatravel.com/blog/local-transport-in-india",
    },
    {
      title: "Top Holiday Destinations In India",
      desc: "If you’re from Delhi, you may also want to read about places to visit near Delhi. If you are from Bangalore.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/top%20destinations%20.jpeg",
      link: "https://footloosedev.com/top-10-holiday-destinations-india/",
    },
    {
      title: "Rethinking Urban Public Transport in India",
      desc: "Urban India is rapidly expanding. Its growing population has put pressure on its transportation systems, forcing an expansion of urban infrastructure. However, many of these projects are not accessible to all commuters.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/urban%20images%20.jpeg",
      link: "https://artha.global/blog/rethinking-urban-public-transport-in-india/",
    },
    {
      title: "India Travel Tips for First-Time Visitors",
      desc: "It takes time and some know-how to successfully navigate in India. This is not a place for hurried travel. Don’t try and see as much as you can; that is not the right approach.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/travel%20tips.jpeg",
      link: "https://www.nomadicmatt.com/travel-blogs/india-travel-tips/",
    },
    {
      title: "The Great Indian Road Traffic",
      desc: "Traffic movement is all about speed. Which on paper is not a function of the number of vehicles on the road.",
      img: "https://ik.imagekit.io/ayt9mk2gv9/UKDrive.in/indain%20transport.jpeg",
      link: "https://medium.com/rahuls-personal-blog/the-great-indian-road-traffic-4a1a5571661e",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollBy({ left: 30, behavior: "smooth" });

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        setTimeout(() => {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }, 300);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f5f6f7",
        borderRadius: 4,
        pt: 4,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 900,
          mx: "auto",
          mb: 4,
        }}
      >
        <motion.div
          style={{ display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                mb: 4,
                position: "relative",
                color: "#03167d",
                fontSize: { xs: "2.2rem", md: "3.2rem" },
              }}
            >
              Recents Blogs
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: -10,
            bgcolor: "white",
            borderRadius: "50%",
            boxShadow: 2,
            "&:hover": { bgcolor: "#eee" },
          }}
        />

        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            pb: 2,
            px: 1,
            "&::-webkit-scrollbar": { display: "none" },
            WebkitOverflowScrolling: "touch",
          }}
        >
          {blogs.map((blog, index) => (
            <Card
              key={index}
              onClick={() => window.open(blog.link, "_blank")}
              sx={{
                minWidth: 320,
                maxWidth: 320,
                borderRadius: 3,
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
                bgcolor: "white",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.img}
                  alt={blog.title}
                  sx={{ objectFit: "cover" }}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: -20,
                    right: 20,
                    bgcolor: "white",
                    border: "4px solid #e5e5e5",
                    width: 55,
                    height: 55,
                    boxShadow: 3,
                    "&:hover": {
                      bgcolor: "#dfffea",
                    },
                  }}
                >
                  <ArrowForwardIcon sx={{ color: "green", fontSize: 28 }} />
                </IconButton>
              </Box>

              <CardContent sx={{ mt: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, lineHeight: 1.4 }}
                >
                  {blog.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color: "grey.600",
                    fontSize: 14.5,
                    lineHeight: 1.5,
                  }}
                >
                  {blog.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: -10,
            bgcolor: "white",
            borderRadius: "50%",
            boxShadow: 2,
            "&:hover": { bgcolor: "#eee" },
          }}
        />
      </Box>
    </Box>
  );
}
