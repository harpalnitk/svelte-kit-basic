<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    import { onMount } from 'svelte';
    let js1Ready = false;
    let js2Ready = false;
    let mounted = false;
// If the page is diretcly loaded from URL this will not work
    onMount(() => {
            // The payment-form is ready.
            mounted = true;
            if (js1Ready && js2Ready) {
                //loadStripeElements();
                console.log('mounted');
            }
        });
        function js1Loaded() {
            // The external Stripe javascript is ready.
            js1Ready = true;
            if (mounted && js2Ready) {
                //loadStripeElements();
                console.log('js1loaded');
            }
        }
        function js2Loaded() {
            // The external Stripe javascript is ready.
            js2Ready = true;
            if (mounted && js1Ready) {
                console.log('js2loaded');
            }
        }
</script>
<svelte:head>
    <script src="../js/particles/app.js" on:load={js1Loaded}></script>
    <script src="../js/particles/particles.js" on:load={js2Loaded}></script>
</svelte:head>

<BasicPage title='Particle Effect on Mouse Move' path='/playground'></BasicPage>


<main>
<section>
    <img src="/img/background/background-1.jpg" alt="" class='bg'>
    <div id="particles-js"></div>
</section>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}

section{
    position: relative;
    width: 100%;
    height: 100%;
}
.bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    //height: 100%;
    //aspect-ratio: 16/9;
    object-fit: cover;
}
#particles-js{
    position: relative;
    height: 100vh;
    background: #fff;  
    mix-blend-mode: screen;  
}
</style>