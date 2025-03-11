import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  ListItemButton 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

  const mobileMenu = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              component={RouterLink} 
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        {user ? (
          <ListItem disablePadding>
            <ListItemButton onClick={logout} sx={{ textAlign: 'center' }}>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton 
                component={RouterLink} 
                to="/login"
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                component={RouterLink} 
                to="/register"
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary="Sign Up" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
          {/* Logo Section */}
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
                width: { xs: 40, sm: 50 },
                height: { xs: 40, sm: 50 },
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
                  fontSize: { xs: '1.5rem', sm: '2rem' },
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
                  fontSize: { xs: '1.5rem', sm: '2rem' },
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
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.7rem', sm: '0.8rem' }
                }}
              >
                Learn • Create • Innovate
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button 
                key={item.text} 
                color="inherit" 
                component={RouterLink} 
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
            {user ? (
              <Button color="inherit" onClick={logout}>Sign Out</Button>
            ) : (
              <>
                <Button 
                  component={RouterLink} 
                  to="/login" 
                  variant="contained"
                  sx={{ bgcolor: 'primary.main', color: 'white' }}
                >
                  Sign In
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/register" 
                  variant="contained"
                  sx={{ bgcolor: 'primary.main', color: 'white' }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              backgroundColor: 'background.paper'
            },
          }}
        >
          {mobileMenu}
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navbar; 