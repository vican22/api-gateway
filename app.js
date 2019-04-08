const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const router = require("./router/router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("Simple API Gateway");
});

app.use(router);

app.listen(3000, () => {
  console.log(`App is running on port 3000`);
});
