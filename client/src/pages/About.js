import React from 'react';
import { Container, Typography, Box, Paper, Grid, Avatar } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        color="primary"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '2.5rem' },
          mb: 4
        }}
      >
        About Us
      </Typography>

      {/* Founder Section */}
      <Paper 
        elevation={3}
        sx={{ 
          p: { xs: 3, md: 5 },
          borderRadius: 2,
          bgcolor: '#f8f9fa',
          mb: 6
        }}
      >
        <Grid container spacing={4} alignItems="flex-start">
          {/* Photo Column */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Avatar
                src="/aditya.jpg"
                alt="Aditya Singampalli"
                sx={{
                  width: 240,
                  height: 240,
                  borderRadius: 2,
                  boxShadow: 3,
                  '& img': {
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }
                }}
                variant="square"
              />
              <Typography 
                variant="h5" 
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main'
                }}
              >
                Aditya Singampalli
              </Typography>
              <Typography 
                variant="subtitle1"
                color="text.secondary"
                sx={{ fontStyle: 'italic' }}
              >
                Founder and President
              </Typography>
            </Box>
          </Grid>

          {/* Bio Column */}
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1" paragraph>
                Aditya Singampalli is a high school junior with a passion for empowering others 
                to learn about computer science and artificial intelligence. He has gained proficiency 
                in multiple programming languages, including Python, C++, Java, and R, and has explored 
                data science through hands-on projects.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Aditya further honed his skills by attending the COSMOS program at UCLA, where he 
                developed machine learning models through independent research. His dedication to AI 
                and technology drives his mission to make AI education accessible to students worldwide.
              </Typography>
              
              <Typography variant="body1">
                Beyond academics, Aditya enjoys watching TV, playing tennis, and exploring video games 
                in his free time.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Vision Section */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          color="primary"
          sx={{
            fontSize: { xs: '1.75rem', md: '2rem' },
            mb: 3
          }}
        >
          Our Vision
        </Typography>
        <Paper 
          elevation={2}
          sx={{ 
            p: 4,
            borderRadius: 2,
            bgcolor: 'white'
          }}
        >
          <Typography variant="body1" paragraph>
            At AI Allstars, we envision a future where every student has access to quality AI education, 
            regardless of their background or circumstances. We believe in breaking down barriers to 
            learning and creating an inclusive environment where students can explore the fascinating 
            world of artificial intelligence.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About; 