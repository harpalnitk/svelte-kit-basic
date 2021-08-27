<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
	import { personData } from './personData';
	//console.log(personData);

	const tableHeaders = Object.keys(personData[0]);

	let sortedPersonData = personData;
	let selectedHeader = 'id';
    let ascOrder = true;

	const sortByNumber = (tableHeader) => {
		sortedPersonData = sortedPersonData.sort((obj1, obj2) => {
			return ascOrder ? obj1[tableHeader] - obj2[tableHeader] : obj2[tableHeader] - obj1[tableHeader];
		});
        selectedHeader= tableHeader;
	};

	const sortByString = (tableHeader) => {
		sortedPersonData = sortedPersonData.sort((obj1, obj2) => {
			// console.log(obj1[tableHeader].codePointAt(0),obj2[tableHeader].codePointAt(0) );
			if (obj1[tableHeader] < obj2[tableHeader]) {
				//Unicode character code is being compared
				return -1;
			} else if (obj1[tableHeader] > obj2[tableHeader]) {
				return 1;
			}
			return 0;
		});
        if(!ascOrder){
            sortedPersonData = sortedPersonData.reverse();
        }
        selectedHeader= tableHeader;
	};
</script>
<BasicPage title='Sort Table' path='/svelte-components'></BasicPage>
<div class="page-container">
	<table id="myTable">
		<tr>
			{#each tableHeaders as header}
				<th
					class:highlighted={selectedHeader === header}
					on:click={() =>
						header === 'id' || header === 'age' ? sortByNumber(header) : sortByString(header)}
				>
					{header.replace('_', ' ')}
                    {#if header === selectedHeader}
                    <span class='order-icon' on:click="{()=>ascOrder = !ascOrder}">{@html ascOrder ? "&#9661;": "&#9651;"}</span>    
                    {/if}
              
                </th>
			{/each}
		</tr>
		{#each sortedPersonData as person}
			<tr>
				<td>{person.id}</td>
				<td>{person.first_name}</td>
				<td>{person.last_name}</td>
				<td>{person.age}</td>
				<td>{person.job_title}</td>
				<td>{person.country}</td>
			</tr>
		{/each}
	</table>
</div>

<style lang="scss">
	@import '../../../styles/vars';
	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		/* margin-top: ; */
		text-align: center;
		max-width: 768px;
	}
	table {
		border-spacing: 0;
		width: 100%;
		border: 1px solid #ddd;
	}

	th,
	td {
		text-align: left;
		padding: 16px;
	}
	th {
		text-transform: uppercase;
		cursor: pointer;
	}
	.highlighted {
		color: $primary-color;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}
</style>
