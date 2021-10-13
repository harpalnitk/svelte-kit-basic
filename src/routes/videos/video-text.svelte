<script>
    let x;
    let y;
    let toggle = false;
    $:console.log('toggle', toggle)

function handleMousemove(event) {
    x = event.clientX + 'px';
    y = event.clientY + 'px';
    console.log(x)
}
</script>

<main class='main-page flex-center'>
<section class="sec" class:active={toggle} on:mousemove={handleMousemove}>
   <video autoplay muted loop>
       <source src='/vid/Fish.mp4' type='video/mp4'/>
   </video>
    <h2>Run</h2>
    <div class="dot"  style="left:{x};top:{y}"
    class:active={toggle} on:click={()=> toggle = !toggle}></div>
</section>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
        min-height: 100vh;
    }
.sec{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f00;
}
.sec .dot{
    position: absolute;
    width: 1px;
    height: 1px;
    // background: #fff;
    // border-radius: 50%;
    // transform: translate(-50%,-50%);
    cursor: default;
    transition: box-shadow 0.5s;

}
// On HOLD
.sec .dot:active{
box-shadow: 0 0 0 200vh #fff;
// border: 2px solid #000;
}
.sec .dot.active{
    background: #000;
    // border: 2px solid #000;
}
.sec .dot.active:active{
    box-shadow: 0 0 0 200vh #000;
// border: 2px solid #fff;

}
 .sec .dot::before{
// content: 'Dark Mode';
// position: absolute;
// top: 50%;
// left: 80px;
// white-space: nowrap;
// transform: translate(-50%,-50%);
// color: #fff;
// font-size: 1em;
// font-weight: 500;
 }
 .sec .dot.active::before{
    //  content: 'Light Mode';
    //  color: #000;
 }
 .sec h2{
     position: absolute;
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 40vw;
     color: #fff;
     background: #000;
     user-select: none;
     font-weight: 800;
     text-transform: uppercase;
     text-align: center;
     //For clipping video
     mix-blend-mode: multiply;
 }
 .sec.active h2{
     color: #000;
     background: #fff;
          //For clipping video
          mix-blend-mode: screen;
 }
 .sec video{
     position: absolute;
    //  z-index: 1;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     object-fit: cover;
 }
</style>