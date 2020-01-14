const mongoose = require("mongoose");

const schema = mongoose.Schema;

const rentalSchema = new schema({
  title: { type: String, require: true, max: [128, "too long, max is 128"] },
  city: { type: String, require: true, lowercase: true },
  street: { type: String, require: true },
  city: { type: String, require: true, lowercase: true },
  category: { type: String, require: true },
  image: { type: String, require: true },
  bedrooms: Number,
  shared: Boolean,
  description: { type: String, require: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rental", rentalSchema);
