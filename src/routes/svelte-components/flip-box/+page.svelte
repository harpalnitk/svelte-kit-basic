<script>
	
	import Button from '$lib/components/UI/Button.svelte';
	
	import Flashcard from './FlashCard.svelte';

	export let data;
	let vocab = data.vocab;
	let showCardBack = false;

	const toggleShowBack = () => (showCardBack = !showCardBack);

	let flashCardIndex = 0;
	$: clue = vocab[flashCardIndex].image;
	$: answer = vocab[flashCardIndex].word;

	const prevCard = () => {
		showCardBack = false;
		if (flashCardIndex === 0) {
			flashCardIndex = vocab.length - 1;
		} else {
			flashCardIndex -= 1;
		}
	};

	const nextCard = () => {
		showCardBack = false;
		if (flashCardIndex === vocab.length - 1) {
			flashCardIndex = 0;
		} else {
			flashCardIndex += 1;
		}
	};
</script>

<div class="page-container">
	<main>
		<!-- FLASHCARD -->
		<div class="flip-box">
			<div class="flip-box-inner" class:flip-it={showCardBack}>
				<Flashcard {clue} {answer} {showCardBack} />
			</div>
		</div>

		<!-- BUTTONS -->
		<div id="btn-cont">
			<Button on:click={prevCard}>&#8592;</Button>

			<Button on:click={toggleShowBack}>
				{showCardBack ? 'Hide Answer' : 'Show Answer'}
			</Button>

			<Button on:click={nextCard}>&#8594;</Button>
		</div>
	</main>
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

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
    margin-top: 5%;
		height: 70vh;
	}
	
	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: $secondary-color;
		width: 400px;
		height: 300px;
/* 		border: 1px solid #ddd; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}
	
	#btn-cont {
		width: 300px;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
	}

</style>
