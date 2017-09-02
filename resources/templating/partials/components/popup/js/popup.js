/**
 * Description of Popup.
 *
 * @module Popup
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import {Veams, App} from 'app';
import VeamsComponent from 'veams/src/js/common/component'; // Only use that in combination with browserify
// import VeamsComponent from 'veams/lib/common/component'; // Can be used in general
import store from '../../../../../js/store/store';

// Variables
const $ = Veams.$;
const Helpers = Veams.helpers;

class Popup extends VeamsComponent {
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
			'click': 'closeOverlay'
		};
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		store.select('ui').subscribe(this);

		console.log('init Popup');
	}

	/**
	 * Render class
	 */
	render() {
		if (this.open) {
			this.$el.removeClass('is-hidden');
		} else {
			this.$el.addClass('is-hidden');
		}
		return this;
	}

	next(uiData) {
		this.open = uiData.overlayOpen;

		this.render();
	}

	closeOverlay() {
		store.dispatch('UI_OVERLAY_OPEN_ACTION', false);
	}
}

export default Popup;
