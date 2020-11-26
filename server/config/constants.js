require('dotenv').config();

module.exports = {
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET
};
