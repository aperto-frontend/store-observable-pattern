import * as _ from 'lodash';

class Subject {
	constructor() {
		this.observers = [];
	}

	subscribe(obs) {
		this.observers.push(obs);
	}

	unsubscribe(obs) {
		_.remove(this.observers, el => el === obs)
	}

	next(data) {
		this.observers.forEach(obs => obs.next(data));
	}
}

let subjects = {
	ui: new Subject(),
	data: new Subject()
};

let state = {
	ui: {
		overlayOpen: false
	},
	data: {}
};

function broadcast(id) {
	subjects[id].next(state[id]);
}
class AppStore {
	subscribe(observer) {
		Object.keys(subjects).forEach(subject => {
			subjects[subject].subscribe(observer);
			observer.next(state[subject]);
		});
	}

	unsubscribe(observer) {
		Object.keys(subjects).forEach(subject => {
			subjects[subject].unsubscribe(observer);
		});
	}

	dispatch(action, payload) {
		rootReducer(action, payload);
	}

	select(id) {
		return subjects[id];
	}
}

/**
 * Reducer
 */

function rootReducer(action, payload) {
	switch (action) {
		case 'GIPHYS_LOADED':
			state.data = giphysLoadedAction(state.data, payload);

			broadcast('data');

			break;

		case 'GIPHYS_CLEARED':
			state.data = {};

			broadcast('data');
			break;

		case 'OVERLAY_OPEN':
			state.ui.overlayOpen = payload;

			broadcast('ui');
			break;
		default:
			break;
	}
}

/**
 * Data Handlers
 */
function giphysLoadedAction(state, payload) {
	return Object.assign({}, state, payload);
}

const store = new AppStore();

export default store;