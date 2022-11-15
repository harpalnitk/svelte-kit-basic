<script>
	import store from '$lib/stores/pageData';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	onMount(async () => {
		store.setTitle('Grid and Flexbox Cocepts');
		store.setUrl('/');
	});
	const changePage = (i) => {
		store.setTitle(content[i].name);
		store.setUrl(`/grid-layout`);
		goto(`/grid-layout/` + content[i].url);
	};
	let content = [
		{ url: 'responsive', name: 'Responsive' },
		{ url: 'photo-grid', name: 'Photo Grid' },
		{ url: 'photo-grid-animated', name: 'Photo Grid Animated' },
		{ url: 'photo-grid-hover', name: 'Photo Grid Hover' },
		{ url: 'three-column-fluid', name: '1 to 3 Column Fluid Layout' },
		{ url: 'twelve-column-system', name: 'Layout using 12 column system' },
		{ url: 'product-listing', name: 'Product Listing With Auto Placement' },
		{ url: 'grid-concept', name: 'Grid Concepts' },
		{ url: 'flex-layout', name: 'Flex Concepts' },
		{ url: 'expand-section-grid', name: 'Expandable Section Using CSS Grid' },
		{ url: 'layout-without-media-query', name: 'Responsive CSS Layouts without Media Queries' },
		{ url: 'auto-filling-grid', name: 'Auto Filling Grid' },
		{ url: 'fit-content-use-cases', name: 'Use Cases: fit-content' },
		{ url: 'condition-style-grid-elements', name: 'Conditionally styling Grid elements' },
		{ url: 'implicit-grid', name: 'Implicit Grid and Auto Placement Powers' },
		{ url: 'grid-shapes', name: 'Grid Shapes' },
		{ url: 'grid-shapes-2', name: 'Grid Shapes 2' },
		{ url: 'grid-shapes-3', name: 'Grid Shapes 3' },
	];
</script>

<main class="main-index">
	<ul class="link-grid">
		{#each content as item, i}
			<li>{i + 1}. <span on:click={() => changePage(i)}>{item.name}</span></li>
		{/each}
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';
</style>
