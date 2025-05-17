
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Last1 = () => {
  return (
    <Box mb={4}>
      {/* Top Blue Section */}
      <Box sx={{ backgroundColor: "#006E96", textAlign: "center", px: 2, py: 5 }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: "900",
            color: "#fff",
          }}
        >
          We’re Here For You
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "700",
            color: "#fff",
            mt: 2,
          }}
        >
          Signing up for eharmony is the first step in finding your next great relationship.
        </Typography>
        <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "700", color: "#fff" }}>
          From profile tips to sharing your success story, we are here to support you in
        </Typography>
        <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "700", color: "#fff" }}>
          your journey for love.
        </Typography>

        <Typography
          sx={{
            mt: 4,
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "700",
            color: "#fff",
          }}
        >
          WE’RE AVAILABLE 24/7, 365 DAYS A YEAR
        </Typography>

        <Button
          sx={{
            border: "3px solid #fff",
            color: "#fff",
            mt: 4,
            fontSize: "18px",
            px: 3,
            py: 1,
            borderRadius: "10px",
            textTransform: "none",
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* "The Real Deal" Section */}
      <Box textAlign="center" mt={6}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            color: "#32825A",
            fontWeight: 800,
          }}
        >
          The Real Deal
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={4}
        px={2}
        gap={4}
      >
        {/* Image Grid */}
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
          <Box
            width={{ xs: "100%", sm: "146px" }}
            height="300px"
            overflow="hidden"
            border="3px solid #32825A"
            borderRadius="20px"
          >
            <img
              src="./images/last21.jpg"
              alt="last21"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box
              width={{ xs: "100%", sm: "293px" }}
              height="145px"
              overflow="hidden"
              border="3px solid #32825A"
              borderRadius="20px"
            >
              <img
                src="./images/last22.jpg"
                alt="last22"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              width={{ xs: "100%", sm: "293px" }}
              height="145px"
              overflow="hidden"
              border="3px solid #32825A"
              borderRadius="20px"
            >
              <img
                src="./images/last23.jpg"
                alt="last23"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Text Content */}
        <Box maxWidth="500px" textAlign="left">
          <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
            Over the course of our 20+ years in the relationship business,
            millions of couples have found lasting love. Give us a try when
            you’re ready for something real.
          </Typography>

          <Button
            sx={{
              backgroundColor: "#FE612C",
              color: "white",
              px: 3,
              py: 1,
              fontSize: "18px",
              fontWeight: 600,
              mt: 4,
              borderRadius: "15px",
              textTransform: "none",
            }}
          >
            Join Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Last1;

