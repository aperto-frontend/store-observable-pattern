var express = require('express');
var request = require('request');
var config = require('../helpers/config');
var app = express();
var deepExtend = require('deep-extend');
var Mangony = require('mangony');
var mangonyOptions = require('../helpers/_grunt/mangony');
var mangonyDevOptions = deepExtend(mangonyOptions.dev.options, {
	devServer: {
		express: app
	}
});
var mangonyServer = new Mangony(deepExtend(mangonyOptions.options, mangonyDevOptions));

/**
 * Register routes and start express server
 *
 */
mangonyServer.render();


/**
 * parameter passing from grunt
 * @type {Array}
 */
var args = process.argv;
/**
 * the keys of apiServerHosts are
 * used to implement the routing
 * localhost:[port]/veams is proxied
 * to https://github.com/Veams
 * @type {Object}
 */
var apiServerHosts = {
	'veams': 'https://github.com/Veams'
};

var apiServerHostRoutes = [];

Object.keys(apiServerHosts).forEach(function (route) {
	apiServerHostRoutes.push('/' + route);
	apiServerHostRoutes.push('/' + route + '.json');
});

app.use(apiServerHostRoutes, function (req, res) {
	var key, url;
	var format = '';

	key = req.originalUrl.substring(1, req.originalUrl.length);

	if (key.indexOf('.json') !== -1) {
		key = key.replace('.json', '');
		format = '.json';
	}

	url = apiServerHosts[key] + req.url + format;

	req.pipe(request(url)).pipe(res);
});

// an example route for an API
app.get('/test-express.json', function (req, res) {
	var responseObject = {
		works: true
	};
	res.send(JSON.stringify(responseObject, 4, null));
});

module.exports = app;