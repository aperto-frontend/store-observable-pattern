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
import store from "../../../../../js/store";
// import VeamsComponent from 'veams/lib/common/component'; // Can be used in general

// Variables
const $ = Veams.$;
const Helpers = Veams.helpers;

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
		let options = {};


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

	/**
	 * Event handling
	 */
	get events() {
		return {
			// 'click': 'render'
		}
	}

	/**
	 * Subscribe handling
	 */
	get subscribe() {
		return {
			// '{{Veams.EVENTS.resize}}': 'render'
		}
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init ListView');
		this.http = new VeamsHttp({
			type: 'json',
			url: '/ajax/giphys.json'
		});

		this.http.get({}).then(data => {
			store.update(data);
		});

		store.subscribe(this);
	}

	next(data) {
		this.render(data);
	}

	/**
	 * Render class
	 */
	render(data) {
		let myData = data || {};

		this.$el.html(this.renderTemplate('c-list-view-tpl', myData));

		return this;
	}
}

export default ListView;