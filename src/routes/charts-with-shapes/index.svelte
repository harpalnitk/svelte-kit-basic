<script>
    	    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('CSS SVG Polygons Shapes');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/charts-with-shapes`);
			 goto(`/charts-with-shapes/`+ content[i].url);
		}
   	let content= [
		{url:'pentagon', name: 'Pentagon With Glyphs'},
		{url:'pentagon-2', name: 'Pentagon With SVG'},
        {url:'css-shapes', name: 'With CSS Shapes'},
		{url:'emojis', name: 'With Emojis'},
        {url:'mix', name: 'Mix Shapes'},
		{url:'polygon-border', name: 'Polygon Border With CSS Paint API'},
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

