<script>
    	    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Grid and Flexbox Cocepts');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/grid-layout`);
			 goto(`/grid-layout/`+ content[i].url);
		}
   	let content= [
		{url:'responsive', name: 'Responsive'},
		{url:'photo-grid', name: 'Photo Grid'},
        {url:'photo-grid-animated', name: 'Photo Grid Animated'},
        {url:'three-column-fluid', name: '1 to 3 Column Fluid Layout'},
        {url:'twelve-column-system', name: 'Layout using 12 column system'},
        {url:'product-listing', name: 'Product Listing With Auto Placement'},
        {url:'grid-concept', name: 'Grid Concepts'},
        {url:'flex-layout', name: 'Flex Concepts'},
		{url:'expand-section-grid', name: 'Expandable Section Using CSS Grid'},
		{url:'layout-without-media-query', name: 'Responsive CSS Layouts without Media Queries'},
		];
</script>



<main class='main-index'>
    <ul class='link-grid'>
		{#each content as item, i}
		<li>{i+1}. <span on:click={()=> changePage(i)}>{item.name}</span></li>
		{/each}

    </ul>
</main>



<style lang="scss">
	@import '../../styles/vars';
</style>