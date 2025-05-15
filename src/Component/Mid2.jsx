import React from "react";
import { Box, Typography,Button } from "@mui/material";
const Mid2 = () => {
  return (
    <Box mt={7}>
      <Box justifyItems="center">
        <Typography
          sx={{ fontSize: "40px", color: "#32825A", fontWeight: 800 }}
        >
          Compatibility Counts
        </Typography>
        <Box width="940px" display="flex">
          <Box marginLeft="30px">
            <img src="./images/mid21.svg" alt="image" />
          </Box>
          <Box p={9}>
            <Typography sx={{fontSize:"20px"}}>
              What happens when you apply scientific research to dating
              behavior? A whole lotta love! But this isn’t destiny, it’s
              deliberate. That’s why every 14 minutes, someone finds love on
              eharmony.
            </Typography>

            <Button sx={{backgroundColor:"#FE612C",color:"white",p:1,fontSize:"20px",fontWeight:"600",marginTop:"30px",borderRadius:"15px"}}>Join Now</Button>
          </Box>
        </Box>
      </Box>
      <Box justifyItems="center">
         <Typography
          sx={{ fontSize: "40px", color: "#32825A", fontWeight: 800 }}
        >
          Quality Singles, Just Like You
        </Typography>
        <Box width="1240px" display="flex" mt={6}>
            <Box p={9}>
            <Typography sx={{fontSize:"20px"}}>
              What happens when you apply scientific research to dating
              behavior? A whole lotta love! But this isn’t destiny, it’s
              deliberate. That’s why every 14 minutes, someone finds love on
              eharmony.
            </Typography>

            <Button sx={{backgroundColor:"#FE612C",color:"white",p:1,fontSize:"20px",fontWeight:"600",marginTop:"30px",borderRadius:"15px"}}>Join Now</Button>
          </Box>
           <Box marginLeft="30px">
            <img src="./images/mid22.png" alt="image" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mid2;
