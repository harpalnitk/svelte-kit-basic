
<!-- REMOVE BOX BORDER FROM MAIN.CSS FILE  -->
<main class='flex-center'>
    <h3>Basic Avatar Scaling</h3>
    <section class='basic'>
        <img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
    </section>
    <h3>With Circle</h3>
    <section class="with-circle">
        <img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
    </section>

    <!-- //The next step is to play with the gradient size on hover.
     The circle needs to keep its size as the image grows.
      Since we are applying a scale() transformation, we 
      actually need to decrease the size of the circle 
      because it otherwise scales up with the avatar.
       So, while the image scales up, we need the gradient
        to scale down.

    Let’s start by defining a CSS variable, --f, that
     defines the “scale factor”, and use it to set the 
     size of the circle. I’m using 1 as the default value,
      as in that’s the initial scale for the image and the
       circle that we transform from. -->
<h3>Gradient still and background scaling</h3>
       <section class="basic-2">
        <div class="box"></div>
    </section>
    <h3>Above concept applied</h3>
       <section class="concept-applied">
        <img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
    </section>

    <!-- We’re getting closer! We have the overflow effect at the top,
     but we still need to hide the bottom part of the image,
      so it looks like it is popping out of the circle rather
       than sitting in front of it. That’s the tricky part
        of this whole thing and is what we’re going to do next. -->

        <!-- The idea is to set an outline on the image and
         adjust its offset to create the bottom border.
          The offset will depend on the scaling factor
           the same way the gradient size did. -->
           <h3>Outline with offset for bottom border</h3>
           <section class="outline-offset">
            <img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
        </section>
        <h3>Outline with offset for bottom border example</h3>
        <section class="outline-offset-example">
            <div class="box"></div>
                </section>
                <!-- You may already see it, but we still need the 
                bottom outline to overlap the circle rather 
                than letting it bleed through it. We can do 
                that by removing the border’s size from the offset: -->
                <h3>Outline with offset for bottom border - application</h3>
                <section class="outline-offset-application">
                    <img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
                        </section>

<!-- We reached the last part! All we need to do is to 
hide some pieces, and we are done. For this, we 
will rely on the mask property and, of course,
 gradients.
 We can identify two parts of our mask:

A circular part at the bottom that has the same dimension 
and curvature as the radial gradient we used to create 
the circle behind the avatar
A rectangle at the top that covers the area
 inside the outline. Notice how the outline is 
 outside the green area at the top — that’s the
  most important part, as it allows the outline 
  to be cut so that only the bottom part is visible. -->
<h3>Final explained</h3>
  <section class="final-explained">
    <img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
    +
<div class="box"></div>
=
<img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
</section>

<h3>Final</h3>
<section class="final">
    <img src="https://assets.codepen.io/1480814/av+1.png" alt="a_random_avatar_picture" >
        </section>

        <h3>Bonus with images</h3>
        <section class="bonus">
            <img src="https://assets.codepen.io/1480814/adam-argyle.png" alt="Adam argyle" >
