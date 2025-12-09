const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1]; // Authorization: Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // payload should include id and role
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
