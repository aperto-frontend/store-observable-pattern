/**
 * Description of ListView.
 *
 * @module ListView
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import {Veams, App} from 'app';
import VeamsComponent from 'veams/src/js/common/component'; // Only use that in combination with browserify
import VeamsHttp from 'veams/src/js/services/http';
import store from "../../../../../js/store/store";
// import VeamsComponent from 'veams/lib/common/component'; // Can be used in general

// Variables
const $ = Veams.$;
const Helpers = Veams.helpers;

// Services
const giphyService = new VeamsHttp({
	type: 'json',
	url: '/ajax/giphys.json'
});

class ListView extends VeamsComponent {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			overlayOpener: '[data-js-item="list-view-cta"]'
		};
		super(obj, options);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '0.0.0'
		};
	}

	get events() {
		return {
			'click {{this.options.overlayOpener}}': 'showGif'
		}
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init listView!');
		store.select('data').subscribe(this);

		giphyService
			.get({})
			.then(data => {
				store.dispatch('DATA_GIPHYS_LOADED_ACTION', data);
			});

	}

	next(data) {
		if (data.giphys) {
			this.render(data.giphys);
		}
	}

	/**
	 * Render class
	 */
	render(data) {
		let myData = data || {};

		this.$el.html(this.renderTemplate('c-list-view-tpl', myData));

		return this;
	}

	showGif($evt) {
		store.dispatch('UI_OVERLAY_OPEN_ACTION', true);
	}
}

export default ListView;