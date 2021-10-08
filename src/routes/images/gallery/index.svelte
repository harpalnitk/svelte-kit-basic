<script>
	
	import Gallery from './Gallery.svelte';
	import ImageDisplay from './ImageDisplay.svelte';
	import Button from '$lib/components/UI/Button.svelte';
	let modalOpen = false;

	let imageShowingIndex = 0;

	const handleImgClick = (e) => {
		imageShowingIndex = Number(e.target.id);
		modalOpen = true;
	};
</script>

<div class="page-container">
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
	@import '../../../styles/vars';

	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		padding: 2rem;

		max-width: 768px;
		position: relative;

		section {
			margin-top: 1rem;
			text-align: center;
		}
	}
</style>
