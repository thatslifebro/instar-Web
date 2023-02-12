const express = require("express");
const mongoose = require("mongoose");
const { dbpw } = require("./db/dbpw");
const API = require("./routes/api");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://thatslifebro:tjddus9598@instardb.eljuzer.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(console.log("db connected."))
  .catch((err) => console.log("db connection failed", err));

const app = express();
const sport = 3001;
app.get("/", (req, res) => {
  res.send("root page");
});
app.use("/api", API);

app.listen(sport, (req, res) => {
  console.log("서버 열기 성공");
});
