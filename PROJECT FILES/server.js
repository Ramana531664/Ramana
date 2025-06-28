// Load environment variables from .env
require('dotenv').config();

// Import the app from app.js
const app = require('./app');
const mongoose = require('mongoose');

// Get MongoDB connection string from .env
const mongoURI = process.env.DATABASE;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB successfully!");
})
.catch((err) => {
  console.error("❌ Error connecting to MongoDB:", err);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
