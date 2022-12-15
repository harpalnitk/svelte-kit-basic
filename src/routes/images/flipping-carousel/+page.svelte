<!-- https://css-tricks.com/css-infinite-slider-flipping-through-polaroid-images/ -->
<main class='flex-center'>
    <h3>All images stacked on top of each other</h3>
    <section class='basic-1'>
        <div class="gallery">
            <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
            <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
            <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
            <img src="https://picsum.photos/id/325/400/400" alt="a girl in the forest">
            <img src="https://picsum.photos/id/65/400/400" alt="a girl">
          </div> 
    </section>
    <h3>Basic with 2 images</h3>
    <section class="basic-2">
        <div class="gallery">
            <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
            <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
          </div>
    </section>
    <h3>Basic with 3 images and variables</h3>
    <section class="basic-3">
        <div class="gallery">
            <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
            <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
            <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
          </div>
    </section>
    <h3>solving z-index problem</h3>
<section class="basic-4">
    <div class="gallery">
        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
        <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
      </div>
</section>
<h3>Solving last image problem</h3>
<section class="basic-5">
    <div class="gallery">
        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
        <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
      </div>
</section>
<h3>reducing redundant code</h3>
<section class="basic-6">
    <div class="gallery">
        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
        <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
      </div>
</section>
<h3>for n number of images</h3>
<section class="basic-7">
    <div class="gallery">
        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
        <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
        <img src="https://picsum.photos/id/325/400/400" alt="a girl in the forest">
        <img src="https://picsum.photos/id/65/400/400" alt="a girl">
      </div>
</section>
<h3>final with rotated images</h3>
<section class="basic-8">
    <div class="gallery">
        <img src="https://picsum.photos/id/1004/400/400" alt="a lovely kiss in the night">
        <img src="https://picsum.photos/id/1013/400/400" alt="a women inside a car">
        <img src="https://picsum.photos/id/1066/400/400" alt="a baby">
        <img src="https://picsum.photos/id/325/400/400" alt="a girl in the forest">
        <img src="https://picsum.photos/id/65/400/400" alt="a girl">
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

        .basic-1{
            .gallery  {
  display: grid;
  width: 220px; /* controls the size */
}
.gallery > img {
  grid-area: 1 / 1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
}
        }
