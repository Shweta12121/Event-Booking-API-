const Event = require("../models/Event");
const Booking = require("../models/Booking");

exports.bookEvent = async (req, res) => {
  const eventId = req.params.eventId;
  const userId = req.user.id;

  const event = await Event.findById(eventId).populate("bookings");
  if (!event) return res.status(404).json({ message: "Event not found" });

  const alreadyBooked = await Booking.findOne({ event: eventId, user: userId });
  if (alreadyBooked) return res.status(400).json({ message: "Already booked" });

  if (event.bookings.length >= event.capacity)
    return res.status(400).json({ message: "Event full" });

  const booking = await Booking.create({ user: userId, event: eventId });
  event.bookings.push(booking._id);
  await event.save();

  res.status(201).json(booking);
};

exports.myBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("event");
  res.json(bookings);
};
