<script>
	export let showFloat;

	let videoCont;
	let videoPlayer;
	const hideSmallPlayer = () => {
		videoCont.classList.remove('float');
		videoPlayer.classList.remove('sm-player');
	};
</script>

<div id="video-cont" class="video-cont" class:float={showFloat} bind:this={videoCont}>
	{#if showFloat}
		<div id="close-icon" on:click={hideSmallPlayer}>X</div>
	{/if}

	<!-- svelte-ignore a11y-media-has-caption -->
	<!-- There are three supported video formats: MP4, WebM, and Ogg -->
	<video class="vid-player" controls class:sm-player={showFloat} bind:this={videoPlayer}>
		<track kind="captions" />
		<source src="video1.mp4" type="video/mp4" />
		<!-- <source src="video2.mp4" type="video/mp4" /> -->
		Sorry, your browser doesn't support embedded videos
	</video>
</div>

<style>
	.video-cont {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 10;
		margin: 1rem 2rem;
	}
	.vid-player {
		width: 100%;
	}


	.sm-player {
		width: 270px;
		height: 160px;
	}
	#close-icon {
		display: block;
		position: absolute;
		font-size: 1rem;
		color: white;
		font-weight: 800;
		top: 1%;
		right: 3%;
		cursor: pointer;
	}
	#close-icon:active {
		color: red;
	}
    @keyframes fade {
        100% {opacity: 1}
    }
     @keyframes enterR{
         0% {right: -40%}
     }
    .float {
        animation: enterR .2s ease-in-out;
		width: 290px;
		height: 200px;
		box-shadow: 0 0 7px darkgray;
		background-color: #000;
		position: fixed;
		bottom: 1%;
		right: 1%;
	}
</style>
