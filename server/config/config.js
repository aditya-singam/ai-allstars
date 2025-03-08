const path = require('path');

const config = {
  development: {
    port: process.env.PORT || 5000,
    database: {
      path: path.join(__dirname, '../../database/aiallstars.db')
    },
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    corsOrigin: 'http://localhost:3000'
  },
  production: {
    port: process.env.PORT || 5000,
    database: {
      path: path.join(__dirname, '../../database/aiallstars.db')
    },
    jwtSecret: process.env.JWT_SECRET,
    corsOrigin: process.env.FRONTEND_URL
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];