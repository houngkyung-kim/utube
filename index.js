const express = require("express");
const app = express();

const port = 3000;

function handleHome(req, res) {
  res.send("Hello World!");
  console.log(res);
  // console.log("----------")
  // console.log(res)
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

function handleListening() {
  console.log(`Listening at http://localhost:${port}`);
}
app.listen(port, handleListening);
