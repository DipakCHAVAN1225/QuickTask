// routes/Bookings.js
const express = require('express');
const Booking = require('../models/booking');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-key';

// Middleware to verify JWT token (same as in server.js)
const verifyToken = (req, res, next) => {
  try {
    console.log('🔐 Verifying token...');
    
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('  Token:', token ? token.substring(0, 20) + '...' : 'NOT FOUND');
    
    if (!token) {
      console.error('❌ No token provided');
      return res.status(401).json({ 
        success: false,
        message: 'Access denied. No token provided.' 
      });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('✅ Token verified for user:', decoded.userId);
    
    req.user = { id: decoded.userId };
    req.token = token;
    next();
  } catch (error) {
    console.error('❌ Token verification failed:', error.message);
    res.status(401).json({ 
      success: false,
      message: 'Access denied. Invalid token.' 
    });
  }
};

// Create booking
router.post('/', verifyToken, async (req, res) => {
  try {
    console.log('📝 Received booking request:');
    console.log('  User:', req.user);
    console.log('  Body:', JSON.stringify(req.body, null, 2));

    const { bookingDetails, paymentMethod, cardLast4, paymentStatus } = req.body;

    // Validate required fields
    if (!bookingDetails) {
      console.error('❌ Missing bookingDetails in request body');
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required booking information: bookingDetails' 
      });
    }

    const { providerId, date, time } = bookingDetails;

    if (!providerId || !date || !time) {
      console.error('❌ Missing required booking fields:', {
        providerId,
        date,
        time
      });
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required booking information: providerId, date, and time are required' 
      });
    }

    // Create booking object
    const booking = new Booking({
      bookingId: `BK${Date.now().toString().slice(-8)}`,
      userId: req.user.id,
      ...bookingDetails,
      paymentMethod,
      cardLast4,
      paymentStatus,
      bookingStatus: 'pending'
    });

    console.log('💾 Saving booking:', booking);
    await booking.save();

    console.log('✅ Booking created successfully:', booking.bookingId);
    res.json({
      success: true,
      bookingId: booking.bookingId,
      message: 'Booking created successfully'
    });
  } catch (err) {
    console.error('❌ Booking creation error:', err.message);
    res.status(500).json({ 
      success: false, 
      message: err.message || 'Failed to create booking'
    });
  }
});

// Get user bookings
router.get('/user/:userId', verifyToken, async (req, res) => {
  try {
    console.log('📖 Fetching bookings for user:', req.params.userId);
    const bookings = await Booking.find({ userId: req.params.userId });
    console.log('✅ Found', bookings.length, 'bookings');
    res.json({ 
      success: true, 
      bookings 
    });
  } catch (err) {
    console.error('❌ Fetch bookings error:', err);
    res.status(500).json({ 
      success: false, 
      message: err.message 
    });
  }
});

module.exports = router;