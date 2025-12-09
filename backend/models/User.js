// backend/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String }, // for regular users
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },

  // role and status
  role: { type: String, enum: ["user", "provider"], default: "user" },
  status: { type: String, enum: ["pending", "active", "suspended", "rejected"], default: "active" },

  // provider-specific fields
  businessName: { type: String },
  serviceType: { type: String },
  providerVerified: { type: Boolean, default: false },

  // email verification
  emailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String },
  emailVerificationExpires: { type: Date },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// update updatedAt
UserSchema.pre("save", function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", UserSchema);