<img src="https://assets.codepen.io/1480814/ahmed.png" alt="Ahmed shadeed" style="--c:#efac27;--cb: #bbdeea">
<img src="https://assets.codepen.io/1480814/kevin-p.png" alt="Kevin Powell" style="--c:#255b98;--cb:#f3bf99">
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
            //width: 100%;
            padding: 1rem;
            //margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #E0E4CC;
        }

        .basic{
            img {
  width: 100px;
  aspect-ratio: 1;
  cursor: pointer;
  transition: .5s;
}
img:hover {
  transform: scale(1.35);
}
        }

        .with-circle{
            img {
  --b: 5px;
  
  width: 100px;
  aspect-ratio: 1;
  //We said that the background would be a radial gradient. 
//   That’s perfect because we can create hard stops between 
//   the colors of a radial gradient, which make it look like
//    we’re drawing a circle with solid lines
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),#C02942 calc(100% - var(--b)) 99%,#0000
     );
  cursor: pointer;
  transition: .5s;
}
img:hover {
  transform: scale(1.35);
}
        }

        .basic-2{
            .box {
  --b: 5px;
  --f: 1;
  
  width: 100px;
  aspect-ratio: 1;
  //The background is placed at the center (50%), has 
  //a width equal to calc(100%/var(--f)), and has a height equal to 100%.
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),#C02942 calc(100% - var(--b)) 99%,lightblue
     ) 50%/calc(100%/var(--f)) 100% no-repeat;
  transform: scale(var(--f));
  cursor: pointer;
  outline: 2px solid green;
  transition: .3s ;
}
.box:hover {
    //When we increase --f, the element’s size
    // grows — thanks to the scale()
    // transform — and the gradient’s size decreases.
  --f: 1.35;
}
        }

        .concept-applied{
            img {
  --b: 5px; /* border thickness */
  --f: 1; /* initial scale */
  
  width: 100px;
  aspect-ratio: 1;
  cursor: pointer;
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),#C02942 calc(100% - var(--b)) 99%,#0000
     ) 50%/calc(100%/var(--f)) 100% no-repeat;
  transform: scale(var(--f));
  transition: .5s;
}
img:hover {
  --f: 1.35; /* hover scale */
}
        }

        .outline-offset{
            img {
  --s: 100px; /* image size */
  --b: 5px;   /* border thickness */
  --c: #C02942; /* border color */
  --f: 1;     /* initial scale */
  
  width: var(--s);
  aspect-ratio: 1;
  cursor: pointer;
//   Now we have our bottom “border” (actually an outline) 
//   combined with the “border” created by the gradient to 
//   create a full circle. We still need to hide portions of
//    the outline (from the top and the sides), which 
//    we’ll get to in a moment.
  border-radius: 0 0 999px 999px;
//   Since we need a circular bottom border, we added a 
//   border-radius on the bottom side, allowing the outline
//    to match the curvature of the gradient.
  outline: var(--b) solid var(--c);
  //https://css-tricks.com/a-fancy-hover-effect-for-your-avatar/
  //check outline offset calculations here
  outline-offset: calc((1/var(--f) - 1)*var(--s)/2 - var(--b));
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
     ) 50%/calc(100%/var(--f)) 100% no-repeat;
  transform: scale(var(--f));
  transition: .5s;
}
img:hover {
  --f: 1.35; /* hover scale */
}

        }

        .outline-offset-example{
            .box {
  --s: 100px; /* image size */
  --b: 5px;   /* border thickness */
  --c: #C02942; /* border color */
  --f: 1;     /* initial scale */
  
  width: var(--s);
  aspect-ratio: 1;
  border-radius: 0 0 999px 999px;
  outline: var(--b) solid green;
  outline-offset: calc((1/var(--f) - 1)*var(--s)/2);
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
     ) 50%/calc(100%/var(--f)) 100% no-repeat, lightblue;
  transform: scale(var(--f));
  cursor: pointer;
  transition: .3s ;
}
.box:hover {
  --f: 1.35;
}
        }

        .outline-offset-application{
            img {
  --s: 100px; /* image size */
  --b: 5px;   /* border thickness */
  --c: #C02942; /* border color */
  --f: 1;     /* initial scale */
  
  width: var(--s);
  aspect-ratio: 1;
//   Now we need to find how to remove the top part from the outline. 
//   In other words, we only want the bottom part of the image’s outline.

// First, let’s add space at the top with padding
//  to help avoid the overlap at the top:
// There is no particular logic to that top padding.
//  The idea is to ensure the outline doesn’t touch
//   the avatar’s head. I used the element’s size 
//   to define that space to always have the same proportion.

  padding-top: calc(var(--s)/5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  outline: var(--b) solid var(--c);
  outline-offset: calc((1/var(--f) - 1)*var(--s)/2 - var(--b));
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
     ) 50%/calc(100%/var(--f)) 100% no-repeat content-box;
 //Note that I have added the content-box value to the background
 //We need this because we added padding and we only want the
//   background set to the content box, so we must explicitly
//    tell the background to stop there
     transform: scale(var(--f));
  transition: .5s;
}
img:hover {
  --f: 1.35; /* hover scale */
}

        }

        .final-explained{
            &:hover{
                --f: 1.2; /* hover scale */  
            }
            --s: 180px; /* image size */
  --b: 4px; /* border thickness */
  --c: #C02942; /* border color */
  --f: 1; /* initial scale */
//   created a new variable, --_g, for the
//    common parts to make things less cluttered
  --_g: 50%/calc(100%/var(--f)) 100% no-repeat content-box;
  --_o: calc((1/var(--f) - 1)*var(--s)/2 - var(--b));
            img {
  width: var(--s);
  aspect-ratio: 1;
  padding-top: calc(var(--s)/5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  outline: var(--b) solid var(--c);
  outline-offset: var(--_o);
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
     ) var(--_g), lightblue;
  transform: scale(var(--f));
  transition: .5s;
}
img ~ img {
    //Next, there’s a linear-gradient() in there as well
    //This creates the rectangle part of the mask. Its width
    //  is equal to the radial gradient’s width minus twice the
    //   border thickness:
    //calc(100% / var(--f) - 2 * var(--b))
    //The rectangle’s height is equal to half, 50%, of the element’s size

    //We also need the linear gradient placed at the horizontal
    //  center (50%) and offset from the top by the same
    //   value as the outline’s offset. I created another
    //    CSS variable, --_o, for the offset we previously defined

    // One of the confusing things here is that we need a negative 
    // offset for the outline (to move it from outside to inside) 
    // but a positive offset for the gradient (to move from top 
    // to bottom). So, if you’re wondering why we multiply the 
    // offset, --_o, by -1, well, now you know
  -webkit-mask:
    linear-gradient(#000 0 0) no-repeat
     50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
 mask:
    linear-gradient(#000 0 0) no-repeat
     50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
}
.box {
  width: var(--s);
  padding-top: calc(var(--s)/5);
  aspect-ratio: 1;
  outline: 1px solid red;
  background:
    linear-gradient(blue 0 0) no-repeat
     50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
    radial-gradient(circle closest-side,green 99%,#0000) var(--_g);
  transform: scale(var(--f));
  transition: .5s;
}
        }

        .final{
            img {
  --s: 280px; /* image size */
  --b: 5px; /* border thickness */
  --c: #C02942; /* border color */
  --f: 1; /* initial scale */
  
  width: var(--s);
  aspect-ratio: 1;
  padding-top: calc(var(--s)/5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  --_g: 50% / calc(100% / var(--f)) 100% no-repeat content-box;
  --_o: calc((1 / var(--f) - 1) * var(--s) / 2 - var(--b));
  outline: var(--b) solid var(--c);
  outline-offset: var(--_o);
  background: 
    radial-gradient(
      circle closest-side,
      #ECD078 calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
     ) var(--_g);
  -webkit-mask:
    linear-gradient(#000 0 0) no-repeat
     50% calc(1px - var(--_o)) / calc(100% / var(--f) - 2 * var(--b) - 2px) 50%,
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
    mask:
    linear-gradient(#000 0 0) no-repeat
     50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
  transform: scale(var(--f));
  transition: .5s;
}
img:hover {
  --f: 1.35; /* hover scale */
}
        }

        .bonus{
            img {
  --s: 200px; /* image size */
  --b: 6px; /* border thickness */
  --c: #ae3ec9; /* border color */
  --cb: #e9ecef; /* background color */
  --f: 1; /* initial scale */
  
  width: var(--s);
  aspect-ratio: 1;
  padding-top: calc(var(--s)/5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  --_g: 50%/calc(100%/var(--f)) 100% no-repeat content-box;
  --_o: calc((1/var(--f) - 1) * var(--s)/2 - var(--b));
  outline: var(--b) solid var(--c);
  outline-offset: var(--_o);
  background: 
    radial-gradient(
      circle closest-side,
      var(--cb) calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
     ) var(--_g);
  -webkit-mask:
    linear-gradient(#000 0 0) no-repeat
     50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
    mask:
    linear-gradient(#000 0 0) no-repeat
     50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%,
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
  transform: scale(var(--f));
  transition: .5s;
}
img:hover {
  --f: 1.4; /* hover scale */
}
        }
        
    </style>