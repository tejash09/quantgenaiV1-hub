require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user'); // Import the User model

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust for production)
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() =>{ console.log('MongoDB connected successfully');
  console.log(`Connected to database: '${mongoose.connection.name}'`);})
  .catch(err => console.error('MongoDB connection error:', err));

// --- API Routes ---

// Signup Route
// Signup Route
app.post('/api/auth/signup', async (req, res) => {
    console.log('--- SIGNUP ROUTE HIT ---'); // <--- Add this
    console.log('Request Body:', req.body); // <--- Add this
    try {
      const { email, password, name } = req.body;
      console.log(`Received signup request for: ${email}`); // <--- Add this
  
      // Basic validation
      if (!email || !password) {
        console.log('Validation failed: Email or password missing'); // <--- Add this
        return res.status(400).json({ message: 'Email and password are required' });
      }
  
      // Check if user already exists
      console.log(`Checking if user exists: ${email}`); // <--- Add this
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         console.log(`User already exists: ${email}`); // <--- Add this
        return res.status(409).json({ message: 'User already exists with this email' });
      }
      console.log(`User does not exist, proceeding to create: ${email}`); // <--- Add this
  
      const newUser = new User({ email, password, name });
      await newUser.save();
      console.log(`User saved successfully: ${email}, ID: ${newUser._id}`); // <--- Add this
  
      const userResponse = { id: newUser._id, email: newUser.email, name: newUser.name };
      res.status(201).json({ message: 'User created successfully', user: userResponse });
      console.log(`Signup successful for: ${email}`); // <--- Add this
    } catch (error) {
      console.error("!!! Signup Server Error !!!"); // <--- Modify this
      console.error("Error Details:", error);      // <--- Add this
      res.status(500).json({ message: 'Server error during signup' });
    }
  });

// Login Route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // --- !!! SECURITY WARNING !!! ---
    // Comparing plain text passwords. DO NOT DO THIS IN PRODUCTION.
    // Use bcrypt.compareSync(password, user.password) instead.
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Login successful
    // Don't send the password back
    const userResponse = { id: user._id, email: user.email, name: user.name };
    // In a real app, you'd typically generate a JWT (JSON Web Token) here
    res.status(200).json({ message: 'Login successful', user: userResponse });
    console.log(`Login successful for: ${email}`);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});