<script>
  
    let eye1,eye2;
    let rotation1,rotation2;
    let w,h;
    $: eyeRect1 = eye1 && eye1.getBoundingClientRect();
    $: eyeRect2 = eye2 && eye2.getBoundingClientRect();
   // $: console.log(`eyeRect: ${eyeRect.left}`);

    const eyeball = (e)=>{
         rotation1 = getRotation(e,eyeRect1);
         rotation2 = getRotation(e,eyeRect2);
    }

    const getRotation = (e,rect)=>{
        let x = rect.left + (w /2);
        let y= rect.top + (h /2);
        let radian = Math.atan2(e.clientX - x, e.clientY - y);
        return (radian * (180 / Math.PI) * -1) + 270;
    }
</script>



<main on:mousemove="{eyeball}">
<div class="box">
    <div class="eye" bind:this={eye1} style="transform: rotate({rotation1}deg)" bind:clientWidth={w} bind:clientHeight={h}></div>
    <div class="eye" bind:this={eye2} style="transform: rotate({rotation2}deg)"></div>
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
    background: radial-gradient(#f2761e,#ef4921);
}
.box{
    display: flex;
}
.box .eye{
    position: relative;
    width: 120px;
    height: 120px;
    display: block;
    background: #fff;
    margin: 0 20px;
    border-radius: 50%;
    box-shadow: 0 5px 45px rgba(0,0,0,0.2),
                inset 0 0 15px #f2761e,
                inset 0 0 25px #f2761e;
}
.box .eye::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translate(-50%,-50%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #000;
    border: 10px solid #2196f3;

}
</style>