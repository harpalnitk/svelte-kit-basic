<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Conic Gradient Spinner'></BasicPage>


<main>
   <!-- CIRCLE 
      I first created a short <path> that represents the 
       shape of the ring and used it as 
       a clip-path on a simple <rect> element. -->
           <div class="part-1">
            <svg viewBox="0 0 100 100">
    
                <clipPath id="clip">
                  <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 8 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84" />
                </clipPath>
            
                <rect x="0" y="0" width="100" height="100" clip-path="url(#clip)" />
            </svg>
           </div>

           <!--- GRADIENT OF 5 COLORS
            The last step was to replace the <rect> with 
               something else that supports conic gradients,
                and the simplest way I’ve found is to use an 
                SVG <foreignObject> element with a regular <div>
                     inside it, and a conic-gradient as a 
                     background-image. Then all I needed to 
                     do was to set the clip-path on the 
                     <foreignObject> element, and that’s it.-->
           <div class="part-2">
            <svg viewBox="0 0 100 100">
    
                <clipPath id="clip">
                  <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 8 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84" />
                </clipPath>
            
                <foreignObject x="0" y="0" width="100" height="100" clip-path="url(#clip)">
                    <div class="gradient" xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
            </svg>
           </div>
           <!--
            SPIN 
            
            This type of animation is actually fairly easy with SVG.
             All we really need is a trick using stroke-dasharray and
              stroke-dashoffset. That was my starting point. I created
               a new <path> in the center of the ring, removed the fill,
                  added a stroke with the right stroke-width, and then
                   worked on the animation.

It took me some playing around to get the movement 
just like the designers wanted it. I ended up using 
two animations, actually: one controls the stroke-dashoffset, 
and the second rotates the entire <path> a full turn.-->
           <div class="part-3">
            <svg viewBox="0 0 100 100">
              <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
            </svg>
           </div>
<!--But, since the clip-path property refers to the fill
   of the shape, animating the stroke meant I had to
    solve one of two problems: I could either find a
     different way to animate the movement, or find a
      different way to add the colors to the stroke.
    
    .logoBlend {
  mix-blend-mode: lighten;
}



A lighten blend mode looks at the RGB colors of each
 pixel of the rendered element, compares it to the RGB
  value of the background pixel that’s behind it, and
   keeps whichever is highest. That means that the parts
   of the element that are white will remain white, and 
   the dark parts will get the values of the background pixel.

By adding a white <rect> to the black path, I
   essentially blocked anything that’s behind it.
    Meanwhile, everything that’s behind the animated
     black stroke is visible. That meant I could bring
      back the <foreignObject> with the conic-gradient,
         put it behind the mix-blend-mode layer,
          and give it a simple rotate animation to 
          match the design
    -->
           <div class="part-4">
            <svg viewBox="0 0 100 100">

              <foreignObject class="logoBack" x="0" y="0" width="100" height="100">
                <div class="logoGradient" xmlns="http://www.w3.org/1999/xhtml"></div>
              </foreignObject>
          
              <g class="logoBlend">
                  <rect x="0" y="0" width="100" height="100" />
                  <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
              </g>
          </svg>
           </div>
