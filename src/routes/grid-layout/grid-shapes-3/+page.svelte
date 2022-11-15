<!-- //https://css-tricks.com/css-grid-and-custom-shapes-part-3/ -->
<main class='flex-center'>
    <h3>Die Cut</h3>
    <section class='die-cut'>
        <div class="gallery">
            <img src="https://picsum.photos/id/815/400/400" alt="Two hands creating a heart and showing the sun">
            <img src="https://picsum.photos/id/872/400/400" alt="The mountain">
            <img src="https://picsum.photos/id/603/400/400" alt="a river">
            <img src="https://picsum.photos/id/823/400/400" alt="a women with a camera">
          </div>
    </section>
    <h3>Split Image reveal Basic</h3>
    <section class="split-image-reveal-basic">
        <div class="gallery">
            <img src="https://picsum.photos/id/582/400/400" alt="a wolf">
            <img src="https://picsum.photos/id/1074/400/400" alt="a lioness">
          </div>
    </section>
    <h3>Split Image reveal</h3>
    <section class="split-image-reveal">
        <div class="gallery">
            <img src="https://picsum.photos/id/582/400/400" alt="a wolf">
            <img src="https://picsum.photos/id/1074/400/400" alt="a lioness">
          </div>
    </section>
    <h3>Pie Image</h3>
    <section class="pie-image">
        <div class="gallery">
            <img src="https://picsum.photos/id/174/400/400" alt="a hot air balloon">
            <img src="https://picsum.photos/id/188/400/400" alt="an old city">
            <img src="https://picsum.photos/id/211/400/400" alt="a small boat">
            <img src="https://picsum.photos/id/28/400/400" alt="a forest">
          </div> 
    </section>
    <h3>Mosaic</h3>
    <section class="mosaic">
        <div class="gallery">
            <img src="https://picsum.photos/id/25/600/600" alt="small trees">
            <img src="https://picsum.photos/id/454/500/500" alt="a girl with a camera">
            <img src="https://picsum.photos/id/222/600/600" alt="the sky">
            <img src="https://picsum.photos/id/152/500/500" alt="some purple flowers">
            <img src="https://picsum.photos/id/564/500/500" alt="a canyon">
          </div>
    </section>
    <h3>Complex Mosaic</h3>
    <section class="complex-mosaic">
        <div class="gallery">
            <img src="https://picsum.photos/id/25/500/500" alt="small trees">
            <img src="https://picsum.photos/id/454/500/500" alt="a girl with a camera">
            <img src="https://picsum.photos/id/222/600/600" alt="the sky">
            <img src="https://picsum.photos/id/152/500/500" alt="some purple flowers">
            <img src="https://picsum.photos/id/564/800/400" alt="a canyon">
          </div>
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
        .die-cut{
            background: #81A8B8;
            .gallery {
  --g: 6px; /* the gap */
  
  display: grid;
  width: 450px; /* the size */
  aspect-ratio: 1;/* equal height */
  //asically, this is a square grid with three equal columns.
  grid: auto-flow 1fr/repeat(3,1fr);   //is equivalent to
  //grid-template-columns: repeat(3, 1fr);
  //grid-auto-rows: 1fr;
  gap: var(--g);
}
.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  cursor: pointer;
  transition: .5s
}
.gallery img:hover {
  filter: grayscale(0);
}
//second and third images are explicitly placed on the grid, allowing the first and last images to lay out automatically around them
.gallery img:nth-child(2) {
  grid-area: 1/2/span 2/span 2;
  //is equivalent to
  
 /*  grid-row-start: 1;  1st row */
/*   grid-column-start: 2;  2nd column */
/*   grid-row-end: span 2; take 2 rows */
/*   grid-column-end: span 2;  take 2 columns */
  

//We can cut the bottom-left corner of the second image
  clip-path: polygon(0 0,100% 0,100% 100%,calc(50% + var(--g)/4) 100%,0 calc(50% - var(--g)/4))
}
.gallery img:nth-child(3) {
  grid-area: 2/1/span 2/span 2;

  //And the top-right corner of the third one:
  clip-path: polygon(0 0,calc(50% - var(--g)/4) 0,100% calc(50% + var(--g)/4),100% 100%,0 100%);
}

//Yes, the second and third images are overlapped in the middle.
//  That’s no mistake! I purposely spanned them on top of one
//   another so that I can apply a clip-path to cut a portion 
//   from each one and get the final result
        }



