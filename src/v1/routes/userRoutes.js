const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// CRUD - CREATE READ UPDATE DELETE
router.get("/users", userController.index); // READ | index
router.get("/users/:id", userController.show); // READ ONE | show
router.post("/users", userController.store); // CREATE | store
router.put("/users/:id", userController.update); // UPDATE | update

module.exports = router;
