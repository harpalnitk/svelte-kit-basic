<main class='flex-center'>
  <h3>Masking Basic</h3>
    <section class='basic'>
        <img src="https://picsum.photos/id/1069/200/200" alt='image1'>
<img src="https://picsum.photos/id/1069/200/200" alt='image2'>
    </section>
    <h3>masking Basic-2</h3>
    <section class="basic-1">
        <img src="https://picsum.photos/id/1069/200/200" alt='image3'>
<div></div>
    </section>
    <h3>Zig Zag Borders</h3>
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
    <h3>Rounded Borders -1</h3>
    <section class="round">
      <div class="box one">1</div>
      <div class="box round1 two">2</div>
      <div class="box round1 three">3</div>
      <div class="box round1 four">4</div>
      <div class="box round1 five">5</div>
    </section>
    <h3>Rounded Borders -2</h3>
    <section class="round2">
      <div class="box one">1</div>
      <div class="box round2 two">2</div>
      <div class="box round2 three">3</div>
      <div class="box round2 four">4</div>
      <div class="box round2 five">5</div>
    </section>
    <h3>Rounded border All sides</h3>
    <section class="rounded-all-sides">
      <div class="box one"></div>
<div class="box two"></div>
<div class="box three"></div>
<div class="box four"></div>
    </section>
    <h3>Rounded2 border All sides</h3>
    <section class="rounded2-all-sides">
      <div class="box one"></div>
<div class="box one fix"></div>
<div class="box two fix"></div>
    </section>
    <h3>Wavy Border</h3>
    <section class="wavy">
      <div class="box one">1</div>
