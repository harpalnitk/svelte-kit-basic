<!-- https://css-tricks.com/css-only-infinite-and-circular-image-slider/ -->
<main class='flex-center'>
    <section class='basic'>
        <div class="gallery">
            <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher">
            <img src="https://picsum.photos/id/1082/400/400" alt="a piano">
            <img src="https://picsum.photos/id/158/400/400" alt="a live concert">
            <img src="https://picsum.photos/id/234/400/400" alt="Paris">
          </div>
    </section>
    <section class='basic-2'>
        <div class="gallery">
            <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher">
            <img src="https://picsum.photos/id/1082/400/400" alt="a piano">
            <img src="https://picsum.photos/id/158/400/400" alt="a live concert">
            <img src="https://picsum.photos/id/234/400/400" alt="Paris">
          </div>
    </section>
    <section class='basic-3'>
        <div class="gallery">
            <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher">
            <img src="https://picsum.photos/id/1082/400/400" alt="a piano">
            <img src="https://picsum.photos/id/158/400/400" alt="a live concert">
            <img src="https://picsum.photos/id/234/400/400" alt="Paris">
          </div>
    </section>
    <section class='basic-4'>
        <div class="gallery">
            <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher">
            <img src="https://picsum.photos/id/1082/400/400" alt="a piano">
            <img src="https://picsum.photos/id/158/400/400" alt="a live concert">
            <img src="https://picsum.photos/id/234/400/400" alt="Paris">
          </div>
    </section>
    <h3>Slider for n number of images using sass</h3>
    <div class="basic-5">
        <div class="gallery">
            <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher">
            <img src="https://picsum.photos/id/1082/400/400" alt="a piano">
            <img src="https://picsum.photos/id/158/400/400" alt="a live concert">
            <img src="https://picsum.photos/id/234/400/400" alt="Paris">
            <img src="https://picsum.photos/id/1011/400/400" alt="A women in kayak">
          </div>
    </div>
    </main>
    <style lang='scss'>
        @use 'sass:math';
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
            margin-bottom: 20rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .basic{
            .gallery  {
  --s: 280px; /* control the size */
//using CSS Grid to place all the images in the same area above each other
  display: grid;
  width: var(--s);
  aspect-ratio: 1;
  padding: calc(var(--s) / 20); /* we will see the utility of this later */
  border-radius: 50%;
}
.gallery > img {
  grid-area: 1 / 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

//We talked about rotating a big circle, but in reality,
//  we will rotate each image individually creating the illusion
//   of a big rotating circle. So, let’s define an animation,
//    m, and apply it to the image elements

.gallery > img {
  /* same as before */
  animation: m 8s infinite linear;

  //By default, the CSS transform-origin property is equal to center 
//   (or 50% 50%) which makes the image rotate around its center,
//    but we don’t need it to do that. We need the image to rotate
//     around the center of the big circle that contains our
//      images hence the new value for transform-origin.

// Since R is equal to 0.707 * S, we can say that R is equal
//  to 70.7% of the image size. 
  transform-origin: 50% 120.7%;
}

@keyframes m {
  100% { transform: rotate(-360deg); }
}
        }
//don’t forget that we have stacked all the images on top of each
//  other. All of them are rotating at the same time and only the
//   top image is visible. What we need is to delay the animation
//    of each image to avoid this overlap.
        .basic-2{
            .gallery  {
  --s: 280px; /* control the size */
  
  display: grid;
  width: var(--s);
  aspect-ratio: 1;
  padding: calc(var(--s)/20);
  border-radius: 50%;
  position: relative;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transform-origin: 50% 120.7%;
}
.gallery > img {
  animation: m 8s infinite linear;
}
.gallery > img:nth-child(2) { animation-delay: -2s; } /* -1 * 8s / 4 */
.gallery > img:nth-child(3) { animation-delay: -4s; } /* -2 * 8s / 4 */
.gallery > img:nth-child(4) { animation-delay: -6s; } /* -3 * 8s / 4 */

@keyframes m {
  100% {transform: rotate(-360deg)}
}

        }
//If we hide the overflow on the container we can already see a slider,
//  but we will update the animation a little so that each image remains
//   visible for a short period before it moves along.
        .basic-3{
            .gallery  {
  --s: 280px; /* control the size */
  
  display: grid;
  width: var(--s);
  aspect-ratio: 1;
  overflow: hidden;
  padding: calc(var(--s)/20);
  border-radius: 50%;
  position: relative;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transform-origin: 50% 120.7%;
}
.gallery > img {
  animation: m 8s infinite cubic-bezier(.5,-0.2,.5,1.2);
}
.gallery > img:nth-child(2) {animation-delay: -2s}
.gallery > img:nth-child(3) {animation-delay: -4s}
.gallery > img:nth-child(4) {animation-delay: -6s}
//For each 90deg (360deg/4, where 4 is the number of images) we 
// will add a small pause. Each image will remain visible for 5% 
// of the overall duration before we slide to the next one 
// (27%-22%, 52%-47%, etc.). I’m going to update the 
// animation-timing-function using a cubic-bezier() 
// function to make the animation a bit fancier
@keyframes m {
  0%,3%    {transform: rotate(0)}
  22%,27%  {transform: rotate(-90deg)}
  47%,52%  {transform: rotate(-180deg)}
  72%,77%  {transform: rotate(-270deg)}
  98%,100% {transform: rotate(-360deg)}
}
        }

        .basic-4{
            .gallery  {
  --s: 280px; /* control the size */
  
  display: grid;
  width: var(--s);
  aspect-ratio: 1;
  overflow: hidden;
  padding: calc(var(--s)/20);
  border-radius: 50%;
  position: relative;
  clip-path: circle(49.5%); /* to avoid a few glitch cause by overflow: hidden */
}
//the colorful circular border that rotates around our images. We can
// use a pseudo-element on the .gallery wrapper to make it
//I have created a circle with a repeating conic gradient for the
//  background while using a masking trick that only shows the
//   padded area. Then I apply to it the same animation we 
//   defined for the images
.gallery::after {
  content: "";
  position: absolute;
  inset: 0;
  padding: inherit;
  border-radius: inherit;
  background: repeating-conic-gradient(#789048 0 30deg,#DFBA69 0 60deg);
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  transform-origin: 50% 120.7%;
}
.gallery::after,
.gallery > img {
  animation: m 8s infinite cubic-bezier(.5,-0.2,.5,1.2);
}
.gallery > img:nth-child(2) {animation-delay: -2s}
.gallery > img:nth-child(3) {animation-delay: -4s}
.gallery > img:nth-child(4) {animation-delay: -6s}

@keyframes m {
  0%,3%    {transform: rotate(0)}
  22%,27%  {transform: rotate(-90deg)}
  47%,52%  {transform: rotate(-180deg)}
  72%,77%  {transform: rotate(-270deg)}
  98%,100% {transform: rotate(-360deg)}
}  
        }

        .basic-5{
           

$n:5; /* number of images*/

.gallery  {
  --s: 280px; /* control the size */
  --d: 8s; /* animation duration */
  
  display: grid;
  width: var(--s);
  aspect-ratio: 1;
  overflow: hidden;
  padding: calc(var(--s)/20);
  border-radius: 50%;
  position: relative;
  clip-path: circle(49.5%); /* to avoid a few glitch caused by overflow: hidden */
}
.gallery::after {
  content: "";
  position: absolute;
  inset: 0;
  padding: inherit;
  border-radius: inherit;
  background: repeating-conic-gradient(#789048 0 30deg,#DFBA69 0 60deg);
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  //R = S / (2 * sin(180deg / N))
  //If we express that as a percentage, that gives us:
  //R = 100% / (2 * sin(180deg / N)) = 50% / sin(180deg / N)
  //…which means the transform-origin value is equal to:
  //transform-origin: 50% (50% / math.sin(180deg / $n) + 50%);
  transform-origin: 50% (math.div(50%, math.sin(math.div(180deg,$n))) + 50%);
}
.gallery::after,
.gallery > img {
  animation: m var(--d) infinite cubic-bezier(.5,-0.2,.5,1.2);
}
@for $i from 2 to ($n + 1) {
  .gallery > img:nth-child(#{$i}) {
    //The formula for the delay is (1 - $i)*duration/$n, 
    animation-delay: calc(#{math.div((1 - $i),$n)}*var(--d));
  }
}

@keyframes m {
  0%,3%    {transform: rotate(0)}
  @for $i from 1 to $n {
    //The step between each state is equal to 25% — which is 100%/4 — and we add a -90deg angle — which is -360deg/4. That means we can write our loop like this instead:
    // #{($i / $n) * 100}% { transform: rotate(#{($i / $n) * -360}deg); }
    //Since each image takes 5% of the animation, we change this:
    //#{($i / $n) * 100}%
    //…with this:
    //#{($i / $n) * 100 - 2}%, #{($i / $n) * 100 + 3}%
    #{math.div($i, $n)*100 - 2}%,#{math.div($i, $n)*100 + 3}% {transform: rotate(#{math.div($i, $n)*-360}deg)}  
  }
  98%,100% {transform: rotate(-360deg)}
}
        }
        
    </style>