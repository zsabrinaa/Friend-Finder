var userData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(userData);
      });


      app.post("/api/friends", function(req, res){
        //   console.log(req.body);
        var newFreind = req.body;
        var score = newFreind.scores;
        var matchName = '';
        var matchImg = '';
        var totalDifference = 50;
        var substract = 0;
        // console.log(userData);
        for (var i = 0; i < userData.length; i++){
            console.log(userData[i]);
            for(var l = 0; l < score; l++){
                substract = Math.abs(userData[i].score[i]- score[l])
            }
            if(substract < totalDifference){
                totalDifference = substract;
				matchName = userData[i].name;
				matchImg = userData[i].photo;
            }
        }
        userData.push(newFreind);
        res.json({matchImg:matchImg,matchName:matchName});

      });
}
