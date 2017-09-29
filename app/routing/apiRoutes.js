var options = {
	timeout: 15000, // Service call timeout
	nfl: {
	  version: 'nfl/v2',
	  key: '06db7b58670c456b891783eb9561fb60' // <-- Pass in your nfl key here
	},
   };

   var db = require("../models");
   var fantasyData = require('fantasydata-api')(options);
//    var week = 3;
   var season = '2017REG';
   module.exports = function(app) {

	// USERS AND LOGINS
	app.post('/api/picks', function(req, res) {
		db.Picks.create(req.body).then(function(dbUser){
			console.log(dbUser);
		})
	});

	app.get('/api/picks', function(req, res) {
		db.Picks.findAll({}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

	app.get('/api/picks/:week', function(req, res) {
		db.Picks.findAll({
			where: {
				week: req.params.week
			}
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

//requests to each week:

	   app.get('/api/fantasy/1', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 1, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/2', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 2, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/3', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 3, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/4', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 4, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })
	   app.get('/api/fantasy/5', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 5, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/6', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 6, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/7', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 7, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/8', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 8, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/9', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 9, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/10', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 10, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/11', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 11, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/12', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 12, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })
	   app.get('/api/fantasy/13', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 13, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/14', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 14, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/15', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 15, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })

	   app.get('/api/fantasy/16', function(req, res) {
		//    console.log(req.body[0]);
		   fantasyData.nfl.scoresByWeek(season, 16, function(err, results){
			   // console.log(JSON.stringify(results, null, 2))
			   console.log("hello I was hit");
			   res.json(results, null, 2);
		   });
	   })




	   // app.get('/api/fantasy', function(req,res) {
	   //  res.json(res);
	   // })
	   // app.post("/api/teams", function(req, res) {
	//        var newClient = req.body;
	//        var myScore = newClient.scores;
	//        var total = 0;
	//        var bestMatch = 100;
	//        var index = -1;
	//        for(var j=0; j < teams.length; j++){
	//            //Iterate through the whole list of friends
	//            total = 0;
	//            for(var i =0; i< myScore.length; i++){
	//                //for each friend calculate the total value
	//                var dif = Math.abs(myScore[i] - friends[j].scores[i]);
	//                total += dif;
	//            }
	//            if(total < bestMatch){
	//                bestMatch = total;
	//                index = j;
	//            }
	//        }
	//        console.log('Best Choice', teams[index]);
	//        teams.push(newClient);
	//        res.json(teams[index]);
	//    });
	   
   }
