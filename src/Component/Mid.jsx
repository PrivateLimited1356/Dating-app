import { Box, Typography } from "@mui/material";
import React from "react";

const Mid = () => {
  return (
    <Box mt={7}>
      <Box justifyItems="center">
        <Typography
          sx={{ fontSize: "30px", color: "#32825A", fontWeight: 800 }}
        >
          Our dating site helps millions find real love
        </Typography>

        <Box
          height="351px"
          width="1240px"
          display="flex"
          marginTop="30px"
          gap={3}
        >
          <Box>
            <Box
              overflow="hidden"
              border="4px solid #32825A"
              borderRadius="20px"
              width="393px"
              height="244px"
            >
              <img src="/images/mid1.jpg" alt="" />
            </Box>
            <Box justifyItems="center" mt="20px">
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                Over 2 Million
              </Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                have found love
              </Typography>
              <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
                ...could you be next?
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              overflow="hidden"
              border="4px solid #32825A"
              borderRadius="20px"
              width="393px"
              height="244px"
            >
              <img src="/images/mid2.jpg" alt="" />
            </Box>
            <Box justifyItems="center" mt="20px">
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                Site most likely to lead to happy
              </Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                relationships
              </Typography>
              <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
                … the right one may be waiting for you!
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              overflow="hidden"
              border="4px solid #32825A"
              borderRadius="20px"
              width="393px"
              height="244px"
            >
              <img src="/images/mid3.jpg" alt="" />
            </Box>
            <Box justifyItems="center" mt="20px">
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                2.3 million messages sent weekly
              </Typography>
              {/* <Typography sx={{fontSize:"20px",fontWeight:"700"}}>have found love</Typography> */}
              <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
                See who wants to talk to you!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box justifyItems="center" marginTop="35px">
        <Typography
          sx={{ fontSize: "30px", color: "#32825A", fontWeight: 800 }}
        >
          Introducing: A new eharmony experience
        </Typography>
        <Typography sx={{ fontSize: "20px", marginTop: "25px" }}>
          Your search for a great relationship has never been easier with
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          groundbreaking overhaul of the eharmony you know and trust.
        </Typography>
        <Typography sx={{ fontSize: "20px", marginTop: "35px" }}>
          GET A SNEAK PEEK:
        </Typography>

        <Box sx={{height:"393px",overflow:"hidden",border:"4px solid #32825A",borderRadius:"40px",marginTop:"30px"}}>
          <video height="393px"  controls autoPlay>
            <source src="https://www.youtube.com/watch?v=ua3m5H1RPqM" type="video/mp4" />
          </video>
        </Box>

      </Box>
    </Box>
  );
};

export default Mid;
