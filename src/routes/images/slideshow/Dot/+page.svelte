<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	export let quoteIndex;
	export let counter;
	export let attribution;
	export let autoPlaying;
</script>

<span class="dot" class:active={quoteIndex === counter} on:click 
title= {`quote by ${attribution}`}
class:not-clickable={autoPlaying}/>

<style lang="scss">
	@import '../../../styles/vars';
	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 15px;
		width: 15px;
		margin: 0 5px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.3s ease;
	}

	/* Add a background color to the active dot/circle */
	.active,
	.dot:hover {
		background-color: $primary-color;
	}

	.not-clickable {
		pointer-events: none;
	}
</style>
