const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const uploadRouter = require("./routes/upload");

app.use(cors());


// connecting to database
mongoose
  .connect("mongodb://127.0.0.1:27017/klimbdata")
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });
//making POST request

app.use("/api/upload", uploadRouter.router);
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
