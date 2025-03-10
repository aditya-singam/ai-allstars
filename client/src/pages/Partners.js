import React from 'react';
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material';
import { School, Group, Code, Campaign } from '@mui/icons-material';

const Partners = () => {
  const partnershipAreas = [
    {
      title: "Curriculum Development",
      icon: <Code fontSize="large" color="primary" />,
      description: "We're seeking educators, AI professionals, and industry experts to help develop and review our curriculum. Your expertise will ensure our content remains cutting-edge and accessible to students."
    },
    {
      title: "Educational Institutions",
      icon: <School fontSize="large" color="primary" />,
      description: "We invite schools, after-school programs, and educational organizations to partner with us in bringing AI education to their students. Together, we can integrate AI learning into existing programs."
    },
    {
      title: "Outreach Programs",
      icon: <Campaign fontSize="large" color="primary" />,
      description: "Help us reach more students by collaborating on workshops, events, and community programs. We're particularly interested in initiatives that support underrepresented groups in technology."
    },
    {
      title: "Mentorship Network",
      icon: <Group fontSize="large" color="primary" />,
      description: "Join our network of mentors who can guide students, answer questions, and share real-world AI experiences. Your involvement can inspire the next generation of AI innovators."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Partner With Us
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          Join us in our mission to make AI education accessible to students worldwide. 
          We're looking for partners who share our vision of empowering the next generation 
          through technology education.
        </Typography>
      </Box>

      {/* Partnership Areas */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {partnershipAreas.map((area, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-4px)',
                },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {area.icon}
                <Typography variant="h5" component="h2" color="primary">
                  {area.title}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                {area.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Paper 
        elevation={3}
        sx={{ 
          p: { xs: 3, md: 5 },
          textAlign: 'center',
          bgcolor: '#f8f9fa',
          borderRadius: 2
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Get Involved
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '700px', mx: 'auto', mb: 4 }}>
          Whether you're an educational institution, industry professional, or organization 
          interested in promoting AI education, we'd love to explore collaboration opportunities 
          with you. Together, we can make a lasting impact on students' futures.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          href="mailto:contact@aiallstars.org"
          sx={{ 
            px: 4,
            py: 1.5,
            fontSize: '1.1rem'
          }}
        >
          Contact Us to Partner
        </Button>
      </Paper>
    </Container>
  );
};

export default Partners; 