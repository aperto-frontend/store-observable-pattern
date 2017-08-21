// Global dependencies 
import $ from 'jquery';
import Veams from 'veams';
import Handlebars from 'handlebars/runtime';

import VeamsLogger from 'veams/src/js/plugins/logger';
import VeamsDOM from 'veams/src/js/plugins/dom';
import VeamsVent from 'veams/src/js/plugins/vent';
import VeamsModules from 'veams/src/js/plugins/modules';
import VeamsTemplater from 'veams/src/js/plugins/templater';
import VeamsMediaQueryHandler from 'veams/src/js/plugins/media-query-handler';
import EVENTS from './events';
import Templates from './templates/templates';


let App = {};
App.$ = $;

// Versioning
App.version = "0.0.1";

// Veams
Veams.onInitialize(() => {
	/**
	* Veams Plugins
	*/

	// Dom Plugin
	Veams.use(VeamsDOM, {
		DOM: $
	});

	// Vent Plugin
	Veams.use(VeamsVent, {
		furtherEvents: EVENTS
	});

	// Logger Plugin for devmode and logger
	Veams.use(VeamsLogger);

	// Module System Plugin
	Veams.use(VeamsModules, {
		useMutationObserver: true,
		internalCacheOnly: false
	});

	// Templater
	Veams.use(VeamsTemplater, {
		engine: Handlebars,
		templates: Templates
	});

	// Media Query Handler Plugin
	Veams.use(VeamsMediaQueryHandler);
});

export {App, Veams};