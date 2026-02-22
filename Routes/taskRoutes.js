const express = require("express");
const router = express.Router();
const taskController = require('../controllers/taskcontroller');

// POST /api/tasks
router.post('/', taskController.createTask);

// GET /api/tasks
router.get('/', taskController.getTasks);

module.exports = router;

