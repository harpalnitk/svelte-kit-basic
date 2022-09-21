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
		{url:'gradient-shadow', name: 'CSS Gradient Shadow'},


		//Utilities
		{url:'clock', name: 'Clock using CSS'},
		{url:'clock-2', name: 'Clock-2 using CSS'},
		{url:'clock-3', name: 'Clock-3 using CSS'},
		{url:'clock-using-conic-gradient', name: 'Clock Using Conic Gradient'},
		{url:'glass-calendar', name: 'Glassmorphism Calendar'},
		{url:'full-calendar', name: 'Full Year Calendar'},
		{url:'calculator', name: 'Calculator'},
		{url:'calculator-2', name: 'Calculator-Neomorphism'},
		{url:'calculator-3', name: 'Calculator-Claymorphism'},
		{url:'search-box', name: 'Search Box'},
		{url:'countdown-timer', name: 'CountDown Timer'},
		{url:'dialog-backdrop', name: 'Dialog with CSS Backdrop Property'},
		{url:'li-pseudo-commas', name: 'Li element pseudo commas'},
		{url:'http-firebase', name: 'Http Firebase'},
		{url:'before-after-pseudo', name: 'Before After Pseudo Element 7 use Cases'},
		{url:'rare-html-tags', name: 'Rare But useful HTML Tags'},
		//Utilities::Rating Bar
		{url:'rating-bar', name: 'Rating Bar'},
		{url:'star-rating', name: 'Scalable Star rating'},
		{url:'star-rating-icons', name: 'Star Rating using HTML icons'},
		//Misc
		{url:'ripple-animation', name: 'Ripple-Animation'},
		{url:'particle', name: 'Particle Effect'},
		{url:'liquid', name: 'Liquid Animation Effect'},
		{url:'fancy-border', name: 'Fancy Border in Heading'},
		{url:'fancy-ribbon', name: 'Fancy Ribbon in Card'},
		{url:'fancy-ribbon-2', name: 'Fancy Ribbon in Card-2'},
     	{url:'spring', name: 'Spring Animation'},
		{url:'abstract-bg', name: 'Abstract Background'},
		{url:'abstract-bg-2', name: 'Abstract Background-2'},
		{url:'abstract-bg-3', name: 'Abstract Background-3'},
		{url:'abstract-bg-color-dots', name: 'Abstract Background Colorful Dots'},
		{url:'paper-bg', name: 'Cut Paper Background'},
		{url:'checkboard-bg', name: 'Checkboard background'},
		{url:'bg-anim', name: 'Background Animation'},
		{url:'icon-glassmorphism', name: 'Icon Glassmorphism'},
	
		{url:'ambient-light', name: 'Ambient Light Effect Cube'},
		{url:'3D-social-media-icon', name: '3D Social Media Icon Effect'},
		{url:'apple-music', name: 'Apple Music Animation Effect'},
		{url:'diagnol-stripes', name: 'Diagnol Stripes'},
		{url:'ball-balance', name: 'Physics Ball Balance'},
		{url:'thunderbolt', name: 'ThunderBolt Lightining'},
		{url:'colorful-dots', name: 'Colorfull Dots Hover Effect'},
		{url:'glass-anim', name: 'Glassmorphism-Animation'},
		{url:'two-smiley-faces', name: 'Only Two Smiley Faces'},
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
