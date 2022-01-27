<main class='flex-center'>
    <section class='basic'>
        <img src="https://picsum.photos/id/1069/200/200" alt='image1'>
<img src="https://picsum.photos/id/1069/200/200" alt='image2'>
    </section>
    <section class="basic-1">
        <img src="https://picsum.photos/id/1069/200/200" alt='image3'>
<div></div>
    </section>
    <section class="zig-zag">
        <div class="box one">1</div>
<div class="box two">2</div>
<div class="box three">3</div>
<div class="box four">4</div>
<div class="box five">5</div>
<div class="box six">bottom</div>
<div class="box seven">7</div>
<div class="box eight">top</div>
<div class="box right">right</div>
<div class="box left">left</div>
<div class="box top-bottom">Top & Bottom</div>
<div class="box left-right">Left & Right</div>
<div class="box all-sides">All Sides</div>
<div class="box all-sides-2">All Sides-2</div>
    </section>
    </main>
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: linear-gradient(90deg,#ddd,#fff);
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
            img {
                // #0000 is shorthand for 8 digit color where for each digit 0 represents lowest value and f represents highest, red, green, blue and alpha channle represents 4 digits
                // alpha 0 means white
                // But instead of using a color that blends in 
                // with the page background, we use a “transparent”
                //  black value (#0000) for the hidden parts of the
                //   image and full black (#000) for the visible parts.
                -webkit-mask:linear-gradient(#0000,#000);
          mask:linear-gradient(#0000,#000);
}
// The second example, meanwhile, also uses a 
// gradient, but rather than a soft transition between 
// colors, a hard color stop is used to hide (or mask) half of the image.
img + img {
  -webkit-mask:linear-gradient(#0000 50%,#000 0);
          mask:linear-gradient(#0000 50%,#000 0);
}
        }

        .basic-1{
            img {
  -webkit-mask:
    radial-gradient(circle 40px,#0000 98%,#000) top/100% 60%,
    linear-gradient(90deg,#000 20%,#0000 0) bottom/100% 40%;
         mask:
    radial-gradient(circle 40px,#0000 98%,#000) top/100% 60%,
    linear-gradient(90deg,#000 20%,#0000 0) bottom/100% 40%;
  -webkit-mask-repeat:no-repeat;
          mask-repeat:no-repeat;
}

img + div {
  width: 200px;
  display: inline-block;
  aspect-ratio: 1;
  background:
  //top/width(100%) height(60%)
    radial-gradient(circle 40px,red 98%,green) top/100% 60%,
    linear-gradient(90deg,blue 20%,purple 0) bottom/100% 40%;
  background-repeat: no-repeat;
} 
        }

        .zig-zag{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            .box {
  display:flex;
  justify-content: center;
  align-items:center;
  font-size:35px;
  font-weight:bold;
  min-width:200px;
  aspect-ratio:1;
  border:1px solid ;
}
.one {
    // We start by adding the first gradient layer with 
    // a solid color (red) at the top. A height that’s 
    // equal to calc(100% - 40px) is used to leave 40px
    //  of empty space at the bottom.
  background:linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat;
}
.two {
    // We add a second gradient placed at the bottom
    //  that takes the remaining height of the container.
    //   There’s a little bit of geometry happening to
    //    make this work
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    conic-gradient(from -45deg at bottom,blue 90deg,green 0) bottom/80px 40px no-repeat;
}
.three {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    // Next, we repeat the last gradient horizontally
    //  (replacing no-repeat with repeat-x). We can already
    //   see the zig-zag shape!
    conic-gradient(from -45deg at bottom,blue 90deg,green 0) bottom/80px 40px repeat-x;
}
.four {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    // Gradients are known to have anti-aliasing issues 
    // creating jagged edges (especially on Chrome). To 
    // avoid this, we add a slight transition between the
    //  colors, changing blue 90deg, green 0 to green, 
    //  blue 1deg 89deg, green 90deg.
    conic-gradient(from -45deg at bottom,green,blue 1deg 89deg,green 90deg) bottom/80px 40px repeat-x;
}
.five {
  background:
//   Then we update the colors to have a uniform shape
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    conic-gradient(from -45deg at bottom,#0000,red 1deg 89deg,#0000 90deg) bottom/80px 40px repeat-x;
}
.six {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
//   Last, we use everything inside the mask property!
  -webkit-mask:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/80px 40px repeat-x;
          mask:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/80px 40px repeat-x;
} 
--size: 40px;
--angle: 90deg;
.seven{

    border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
  linear-gradient(red 0 0) top/100% calc(100% - var(--size)) no-repeat,
  conic-gradient(
    from calc(var(--angle)/-2) at bottom,
    #0000, #000 1deg calc(var(--angle) - 1deg), #0000 var(--angle)
  ) bottom/calc(var(--size) * 2 * tan(calc(var(--angle) / 2))) var(--size) repeat-x;
// DOES NOT WORK BECAUSE TRIGNOMETRIC FUNCTIONS ARE UNSUPPORTED AT THE MOMENT IN CSS
//SO TAN WILL NOT WORK

//   --size: 40px;
// --angle: 90deg;
// mask:
//   linear-gradient(red 0 0) top/100% calc(100% - var(--size)) no-repeat,
//   conic-gradient(
//     from calc(var(--angle)/-2) at bottom,
//     #0000, #000 1deg calc(var(--angle) - 1deg), #0000 var(--angle)
//   ) bottom/calc(var(--size)*2*tan(var(--angle)/2)) var(--size) repeat-x;
}

.eight{
    border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
//   Last, we use everything inside the mask property!
  -webkit-mask:
    linear-gradient(red 0 0) bottom/100% calc(100% - 40px) no-repeat,
    conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/80px 40px repeat-x;
          mask:
    linear-gradient(red 0 0) bottom/100% calc(100% - 40px) no-repeat,
    conic-gradient(from 135deg at top,#0000,#000 1deg 89deg,#0000 90deg) top/80px 40px repeat-x;
}

.right{
    border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
//   Last, we use everything inside the mask property!
  -webkit-mask:
    linear-gradient(red 0 0) left/calc(100% - 40px) 100% no-repeat,
    conic-gradient(from -135deg at right,#0000,#000 1deg 89deg,#0000 90deg) right/40px 80px repeat-y;
          mask:
          linear-gradient(red 0 0) left/calc(100% - 40px) 100% no-repeat,
    conic-gradient(from -135deg at right,#0000,#000 1deg 89deg,#0000 90deg) right/40px 80px repeat-y;
}

.left{
    border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
//   Last, we use everything inside the mask property!
  -webkit-mask:
    linear-gradient(red 0 0) right/calc(100% - 40px) 100% no-repeat,
    conic-gradient(from 45deg at left,#0000,#000 1deg 89deg,#0000 90deg) left/40px 80px repeat-y;
          mask:
          linear-gradient(red 0 0) right/calc(100% - 40px) 100% no-repeat,
    conic-gradient(from 45deg at left,#0000,#000 1deg 89deg,#0000 90deg) left/40px 80px repeat-y;
}

.top-bottom{
    background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(#000 0 0) center/100% calc(100% - 80px) no-repeat,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/80px 40px repeat-x,
    conic-gradient(from 135deg at top   ,#0000,#000 1deg 89deg,#0000 90deg) top   /80px 40px repeat-x;
          mask:
    linear-gradient(#000 0 0) center/100% calc(100% - 80px) no-repeat,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/80px 40px repeat-x,
    conic-gradient(from 135deg at top   ,#0000,#000 1deg 89deg,#0000 90deg) top   /80px 40px repeat-x;
}

.left-right{
    background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(#000 0 0) center/calc(100% - 80px) 100% no-repeat,
    conic-gradient(from 45deg at left, #0000,#000 1deg 89deg,#0000 90deg) left/40px 80px repeat-y,
    conic-gradient(from -135deg at right, #0000,#000 1deg 89deg,#0000 90deg) right/40px 80px repeat-y;
         mask:
    linear-gradient(#000 0 0) center/calc(100% - 80px) 100% no-repeat,
    conic-gradient(from 45deg at left, #0000,#000 1deg 89deg,#0000 90deg) left/40px 80px repeat-y,
    conic-gradient(from -135deg at right, #0000,#000 1deg 89deg,#0000 90deg) right/40px 80px repeat-y;
}

// Exactly! We have four conic gradients 
// (one on each side) and one linear-gradient()
//  in the middle. We set a fixed angle equal
//   to 90deg because it the only one that
//    results in nicer corners without weird
//     overlapping. 
//
// IMPORTANT : Note that I’m also using
//      space instead of repeat-x or repeat-y
//       to avoid bad result on corners like this

.all-sides{
    --mask: linear-gradient(#000 0 0) center/calc(100% - 60px) calc(100% - 60px)
      no-repeat,
    conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) 0 0/60px
      30px space no-repeat,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 0
      100%/60px 30px space no-repeat,
    conic-gradient(from 45deg at left, #0000, #000 1deg 89deg, #0000 90deg) 0 0/30px
      60px no-repeat space,
    conic-gradient(from -135deg at right, #0000, #000 1deg 89deg, #0000 90deg)
      100% 0/30px 60px no-repeat space;
      background: linear-gradient(
    135deg,
    #1f005c,
    #5b0060,
    #870160,
    #ac255e,
    #ca485c,
    #e16b5c,
    #f39060,
    #ffb56b
  );
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.all-sides-2{
    --mask-1: linear-gradient(#000 0 0) center/calc(100% - 60px) calc(100% - 60px)
      no-repeat,
    conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) 0 0/60px
      30px repeat-x,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 0
      100%/60px 30px repeat-x,
    conic-gradient(from 45deg at left, #0000, #000 1deg 89deg, #0000 90deg) 0 0/30px
      60px repeat-y,
    conic-gradient(from -135deg at right, #0000, #000 1deg 89deg, #0000 90deg)
      100% 0/30px 60px repeat-y;

  background: linear-gradient(
    135deg,
    #1f005c,
    #5b0060,
    #870160,
    #ac255e,
    #ca485c,
    #e16b5c,
    #f39060,
    #ffb56b
  );
  -webkit-mask: var(--mask-1);
  mask: var(--mask-1);
}

        }
        
    </style>