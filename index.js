const express = require('express');
const app = express();
const apiRoutes = require('./api');

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use API routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
