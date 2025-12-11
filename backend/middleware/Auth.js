// backend/middleware/Auth.js
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    let token = null;

    // Check standard headers
    const authHeader = req.header('Authorization');
    if (authHeader) {
      token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
    }

    // Fallback: x-auth-token header
    if (!token) {
      token = req.header('x-auth-token');
    }

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded will contain the data we signed (id, email, role)
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Auth middleware error:', err.message);
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};
