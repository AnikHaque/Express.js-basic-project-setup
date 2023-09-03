const express = require('express');
const app = express();

// Middlewares (you can add more as needed)
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

// Routes
const apiRouter = require('./src/Routes/api');
app.use('/api', apiRouter); // Mount the API router under '/api'

// Error handling middleware (customize as needed)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
