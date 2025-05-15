import React from "react";
import { Box, Typography, Grid, IconButton, } from "@mui/material";
import { Facebook, YouTube, Instagram, Apple, Android, ExpandMore } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#2a7c5f', color: 'white', p: 4 }} justifyItems="center">
      <Grid container spacing={10}>
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle1">eharmony FAQ</Typography>
          <Typography variant="subtitle1">Success Stories</Typography>
          <Typography variant="subtitle1">About Us</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle1">Terms & Conditions</Typography>
          <Typography variant="subtitle1">Privacy Policy</Typography>
          <Typography variant="subtitle1">Consumer Health Data Privacy Policy</Typography>
          <Typography variant="subtitle1">Do not Sell or Share my Personal Information</Typography>
          <Typography variant="subtitle1">Compliance</Typography>
          <Typography variant="subtitle1">Accessibility Statement</Typography>
          <Typography variant="subtitle1">Affiliates</Typography>
          <Typography variant="subtitle1">Help</Typography>
          <Typography variant="subtitle1">Press and Research</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle1">Senior Dating Site</Typography>
          <Typography variant="subtitle1">Christian Dating</Typography>
          <Typography variant="subtitle1">Black Dating Site</Typography>
          <Typography variant="subtitle1">Asian Dating</Typography>
          <Typography variant="subtitle1">International Dating Site</Typography>
          <Typography variant="subtitle1">Latin Dating</Typography>
          <Typography variant="subtitle1">Over 50 Dating Site</Typography>
          <Typography variant="subtitle1">Indian Dating</Typography>
          <Typography variant="subtitle1">Gay Dating Site</Typography>
          <Typography variant="subtitle1">Lesbian Dating Site</Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle1">Dating</Typography>
          <Typography variant="subtitle1">Getting to Know</Typography>
          <Typography variant="subtitle1">Attraction</Typography>
          <Typography variant="subtitle1">Commitment</Typography>
          <Typography variant="subtitle1">Relationship Issues</Typography>
          <Typography variant="subtitle1">Breaking Up</Typography>
        </Grid>
      </Grid>

      <Box mt={4} borderTop="1px solid #ccc" pt={3} display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box display="flex" alignItems="center" gap={8}>
          <Typography>Follow us on</Typography>
          <IconButton color="inherit"><Facebook /></IconButton>
          <IconButton color="inherit"><CloseIcon /></IconButton>
          <IconButton color="inherit"><YouTube /></IconButton>
          <IconButton color="inherit"><Instagram /></IconButton>
        </Box>

        <Box textAlign="center" marginLeft="15px" marginRight="15px">
          <Typography>eharmony mobile</Typography>
          <IconButton color="inherit"><Apple /></IconButton>
          <IconButton color="inherit"><Android /></IconButton>
        </Box>

        <Box display="flex" alignItems="center">
          <Box sx={{
            border: '1px solid white',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              width="20"
              style={{ borderRadius: '3px' }}
            />
            <Typography>US</Typography>
            <ExpandMore />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
