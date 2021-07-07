<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Grid Layout' path='/'></BasicPage>


<main>
    <ul>
        <li>1. <a href="/grid-layout/responsive">Responsive</a></li>
        <li>2. <a href="/grid-layout/photo-grid">Photo Grid</a></li>
        <li>3. <a href="/grid-layout/photo-grid-animated">Photo Grid Animated</a></li>

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