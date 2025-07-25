const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);
