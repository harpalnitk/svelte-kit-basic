<!-- https://css-tricks.com/fancy-image-decorations-single-element-magic/ -->
<main class='flex-center'>
    <h3>Basic</h3>
    <section class='basic'>
        <div class="box"></div>
        <div class="box border"></div>
        <div class="box border tran"></div> 
    </section>
    <h3>Basic Final Result</h3>
    <section class='basic-final-result'>
        <img src="https://picsum.photos/id/1021/200/200" alt="a misty forest">
    </section>
    <h3>Basic Final Result With only Gradients</h3>
    <section class='basic-final-result-gradient-only'>
        <img src="https://picsum.photos/id/1021/200/200" alt="a misty forest">
    </section>
    <h3>With Border-Gradient-Clippath</h3>
    <section class='clip-path'>
        <img src="https://picsum.photos/id/1021/200/200" alt="a misty forest">
    </section>
    <h3>Corner-only-Basic</h3>
    <section class='corner-only-basic'>
        <div class="box"></div>
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
    </section>
    <h3>Corner-only</h3>
    <section class='corner-only'>
        <img src="https://picsum.photos/id/1068/200/200" alt='flower'>
    </section>
    <h3>Corner-only-variation</h3>
    <section class='corner-only-variation'>
        <img src="https://picsum.photos/id/133/200/200" alt="two old cars in front of a garage">
<img src="https://picsum.photos/id/183/200/200" alt="a very old volkswagen van" class="alt" style="--g: 20px;--b:5px;--s: 80px;--c:#6A4A3C;">
    </section>
    <h3>Corner-Only-Variation-Full-Border</h3>
    <section class='corner-only-variation-full-border'>
        <img src="https://picsum.photos/id/1022/200/200" alt="a nighty sky">
    </section>
    <h3>Full-Border-Closing-Basic</h3>
    <section class='border-closing-basic'>
        <div class="box"></div>
    </section>
    <h3>Full-Border-Closing</h3>
    <section class='border-closing'>
        <img src="https://picsum.photos/id/1022/200/200" alt="a nighty sky">
    </section>
    <h3>Frame-Rotation-Basic</h3>
    <section class='frame-rotation-basic'>
        <div class="box"></div>
    </section>
    <h3>Frame-Rotation-Basic-2</h3>
    <section class='frame-rotation-basic-2'>
        <div class="box"></div>
    </section>
    <h3>Frame-Rotation-Basic-3</h3>
    <section class='frame-rotation-basic-3'>
        <div class="box"></div>
    </section>
    <h3>Frame-Rotation-Final</h3>
    <section class='frame-rotation-final'>
        <img src="https://picsum.photos/id/1039/200/200" alt="sky">
        <img src="https://picsum.photos/id/1032/200/200" style="--c: #945f31;" alt='sky'>
    </section>
    <h3>Frame-Rotation-Different Version</h3>
    <section class='frame-rotation-version'>
        <img src="https://picsum.photos/id/1039/200/200" alt="sky">
        <img src="https://picsum.photos/id/1032/200/200" style="--c: #945f31;" alt='sky'>
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
            // Initially, we don’t have any borders on the image,
            //  so our gradient will create two segments with 1px of
            //   thickness. (I am using 3px in this specific demo 
            //   so it’s easier to see.)
            .box {
  width: 150px;
  aspect-ratio:1;
  margin: 10px;
  display: inline-block;
  box-sizing: border-box;
  background: conic-gradient(from 90deg at 3px 3px,#0000 25%,blue 0);
}
//We add a colored border and the gradient still
//  gives us the same result inside the padding area
//   (due to background-origin) but it repeats behind the border.
.border {
  border: 20px solid red;
}
//If we make the color of the border transparent,
// we can use the repetition and we get the frame we want.
.tran {
  border-color: #0000;
}
        }
 .basic-final-result{
    img {
  --s: 10px; /* control the size */

//   We are defining padding and a transparent border 
// using the variable --s to create a space around our 
// image equal to three times that variable.
  padding: var(--s);
  border: calc(2*var(--s)) solid #0000;
  //The outline in the demo has a negative offset. 
//   That creates a square shape at the top of the 
//   gradient. That’s it! We added a nice decoration 
//   to our image using one gradient and an outline.
  outline: 1px solid #000;
  outline-offset: calc(-1*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
}



 }  
 .basic-final-result-gradient-only{
    img {
  --s: 10px; /* control the size */
  padding: calc(3*var(--s));
  --_g: #000 1px,#0000 0 calc(100% - 1px),#000 0;
  --_s:  50%/calc(100% - 2*var(--s)) calc(100% - 2*var(--s));
  background: 
    linear-gradient(var(--_g)) var(--_s) no-repeat,
    linear-gradient(90deg,var(--_g)) var(--_s) no-repeat,
    conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0)
    calc(2*var(--s)) calc(2*var(--s))/calc(100% - 4*var(--s)) calc(100% - 4*var(--s));
  
}
 }   
 
