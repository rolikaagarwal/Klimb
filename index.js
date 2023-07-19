const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const uploadRouter = require("./routes/upload");

mongoose
  .connect("mongodb://127.0.0.1:27017/klimbdata")
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use("/api/upload", uploadRouter.router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "API running" });
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});