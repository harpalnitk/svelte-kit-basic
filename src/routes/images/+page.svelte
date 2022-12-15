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
		{url:'image-with-text', name: 'Images in corners of text box'},
		{url:'text-portrait', name: 'Text Portrait Effect'},
		{url:'image-pixel', name: 'Image Pixel Effect'},
		{url:'mix-blend-mode', name: 'Mix Blend Modes'},
		{url:'reflections', name: 'Reflections'},
		{url:'oil-paint-effect', name: 'Oil Paint Effect'},
		{url:'gallery-focus', name: 'Pure CSS Gallery focus'},
		{url:'image-decoration', name: 'Image/Border of Image decoration'},
		{url:'image-decoration-masks', name: 'Image/Border of Image decoration with Masks'},
		{url:'image-decoration-complex-animation', name: 'Image/Border of Image complex decoration with Animations'},
		{url:'image-fold', name: 'Image Fold Effect using CSS'},
		{url:'circular-carousel', name: 'Circular rotating image slider'},
		{url:'flipping-carousel', name: 'Flipping polaroid image slider'},
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