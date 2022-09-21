<main class='flex-center'>
    <section class='basic'>
        <div></div>
    </section>
    <h3>With Glyphs</h3>
    <section class='basic2'>
        <div></div>
    </section>
    <section class='basic3'>
        <div></div>
    </section>
    <h3>With Masking</h3>
    <section class='basic4'>
        <div></div>
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
            div {
  width: 380px;
  height: 380px;
  background: 
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 50px,
      white 50px,
      white 55px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 50px,
      white 50px,
      white 55px
    ),
    linear-gradient(45deg, pink, skyblue);
}
        }

        .basic2{
            div {
  width: 380px;
  height: 380px;
//   Now we add the star glyph I mentioned earlier, on 
// top of the background pattern. We can do that by including
//  it on the same background property as the gradients while
//   using an encoded SVG for the shape


  background: 

//The first keyword, repeat, denotes that this is a repeating 
// background image. Followed by that is the position and size 
// of each repeating unit, respectively (left -17px top -22px/55px 55px).
//  This offset position is based on the glyph and pattern’s size.
//   You’ll see below how the glyph size is given. The offset is
//    added to re-position the repeating glyph exactly over each
//     intersection in the checkered pattern.

// The SVG has an HTML <div> carrying the glyph. 
//     Notice that I declared a font-size on it.
//      That ultimately determines the border radius 
//      of the squares in the checkerboard pattern 
//      — the bigger the glyph, the more rounded the squares.
  repeat left -17px top -22px/55px 55px
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35px 35px'><foreignObject width='35px' height='35px'><div xmlns='http://www.w3.org/1999/xhtml' style='color: white; font-size: 35px'>✦</div></foreignObject></svg>"), 
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 50px,
      white 50px,
      white 55px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 50px,
      white 50px,
      white 55px
    ),
    linear-gradient(45deg, pink, skyblue);
}
        }
// Now that a CSS pattern is established, let’s add a
//  :hover effect where the glyph is removed and the white
//   lines are made slightly translucent by using rgb() 
//   color values with alpha transparency.
        .basic3{
            div {
  width: 380px;
  height: 380px;
  background: 
  repeat left -17px top -22px/55px 55px
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35px 35px'><foreignObject width='35px' height='35px'><div xmlns='http://www.w3.org/1999/xhtml' style='color: white; font-size: 35px'>✦</div></foreignObject></svg>"), 
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 50px,
      white 50px,
      white 55px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 50px,
      white 50px,
      white 55px
    ),
    linear-gradient(45deg, pink, skyblue);
} 
div:hover {
  background:
    repeating-linear-gradient(
      to right, transparent,
      transparent 50px,
      rgb(255 255 255 / 0.5) 50px,
      rgb(255 255 255 / 0.5) 55px
    ),
    repeating-linear-gradient(
      to bottom, transparent,
      transparent 50px,
      rgb(255 255 255 / 0.5) 50px,
      rgb(255 255 255 / 0.5) 55px
    ),
  linear-gradient(45deg, pink, skyblue);
  box-shadow: 10px 10px 20px pink;
}
        }

        .basic4{
            position: relative;
            div{
                width: 600px;
                height: 600px;;
            }
            div::before{
                --s: 150px; /* the size */
  --g: 10px;  /* the gap */ 
  --r: 15px;  /* the radius */
  
  content: "";
  position: absolute;
  inset: var(--g);
  --_g: radial-gradient(var(--r) at var(--r) var(--r),#000 98%,#0000);
  --_o: calc(-2*var(--r) - var(--g));
  -webkit-mask:
    var(--_g),var(--_g) var(--_o) 0,var(--_g) 0 var(--_o),var(--_g) var(--_o) var(--_o),
    conic-gradient(at calc(var(--s) - 2*var(--r)) var(--s),#0000 75%,#000 0) var(--r) 0,
    conic-gradient(at var(--s) calc(var(--s) - 2*var(--r)),#0000 75%,#000 0) 0 var(--r);
  -webkit-mask-size: calc(var(--s) + var(--g)) calc(var(--s) + var(--g));
  background: linear-gradient(45deg, pink, skyblue);   
            }
        }
        
    </style>