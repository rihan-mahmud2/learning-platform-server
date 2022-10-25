const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen(5000, () => {
  console.log("The app is listening on", port);
});
