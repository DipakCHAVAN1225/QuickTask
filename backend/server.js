

////////////////////////////
// backend/server.js
// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// ============ CONFIGURATION ============
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quicktask';
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-key';
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

console.log('🔧 Configuration:');
console.log(`   Environment: ${NODE_ENV}`);
console.log(`   Port: ${PORT}`);
console.log(`   MongoDB: ${MONGODB_URI.split('@')[1] || MONGODB_URI}`);
console.log(`   CORS Origin: ${CORS_ORIGIN}`);
console.log(`   JWT Secret: ${JWT_SECRET.substring(0, 10)}...`);

// ============ MIDDLEWARE ============
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());

// Request logging middleware (development only)
if (NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`📥 ${req.method} ${req.path}`);
    next();
  });
}

// ============ DATABASE CONNECTION ============
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// ============ USER SCHEMA ============
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'provider'], required: true },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  
  // For service providers
  businessName: { type: String, default: '' },
  serviceType: { type: String, default: '' },
  services: [String],
  
  // Profile
  dp: { type: String, default: '' },
  bio: { type: String, default: '' },
  rating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },
  
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// ============ AUTH MIDDLEWARE ============
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate', details: error.message });
  }
};

// ============ ROUTES ============

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    let { name, email, password, role, phone, address, businessName, serviceType } = req.body;
    
    if (role === 'service_provider') role = 'provider';
    if (!name && businessName) name = businessName;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role,
      phone: phone || '',
      address: address || '',
    };

    if (role === 'provider') {
      userData.businessName = businessName || name;
      userData.serviceType = serviceType || '';
      userData.services = serviceType ? [serviceType] : [];
    }

    const user = new User(userData);
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessName: user.businessName,
        serviceType: user.serviceType,
        phone: user.phone,
        address: user.address,
        dp: user.dp
      }
    });

    console.log(`✅ User registered: ${user.email} (${user.role})`);
  } catch (error) {
    console.error('❌ Register error:', error);
    res.status(400).json({ error: error.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        businessName: user.businessName,
        serviceType: user.serviceType,
        phone: user.phone,
        address: user.address,
        dp: user.dp
      }
    });

    console.log(`✅ User logged in: ${user.email}`);
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(400).json({ error: error.message });
  }
});

// Get current user
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    res.json({
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        businessName: req.user.businessName,
        serviceType: req.user.serviceType,
        phone: req.user.phone,
        address: req.user.address,
        dp: req.user.dp,
        services: req.user.services,
        rating: req.user.rating,
        totalReviews: req.user.totalReviews
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update profile
app.put('/api/auth/profile', authMiddleware, async (req, res) => {
  try {
    const { name, phone, address, businessName, serviceType, bio, dp } = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: name || req.user.name,
        phone: phone !== undefined ? phone : req.user.phone,
        address: address !== undefined ? address : req.user.address,
        businessName: businessName !== undefined ? businessName : req.user.businessName,
        serviceType: serviceType !== undefined ? serviceType : req.user.serviceType,
        bio: bio !== undefined ? bio : req.user.bio,
        dp: dp !== undefined ? dp : req.user.dp
      },
      { new: true }
    ).select('-password');

    res.json({ user: updatedUser });
    console.log(`✅ Profile updated: ${updatedUser.email}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Change password
app.post('/api/auth/change-password', authMiddleware, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current and new password required' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'New password must be at least 6 characters' });
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, req.user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Current password is incorrect' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(req.user._id, { password: hashedPassword });

    res.json({ message: 'Password changed successfully' });
    console.log(`✅ Password changed: ${req.user.email}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all service providers
app.get('/api/service-providers', async (req, res) => {
  try {
    const providers = await User.find({ role: 'provider' }).select('-password').lean();
    res.json(providers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get single provider
app.get('/api/service-providers/:id', async (req, res) => {
  try {
    const provider = await User.findById(req.params.id).select('-password');
    
    if (!provider || provider.role !== 'provider') {
      return res.status(404).json({ error: 'Provider not found' });
    }
    
    res.json(provider);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', environment: NODE_ENV });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ============ START SERVER ============
app.listen(PORT, () => {
  console.log('\n🚀 QuickTask Server Started');
  console.log(`   🔗 http://localhost:${PORT}`);
  console.log(`   📡 API: http://localhost:${PORT}/api`);
  console.log(`   🏥 Health: http://localhost:${PORT}/api/health`);
  console.log(`\n`);
});