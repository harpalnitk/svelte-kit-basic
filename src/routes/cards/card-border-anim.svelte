<script>
  
    export let width = 320;
</script>



<main>
<div class="box" style="--width:{width}">
    <h2>02</h2>
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
    background: #0e1538;
}
.box{
    position: relative;
    width: calc(var(--width) * 1px);
    height: calc(var(--width) * 5px / 4);
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    overflow: hidden;
    border-radius: 20px;
}
.box::before{
    content: '';
    position: absolute;
    width: calc(var(--width) * 1px / 2);
    height: 140%;
    background: linear-gradient(#00ccff,#d400d4);
    animation: animate 4s linear infinite;

}
.box::after{
    content: '';
    position: absolute;
    inset: 4px;
    background: #0e1538;
    border-radius: 16px;

}
@keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.box h2{
    color: #fff;
    font-size: 10em;
    z-index: 10;
}

</style>