import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Menu as MenuIcon, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Courses', path: '/courses' },
    { text: 'About Us', path: '/about' },
    { text: 'Partners', path: '/partners' },
    { text: 'Blog', path: '/blog' }
  ];

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
          
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" component={RouterLink} to={item.path}>
                {item.text}
              </Button>
            ))}
            {user ? (
              <Button color="inherit" onClick={logout}>Sign Out</Button>
            ) : (
              <>
                <Button component={RouterLink} to="/login" variant="contained">Sign In</Button>
                <Button component={RouterLink} to="/register" variant="contained">Sign Up</Button>
              </>
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { width: 240 }
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem 
                  button 
                  key={item.text} 
                  component={RouterLink} 
                  to={item.path}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
              {user ? (
                <ListItem button onClick={logout}>
                  <ListItemText primary="Sign Out" />
                </ListItem>
              ) : (
                <>
                  <ListItem button component={RouterLink} to="/login" onClick={handleDrawerToggle}>
                    <ListItemText primary="Sign In" />
                  </ListItem>
                  <ListItem button component={RouterLink} to="/register" onClick={handleDrawerToggle}>
                    <ListItemText primary="Sign Up" />
                  </ListItem>
                </>
              )}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 