<!-- https://css-tricks.com/single-element-loaders-the-dots/ -->
<main class='flex-center'>
    <h3>The background animation</h3>
    <section class='basic'>
        <div class="loader"></div>
    </section>
    <h3>The background animation-Step animation</h3>
    <section class='basic-step'>
        <div class="loader"></div>
    </section>
    <h3>Dots</h3>
    <section class='dots'>
        <div class="loader"></div>
    </section>
    <h3>Background animation + Dots = Loader</h3>
    <section class='combine-effect'>
        <div class="mask"></div>
        +
        <div class="back"></div>
        =
        <div class="loader"></div>
    </section>
    <h3>Different Size and Colors</h3>
    <section class='size-colors'>
        <div class="loader"></div>
        <div class="loader" style="width:100px;--c1:#BD1550;--c2:#E97F02;--c3:#8A9B0F;--c4:#3FB8AF"></div>
    </section>
    <h3>Different Movement</h3>
    <section class='different-movement'>
        <div class="loader"></div>
        <div class="loader" style="width:100px;--c1:#BD1550;--c2:#E97F02;--c3:#8A9B0F;--c4:#3FB8AF"></div>
    </section>
    <h3>One Dot</h3>
    <section class='one-dot'>
        <div class="mask"></div>
        +
        <div class="back"></div>
        =
        <div class="loader"></div>
    </section>
    <h3>Blob</h3>
    <section class='blob'>
        <div class="loader"></div>
    </section>
    <h3>With Pseudo Elements</h3>
    <section class='pseudo'>
        <div class="loader"></div>
    </section>
  
    <h3>Advanced</h3>
    <section class='advanced'>
        <div class="dots-1"></div>
        <div class="dots-2"></div>
        <div class="dots-3"></div>
        <div class="dots-4"></div>
        <div class="dots-5"></div>
        <div class="dots-6"></div>
        <div class="dots-7"></div>
        <div class="dots-8"></div>
        <div class="dots-9"></div>
        <div class="dots-10"></div>
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

        .basic{
            .loader {
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  //What we’ve got is a 180px-wide .loader 
//   element that shows two conic gradients sporting
//    hard color stops between two colors each — the
//     first gradient is red and blue along the top 
//     half of the .loader, and the second gradient 
//     is green and purple along the bottom half.
  background: 
  //Why using a conic-gradient() instead of linear-gradient()?

//Good question! Intuitively, we should use a
// linear gradient(linear-gradient(90deg, red 50%, blue 0))
// to create a two-color gradients like this:
//But we can also reach for the same using a conic-gradient() — and 
// with less of code. We reduce the code and also 
// learn a new trick in the process!
    conic-gradient(red   50%,blue   0) no-repeat,
    conic-gradient(green 50%,purple 0) no-repeat;
    //The way the loader’s background is sized (200% wide), 
    //we only see one of those colors in each half at a time.
    //width and height
    background-size: 200% 50%;
    //Then we have this little animation that pushes
    // the position of those background gradients left, right, and back again forever and ever.
    animation: back 4s infinite linear;
}
@keyframes back {
    //first 0% 0% is for first conic gadient
    //, second 0% 100% is for second conic gradient
  0%,
  100%{background-position: 0%   0%,0%   100%}
  25% {background-position: 100% 0%,0%   100%}
  50% {background-position: 100% 0%,100% 100%}
  75% {background-position: 0%   0%,100% 100%}
}
        }

        .basic-step{
            .loader {
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  background: 
    conic-gradient(red   50%,blue   0) no-repeat,
    conic-gradient(green 50%,purple 0) no-repeat;
  background-size: 200% 50%;
  animation: back 4s infinite steps(1);
}
@keyframes back {
  0%,
  100%{background-position: 0%   0%,0%   100%}
  25% {background-position: 100% 0%,0%   100%}
  50% {background-position: 100% 0%,100% 100%}
  75% {background-position: 0%   0%,100% 100%}
}
        }


        //What makes masks so great is that they let 
        // us sort of “cut out” parts of a background
        //  in the shape of another element. So, in 
        //  this case, we want to make a few dots, 
        //  show the background gradients through the
        //   dots, and cut out any parts of the background
        //    that are not part of a dot.
        .dots{
            .loader {
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background: black;
  animation: load 2s infinite;
}
// Yes, that’s a total of three radial 
// gradients in there, all with the same 
// configuration and the same size — the 
// animation will update the position of each one.
//  Note that the X coordinate of each dot 
//  is fixed. The mask-position is defined
//   such that the first dot is at the left (0%),
//    the second one at the center (50%), and the
//     third one at the right (100%). We only update
//      the Y coordinate from 0% to 100% to make the
//       dots dance.
@keyframes load {
      /* X  Y,     X   Y,    X   Y */
  0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }/* all of them at the top */
  16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }
  33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }
  50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%} /* all of them at the bottom */
  66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}
  83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}
  100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }/* all of them at the top */
}
        }

        //Now, combine this with our gradient animation and magic starts to happen:
  .combine-effect{

.mask {
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background: black;
  animation: load 2s infinite;
}

@keyframes load {
  0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
  16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }
  33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }
  50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}
  66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}
  83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}
  100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
}

