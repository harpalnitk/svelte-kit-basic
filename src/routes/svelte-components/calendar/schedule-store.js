import { writable } from 'svelte/store';

// Local Storage
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
// LS with Svelte: https://www.youtube.com/watch?v=a65aPLz18IM

const createNodeTokenStore = () =>
	writable({
		May_25_2021: [
			{
				id: 108757,
				eventname: 'fix car',
				time: '2:30pm',
				completed: false
			},
			{
				id: 119370,
				eventname: 'practice JS Promises',
				time: '4:00pm',
				completed: false
			}
		]
	});

// //export default schedule;

//================================================
// To Use with Local Storage, try this code below
//================================================

const storeInBrowser = (key, data) => {
	// When the application loads localStorage value will be read
	const dataAsString = localStorage.getItem(key);
	const dataAsObj = dataAsString ? JSON.parse(dataAsString) : data;

	// then on every update store currState value will be written to localstorage
	const svelteStore = writable(dataAsObj, () => {
		const unsubscribe = svelteStore.subscribe((currDataState) => {
			localStorage.setItem(key, JSON.stringify(currDataState));
		});
		return unsubscribe;
	});
	return svelteStore;
};

const scheduleData = {
	May_31_2021: [{ id: 7382376, eventname: 'Bike ride', time: '6:00am', completed: false }]
};

export const createBrowserTokenStore = () => storeInBrowser('mySchedule', scheduleData);

// For Server Side Rendering we have to ensure that code does not fail as localStorage
//is not available on server
export const scheduleStore =
	typeof localStorage === 'undefined' ? createNodeTokenStore() : createBrowserTokenStore();
