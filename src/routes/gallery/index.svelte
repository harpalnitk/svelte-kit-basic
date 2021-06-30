<script>
	import Gallery from '$lib/gallery/Gallery.svelte';
	import ImageDisplay from '$lib/gallery/ImageDisplay.svelte';
	import Button from '$lib/components/UI/Button.svelte';
	let modalOpen = false;

	let imageShowingIndex = 0;

	const handleImgClick = (e) => {
		imageShowingIndex = Number(e.target.id);
		modalOpen = true;
	};
</script>

<div class="page-container">
	<h1>LightBox Gallery</h1>

	{#if modalOpen}
		<Gallery on:click={() => (modalOpen = !modalOpen)} {imageShowingIndex} />
	{:else}
		<ImageDisplay on:click={handleImgClick} />
	{/if}
	<section>
		<Button on:click={() => (modalOpen = !modalOpen)}>View All</Button>
	</section>
</div>

<style lang="scss">
	@import '../../styles/vars';

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

		section {
			margin-top: 1rem;
			text-align: center;
		}
	}
</style>
