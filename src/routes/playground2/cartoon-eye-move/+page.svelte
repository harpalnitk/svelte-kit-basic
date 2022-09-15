<script>
  
    let eye1,eye2,eye3,eye4;
    let rotation1,rotation2,rotation3,rotation4;
    let w,h;
    $: eyeRect1 = eye1 && eye1.getBoundingClientRect();
    $: eyeRect2 = eye2 && eye2.getBoundingClientRect();
    $: eyeRect3 = eye3 && eye3.getBoundingClientRect();
    $: eyeRect4 = eye4 && eye4.getBoundingClientRect();
   // $: console.log(`eyeRect: ${eyeRect.left}`);

    const eyeball = (e)=>{
         rotation1 = getRotation(e,eyeRect1);
         rotation2 = getRotation(e,eyeRect2);
         rotation3 = getRotation(e,eyeRect3);
         rotation4 = getRotation(e,eyeRect4);
    }

    const getRotation = (e,rect)=>{
        let x = rect.left + (w /2);
        let y= rect.top + (h /2);
        let radian = Math.atan2(e.clientX - x, e.clientY - y);
        return (radian * (180 / Math.PI) * -1) + 270;
    }
</script>
<main class='flex-center' >
    <div class="box" on:mousemove="{eyeball}">
        <div class="hair"></div>
        <div class="bottom">
            <span></span>
        </div>
        <div class="head">
            <div class="neck"></div>
            <div class="face">
                <div class="eyes">
<span class="eye"><i bind:this={eye1} style="transform: rotate({rotation1}deg)" bind:clientWidth={w} bind:clientHeight={h}></i></span>
<span class="eye"><i bind:this={eye2} style="transform: rotate({rotation2}deg)"></i></span>
                </div>
                <div class="mouth"></div>
            </div>
        </div>
    </div>
    <div class="box" on:mousemove="{eyeball}">
        <div class="hair"></div>
        <div class="bottom">
            <span></span>
        </div>
        <div class="head">
            <div class="neck"></div>
            <div class="face">
                <div class="eyes">
<span class="eye"><i bind:this={eye3}  style="transform: rotate({rotation3}deg)"></i></span>
<span class="eye"><i bind:this={eye4}  style="transform: rotate({rotation4}deg)"></i></span>
                </div>
                <div class="mouth"></div>
            </div>
        </div>
    </div>
</main>

<style>
main{
    min-height: 80vh;
    background: #edf8ff;
    flex-wrap: wrap;
}
.box{
    position: relative;
    width: 400px;
    height: 500px;
    background: #fff;
    margin: 40px;
    box-shadow: 25px 25px 0 rgba(0,0,0,0.05);
}
/* pink t-shirt */
.bottom{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    height: 180px;
    background: #fb6971;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    z-index: 9;
    overflow: hidden;
}
.box:nth-child(2) .bottom{
    background: #ffcc14;
}
/* buttons left*/
.bottom::before{
    content: '';
    position: absolute;
    top: 80px;
    left: 97px;
    width: 20px;
    height: 20px;
    background: #fff;
    z-index: 1;
    border-radius: 50%;

}
/* buttons right*/
.bottom::after{
    content: '';
    position: absolute;
    top: 80px;
    right: 97px;
    width: 20px;
    height: 20px;
    background: #fff;
    z-index: 1;
    border-radius: 50%;

}
/* grey t-shirt */
.bottom span{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 100px;
    background: #6192a1;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

}
/* strips of grey t-shirt left*/
.bottom span::before{
    content: '';
    position: absolute;
    top: -90px;
    left: 10px;
    width: 30px;
    height: 100px;
    background: #6192a1;
    transform: rotate(345deg);
}
/* strips of grey t-shirt right*/
.bottom span::after{
    content: '';
    position: absolute;
    top: -90px;
    right: 10px;
    width: 30px;
    height: 100px;
    background: #6192a1;
    transform: rotate(15deg);
}
.box:nth-child(2) .bottom span,
.box:nth-child(2) .bottom span::before,
.box:nth-child(2) .bottom span::after{
background: #d9174c;
}
.neck{
    position: absolute;
    bottom: 140px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 100px;
    background: #ffcfcc;
    z-index: 10;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
.neck::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 75%;
    background: linear-gradient(rgba(0,0,0,0.1),transparent);
}
.face{
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 180px;
    background: #ffcfcc;
    z-index: 12;
    border-radius: 50%;
    border-top-left-radius: 40%;
    border-top-right-radius: 40%;

}
.eyes{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
}
.eyes .eye{
position: relative;
width: 45px;
height: 45px;

}
.eyes .eye::before{
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 50%;
    background: transparent;
    border-radius: 50%;
    box-shadow: 0 -3px 0 #111;

}
.eyes .eye i{
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
}
.eyes .eye i::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #111;
    border-radius: 50%;
    box-shadow: 0 0 0 5px #3d5d89 ;
    transform: translate(-10px,2px);
}
.mouth{
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 30px;
    background: #ff4e57;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: inset 0 10px 0 rgba(0,0,0,0.2);
    transition: 0.5s;
}
 .face:hover .mouth{
     height: 15px;
     width: 70px;
     bottom: 40px;
     border-radius: 10px;

 }
 .face:hover{
     cursor: pointer;
 }
 .hair{
     position: absolute;
     bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 230px;
    height: 450px;
    background: #111;
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
 }
 .box:nth-child(2) .hair{
     bottom: 200px;
     height: 250px;
     border-radius: 50%;
 }
</style>