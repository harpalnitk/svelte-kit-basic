<script>
		    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Cards');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/cards`);
			 goto(`/cards/`+ content[i].url);
		}
	let content= [
		{url:'overlapping-cards', name: 'Overlapping Cards'},
		{url:'glow-card', name: 'Double color neon glow card'},
		{url:'glass', name: 'Transparent Cards-Glasmorphism'},
		{url:'product-card', name: 'Product card'},
		{url:'player-card', name: 'Player card'},
		{url:'profile-card', name: 'Profile card'},
		{url:'hovering-cards', name: 'Hovering cards'},
		{url:'glowing-card', name: 'Glowing Card'},
		{url:'3d-stack-cards', name: '3D Stack of a Card'},
		{url:'glass-card', name: 'Glass card'},
		{url:'neumorphic-card', name: 'Neumorphic Cards'},
		{url:'neumorphic-card-d', name: 'Neumorphic Cards Dark'},
		{url:'neumorphic-card-l', name: 'Neumorphic Cards Light'},
		{url:'gradient-card-shadow', name: 'Gradient Card Shadow'},
		{url:'testimonial-with-swiper', name: 'Responsive Testimonial slider With Swiper.js'},
		{url:'contact-info', name: 'Contact Info Card'},
		{url:'glass-hover', name: 'GlassMorphism Hover Effect Card'},
		{url:'instagram-card', name: 'Instagram Post Card Clone'},
		{url:'profile-hover', name: 'Profile card Hover Effect'},
		{url:'curved-card', name: 'Curved Card'},
		{url:'3d-foldable-card', name: '3D Foldable Card'},
		{url:'3d-flip-card', name: '3D Flip Card'},
		{url:'3d-flip-card2', name: '3D Flip Card 2'},
		{url:'cube-slider-swiper', name: 'Cube Slider With Swiper.js'},
		{url:'gradient-border-card', name: 'Gradient Border Card'},
		{url:'image-hover-card', name: 'Image Scale on hover Card'},
		{url:'weird-shape-card', name: 'Weird Shape Card'},
		{url:'card-border-anim', name: 'Card Border Animation'},
		{url:'hexagon-card', name: 'Hexagon Card'},
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
