<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    let x=0;
    const rotate= (e)=>{
     x = e.clientX;

    }
</script>
<BasicPage title='Rotating Images on Mouse Move'></BasicPage>


<main>
<div class="box" on:mousemove="{rotate}" style="transform: perspective(1000px) rotateY({x}deg)">
    <span style="--i:1;"><img src="/img/background/background-1.jpg" alt="1"></span>
    <span style="--i:2;"><img src="/img/background/background-2.jpg" alt="1"></span>
    <span style="--i:3;"><img src="/img/background/background-3.jpg" alt="1"></span>
    <span style="--i:4;"><img src="/img/background/background-4.jpg" alt="1"></span>
    <span style="--i:5;"><img src="/img/background/background-5.jpg" alt="1"></span>
    <span style="--i:6;"><img src="/img/background/background-6.jpg" alt="1"></span>
    <span style="--i:7;"><img src="/img/background/background-3.jpg" alt="1"></span>
    <span style="--i:8;"><img src="/img/background/background-4.jpg" alt="1"></span>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}

main{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
}
.box{
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    // transform: perspective(1000px) rotateY(0deg);
   // animation: animate 20s linear infinite;
}
// @keyframes animate{
//     0%{
//         transform: perspective(1000px) rotateY(0deg) ;
//     }
//     100%{
//         transform: perspective(1000px) rotateY(360deg) ;
//     }
// }
.box span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    // transition: all .2s ease;
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
    -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004)
}
.box span img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>