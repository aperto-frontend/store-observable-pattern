/**
 * Description of Metadata.
 *
 * @module Metadata
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import { Veams, App } from 'app';
import VeamsComponent from 'veams/src/js/common/component'; // Only use that in combination with browserify
import store from "../../../../../js/store";

// import VeamsComponent from 'veams/lib/common/component'; // Can be used in general

// Variables
const $ = Veams.$;
const Helpers = Veams.helpers;

class Metadata extends VeamsComponent {
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
			clearBtn: '[data-js-item="metadata-clear-btn"]'
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

	/**
	* Event handling
	*/
	get events() {
		return {
			'click {{this.options.clearBtn}}': 'clearList'
		}
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init Metadata');

		store.select('data').subscribe(this);
	}

	next(data) {
		this.render(data);
	}

	/**
	 * Render class
	 */
	render(data) {
		this.$el.html(this.renderTemplate('metadata-tpl', data || {}));
		return this;
	}
}

export default Metadata;