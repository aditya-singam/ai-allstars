import React from 'react';
import { Container, Typography, Grid, Box, Paper, Button } from '@mui/material';

const Home = () => {
  const faqs = [
    {
      question: "What is this site?",
      answer: "AI Allstars is a user-friendly introduction to artificial intelligence and machine learning. The site's goal is to make AI content accessible and free to all since current resources online are either too complicated or expensive."
    },
    {
      question: "Why AI?",
      answer: "Every student should have the opportunity to learn AI. The field is shaping the future of humanity across nearly every industry, so by starting early, students will have a foundation for success. The job market for AI is booming due to high demand, making careers in AI lucrative and stable."
    },
    {
      question: "Do I need any prior experience?",
      answer: "Not at all! All experience levels from beginner to advanced are welcomed and encouraged!"
    },
    {
      question: "How do the courses work?",
      answer: "Each course is complete with lessons, template code, and quizzes. Once you make an account, you can attempt quizzes; each quiz has unlimited attempts and shows your score after each attempt. Courses are recommended to be completed in the order they appear."
    }
  ];

  return (
    <>
      {/* Hero Section with reduced size */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
          color: 'white',
          py: 4,
          mb: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.75rem', md: '2.2rem' }
                }}
              >
                Welcome to AI Allstars
              </Typography>
              <Typography 
                variant="subtitle1"
                paragraph
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' }
                }}
              >
                Your Journey to AI Mastery Starts Here
              </Typography>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  bgcolor: 'white',
                  color: '#1976d2',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  },
                  mt: 1,
                  px: 3
                }}
                href="/courses"
              >
                Start Learning
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="AI Learning"
                sx={{
                  width: '100%',
                  maxHeight: '300px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 2
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Mission Section with adjusted typography */}
        <Paper 
          sx={{ 
            p: { xs: 3, md: 4 },
            mb: 6,
            borderRadius: 2, 
            bgcolor: '#f8f9fa',
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
            },
            transition: 'box-shadow 0.3s ease-in-out'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            color="primary"
            sx={{
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem' }}>
            AI Allstars is an international organization whose goal is to provide a free, up-to-date, and accessible artificial intelligence curriculum to students across the globe.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem' }}>
            We strive to broaden the participation of underrepresented groups (including gender, socioeconomic status, and ethnicity) to increase their success in computer science and technology.
          </Typography>
        </Paper>

        {/* FAQ Section with adjusted spacing */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            gutterBottom 
            color="primary" 
            sx={{ 
              mb: 3,
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={2}>
            {faqs.map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  sx={{ 
                    p: 3,
                    borderRadius: 2,
                    height: '100%',
                    '&:hover': {
                      boxShadow: 3,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    color="primary"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{
                      fontSize: '0.95rem'
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action Section with adjusted spacing */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 6,
            background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
            borderRadius: 2,
            mb: 4,
            color: 'white',
            boxShadow: 3
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}
          >
            Ready to Start Your AI Journey?
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              mb: 3, 
              fontSize: '1rem'
            }}
          >
            Join our community and start learning AI today.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            href="/register"
            sx={{ 
              px: 4,
              py: 1.25,
              fontSize: '1rem',
              bgcolor: 'white',
              color: '#1976d2',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home; 