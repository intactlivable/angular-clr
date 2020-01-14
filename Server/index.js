const express = require("express");

const mongoose = require("mongoose");

const FakeDb = require("./fake-data");

const rentalRoutes = require("./Routes/rentals");

mongoose
  .connect(
    "mongodb+srv://admin:Hallo123!@cluster0-vigi8.azure.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  });

const app = express();

app.use("/api/v1/rentals", rentalRoutes);

// app.get("/rentals", function(req, res) {
//   res.json({ success: true });
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log("I am running");
});
