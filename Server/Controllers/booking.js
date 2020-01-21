const Booking = require("../Models/booking");
const Rental = require("../Models/rental");

exports.createBooking = function(req, res) {
  const { startAt, endAt, totalPrice, guests, days, rental } = req.body;

  const booking = new Booking({ startAt, endAt, totalPrice, guests, days });
  console.log(booking);
  Rental.findById(rental.title).exec(function(error, foundRental) {
    if (error) {
      return res.status(422).send({ errors: "error" });
    }
    return res.json({ booking, foundRental });
  });
  return res.json({ booking });
};
