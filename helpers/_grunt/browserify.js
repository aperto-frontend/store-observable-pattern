'use strict';

const externalLibs = [ 
	'jquery',
	'handlebars',
	'picturefill',
	'lazysizes'
];

const internalLibs = [
	'./resources/js/app.js:app'
];

module.exports = {
	options: {
		transform: [
			['babelify',
				{
					compact: true,
					// ignore: [
					// 	'<%= paths.dev %>/js/vendor/'
					// ],
					presets: ['es2015', 'stage-0']
				}
			],
			['aliasify',
				{
					aliases: {
					},
				global: true,
				verbose: true
				}
			]
		],
		ignore: [
		]
	},
	vendor: {
		src: ['.'],
		dest: '<%= paths.dev %>/js/vendor/libs.js',
		options: {
			debug: false,
			alias: externalLibs
		}
	},
	dev: {
		options: {
			alias: internalLibs,
			external: externalLibs,
			browserifyOptions: {
				debug: true
			},
			watch: true
		},
		files: {
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	},
	dist: {
		options: {
			alias: internalLibs,
			external: externalLibs
		},
		files: {
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	}
};