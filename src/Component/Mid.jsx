
import { Box, Typography } from "@mui/material";
import React from "react";

const Mid = () => {
  return (
    <Box mt={7} px={{ xs: 2, md: 8 }}>
      {/* Heading */}
      <Box textAlign="center">
        <Typography
          sx={{ fontSize: { xs: "22px", md: "30px" }, color: "#32825A", fontWeight: 800 }}
        >
          Our dating site helps millions find real love
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        mt={4}
      >
        {[
          {
            img: "/images/mid1.jpg",
            title1: "Over 2 Million",
            title2: "have found love",
            desc: "...could you be next?",
          },
          {
            img: "/images/mid2.jpg",
            title1: "Site most likely to lead to happy",
            title2: "relationships",
            desc: "… the right one may be waiting for you!",
          },
          {
            img: "/images/mid3.jpg",
            title1: "2.3 million messages sent weekly",
            title2: "",
            desc: "See who wants to talk to you!",
          },
        ].map((item, i) => (
          <Box key={i} width={{ xs: "100%", sm: "320px", md: "393px" }}>
            <Box
              overflow="hidden"
              border="4px solid #32825A"
              borderRadius="20px"
              height="244px"
              sx={{ img: { width: "100%", height: "100%", objectFit: "cover" } }}
            >
              <img src={item.img} alt={`mid${i + 1}`} />
            </Box>
            <Box textAlign="center" mt={2}>
              <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>{item.title1}</Typography>
              {item.title2 && (
                <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>{item.title2}</Typography>
              )}
              <Typography sx={{ fontSize: "15px", mt: 1 }}>{item.desc}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box justifyItems="center"  textAlign="center" mt={6}>
        <Typography
          sx={{ fontSize: { xs: "22px", md: "30px" }, color: "#32825A", fontWeight: 800 }}
        >
          Introducing: A new eharmony experience
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, mt: 3 }}>
          Your search for a great relationship has never been easier with
        </Typography>
        <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
          groundbreaking overhaul of the eharmony you know and trust.
        </Typography>
        <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, mt: 4 }}>
          GET A SNEAK PEEK:
        </Typography>

        <Box width={{xs:"100%",md:"700px"}} height={{xs:"300px",md:"auto"}}
          sx={{
            position: "relative",
            paddingTop: "30.25%", // 16:9 ratio
            mt: 3,
            border: "4px solid #32825A",
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/ua3m5H1RPqM"
            title="eharmony preview"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowFullScreen
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Mid;

