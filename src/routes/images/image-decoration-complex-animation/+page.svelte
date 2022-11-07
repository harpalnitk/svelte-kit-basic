<main class='flex-center'>
    <h3>Using outline transitioning</h3>
    <section class='outline-offset'>
        <img src="https://picsum.photos/id/1015/300/300" alt="a canyon and a lake">
<img src="https://picsum.photos/id/1016/300/300" alt="a canyon" style="--g: 20px;--b:5px;--c:#D95B43;">
    </section>
    <h3>Using outline transitioning with transparent outline to get fading effect</h3>
    <section class="hover-effect">
        <img src="https://picsum.photos/id/1069/200/200" >

<img src="https://picsum.photos/id/1069/200/200" >

<img src="https://picsum.photos/id/1069/200/200" >
    </section>
    <h3>Fading with shape reveal- Star</h3>
    <section class="shape-star-reveal">
        <img src="https://picsum.photos/id/1066/300/300" alt="a baby">
<img src="https://picsum.photos/id/453/300/300" alt="a rock star">
    </section>

    <h3>Fading with shape reveal with animation- Star</h3>
    <section class="shape-star-reveal-animation">
        <img src="https://picsum.photos/id/1066/300/300" alt="a baby">
<img src="https://picsum.photos/id/453/300/300" alt="a rock star">
    </section>
    <h3>Fading with shape reveal- Heart</h3>
    <section class="shape-heart-reveal">
        <img src="https://picsum.photos/id/1005/300/300"  alt="a man">
        <img src="https://picsum.photos/id/64/300/300"  alt="a girl">
    </section>
