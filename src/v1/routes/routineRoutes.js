const express = require('express')
const router = express.Router()

const routineController = require('../controllers/routineController')

// CRUD - CREATE READ UPDATE DELETE
router.get('/routines', routineController.index); // READ | index
router.get('/routines/:id', routineController.show); // READ ONE | show
router.post('/routines', routineController.store); // CREATE | store
router.put('/routines/:id', routineController.update); // UPDATE | update
router.delete('/routines/:id', routineController.destroy) // DELETE | destroy

module.exports = router