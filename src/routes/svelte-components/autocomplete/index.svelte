<script>
	 import BasicPage from '$lib/components/UI/BasicPage.svelte';
	import { onDestroy } from 'svelte';
	import itemsData from './itemsStore.js';
	import Item from './Item.svelte';
	let items;
	const unsubscribe = itemsData.subscribe((storeValues) => {
		//	console.log('Items', storeValues);
		items = storeValues;
	});

	let filteredItems = [];
	//	$: console.log(filteredItems);
	let inputValue = '';

	//If nothing is typed dropdown should not appear
	$: if (!inputValue) {
		filteredItems = [];
	}

	//Filter dropdown list based on typed input characters
	const filterItems = () => {
		let storageArr = [];
		if (inputValue) {
			//filteredItems = items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()));
			items.forEach((item) => {
				if (item.toLowerCase().startsWith(inputValue.toLowerCase())) {
					storageArr = [...storageArr, makeMatchBold(item)];
				}
			});
		}
		filteredItems = storageArr;
	};

	//To highlight the characters we have typed in the list dropdown item text
	const makeMatchBold = (str) => {
		let matched = str.substring(0, inputValue.length);
		let makeBold = `<strong>${matched}</strong>`;
		return str.replace(matched, makeBold);
	};

	const removeBold = (str) => {
		return str.replace(/<(.)*?>/g, '');
		// return str.replace(/<(strong)>/g,'').replace(/<\/(strong)>/g,'');
	};

	//Set input value before submitting form
	const setInputValue = (item) => {
    if(item){
      inputValue = removeBold(item);
    }
	
	};

	//To submit the form
	const submitValue = () => {
		if (inputValue) {
			console.log(`${inputValue} is submitted`);
		} else {
			alert('You forgot to type a country');
		}
		inputValue = '';
    hiLiteIndex = null;
	};

	// Using arrow keys to navigate the dropdownlist
  let hiLiteIndex = null;
   $: hiLitedItem = filteredItems[hiLiteIndex]; 

	const navigateList = (e) => {
		console.log(e.key);
    if(e.key === 'ArrowDown' && hiLiteIndex < filteredItems.length-1) {
      hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1;
    }else if(e.key === 'ArrowUp' && hiLiteIndex !=null){
      hiLiteIndex === 0 ? hiLiteIndex = filteredItems.length-1 : hiLiteIndex -= 1 ;
    } else if(e.key === 'Enter'){
        setInputValue(hiLitedItem);
    }else {
      return;
    }
	};


	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:window on:keydown={navigateList} />
<BasicPage title='Autocomplete' path='/svelte-components'></BasicPage>
<div class="page-container">
	<!--Make sure the form has the autocomplete function switched off:-->
	<form autocomplete="off" on:submit|preventDefault={submitValue}>
		<div class="autocomplete">
			<input type="text" bind:value={inputValue} placeholder="Country" on:input={filterItems} />
			<button type="submit">
				<i class="fa fa-search" />
			</button>
		</div>

		{#if filteredItems.length > 0}
			<div class="result">
				<ul class="autocomplete-items-cont">
					{#each filteredItems as item, i}
						<Item itemName={item} on:click={() => setInputValue(item)} highlighted={i === hiLiteIndex}/>
					{/each}
				</ul>
			</div>
		{/if}
	</form>
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

	.autocomplete {
		position: relative;
		display: flex;
		// justify-content: center;
		// align-items: center;
		width: 50%;
		margin: 0 auto;
	}
	input {
		border: 1px solid transparent;
		background-color: #f1f1f1;
		padding: 10px;
		font-size: 16px;
		margin: 0;
	}
	input[type='text'] {
		background-color: #f1f1f1;
		width: 80%;
		border: 1px solid $text-bg-primary;
		background: $text-bg-primary;
		&:focus {
			border: 1px solid $secondary-color;
			box-shadow: 0 0 3px $secondary-color;
			outline-offset: 0px;
			outline: none;
		}
	}
	button[type='submit'] {
		background: $primary-color;
		color: white;
		width: 20%;
		border: 1px solid $secondary-color;
		border-left: none; /* Prevent double borders */
		cursor: pointer;
		&:hover {
			background: $secondary-color;
		}
	}
	.result {
		width: 50%;
		margin: 0 auto;
	}
	ul.autocomplete-items-cont {
		/*the container must be positioned relative:*/
		position: relative;
		top: 0;
		margin: 0;
		padding: 0;
		width: 80%;
		border: 1px solid #ddd;
		background-color: #fff;
	}
</style>
