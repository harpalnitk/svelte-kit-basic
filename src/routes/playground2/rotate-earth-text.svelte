<main>
<section class="flex-center">
<div class="earth"></div>
<div class="circle">
    <span style="--i:1;">R</span>
    <span style="--i:2;">o</span>
    <span style="--i:3;">t</span>
    <span style="--i:4;">a</span>
    <span style="--i:5;">t</span>
    <span style="--i:6;">i</span>
    <span style="--i:7;">n</span>
    <span style="--i:8;">g</span>
    <span style="--i:9;">-</span>
    <span style="--i:10;">T</span>
    <span style="--i:11;">e</span>
    <span style="--i:12;">x</span>
    <span style="--i:13;">t</span>
    <span style="--i:14;">-</span>
    <span style="--i:15;">A</span>
    <span style="--i:16;">r</span>
    <span style="--i:17;">o</span>
    <span style="--i:18;">u</span>
    <span style="--i:19;">n</span>
    <span style="--i:20;">d</span>
    <span style="--i:21;">-</span>
    <span style="--i:22;">T</span>
    <span style="--i:23;">h</span>
    <span style="--i:24;">e</span>
    <span style="--i:25;">-</span>
    <span style="--i:26;">E</span>
    <span style="--i:27;">a</span>
    <span style="--i:28;">r</span>
    <span style="--i:29;">t</span>
    <span style="--i:30;">h</span>
    <span style="--i:31;">-</span>
</div>
</section>
</main>


<style>
main{
    min-height: 100vh;
    background: url('/img/misc/night-sky-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}
section{
    min-height: 100vh;
    transform-style: preserve-3d;
    position: relative;
}
.earth{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 300px;
/* 300px is the height of the earth image file seen from its properties */
height: 300px;
background: url('/img/misc/earth.jpg');
background-size: cover;
background-repeat: repeat-x;
border-radius: 50%;
box-shadow: inset 0 0  20px rgba(0,0,0,1),
0 0 50px #4069ff;
animation: animateEarth 15s linear infinite;
}
@keyframes animateEarth{
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: -750px 0;
        /* 750px is the width of the image seen from its properties */
    }
}
.circle{
    transform-style: preserve-3d;
    animation: animateText 10s linear infinite;
}

.circle span{
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    color: #35146f;
    font-size: 3em;
    transform-origin: center;
    transform-style: preserve-3d;
    padding: 5px 12px;
    transform: rotateY(calc(var(--i) * calc(360deg / 31))) translateZ(200px);
    border-top: 4px solid #35146f;
    border-bottom: 4px solid #35146f;
}
.circle span::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translateZ(-5px);
}
@keyframes animateText{
    0%{
        transform: perspective(1000px) rotateY(360deg) rotateX(15deg) translateY(-30px);
    }
    100%{
        transform: perspective(1000px) rotateY(0deg) rotateX(15deg) translateY(-30px);
    }
}
</style>