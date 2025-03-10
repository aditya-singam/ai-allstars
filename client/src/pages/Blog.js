import React from 'react';
import { Container, Typography, Box, Paper, Divider, Chip } from '@mui/material';
import { Science, Timeline, Speed, Psychology } from '@mui/icons-material';

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header with decorative elements */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 6,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          backgroundColor: 'primary.main',
          borderRadius: '2px'
        }
      }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Research Blog
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Exploring Innovation in AI and Machine Learning
        </Typography>
      </Box>

      {/* Main Article */}
      <Paper 
        elevation={3}
        sx={{ 
          p: { xs: 3, md: 5 },
          mb: 6,
          borderRadius: 2,
          bgcolor: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #1976d2 0%, #21CBF3 100%)'
          }
        }}
      >
        {/* Article Header */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              fontSize: { xs: '1.75rem', md: '2.2rem' }
            }}
          >
            Enhancing Recommendation Systems with SHAP Values and Demographic Clustering
          </Typography>
          
          {/* Tags */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            <Chip label="Machine Learning" color="primary" size="small" />
            <Chip label="AI Research" color="primary" size="small" />
            <Chip label="Data Science" color="primary" size="small" />
            <Chip label="Recommendations" color="primary" size="small" />
          </Box>
        </Box>

        {/* Introduction with icon */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 4 }}>
          <Science color="primary" sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Introduction
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
              In today's digital world, recommendation systems play a crucial role in enhancing user experience. 
              From e-commerce platforms suggesting products to streaming services curating personalized playlists, 
              these systems rely heavily on algorithms that predict user preferences.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Challenges Section with icon */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 4 }}>
          <Timeline color="primary" sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              The Challenges
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
              Traditional recommendation systems face several key limitations:
            </Typography>
            <Box component="ul" sx={{ 
              pl: 4, 
              '& li': { 
                mb: 2,
                color: 'text.secondary',
                position: 'relative',
                '&::before': {
                  content: '"•"',
                  color: 'primary.main',
                  position: 'absolute',
                  left: '-1em',
                  fontWeight: 'bold'
                }
              } 
            }}>
              <Typography component="li" variant="body1">
                <strong>Lack of contextual data:</strong> Traditional methods ignore user demographics, 
                leading to less personalized recommendations.
              </Typography>
              <Typography component="li" variant="body1">
                <strong>Cold start problem:</strong> New users with no prior interaction data receive 
                poor recommendations.
              </Typography>
              <Typography component="li" variant="body1">
                <strong>Lack of interpretability:</strong> Model predictions are often a black box, 
                making it difficult to explain why certain recommendations are made.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Results Section with icon */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 4 }}>
          <Speed color="primary" sx={{ fontSize: 40 }} />
          <Box sx={{ width: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Results & Performance
            </Typography>
            <Box sx={{ 
              overflowX: 'auto', 
              my: 3,
              '& table': {
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
                '& th, & td': {
                  padding: '16px',
                  borderBottom: '1px solid #e0e0e0',
                  textAlign: 'center'
                },
                '& th': {
                  backgroundColor: '#f5f5f5',
                  fontWeight: 'bold',
                  color: 'primary.main'
                },
                '& tr:hover': {
                  backgroundColor: '#f8f9fa'
                }
              }
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5' }}>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>Model</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>MAE</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>RMSE</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>Precision</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>Recall</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>F1 Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>SHAP-Based Model</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.613</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.789</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.926</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.919</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.921</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>Traditional Model</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.718</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.900</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.890</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.911</td>
                    <td style={{ padding: '12px', border: '1px solid #ddd' }}>0.901</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Conclusion with icon */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Psychology color="primary" sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Conclusion
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
              By integrating SHAP values with demographic clustering, this research presents an innovative way 
              to refine recommendation systems. As AI continues to evolve, leveraging explainable AI (XAI) 
              techniques like SHAP will be essential in making machine learning models not only more accurate 
              but also more transparent and user-friendly.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Blog; 