const express = require("express");
const mongoose = require("mongoose");
const { dbpw } = require("./db/dbpw");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://thatslifebro:${dbpw}@instardb.eljuzer.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(console.log("db connected."));

const app = express();
const sport = 3001;

app.listen(sport, (req, res) => {
  console.log("서버 열기 성공");
});
