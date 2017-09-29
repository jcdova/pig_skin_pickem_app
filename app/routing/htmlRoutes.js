var path = require('path');

module.exports = function (app) {

	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/index.html'));
	});

	app.get('/picks', function(req, res) {
		res.sendFile(path.join(__dirname, '/../../public/teams.html'));
	});

		app.get('/stats', function(req, res) {
			res.sendFile(path.join(__dirname, '/../../public/userStats.html'));
	});

		app.get('/pickos', function(req, res) {
			res.sendFile(path.join(__dirname, '/../../public/teams2.html'));
	});

	
}