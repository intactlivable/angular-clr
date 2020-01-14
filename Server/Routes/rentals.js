const express = require("express");
const router = express.Router();
const rental = require("../Models/rental");
router.get("", function(req, res) {
  rental.find({}, function(error, foundRentals) {
    res.json(foundRentals);
  });
});

router.get("/:id", function(req, res) {
  const rentalId = req.params.id;
  rental.findById(rentalId, function(error, foundRental) {
    if (foundRental == null) {
      res.status(422).send({
        errors: [{ title: "Rental Error", detail: "no rental found" }]
      });
    } else {
      res.json(foundRental);
    }
  });
});

module.exports = router;
