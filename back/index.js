const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const data = require("./logements.json");

app.use(cors());

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Back end listening on port ${port}`);
});
