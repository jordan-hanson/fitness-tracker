const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log("fetch last workout", err)
    }
    const json = await res.json();
    var lastWorkout = json[json.length - 1];

    console.log('this is our last workout', lastWorkout)
    var durTotal = 0
    for (var i = 0; i < lastWorkout.exercises.length; i++) {
      console.log('singleexercise!!', lastWorkout.exercises[i].duration)
      durTotal += lastWorkout.exercises[i].duration
    }



    // console.log("duration res", json[json.length - 1])
    lastWorkout.totalDuration = durTotal;
    return lastWorkout;
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};

