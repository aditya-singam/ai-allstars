const express = require('express');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  const db = req.app.locals.db;
  try {
    const courses = await db.all('SELECT * FROM courses');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get a single course
router.get('/:id', async (req, res) => {
  const db = req.app.locals.db;
  try {
    const course = await db.get('SELECT * FROM courses WHERE id = ?', [req.params.id]);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// Create a new course
router.post('/', async (req, res) => {
  const { title, description, price, image_url } = req.body;
  const db = req.app.locals.db;

  try {
    const result = await db.run(
      'INSERT INTO courses (title, description, price, image_url) VALUES (?, ?, ?, ?)',
      [title, description, price, image_url]
    );
    res.status(201).json({ 
      message: 'Course created successfully',
      courseId: result.lastID 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
});

// Update a course
router.put('/:id', async (req, res) => {
  const { title, description, price, image_url } = req.body;
  const db = req.app.locals.db;

  try {
    await db.run(
      'UPDATE courses SET title = ?, description = ?, price = ?, image_url = ? WHERE id = ?',
      [title, description, price, image_url, req.params.id]
    );
    res.json({ message: 'Course updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update course' });
  }
});

// Delete a course
router.delete('/:id', async (req, res) => {
  const db = req.app.locals.db;
  try {
    await db.run('DELETE FROM courses WHERE id = ?', [req.params.id]);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete course' });
  }
});

// Add this at the top of your existing routes
router.post('/test', async (req, res) => {
  const db = req.app.locals.db;
  const testCourse = {
    title: "Test Course",
    description: "Test Description",
    price: 99.99,
    image_url: "https://example.com/test.jpg"
  };

  try {
    await db.run(
      'INSERT INTO courses (title, description, price, image_url) VALUES (?, ?, ?, ?)',
      [testCourse.title, testCourse.description, testCourse.price, testCourse.image_url]
    );
    res.json({ message: 'Test course added successfully' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 