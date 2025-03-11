import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
          <Box 
            component={RouterLink} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            {/* Logo Icon */}
            <Box
              sx={{
                width: 50,
                height: 50,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 2,
                background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                A
              </Typography>
            </Box>
            
            {/* Logo Text */}
            <Box>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                AI Allstars
              </Typography>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: 'text.secondary',
                  letterSpacing: 1.5,
                  textTransform: 'uppercase'
                }}
              >
                Learn • Create • Innovate
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/courses">
              Courses
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              About Us
            </Button>
            <Button color="inherit" component={RouterLink} to="/partners">
              Partners
            </Button>
            <Button color="inherit" component={RouterLink} to="/blog">
              Blog
            </Button>
            {user ? (
              <>
                <Button color="inherit" onClick={logout}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="contained"
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    mr: 2
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    }
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 