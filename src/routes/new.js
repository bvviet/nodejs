const express = require("express");
const router = express.Router();
const NewsController = require("../app/controllers/NewsControllers");

router.use("/:show", NewsController.show);
router.use("/", NewsController.index);

module.exports = router;
