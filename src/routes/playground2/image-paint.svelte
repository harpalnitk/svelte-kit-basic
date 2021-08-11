<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    import { onMount } from "svelte";

    onMount(() => {
        if (CSS.paintWorklet) {  
            try {
                //We add the paint worklet using CSS.paintWorklet.addModule('your_js_file')
                CSS.paintWorklet.addModule('../js/paint/paint.js'); 
            } catch (error) {
                console.log('Error',error);
            }            
        
    }});
</script>
<BasicPage title='Image Fragmentation with paint CSS API' path='/playground2'></BasicPage>


<main>
    <div class="box box1">
  
    </div>
    <div class="box box2" style="--color:blue">
  
    </div>

    <!-- //In the previous article, I did the effect using different 
    //mask layer where each one is a square defined with a gradient 
    (remember that a gradient is an image) so we got a
     kind of matrix and the trick was to adjust the 
     alpha channel of each one individually.

    This time, instead of using many 
    gradients we will define only one custom
     image for our mask and that custom image 
     will be handled by our paint API. -->
     <section class="section section1">
        <img alt='image' src="/img/misc/frag-300x300.jpg" >
     </section>
     <section class="section section2">
        <img alt='image' src="/img/misc/frag-300x300.jpg" >
     </section>
   

<!-- 
     Now, we need to control the alpha channel in order to create 
     the fading effect of each rectangle and build 
     the fragmentation effect.

Let’s introduce a third variable that we use for
 the alpha channel that we also change on hover. -->
 <section class="section section3">
    <img alt='image' src="/img/misc/frag-300x300.jpg" >
 </section>


 <!-- We defined a CSS custom property as a <number> that we
      transition from 1 to 0, and that same property is 
      used to define the alpha channel of our rectangles. 
      Nothing fancy will happen on hover because all the 
      rectangles will fade the same way.

    We need a trick to prevent fading of all the rectangles 
    at the same time, instead creating a delay between them.
     Here is an illustration to explain the idea I am going
      to use: -->
      <section class="section section4">
        <img alt='image' src="/img/misc/frag-300x300.jpg" >
     </section>

     <!-- We are getting closer. We have a cool fragmentation effect 
     but not the one we saw in the beginning
      of the article. This one isn’t as smooth. -->

     <section class="section section5">
        <img alt='image' src="/img/misc/frag-300x300.jpg" >
     </section>
<!-- with offset -->

     <section class="section section6">
        <img alt='image' src="/img/misc/frag-300x300.jpg" >
     </section>


     <!-- with hexagon shape -->

     <section class="section section7">
        <img alt='image' src="/img/misc/frag-300x300.jpg" style="--f-r:28;">
        <img alt='image' src="/img/misc/frag-300x300.jpg" style="--f-r:13;">
     </section>


     <!-- IMAGE SLIDER -->
     <div class="image-slider"></div>
  <!-- ANOTHER VARIATION OF IMAGE SLIDER-->
     <div class="image-slider2">
        <img src="https://picsum.photos/id/15/800/400" >
        <img src="https://picsum.photos/id/110/800/400" >
        <img src="https://picsum.photos/id/1014/800/400" >
        <img src="https://picsum.photos/id/305/800/400" >
      </div>


       <!-- ADDING NOISE EFFECT TO IMAGE-->

       <div class="noise">
        <img src="https://picsum.photos/id/1072/200/200" >
      </div>

  <!--USING IMAGE FRAGMENTATION IN CARD-->
      <div class="card">
        <img src="https://picsum.photos/id/251/800/400" >
        <div>
          <h2>A title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id augue eget leo iaculis ultricies sit amet sit amet nisl. Pellentesque aliquam eget ex quis pharetra.</p>
        </div>
      </div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
.box{
    margin-bottom: 1rem;
}
.box1 {
  height: 100px;
  background:paint(draw1);
}
.box2 {
  height: 100px;
  background:paint(draw2);
}

.section{
    background: pink;
    margin-bottom: 1rem;
}

.section1 img {
    //This time, instead of using many gradients we will 
    //define only one custom image for our mask and 
    //that custom image will be handled by our paint API.
   mask:paint(fragmentation);
  -webkit-mask: paint(fragmentation);
}

.section2 img {
    //Now all we need to do is to split our image to more parts.
    // Let’s define two variables and update our code:
   mask:paint(fragmentation2);
  -webkit-mask: paint(fragmentation2);
  --f-n:10;
  --f-m:10;
}


@property --f-o{
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}

.section3 img {
   mask: paint(fragmentation3);
  -webkit-mask: paint(fragmentation3);
  --f-o:1;
  --f-n:10;
  --f-m:10;
  transition:--f-o 1s;
}

