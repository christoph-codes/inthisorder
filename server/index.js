const express = require('express');
const path = require('path');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(cookieParser());

// Set the port based on if one exists or not
const port = process.env.PORT || 5000;
// Set origin based on dev environment
const origin =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'https://inthisorder.app'; // eventually add conditional for live url

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Set middle ware moving to every route
app.use((req, res, next) => {
	res.header(); // update to match the domain you will make the request from
	res.header({
		'Access-Control-Allow-Origin': origin,
		'Content-Type': 'application/json',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
	});
	next();
});

// Apply the Middleware (Body parser no longer needed)
app.use(express.json());

// All routes
app.use('/', routes);

app.get('*', (req, res) => {
	// res.sendFile(path.join(`${__dirname}/build/index.html`));
	// Catch all route that just throws a 404 error.
	res.status(404).send('This is not a valid url you are trying to reach');
});

app.listen(port, () => {
	console.log(`Backend listening on ${port}`);
});
