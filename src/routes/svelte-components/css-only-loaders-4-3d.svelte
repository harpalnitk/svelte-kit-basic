<main class='flex-center'>
    <h3>Basic Loader</h3>
    <section class='basic'>
        <div class="loader"></div>
    </section>
    <h3>Growing cuboid Basic</h3>
    <section class='basic-cuboid'>
        <div class="loader"></div>
    </section>
    <h3>Growing cuboid Basic With color</h3>
    <section class='basic-cuboid-color'>
        <div class="loader"></div>
    </section>
    <h3>Growing cuboid Basic With Animation</h3>
    <section class='basic-cuboid-animation'>
        <div class="loader"></div>
    </section>
    <h3>Growing cuboid Basic With Animation Corrected</h3>
    <section class='basic-cuboid-animation-correct'>
        <div class="loader"></div>
    </section>
    <h3>Growing cuboid Basic With Animation Bottom visible</h3>
    <section class='basic-cuboid-animation-correct-bottom'>
        <div class="loader"></div>
    </section>
    </main>
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: #000;
            flex-direction: column;
            h3{
                font-weight: 700;
                font-size: 2em;
                margin-bottom: 1rem;
                color:white;
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


//https://css-tricks.com/single-element-loaders-going-3d/
//Each half of the cube is made using a pseudo-element:
// means a square is divide dinto two equal halves vertically
//We can use a conic gradient 
// means conic gradient give shades to each equal halve to make it look 3D
//with CSS clip-path on the element’s ::before and ::after pseudos 
//to simulate the three visible faces of a 3D cube.
// means clip path is used to simulate black space in conic gradient white
// to give 3D look 
// Negative margin is what pulls the two pseudos 
//  together to overlap and simulate a full cube.
//   The rest of our work is mostly animating those 
//   two halves to get neat-looking loaders

        .basic{
            background: #f8f8f8;
            .loader {
  --s: 150px; /* adjust this to control the size */
  
  --_d: calc(0.353*var(--s));/* 0.353 = sin(45deg)/2 */
  width: calc(var(--s) + var(--_d)); 
  aspect-ratio: 1;
  display: flex;
  margin: calc(var(--s)/3) 0;
}
.loader:before,
.loader:after {
  content: "";
  flex: 1;
  clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
  background:
    conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
     #fff 135deg,#666 0 270deg,#aaa 0);
  animation: load0 1.5s infinite cubic-bezier(0,.5,.5,1.8) alternate;
}
.loader:before {
  margin-right: calc(var(--_d)/-2 - 1px);
}
.loader:after {
  margin-left: calc(var(--_d)/-2 - 1px);
  animation-delay: -.75s
}
@keyframes load0{
  0%,40%   {transform:translateY(calc(var(--s)/-4))}
  60%,100% {transform:translateY(calc(var(--s)/4))}
} 
        }


        .basic-cuboid{
            .loader {
  --s: 100px; /* control the size */
  
  --_d: calc(0.353*var(--s));/* 0.353 = sin(45deg)/2 */
  height: var(--s); 
  aspect-ratio: 3; // for making cuboid
  display: flex;
}
.loader:before,
.loader:after {
  content: "";
  flex: 1;
  clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
  background:
    conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
     #fff 135deg,#666 0 270deg,#aaa 0);
}
.loader:before {
  margin-right: calc(var(--_d)/-2);
}
.loader:after {
  margin-left: calc(var(--_d)/-2);
  opacity: 0.4;
}

        }
        //We’re not changing a thing as far as
        //  simulating the cube the same way we did
        //   before, other than changing the loader’s
        //    height and aspect ratio. The animation
        //     we’re making relies on a surprisingly 
        //     easy technique where we update the width
        //      of the left side while the right side
        //       fills the remaining space, thanks to
        //        flex-grow: 1.

        //This simulates the effect that one side 
        // of the cube is filled in while the other is
        //  empty. Then we update the color of the
        //   left side. To do that, we either update
        //    the three colors inside the conic 
        //    gradient or we do it by adding a
        //     background color with a background-blend-mode:

        //This trick only allows us to update the color
        //  only once. The right side of the loader blends
        //   in with the three shades of white from
        //    the conic gradient to create three new
        //     shades of our color, even though we’re 
        //     only using one color value. Color trickery!
        

        .basic-cuboid-color{

.loader {
  --s: 100px; /* control the size */
  
  --_d: calc(0.353*var(--s));/* 0.353 = sin(45deg)/2 */
  height: var(--s); 
  aspect-ratio: 3;
  display: flex;
}
.loader:before,
.loader:after {
  content: "";
  flex: 1;
  clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
  background:
    conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
     #fff 135deg,#666 0 270deg,#aaa 0);
}
.loader:before {  
  background-color: #CC333F; /* control the color here */
  background-blend-mode: multiply;
  margin-right: calc(var(--_d)/-2);
}
.loader:after {
  margin-left: calc(var(--_d)/-2);
  opacity: 0.4;
}
        }

        .basic-cuboid-animation{
            .loader {
  --s: 100px; /* control the size */
  
  --_d: calc(0.353*var(--s));/* 0.353 = sin(45deg)/2 */
  height: var(--s); 
  aspect-ratio: 3;
  display: flex;
}
.loader:before,
.loader:after {
  content: "";
  clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
  background:
    conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
     #fff 135deg,#666 0 270deg,#aaa 0);
}
.loader:before {  
  background-color: #CC333F; /* control the color here */
  background-blend-mode: multiply;
  margin-right: calc(var(--_d)/-2);
  animation: load 2.5s infinite linear;
}
.loader:after {
  margin-left: calc(var(--_d)/-2);
  opacity: 0.4;
  flex: 1;
}

@keyframes  load {
  0%,
  5%   {width: 0%}
  95%,
  100% {width: 100%}
}
        }
//Oops, the animation is a bit strange at the beginning!
//  Notice how it sort of starts outside of the cube? This
//   is because we’re starting the animation at the 0% width.
//    But due to the clip-path and negative margin we’re using,
//     what we need to do instead is start from our --_d variable,
//      which we used to define the clip-path points and
//       the negative margin

.basic-cuboid-animation-correct{
    .loader {
  --s: 100px; /* control the size */
  
  --_d: calc(0.353*var(--s));/* 0.353 = sin(45deg)/2 */
  height: var(--s); 
  aspect-ratio: 3;
  display: flex;
}
.loader:before,
.loader:after {
  content: "";
  clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
  background:
    conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
     #fff 135deg,#666 0 270deg,#aaa 0);
}
.loader:before {  
  background-color: #CC333F; /* control the color here */
  background-blend-mode: multiply;
  margin-right: calc(var(--_d)/-2);
  animation: load1 2.5s infinite linear;
}
.loader:after {
  margin-left: calc(var(--_d)/-2);
  opacity: 0.4;
  flex: 1;
}

@keyframes  load1 {
  0%,
  5%   {width: var(--_d)}
  95%,
  100% {width: 100%}
}
}

//It’s the bottom face of the cube! 
// Since the second element is transparent, we need to 
// see the bottom face of that rectangle as you can
//  see in the left example. It’s subtle, but should be there!

//We can add a gradient to the main element and 
//clip it like we did with the pseudos:
//background: linear-gradient(#fff1 0 0) bottom / 100% var(--_d) no-repeat;
  .basic-cuboid-animation-correct-bottom{
    .loader {
  --s: 100px; /* control the size */
  
  --_d: calc(0.353*var(--s));/* 0.353 = sin(45deg)/2 */
  height: var(--s); 
  aspect-ratio: 3;
  display: flex;
  background: linear-gradient(#fff1 0 0) bottom/100% var(--_d) no-repeat;
  clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
}
.loader:before,
.loader:after {
  content: "";
  clip-path: inherit;
  background:
    conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
     #fff 135deg,#666 0 270deg,#aaa 0);
}
.loader:before {
  background-color: #CC333F; /* control the color here */
  background-blend-mode: multiply;
  margin-right: calc(var(--_d)/-2);
  animation: load2 2.5s infinite linear;
}
.loader:after {
  margin-left: calc(var(--_d)/-2);
  opacity: 0.4;
  flex: 1;
}

@keyframes  load2 {
  0%,
  5%   {width: var(--_d)}
  95%,
  100% {width: 100%}
}

  }
  </style>