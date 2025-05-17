// import React from "react";
// import { Box, Typography,Button } from "@mui/material";
// const Mid2 = () => {
//   return (
//     <Box mt={7}>
//       <Box justifyItems="center">
//         <Typography
//           sx={{ fontSize: "40px", color: "#32825A", fontWeight: 800 }}
//         >
//           Compatibility Counts
//         </Typography>
//         <Box width="940px" display="flex">
//           <Box marginLeft="30px">
//             <img src="images/mid21.svg" alt="" />
//           </Box>
//           <Box p={9}>
//             <Typography sx={{fontSize:"20px"}}>
//               What happens when you apply scientific research to dating
//               behavior? A whole lotta love! But this isn’t destiny, it’s
//               deliberate. That’s why every 14 minutes, someone finds love on
//               eharmony.
//             </Typography>

//             <Button sx={{backgroundColor:"#FE612C",color:"white",p:1,fontSize:"20px",fontWeight:"600",marginTop:"30px",borderRadius:"15px"}}>Join Now</Button>
//           </Box>
//         </Box>
//       </Box>
//       <Box justifyItems="center">
//          <Typography
//           sx={{ fontSize: "40px", color: "#32825A", fontWeight: 800 }}
//         >
//           Quality Singles, Just Like You
//         </Typography>
//         <Box width="1240px" display="flex" mt={6}>
//             <Box p={9}>
//             <Typography sx={{fontSize:"20px"}}>
//               What happens when you apply scientific research to dating
//               behavior? A whole lotta love! But this isn’t destiny, it’s
//               deliberate. That’s why every 14 minutes, someone finds love on
//               eharmony.
//             </Typography>

//             <Button sx={{backgroundColor:"#FE612C",color:"white",p:1,fontSize:"20px",fontWeight:"600",marginTop:"30px",borderRadius:"15px"}}>Join Now</Button>
//           </Box>
//            <Box marginLeft="30px">
//             <img src="images/mid22.png" alt="" />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Mid2;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Mid2 = () => {
  return (
    <Box mt={7} px={{ xs: 2, md: 6 }}>
      {/* Compatibility Counts Section */}
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            color: "#32825A",
            fontWeight: 800,
          }}
        >
          Compatibility Counts
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        mt={4}
        gap={4}
      >
        <Box flex={1} textAlign="center">
          <img
            src="./images/mid21.svg"
            alt="mid21"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </Box>

        <Box flex={1} px={{ xs: 2, md: 6 }}>
          <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
            What happens when you apply scientific research to dating behavior?
            A whole lotta love! But this isn’t destiny, it’s deliberate. That’s
            why every 14 minutes, someone finds love on eharmony.
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

      {/* Quality Singles Section */}
      <Box textAlign="center" mt={8}>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            color: "#32825A",
            fontWeight: 800,
          }}
        >
          Quality Singles, Just Like You
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="center"
        mt={6}
        gap={4}
        mb={5}
      >
        <Box flex={1} px={{ xs: 2, md: 6 }}>
          <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
            What happens when you apply scientific research to dating behavior?
            A whole lotta love! But this isn’t destiny, it’s deliberate. That’s
            why every 14 minutes, someone finds love on eharmony.
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

        <Box flex={1} textAlign="center">
          <img
            src="./images/mid22.png"
            alt="mid22"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Mid2;

