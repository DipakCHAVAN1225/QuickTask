

// // backend/routes/auth.js
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const User = require('../models/User');

// // create token helper
// function createToken(user) {
//   return jwt.sign(
//     { id: user._id.toString(), email: user.email, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: '7d' }
//   );
// }

// // POST /api/auth/register
// router.post('/Signup', async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'Name, email and password are required.' });
//     }

//     const existing = await User.findOne({ email: email.toLowerCase() });
//     if (existing) return res.status(409).json({ message: 'Email already registered.' });

//     const salt = await bcrypt.genSalt(10);
//     const hashed = await bcrypt.hash(password, salt);

//     const user = new User({
//       name: name.trim(),
//       email: email.toLowerCase().trim(),
//       password: hashed,
//       role: role || 'user'
//     });

//     await user.save();
//     const token = createToken(user);

//     res.status(201).json({
//       message: 'User registered.',
//       token,
//       user: { id: user._id, name: user.name, email: user.email, role: user.role }
//     });
//   } catch (err) {
//     console.error('Signup error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // POST /api/auth/login
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ message: 'Email and password are required.' });

//     const user = await User.findOne({ email: email.toLowerCase() });
//     if (!user) return res.status(401).json({ message: 'Invalid credentials.' });

//     const matched = await bcrypt.compare(password, user.password);
//     if (!matched) return res.status(401).json({ message: 'Invalid credentials.' });

//     const token = createToken(user);
//     res.json({
//       message: 'Login successful.',
//       token,
//       user: { id: user._id, name: user.name, email: user.email, role: user.role }
//     });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // optional quick test route: GET /api/auth/test
// router.get('/test', (req, res) => res.send('Auth route mounted'));

// module.exports = router;


const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/Auth');

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register user/provider
 * @body    { name, email, password, role }  role: 'user' or 'provider'
 */
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Please provide name, email, password and role' });
    }

    if (!['user', 'provider'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    let existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'User with that email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashed,
      role
    });

    await user.save();

    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login and return token
 * @body    { email, password }
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Please provide email and password' });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   GET /api/auth/me
 * @desc    Get logged-in user info (protected)
 */
router.get('/me', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
