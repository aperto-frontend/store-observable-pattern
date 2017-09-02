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

class AppStore {
	constructor() {
		this.dataSubject = new Subject();
		this.data = {};
	}

	subscribe(observer) {
		this.dataSubject.subscribe(observer);
		observer.next(this.data);
	}

	unsubscribe(observer) {
		this.dataSubject.unsubscribe(observer);
	}

	initialize() {
		console.log('Store initialized!');

		this.update({});
	}

	update(data) {
		this.data = Object.assign(this.data, data);

		this.broadcast();
	}
	
	broadcast(data) {
		this.dataSubject.next(Object.assign({}, this.data));
	}
}

const store = new AppStore();

export default store;