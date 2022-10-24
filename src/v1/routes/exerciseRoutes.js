const express = require("express");
const router = express.Router();

const exerciseController = require("../controllers/exerciseController");

router.get("/exercises", exerciseController.index); // READ | index
router.get("/exercises/:id", exerciseController.show); // READ ONE | show
router.post("/exercises", exerciseController.store); // CREATE | store
router.put("/exercises/:id", exerciseController.update); // UPDATE | update

module.exports = router;