.split-image-reveal-basic{
    .gallery {
  --g: 8px; /* the gap */
  
  display: grid;
}
.gallery > img {

    //If we don’t consider the gap (defined as --g in the code) 
    //between the images, then the three values of --_p are 0%, 
    //50%, and -50%.
  --_p: calc(-1*var(--g));
  grid-area: 1/1;
  width: 350px; /* control the size */
  aspect-ratio: 1;
  cursor: pointer;

  //It’s a little known fact that clip-path accepts values
  // outside the 0%-100% range, which allows us to create 
  //“overflowing” shapes. (Yes, I just coined this. You’re welcome.)
  // This way, we only have to work with three points instead of
  // the five it would take to make the same shape from the 
  //visible parts. Optimized CSS for the win
  box-shadow: 0 0 0 200px red;
  transition: .4s .1s;
}
.gallery > img + img {
  box-shadow: 0 0 0 200px blue;
}
.gallery > img:first-child {
  clip-path: polygon(0 0, calc(100% + var(--_p)) 0 , 0 calc(100% + var(--_p)))
}
.gallery > img:last-child {
  clip-path: polygon(100% 100%, 100% calc(0% - var(--_p)), calc(0% - var(--_p)) 100%)
}
.gallery:hover > img:last-child,
.gallery:hover > img:first-child:hover{
  --_p: calc(50% - var(--g));
}
.gallery:hover > img:first-child,
.gallery:hover > img:first-child:hover + img{
  --_p: calc(-50% - var(--g));
}
}


        .split-image-reveal{
            background: #3FB8AF;
            .gallery {
  --g: 8px; /* the gap */
  
  display: grid;
  clip-path: inset(1px); /* to avoid visual glitchs */
}
.gallery > img {
  --_p: calc(-1*var(--g));
  //Two images that are the same size are stacked on 
  //top of each other (thanks to grid-area: 1 / 1)
  grid-area: 1/1;
  width: 350px; /* control the size */
  aspect-ratio: 1;
  cursor: pointer;
  transition: .4s .1s;
}

//Notice, though that we have three different states:

// 1.When no images are hovered, half of each image is revealed.
// 2.When we hover over the first image, it is more fully revealed but retains a small corner clip.
// 3.When we hover over the second image, the first one has only a small triangle visible.

//In each case, we have a triangular shape. That means we need a three-point
// polygon for the clip-path value
.gallery > img:first-child {
  clip-path: polygon(0 0, calc(100% + var(--_p)) 0 , 0 calc(100% + var(--_p)))
}
.gallery > img:last-child {
  clip-path: polygon(100% 100%, 100% calc(0% - var(--_p)), calc(0% - var(--_p)) 100%)
}
.gallery:hover > img:last-child,
.gallery:hover > img:first-child:hover{
  --_p: calc(50% - var(--g));
}
.gallery:hover > img:first-child,
.gallery:hover > img:first-child:hover + img{
  --_p: calc(-50% - var(--g));
}
        }

   //need to see the video in tutorial to understand
   // 7 points polygon used
        .pie-image{
            background: #3B8686;
            .gallery {
  --g: 8px;   /* the gap */
  --s: 400px; /* the size */
  
  display: grid;
  border-radius: 50%;
}
.gallery > img {
  grid-area: 1/1;
  width: 400px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  transform: translate(var(--_x,0),var(--_y,0));
  cursor: pointer;
  z-index: 0;
  transition: .3s, z-index 0s .3s;
}
.gallery img:hover {
  --_i: 1;
  z-index: 1;
  transition: transform .2s, clip-path .3s .2s, z-index 0s;
}
.gallery:hover img {
  transform: translate(0,0);
}
.gallery > img:nth-child(1) {
  clip-path: polygon(50% 50%,calc(50%*var(--_i,0)) calc(120%*var(--_i,0)),0 calc(100%*var(--_i,0)),0 0,100% 0,100% calc(100%*var(--_i,0)),calc(100% - 50%*var(--_i,0)) calc(120%*var(--_i,0)));
  --_y: calc(-1*var(--g))
}
.gallery > img:nth-child(2) {
  clip-path: polygon(50% 50%,calc(100% - 120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100% - 100%*var(--_i,0)) 0,100% 0,100% 100%,calc(100% - 100%*var(--_i,0)) 100%,calc(100% - 120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
  --_x: var(--g)
}
.gallery > img:nth-child(3) {
  clip-path: polygon(50% 50%,calc(100% - 50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)),100% calc(100% - 120%*var(--_i,0)),100% 100%,0 100%,0 calc(100% - 100%*var(--_i,0)),calc(50%*var(--_i,0)) calc(100% - 120%*var(--_i,0)));
  --_y: var(--g)
}
.gallery > img:nth-child(4) {
  clip-path: polygon(50% 50%,calc(120%*var(--_i,0)) calc(50%*var(--_i,0)),calc(100%*var(--_i,0)) 0,0 0,0 100%,calc(100%*var(--_i,0)) 100%,calc(120%*var(--_i,0)) calc(100% - 50%*var(--_i,0)));
  --_x: calc(-1*var(--g))
}
        }



        //MOSAIC
        .mosaic{

            //let’s imagine what things are like if clip-path were
            // taken out of the
            // mix and all we had were five overlapping images

            //We need to find how many columns and rows we need for the grid:

//       1. We have two big images placed next to each other that 
// each fill half the grid width and the full grid height. 
// That means will probably need two columns (one for both
//  images) and one row (for the full height of the grid).
//       2. We have the image in the middle that overlaps the
//  two other images. That means we actually need four 
//  columns instead of two, though we still only need 
//  the one row.
//        3. The last two images each fill half the grid, 
// just like the first two images. But they’re only 
// half the height of the grid. We can use the existing
//  columns we already have, but we’re going to need 
//  two rows instead of one to account for these images
//   being half the grid height.
            .gallery {
  display: grid;
  width: min(800px,100%); /* control the size here */
  margin: 50px auto;
  grid: repeat(2,1fr)/repeat(4,1fr); 
  //we have the first two images that are square next to each 
//   other having the same size. This means that the width of the
//    grid needs to be equal to twice its height. Hence, aspect-ratio: 2.
  aspect-ratio: 2;
}
.gallery img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(30%);
  transition: .3s;
}
.gallery:hover img {
  filter: grayscale(1)
}
.gallery img:hover {
  filter: grayscale(0%)
}
//first rectangle
.gallery img:nth-child(1) {
    //row start/column start/span row/span column
  grid-area: 1/1/span 2/span 2;
  clip-path: polygon(0 0,100% 0,0 100%);
}
//rhombus
.gallery img:nth-child(2) {
  grid-area: 1/2/span 2/span 2;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
}
//last rectangle
.gallery img:nth-child(3) {
  grid-area: span 2/span 2/-1/-1;
  clip-path: polygon(0 0,100% 0,100% 100%);
}
//first lower triangle
.gallery img:nth-child(4) {
  grid-area: 2/1/span 1/span 2;
  clip-path: polygon(50% 0,100% 100%,0 100%);
}
//second lower triangle
.gallery img:nth-child(5) {
  grid-area: span 1/span 2/-1/-1;
  clip-path: polygon(50% 0,100% 100%,0 100%);
}
        }


        //COMPLEX MOSAIC
        .complex-mosaic{
            .gallery {
  display: grid;
  width: min(800px,100%); /* control the size here */
  margin: 50px auto;

  //Based on the lines in that image, we’re going to have a 
  //total of five columns and four rows.

  //grid: rows/columns
  grid: 3fr 1fr 2fr 2fr/1fr 1fr 2fr 3fr 5fr; 
  aspect-ratio: 3/2;
}
.gallery img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(30%);
  transition: .3s;
}
.gallery:hover img {
  filter: grayscale(1)
}
.gallery img:hover {
  filter: grayscale(0%)
}
.gallery img:nth-child(1) {
  grid-area: 1/1/span 2/span 3;
  clip-path: polygon(0 0,100% 0,0 100%);
  z-index: 1;
}
//As you can see, the image in the middle (the one with the camera)
//  doesn’t need a clip-path. because the other images overlap it,
//   giving us the shape without any additional work! And notice
//    that we can use the same overflowing three-point clip-path 
//    concept we used earlier on the image in the bottom-left
//     to keep the code smaller there as well

//and add z-index above
.gallery img:nth-child(2) {
  grid-area: 1/2/span 3/span 3;
  //clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
}
.gallery img:nth-child(3) {
  grid-area: 1/span 2/-1/-1;
  clip-path: polygon(0 0,100% 0,100% 100%);
}
.gallery img:nth-child(4) {
  grid-area: span 3/1/-1/span 3;
  clip-path: polygon(25% 0,100% 60%,50% 100%,0 100%,0 20%);
}
.gallery img:nth-child(5) {
  grid-area: span 3/span 3/-1/-1;
  clip-path: polygon(50% 0,100% 100%,0 100%);
}
        }
        
    </style>