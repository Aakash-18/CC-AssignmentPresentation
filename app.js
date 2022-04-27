const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>This is the Website for CC Assignment Presentation<h1>");
});

app.listen(port, () => {
  console.log("Demo up and listening on port ");
});
