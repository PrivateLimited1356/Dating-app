// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// const Last2 = () => {
//   return (
//     <Box justifyItems="center" backgroundColor="#32825A">
//       <Typography
//         sx={{ fontSize: "40px", fontWeight: "900", color: "#fff", p: 4 }}
//       >
//         The #1 Trusted Dating App
//       </Typography>
//       <Box component="img" src="images/trusted-img.png" alt="#1 Trusted Dating App" sx={{ width: 120 }} />

//       <Typography sx={{color:"#fff",mt:"20px"}}>We have 20+ years of trusted matchmaking under our belts, with a dedicated </Typography>
//       <Typography sx={{color:"#fff"}}>Trust and Safety team by your side.</Typography>
//        <Button sx={{backgroundColor:"#FE612C",color:"white",p:1,fontSize:"20px",fontWeight:"600",marginTop:"30px",borderRadius:"15px",marginBottom:"15px"}}>Join Now</Button>
//     </Box>
//   );
// };

// export default Last2;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Last2 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#32825A",
        textAlign: "center",
        px: 2,
        py: 6,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: "900",
          color: "#fff",
          mb: 3,
        }}
      >
        The #1 Trusted Dating App
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="images/trusted-img.png"
        alt="#1 Trusted Dating App"
        sx={{
          width: { xs: "80px", sm: "100px", md: "120px" },
        }}
      />

      {/* Text */}
      <Box mt={3}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          We have 20+ years of trusted matchmaking under our belts,
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          with a dedicated Trust and Safety team by your side.
        </Typography>
      </Box>

      {/* CTA Button */}
      <Button
        sx={{
          backgroundColor: "#FE612C",
          color: "white",
          px: 3,
          py: 1,
          fontSize: { xs: "16px", md: "20px" },
          fontWeight: 600,
          mt: 4,
          borderRadius: "15px",
          textTransform: "none",
        }}
      >
        Join Now
      </Button>
    </Box>
  );
};

export default Last2;

