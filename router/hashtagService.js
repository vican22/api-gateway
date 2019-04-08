const express = require("express");
const router = express.Router();

const apiAdapter = require("./apiAdapter");

const BASE_URL = "http://localhost:8088";
const api = apiAdapter(BASE_URL);

router.get("/hashtags", (req, res, next) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
  //res.send(req.path + " called");
});

router.get("/hashtags/:name", (req, res, next) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
