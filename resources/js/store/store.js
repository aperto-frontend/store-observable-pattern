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

function broadcast(subjects, storeData) {
	Object.keys(subjects).forEach(subject => {
		subject.next(datas[subject]);
	})
}

class AppStore {
	constructor() {
		this.subjects = {
			data: new Subject(),
			ui: new Subject()
		};
		this.dataSubject = new Subject();

		this.storeData = {
			data: {},
			ui: {
				overlayOpen: false
			}
		};

		console.log('Store initialized!');

		// broadcast(this.subjects, this.storeData);
	}

	subscribe(observer) {
		Object.keys(this.subjects).forEach(subject => {
			this.subjects[subject].subscribe(observer);
			observer.next(this.storeData[subject]);
		});
	}

	unsubscribe(observer) {
		this.dataSubject.unsubscribe(observer);
	}

	dispatch(action, payload) {
		switch (action) {
			case 'GIPHYS_LOADED_ACTION':
				console.log('action: ', action, payload);

		}
	}
}

const store = new AppStore();

export default store;