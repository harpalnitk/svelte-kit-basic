<script>
		    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Playground');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/playground`);
			 goto(`/playground/`+ content[i].url);
		}
	let content= [
		//Box-Shadows
		{url:'box-shadow', name: 'Box Shadow Designs'},
		{url:'shadows', name: 'CSS Shadows'},


		//Utilities
		{url:'clock', name: 'Clock using CSS'},
		{url:'clock-2', name: 'Clock-2 using CSS'},
		{url:'glass-calendar', name: 'Glassmorphism Calendar'},
		{url:'calculator', name: 'Calculator'},
		{url:'search-box', name: 'Search Box'},
		//Utilities::Rating Bar
		{url:'rating-bar', name: 'Rating Bar'},
		{url:'star-rating', name: 'Scalable Star rating'},
		//Misc
		{url:'ripple-animation', name: 'Ripple-Animation'},
		{url:'particle', name: 'Particle Effect'},
		{url:'liquid', name: 'Liquid Animation Effect'},
		{url:'before-after-pseudo', name: 'Before After Pseudo Element 7 use Cases'},
		{url:'fancy-border', name: 'Fancy Border in Heading'},
		{url:'fancy-ribbon', name: 'Fancy Ribbon in Card'},
		{url:'show-hide-pwd', name: 'Show Hide Password'},
		{url:'dialog-backdrop', name: 'Dialog with CSS Backdrop Property'},
		{url:'li-pseudo-commas', name: 'Li element pseudo commas'},
		{url:'http-firebase', name: 'Http Firebase'},
		{url:'spring', name: 'Spring Animation'},
		{url:'abstract-bg', name: 'Abstract Background'},
		{url:'paper-bg', name: 'Cut Paper Background'},
		{url:'bg-anim', name: 'Background Animation'},
		{url:'icon-glassmorphism', name: 'Icon Glassmorphism'},
		{url:'rare-html-tags', name: 'Rare But useful HTML Tags'},
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
