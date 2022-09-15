<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { scheduleStore } from '../schedule-store';
	export let apptName, time, completed;

	export let apptID, dateID;

	const deleteAppt = () => {
		scheduleStore.update((currState) => {
			currState[dateID] = currState[dateID].filter((appt) => appt.id !== apptID);
			return currState;
		});
	};
	const updateAppt = (e, key) => {
		let newValue = e.target.nodeName === 'TD' ? e.target.textContent : e.target.checked;
		scheduleStore.update((currState) => {
			let i = currState[dateID].findIndex((appt) => appt.id === apptID);
			currState[dateID][i][key] = newValue;
			return currState;
		});
	};
</script>

<tr class:completed>
	<td>
		<input type="checkbox" bind:checked={completed} on:change={(e) => updateAppt(e, 'completed')} />
	</td>
	<td contenteditable on:blur={(e) => updateAppt(e, 'eventname')}>
		{apptName}
	</td>
	<td contenteditable on:blur={(e) => updateAppt(e, 'time')}>
		{time}
	</td>
	<td>
		<i class="fa fa-trash-o fa-2x" on:click={deleteAppt} />
	</td>
</tr>

<style>
	td {
		text-align: left;
		padding: 6px;
	}

	td,
	input {
		cursor: pointer;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	input[type='checkbox'] {
		width: 55px;
		height: 25px;
		margin-top: 10px;
	}

	input[type='checkbox']:checked {
		background-color: hsl(168, 76%, 100%);
		color: white;
	}

	.completed {
		text-decoration: line-through;
		color: #aaa;
	}
</style>
