/*
 * Generated on 2017-08-21
 * generator-veams v8.2.2
 * http://veams.org/
 *
 * Copyright (c) 2017 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 *
 */

const config = require('./helpers/config');

module.exports = function(grunt) {
	
	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, {
		'replace': 'grunt-text-replace',
		'express': 'grunt-express-server'
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, config.options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */

	// SASS Task
	grunt.registerTask('watchCSS', [
		'sassGlobber:dev',
		'sass:dev'
	]);
	
	// Sprites Task
	grunt.registerTask('sprites', [
		'dr-svg-sprites',
		'replace:spriteUrl'
	]); 

	// FE Templates Task
	grunt.registerTask('jsTemplates', [
		'handlebars',
		'replace:jsTemplates'
	]); 
	 

	/*
	 *	ADVANCED TASKS	
	 */
	grunt.registerTask('server', [
		'jsTemplates',
		'browserify:vendor',
		'browserify:dev',
		'concurrent:syncing',
		'watchCSS',
		'express:dev',
		'open:dev',
		'chokidar'
	]);
	
	grunt.registerTask('build', [
		'clean:dev',
		'jsTemplates',
		'browserify:vendor',
		'browserify:dist',
		'uglify',
		'concurrent:syncing', 
		'sassGlobber:dist',
		'sass:dev',
		'sass:universal',
		'combine_mq',
		'postcss:dist',
		'cssmin',
		'mangony:dist',
		'concurrent:hintAndDocs'
	]);

	grunt.registerTask('default', [
		'server'
	]);
	
	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);
	
	grunt.registerTask('dist', [
		'clean',
		'version:patch',
		'build',
		'copy:dist'
	]); 
	

};
