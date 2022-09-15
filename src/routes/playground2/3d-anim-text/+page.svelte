<script>
   
</script>



<main>
<div class="container">
    <div class="box">
        {#each Array(16) as _,i}
        <span style='--i:{i+1};'><i>CSS</i> is <i>A</i>wesome</span>
        {/each}
        <!-- 360/16 = 22.5deg -->
    </div>
</div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
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
    background: #222;
    overflow: hidden;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container .box{
    transform-style: preserve-3d;
    animation: animate 25s linear infinite;
}
@keyframes animate{
    0%{
transform: perspective(1000px) rotateX(0deg) rotate(25deg);
    }
    100%{
        transform: perspective(1000px) rotateX(360deg) rotate(25deg);
}
}
.container .box span{
    position: absolute;
    color: #fff;
    font-size: 3.5em;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 900;
    padding: 0 10px;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.5), transparent);
    line-height: 0.76em;
    transform-style: preserve-3d;
    text-shadow: 0 5px 15px rgba(0,0,0,0.25);
    transform: translate(-50%,-50%) rotateX(calc(var(--i) * 22.5deg)) translateZ(116px);
    // change 116px for space between lines
}
.container .box span i:nth-child(1){
    font-style: initial;
    color: #ff246f;
}
.container .box span i:nth-child(2){
    font-style: initial;
    color: #12b5ff;
}
</style>