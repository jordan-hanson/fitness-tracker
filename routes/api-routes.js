const router = require("express").Router();
const Workouts = require("../models/workouts")

router.post("/api/workouts", ({ body }, res) => {
    console.log("you hit the api workouts route")
    Workouts.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err)
            console.log("error for create new workout")
        })
}