import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  AppBar,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/system';

const images = [
  'images/images1.webp',
  'images/images2.jpg',
];

const Background = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  color: '#fff',
  transition: 'background-image 1s'
}));

const WhiteText = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold'
});

const TransparentButton = styled(Button)({
  border: '1px solid white',
  color: 'white',
  padding: '6px 16px',
  borderRadius: '8px',
  textTransform: 'none'
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
    <Box>
    <Background sx={{ backgroundImage: `url(${images[bgIndex]})`}}>
      <AppBar position="static" color="transparent" elevation={0} >
        <Toolbar sx={{ justifyContent: 'space-between', marginBottom:"10px"}}>
          <Typography sx={{fontSize:"50px",fontWeight:900,marginLeft:"140px"}}>eharmony</Typography>
          <Box display="flex" alignItems="center" marginRight="140px">
          <WhiteText sx={{ marginRight: 4 ,fontSize:'20px' }}>Tour</WhiteText>
          <WhiteText sx={{ marginRight: 4 ,fontSize:'20px' }}>Dating Advice</WhiteText>
          <WhiteText sx={{ marginRight: 4,fontSize:'20px' }}>Singles Near Me</WhiteText>
          <TransparentButton sx={{fontSize:'20px'}}>Log in ▾</TransparentButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box maxWidth="sm" sx={{marginLeft:"170px" }}>
        <Box >
        <img src='/images/text-img.svg' alt=""></img>
        </Box>
        <WhiteText variant="h4" sx={{ mt: 4,marginLeft:"30px" }}>
          Start <span style={{ color: 'orange' }}>free</span> today
        </WhiteText>

        <WhiteText variant="h6" sx={{ mt: 2 }}>Have you tried online dating before?</WhiteText>
        
        <Box display="flex" justifyContent="space-between" width="1200px">
        <Box width="300px" marginLeft="20px" mt="20px"  >
          <RadioGroup >
            <FormControlLabel sx={{backgroundColor:"#fff",color:"black",mb:1,}} value="new" control={<Radio />} label="I'm new to it" />
            <FormControlLabel sx={{backgroundColor:"#fff",color:"black",mb:1}}value="once" control={<Radio />} label="Once or twice" />
            <FormControlLabel sx={{backgroundColor:"#fff",color:"black"}}value="pro" control={<Radio />} label="I'm an online dating pro" />
          </RadioGroup>
        </Box>
        <Box component="img" src="images/trusted-img.png" alt="#1 Trusted Dating App" sx={{ width: 120,marginRight:"50px" }} />
        </Box>
      </Box>
    </Background>
    <Box Width="100%" height="208px" display="flex"   sx={{backgroundColor:"#1e5a32"}}>
        <Box width="426px" marginLeft="205px" justifyItems="center" sx={{alignItems:"center",color:"#fff",mt:"40px"}}>
          <img src='/images/Double-Heart.svg' alt=''></img>
          <Typography sx={{fontSize:"25px",fontWeight:700}}>The #1 trusted dating app</Typography>
          <Typography sx={{fontSize:"14px"}} >2022 survey of 1,300 Respondents from the </Typography>
          <Typography sx={{fontSize:"14px"}}>US, UK, Canada  and Australia</Typography>
        </Box>
         <Box width="426px" justifyItems="center" sx={{alignItems:"center",color:"#fff",backgroundColor:"#32825A"}}>
            <Box sx={{mt:"40px"}}>
          <img src='/images/Double-Heart.svg' alt=''></img>
          </Box>
          <Typography sx={{fontSize:"25px",fontWeight:700}}>Every 14 minutes, someone</Typography>
          <Typography sx={{fontSize:"25px",fontWeight:700}}>finds love on eharmony</Typography>
          <Typography sx={{fontSize:"14px"}}>eharmony user data</Typography>
        </Box>
         <Box width="426px" marginRight="205px" justifyItems="center" sx={{alignItems:"center",color:"#fff",mt:"40px"}}>
          <img src='/images/Double-Heart.svg' alt=''></img>
          <Typography sx={{fontSize:"25px",fontWeight:700}}>Highest quality dating pool</Typography>
          <Typography>2023 survey of 2,807 dating app user in the </Typography>
          <Typography sx={{fontSize:"14px"}}>US, UK, Canada  and Australia</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Hero;