var init = function(connector) {
	var actions = {};//initialize 'acton' object

	actions.name = 'events';

	actions.before = function(req, res, next) {
		//TODO: Implement Authentication
		next();
	};

	//public pages

	actions.index = {
		handler : function(req, res, next)
		{
			res.render('index', {
				title: Event Index
			});
		}
	};

	actions.detail = {
		path 	: '/:EventId',
		method	: 'get',
		handler	: function(req, res, next) {

		}
	}:
	//API Function

	actions.api_index = {
		prefix	: 'api'	,
		path	: '/',
		method	: 'get',
		handler	: function(req, res, next) {
			var sql = "SELECT * FROM events;";

			connector.query(sql, function(err, results){
				if (err) {
					res.status(500).json({
						success: false,
						message: "",
					});

					throw err;
				}
				else {
					res.status(200).json({
						success: true,
						message: "",
						results: results
					});
				}
			});
		}
	}

	actions.api_add = {
		prefix	: 'api',
		path	: '/',
		method	: 'post',
		handler	: function(req, res, next) {

		}
	}
	return actions;
};

module.exports = init;