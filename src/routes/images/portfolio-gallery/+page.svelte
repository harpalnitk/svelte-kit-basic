<script>
	
	// import { images } from './imgData';
	// import { categories } from './imgData';
	import ButtonContainer from '$lib/components/UI/ButtonContainer.svelte';
	import Gallery from './Gallery.svelte';
	import ImageCard from './ImageCard.svelte';

	let selected = 'all';

	export let data;

	let images = data.images;
	let categories = data.categories;

	const filterSelection = (e) => (selected = e.target.dataset.name);
</script>

<div class="page-container">
	<main>
		<ButtonContainer>
			{#each categories as category}
				<button
					class:active={selected === category}
					class="btn"
					data-name={category}
					on:click={filterSelection}
				>
					{category}
				</button>
			{/each}
		</ButtonContainer>

		<!-- Portfolio Gallery Grid -->
		<Gallery>
			{#each images as { name, url, keyword, desc }}
				{#if selected === 'all'}
					<div class="show hide">
						<ImageCard {url} {name} {desc} />
					</div>
				{:else}
					<div class:show={keyword === selected} class="hide">
						<ImageCard {url} {name} {desc} />
					</div>
				{/if}
			{/each}
		</Gallery>
	</main>
</div>

<style lang="scss">
	@import '../../../styles/vars';

	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		padding: 2rem;
		h1 {
			text-align: center;
			margin-bottom: 1rem 0;
		}
		max-width: 768px;
		position: relative;
	}

	main {
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* Style the buttons */
	.btn {
		width: auto;
		min-width: 20%;
		text-transform: uppercase;
		font-weight: 200;
		font-size: 1.2rem;
		letter-spacing: 1px;
		border: none;
		outline: none;
		margin: 5px;
		padding: 14px 16px 12px;
		background-color: $primary-color;
		color: white;
		border: 1px solid $text-bg-primary;
		cursor: pointer;
		transition: 0.1s ease-in-out;

		@media (max-width: 768px) {
			padding: 10px 6px 10px;
			font-size: .8rem;
		}
		@media (max-width: 375px) {
			font-size: .5rem;
		}
	}

	/* Add a dark background color to the active button */
	.btn:active,
	.active {
		background-color: $secondary-color;
		color: white;
	}

	.hide {
		display: none;
	}

	.show {
		display: block;
	}
</style>
