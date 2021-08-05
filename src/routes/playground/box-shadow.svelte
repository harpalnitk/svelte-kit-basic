<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Designs with Box Shadow'  path='/playground'></BasicPage>


<main>
<div class="box"></div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    .box{
        background: limegreen;
        width: 25rem;
        aspect-ratio: 1/1; // aspect-ratio 1/1 will automatically set height equal to the width
        // position fixed, inset 0 and margin auto can be used to center a div on the page
        position: fixed;
        inset: 0rem;
        margin: auto;

        box-shadow: 0 2rem 0 -1rem blue, //h-offset v-offset blur spread color
        0 4rem 0 -2rem red,
         0 6rem 0 -3rem purple;
    }
</style>