<div class="box two">2</div>
<div class="box three">3</div>
<div class="box four">4</div>
<div class="box bottom">Bottom</div>
<div class="box top">Top</div>
<div class="box left">Left</div>
<div class="box right">Right</div>
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






        //ROUNDED BORDERS



        // We take everything from the zig-zag example and update 
        // the conic-gradient() with a radial-gradient(). It’s even 
        // easier because we don’t have any angles to deal with —
        //  only the size variable.
        .round{
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
  background:linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat;
}
.round1.two {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    // What is the logic behind the magic numbers 1.85 and 98%?

    //50% calc(100% + 40px): Position co-ordinates /calc(1.85*40px): width 80px:height
    radial-gradient(circle farthest-side,green 98%,blue) 50% calc(100% + 40px)/calc(1.85*40px) 80px no-repeat;
}
.round1.three {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    // Logically, we should use 100% instead of 98% to have
    //  a circle that touches the edges of the background
    //   area; but again, it’s the anti-aliasing issue and
    //    those jagged edges. We use a slightly smaller value
    //     to prevent weird overlapping
    radial-gradient(circle farthest-side,green 98%,blue) 50% calc(100% + 40px)/calc(1.85*40px) 80px repeat-x;
}
.round1.four {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    // The 1.85 value is more of a personal preference than anything. 
    // I initially used 2 which is the logical value to get a perfect
    //  circle, but the result doesn’t look quite as nice, so the
    //   smaller value creates a more seamless overlap between
    //    the circles.
    radial-gradient(circle farthest-side,#0000 98%,red) 50% calc(100% + 40px)/calc(1.85*40px) 80px repeat-x;
}
.round1.five {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle farthest-side,#0000 98%,red) 50% calc(100% + 40px)/calc(1.85*40px) 80px repeat-x;
}
        }



        .round2{
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
.round2.two {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    //bottom/calc(1.85*40px): width 80px:height
    radial-gradient(circle farthest-side,blue 98%,green) bottom/calc(1.85*40px) 80px no-repeat;
}
.round2.three {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle farthest-side,blue 98%,green) bottom/calc(1.85*40px) 80px repeat-x;
}
.round2.four {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle farthest-side,red 98%,#0000) bottom/calc(1.85*40px) 80px repeat-x;
}
.round2.five {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle farthest-side,#000 98%,#0000) bottom/calc(1.85*40px) 80px repeat-x;
}
        }

        .rounded-all-sides{
          display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          .box {
  display:inline-block;
  width:200px;
  aspect-ratio:1;
  border:1px solid ;
}
.one {
  background:
    radial-gradient(farthest-side,red 98%,#0000) 0 0/60px 60px;
}
.two {
  background:
  //Note how I’m using the round value instead of repeat.
  // That’s to make sure we don’t cut off any of the circles.
    radial-gradient(farthest-side,red 98%,#0000) 0 0/60px 60px round;
}
.three {
  background:
  //linear gradient adds small square in the centre 
  //with side of 60 px less than outer square
    linear-gradient(red 0 0) center/calc(101% - 60px) calc(101% - 60px) no-repeat,
    radial-gradient(farthest-side,red 98%,#0000) 0 0/60px 60px round;
}
.four {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(red 0 0) center/calc(100% - 1.85*30px) calc(100% - 1.85*30px) no-repeat,
    radial-gradient(farthest-side,red 98%,#0000) 0 0/60px 60px round;
          mask:
    linear-gradient(red 0 0) center/calc(100% - 1.85*30px) calc(100% - 1.85*30px) no-repeat,
    radial-gradient(farthest-side,red 98%,#0000) 0 0/60px 60px round;
}
        }
//For the other type of rounded border, we still
//  have to use four radial gradients, but I had
//   to introduce the CSS clip-path property to 
//   correct an overlapping issue at the corners.
//    You can see the difference between with and
//     without clip-path in the following demo:
        .rounded2-all-sides{
          display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          .box {
  display:inline-block;
  width:200px;
  aspect-ratio:1;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
}
.one {
  background:
  linear-gradient(red 0 0) center/calc(100% - 60px) calc(100% - 60px) no-repeat,
  //top layer
  radial-gradient(circle farthest-side,#0000 98%,red) 0 -30px/55.5px 60px round no-repeat,
  //bottom layer
  radial-gradient(circle farthest-side,#0000 98%,red) 0 calc(100% + 30px)/55.5px 60px round no-repeat,
  //left layer
  radial-gradient(circle farthest-side,#0000 98%,red) -30px 0/60px 55.5px no-repeat round,
  //right layer
  radial-gradient(circle farthest-side,#0000 98%,red) calc(100% + 30px) 0/60px 55.5px no-repeat round,
    blue;
}
.two {
 --mask: 
  linear-gradient(#000 0 0) center/calc(100% - 60px) calc(100% - 60px) no-repeat,
  radial-gradient(circle farthest-side,#0000 98%,#000) 0 -30px/55.5px 60px round no-repeat,
  radial-gradient(circle farthest-side,#0000 98%,#000) 0 calc(100% + 30px)/55.5px 60px round no-repeat,
  radial-gradient(circle farthest-side,#0000 98%,#000) -30px 0/60px 55.5px no-repeat round,
  radial-gradient(circle farthest-side,#0000 98%,#000) calc(100% + 30px) 0/60px 55.5px no-repeat round;
-webkit-mask: var(--mask);
        mask: var(--mask);
}
.fix {
  //It’s an eight-point path to cut the corners:
clip-path: polygon(60px 0,calc(100% - 60px) 0,100% 60px,100% calc(100% - 60px),calc(100% - 60px) 100%,60px 100%,0 calc(100% - 60px),0 60px);
}
        }

        .wavy{
          display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          .box {
  display:flex;
  justify-content: center;
  align-items: center;
  width:200px;
  font-size:35px;
  font-weight:bold;
  aspect-ratio:1;
  border:1px solid ;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
} 

.one {
  background:linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat;
}
.two {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    //right wavy half height semi circle
    //75% 100% of the left over area
    //width = 4* size = 80px: height : size = 20px
    radial-gradient(circle 20px at 75% 100%,green 98%,blue) 50% calc(100% - 20px)/80px 20px no-repeat,
    //left complete circle
    //25% 50 % of the area i.e. height : 2* size = 40px and width: 4 * size = 80px
    radial-gradient(circle closest-side at 25% 50%,blue 99%,green 101%) bottom/80px 40px no-repeat
    ;
}
.three {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle 20px at 75% 100%,green 98%,blue) 50% calc(100% - 20px)/80px 20px repeat-x,
    radial-gradient(circle closest-side at 25% 50%,blue 99%,green 101%) bottom/80px 40px repeat-x;
}

.four {
  background:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle 20px at 75% 100%,#0000 98%,red) 50% calc(100% - 20px)/80px 20px repeat-x,
    radial-gradient(circle closest-side at 25% 50%,red 99%,#0000 101%) bottom/80px 40px repeat-x;
}
.bottom {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle 20px at 75% 100%,#0000 98%,red) 50% calc(100% - 20px)/80px 20px repeat-x,
    radial-gradient(circle closest-side at 25% 50%,red 99%,#0000 101%) bottom/80px 40px repeat-x;
   mask:
    linear-gradient(red 0 0) top/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle 20px at 75% 100%,#0000 98%,red) 50% calc(100% - 20px)/80px 20px repeat-x,
    radial-gradient(circle closest-side at 25% 50%,red 99%,#0000 101%) bottom/80px 40px repeat-x;
}
.top {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(red 0 0) bottom/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle 20px at 75% 0%,#0000 98%,red) 50% 20px/80px 20px repeat-x,
    radial-gradient(circle closest-side at 25% 50%,red 99%,#0000 101%) top/80px 40px repeat-x;
   mask:
   linear-gradient(red 0 0) bottom/100% calc(100% - 40px) no-repeat,
    radial-gradient(circle 20px at 75% 0%,#0000 98%,red) 50% 20px/80px 20px repeat-x,
    radial-gradient(circle closest-side at 25% 50%,red 99%,#0000 101%) top/80px 40px repeat-x;
}
.right {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(red 0 0) left/calc(100% - 40px) 100%  no-repeat,
    radial-gradient(circle 20px at 100% 75%,#0000 98%,red) calc(100% - 20px) 50%/20px 80px repeat-y,
    radial-gradient(circle closest-side at 50% 25%,red 99%,#0000 101%) right/40px 80px repeat-y;
   mask:
   linear-gradient(red 0 0) left/calc(100% - 40px) 100%  no-repeat,
    radial-gradient(circle 20px at 100% 75%,#0000 98%,red) calc(100% - 20px) 50%/20px 80px repeat-y,
    radial-gradient(circle closest-side at 50% 25%,red 99%,#0000 101%) right/40px 80px repeat-y;
}
.left {
  border:none;
  background:linear-gradient(135deg,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b);
  -webkit-mask:
    linear-gradient(red 0 0) right/calc(100% - 40px) 100%  no-repeat,
    radial-gradient(circle 20px at 0% 75%,#0000 98%,red) 20px 50%/20px 80px repeat-y,
    radial-gradient(circle closest-side at 50% 25%,red 99%,#0000 101%) left/40px 80px repeat-y;
   mask:
   linear-gradient(red 0 0) right/calc(100% - 40px) 100%  no-repeat,
    radial-gradient(circle 20px at 0% 75%,#0000 98%,red) 20px 50%/20px 80px repeat-y,
    radial-gradient(circle closest-side at 50% 25%,red 99%,#0000 101%) left/40px 80px repeat-y;
}
        }
        
    </style>