const express = require("express");
const router = express.Router();
const Task = require('../models/Task')


// Post /api/tasks

router.post('/', async (req,res) =>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// GET /api/tasks

router.get('/', async (req, res) => {
    try {
    const tasks = await Task.find();
    res.json(tasks);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

module.exports = router;