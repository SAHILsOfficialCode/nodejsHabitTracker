// routes.js
const express = require("express");
const habitController = require("../controllers/habitController");

const router = express.Router();

router.get("/", habitController.getAllHabits);
router.post("/habit/add", habitController.addHabits);
router.get("/habit/:id", habitController.getHabitById);
router.get("/habit/:id/toggle-status", habitController.toggleStatus);
router.post("/habit/:id/update", habitController.updateHabit);

router.post("/habit/:id/delete", habitController.deleteHabit);

module.exports = router;
