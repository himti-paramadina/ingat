#PEMS

## Development Preparation

### Server Configuration

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

### Dependencies

Use the following command to install node.js dependencies for PEMS.

```
npm install
```

### Run Server

To run PEMS server, use the following command:

```
node app.js
```

It's better to have `nodemon` command available. Install `nodemon`, and use the following command to run the server:

```
nodemon app.js
```