const express = require("express");
const { createEvent, getEvents } = require("../controllers/eventController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth("ADMIN"), createEvent);
router.get("/", getEvents);

module.exports = router;
