<script>
	import { audioData } from '$lib/audio-player/audioData';

	//Playlist
    export let selectedTrackIndex;

    $: console.log('selectedTrackIndex', selectedTrackIndex);
	let listIsShowing = true;
	const showPlayList = () => (listIsShowing = !listIsShowing);
</script>

<section id="playlist-cont">
	<button class="accordion" class:active={listIsShowing} on:click={showPlayList}
		>&#9776; Playlist</button
	>
	<ul class:show-list={listIsShowing}>
		{#each audioData as { name, url }, i}
			<li data-track-id={i} on:click>{name}</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	@import '../../styles/vars';
	section#playlist-cont {
		width: 250px;
		box-shadow: 0 0 5px #222;
		border-radius: 0 0 5px 5px;
		background: $primary-color;
	}

	/* Style the buttons that are used to open and close the accordion panel */
	button.accordion {
		background: $primary-color;
		color: #bbb;
		margin: 0;
		padding: 5px 15px;
		width: 100%;
		/* 		text-align: left; */
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.4s;
	}

	/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
	button.active {
		background-color: $secondary-color;
		color: black;
	}

	ul {
		list-style-type: none;
		background: $primary-color;
		color: #ddd;
		margin: 0;
		padding: 0;
		border-radius: 0 0 5px 5px;
		height: 0;
		overflow: auto;
		transition: height 0.3s;
	}

	li {
		line-height: 150%;
		padding: 5px 5px 5px 20px;
		border-bottom: 1px solid #ddd;
		cursor: pointer;
	}

	.scroll {
		/* Starting position */
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		transform: translateX(100%);

		/* Apply animation to this element */
		-moz-animation: scroll-left 20s linear infinite;
		-webkit-animation: scroll-left 20s linear infinite;
		animation: scroll-left 20s linear infinite;
	}

	li:active,
	li:hover {
		background-color: $secondary-color;
	}

	.show-list {
		height: 150px;
	}
	@keyframes scroll-left {
		0% {
			-moz-transform: translateX(100%); /* Browser bug fix */
			-webkit-transform: translateX(100%); /* Browser bug fix */
			transform: translateX(100%);
		}
		100% {
			-moz-transform: translateX(-100%); /* Browser bug fix */
			-webkit-transform: translateX(-100%); /* Browser bug fix */
			transform: translateX(-100%);
		}
	}
</style>
