<script>
   
</script>



<main>
<div class="container">
    <div class="card">
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="content">
            <h2>01</h2>
            <h3>Card One</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. </p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
    <div class="card">
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="content">
            <h2>02</h2>
            <h3>Card Two</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.</p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
    <div class="card">
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="content">
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.</p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
    <div class="card">
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>   
        <div class="content">
            <h2>04</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.</p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
    <div class="card">
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="hover-point"></div>
        <div class="content">
            <h2>05</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.</p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
</div>  
</main>



<style lang="scss">
	@import '../../styles/vars';
main{
    // display: flex;
    // justify-content: center;
    // align-items: center;
    min-height: 100vh;
    background: #161623;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00,#f0f);
    clip-path: circle(30% at right 70%);

}
main::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3,#e91e63);
    clip-path: circle(20% at 10% 10%);

}
.container{
    position: relative;
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
   // grid-template-rows: repeat(auto, minmax(400px, 1fr));
    justify-content: space-around; //all cards horizontally
    // align-content: center; // all cards vertically
    // place-items: center; //shorthand for align-items/justify-items ;; each card in it's own grid cell
    // width: 100%;
    z-index: 1;
}
.container .card{
    position: relative;
    height: 25rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;

}
.container .card .content{
    padding: 20px;
    text-align: center;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.50);
    border-radius: 1rem;
    background: rgba(255,255,255,0.1);
    height:100%;

    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
    transition: .5s ease;
    padding: 1em;
}
// .container .card:hover .content{
// //transform: translateY(0px);
// //opacity: 1;
// }
.container .card .content h2{
    position: absolute;
    top: -8rem;
    right: 2px;
    font-size: 8rem;
    color: rgba(255,255,255,0.05);
    pointer-events: none;
}

.container .card .content h3{
    font-size: 1.8rem;
    color: #fff;
    z-index: 1;
}

.container .card .content p{
    font-size: 1rem;
    color: #fff;
    font-weight: 300;
    display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
}
.container .card .content a{
   // position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 15px;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}


// hovering effect of card
.hover-point {
  position: absolute;
  z-index: 2;
  width: calc(100% / 3);
  height: calc(100% / 3);
}
.hover-point:nth-child(1) {
  top: 0;
  left: 0;
}
.hover-point:nth-child(2) {
  top: 0;
  left: calc(100% / 3);
}
.hover-point:nth-child(3) {
  top: 0;
  right: 0;
}
.hover-point:nth-child(4) {
  top: calc(100% / 3);
  left: 0;
}
.hover-point:nth-child(5) {
  top: calc(100% / 3);
  right: 0;
}
.hover-point:nth-child(6) {
  bottom: 0;
  left: 0;
}
.hover-point:nth-child(7) {
  bottom: 0;
  left: calc(100% / 3);
}
.hover-point:nth-child(8) {
  bottom: 0;
  right: 0;
}

.hover-point:nth-child(1):hover ~ .content {
  box-shadow: 15px 15px 50px rgba(0, 0, 0, .3);
  transform-origin: right top;
  transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg);
}
.hover-point:nth-child(2):hover ~ .content {
  box-shadow: 0 15px 50px rgba(0, 0, 0, .3);
  transform-origin: center top;
  transform: perspective(1000px) rotateX(10deg);
}
.hover-point:nth-child(3):hover ~ .content {
  box-shadow: -15px 15px 50px rgba(0, 0, 0, .3);
  transform-origin: left top;
  transform: perspective(1000px) rotateX(10deg) rotateY(10deg) rotateZ(-2deg);
}
.hover-point:nth-child(4):hover ~ .content {
  box-shadow: 15px 5px 50px rgba(0, 0, 0, .3);
  transform-origin: left center;
  transform: perspective(1000px) rotateY(-10deg);
}
.hover-point:nth-child(5):hover ~ .content {
  box-shadow: -15px 5px 50px rgba(0, 0, 0, .3);
  transform-origin: right center;
  transform: perspective(1000px) rotateY(10deg);
}
.hover-point:nth-child(6):hover ~ .content {
  box-shadow: 15px -15px 50px rgba(0, 0, 0, .3);
  transform-origin: right bottom;
  transform: perspective(1000px) rotateX(-10deg) rotateY(-10deg) rotateZ(-2deg);
}
.hover-point:nth-child(7):hover ~ .content{
  box-shadow: 0 -15px 50px rgba(0, 0, 0, .3);
  transform-origin: center bottom;
  transform: perspective(1000px) rotateX(-10deg);
}
.hover-point:nth-child(8):hover ~ .content {
  box-shadow: -15px -15px 50px rgba(0, 0, 0, .3);
  transform-origin: left bottom;
  transform: perspective(1000px) rotateX(-10deg) rotateY(10deg) rotateZ(2deg);
}

</style>