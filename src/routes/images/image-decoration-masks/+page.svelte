<main class='flex-center'>
    <h3>
        Postage Stamp Basics
    </h3>
    <section class='postage-stamp-basics'>
        <div class="box"></div>
<div class="box one"></div>
<div class="box two"></div>
    </section>
    <h3>Postage Stamps</h3>
    <section class="postage-stamps">
        <img src="https://picsum.photos/id/1040/300/200" alt="a house on the top of a mountain">
        <img src="https://picsum.photos/id/211/200/200" style="--r:15px" alt="a boat">
        <img src="https://picsum.photos/id/193/150/200" style="--r: 5px" alt="a castle">
    </section>
<h3>Rounded Frame Basics</h3>
    <section class="rounded-frame-basics">
        <div class="box"></div>
        +
        <img src="https://picsum.photos/id/1016/200/200" alt="a canyon">
        =
        <img src="https://picsum.photos/id/1016/200/200" class="mask" alt="a canyon">
    </section>
    <h3>Rounded Frame Final</h3>
    <section class="rounded-frame-final">
        <img src="https://picsum.photos/id/1016/200/200" alt="a canyon">
    </section>
    <h3>Inner Transparent Border Basic</h3>
    <section class="inner-transparent-border-basic">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
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

        .postage-stamp-basics{
            background: pink;
            .box {
  --r: 10px;
  width: 200px;
  aspect-ratio: 1;
  margin: 10px;
  display: inline-block;
//   background: radial-gradient(var(--r),#0000 98%,#fff)
//       calc(-1.5*var(--r)) calc(-1.5*var(--r)) /calc(3*var(--r)) calc(3*var(--r))

background: radial-gradient(10px,#0000 98%,#fff);
      background-position: -15px -15px;
      background-size: 30px 30px;
}
.one {
//   background: radial-gradient(var(--r),#0000 98%,#fff) round
//       calc(-1.5 * var(--r)) calc(-1.5 * var(--r)) / calc(3*var(--r)) calc(3*var(--r))
background: radial-gradient(10px,#0000 98%,#fff) round;
      background-position: -15px -15px;
      background-size: 30px 30px;
      //Note the use of the round value in the second step.
    //    It’s very important for the trick as it ensures the
    //     size of the gradient is adjusted to be perfectly 
    //     aligned on all the sides, no matter what the image
    //      width or height is.
}
.two {
//   background: 
//     radial-gradient(var(--r),#0000 98%,#fff) round
//       calc(-1.5*var(--r)) calc(-1.5*var(--r)) /calc(3*var(--r)) calc(3*var(--r)),
//     linear-gradient(#fff 0 0)  no-repeat
//       50%/calc(100% - 3*var(--r)) calc(100% - 3*var(--r));
      background: 
      radial-gradient(var(--r),#0000 98%,#fff) round
      calc(-1.5*var(--r)) calc(-1.5*var(--r)) /calc(3*var(--r)) calc(3*var(--r)),
    linear-gradient(#fff 0 0)  no-repeat
      50%/calc(100% - 3*var(--r)) calc(100% - 3*var(--r));
      //linear gradient removes inner circles
}
        }

        .postage-stamps{
            grid-gap: 30px;
  background: pink;
            img {
  --r: 10px; /* control the radius of the circles */
  padding: calc(2*var(--r));
  filter: grayscale(.4) drop-shadow(0 0 1px #0005) drop-shadow(0 0 1px #0005);
  background: 
    radial-gradient(var(--r),#0000 98%,#fff) round
      calc(-1.5*var(--r)) calc(-1.5*var(--r)) /calc(3*var(--r)) calc(3*var(--r)),
    linear-gradient(#fff 0 0)  no-repeat
      50%/calc(100% - 3*var(--r)) calc(100% - 3*var(--r));
      //calc(100% - 3*var(--r)) calc(100% - 3*var(--r))
      // is width and height of linear gradient
      // 50% is position i.e. from center
}
        }



//This example also uses a radial-gradient(),
//  but this time I have created circles around the
//   image instead of the cut-out effect. Notice that
//    I am also using the round value again. The
//     trickiest part here is the transparent gap 
//     between the frame and the image, which is 
//     where I reach for the CSS mask property
        .rounded-frame-basics{
            .box {
  --s: 20px;    /* size of the frame */
  --g: 10px;    /* the gap */
  
  padding: calc(var(--g) + var(--s));
  width: 200px;
  aspect-ratio:1;
  background:
    conic-gradient(from 90deg at calc(2*var(--s)) calc(2*var(--s)),#0000 25%,red 0)
    //this is background position 
    calc(-1*var(--s)) calc(-1*var(--s)),
    linear-gradient(blue 0 0) content-box;
}

img {
  --s: 20px;    /* size of the frame */
  --g: 10px;    /* the gap */
  --c: #FA6900; 
  
  padding: calc(var(--g) + var(--s));
  background: 
    radial-gradient(farthest-side at center,var(--c) 97%,#0000)
    0 0/calc(2*var(--s)) calc(2*var(--s)) round;
}
//The linear gradient is the blue part of the background
//  while the conic gradient is the red part of the background.
//  That transparent part between both gradients is what we cut
//   from our element to create the illusion of an inner transparent border
.mask {
  --_m:
    conic-gradient(from 90deg at calc(2*var(--s)) calc(2*var(--s)),#0000 25%,#000 0)
     calc(-1*var(--s)) calc(-1*var(--s)),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
} 
        }

        .rounded-frame-final{
            img {
  --s: 20px;    /* size of the frame */
  --g: 10px;    /* the gap */
  --c: #FA6900; 
  
  padding: calc(var(--g) + var(--s));
  background: 
    radial-gradient(farthest-side,var(--c) 97%,#0000)
    0 0/calc(2*var(--s)) calc(2*var(--s)) round;
  --_m:
    conic-gradient(from 90deg at calc(2*var(--s)) calc(2*var(--s)),#0000 25%,#000 0)
     calc(-1*var(--s)) calc(-1*var(--s)),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
}
        }
//You may have noticed that the conic gradient of this 
// example has a different syntax from the previous example. 
// Both are supposed to create the same shape, so why are they 
// different? It’s because we can reach the same result using 
// different syntaxes. This may look confusing at first, but
//  it’s a good feature. You are not obliged to find the 
//  solution to achieve a particular shape. You only need
//   to find one solution that works for you out of the
//    many possibilities out there.

// Here are four ways to create the outer square using
//  gradients:
        .inner-transparent-border-basic{
            .box {
  --b: 10px;
  width: 150px;
  display:inline-block;
  aspect-ratio:1;
  margin:10px;
  border:1px solid;
}
.one {
  background: 
    conic-gradient(from 90deg at var(--b) var(--b),#0000 25%,red 0)
    0 0/calc(100% - var(--b)) calc(100% - var(--b))
}
.two {
  background: 
    conic-gradient(from 90deg at calc(2*var(--b)) calc(2*var(--b)),#0000 25%,red 0)
    calc(-1*var(--b)) calc(-1*var(--b))
}
.three {
  background: 
    conic-gradient(at calc(2*var(--b)) calc(100% - 2*var(--b)),#0000 25%,red 0)
    calc(-1*var(--b)) calc(var(--b))
}
.four {
  background: 
    conic-gradient(at right calc(2*var(--b)) bottom calc(2*var(--b)),red 75%,#0000 0)
    var(--b) var(--b)
}
        }
        
    </style>