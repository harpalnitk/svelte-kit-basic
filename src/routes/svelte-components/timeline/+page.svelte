<script>
	
	//Svelte imports
	import { onMount } from 'svelte';
	//User Imports
	import Event from './Event.svelte';
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
	// import {histEvents} from '$lib/timeline/histData.js'; // HARD CODED DATA for testing purpose
	import { getData } from './holidaysAPI.js';

	let events = [];

	$: console.log(events);

	onMount(async () => {
		events = await getData();
	});

	const convertDate = (dateStr) => {
		let newDate = new Date(dateStr);
		let prettyDate = newDate.toLocaleDateString('en-EN', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
		return prettyDate;
	};

	/*SEARCH FUNCTIONALITY*/
	let searchTerm;
	$: console.log('Search:', searchTerm);
	const getResults = () => {
		console.log('Inside getResults function');
		for (let evt of events) {
            let searchTermLower = searchTerm.toLowerCase();
            let lowerName = evt.name.toLowerCase();
            let lowerDate = convertDate(evt.date).toLowerCase();
			if (lowerName.includes(searchTermLower) ||
             lowerDate.includes(searchTermLower)) {
                 //clear searchtime
                 setTimeout(()=> searchTerm = "",1000);
				//We are storing name as Id of each event
				//Ideally ID will be unique
				return moveIntoView(evt.name);
			}
		}
        return noResults();
	};

	const moveIntoView = (element) => {
		document.getElementById(element).scrollIntoView({
            behavior:'smooth',
            block:'center',
            inline:'center'

        });
	};

    const noResults = ()=>{
        searchTerm ="No Results";
        setTimeout(()=> searchTerm = "",1000);
    }
</script>

<div class="page-container">
	<header>
		<SearchForm bind:searchTerm on:submit={getResults} placeholder="Enter event name"/>
	</header>
	<main>
		<div class="timeline">
			{#each events as event, i}
				<Event
					date={convertDate(event.date)}
					name={event.name}
					isLeft={i % 2 === 0}
					eventID={event.name}
				/>
			{/each}
		</div>
	</main>
</div>

<style>
	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		/* margin-top: ; */
		text-align: center;
        max-width: 768px;
	}



	header {
		/* position: relative;
    top: 0;
    background: #f99e58; */
		width: 100%;
		/* height: 100px; */
		/* padding: 5px; */
	}

    	/* Set a background color */
	main {
		background-color: #474e5d;
		font-family: Helvetica, sans-serif;
		/* position: relative; */
		/* margin-top: -90px; */
        height: 75vh;
        overflow-y: scroll;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline {
		position: relative;
		/* max-width: 1200px; */
		margin: 0 auto;
	}

	/* The actual timeline (the vertical ruler) */
	.timeline::after {
		content: '';
		position: absolute;
		width: 6px;
		background-color: white;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -3px;
	}
	/* Media queries - Responsive timeline on screens less than 600px wide */
	@media screen and (max-width: 600px) {
		/* Place the timelime to the left */
		.timeline::after {
			left: 31px;
		}
	}
</style>
