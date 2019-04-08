const express = require("express");
const router = express.Router();

const apiAdapter = require("./apiAdapter");

const BASE_URL = "http://localhost:8000";
const api = apiAdapter(BASE_URL);

router.get("/feeds", (req, res, next) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get("/feeds/:hashtag", (req, res, next) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post("/feeds", (req, res, next) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