//  For this one, I took the previous example removed the outline,
// and applied a clip-path to cut the gradient on each side. 
 .clip-path{
    img {
  --s: 15px; /* control the size */
  padding: var(--s);
  border: var(--s) solid #0000;
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
  clip-path: 
    polygon(
      0    0   ,33%  0   ,50% calc(2*var(--s))       ,66%  0,
      100% 0   ,100% 33% ,calc(100% - 2*var(--s)) 50%,100% 66%,
      100% 100%,66%  100%,50% calc(100% - 2*var(--s)),33%  100%,
      0    100%,0    66% ,calc(2*var(--s)) 50%       ,0    33%
    )
}
 }

 .corner-only-basic{
    .box {
  width: 100px;
  aspect-ratio: 1;
  display: inline-block;
  margin: 10px;
  background: conic-gradient(#0000,darkblue);
  border: 1px solid red;
}
.one {
    // /This is basically saying: “fill the gradient with a 
    // transparent color until 25% of the area, then fill the 
    // remaining area with darkblue
    //You might be scratching your head over the 0 value. 
    // It’s a little hack to simplify the syntax. In reality, we 
    // should use this to make a hard stop between colors
    // #0000 25%, darkblue 25%
    // That is more logical! The transparent color ends at 
    // 25% and darkblue starts exactly where the transparency
    //  ends, making a hard stop. If we replace the second one
    //   with 0, the browser will do the job for us, so it is
    //    a slightly more efficient way to go about it
  background: conic-gradient(#0000 25%,darkblue);
}
.two {
  background: conic-gradient(#0000 25%,darkblue 0);
}
.three {
  background: conic-gradient(from 90deg,#0000 25%,darkblue 0);
}
.four {
  background: conic-gradient(from 90deg at top 10px left 10px,#0000 25%,darkblue 0);
}
 }

 .corner-only{
    img {
  --b: 5px; /* border thickness */
  --c: #0000 25%,darkblue 0; /* define the color here */
  padding: 10px;
  //This one takes four gradients. Each gradient covers one
//    corner and, on hover, we expand them to create a full 
//    frame around the image. 
  background:
    conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--c)) 0    0,
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--c)) 100% 0,
    conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--c)) 0    100%,
    conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--c)) 100% 100%;
  background-size: 50px 50px; /* adjust border length here */
  background-repeat: no-repeat;
  transition: .6s;
  cursor: pointer;
}
// For the hover effect, all I’m doing is increasing 
//the size of the gradients to create the full frame
// Yes, it’s 51% instead of 50% — that creates a small overlap
// and avoids possible gaps.

