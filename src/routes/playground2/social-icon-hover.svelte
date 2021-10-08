<script>
   
    import { onMount } from 'svelte';

    let jsReady = false;
    let mounted= false;

    onMount(() => {
          
            mounted = true;
            if (jsReady) {
                loadVanillaTilt();
                console.log('mounted');
            }
        });

        function jsLoaded(){
            jsReady = true;
            if (mounted){
                console.log('script loaded');
                loadVanillaTilt();
            }
        }

        function loadVanillaTilt(){
            //https://micku7zu.github.io/vanilla-tilt.js/
            VanillaTilt.init(document.querySelectorAll(".sci li a"), {
		max: 30,
		speed: 400,
        glare:true,
        'max-glare':1
	});
        }


    let index = 0;
    let data = ['#fff','#1877f2','#ff0000','#0099ff','#e4405f','#25D366']; 
</script>

<svelte:head>
    <script src="../js/vanilla-tilt.min.js" on:load={jsLoaded}></script>
</svelte:head>



<main>
<section class='socialMedia' style="background-color: {data[index]};">
    <ul class="sci">
        <li data-text='Facebook' on:mouseenter="{()=>{index=1;}}" on:mouseleave="{()=>{index=0;}}"><a href="facebook" class='facebook'><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
        <li data-text='Youtube' on:mouseenter="{()=>{index=2;}}" on:mouseleave="{()=>{index=0;}}"><a href="youtube" class='youtube'><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
        <li data-text='Twitter' on:mouseenter="{()=>{index=3;}}" on:mouseleave="{()=>{index=0;}}"><a href="twitter" class='twitter'><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
        <li data-text='Instagram' on:mouseenter="{()=>{index=4;}}" on:mouseleave="{()=>{index=0;}}"><a href="instagram" class='instagram'><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
        <li data-text='Whatsapp' on:mouseenter="{()=>{index=5;}}" on:mouseleave="{()=>{index=0;}}"><a href="whatsapp" class='whatsapp'><i class="fab fa-whatsapp" aria-hidden="true"></i></a></li>
    </ul>
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
.socialMedia{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    transition: 0.5s;
}
.sci{
    position: relative;
    display: flex;
    flex-wrap: wrap;
}
.sci li{
    list-style: none;
    
}
.sci li::before{
   content: attr(data-text); 
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,calc(-50% + 120px));
   font-size: 14vw;
   pointer-events: none;
   font-weight: 700;
   transition: 0.5s;
   opacity: 0;

}
.sci li:hover::before{
opacity: 0.1;
transform: translate(-50%, calc(-50% + 150px));
}
.sci li a {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 120px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    border-radius: 10px;
    text-decoration: none;
    margin: 20px;
    font-size: 4em;
    transform-style: preserve-3d;
    perspective: 500px;
    box-shadow: 0 25px 35px rgba(0,0,0,0.1);
    transition: background 0.25s;
}
.js-tilt-glare{
    border-radius: 10px;
}
.sci li a:hover.facebook{
background: #1877f2;
}
.sci li a:hover.youtube{
background: #ff0000;
}
.sci li a:hover.twitter{
background: #0099ff;
}
.sci li a:hover.instagram{
background: #e4405f;
}
.sci li a:hover.whatsapp{
background: #25D366;
}

.sci li a .fab{
    transition: 0.25s;
    pointer-events: none;
}

.sci li a:hover .fab{
color: #fff;
transform: scale(1.75) translateZ(50px);
}
</style>