.back {
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  background: 
    conic-gradient(red   50%,blue   0) no-repeat,
    conic-gradient(green 50%,purple 0) no-repeat;
  background-size: 200% 50%;
  animation: back 4s infinite steps(1);
}
@keyframes back {
  0%,
  100%{background-position: 0%   0%,0%   100%}
  25% {background-position: 100% 0%,0%   100%}
  50% {background-position: 100% 0%,100% 100%}
  75% {background-position: 0%   0%,100% 100%}
}

.loader {
  /* the colors */
  --c1: red;
  --c2: blue;
  --c3: green;
  --c4: purple;
  /**/
  
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background: 
    conic-gradient(var(--c1) 50%,var(--c2) 0) no-repeat,
    conic-gradient(var(--c3) 50%,var(--c4) 0) no-repeat;
  background-size: 200% 50%;
  animation: 
    back 4s infinite steps(1),
    load 2s infinite;
}
  }
  
  
  .size-colors{
    .loader {
  /* the colors */
  --c1: #F77825;
  --c2: #D3CE3D;
  --c3: #60B99A;
  --c4: #554236;
  /**/
  
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background: 
    conic-gradient(var(--c1) 50%,var(--c2) 0) no-repeat,
    conic-gradient(var(--c3) 50%,var(--c4) 0) no-repeat;
  background-size: 200% 50%;
  animation: 
    back 4s infinite steps(1),
    load 2s infinite;
}

@keyframes load {
  0%    {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
  16.67%{-webkit-mask-position: 0% 100%,50% 0%  ,100% 0%  }
  33.33%{-webkit-mask-position: 0% 100%,50% 100%,100% 0%  }
  50%   {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}
  66.67%{-webkit-mask-position: 0% 0%  ,50% 100%,100% 100%}
  83.33%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 100%}
  100%  {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
}
@keyframes back {
  0%,
  100%{background-position: 0%   0%,0%   100%}
  25% {background-position: 100% 0%,0%   100%}
  50% {background-position: 100% 0%,100% 100%}
  75% {background-position: 0%   0%,100% 100%}
}
  }

  .different-movement{
    HTML CSSResult Skip Results Iframe
EDIT ON
.loader {
  /* the colors */
  --c1: #F77825;
  --c2: #D3CE3D;
  --c3: #60B99A;
  --c4: #554236;
  /**/
  
  width: 180px; /* control the size */
  aspect-ratio: 8/5;
  --_g: no-repeat radial-gradient(#000 68%,#0000 71%);
  -webkit-mask: var(--_g),var(--_g),var(--_g);
  -webkit-mask-size: 25% 40%;
  background: 
    conic-gradient(var(--c1) 50%,var(--c2) 0) no-repeat,
    conic-gradient(var(--c3) 50%,var(--c4) 0) no-repeat;
  background-size: 200% 50%;
  animation: 
    back 3s   infinite steps(1),
    load 1.5s infinite linear;
}

@keyframes load {
    //Here, all I did was update the animation to consider
    //  different positions, and we get another loader with the
    //   same code structure
  0%   {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
  12.5%{-webkit-mask-position: 0% 50% ,50% 0%  ,100% 0%  }
  25%  {-webkit-mask-position: 0% 100%,50% 50% ,100% 0%  }
  37.5%{-webkit-mask-position: 0% 100%,50% 100%,100% 50% }
  50%  {-webkit-mask-position: 0% 100%,50% 100%,100% 100%}
  62.5%{-webkit-mask-position: 0% 50% ,50% 100%,100% 100%}
  75%  {-webkit-mask-position: 0% 0%  ,50% 50% ,100% 100%}
  87.5%{-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 50% }
  100% {-webkit-mask-position: 0% 0%  ,50% 0%  ,100% 0%  }
}
@keyframes back {
  0%,
  100%{background-position: 0%   0%,0%   100%}
  25% {background-position: 100% 0%,0%   100%}
  50% {background-position: 100% 0%,100% 100%}
  75% {background-position: 0%   0%,100% 100%}
}
  }




  .one-dot{

.mask {
  width: 120px; /* control the size */
  border: 1px solid green;
  aspect-ratio: 1;
  background: #000;
  -webkit-mask: radial-gradient(50% 50%,#000 96%,#0000) left/35% 35% no-repeat;
   animation: load 2s infinite;
}
@keyframes load {
  25% {-webkit-mask-position: top   }
  50% {-webkit-mask-position: right }
  75% {-webkit-mask-position: bottom}
}

.back {
  width: 120px; 
  aspect-ratio: 1;
  background: conic-gradient(from 45deg,#046D8B 25%,#93A42A 0 50%,#2FB8AC 0 75%,#ECBE13 0); /* the colors here */
}

.loader {
  width: 120px; 
  aspect-ratio: 1;
  background: conic-gradient(from 45deg,#046D8B 25%,#93A42A 0 50%,#2FB8AC 0 75%,#ECBE13 0);
  -webkit-mask: radial-gradient(50% 50%,#000 96%,#0000) left/35% 35% no-repeat;
  animation: load 2s infinite;
}
@keyframes load {
  25% {-webkit-mask-position: top   }
  50% {-webkit-mask-position: right }
  75% {-webkit-mask-position: bottom}
}
  }


//Here is another example of loader where I am also
//  animating radial-gradient combined with CSS filters
//   and mix-blend-mode to create a blobby effect:

  .blob{
    .loader {
  width: 200px; /* control the size */
  aspect-ratio: 1;
  display: grid;
  background: linear-gradient(135deg,#00A8C6,#8FBE00);
  clip-path: inset(10%);
}
.loader:before {
  content: "";
  padding: 10%;
  --_g: no-repeat content-box radial-gradient(50% 50%,#000 95%,#0000);
  background: var(--_g),var(--_g),var(--_g),var(--_g),#fff;
  background-size: 20% 20%;
  filter: blur(5px) contrast(20);
  mix-blend-mode: lighten;
  animation: l 3s infinite,s 3s infinite;
}
@keyframes l {
  0%,
  100%{background-position:top   ,right ,bottom,left  }
  20% {background-position:center,right ,bottom,left  }
  40% {background-position:center,center,bottom,left  }
  60% {background-position:center,center,center,left  }
  80% {background-position:center,center,center,center}
}
//If you check the code, you will see that all I am really
//  doing there is animating the background-position, exactly
//   like we did with the previous loader, but adding a dash
//    of background-size to make it look like the blob gets 
//    bigger as it absorbs dots
@keyframes s{
  0%,
  25%,
  90%{background-size: 20% 20%,20% 20%,20% 20%,20% 20%}
  40%,
  45%{background-size: 30% 30%,20% 20%,20% 20%,20% 20%}
  60%,
  65%{background-size: 40% 40%,20% 20%,20% 20%,20% 20%}
  80%{background-size: 50% 50%,20% 20%,20% 20%,20% 20%}
}
  }



//   The main element and its two pseudo-elements
//   have the same background configuration with one
//    radial gradient. Each one creates one dot, for
//     a total of three. The animation moves the
//      gradient from top to bottom by using different
//       delays for each dot
  .pseudo{
    .loader,
.loader:before,
.loader:after {
  width: 40px; /* update this to control the size */
  aspect-ratio: .5;

//   /Oh, and take note how this demo uses CSS Grid.
//  This allows us to leverage the grid’s default stretch
//   alignment so that both pseudo-elements cover the whole
//    area of their parent. No need for sizing! Push 
//    the around a little with translate() and we’re all set
  display: grid;
  background: radial-gradient(#000 68%,#0000 72%) center/100% 50% no-repeat;
  animation: load 1.2s infinite linear calc(var(--_s,0)*.4s);
  transform: translate(calc(var(--_s,0)*150%));
} 
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
}
.loader:before {--_s: -1}
.loader:after  {--_s:  1}

@keyframes load {
  20% {background-position: top   }
  40% {background-position: bottom}
  60% {background-position: center}
}
  }


  .advanced{
      display: flex;
      padding: 3rem;
      flex-wrap: wrap;
     
      gap: 4rem;
    .dots-1 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: d1 1s steps(4) infinite;
}
@keyframes d1 {to{clip-path: inset(0 -34% 0 0)}}

.dots-2 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% no-repeat;
  animation: d2 1s steps(3) infinite;
}
@keyframes d2 {to{background-position: 150%}}

.dots-3 {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: d3 1s infinite linear;
}
@keyframes d3 {
    20%{background-position:0%   0%, 50%  50%,100%  50%}
    40%{background-position:0% 100%, 50%   0%,100%  50%}
    60%{background-position:0%  50%, 50% 100%,100%   0%}
    80%{background-position:0%  50%, 50%  50%,100% 100%}
}

.dots-4 {
  width: 60px;
  aspect-ratio: 4;
  background: 
    radial-gradient(circle closest-side at left  6px top 50%,currentColor 90%,#0000),
    radial-gradient(circle closest-side                     ,currentColor 90%,#0000),
    radial-gradient(circle closest-side at right 6px top 50%,currentColor 90%,#0000);
  background-size:100% 100%;
  background-repeat: no-repeat;
  animation:d4 1s infinite alternate;
}
@keyframes d4 {
    to{width:25px;aspect-ratio: 1}
}

.dots-5 {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: d5 1s infinite linear alternate;
}
@keyframes d5 {
    0%  {box-shadow: 20px 0 #000, -20px 0 #0002;background: #000 }
    33% {box-shadow: 20px 0 #000, -20px 0 #0002;background: #0002}
    66% {box-shadow: 20px 0 #0002,-20px 0 #000; background: #0002}
    100%{box-shadow: 20px 0 #0002,-20px 0 #000; background: #000 }
}

.dots-6 {
  width: 15px;
  aspect-ratio: 1;
  background: #000;
  border-radius: 50%;
  animation: d6 1s infinite linear alternate;
}
@keyframes d6 {
    0%  {box-shadow: 15px 0,-25px 0}
    50% {box-shadow: 15px 0,-15px 0}
    100%{box-shadow: 25px 0,-15px 0}
}

.dots-7 {
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 100%;
  animation: d7 1s infinite linear;
}
@keyframes d7 {
    33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
    50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
    66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
}
.dots-8 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.dots-8::before,
.dots-8::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.dots-8::before {
  box-shadow: -25px 0;
  animation: d8-1 1s infinite linear;
}
.dots-8::after {
  transform: rotate(0deg) translateX(25px);
  animation: d8-2 1s infinite linear;
}

@keyframes d8-1 {
    100%{transform: translateX(25px)}
}
@keyframes d8-2 {
    100%{transform: rotate(-180deg) translateX(25px)}
}

.dots-9 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
  animation: d9-0 1.5s infinite steps(2);
}
.dots-9::before,
.dots-9::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.dots-9::before {
  box-shadow: 26px 0;
  transform: translateX(-26px);
  animation: d9-1 .75s infinite linear alternate;
}
.dots-9::after {
  transform: translateX(13px) rotate(0deg) translateX(13px);
  animation: d9-2 .75s infinite linear alternate;
}
@keyframes d9-0 {
    0% ,49.9% {transform: scale(1)}
    50%,100%  {transform: scale(-1)}
}
@keyframes d9-1 {
    100%{box-shadow: 52px 0}
}
@keyframes d9-2 {
    100%{transform: translateX(13px) rotate(-180deg) translateX(13px)}
}

.dots-10 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.dots-10::before,
.dots-10::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.dots-10::before {
  box-shadow: -26px 0;
  animation:d10-1 1.5s infinite linear;
}
.dots-10::after {
  transform: rotate(0deg) translateX(26px);
  animation:d10-2 1.5s infinite linear;
}
@keyframes d10-1 {
    50%{transform:translateX(26px)}
}
@keyframes d10-2 {
    100%{transform:rotate(-360deg) translateX(26px)}
}
  }
    </style>