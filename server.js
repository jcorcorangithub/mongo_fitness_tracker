//const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const logger = require("morgan");

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

require("./controllers/apiRoutes")(app);
require("./controllers/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});