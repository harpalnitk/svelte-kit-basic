<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
 let size= '100px';
 let y = 0;

 $: size = 100 + y + 'px';
 $: console.log('size', size);
 let bg;
 $: if(bg) bg.style.backgroundSize = 100 + y*2 + 'px';
</script>
<BasicPage title='Scale Video on Scroll' path='/playground'></BasicPage>

<svelte:window bind:scrollY={y} />
<main>
    <div class="banner" >
        <video autoplay muted loop>
            <track kind="captions" />
            <source src="/vid/fish.mp4" type="video/mp4" />
            <!-- <source src="video2.mp4" type="video/mp4" /> -->
            Sorry, your browser doesn't support embedded videos
        </video>
        <div id="bg"  bind:this={bg}></div>
    </div>
</main>




<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 2000px;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}

.banner{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}
.banner video{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover; 
}

.banner #bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff url(/svg/heart.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100px;
    mix-blend-mode: screen;
}


</style>