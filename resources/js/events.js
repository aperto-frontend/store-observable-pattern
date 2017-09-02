/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

/**
 * Events Global
 */

const EVENTS = {};



/**
 * Events for FilterTags
 */
EVENTS.filterTags = {
	eventName: 'filterTags:eventName'
};


/**
 * Events for ListView
 */
EVENTS.listView = {
	eventName: 'listView:eventName'
};


/**
 * Events for Metadata
 */
EVENTS.metadata = {
	eventName: 'metadata:eventName'
};


/**
 * Events for EditBar
 */
EVENTS.editBar = {
	eventName: 'editBar:eventName'
};


/**
 * Events for Popup
 */
EVENTS.popup = {
	eventName: 'popup:eventName'
};

// @INSERTPOINT :: @ref: js-events

export default EVENTS;