<h3>Mask animation with 4 square reveals</h3>
    <section class="mask-animation-square-reveal">
        <img src="https://picsum.photos/id/1051/250/250" >
        <img src="https://picsum.photos/id/1011/250/250" >
    </section>
    <h3> All combined</h3>
    <section class="all-combined">
        <img src="https://picsum.photos/id/106/200/200" alt="some flowers">
        <img src="https://picsum.photos/id/152/200/200" style="--b:8px;--g: 8px;--c: #B3CC57" alt="some flowers">
    </section>
    <h3> All combined 2</h3>
    <section class="all-combined-2">
        <img src="https://picsum.photos/id/646/200/200" alt="a few flowers">
        <img src="https://picsum.photos/id/64/200/200" alt="a girl holding flowers">
    </section>
    <h3> All combined 3</h3>
    <section class="all-combined-3">
        <img src="https://picsum.photos/id/111/300/300" alt="an old car">
        <img src="https://picsum.photos/id/183/300/300" style="--c: #668284;--b:1px;--s: 18px" alt="an old car">
    </section>
    <h3> All combined 4</h3>
    <section class="all-combined-4">
        <img src="https://picsum.photos/id/111/300/300" alt="a old car">
        <img src="https://picsum.photos/id/183/300/300" style="--c: #668284;--s: 12px" alt="a old car">
    </section>
    <h3> All combined 5</h3>
    <section class="all-combined-5">
        <img src="https://picsum.photos/id/593/300/300" alt="a tiger">
        <img src="https://picsum.photos/id/433/300/300" style="--c: #594F4F;--s: 20px;--b:3px" alt="a bear">
    </section>
    </main>
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: #f8f8f8;
            flex-direction: column;
            h3{
                font-weight: 700;
                font-size: 2em;
                margin-bottom: 1rem;
            }
        }
        section{
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .outline-offset{
            gap: 50px;
            img {
  --s: 250px;   /* the size of the image */
  --b: 8px;     /* the border thickness*/
  --g: 14px;    /* the gap */
  --c: #4ECDC4; /* the color */
  
  width: var(--s);
  aspect-ratio: 1;
  //The trick is to create an outline that’s as thick 
//   as half the image size, then offset it by half the 
//   image size with a negative value. Add in some
//    semi-transparency with the color and we have 
//    our overlay!
  outline: calc(var(--s)/2) solid #0009;
  outline-offset: calc(var(--s)/-2);
  cursor: pointer;
  transition: 0.3s;
}
//The rest is what happens on :hover. We update the outline and the
//  transition between both outlines creates the cool hover effect.
img:hover {
  outline: var(--b) solid var(--c);
  outline-offset: var(--g);
}

img + img {
  border-radius: 50%;
}
        }

        //The same technique can also be used to create a fading
        // effect where we don’t move the outline but make it transparent.

        .hover-effect{
            gap:2rem;
            img {
  /* I am using a random big value to make sure it works with all image sizes*/
 
 //Instead of using half the image size in this one, I am 
//  using a very big outline thickness value (100vmax) while 
//  applying a CSS mask. With this, there’s no longer a need to 
//  know the image size — it trick works at all sizes! 
 outline: 100vmax solid rgb(0 0 0/var(--_o,50%));
  outline-offset: -100vmax;
  /* keep only the image area visible */
  -webkit-mask: linear-gradient(#000 0 0); 
          mask: linear-gradient(#000 0 0); 
  
  cursor: pointer;
  transition: outline-color .4s;
}
img:hover {
  --_o: 0%;
}

img:nth-child(2) {
  border-radius: 50px;
}
img:nth-child(3) {
  border-radius: 50%;
}
        }
//The outline is what creates the yellow overlay. 
// The clip-path clips the extra outline to get the star 
// shape. Then, on hover, we make the color transparent.
        .shape-star-reveal{
            gap: 3rem;
            img {
  width: 280px;
  aspect-ratio: 1;
  object-fit: cover;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  outline: 100vmax solid #fff220;
  outline-offset: -100vmax;
  transition: .7s;
  cursor: pointer;
}
img:hover {
  outline-color: #0000;
}
        }
//yes, we can definitely animate this as well. Let’s not
//  forget that clip-path is animatable and mask relies on 
//  gradients — something we covered in super great detail
//   in the first two articles of this series.
        .shape-star-reveal-animation{
            gap: 3rem;
            img {
  width: 230px;
  aspect-ratio: 1;
  object-fit: cover;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  outline: 100vmax solid #fff220;
  outline-offset: -100vmax;
  transition: .3s;
  cursor: pointer;
}
img:hover {
  outline-color: #0000;
  clip-path: polygon(98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%,50% 0%, 61% 35%);
  transform: scale(1.3);
}
        }

        .shape-heart-reveal{
            gap: 25px;
            img {
  width: 250px;
  aspect-ratio: 1;
  object-fit: cover;
  --_m: radial-gradient(#000 69%,#0000 70%) 84.5% fill/100%;
  -webkit-mask-box-image: var(--_m);
             mask-border: var(--_m);
  clip-path: polygon(-41% 0,50% 91%, 141% 0);
  outline: 100vmax solid #ff3e60;
  outline-offset: -100vmax;
  transition: .7s;
  cursor: pointer;
}
img:hover {
  outline-color: #0000;
}

/* fallback until better support for mask-border */
@supports not (-webkit-mask-box-image: var(--_m)) { 
  img {
   --_m:
     radial-gradient(circle at 60% 63%,#000 64%,#0000 65%) top left /50% 50% no-repeat,
     radial-gradient(circle at 40% 63%,#000 64%,#0000 65%) top right/50% 50% no-repeat,
     linear-gradient(#000 0 0) bottom/100% 50% no-repeat;
   -webkit-mask: var(--_m);
           mask: var(--_m);
  }
}
        }

        .mask-animation-square-reveal{
            gap: 3rem;
            img {
  --_g: 10% /45% 45% no-repeat linear-gradient(#000 0 0);
  --m:
    left   var(--_i,0%) top    var(--_g),
    bottom var(--_i,0%) left   var(--_g),
    top    var(--_i,0%) right  var(--_g),
    right  var(--_i,0%) bottom var(--_g);
  -webkit-mask: var(--m);
          mask: var(--m);
  outline: 100vmax solid #00B4FF;
 outline-offset: -100vmax;
  transition: .3s linear;
  cursor: pointer;
}
img:hover {
  --_i: 10%;
  outline-color: #0000;
}

        }
//many tricks using gradients, masks, clipping, and outline,
        .all-combined{
            img {
  --b: 6px;  /* the border thickness*/
  --g: 12px; /* the gap */
  --c: #AB3E5B;
  
  padding: calc(var(--b) + var(--g));
  --_c: conic-gradient(at var(--b) calc(100% - var(--b)),#0000 25%,var(--c) 0);
  --_p: 200% var(--_i,var(--b)) no-repeat;
  background:
    conic-gradient(from 180deg at calc(100% - var(--b)) var(--b),#0000 25%,var(--c) 0)
     var(--_i,200%) 0/var(--_p), var(--_c);
  --_m:
    var(--_c) calc(var(--_i,0%) - 100%) 100%/var(--_p),
    conic-gradient(at var(--b) calc(100% - var(--b)),#000 25%,#0000 0);
  -webkit-mask: var(--_m);
          mask: var(--_m);
  outline: 100vmax solid var(--c);
  outline-offset: -100vmax;
  clip-path: inset(calc(2*(var(--b) + var(--g))));
  transition: 
    .3s clip-path, 
    .3s outline-color,
    .3s transform;
  cursor: pointer;
}
img:hover {
  --_i: 100%;
  --_t: 0s;
  clip-path: inset(0);
  outline-color: #0000;
  transform: scale(1.2);
  transition: 
    .25s 1s -webkit-mask-size, 
    .25s .75s -webkit-mask-position, 
    .25s .5s background-size,
    .25s .25s background-position,
    .25s clip-path, 
    .25s outline-color,
    .7s transform;
}
        }

        .all-combined-2{
            img {
  border-radius: 50%;
  cursor: pointer;
  padding: 40px;
  clip-path: circle(calc(50% - 40px));
  --_p: 100px;
  --_g1: radial-gradient(50% 50%,#e71e24 90%,#0000); /* color 1 */
  --_g2: radial-gradient(50% 50%,#fcc010 90%,#0000); /* color 2 */
  --_g3: radial-gradient(50% 50%,#85c341 90%,#0000); /* color 3 */
  --_g4: radial-gradient(50% 50%,#eb2288 90%,#0000); /* color 4 */
  background:
     var(--_g1) calc(20% - var(--_p)) calc(20% - var(--_p)),
     var(--_g2) calc(80% + var(--_p)) calc(8%  - var(--_p)),
     var(--_g3) calc(88% + var(--_p)) calc(82% + var(--_p)),
     var(--_g3) 55%                   calc(8% - var(--_p)),
     var(--_g1) calc(18% - var(--_p)) calc(91% + var(--_p)),
     var(--_g2) calc(10% - var(--_p)) calc(70% + var(--_p)),
     var(--_g2) calc(95% + var(--_p)) 40%,
     var(--_g1) calc(82% + var(--_p)) calc(28% - var(--_p)),
     var(--_g4) calc(12% - var(--_p)) 30%,
     var(--_g4) 65%                   calc(94% + var(--_p)),
     var(--_g3) calc(20% - var(--_p)) calc(10% - var(--_p)),
     var(--_g4) calc(42% - var(--_p)) calc(91% + var(--_p));
  background-size: 15px 15px, 20px 20px, 30px 30px;
  background-repeat: no-repeat;
  outline: 150px solid #0005;
  outline-offset: -150px;
  transition: .5s;
}
img:hover {
  clip-path: circle(80%);
  outline: 3px solid #EF746F;
  outline-offset: 0;
  --_p: 0px;
}
        }

        .all-combined-3{
            img {
  --s: 15px;  /* size of the frame */
  --b: 2px;   /* border thickness */
  --w: 200px; /* width of the image */
  --c: #7B3B3B;
  
  width: var(--w);
  aspect-ratio: 1;
  object-fit: cover;
  padding: calc(2*var(--s));
  --_g: var(--c) var(--b),#0000 0 calc(100% - var(--b)),var(--c) 0;
  background:
    linear-gradient(      var(--_g)) 50%/100% var(--_i,100%) no-repeat,
    linear-gradient(90deg,var(--_g)) 50%/var(--_i,100%) 100% no-repeat;
  outline: calc(var(--w)/2) solid #0009;
  outline-offset: calc(var(--w)/-2 - 2*var(--s));
  transition: .4s;
  cursor: pointer;
}
img:hover {
  outline: var(--b) solid var(--c);
  outline-offset: calc(var(--s)/-2);
  --_i: calc(100% - 2*var(--s));
} 
        }

        .all-combined-4{
            img {
  --s: 10px;  /* size of the frame */
  --b: 2px;   /* border thickness */
  --w: 200px; /* width of the image */
  --c: #7B3B3B;
  
  width: var(--w);
  aspect-ratio: 1;
  object-fit: cover;
  padding: var(--s);
  --_g: #0000 25%,var(--c) 0;
  background:
    conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0,
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 100% 0,
    conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 0    100%,
    conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100%;
  background-size: 15% 15%; 
  background-repeat: no-repeat;
  outline: calc(var(--w)/2) solid #0009;
  outline-offset: calc(var(--w)/-2 - var(--s));
  clip-path: inset(var(--s));
  transition: .4s;
  cursor: pointer;
}
img:hover {
  outline: var(--b) solid var(--c);
  outline-offset: var(--s);
  clip-path: inset(calc(-1*var(--s) - var(--b)));
  background-size: 45% 45%;
  transition: linear .3s, background-size .3s .4s;
}
        }

        .all-combined-5{
            background: #ECD078;
            gap: 20px;
            img {
  --s: 16px;  /* size of the frame */
  --b: 6px;   /* border thickness */
  --w: 250px; /* width of the image */
  --c: #BF4D28;
  
  width: var(--w);
  aspect-ratio: 1;
  object-fit: cover;
  padding: var(--s);
  --_g: #0000 25%,var(--c) 0;
  background:
    conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 
      var(--_p,-5%) var(--_p,-5%),
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g)) 
      calc(100% - var(--_p,-5%)) var(--_p,-5%),
    conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--_g)) 
      var(--_p,-5%) calc(100% - var(--_p,-5%)),
    conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 
      calc(100% - var(--_p,-5%)) calc(100% - var(--_p,-5%));
  background-size: 20% 20%; 
  background-repeat: no-repeat;
  outline: calc(var(--w)/2) solid #0005;
  outline-offset: calc(var(--w)/-2 - var(--s));
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
  transition: .4s;
  cursor: pointer;
}
img:hover {
  outline-offset: 2px;
  clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
  --_p: calc(var(--s)/4);
  transition:  .3s, background-position .3s .35s;
}
        }
        
    </style>