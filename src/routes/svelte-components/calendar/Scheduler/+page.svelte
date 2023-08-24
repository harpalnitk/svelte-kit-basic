<script>
	

	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Appointment from '../Appointment/+page.svelte';

	export let appointments = [];

	const dispatch = createEventDispatcher();
	export let dateHeading = 'May 8, 2021';
	export let dateID;
	let apptDetails = {
		eventName: '',
		hour: '',
		minutes: '',
		amOrPM: '',
		completed: false
	};

	const submitAppt = () => {
		dispatch('addAppt', apptDetails);
		// Return to empty values
		apptDetails = {
			eventName: '',
			hour: '',
			minutes: '',
			amOrPM: '',
			completed: false
		};
	};
</script>

<section transition:fade={{ duration: 125 }}>
	<form id={dateID} on:submit|preventDefault={submitAppt}>
		<!-- Close button -->
		<div id="closer-cont">
			<span on:click={() => dispatch('modalClose')} class="close" title="Close Modal">
				&times;
			</span>
		</div>

		<header>
			<h2>My Schedule for</h2>
			<h2>{dateHeading}</h2>
			<input
				type="text"
				id="event-input"
				required
				placeholder="Add an event..."
				bind:value={apptDetails.eventName}
			/>

			<div id="time-cont">
				<div id="hrs-mins-cont">
					<input
						type="number"
						id="hour-input"
						name="time"
						min="1"
						max="12"
						step="1"
						placeholder="Hr."
						bind:value={apptDetails.hour}
					/>
					<span id="time-colon">:</span>
					<input
						type="number"
						id="mins-input"
						name="time"
						min="0"
						max="59"
						step="1"
						placeholder="Mins."
						bind:value={apptDetails.minutes}
					/>
				</div>

				<div id="am-pm-cont">
					<div>
						<input
							type="radio"
							id="amPMChoice1"
							name="contact"
							bind:group={apptDetails.amOrPM}
							value="am"
						/>
						<label for="contactChoice1">AM</label>
					</div>

					<div>
						<input
							type="radio"
							id="amPMChoice2"
							name="contact"
							bind:group={apptDetails.amOrPM}
							value="pm"
						/>
						<label for="contactChoice2">PM</label>
					</div>
				</div>
			</div>
			<!-- end of .time-cont -->
			<div>
				<button class="addBtn">Add</button>
			</div>
		</header>
	</form>

	<table id="appts-cont">
		{#if appointments.length === 0}
			<h1>No appointments scheduled.</h1>
		{:else}
			{#each appointments as appt}
				<Appointment
					apptName={appt.eventname}
					time={appt.time}
					completed={appt.completed}
					apptID={appt.id}
					{dateID}
				/>
			{/each}
		{/if}
	</table>
</section>

<style>
	section {
		box-sizing: border-box;
		width: 100%;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		background-color: white;
	}

	h1 {
		text-align: center;
		color: gray;
	}

	h2 {
		margin: 5px 0;
	}

	/* Style the close button */
	.close {
		position: absolute;
		font-size: 2rem;
		color: white;
		right: 0;
		top: 0;
		padding: 8px 16px 12px 16px;
		cursor: pointer;
	}

	.close:hover {
		background-color: hsl(168, 76%, 40%);
	}

	/* Bordered form */
	form {
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 10;
		overflow: auto;
		margin: auto;
		background-color: white;
		box-shadow: 0 0 10px black;
	}
	/* Style the header */
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: hsl(33, 92%, 29%);
		padding: 30px 40px;
		color: white;
		/*   text-align: center; */
	}

	/* Style the input */
	input {
		margin: 10px 0;
		border: none;
		border-radius: 0;
		width: 300px;
		padding: 10px;
		float: left;
		font-size: 1.1rem;
	}

	#time-cont {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
	}

	#hrs-mins-cont {
		width: 200px;
		display: flex;
		justify-content: space-between;
	}

	#time-colon {
		font-size: 3rem;
	}

	input[type='number'] {
		margin-right: 5px;
	}

	input[type='number']::-webkit-inner-spin-button {
		opacity: 1;
	}

	#am-pm-cont > div {
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input[type='radio'] {
		width: 20px;
	}

	/* Style the "Add" button */

	.addBtn {
		padding: 10px;
		width: 160%;
		background: hsl(168, 76%, 40%);
		color: #fff;
		float: left;
		text-align: center;
		font-size: 16px;
		cursor: pointer;
		transition: 0.1s;
		border: 1px solid hsl(168, 76%, 40%);
		border-radius: 0;
	}

	.addBtn:hover {
		border: 1px solid white;
		background-color: hsl(168, 76%, 35%);
	}

	.addBtn:active {
		background-color: hsl(168, 76%, 100%);
		color: hsl(168, 76%, 25%);
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
		border: 1px solid #ddd;
		background-color: white;
	}
</style>
