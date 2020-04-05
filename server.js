const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();
const port = process.env.PORT || 5000;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

mongoose
  .connect(
    process.env.MONGODB_URI ||
      //"mongodb://localhost/users",
      "mongodb://user:covid19@ds113866.mlab.com:13866/heroku_g4m022wz",
    { useNewUrlParser: true, useFindAndModify: false }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use(require("./routes/api/symptoms"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
