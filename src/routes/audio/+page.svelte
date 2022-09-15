<script>
		    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Audio');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/audio`);
			 goto(`/audio/`+ content[i].url);
		}
	let content= [
		{url:'audio-player', name: 'Audio Player'},
		{url:'css-js-music-player', name: 'CSS JS Music Player'},
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
