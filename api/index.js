const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(5000, () => {
  console.log("Api listening...");
});
