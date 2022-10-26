const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 5000;
const courses = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/course", (req, res) => {
  res.send(courses);
  console.log(courses);
});

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const detailsInf = courses.find((detail) => id == detail.id);
  res.send(detailsInf);
});

app.listen(5000, () => {
  console.log("The app is listening on", port);
});
