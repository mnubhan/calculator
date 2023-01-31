const express = require("express");
const app = express();

app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
  res.sendFile(__dirname+"/index.html");
  console.log(__dirname);
});

app.listen(1993, (req, res) => {
  console.log("listening to port 1993");
});
