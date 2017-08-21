/**
 * Configuration file
 */
const helperPath = 'helpers';
const srcPath = 'resources';
const partialsPath = srcPath + '/templating/partials';

const config = module.exports;

config.options = {
    folderStructure: 'self-contained',
	config: {
		// in this directory you can find your grunt config tasks
		src: helperPath + '/_grunt/*.js'
	},
	paths: {
		
		// helpers folder with tasks
		helpers: helperPath,
		tmp: 'tmp',
		// resources folder with working files
		src: srcPath,
		// partials path for wrapWith hbs helper
		partials: partialsPath,
		// dev/working folder
		dev: '_output',
		// dist folder with minified and optimized files
		dist: '_dist',
		// Veams config paths
		page: srcPath + '/templating/pages',
		global: partialsPath + '/globals',
		block: partialsPath + '/blocks',
		component: partialsPath + '/components',
		utility: partialsPath + '/utilities',
		scss: srcPath + '/scss',
		js: srcPath + '/js',
		endpoints: [
			'resources/templating/layouts',
			'resources/templating/pages',
			'resources/js/main.js',
			'resources/js/events.js',
			'resources/scss/styles.scss'
		]
	},

	// define your ports for livereload
	ports: {
		server: 2999,
		app: 3000,
		test: 4000,
		livereload: 35729
	}
};