img:hover {
  background-size: 51% 51%;
}
 }

 .corner-only-variation{
    img {
  --b: 8px;  /* border thickness*/
  --s: 60px; /* size of the corner*/
  --g: 14px; /* the gap*/
  --c: #EDC951; 
  
  padding: calc(var(--b) + var(--g));
  background-image:
    conic-gradient(from  90deg at top    var(--b) left  var(--b),#0000 25%,var(--c) 0),
    conic-gradient(from -90deg at bottom var(--b) right var(--b),#0000 25%,var(--c) 0);
  background-position:
    var(--_p,0%) var(--_p,0%),
    calc(100% - var(--_p,0%)) calc(100% - var(--_p,0%));
  background-size: var(--s) var(--s);
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 
    background-position .3s var(--_i,.3s), 
    background-size .3s calc(.3s - var(--_i,.3s));
}
img.alt {
  background-image:
    conic-gradient(from 180deg at top    var(--b) right var(--b),#0000 25%,var(--c) 0),
    conic-gradient(from   0deg at bottom var(--b) left  var(--b),#0000 25%,var(--c) 0);
  background-position:
    calc(100% - var(--_p,0%)) var(--_p,0%),
    var(--_p,0%) calc(100% - var(--_p,0%));
}
img:hover {

    //This time we are using only two gradients, 
    // but with a more complex animation. First, we 
    // update the position of each gradient, then 
    // increase their sizes to create the full frame.

    // background-size: width height
    //With background-size, we can omit the height because
    //  gradients are full height by default. We can do a
    //   transition from background-size: 0 to background-size: 100%.
  background-size: calc(100% - var(--g)) calc(100% - var(--g));
  //Why do the --_i and --_p variables have an underscore 
//   in their name? The underscores are part of a naming 
//   convention I use to consider “internal” variables 
//   used to optimize the code. They are nothing special
//    but I want to make a difference between the variables
//     we adjust to control the frame (like --b, --c, etc.)
//      and the ones I use to make the code shorter.

// https://css-tricks.com/cool-hover-effects-using-background-properties/
// to learn about background position and size properties
  --_p: calc(var(--g)/2);
  --_i: 0s;
}
 }

 .corner-only-variation-full-border{
    img {
  --b: 10px;    /* the border thickness*/
  --g: 5px;     /* the gap on hover */
  --c: #8A9B0F; 
  
  padding: calc(var(--g) + var(--b));
  --_g: no-repeat linear-gradient(var(--c) 0 0);
  background: 
  //  background: linear-gradient(#1095c1 0 0) var(--p, 0) 0 (background position)/ var(--p, 0) .2em (background-size) no-repeat;
    var(--_g) var(--_i,0%) 0,
    var(--_g) 100% var(--_i,0%),
    var(--_g) calc(100% - var(--_i,0%)) 100%,
    var(--_g) 0 calc(100% - var(--_i,0%));
  background-size: var(--_i,0%) var(--b),var(--b) var(--_i,0%);
  transition: .4s, background-position 0s;
  cursor: pointer;
}
img:hover {
  --_i: 100%;
}
 }

 .border-closing-basic{
    .box {
  width: 150px;
  aspect-ratio: 1;
  margin: 10px auto;
  border: 1px solid;
  position: relative;
}
//The pseudo-element simulates the gradient. It’s initially
//  out of sight and, on hover, we first change its position to
//   get the top edge of the frame. Then we increase the height 
//   to get the right edge. The gradient shape is similar to the 
//   ones we used in the last section: two segments to cover two sides.
.box::before {
  content:"";
  position:absolute;
  //But why did I make the gradient’s width 200%? You’d
//    think 100% would be enough, right?

// 100% should be enough but I won’t be able to move the gradient
//  like I want if I keep its width equal to 100%. That’s another
//   little quirk related to how background-position works.
  width: 200%;
  height: 10px;
  right: 0;
  top: 0;
  background: conic-gradient(from 180deg at top 10px right 10px,#0000 25%,red 0);
  outline: 1px dashed blue;
  transform: translateX(-50%);
  transition: .5s .5s, height .5s;
}
.box:hover::before {
  transform: translateX(0);
  height: 100%;
  transition: .5s, height .5s .5s;
} 
 }

 //Now that we have explained the logic for one gradient, 
//  the second one is easy because it’s doing exactly the same 
//  thing, but covering the left and bottom edges instead. 
//  All we have to do is to swap a few values and we are done
 .border-closing{
    img {
  --c: #8A9B0F; /* the border color */
  --b: 10px;    /* the border thickness*/
  --g: 5px;     /* the gap on hover */
  
  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%,var(--c) 0;
  background: 
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g))
     var(--_i,200%) 0  /200% var(--_i,var(--b))  no-repeat,
    conic-gradient( at bottom var(--b) left  var(--b),var(--_g))
     0   var(--_i,200%)/var(--_i,var(--b)) 200%  no-repeat;
  transition: .3s, background-position .3s .3s;
  cursor: pointer;
}
img:hover {
  --_i: 100%;
  transition: .3s, background-size .3s .3s;
}
 }

 .frame-rotation-basic{
    .box {
  width: 150px;
  aspect-ratio: 1;
  margin: 10px auto;
  border: 1px solid;
  position: relative;
}
.box::before {
  content:"";
  position:absolute;
  width: 200%;
  height: 10px;
  right: 0;
  top: 0;
  background: repeating-linear-gradient(90deg ,#0000 0 25%, red 0 50%);
  outline: 1px dashed blue;
  transform: translateX(37.5%);
  transition: .5s;
}
.box:hover::before {
  transform: translateX(12.5%);
}
 }

 .frame-rotation-basic-2{
    .box {
  width: 150px;
  aspect-ratio: 1;
  margin: 10px auto;
  border: 1px solid;
  position: relative;
}
.box::before {
  content:"";
  position:absolute;
  width: 200%;
  height: 10px;
  right: 0;
  top: 0;
  background: repeating-linear-gradient(90deg ,#0000 0 25%, red 0 50%);
  outline: 1px dashed blue;
  transform: translateX(37.5%);
  transition: .5s;
}
.box::after {
  content:"";
  position:absolute;
  height: 200%;
  width: 10px;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(#0000 0 25%, red 0 50%);
  outline: 1px dashed blue;
  transform: translateY(37.5%);
  transition: .5s;
}
.box:hover::before {
  transform: translateX(12.5%);
}
.box:hover::after {
  transform: translateY(12.5%);
}
 }

 //Both gradients intersect at the corner to create the 
//  illusion where the straight line is changed to an angled
//   one. Let’s remove the outline and hide the overflow to better see it
 .frame-rotation-basic-3{
    .box {
  width: 150px;
  aspect-ratio: 1;
  margin: 10px auto;
  border: 1px solid;
  position: relative;
  overflow:hidden
}
.box::before {
  content:"";
  position:absolute;
  width: 200%;
  height: 10px;
  right: 0;
  top: 0;
  background: repeating-linear-gradient(90deg ,#0000 0 25%, red 0 50%);
  transform: translateX(37.5%);
  transition: .5s;
}
.box::after {
  content:"";
  position:absolute;
  height: 200%;
  width: 10px;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(#0000 0 25%, red 0 50%);
  transform: translateY(37.5%);
  transition: .5s;
}
.box:hover::before {
  transform: translateX(12.5%);
}
.box:hover::after {
  transform: translateY(12.5%);
}
 }

 .frame-rotation-final{
    img {
  --g: 4px;     /* the gap */
  --b: 12px;    /* border thickness*/
  --c: #669706; /* the color */
  
  
  padding: calc(var(--g) + var(--b));
  --_c: #0000 0 25%, var(--c) 0 50%;
  --_g1: repeating-linear-gradient(90deg ,var(--_c)) repeat-x;
  --_g2: repeating-linear-gradient(180deg,var(--_c)) repeat-y;
  background:
    var(--_g1) var(--_p, 25%) 0   ,var(--_g2) 0    var(--_p,125%),
    var(--_g1) var(--_p,125%) 100%,var(--_g2) 100% var(--_p, 25%);
  background-size: 200% var(--b),var(--b) 200%;
  cursor: pointer;
  filter: grayscale(50%);
  transition: .3s;
}
img:hover {
  --_p: 75%;
  filter: grayscale(0%);
}
 }

 .frame-rotation-version{
    img {
  --g: 4px;     /* the gap */
  --b: 12px;    /* border thickness*/
  --c: #669706; /* the color */
  
  
  padding: calc(var(--g) + var(--b));
  --_c: #0000 0 25%, var(--c) 0 50%;
  --_g1: repeating-linear-gradient(90deg ,var(--_c)) repeat-x;
  --_g2: repeating-linear-gradient(180deg,var(--_c)) repeat-y;
  background:
    var(--_g1) var(--_p1, 25%) 0   ,var(--_g2) 0    var(--_p2,125%),
    var(--_g1) var(--_p2,125%) 100%,var(--_g2) 100% var(--_p1, 25%);
  background-size: 200% var(--b),var(--b) 200%;
  cursor: pointer;
  filter: grayscale(50%);
}
img:hover {
  --_p1: 125%;
  --_p2: 25%;
  filter: grayscale(0%);
  transition: .4s;
}
 }
    </style>