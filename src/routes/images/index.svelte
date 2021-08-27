<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Images CSS' path='/'></BasicPage>
<main>
    <ul class='link-grid'>
        <li>1. <a href="/images/images-para-two-column">Images Paragraph Two Columns</a></li>
        <li>2. <a href="/images/overlay-content">Positioning overlay content with Images</a></li>
		<li>3. <a href="/images/gallery">Gallery Using Svelte</a></li>
		<li>4. <a href="/images/portfolio-gallery">Portfolio Gallery Using Svelte</a></li>
		<li>5. <a href="/images/slideshow">Slideshow</a></li>
    </ul>
</main>



<style lang="scss">
	@import '../../styles/vars';


    main {
        padding: 1rem;
        margin:0 auto;
        width: fit-content;
    }
    ul{
        list-style: none;
    }
    .link-grid li {
		 display: flex;
	}
	.link-grid li a {
		margin-left: 1rem;
		text-decoration: none;
		// color: #a9a39f;
		position: relative;
		display: inline-block;
		overflow: hidden;
		margin-right: 0.2rem;
	}
	.link-grid li a:before {
		content: '';
		transition: 0.2s;
		position: absolute;
		top: calc(100% - 1px);
		left: 0;
		width: 100%;
		height: 1px;
		background: #333;
		transform: translateX(-101%);
	}

	.link-grid li a:focus,
	.link-grid li a:hover {
		// color: #fff;
		opacity: 1;
	}

	.link-grid li a:focus:before,
	.link-grid li a:hover:before {
		transform: translateX(0);
	}


  

</style>