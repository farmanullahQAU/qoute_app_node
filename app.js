const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const quoteRoutes = require('./routes/quoteRoutes');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', quoteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
