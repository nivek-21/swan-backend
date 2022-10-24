const express = require("express");
const router = express.Router();

const roleController = require("../controllers/roleController");

// CRUD - CREATE READ UPDATE DELETE
router.get("/roles", roleController.index); // READ | index

module.exports = router;
