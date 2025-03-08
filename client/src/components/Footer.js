import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              AI Allstars is dedicated to making AI education accessible to everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Explore
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/" color="text.secondary">Home</Link>
              <Link href="/courses" color="text.secondary">Courses</Link>
              <Link href="/about" color="text.secondary">About Us</Link>
              <Link href="/feedback" color="text.secondary">Feedback</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact@aiallstars.org
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} AI Allstars. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 