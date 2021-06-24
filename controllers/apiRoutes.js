const db = require("../models");

module.exports = function(app){
    app.get('/api/workouts', async (req, res) => {
        try {
            const workouts = await db.Workout.find({}).sort({ day: 1 }).exec();
            res.json(workouts);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        };
    });

    app.get('/api/workouts/range', async (req, res) => {
        try {
            const workouts = await db.Workout.aggregate([{
            $addFields: { totalDuration: { $sum : "$exercises.duration"}} 
        }]);
            const lastSeven = allWorkoutsData.slice(-7);
            res.json(lastSeven);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        };
    });

    app.put('/api/workouts/:id', async (req, res) => {
        try {
            const workoutUpdated = await db.Workout.updateOne(
                { _id: req.params.id },
                { $push: { exercises: req.body }}
            );
            res.json(workoutUpdated);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        };
    });

    app.post("/api/workouts", async ({ body }, res) => {
        try {
            const newWorkout = await db.Workout.create(body);
            res.status(200).send(newWorkout);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        };
    });
}