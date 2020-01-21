const express = require("express");
const router = express.Router();
const BookingController = require("../Controllers/booking");
const UserController = require("../Controllers/user");

router.post("", BookingController.createBooking);

module.exports = router;
