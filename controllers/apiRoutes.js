const db = require("../models");

module.exports = function(app){
    app.get('/api/workouts', async (req, res) => {
        try {
            const workouts = await Workout.find({}).sort({ day: 1 }).exec();
            res.json(workouts);
          } catch (error) {
            res.json(error);
          }
    });

    app.get('/api/workouts/range', async (req, res) => {
        const workouts = await db.Workout.aggregate([{
            $addFields: {
                totalDuration: { $sum : "$exercises.duration"}
            } 
        }])
        const lastSeven = allWorkoutsData.slice(-7);
        res.json(lastSeven);
    })

    
}