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
		{url:'css-hexagon', name: 'CSS Hexagon'},
		{url:'triangle', name: 'Triangle With Images'},
		{url:'emojis', name: 'With Emojis'},
        {url:'mix', name: 'Mix Shapes'},
		{url:'polygon-border', name: 'Polygon Border With CSS Paint API'},
		{url:'rounded-corner-shapes', name: 'Rounded Corner Shapes with CSS'},
		{url:'rounded-corner-shapes2', name: 'Rounded Corner Shapes with CSS Paint API'},
		{url:'clip-path-animations', name: 'Clip Path Animations'},
		{url:'trignometry-sun', name: 'Shapes Using Trignometry'},
		{url:'svg-graphics', name: 'SVG Graphics'},
		{url:'svg-animation', name: 'SVG Animation'},
		{url:'shape-outside', name: 'CSS Shape Outside Property'},
		{url:'cutout', name: 'Cutouts using SVG, Clip Path, Mask'},
		{url:'mask-border', name: 'Mask Border CSS Property'},
		{url:'how-to-draw-svg-shapes', name: 'How To Draw SVG Shapes'},
		{url:'square-chart-with-mask-and-svg', name: 'Square Chart With Mask And SVG'},
		{url:'paint-generative-pattern', name: 'Random Generative Patterns with Paint API'},
	
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

