const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const sampleCourses = [
  {
    title: "Introduction to Artificial Intelligence",
    description: "Learn the fundamentals of AI, including machine learning, neural networks, and deep learning basics.",
    price: 99.99,
    image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Master the core concepts of machine learning, including supervised and unsupervised learning.",
    price: 149.99,
    image_url: "https://images.unsplash.com/photo-1673187456578-2e9b39ae0e83?w=800"
  },
  {
    title: "Deep Learning with Python",
    description: "Practical deep learning course using Python, TensorFlow, and Keras.",
    price: 199.99,
    image_url: "https://images.unsplash.com/photo-1678995632928-298d05d41671?w=800"
  }
];

async function seedCourses() {
  const db = await open({
    filename: path.join(__dirname, '../../database/aiallstars.db'),
    driver: sqlite3.Database
  });

  try {
    for (const course of sampleCourses) {
      await db.run(
        'INSERT INTO courses (title, description, price, image_url) VALUES (?, ?, ?, ?)',
        [course.title, course.description, course.price, course.image_url]
      );
      console.log(`Added course: ${course.title}`);
    }
    console.log('All courses added successfully!');
  } catch (error) {
    console.error('Error seeding courses:', error);
  } finally {
    await db.close();
  }
}

seedCourses(); 