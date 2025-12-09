// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const router = express.Router();
// const User = require("../models/User");

// // POST /api/auth/register
// router.post("/register", async (req, res) => {
//   try {
//     const { role, name, email, password, businessName, serviceType } = req.body;
//     if (!email || !password) return res.status(400).json({ message: "Email & password required" });

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already registered" });

//     const salt = await bcrypt.genSalt(10);
//     const passwordHash = await bcrypt.hash(password, salt);

//     const user = new User({
//       name,
//       email,
//       passwordHash,
//       role: role === "provider" ? "provider" : "user",
//       businessName: businessName || undefined,
//       serviceType: serviceType || undefined
//     });

//     await user.save();

//     // sign token
//     const token = jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

//     return res.status(201).json({ token, user: {
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       businessName: user.businessName,
//       serviceType: user.serviceType
//     }});
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

// // POST /api/auth/login
// router.post("/login", async (req, res) => {
//   try {
//     const { role, email, password, businessName } = req.body;
//     if (!email || !password) return res.status(400).json({ message: "Email & password required" });

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     // If login is supposed to be provider only for provider tab, optional check:
//     if (role === "provider" && user.role !== "provider") {
//       return res.status(403).json({ message: "Not a provider account" });
//     }

//     const valid = await bcrypt.compare(password, user.passwordHash);
//     if (!valid) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

//     return res.json({ token, user: {
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       businessName: user.businessName,
//       serviceType: user.serviceType
//     }});
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

// // backend/routes/auth.js
// const express = require("express");
// const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");
// const User = require("../models/User");
// const sendVerificationEmail = require("../utils/mailer"); // optional helper you'll create
// const router = express.Router();

// // POST /api/auth/register
// router.post(
//   "/register",
//   [
//     // common checks
//     body("email").isEmail().withMessage("Valid email required"),
//     body("password").isLength({ min: 6 }).withMessage("Password minimum 6 chars"),
//     // if role is user then require name, if provider require businessName & serviceType
//     body("role").optional().isIn(["user", "provider"]),
//     body("name").if(body("role").not().equals("provider")).notEmpty().withMessage("Name required"),
//     body("businessName").if(body("role").equals("provider")).notEmpty().withMessage("Business name required"),
//     body("serviceType").if(body("role").equals("provider")).notEmpty().withMessage("Service type required")
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return res.status(400).json({ message: "Validation failed", errors: errors.array() });

//     const { role = "user", name, email, password, businessName, serviceType } = req.body;

//     try {
//       // normalize email
//       const normalizedEmail = (email || "").toLowerCase().trim();

//       // check duplicate
//       const existing = await User.findOne({ email: normalizedEmail });
//       if (existing) return res.status(400).json({ message: "Email already registered" });

//       // hash password
//       const salt = await bcrypt.genSalt(10);
//       const passwordHash = await bcrypt.hash(password, salt);

//       // create user object
//       const userData = {
//         email: normalizedEmail,
//         passwordHash,
//         role: role === "provider" ? "provider" : "user"
//       };

//       if (role === "provider") {
//         userData.businessName = businessName;
//         userData.serviceType = serviceType;
//         userData.providerVerified = false;
//         // set status to pending so admin can approve
//         userData.status = "pending";
//       } else {
//         userData.name = name;
//         userData.status = "active";
//       }

//       // optional: email verification setup
//       const verificationToken = crypto.randomBytes(24).toString("hex");
//       userData.emailVerificationToken = verificationToken;
//       userData.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
//       userData.emailVerified = false;

//       const user = new User(userData);
//       await user.save();

//       // send verification email (non-blocking)
//       // implement sendVerificationEmail(email, token) using nodemailer
//       if (process.env.SEND_VERIFICATION_EMAIL === "true") {
//         sendVerificationEmail(user.email, verificationToken).catch(err => {
//           console.error("Failed to send verification email:", err);
//         });
//       }

//       // issue JWT (you can decide not to auto-login provider until approved)
//       // If provider -> you may not want to sign token until approved. Here we sign but client can check status.
//       const tokenPayload = { id: user._id.toString(), role: user.role, email: user.email };
//       const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

//       // return public user object
//       const publicUser = {
//         id: user._id,
//         email: user.email,
//         role: user.role,
//         name: user.name,
//         businessName: user.businessName,
//         serviceType: user.serviceType,
//         status: user.status,
//         emailVerified: user.emailVerified
//       };

//       return res.status(201).json({ token, user: publicUser });
//     } catch (err) {
//       console.error("Register error:", err);
//       return res.status(500).json({ message: "Server error" });
//     }
//   }
// );

// module.exports = router;


// backend/routes/auth.js  (replace existing /register handler)
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password minimum 6 chars"),
    body("role").optional().isIn(["user", "provider"]),
    // require name for users, businessName & serviceType for providers
    body("name").if(body("role").not().equals("provider")).notEmpty().withMessage("Name required"),
    body("businessName").if(body("role").equals("provider")).notEmpty().withMessage("Business name required"),
    body("serviceType").if(body("role").equals("provider")).notEmpty().withMessage("Service type required")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: "Validation failed", errors: errors.array() });

    const { role = "user", name, email, password, businessName, serviceType } = req.body;

    try {
      const normalizedEmail = (email || "").toLowerCase().trim();
      const existing = await User.findOne({ email: normalizedEmail });
      if (existing) return res.status(400).json({ message: "Email already registered" });

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const userData = {
        email: normalizedEmail,
        passwordHash,
        role: role === "provider" ? "provider" : "user",
        status: "active",             // immediate activation
        providerVerified: role === "provider" ? true : false // set true if you want providers auto-verified
      };

      if (role === "provider") {
        userData.businessName = businessName;
        userData.serviceType = serviceType;
      } else {
        userData.name = name;
      }

      // (optional) skip email verification flow or still create a token for verification link
      const user = new User(userData);
      await user.save();

      const tokenPayload = { id: user._id.toString(), role: user.role, email: user.email };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

      const publicUser = {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
        businessName: user.businessName,
        serviceType: user.serviceType,
        status: user.status
      };

      return res.status(201).json({ token, user: publicUser });
    } catch (err) {
      console.error("Register error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;



