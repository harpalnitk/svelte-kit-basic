<script>
			import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Web Pages');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/web-pages`);
			 goto(`/web-pages/`+ content[i].url);
		}
		let content= [
		{url:'full-page-tabs', name: 'Full Page Tabs'},
		{url:'fruits', name: 'Fruits Website'},
		{url:'personal-portfolio', name: 'Responsive Personal Portfolio Website'},
		{url:'e-commerce', name: 'E-Commerce Product Cards page'},
		{url:'advanced-css', name: 'Advanced CSS'},
		{url:'advanced-flex', name: 'Advanced Flex'},
		{url:'advanced-grid', name: 'Advanced Grid'},
		{url:'admin-dashboard', name: 'Admin Dashboard'},
		{url:'three-js', name: '3D Website using three.js'},
		{url:'dropdown-menu', name: 'Responsive Dropdown Menu'},
		{url:'light-dark', name: 'Light Dark Mode'},
		{url:'contact-us', name: 'Responsive Contact us Page'},
		{url:'auth-page', name: 'Responsive Auth Page'},
		{url:'services-page', name: 'Our Services page'},
		{url:'newsletter', name: 'Newsletter Page'},
		{url:'whatsapp-web', name: 'Whatsapp Web Clone'},
		{url:'sticky-header', name: 'Sticky Header CSS Trick'},
		{url:'404-page', name: 'Animated 404 Page'},
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
