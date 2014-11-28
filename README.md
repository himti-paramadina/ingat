PEMS
====

## Running Server

To run PEMS server, use the following command:

```
node app.js
```

## Server Configuration

Create a file named `config.js` in the root directory with the following content:

```javascript
module.exports = {
	app : {
		name: 'PEMS',
		protocol: 'http',
		port: 8080,
		version: '1.0.0'
	},
	mysql: {
		host: 'localhost',
		port: 3306,
		user: '<database user>',
		password: '<password>',
		database: '<database name>'
	},
	morgan: {
		mode: 'dev'
	}
};
```
