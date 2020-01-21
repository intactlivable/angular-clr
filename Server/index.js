const express = require("express");

const mongoose = require("mongoose");

const FakeDb = require("./fake-data");

const bodyParser = require("body-parser");

const rentalRoutes = require("./Routes/rentals");
const userRoutes = require("./Routes/users");
const bookingsRoutes = require("./Routes/bookings");

// const userController = require("./Controllers/user");

mongoose
  .connect(
    // "mongodb+srv://admin:Hallo123!@cluster0-vigi8.azure.mongodb.net/test?retryWrites=true&w=majority"
    "mongodb+srv://admin:Hallo123!@cluster0-vigi8.azure.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  });

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/bookings", bookingsRoutes);
app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);

// app.get("/rentals", function(req, res) {
//   res.json({ success: true });
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log("I am running");
});
