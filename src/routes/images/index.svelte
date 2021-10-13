<script>
		    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Images');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/images`);
			 goto(`/images/`+ content[i].url);
		}
   	let content= [
		{url:'images-para-two-column', name: 'Images Paragraph Two Columns'},
		{url:'overlay-content', name: 'Positioning overlay content with Images'},
		{url:'gallery', name: 'Gallery Using Svelte'},
		{url:'portfolio-gallery', name: 'Portfolio Gallery Using Svelte'},
		{url:'slideshow', name: 'Slideshow'},
		{url:'image-fragmentation', name: 'Image Fragmentation'},
		{url:'image-paint', name: 'Image Fragmentation with CSS Paint API'},
		{url:'image-blob-paint', name: 'Blob Effect with CSS Paint API'},
		{url:'image-blob-paint-all', name: 'Blob Effect with CSS Paint API-All'},
		{url:'rotating-images', name: 'Rotating Images on Mouse Move'},
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