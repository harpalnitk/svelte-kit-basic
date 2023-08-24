<script>
	
	import { onDestroy } from 'svelte';

	import Calendar from './Calendar/+page.svelte';
	import Scheduler from './Scheduler/+page.svelte';
	import { scheduleStore } from './schedule-store';

	// Scheduler functionality
	let schedule = {};

	const unsubscribe = scheduleStore.subscribe((currDataState) => {
		schedule = currDataState;
	});

	onDestroy(()=>{
		if(unsubscribe) unsubscribe();
	})

	let schedulerShowing = false;
	let dateID;
	let dateHeading;

	$: appointments = schedule[dateID];

	const makeDateHeading = () => {
		let dateAsHeading = dateID.replace(/_/g, ' ');
		let date = new Date(`${dateAsHeading}`);
		return (dateHeading = date.toLocaleString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}));
	};

	const handleScheduler = (e) => {
		schedulerShowing = true;
		dateID = e.target.dataset.dateid;
		makeDateHeading();
	};

	const setApptToSch = (e) => {
		//console.log(e.detail)
		let time = `${e.detail.hour}:${
			e.detail.minutes < 10 ? '0' + e.detail.minutes : e.detail.minutes
		}${e.detail.amOrPM}`;

		let newAppt = {
			id: Math.floor(Math.random() * 1000000),
			eventname: e.detail.eventName,
			time: time === ':0' ? 'no time set' : time,
			completed: false
		};

		if (!schedule[dateID]) {
			scheduleStore.update(currState=>{
				currState[dateID]= [newAppt];
				return currState;
			});
		} else {
			scheduleStore.update(currState => {
				let currDayAppts = currState[dateID];
				currState[dateID] = [...currDayAppts, newAppt];
				return currState 
			});
		}
	};

	$: console.log(schedule);
</script>

<div class="page-container">
		<Calendar on:click={handleScheduler} {schedule} />
	{#if schedulerShowing}
		<Scheduler
			{dateHeading}
			{dateID}
			on:modalClose={() => {
				schedulerShowing = false;
			}}
			on:addAppt={setApptToSch}
			{appointments}
		/>
	{/if}
</div>

<style lang="scss">
	@import '../../../styles/vars';

	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		padding: 2rem;
		h1 {
			text-align: center;
			margin-bottom: 1rem;
		}
		max-width: 768px;
		position: relative;
	}
</style>
