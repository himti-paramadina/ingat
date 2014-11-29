var init = function(connector) {
	var actions = {}; //Initialize 'actions' object.

	actions.index = {
		handler: function(req, res, next) {
			var sql = "SELECT * FROM users;";

			connector.query(sql, function(err, query){
				if (err) {
					throw err;
				}
				res.render('index', {
					title: "Home"
				});
			});
		}
	};

	actions.login = {
		path	: '/login',
		method	: 'get',
		handler	: function(req, res, next) {
			res.render('login', {
				title: "Sign In"
			});
		}
	}

	actions.logout = {
		path	: '/logout',
		method	: 'get',
		handler	: function(req, res, next) {
			res.redirect('/');
		}
	}
	return actions;
};

module.exports = init;