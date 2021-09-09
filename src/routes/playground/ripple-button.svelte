<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    import RippleButton from '$lib/components/UI/RippleButton.svelte';
    import ShineButton from '$lib/components/UI/ShineButton.svelte';
</script>
<BasicPage title='Ripple Button' path='/playground'></BasicPage>


<main>
    <section class='ripple'>
        <h1>Ripple Button</h1>
        <RippleButton/>
        <RippleButton/>
    </section>
    <section class="shine">
        <h1>Shine Button</h1>
        <ShineButton background={'#27022d'} hoverBackground = {'#a41ee9'}/>
        <ShineButton background={'#27022d'} hoverBackground = {'#ff3c7f'}/>
    </section>

</main>



<style lang="scss">
	@import '../../styles/vars';
    section{
        text-align: center;
    }
    h1{
        color: #fff;
    }
    .ripple{
    min-height: 30vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    background: #040d15;
    display: flex;
    flex-direction: column;
    place-content: center;
}
.shine{
    position: relative;
    margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 30vh;
width: min(70rem, 90vw);
background: #19011d;
}

</style>