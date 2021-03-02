const db = require("../models");

module.exports = function(app){

app.get("/api/workouts", function(req,res){
    db.workout.find({}).then(dbworkout => {res.json(dbworkout);
    })
    .catch(err => {res.json(err);
    });
});
app.get("/api/workouts/range",function(req,res){
    db.workout.find({}).then((dbworkout) => {res.json(dbworkout);
    })
    .catch(err => {res.json(err);
    });
});
app.post("/api/workouts/",function(req,res){
    db.workout.create(req.body).then((dbworkout) => {res.json(dbworkout);
    })
    .catch(err => {res.json(err);
    });
});
app.put("/api/workouts/:id", function(req,res){
    db.workout.findByIdAndUpdate(
        {_id: req.params.id},{exercises:req.body}
    ).then((dbworkout) => {res.json(dbworkout);
    })
    .catch(err => {res.json(err);
    });
})
};
