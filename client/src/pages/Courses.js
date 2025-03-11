import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Chip, Button } from '@mui/material';
import { School, Timer, Code } from '@mui/icons-material';

const courses = [
  {
    id: 1,
    title: "Intro to Python",
    description: "Learn Python programming from scratch. Perfect for AI and ML beginners.",
    lessons: 10,
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=800",
    level: "Beginner",
    duration: "20 hours",
    topics: [
      "Python Basics",
      "Data Types & Variables",
      "Control Flow",
      "Functions",
      "Object-Oriented Programming",
      "File Handling",
      "Libraries & Packages",
      "Error Handling",
      "Working with APIs",
      "Python for Data Science"
    ]
  },
  {
    id: 2,
    title: "Fundamentals of Machine Learning",
    description: "Master the core concepts of machine learning algorithms and techniques.",
    lessons: 8,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    level: "Intermediate",
    duration: "25 hours",
    topics: [
      "Introduction to ML",
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Feature Engineering",
      "Decision Trees",
      "Random Forests",
      "Support Vector Machines"
    ]
  },
  {
    id: 3,
    title: "Neural Networks",
    description: "Learn about artificial neural networks, deep learning architectures, and their applications.",
    lessons: 8,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
    level: "Advanced",
    duration: "10 hours",
    topics: [
      "Neural Network Fundamentals",
      "Deep Learning Architectures",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Transfer Learning",
      "Model Training & Optimization",
      "Neural Network Applications",
      "Deployment & Best Practices"
    ]
  },
  {
    id: 4,
    title: "Data Visualization with Python",
    description: "Learn to create compelling visualizations using Python libraries.",
    lessons: 5,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    level: "Beginner",
    duration: "12 hours",
    topics: [
      "Matplotlib Basics",
      "Seaborn",
      "Interactive Plots",
      "Statistical Visualization",
      "Dashboard Creation"
    ]
  },
  {
    id: 5,
    title: "Introduction to Generative AI",
    description: "Explore the fascinating world of generative AI and create your own models.",
    lessons: 6,
    image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?w=800",
    level: "Intermediate",
    duration: "15 hours",
    topics: [
      "Basics of GenAI",
      "Language Models",
      "Image Generation",
      "Prompt Engineering",
      "Fine-tuning Models",
      "Ethical Considerations"
    ]
  }
];

const Courses = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ 
          mb: 4,
          fontWeight: 'bold',
          color: 'primary.main'
        }}
      >
        Featured Courses
      </Typography>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>
                
                <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip 
                    icon={<School />} 
                    label={course.level} 
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip 
                    icon={<Timer />} 
                    label={course.duration} 
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip 
                    icon={<Code />} 
                    label={`${course.lessons} Lessons`} 
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>

                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Course Content:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                  {course.topics.slice(0, 4).map((topic, index) => (
                    <Typography 
                      component="li" 
                      variant="body2" 
                      key={index}
                      color="text.secondary"
                    >
                      {topic}
                    </Typography>
                  ))}
                  {course.topics.length > 4 && (
                    <Typography variant="body2" color="text.secondary">
                      And {course.topics.length - 4} more topics...
                    </Typography>
                  )}
                </Box>

                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ mt: 2 }}
                  href={`/courses/${course.id}`}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses; 