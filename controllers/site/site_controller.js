var init = function(connector){
	var actions = {}; //Initialize 'actions' object.

	actions.name = '';

	actions.index ={
		handler: function(req, res, next){
			var sql = "SELECT * FROM events;";

			connector.query(sql, function(err, results){
				if (err){
					throw err;
				}

				res.render('index',{
					title: "Home",
					events: results
				});
			});
		}
	};

	return actions;
}

module.exports =init;