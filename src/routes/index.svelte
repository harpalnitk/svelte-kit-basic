
<script>
			    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('CSS-Svelte-Tricks');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/`);
			 goto(`/`+ content[i].url);
		}
		let content= [
		{url:'playground', name: 'CSS Playground'},
		{url:'playground2', name: 'CSS Playground 2'},
		{url:'playground3', name: 'CSS Playground 3'},
		{url:'cards', name: 'Cards'},
		{url:'grid-layout', name: 'Grid and Flex layout Properties'},
		{url:'images', name: 'Images CSS properties'},
		{url:'audio', name: 'Audio CSS Properties'},
		{url:'videos', name: 'Videos CSS Properties'},
		{url:'svelte-components', name: 'Svelte Components'},
		{url:'web-pages', name: 'WebSite Designs'},
		{url:'charts-with-shapes', name: 'Charts SVG Polygons Shapes'},
		
		];
</script>
<main class='main-index'>
	<h1>CSS-Svelte-Tricks!</h1>
	<ul class="link-grid">
		{#each content as item, i}
		<li>{i+1}. <span on:click={()=> changePage(i)}>{item.name}</span></li>
		{/each}
	</ul>

</main>

<style lang="scss">
	@import '../styles/vars';
	h1{
		margin: 1rem 0;
	}
</style>
