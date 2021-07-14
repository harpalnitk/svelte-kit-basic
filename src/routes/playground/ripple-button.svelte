<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    import RippleButton from '$lib/components/UI/RippleButton.svelte';
</script>
<BasicPage title='Ripple Button'></BasicPage>


<main>
<RippleButton/>
<RippleButton/>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    background: #040d15;
    display: flex;
    flex-direction: column;
    place-content: center;
}
</style>