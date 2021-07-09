<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Grid Layout' path='/'></BasicPage>


<main>
    <ul>
        <li>1. <a href="/grid-layout/responsive">Responsive</a></li>
        <li>2. <a href="/grid-layout/photo-grid">Photo Grid</a></li>
        <li>3. <a href="/grid-layout/photo-grid-animated">Photo Grid Animated</a></li>
        <li>4. <a href="/grid-layout/three-column-fluid">1 to 3 Column Fluid Layout</a></li>
        <li>4. <a href="/grid-layout/twelve-column-system">Layout using 12 column system</a></li>
        <li>4. <a href="/grid-layout/product-listing">Product Listing With Auto Placement</a></li>

    </ul>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main {
        padding: 1rem;
        margin:0 auto;
        width: fit-content;
    }

</style>