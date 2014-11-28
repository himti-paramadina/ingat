var	express	= require('express'),
	fs 		= require('fs')
	;

module.exports = function(parent, connector, options) {
	
	var verbose = options.verbose;

	verbose && console.log('----- Boot Up!');

	fs.readdirSync(__dirname + '/../controllers').forEach(function(directoryName){
		verbose && console.log('\n   %s:', directoryName);

		var obj = require('./../controllers/' + directoryName + '/' + directoryName + '_controller')(connector);
		var name = typeof obj.name == "undefined" ? directoryName : obj.name;
		
		var app = express();
		var action;

		var path = obj.path || '/' + name;

		app.set('views', './controllers/' + directoryName + '/views');

		for (var key in obj) {

			if (~['name', 'before'].indexOf(key)) continue;
			
			action = obj[key];

			switch (key) {
				case 'index':
					if (obj.before) {
						app.get(path, obj.before, action.handler);
						verbose && console.log('     %s %s -> before -> %s', 'GET', path, key);
					} else {
						app.get(path, action.handler);
						verbose && console.log('     %s %s -> %s', 'GET', path, key);
					}
					break;

				default:
					var actionPath = path;

					if (typeof action.prefix != "undefined") {
						actionPath = '/' + action.prefix + path + action.path;
					}
					else {
						actionPath = path + action.path;
					}

					if (obj.before) {
						app[action.method](actionPath, obj.before, action.handler);
						verbose && console.log('     %s %s -> before -> %s', action.method.toUpperCase(), actionPath, key);
					} else {
						app[action.method](actionPath, action.handler);
						verbose && console.log('     %s %s -> %s', action.method.toUpperCase(), actionPath, key);
					}

					break;
			}

		}

		parent.use(app);
	});

	verbose && console.log();
	verbose && console.log('----- End of Boot Up.');
};