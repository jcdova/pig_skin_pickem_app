var db = require("./app/models");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// var options = {
//  timeout: 15000, // Service call timeout
//  nfl: {
//    version: 'nfl/v2',
//    key: '06db7b58670c456b891783eb9561fb60' // <-- Pass in your nfl key here
//  },
// };

// var fantasyData = require('fantasydata-api')(options);

// var week = '2';
// var season = '2017REG';
// fantasyData.nfl.scoresByWeek(season, week, function(err, results){
//  console.log(JSON.stringify(results, null, 2));
// });


//syncing our sequelize models and then starting our Express app
db.sequelize.sync({force: true}).then (function() {
	db.Picks.create(
		{
		"id": 1,
		"username": "meow",
		"game_1": "SF",
		"game_2": "JAX",
		"game_3": "IND",
		"game_4": "BUF",
		"game_5": "CAR",
		"game_6": "CHI",
		"game_7": "DET",
		"game_8": "MIN",
		"game_9": "NE",
		"game_10": "NYJ",
		"game_11": "PHI",
		"game_12": "TEN",
		"game_13": "GB",
		"game_14": "LAC",
		"game_15": "WAS",
		"game_16": "ARI",
		"mnf": 33,
		"week": 3
		});

		db.Picks.create(
			{
			"id": 2,
			"username": "meow2",
			"game_1": "SF",
			"game_2": "JAX",
			"game_3": "IND",
			"game_4": "BUF",
			"game_5": "CAR",
			"game_6": "CHI",
			"game_7": "DET",
			"game_8": "MIN",
			"game_9": "NE",
			"game_10": "NYJ",
			"game_11": "PHI",
			"game_12": "TEN",
			"game_13": "GB",
			"game_14": "LAC",
			"game_15": "WAS",
			"game_16": "ARI",
			"mnf": 33,
			"week": 3
			});

			db.Picks.create(
				{
				"id": 3,
				"username": "meow3",
				"game_1": "SF",
				"game_2": "JAX",
				"game_3": "IND",
				"game_4": "BUF",
				"game_5": "CAR",
				"game_6": "CHI",
				"game_7": "DET",
				"game_8": "MIN",
				"game_9": "NE",
				"game_10": "NYJ",
				"game_11": "PHI",
				"game_12": "TEN",
				"game_13": "GB",
				"game_14": "LAC",
				"game_15": null,
				"game_16": null,
				"mnf": 33,
				"week": 5
				});

		app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});		
});
