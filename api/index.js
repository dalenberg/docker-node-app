const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`Api listening on port ${app.get("port")}`);
});
