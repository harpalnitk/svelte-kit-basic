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
		{url:'http-firebase', name: 'Http Firebase'},
		{url:'image-fragmentation', name: 'Image Fragmentation'},
		{url:'spring', name: 'Spring Animation'},
		{url:'svg-graphics', name: 'SVG Graphics'},
		{url:'tweened', name: 'Tweened'},
		{url:'css-hexagon', name: 'CSS Hexagon'},
		{url:'box-shadow', name: 'Box Shadow Designs'},
		{url:'clip-path-animations', name: 'Clip Path Animations'},
		{url:'trignometry-sun', name: 'Shapes Using Trignometry'},
		{url:'star-rating', name: 'Scalable Star rating'},
		{url:'curved-menu', name: 'Curved Outside Sidebar Menu'},
		{url:'conic-spinner', name: 'Conic Gradient Spinner'},
		{url:'ripple-button', name: 'Ripple-Button-Animation'},
		{url:'creative-menu', name: 'Creative Menu'},
		{url:'svg-animation', name: 'SVG Animation'},
		{url:'ripple-animation', name: 'Ripple-Animation'},
		{url:'shadows', name: 'CSS Shadows'},
		{url:'clock', name: 'Clock using CSS'},
		{url:'wavy-text', name: 'Wavy Text'},
		{url:'water-drops', name: 'Water Drops'},
		{url:'radio-glow', name: 'Neon Glowing Radio Butotns'},
		{url:'scale-video-scroll', name: 'Scale Video/Image on scroll'},
		{url:'particle', name: 'Particle Effect'},
		{url:'calculator', name: 'Calculator'},
		{url:'liquid', name: 'Liquid Animation Effect'},
		{url:'rotating-images', name: 'Rotating Images on Mouse Move'},
		{url:'shape-outside', name: 'CSS Shape Outside Property'},
		{url:'text-emphasis', name: 'CSS Text Emphasis Property'},
		{url:'dialog-backdrop', name: 'Dialog with CSS Backdrop Property'},
		{url:'rating-bar', name: 'Rating Bar'},
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
