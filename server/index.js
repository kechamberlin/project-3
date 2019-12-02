const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



// MY OWN CODE:
const db = require("./models");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}





// MY OWN CODE:
app.get("/associateattorney", (req, res) => {
  db.AssociateAttorney.find({})
    .then(dbAssociateAttorney => {
      res.json(dbAssociateAttorney);
    })
    .catch(err => {
      res.json(err);
    });
});









// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});