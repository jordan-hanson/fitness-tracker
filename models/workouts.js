var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Choose you either Cardio or Resistance"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a Workout Name"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    },
    weight: {
        type: Number,
        required: "Enter an amount"
    },
    reps: {
        type: Number,
        required: "Enter an amount"
    },
    sets: {
        type: Number,
        required: "Enter an amount"
    },
    distance: {
        type: Number,
        required: "Enter an amount"
    },
});

const workout = mongoose.model("Workouts", workoutSchema)

modeule.exports = workout;