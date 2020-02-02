require('./controller/dbConnection.js');
const express = require('express');
const app = express();
const db = require('./models');
var url = require('url');


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));


app.get("/exercise", (req,res) => {
  res.sendFile(__dirname + '/public/exercise.html');
});

app.get("/stats", (req,res) => {
  res.sendFile( __dirname + '/public/stats.html');
});


app.get("/api/workouts", (req,res) => {
  db.Workout.find({}).sort({day:-1}).limit(1)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});


app.get("/api/workouts/range", (req,res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});


app.put("/api/workouts/:id", (req,res) => {
  let urlData = req.params;
  let data = req.body;
    db.Workout.updateOne( {_id: urlData.id }, {$push: {exercises:  [
      {
      "type" : data.type,
      "name" : data.name,
      "duration" : data.duration,
      "distance" : data.distance,
      "weight" : data.weight,
      "reps" : data.reps,
      "sets" : data.sets
      }
    ] 
  }}).then(dbUpdate => {
    res.json(dbUpdate);
  })
  .catch(err => {
    res.json(err);
  });
  
  });



  app.post("/api/workouts", (req,res) => {
    let data = req.body;
    db.Workout.create({
      day: new Date().setDate(new Date().getDate())
  }).then(dbUpdate => {
        res.json(dbUpdate);
      })
      .catch(err => {
        res.json(err);
      });
  });


app.listen(PORT , ()=>{
  console.log('on port:',PORT)
})