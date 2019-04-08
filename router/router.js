const express = require("express");
const router = express.Router();
const feedService = require("./feedService");
const hashService = require("./hashtagService");

router.use((req, res, next) => {
  console.log("Called", req.path);
});

router.use(feedService);
router.use(hashService);

module.exports = router;
