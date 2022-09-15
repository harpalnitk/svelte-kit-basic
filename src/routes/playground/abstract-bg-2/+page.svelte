<main>
    <section>
        <div class="layer layer1"></div>
        <div class="layer layer2"></div>
        <div class="layer layer3"></div>
        <div class="layer layer4"></div>
        <div class="layer layer5"></div>
        <div class="layer layer6"></div>
        <div class="layer layer7"></div>
        <div class="layer layer8"></div>
        <div class="layer layer9"></div>
    </section>
</main>

<style>
   section{
       position: relative;
       width: 100%;
       height: 100vh;
       background: #222;
       overflow: hidden;
   }
   .layer{
position: absolute;
top: 0;
left: -50%;
width: 100%;
height: 100vh;
background: #03a9f4;
box-shadow: 10px 0 10px rgba(0,0,0,0.25);



   } 
   .layer.layer1{
       background: #03a9f4;
       transform: skewX(-45deg) translateX(0);
       z-index: 1;
   }
   .layer.layer2{
       background: #fff;
       transform: skewX(-45deg) translateX(-100px);
       z-index: 3;
   }
   .layer.layer3{
       background: #ff3161;
       transform: skewX(-45deg) translateX(-200px);
       z-index: 5;
   }
   .layer.layer4{
       background: #222;
       transform: skewX(-45deg) translateX(-300px);
       z-index: 10;
   }
   .layer.layer5{
       background: #ff3161;
       transform: skewX(45deg) translateX(0px);
       z-index: 2;
   }
   .layer.layer6{
       background: #03a9f4;
       transform: skewX(45deg) translateX(-100px);
       z-index: 4;
   }
   .layer.layer7{
       background: #fff;
       transform: skewX(45deg) translateX(-200px);
       z-index: 6;
   }
   .layer.layer8{
       background: #222;
       transform: skewX(45deg) translateX(-300px);
       z-index: 8;
   }
   .layer.layer9{
       background: transparent;
       transform: skewX(45deg) translateX(-300px);
       z-index: 10;
   }
</style>