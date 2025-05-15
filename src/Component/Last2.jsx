import React from "react";
import { Box, Typography, Button } from "@mui/material";
const Last2 = () => {
  return (
    <Box justifyItems="center" backgroundColor="#32825A">
      <Typography
        sx={{ fontSize: "40px", fontWeight: "900", color: "#fff", p: 4 }}
      >
        The #1 Trusted Dating App
      </Typography>
      <Box component="img" src="images/trusted-img.png" alt="#1 Trusted Dating App" sx={{ width: 120 }} />

      <Typography sx={{color:"#fff",mt:"20px"}}>We have 20+ years of trusted matchmaking under our belts, with a dedicated </Typography>
      <Typography sx={{color:"#fff"}}>Trust and Safety team by your side.</Typography>
       <Button sx={{backgroundColor:"#FE612C",color:"white",p:1,fontSize:"20px",fontWeight:"600",marginTop:"30px",borderRadius:"15px",marginBottom:"10px"}}>Join Now</Button>
    </Box>
  );
};

export default Last2;
