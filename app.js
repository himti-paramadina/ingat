var	express 	= require('express'),
	mysql		= require('mysql'),
	bodyParser	= require('body-parser'),
	morgan		= require('morgan'),

	app			= express(),

	config		= require('./config.js'),
	boot		= require('./libs/boot.js')
	;

/* Initialize connection to MySQL */
var connector = mysql.createConnection(config.mysql);

connector.connect(function(err) {
	if (err) {
		console.error('Error connecting MySQL: ' + err.stack);
		return;
	}

	console.log(config.app.name + ' has been connected to MySQL successfully.');
});

/* Set up views directory and view engine. */
app.set('views', './views');
app.set('view engine', 'jade');

/* Set up static assets directory. */
app.use('/public', express.static(__dirname + '/public'));

/* Set up body parser for handling submitted data. */
app.use(bodyParser.urlencoded({
	extended: true
}));

/* Set up logger. */
app.use(morgan(config.morgan.mode));

/* Load all controller. */
boot(app, connector, {verbose: true});

/* Start server! */
var server = app.listen(config.app.port, function () {

	var port = server.address().port

	console.log(config.app.name + ' server is listening at port ' + port + '.');

});
