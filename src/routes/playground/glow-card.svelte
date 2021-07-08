<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Double Color Neon Glow Card'></BasicPage>


<main>
<div class="box">
<span></span>
<h2>01</h2>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
        --main-color:#0e1538;
        background: var(--main-color);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 70vh;
        padding: 2rem;
    }
    .box{
        position: relative;
        width: 10rem;
        height:15rem;
        background: #fff ;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box::before{
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        transform: skewX(2deg) skewY(4deg);
        background: linear-gradient(315deg, #00ccff, var(--main-color), #d400d4);
    }
    .box::after{
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        transform: skewX(2deg) skewY(4deg);
        background: linear-gradient(315deg, #00ccff, var(--main-color), #d400d4);
        filter: blur(50px);
    }

    .box span{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: var(--main-color);
z-index: 10;
    }

    .box h2{
        position: relative;
        z-index: 11;
        color: #fff;
        font-size: 5em;
    }
</style>