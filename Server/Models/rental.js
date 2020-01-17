const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rentalSchema = new Schema({
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
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Rental", rentalSchema);