//We take that last image and slide it to the right until
//  it reveals the next image in the stack. Then we decrease 
//  the image’s z-index value then we slide it back into the
//   deck. And since its z-index value is lower than the rest
//    of the images, it becomes the last image in the stack.
        .basic-2{
            .gallery  {
  display: grid;
  width: 220px;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
  z-index: 2;
}
.gallery img:last-child {
  margin-top: 30px;
  animation: slide 2s linear forwards paused;
}
.gallery:hover img {
  animation-play-state: running;
}

@keyframes slide {
  0% {
    transform: translateX(0%);
    z-index: 2;
  }
  50% {
    transform: translateX(120%);
    z-index: 2;
  }
  50.1% {
    transform: translateX(120%);
    z-index: 1;
  }
  100% {
    transform: translateX(0%);
    z-index: 1;
  }
}
        }

        .basic-3{
            .gallery  {
  
  display: grid;
  width: 220px;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
  animation: slide 6s infinite;
}
//Our animation is divided into three parts: “slide to right”,
//  “slide to left” and “don’t move”. We can easily identify the
//   delay between each image. If we consider that the first 
//   image starts at 0s, and the duration is equal to 6s,
//    then the second one will start at -2s and the third
//     one at -4s
.gallery > img:nth-child(2) { animation-delay: -2s; } 
.gallery > img:nth-child(3) { animation-delay: -4s; }
//We can also see that the “don’t move” part takes two-thirds 
// of the whole animation (2*100%/3) while the “slide to right”
//  and “slide to left” parts take one-third of it together — 
//  so, each one is equal to 100%/6 of the total animation.
//We can write our animation keyframes like this:

// @keyframes slide {
//   0%     { transform: translateX(0%); }
//   16.67% { transform: translateX(120%); }
//   33.34% { transform: translateX(0%); }
//   100%   { transform: translateX(0%); } 
// }
@keyframes slide {
  0%     {transform: translateX(0%)  ;z-index: 2;}
  16.66% {transform: translateX(120%);z-index: 2;}
  16.67% {transform: translateX(120%);z-index: 1;} 
  33.34% {transform: translateX(0%)  ;z-index: 1;}
  100%   {transform: translateX(0%)  ;z-index: 1;}  
} 
//Instead of defining one state at the 16.67% (100%/6)
//  point in the timeline, we are defining two states 
//  at nearly identical points (16.66% and 16.67%) where
//   the z-index value decreases before we slide back
//    the image back to the deck.
        }

        .basic-4{
            .gallery  {
  
  display: grid;
  width: 220px;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
  animation: slide 6s infinite;
}

.gallery > img:nth-child(2) { animation-delay: -2s; } 
.gallery > img:nth-child(3) { animation-delay: -4s; }


@keyframes slide {
  0%     { transform: translateX(0%);   z-index: 2; }
  16.66% { transform: translateX(120%); z-index: 2; }
  16.67% { transform: translateX(120%); z-index: 1; } /* we update the z-order here */
  33.34% { transform: translateX(0%);   z-index: 1; }
  66.33% { transform: translateX(0%);   z-index: 1; }
  66.34% { transform: translateX(0%);   z-index: 2; } /* and also here */
  100%   { transform: translateX(0%);   z-index: 2; }  
}
        }

        .basic-5{
            .gallery  {
  
  display: grid;
  width: 220px;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
  animation: slide 6s infinite;
}
.gallery > img:last-child {
  animation-name: slide-last;
}

.gallery > img:nth-child(2) { animation-delay: -2s; } 
.gallery > img:nth-child(3) { animation-delay: -4s; }


@keyframes slide {
  0%     {transform: translateX(0%)  ;z-index: 2;}
  16.66% {transform: translateX(120%);z-index: 2;}
  16.67% {transform: translateX(120%);z-index: 1;} 
  33.34% {transform: translateX(0%)  ;z-index: 1;}
  66.33% {transform: translateX(0%)  ;z-index: 1;}
  66.34% {transform: translateX(0%)  ;z-index: 2;} 
  100%   {transform: translateX(0%)  ;z-index: 2;}  
}
//Considering the previous adjustment we made, the third
//  image will jump on the top before the first image slides.
//   It only happens in this situation because the next image
//    that moves after the first image is the last image
//     which has a higher order in the DOM. The rest of 
//     the images are fine because we have N, then N - 1,
//      then we go from 3 to 2, and 2 to 1… but then we 
//      go from 1 to N.

// To avoid that, we will use the following keyframes for the last image:
@keyframes slide-last {
  0%     {transform: translateX(0%)  ;z-index: 2;}
  16.66% {transform: translateX(120%);z-index: 2;}
  16.67% {transform: translateX(120%);z-index: 1;} 
  33.34% {transform: translateX(0%)  ;z-index: 1;}
  83.33% {transform: translateX(0%)  ;z-index: 1;}
  83.34% {transform: translateX(0%)  ;z-index: 2;} 
  100%   {transform: translateX(0%)  ;z-index: 2;}  
}
        }

        .basic-6{
            .gallery  {
  
  display: grid;
  width: 220px;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
  animation: slide 6s infinite;
} 
.gallery > img {
  z-index: 2;
  animation: 
    slide 6s infinite,
    //Note that we use steps(1) on the z-index animation.
    //  That’s because I want to abruptly change the z-index value,
    //   unlike the sliding animation where we want smooth movement.
    z-order 6s infinite steps(1);
}
.gallery > img:last-child {
  animation-name: slide, z-order-last;
}
.gallery > img:nth-child(2) { animation-delay: -2s; } 
.gallery > img:nth-child(3) { animation-delay: -4s; }

@keyframes slide {
  16.67% { transform: translateX(120%); }
  33.33% { transform: translateX(0%); }
}
@keyframes z-order {
  16.67%,
  33.33% { z-index: 1; }
  66.33% { z-index: 2; }
}
@keyframes z-order-last {
  16.67%,
  33.33% { z-index: 1; }
  83.33% { z-index: 2; }
}
        }
