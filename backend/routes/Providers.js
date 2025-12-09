// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/Auth");
// const User = require("../models/User");

// // GET /api/providers/me - provider's dashboard (provider-only)
// router.get("/me", auth, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const user = await User.findById(userId).select("-passwordHash");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     if (user.role !== "provider") return res.status(403).json({ message: "Access denied" });

//     return res.json({ provider: user });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;\

// backend/routes/providers.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth");
const User = require("../models/User");

// GET /api/providers/me - provider's dashboard (provider-only)
router.get("/me", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-passwordHash");
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.role !== "provider") return res.status(403).json({ message: "Access denied" });

    return res.json({ provider: user });
  } catch (err) {
    console.error("providers/me error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

