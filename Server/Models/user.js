const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    min: [4, "too short"],
    max: [32, "too long, max is 32"]
  },
  email: {
    type: String,
    require: "email is required",
    min: [4, "too short"],
    max: [32, "too long, max is 32"],
    unique: true,
    lowercase: true
  },
  password: { type: String, require: "password is required" },
  rentals: [{ type: Schema.Types.ObjectId, ref: "Rental" }]
});

userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
      // Store hash in your password DB.
    });
  });
});

userSchema.methods.hasSamePassword = function(requestedPassword) {
  const password = this.password;
  return bcrypt.compareSync(requestedPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