//After “slide to right” and “slide to left”, the image should 
// stay put until the rest of the images go through the sequence.
//  So the “don’t move” part needs to take the same amount of
//   time as (N - 1) as “slide to right” and “slide to left”.
//    And within one iteration, N images will slide. So, 
//    “slide to right” and “slide to left” both take 100%/N 
//    of the total animation timeline. The image slides away
//     from the pile at (100%/N)/2 and slides back at 100%/N .
//We can change this:
// @keyframes slide {
//   16.67% { transform: translateX(120%); }
//   33.33% { transform: translateX(0%); }
// }
//…to this:
// @keyframes slide {
//   #{50/$n}%  { transform: translateX(120%); }
//   #{100/$n}% { transform: translateX(0%); }
// }


//It’s the same logic with the stacking order where we will have this:
// @keyframes z-order {
//   #{50/$n}%,
//   #{100/$n}% { z-index: 1; }
//   66.33% { z-index: 2; }
// }

//We still need to update the 66.33% point. That’s supposed 
// to be where the image resets its z-index before the end of
//  the animation. At that same time, the next image starts to
//   slide. Since the sliding part takes 100%/N, the reset 
//   should happen at 100% - 100%/N:

// @keyframes z-order {
//   #{50/$n}%,
//   #{100/$n}% { z-index: 1; }
//   #{100 - 100/$n}% { z-index: 2; }
// }


//But for our z-order-last animation to work, it should happen
//  a bit later in the sequence. Remember the fix we did for the
//   last image? Resetting the z-index value needs to happen when 
//   the first image is out of the pile and not when it starts
//    sliding. We can use the same reasoning here in our keyframes:

// @keyframes z-order-last {
//   #{50/$n}%,
//   #{100/$n}% { z-index: 1; }
//   #{100 - 50/$n}% { z-index: 2; }
// }
        .basic-7{
            $n:5; /* number of images*/

.gallery  {
  --d: 10s; /* duration */
  
  display: grid;
  width: 220px;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
  z-index: 2;
  animation: 
    slide var(--d) infinite,
    z-order var(--d) infinite steps(1);
}
.gallery img:last-child {
  animation-name: slide, z-order-last;
}

@for $i from 2 to ($n + 1) {
  .gallery > img:nth-child(#{$i}) {
    animation-delay: calc(#{(1 - $i)/$n}*var(--d));
  }
}

@keyframes slide {
  #{50/$n}%  {transform: translateX(120%)}
  #{100/$n}% {transform: translateX(0%)  }
}

@keyframes z-order {
  #{50/$n}%,
  #{100/$n}% {z-index: 1}
  #{100 - 100/$n}% {z-index: 2}
}

@keyframes z-order-last {
  #{50/$n}%,
  #{100/$n}% {z-index: 1}
  #{100 - 50/$n}% {z-index: 2}
}
        }
        .basic-8{
            $n:5; /* number of images*/

.gallery  {
  --d: 10s; /* duration */
  
  display: grid;
  width: 220px;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 10px solid #f2f2f2;
  box-shadow: 0 0 4px #0007;
  z-index: 2;
  animation: 
    slide var(--d) infinite,
    z-order var(--d) infinite steps(1);
}
.gallery img:last-child {
  animation-name: slide, z-order-last;
}

@for $i from 1 to ($n + 1) {
  .gallery > img:nth-child(#{$i}) {
    animation-delay: calc(#{(1 - $i)/$n}*var(--d));
    --r: #{(-20 + random(40))*1deg}; ///* a random angle between -20deg and 20deg */
  }
}

@keyframes slide {
  #{50/$n}%  {transform: translateX(120%) rotate(var(--r))}
  0%,
  100%,
  #{100/$n}% {transform: translateX(0%)   rotate(var(--r))}
}

@keyframes z-order {
  #{50/$n}%,
  #{100/$n}% {z-index: 1}
  #{100 - 100/$n}% {z-index: 2}
}

@keyframes z-order-last {
  #{50/$n}%,
  #{100/$n}% {z-index: 1}
  #{100 - 50/$n}% {z-index: 2}
}
        }
        
    </style>