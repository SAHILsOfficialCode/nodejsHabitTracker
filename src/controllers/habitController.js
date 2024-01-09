const Habit = require("../models/habit");

// To get all Habits
async function getAllHabits(req, res) {
  try {
    const habits = await Habit.find();
    res.render("index", { habits, weekDays: getOneWeekDate() });
  } catch (e) {
    console.error("Error fetching habits:", e);
    res.status(500).send("Internal Server Error");
  }
}

// To get habit by Id
async function getHabitById(req, res) {
  try {
    const habit = await Habit.findById(req.params.id);
    res.render("habit", { habit });
  } catch (error) {
    console.error("Error fetching habit:", error);
    res.status(500).send("Internal Server Error");
  }
}

// To update status
async function updateHabit(req, res) {
  try {
    const { habitId, status } = req.body;
    const habit = await Habit.findById(habitId);
    if (!habit) {
      return res.status(400).send("Habit not found");
    }
    const today = new Date().toDateString();
    const dayToUpdate = habit.days.find((day) => day.date === today);
    if (dayToUpdate) {
      dayToUpdate.status = status;
    }
    await habit.save();
    return res.status(200).redirect("back");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server error");
  }
}

// To delete habit
async function deleteHabit(req, res) {
  try {
    const habitId = req.params.id;
    await Habit.findByIdAndDelete(habitId);
    res.redirect("/");
  } catch (e) {
    console.error("Error deleting habit:", e);
    res.status(500).send("Internal Server Error");
  }
}

// Helper function to get an array of dates for the current week
function getOneWeekDate() {
  let months = [
    "",
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dates = [];
  for (let i = 6; i >= 0; i--) {
    const currDate = new Date();
    currDate.setDate(currDate.getDate() - i);
    let mm = currDate.getMonth() + 1;
    mm = months[mm];
    let dd = currDate.getDate();
    if (dd < 10) dd = "0" + dd;
    dates.push(mm + " " + dd);
  }
  return dates;
}

// To add Habits
async function addHabits(req, res) {
  try {
    const newHabit = await Habit.create({
      name: req.body.name,
      days: [
        {
          date: new Date().toDateString(),
          status: "None",
        },
      ],
    });
    // console.log(newHabit);
    return res.status(200).redirect("back");
  } catch (e) {
    console.error("Error adding habit:", e);
    res.status(500).send("Internal Server Error");
  }
}

// Handles toggling the status of a habit
async function toggleStatus(req, res) {
  try {
    let date = req.query.date;
    const habitId = req.query.habitId;

    const habit = await Habit.findById(habitId);

    if (!habit) {
      console.log("No Habit available");
      return res.redirect("back");
    }

    let days = habit.days;
    let flag = false;

    days.forEach((day) => {
      if (day.date === date) {
        if (day.status === "Done") {
          day.status = "Not done";
        } else if (day.status === "Not done") {
          day.status = "Done";
        }
        flag = true;
      }
    });

    if (!flag) {
      days.push({ date: date, status: "Done" });
    }

    habit.days = days;
    await habit.save();
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server error");
  }
}

module.exports = {
  addHabits,
  getAllHabits,
  updateHabit,
  getHabitById,
  deleteHabit,
  toggleStatus,
};
