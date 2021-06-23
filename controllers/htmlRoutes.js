const path = require("path");

function viewHomePage(req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'index.html'));
  }
  
  function viewExercisePage(req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'exercise.html'));
  }
  
  function viewStatsPage(req, res) {
    res.sendFile(path.join(__dirname, '../public/html', 'stats.html'));
  }
  
  module.exports = {
    viewHomePage,
    viewExercisePage,
    viewStatsPage,
  };