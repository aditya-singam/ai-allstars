const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

async function testDatabase() {
  const db = await open({
    filename: path.join(__dirname, '../../database/aiallstars.db'),
    driver: sqlite3.Database
  });

  try {
    // Test database connection
    console.log('Testing database connection...');
    
    // Check if courses table exists
    const table = await db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='courses'");
    console.log('Courses table exists:', !!table);

    // Count courses
    const count = await db.get('SELECT COUNT(*) as count FROM courses');
    console.log('Number of courses:', count.count);

    // List all courses
    const courses = await db.all('SELECT * FROM courses');
    console.log('All courses:', courses);

  } catch (error) {
    console.error('Database test failed:', error);
  } finally {
    await db.close();
  }
}

testDatabase(); 