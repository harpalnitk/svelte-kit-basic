<script>
	 import BasicPage from '$lib/components/UI/BasicPage.svelte';
    	import { fade, fly } from 'svelte/transition';
	import Button from '$lib/components/UI/Button.svelte';
   let barWidth = 0;
	let progress;
	//To disable upload button while uploading file
	let isActive;
    let chooseFileBtn; // use with bind:this and the input type="file"

    $: console.log(isActive);

	$: if (barWidth === 100) {
        stopProgress();
        // we want to reset afte complete message is shown
        setTimeout(resetBar, 2500);
	}

    const randomTime = () => Math.floor(Math.random() * 60)

    const stopProgress = () => {
		clearInterval(progress);
		isActive = false;
		chooseFileBtn.value = "";
	}

	const addColor = () => (barWidth += 1);
	const makeProgress = () => {
		if (!chooseFileBtn.value) {
			alert('Choose a file.');
		} else {
			isActive = true;
			progress = setInterval(addColor, randomTime());
		}
	};

	const resetBar = () => {
		stopProgress();
		barWidth = 0;
	};
</script>
<BasicPage title='Progress Bar' path='/svelte-components'></BasicPage>
<div class="page-container">
	<section>
		<div id="complete-msg-cont">
            {#if barWidth === 100}
            <h3 id="complete-msg" in:fly={{x: -300}} out:fly={{x: 300}}>Your file has been uploaded!</h3>
            {/if}
		</div>
		<div id="myProgress">
{#if isActive}
<span>{barWidth}%</span>
<div id="myBar" style="width:{barWidth}%" />
{/if}
		</div>

		<form on:submit|preventDefault={makeProgress}>
			<input type="file" id="myFile" name="filename" bind:this={chooseFileBtn}/>

			<Button disabled={isActive} type="submit">Upload File</Button>
			<Button type="reset" on:click={resetBar}>Cancel</Button>
		</form>
	</section>
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

	#myProgress {
		width: 100%;
		background-color: #ddd;
		position: relative;
		margin-top: 5%;
		margin-bottom: 1rem;
		span {
			position: absolute;
			left: 46%;
			top: 10%;
			font-size: 1.2rem;
		}
	}

	#myBar {
		width: 1%;
		height: 30px;
        background-color: hsl(102, 27%, 60%);	
	}
	form {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

    @keyframes blink {
        to {opacity: 0;}
    }

    #complete-msg-cont {
        height: 50px;
        padding: 10px;
    }
    h3#complete-msg{
        margin: 0;
        text-align: center;
        animation: blink .5s ease-in-out 3;
    }
</style>
