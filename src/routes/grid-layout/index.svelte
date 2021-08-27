<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Grid Layout' path='/'></BasicPage>


<main>
    <ul class='link-grid'>
        <li>1. <a href="/grid-layout/responsive">Responsive</a></li>
        <li>2. <a href="/grid-layout/photo-grid">Photo Grid</a></li>
        <li>3. <a href="/grid-layout/photo-grid-animated">Photo Grid Animated</a></li>
        <li>4. <a href="/grid-layout/three-column-fluid">1 to 3 Column Fluid Layout</a></li>
        <li>5. <a href="/grid-layout/twelve-column-system">Layout using 12 column system</a></li>
        <li>6. <a href="/grid-layout/product-listing">Product Listing With Auto Placement</a></li>

    </ul>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main {
        padding: 1rem;
        margin:0 auto;
        width: fit-content;
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