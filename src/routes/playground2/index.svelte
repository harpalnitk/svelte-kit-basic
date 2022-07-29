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
		//pages
		{url:'social-icon-hover', name: 'Social Media Icon Hover Effect'},
		{url:'contact-info', name: 'Contact Info Page-Glassmorphism'},
		//Menu
		{url:'dropdown-menu', name: 'Dropdown Menu'},
		{url:'dropdown-menu2', name: 'Dropdown Menu 2'},
		{url:'dropdown-menu3', name: 'Dropdown Menu 3 : Select'},
		{url:'dropdown-menu4', name: 'Dropdown Menu With Pic'},
		{url:'sidebar-menu', name: 'Sidebar Menu'},
		{url:'magic-line-nav', name: 'Magic Line Indicator on Nav List'},
		{url:'magic-line-nav-below', name: 'Magic Line Nav Below'},
		{url:'menu-hover', name: 'Menu Hover Effect'},
		{url:'curved-menu', name: 'Curved Outside Sidebar Menu'},
		{url:'creative-menu', name: 'Creative Menu'},
		{url:'vertical-expand-menu', name: 'Vertical Expandable Menu'},
		{url:'menu-icon-hover', name: 'Menu Icon Hover Effect'},
		{url:'circular-menu', name: 'Circular Menu'},
		{url:'curved-magic-menu', name: 'Curved Magic Menu Below'},
		{url:'curved-magic-menu-2', name: 'Curved Magic Menu Above'},
		{url:'nine-dots-menu', name: 'Nine Dots Menu'},
		{url:'three-dots-menu', name: 'Three Dots Menu'},
		{url:'isometric-menu', name: 'Isometric 3D Menu'},
		{url:'floating-menu-pic', name: 'Floating Action Menu with Pic'},
		{url:'popup-box', name: 'Simple pop up Box'},
		{url:'arrow-menu', name: 'Arrow Menu Indicator'},


		//Text
		{url:'icon-text-anim', name: 'Glowing Icon With Text Typing Animation'},
		{url:'circle-text-logo', name: 'Circle Text Logo'},
		{url:'3d-anim-text', name: '3D Anim Text'},
		{url:'intro-text', name: 'Intro Text'},
		{url:'wavy-text', name: 'Wavy Text'},
		{url:'text-emphasis', name: 'CSS Text Emphasis Property'},
		{url:'corner-text', name: 'Corner Text Parallax Effect'},
		{url:'happy-diwali', name: 'Twinkle Happy Diwali'},
		{url:'happy-diwali2', name: 'Twinkle Happy Diwali 2'},
		{url:'keyboard-keys', name: 'KeyBoard Keys'},
		{url:'cursor-text', name: 'Cursor Text Animation Effect'},
		{url:'glowing-text', name: 'Glowing Text Dark background Effect'},
		{url:'glowing-text-2', name: 'Glowing Text-2 Dark background Effect'},
		{url:'text-cubes', name: 'Text Cubes Year Date'},
		{url:'distortion-text', name: 'Distortion Text'},
		{url:'text-focus', name: 'Text-Focus'},
		{url:'truncate-text', name: 'Truncate Text in cards'},
		//Loading
		{url:'loading-squares', name: 'Colorful Loading Squares'},
		{url:'loading-anim', name: 'Loading Animation'},
		{url:'loading-plane', name: 'Loading Plane Animation'},
		{url:'skeleton', name: 'Skeleton Loading'},
		{url:'conic-spinner', name: 'Conic Gradient Spinner'},
		{url:'tweened', name: 'Tweened'},
		{url:'loading-bar', name: 'Loading Bar'},
		{url:'circular-ring-loading', name: 'Circular Ring Loading'},
		{url:'glassmorphism-loading', name: 'Glassmorphism Loading Circle'},
		{url:'spiral-loading', name: '3-Spiral-Loaders'},
		{url:'neumorphism-loading', name: 'Neumorphism Loading'},
		{url:'neumorphism-loading-bars', name: 'Neumorphism Loading Bars'},
		{url:'circular-loading', name: 'Circular Loading'},

	     //Cartoons
		{url:'truck-anim', name: 'Truck Animation Svelte'},
		{url:'airplane', name: 'AirPlane'},
		{url:'moving-box', name: '3D-Moving Box'},
		{url:'light-bulb', name: 'Light Bulb On/Off with Sound'},
		{url:'indian-flag', name: 'Indian Flag Using CSS'},
		{url:'ukraine-russia-india-flag', name: 'Ukraine Russia India Flag'},
		{url:'eye-move', name: 'Eye Movement on mouse move'},
		{url:'cartoon-eye-move', name: 'Cartoon Eye Movement on mouse move'},
		{url:'falling-leaves', name: 'Falling leaves Animation'},
		{url:'rain', name: 'Colorful Rain Animation'},
		{url:'water-drops', name: 'Water Drops'},
		{url:'water-drop-logo', name: 'Water Drop Logo effect'},
		{url:'bounce-balls', name: 'Bounce Balls With Semi-Circle'},
		{url:'rotate-earth-text', name: 'Rotating Earth Text Animation'},
		{url:'tea-cup', name: 'Tea Cup'},
		{url:'squid-games', name: 'Squid Games Icons'},
		{url:'stairs', name: 'Stairs and clouds'},
		{url:'christmas', name: '3D-Animated Christmas Tree'},
		{url:'light-effect', name: 'CSS Dappled Light Effect'},
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
