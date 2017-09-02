import * as _ from 'lodash';
import Subject from './subject';

let storeData = {
	data: {
		giphys: {}
	},
	ui: {
		overlayOpen: false
	}
};

let subjects = {
	data: new Subject(),
	ui: new Subject()
};

function broadcastAll(subjects) {
	Object.keys(subjects).forEach(subject => {
		subject.next(storeData[subject]);
	})
}

function broadcast(subject) {
	subjects[subject].next(storeData[subject]);
}

class AppStore {
	constructor() {
		console.log('Store initialized!');
	}

	subscribe(observer) {
		Object.keys(subjects).forEach(subject => {
			subjects[subject].subscribe(observer);
			observer.next(storeData[subject]);
		});
	}

	unsubscribe(observer) {
		Object.keys(subjects).forEach(subject => {
			subjects[subject].unscribe(observer);
		});
	}

	select(subtype) {
		return subjects[subtype];
	}

	dispatch(action, payload) {
		switch (action) {
			case 'DATA_GIPHYS_LOADED_ACTION':
				storeData.data.giphys = handleGiphysLoaded(storeData.data.giphys, payload);
				broadcast('data');
				break;

			case 'DATA_GIPHYS_CLEAR_ACTION':
				storeData.data.giphys = handeGiphysDeleted(storeData.data.giphys);
				broadcast('data');
				break;


			case 'UI_OVERLAY_OPEN_ACTION':
				storeData.ui = handleOverlayOpen(storeData.ui, payload);
				broadcast('ui');
				break;

			default:
				return storeData;

		}
	}
}

/**
 * Reducers
 */
function handleGiphysLoaded(state, payload) {
	return Object.assign({}, state, payload);
}

function handeGiphysDeleted(state) {
	let newState = Object.assign({}, state);
	newState = {};

	return newState;
}

function handleOverlayOpen(state, payload) {
	let newState = Object.assign({}, state);
	newState.overlayOpen = payload;

	return newState;
}

const store = new AppStore();

export default store;