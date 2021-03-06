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

// @INSERTPOINT :: @ref: js-events

export default EVENTS;