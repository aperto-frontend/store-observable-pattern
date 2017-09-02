export default class Subject {
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