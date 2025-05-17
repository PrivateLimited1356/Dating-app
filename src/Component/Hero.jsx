import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  AppBar,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";

const images = ["images/images1.webp", "images/images2.jpg"];

const Background = styled(Box)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(2, 2, 4, 2),
  color: "#fff",
  transition: "background-image 1s",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

const WhiteText = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
});

const TransparentButton = styled(Button)({
  border: "1px solid white",
  color: "white",
  padding: "2px",
  borderRadius: "8px",
  textTransform: "none",
});

function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{minheight:"100vh", width: "100%" }}>
      <Background
        sx={{ backgroundImage: `url(${images[bgIndex]})`, overflowY: "auto", height:"100vh" }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              marginBottom: { xs: "0px", md: "0px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "50px" },
                fontWeight: 900,
                marginLeft: { xs: 0, md: "140px" },
              }}
            >
              eharmony
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              marginRight={{ xs: 0, md: "140px" }}
            >
              <WhiteText
                sx={{
                  marginRight: 4,
                  fontSize: "20px",
                  display: { xs: "none", md: "block" },
                }}
              >
                Tour
              </WhiteText>
              <WhiteText
                sx={{
                  marginRight: 4,
                  fontSize: "20px",
                  display: { xs: "none", md: "block" },
                }}
              >
                Dating Advice
              </WhiteText>
              <WhiteText
                sx={{
                  marginRight: 4,
                  fontSize: "20px",
                  display: { xs: "none", md: "block" },
                }}
              >
                Singles Near Me
              </WhiteText>
              <TransparentButton sx={{ fontSize: "20px" }}>
                Log in ▾
              </TransparentButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box  sx={{ marginLeft: { xs: "20px", md: "140px" } }}>
          <Box >
            <img src="/images/text-img.svg" alt=""></img>
          </Box>
          <WhiteText variant="h4" sx={{ mt: 4, marginLeft: "30px" }}>
            Start <span style={{ color: "orange" }}>free</span> today
          </WhiteText>

          <WhiteText variant="h6" sx={{ mt: 2 }}>
            Have you tried online dating before?
          </WhiteText>

          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            // backgroundColor="red"
            alignItems="center"
            flexDirection={{xs:'column',md:'row'}}
          >
            <Box marginLeft="20px" marginTop={{xs:"10px",md:"0px"}}>
              <RadioGroup >
                <FormControlLabel
                  sx={{ backgroundColor: "#fff", color: "black", mb: 1,width:"300px" }}
                  value="new"
                  control={<Radio />}
                  label="I'm new to it"
                />
                <FormControlLabel
                  sx={{ backgroundColor: "#fff", color: "black", mb: 1 }}
                  value="once"
                  control={<Radio />}
                  label="Once or twice"
                />
                <FormControlLabel
                  sx={{ backgroundColor: "#fff", color: "black" }}
                  value="pro"
                  control={<Radio />}
                  label="I'm an online dating pro"
                />
              </RadioGroup>
            </Box>
            <Box marginTop={{xs:"15px",md:"0px"}} >
              <Box
                component="img"
                src="images/trusted-img.png"
                alt="#1 Trusted Dating App"
                sx={{ width: 120 }}
              />
            </Box>
          </Box>
        </Box>
      </Background>

      <Box
        Width="100%"
        height={{xs:"auto",md:"208px"}}
        display="flex"
        flexDirection={{xs:"column",md:"row"}}
        sx={{ backgroundColor: "#1e5a32" }}
      >
        <Box
          width="426px"
          marginLeft={{xs:"0px",md:"205px"}}
          justifyItems="center"
          sx={{ alignItems: "center", color: "#fff", mt: "40px" }}
        >
          <img src="/images/Double-Heart.svg" alt=""></img>
          <Typography sx={{ fontSize: "25px", fontWeight: 700 }}>
            The #1 trusted dating app
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            2022 survey of 1,300 Respondents from the{" "}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            US, UK, Canada and Australia
          </Typography>
        </Box>
        <Box
          width="426px"
          justifyItems="center"
          sx={{
            alignItems: "center",
            color: "#fff",
            backgroundColor: "#32825A",
          }}
        >
          <Box sx={{ mt: "40px" }}>
            <img src="/images/Double-Heart.svg" alt=""></img>
          </Box>
          <Typography sx={{ fontSize: "25px", fontWeight: 700 }}>
            Every 14 minutes, someone
          </Typography>
          <Typography sx={{ fontSize: "25px", fontWeight: 700 }}>
            finds love on eharmony
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>eharmony user data</Typography>
        </Box>
        <Box
          width="426px"
          marginRight="205px"
          justifyItems="center"
          sx={{ alignItems: "center", color: "#fff", mt: "40px" }}
        >
          <img src="/images/Double-Heart.svg" alt=""></img>
          <Typography sx={{ fontSize: "25px", fontWeight: 700 }}>
            Highest quality dating pool
          </Typography>
          <Typography>2023 survey of 2,807 dating app user in the </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            US, UK, Canada and Australia
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Hero;