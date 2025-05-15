import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Last1 = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#006E96" }} justifyItems="center">
        <Typography
          sx={{ fontSize: "40px", fontWeight: "900", color: "#fff", p: 4 }}
        >
          We’re Here For You
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#fff",
            mt: "10px",
          }}
        >
          Signing up for eharmony is the first step in finding your next great
          relationship.
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "#fff" }}>
          From profile tips to sharing your success story, we are here to
          support you in
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "#fff" }}>
          your journey for love.
        </Typography>
        <Typography
          sx={{
            mt: "40px",
            fontSize: "20px",
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
            mt: "40px",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </Button>
      </Box>

      <Box justifyItems="center" marginTop="20px">
        <Typography
          sx={{ fontSize: "40px", color: "#32825A", fontWeight: 800 }}
        >
          The Real Deal
        </Typography>
      </Box>
      <Box marginLeft="370px" width="940px" height="301" display="flex" justifyItems="center" marginTop="30px">
        <Box display="flex"  gap={1}>
          <Box width="146px" height="300px" overflow="hidden" border="3px solid #32825A" borderRadius="20px">
            <img src="./images/last21.jpg" alt=""/>
          </Box>
          <Box   >
            <Box width="293px" overflow="hidden" height="145px" border="3px solid #32825A" borderRadius="20px">
                <img src="./images/last22.jpg" alt=""/>
            </Box>
            <Box width="293px" overflow="hidden" height="145px" border="3px solid #32825A" borderRadius="20px" marginTop={1}>
                <img src="./images/last23.jpg" alt=""/>
            </Box>
          </Box>
        </Box>
        <Box p={7}>
          <Typography sx={{ fontSize: "20px" }}>
            Over the course of our 20+ years in the relationship business,
            millions of couples have found lasting love. Give us a try when
            you’re ready for something real.
          </Typography>

          <Button
            sx={{
              backgroundColor: "#FE612C",
              color: "white",
              p: 1,
              fontSize: "20px",
              fontWeight: "600",
              marginTop: "30px",
              borderRadius: "15px",
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
