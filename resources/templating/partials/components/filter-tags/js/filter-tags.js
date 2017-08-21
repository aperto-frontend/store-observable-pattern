/**
 * Description of FilterTags.
 *
 * @module FilterTags
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import { Veams, App } from 'app';
import VeamsComponent from 'veams/src/js/common/component'; // Only use that in combination with browserify
// import VeamsComponent from 'veams/lib/common/component'; // Can be used in general

// Variables
const $ = Veams.$;
const Helpers = Veams.helpers;

class FilterTags extends VeamsComponent {
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
		console.log('init FilterTags');
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}
}

export default FilterTags;