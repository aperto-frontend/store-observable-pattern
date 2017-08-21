module.exports = {
	express: {
		files: [
			'./server/**/*.js'
		],
		tasks: ['express:dev'],
		options: {
			spawn: false
		}
	},
	ajax: {
		files: '<%= paths.src %>/ajax/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
			],
		tasks: 'sync:assets'
	},
	hbs: {
		files: [
			'<%= paths.src %>/templating/**/js/**/*.hbs'
		],
		tasks: 'handlebars'
	},
	scss: {
		files: [
			'<%= paths.src %>/scss/**/*.scss',
			'<%= paths.src %>/templating/partials/**/scss/**/*.scss'
		],
		tasks: [
			'sass:dev'
		],
	    options: {
			spawn: false
		}
	},
	universal: {
		files: '<%= paths.src %>/scss/universal.scss',
		tasks: 'sass:universal'
	}
};