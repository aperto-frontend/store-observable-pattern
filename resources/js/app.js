// Global dependencies 
import $ from 'jquery';
import Veams from 'veams';
import Handlebars from 'handlebars/runtime';

import VeamsLogger from 'veams-plugin-logger';
import VeamsDOM from 'veams-plugin-dom';
import VeamsVent from 'veams-plugin-vent';
import VeamsModules from 'veams-plugin-modules';
import VeamsTemplater from 'veams-plugin-templater';
import VeamsMediaQueryHandler from 'veams-plugin-media-query-handler';
import VeamsStore from 'veams-plugin-store';
import EVENTS from './events';
import Templates from './templates/templates';
import rootReducer from './store/reducer';
import INITIAL_STATE from './store/app-state';
import subjects from "./store/subjects";

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

	Veams.use(VeamsStore, {
		reducer: rootReducer,
		state: INITIAL_STATE,
		subjects: subjects
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