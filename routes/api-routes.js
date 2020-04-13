const router = require("express").Router();
const Workouts = require("../models/workouts")

router.post("/api/workouts", ({ body }, res) => {
    console.log("you hit the api workouts route")
    Workouts.create(body)
        .then(dbWorkouts => {
            console.log("this is new workout created", dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
            console.log("error for create new workout")
        });
});
router.get("/api/workouts", (req, res) => {
    console.log("you hit the api workouts route")
    Workouts.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err)
            console.log("error for create new workout")
        });
});
router.put("/api/workouts/:id", (req, res) => {
    console.log("adding workout to db")
    Workouts.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err)
        })
});
router.get("/api/workouts/range", (req, res) => {
    console.log("you hit the api workouts route range")
    Workouts.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err)
            console.log("error for create new workout")
        });
});




module.exports = router