.section3 img:hover {
  --f-o:0;
}



.section4 img {
  mask: paint(fragmentation4);
  -webkit-mask: paint(fragmentation4);
  --f-o:1;
  --f-n:10;
  --f-m:10;
  transition:--f-o 1s;
}

.section4 img:hover {
  --f-o:0;
}

.section5 img {
  mask: paint(fragmentation5);
  -webkit-mask: paint(fragmentation5);
  --f-o:1;
  --f-n:10;
  --f-m:10;
  transition:--f-o 1s;
}

.section5 img:hover {
  --f-o:0;
}

.section6 img {
  mask: paint(fragmentation6);
  -webkit-mask: paint(fragmentation6);
  --f-o:1;
  --f-n:10;
  --f-m:10;
  transition:--f-o 1s;
}

.section6 img:hover {
  --f-o:0;
}


.section7 img {
  mask: paint(fragmentation7);
  -webkit-mask: paint(fragmentation7);
  --f-o:1;
  transition:--f-o 1s;
}

.section7 img:hover {
  --f-o:0;
}



//image slider

.image-slider {
  --r:2/1; /* ratio */
  --d:20s; /* duration */
  --f-n:40;
  --f-m:20;
  -webkit-mask: paint(fragmentation6);
          mask: paint(fragmentation6);
  max-width:800px;
  aspect-ratio: var(--r);
  background:
     url(https://picsum.photos/id/15/800/400),
     url(https://picsum.photos/id/110/800/400),
     url(https://picsum.photos/id/1014/800/400),
     url(https://picsum.photos/id/305/800/400);
  background-repeat:no-repeat;
  margin:auto;
  animation:
      c var(--d) linear infinite ,
      i calc(var(--d)/8) linear infinite alternate calc(var(--d)/8);
}
/* image slider by using this animation where cover is moved */
@keyframes c {
  0% ,24.9% {background-size:cover,0 0,0 0,0 0}
  25%,49.9% {background-size:0 0,cover,0 0,0 0}
  50%,74.9% {background-size:0 0,0 0,cover,0 0}
  75%,100%  {background-size:0 0,0 0,0 0,cover}
}
@keyframes i {
  0%,15% {--f-o:1}
  100%   {--f-o:0}
}



// IMAGE SLIDER 2


.image-slider2 {
  --r:2/1; /* ratio */
  --d:10s; /* duration */
  --f-n:40;
  --f-m:20;
  max-width:800px;
  aspect-ratio: var(--r);
  display:grid;
  margin:auto;
}
.image-slider2  img {
  grid-area:1/1;
  width:100%;
  height:100%;
  display:block;
  -webkit-mask: paint(fragmentation6);
          mask: paint(fragmentation6);
  animation:i2 8s linear infinite var(--d) both;
}
.image-slider2  img:nth-child(1) {--d:0s}
.image-slider2  img:nth-child(2) {--d:2s}
.image-slider2  img:nth-child(3) {--d:4s}
.image-slider2  img:nth-child(4) {--d:6s}

@keyframes i2 {
  0%       {--f-o:0}
  20%,30%  {--f-o:1}
  50%,100% {--f-o:0}
}


// <!-- ADDING NOISE EFFECT TO IMAGE-->
.noise {
  --f-n:200;// dividing image to 400 boxes
  --f-m:200;
  width:200px;
  background:#000;
}
.noise img {
  display:block;
  -webkit-mask: paint(fragmentation6);
          mask: paint(fragmentation6);
  animation:i3 1s infinite both;
}
// using 0.5 alpha to show some black noise in image
@keyframes i3 {
  0%,80%,100%{--f-o:1}
  90%  {--f-o:0.5}
}







// <!--USING IMAGE FRAGMENTATION IN CARD-->

.card {
  --f-n:10;
  --f-m:10;
  max-width:400px;
  border-radius:15px;
  overflow:hidden;
  display:grid;
  margin:auto;
  background:#fff;
  cursor:pointer;
  grid-template-columns: 1fr 1fr;   
  box-shadow: 1px 2px 7px;
}
.card * {
  grid-row:1;
}
.card img {
  grid-column:1/-1;
  z-index:1;
  width:100%;
  height:100%;
  pointer-events:none;
  display:block;
  --f-o:1;
  -webkit-mask: 
     linear-gradient(#000 0 0) left,
     paint(fragmentation6) right;
  -webkit-mask-size:50% 100%;
  -webkit-mask-repeat:no-repeat;
  transition:--f-o 1s;
}
.card:hover img {
  --f-o:0;
}
.card div {
  grid-column:2;
  padding:10px;
}
</style>