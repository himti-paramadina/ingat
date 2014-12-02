var init = function(connector) {
	var actions = {};//initialize 'acton' object

	actions.name = 'organizations';

	actions.detail = {
		path: '/:organization_id',
		method: 'get',
		handler: function(req, res, next) {
			res.render('detail', {
				title: 'Event Detail'
			});
		}
	}
	
	return actions;
};

module.exports = init;