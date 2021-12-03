<script>
	    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Playground 3');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/playground3`);
			 goto(`/playground3/`+ content[i].url);
		}
	let content= [
		{url:'random-particles', name: 'Random Particles'},
		{url:'circles-anim', name: 'Animated Circles'},
		{url:'color-use', name: 'Right Way to Use CSS Colors'},
		{url:'animations', name: 'All animtions with only CSS'},
		{url:'linear-range-mapping', name: 'Custom property linear range mapping'},
		{url:'cartesian-system-css', name: 'Building a coordinate system in CSS and HTML'},
		];
</script>

<main class='main-index'>
	<ul class="link-grid">
		{#each content as item, i}
		<li>{i+1}. <span on:click={()=> changePage(i)}>{item.name}</span></li>
		{/each}
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';
</style>
