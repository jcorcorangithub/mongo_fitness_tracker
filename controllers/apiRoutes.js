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

    


}