import {state, broadcast} from 'veams-plugin-store';

export default function rootReducer(action, payload) {
	switch (action) {
		case 'DATA_GIPHYS_LOADED_ACTION':
			state.data.giphys = handleGiphysLoaded(state.data.giphys, payload);
			broadcast('data');
			break;

		case 'DATA_GIPHYS_CLEAR_ACTION':
			state.data.giphys = handeGiphysDeleted(state.data.giphys);
			broadcast('data');
			break;


		case 'UI_OVERLAY_OPEN_ACTION':
			state.ui = handleOverlayOpen(state.ui, payload);
			broadcast('ui');
			break;

		default:
			return state;
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