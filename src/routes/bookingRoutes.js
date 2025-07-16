const express = require("express");
const { bookEvent, myBookings } = require("../controllers/bookingController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/:eventId", auth(), bookEvent);
router.get("/me", auth(), myBookings);

module.exports = router;
