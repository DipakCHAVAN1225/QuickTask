// server.js - Backend Entry Point
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/quicktask', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'service_provider'], required: true },
  phone: String,
  address: String,
  services: [String], // For service providers
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// JWT Secret
const JWT_SECRET = 'your-secret-key-change-in-production';

// Auth Middleware
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new Error();
    
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) throw new Error();
    
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};

// Register Route
// app.post('/api/auth/register', async (req, res) => {
//   console.log('📥 Full request body:', req.body);
//   console.log('📥 Body type:', typeof req.body);
//   console.log('📥 Body keys:', Object.keys(req.body || {}));
//   try {
//     const { name, email, password, role } = req.body;
//      console.log('Extracted values:');
//     console.log('  name:', name);
//     console.log('  email:', email);
//     console.log('  password:', password ? '***' : 'UNDEFINED');
//     console.log('  role:', role);

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already registered' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       services: role === 'service_provider' ? services : []
//     });

//     await user.save();

//     // Generate token
//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

//     res.status(201).json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role
//       }
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

app.post('/api/auth/register', async (req, res) => {
  console.log('📥 Full request body:', req.body);
  
  try {
    let { name, email, password, role, phone, address, services, businessName, serviceType } = req.body;
    
    // Handle businessName for service providers
    if (!name && businessName) {
      name = businessName;
    }
    
    // Normalize role - accept both 'provider' and 'service_provider'
    if (role === 'provider') {
      role = 'service_provider';
    }
    
    // For service providers, use serviceType if services not provided
    if (role === 'service_provider' && !services && serviceType) {
      services = [serviceType];
    }

    // Validate required fields
    if (!name || !email || !password || !role) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        received: { name: !!name, email: !!email, password: !!password, role: !!role }
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      phone,
      address,
      services: role === 'service_provider' ? services : []
    });

    await user.save();

    // Generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('❌ Registration error:', error);
    res.status(400).json({ error: error.message });
  }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Current User
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      services: req.user.services
    }
  });
});

// Get All Service Providers (for users)
app.get('/api/service-providers', authMiddleware, async (req, res) => {
  try {
    const providers = await User.find({ role: 'service_provider' })
      .select('-password');
    res.json(providers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});