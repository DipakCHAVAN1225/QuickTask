const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema({
  bookingId: String,
  userId: String,
  providerId: String,
  providerName: String,
  service: String,
  date: String,  // Changed from Date to String to match frontend format
  time: String,
  quantity: Number,
  totalAmount: Number,
  paymentMethod: String,
  paymentStatus: String, // 'completed', 'pending'
  bookingStatus: String,  // 'pending', 'confirmed', 'cancelled'
  cardLast4: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("booking", bookingSchema);