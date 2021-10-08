<script>
	    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Playground 2');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/playground2`);
			 goto(`/playground2/`+ content[i].url);
		}
	let content= [
		{url:'search-box', name: 'Search Box'},
		{url:'abstract-bg', name: 'Abstract Background'},
		{url:'cutout', name: 'Cutouts using SVG, Clip Path, Mask'},
		{url:'indian-flag', name: 'Indian Flag Using CSS'},
		{url:'social-icon-hover', name: 'Social Media Icon Hover Effect'},
		{url:'contact-info', name: 'Contact Info Page-Glassmorphism'},
		{url:'glass-calendar', name: 'Glassmorphism Calendar'},
		{url:'menu-hover', name: 'Menu Hover Effect'},
		{url:'li-pseudo-commas', name: 'Li element pseudo commas'},
		{url:'circle-text-logo', name: 'Circle Text Logo'},
		{url:'skeleton', name: 'Skeleton Loading'},
		{url:'neumorphism-button', name: 'Neumorphism-Button'},
		{url:'dropdown-menu', name: 'Dropdown Menu'},
		{url:'falling-leaves', name: 'Falling leaves Animation'},
		{url:'icon-text-anim', name: 'Glowing Icon With Text Typing Animation'},
		{url:'magic-line-nav', name: 'Magic Line Indicator on Nav List'},
		{url:'moving-box', name: '3D-Moving Box'},
		{url:'light-bulb', name: 'Light Bulb On/Off with Sound'},
		{url:'glowing-checkbox', name: 'Glowing Checkbox'},
		{url:'loading-anim', name: 'Loading Animation'},
		{url:'fancy-border', name: 'Fancy Border in Heading'},
		{url:'show-hide-pwd', name: 'Show Hide Password'},
		{url:'intro-text', name: 'Intro Text'},
		{url:'airplane', name: 'AirPlane'},
		{url:'loading-squares', name: 'Colorful Loading Squares'},
		{url:'before-after-pseudo', name: 'Before After Pseudo Element 7 use Cases'},
		{url:'eye-move', name: 'Eye Movement on mouse move'},
		{url:'loading-plane', name: 'Loading Plane Animation'},
		{url:'truck-anim', name: 'Truck Animation Svelte'},
		{url:'3d-anim-text', name: '3D Anim Text'},
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
