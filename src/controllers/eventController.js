const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

exports.getEvents = async (req, res) => {
  const events = await Event.find().populate("bookings");
  res.json(events);
};
