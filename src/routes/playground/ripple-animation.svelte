<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Ripple Animation'></BasicPage>


<main>
<div class="container">
    <div class="box">
        <span style='--i:1;'></span>
        <span style='--i:2;'></span>
        <span style='--i:3;'></span>
        <span style='--i:4;'></span>
        <span style='--i:5;'></span>
        <span style='--i:6;'></span>
        <span style='--i:7;'></span>
        <span style='--i:8;'></span>
        <span style='--i:9;'></span>
        <span style='--i:10;'></span>
    </div>
    <div class="box">
        <span style='--i:1;'></span>
        <span style='--i:2;'></span>
        <span style='--i:3;'></span>
        <span style='--i:4;'></span>
        <span style='--i:5;'></span>
        <span style='--i:6;'></span>
        <span style='--i:7;'></span>
        <span style='--i:8;'></span>
        <span style='--i:9;'></span>
        <span style='--i:10;'></span>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;

    // display: flex;
    // place-content: center;
    background: #111;
    --size: 10rem;
}
.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    //flex-direction: column;
}
.container .box{
    width: var(--size);
    height:var(--size);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
}
.container .box span{
position: absolute;
box-sizing: border-box;
border: 2px solid #fff;
border-radius: 50%;
animation: animate 5s linear infinite;
animation-delay: calc(-0.5s * var(--i));
}

.container .box:nth-child(2) span{
    border: none;
    background: rgba(0,255,0,0.25);
}
@keyframes animate{
    0%{
        width: 0px;
        height: 0px;
    }
    50%{
        opacity: 1;
    }
    100%{
        width: var(--size);
        height: var(--size);
        opacity: 0;
    }
}
</style>