<!--The Lottie animation had a “start animation” where 
  the small orange dot grows into view, and I had to add 
  it to my animation as well. I added a short 0.5s delay
   to all three animations as well as a scaling animation
    in the beginning.-->
           <div class="part-5">
            <svg viewBox="0 0 100 100">

              <foreignObject class="logoBack"  x="0" y="0" width="100" height="100">
                <div class="logoGradient" xmlns="http://www.w3.org/1999/xhtml"></div>
              </foreignObject>
          
              <g class="logoBlend">
                  <rect x="0" y="0" width="100" height="100" />
                  <path d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92" />
              </g>
          </svg>
           </div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    div {
        display: flex;
        justify-content: center;
    }
    .part-1{

        svg {
  max-width: 240px;
}

rect {
  fill: orange;
}
    }

    .part-2{
        svg {
  max-width: 240px;
}

div.gradient {
  width: 100px; height: 100px;
  border-radius: 50%;
  background-image: conic-gradient(from 270deg, #ff4800 10%, #dfd902 35%, #20dc68, #0092f4, #da54d8 72% 75%, #ff4800 95%);
}
    }

    .part-3{
      svg {
  max-width: 240px;
}

path {
  stroke: black;
  stroke-width: 8;
  stroke-dasharray: 288.5;
  stroke-linecap: round;
  fill: none;
  transform-origin: 50px 50px;
  animation:
    pathStroke 3.75s infinite ease-in-out,
    pathRotate 7.5s infinite cubic-bezier(1,.5,0,.5);
}

@keyframes pathStroke {
  0% {  stroke-dashoffset: -288.5; }
  40%, 70% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 288.5; }
}

@keyframes pathRotate {
  0% {  transform: rotate(0deg); }
  50% { transform: rotate(-540deg); }
  100% { transform: rotate(-1080deg); }
}
    }


    .part-4{
      svg {
  max-width: 240px;
}

foreignObject.logoBack {
  transform-origin: 50px 50px;
  animation: colorRotate 7.5s infinite linear;
}

div.logoGradient {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(from 270deg, #ff4800 10%, #dfd902 35%, #20dc68, #0092f4, #da54d8 72% 75%, #ff4800 95%);
}

g.logoBlend {
  mix-blend-mode: lighten;
}

g.logoBlend > rect {
  fill: white;
}

g.logoBlend > path {
  stroke: black;
  stroke-width: 8;
  stroke-dasharray: 288.5;
  stroke-linecap: round;
  fill: none;
  transform-origin: 50px 50px;
  animation:
    pathStroke 3.75s infinite ease-in-out,
    pathRotate 7.5s infinite cubic-bezier(1,.5,0,.5);
}

@keyframes colorRotate {
  from { transform: rotate(270deg); }
  to { transform: rotate(-90deg); }
}

@keyframes pathStroke {
  0% {  stroke-dashoffset: -288.5; }
  40%, 70% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 288.5; }
}

@keyframes pathRotate {
  0% {  transform: rotate(0deg); }
  50% { transform: rotate(-540deg); }
  100% { transform: rotate(-1080deg); }
}
    }

    .part-5{
      svg {
  max-width: 140px;
  transform-origin: bottom;
  animation: scaleStart 0.5s ease-out forwards;
}

foreignObject.logoBack {
  transform: rotate(270deg);
  transform-origin: 50px 50px;
  animation: colorRotate 7.5s 0.5s infinite linear;
}

div.logoGradient {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(from 270deg, #ff4800 10%, #dfd902 35%, #20dc68, #0092f4, #da54d8 72% 75%, #ff4800 95%);
}

g.logoBlend {
  mix-blend-mode: lighten;
}

g.logoBlend > rect {
  fill: whitesmoke;
}

g.logoBlend > path {
  stroke: black;
  stroke-width: 8;
  stroke-dasharray: 288.5;
  stroke-dashoffset: -288.5;
  stroke-linecap: round;
  fill: none;
  transform-origin: 50px 50px;
  animation:
    pathStroke 3.75s 0.5s infinite ease-in-out,
    pathRotate 7.5s 0.5s infinite cubic-bezier(1,.5,0,.5);
}

@keyframes scaleStart {
  0% { transform: scale(0.5); }
  60% {
    transform: scale(1.25);
    animation-timing-function: ease-in;
  }
  100% { transform: scale(1); }
}

@keyframes colorRotate {
  from { transform: rotate(270deg); }
  to { transform: rotate(-90deg); }
}

@keyframes pathStroke {
  0% { stroke-dashoffset: -288.5; }
  40%, 70% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 288.5; }
}

@keyframes pathRotate {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(-540deg); }
  100% { transform: rotate(-1080deg); }
}
    }
</style>