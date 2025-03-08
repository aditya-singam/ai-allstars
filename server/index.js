const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const config = require('./config/config');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: config.corsOrigin,
  credentials: true
}));

// Database initialization
async function initializeDatabase() {
  const db = await open({
    filename: config.database.path,
    driver: sqlite3.Database
  });

  // Create tables
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      price DECIMAL(10,2),
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  return db;
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
initializeDatabase()
  .then(db => {
    app.locals.db = db;
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch(err => {
    console.error('Failed to initialize database:', err);
    process.exit(1);
  }); 