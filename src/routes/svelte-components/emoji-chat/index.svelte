<script>
	 import BasicPage from '$lib/components/UI/BasicPage.svelte';
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/UI/Button.svelte';
	// console.log(String.fromCodePoint(129504));
	// console.log('🧠'.codePointAt(0));

	let emojiSets = [
		{ type: 'faces', minVal: 128512, maxVal: 128580 },
		{ type: 'faces2', minVal: 129296, maxVal: 129327 },
		{ type: 'body', minVal: 128066, maxVal: 128080 },
		{ type: 'animals', minVal: 129408, maxVal: 129442 },
		{ type: 'transport', minVal: 128640, maxVal: 128676 },
		{ type: 'misc', minVal: 129494, maxVal: 129535 }
	];

	let selectedSet = 0;
	// $: console.log(selectedSet)
	$: min = emojiSets[selectedSet].minVal;
	$: max = emojiSets[selectedSet].maxVal;

	// storage of emojis to make emoji keyboard
	let emojis = [];

	$: for (let i = min; i <= max; i++) {
		//console.log(String.fromCharCode(i))
		emojis = [...emojis, String.fromCodePoint(i)];
	}
	const clearEmojiMenu = () => (emojis = []);

	const chooseEmojiSet = (e) => {
		selectedSet = Number(e.target.dataset.id);
		clearEmojiMenu();
	};

	// Header on emoji keyboard to select different emoji sets
	let setIcons = [128512, 129313, 128074, 129417, 128664, 129504];
	// Emoji icon to open modal of emojis
	let emojiIcon = String.fromCodePoint(128571);
	let modalOpen = false;

	//TEXTAREA MESSAGE
	let message = '';
	let textBox;

	//$: console.log(message);

	const addEmoji = (e) => {
		message += e.target.textContent;
	};

	const submitMessage = () => {
		console.log(message);
		textBox.value = '';
		message = '';
	};
</script>
<BasicPage title='Emoji Chat' path='/svelte-components'></BasicPage>
<div class="page-container">
	<section>
		<div class="chat-popup" id="myForm">
			<form on:submit|preventDefault={submitMessage} class="form-container">
				<h1>Chat</h1>

				<label for="msg"><b>Message</b></label>
				<textarea placeholder="Type message.." required bind:value={message} bind:this={textBox} />

				<div id="btn-emoji-icon-cont">
					<Button type="submit" class="btn">Send</Button>
					<div id="emoji-opener-icon" on:click={() => (modalOpen = !modalOpen)}>{emojiIcon}</div>
				</div>
			</form>
		</div>

		<!--Emoji Menu Set-->
		{#if modalOpen}
			<div id="emoji-cont" transition:fly={{ y: -30 }}>
				<header>
					{#each setIcons as unicode, i}
						<div data-id={i} on:click={chooseEmojiSet}>{String.fromCodePoint(unicode)}</div>
					{/each}
					<div id="closer-icon" on:click={() => (modalOpen = false)}>X</div>
				</header>
				{#each emojis as emoji}
					<span on:click={addEmoji}>{emoji}</span>
				{/each}
			</div>
		{/if}
	</section>
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
	section {
		width: 100vw;
		max-width: 35rem;
		margin: 0 auto;
		margin-top: 1rem;
	}

	/* Add styles to the form container */
	.form-container {
		width: 100%;
		padding: 10px;
		background-color: white;
	}

	/* Full-width textarea */
	.form-container textarea {
		width: 100%;
		padding: 15px;
		margin: 5px 0 22px 0;
		font-size: 1.5rem;
		border: none;
		background: #ddd;
		resize: none;
		min-height: 200px;
	}

	/* When the textarea gets focus, do something */
	.form-container textarea:focus {
		background-color: #ddd;
		outline: none;
	}

	#btn-emoji-icon-cont {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#emoji-opener-icon {
		font-size: 2rem;
		cursor: pointer;
		margin-left: 1rem;
		transition: all 0.1s;
	}

	#emoji-opener-icon:active {
		font-size: 2.3rem;
		transform: rotate(10deg);
		cursor: pointer;
	}

	#emoji-cont {
		max-width: 100%;
		max-height: 248px;
		overflow: scroll;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-left: 10px;

		span {
			font-size: 1.5rem;
			padding: 0.3rem;
			border: 1px solid gray;
			background: #eee;
			cursor: pointer;
			width: 12%;

			&:active {
				background: #fff;
			}
		}
	}

	#emoji-cont header {
		width: 96%;
		display: flex;
		align-items: center;
		justify-content: space-around;

		border: 2px  solid gray;
        border-bottom: 1px  solid gray;
	}

	#emoji-cont header div {
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: bold;
		padding: 0.3rem;
		opacity: 0.7;
		transition: all 0.3s ease;
		&:hover {
			opacity: 1;
			background-color: $tertiary-color;
			border-radius: 20px;
		}
		&:active {
			background-color: $primary-color;
			opacity: 0.7;
		}
	}

	#closer-icon {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: right;
	}
</style>
