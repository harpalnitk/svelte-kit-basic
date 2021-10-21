<script>
		import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Videos');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/videos`);
			 goto(`/videos/`+ content[i].url);
		}
	let content= [
		{url:'video-text', name: 'Video Text Effect'},
		{url:'scale-video-scroll', name: 'Scale Video/Image on scroll'},
		{url:'video-slider', name: 'Video Slider'},
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
