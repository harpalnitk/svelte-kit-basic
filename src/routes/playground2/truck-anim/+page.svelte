<script>
   
</script>



<main>
<div class="scene">
    <i class="fas fa-shuttle-van"></i>
    <i class="fas fa-cloud" style="--i:1;"></i>
    <i class="fas fa-cloud" style="--i:2;"></i>
    <i class="fas fa-cloud" style="--i:3;"></i>
    <i class="fas fa-cloud" style="--i:4;"></i>
    <i class="fas fa-cloud" style="--i:5;"></i>
    <!-- TREES -->
    <i class="fas fa-tree" style="--i:1;"></i>
    <i class="fas fa-tree" style="--i:2;"></i>
    <i class="fas fa-tree" style="--i:3;"></i>
    <i class="fas fa-tree" style="--i:4;"></i>
    <i class="fas fa-tree" style="--i:5;"></i>
    <i class="fas fa-tree" style="--i:6;"></i>
    <i class="fas fa-tree" style="--i:7;"></i>
    <!-- MOUNTAINS -->
    <i class="fas fa-mountain" style="--i:1;"></i>
    <i class="fas fa-mountain" style="--i:2;"></i>
    <i class="fas fa-mountain" style="--i:3;"></i>
    <div class="sun"></div>
    <div class="road"></div>
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
    background: #eaeef0;
}
.scene{
    position: relative;
    width: 350px;
    height: 250px;
    background: #eaeef0;
    border-radius: 20px;
    box-shadow: -10px -10px 15px rgba(255,255,255,0.9),
                  8px 8px 25px rgba(0,0,0,0.5);
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.sun{
position: absolute;
top: 40px;
right: 40px;
width: 40px;
height: 40px;
background: #fff;
border-radius: 50%;
box-shadow: 0 0 40px #ffff5b,
0 0 60px #ffff5b,
0 0 80px #ffff5b,
0 0 100px #ffff5b;
}
.road{
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 60px;
background: #333;

}
.road::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 10px;
    background: #0d9e0d;

}
.road::after{
    content: '';
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 100%;
height: 2px;
background: repeating-linear-gradient(90deg,transparent 0,transparent 50%,#fff 50%, #fff 100%);
background-size: 20px;
animation: animateRoad 0.2s linear infinite;
}
@keyframes animateRoad{
    0%{
        background-position: 0;
    }
    100%{
        background-position: -20px;
    }
}
.fa-shuttle-van{
   position: absolute;
   bottom: 30px;
   left: 30px;
   color: #fff;
   font-size: 3.5em;
   -webkit-text-stroke: 2px #000;
   z-index: 10;
   animation: animateVan 0.2s linear infinite;

}
@keyframes animateVan{
    0%,100%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(1px);
    }
}
.fa-cloud{
    position: absolute;
    top: calc(15px * var(--i));
    left: calc(15px * var(--i));
    color: #fff;
   font-size: 2.5em;
   -webkit-text-stroke: 2px #000;
   z-index: 1;
   animation: animateClouds 3.5s linear infinite;
   animation-delay: calc(-1s * var(--i));
}
.fa-tree{
position: absolute;
bottom: 60px;
font-size: 2em;
z-index: 2;
color: #0d9e0d;
animation: animateClouds 7s linear infinite;
   animation-delay: calc(-1s * var(--i));
}
.fa-mountain{
    position: absolute;
bottom: 0;
font-size: 10em;

color: #8b3c23;
animation: animateClouds 15s linear infinite;
   animation-delay: calc(-3s * var(--i));
}
@keyframes animateClouds{
    0%{
        transform: translateX(350px);
    }
    100%{
        transform: translateX(-350px);
    }
}

</style>