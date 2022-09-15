<script>
  
    let style = "rotateX(-30deg) rotateY(50deg)";
    const rotateBox = (e) => {
        style = "rotateX(-30deg) rotateY(" + e.clientX + "deg)";
    }
</script>



<main>
<div id="box" on:mousemove={rotateBox} style="transform: {style}">
    <div class="top"></div>
<div>
    <span></span>
    <span>
        <i class="tape"></i>
    </span>
    <span></span>
    <span>
        <i class="tape"></i>
    </span>
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
    min-height: 100vh;
}
#box{
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    //transform: rotateX(-30deg) rotateY(50deg);
    /*
    USE ANIMATION IF YOU WANT TO ROTATE WITHOUT MOUSEMOVE
    rotate box*/
   // animation: animate 10s linear infinite;
}
@keyframes animate{
    0%{
        transform: rotateX(-30deg) rotateY(360deg);
    }
    100%{
        transform: rotateX(-30deg) rotateY(0deg);
    }
}
//drop shadow
#box::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0; 
   width: 300px;
   height: 300px;
   background: rgba(0,0,0,0.1);
   transform: rotateX(90deg) translateZ(-250px);
   filter: blur(15px);
}
#box div{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%; 
   transform-style: preserve-3d;
}
#box div span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
display: flex;
justify-content: center;
align-items: center;
}
#box div span:nth-child(1){
transform: rotateY(0deg) translate3d(0,0,150px);
background: #d8aa77;
}
#box div span:nth-child(1)::before{
content: '';
position: absolute;
width: 200px;
height: 200px;
background: url(/img/misc/amazon.png);
background-size: 200px;
background-repeat: no-repeat;
background-position: center;
}
#box div span:nth-child(2){
transform: rotateY(90deg) translate3d(0,0,150px);
background: #ca9864;
}
#box div span:nth-child(3){
transform: rotateY(180deg) translate3d(0,0,150px);
background: #d8aa77;
}
#box div span:nth-child(3)::before{
content: '';
position: absolute;
width: 200px;
height: 200px;
background: url(/img/misc/arrow.png);
background-size: 200px;
background-repeat: no-repeat;
background-position: center;
}
#box div span:nth-child(4){
transform: rotateY(270deg) translate3d(0,0,150px);
background: #ca9864;
}
#box .top{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #e8bb84;
    display: flex;
    align-items: center;
    transform: rotateX(90deg) translate3d(0,0,150px);
}
#box .top::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 60px;
    background: #111 url(/img/misc/tape.jpg);
    background-size: 85px;

}
//for half tape
.tape{
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    width: 120px;
    height: 60px;
    background: #111 url(/img/misc/tape.jpg);
    background-size: 85px;
    background-position-x: 45px; //to move tape little below
}
span:nth-child(4) .tape{
    transform: translateX(-50%) rotate(270deg);
    background-position-x: 30px;
}
</style>