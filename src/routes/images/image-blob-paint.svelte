<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    import { onMount } from "svelte";

    onMount(() => {
        if (CSS.paintWorklet) {  
            try {
                //We add the paint worklet using CSS.paintWorklet.addModule('your_js_file')
                CSS.paintWorklet.addModule('../js/paint/paint-blob.js'); 
                console.log('Js file loaded');
            } catch (error) {
                console.log('Error',error);
            }            
        
    }});
</script>
<BasicPage title='Blob Effect with CSS Paint API' path='/images'></BasicPage>

<section class='sec1'>
    <img src="https://picsum.photos/id/1069/400/400"> 
</section>

<section class='sec2'>
    <h1>n=20 b=50</h1>
    <img src="https://picsum.photos/id/1069/250/250" style="--n:20;--v:50"> 
    <h1>n=30 b=20 t=1</h1>
    <img src="https://picsum.photos/id/1074/250/250" style="--n:30;--v:20;--t:1"> 
    <h1>n=8 b=50</h1>
    <img src="https://picsum.photos/id/109/250/250" style="--n:8;--v:50"> 
    <h1>n=100 b=80 t=1</h1> 
    <img src="https://picsum.photos/id/1019/250/250" style="--n:100;--v:80;--t:1"> 
</section>

<section class="sec3">
    <h1>Blob in only one axis</h1>
    <h1>n=20 b=50</h1>
    <img src="https://picsum.photos/id/1069/250/250" style="--n:20;--v:50"> 
    <h1>n=100 b=80 t=1</h1> 
<img src="https://picsum.photos/id/1019/250/250" style="--n:100;--v:80;--t:1"> 
</section>



<section class="sec4">
    <h1>One Axis Movement Same Direction</h1>
    <h1>n=20 b=50</h1>
    <img src="https://picsum.photos/id/1069/250/250" style="--n:20;--v:50"> 
    <h1>n=100 b=80 t=1</h1> 
<img src="https://picsum.photos/id/1019/250/250" style="--n:100;--v:80;--t:1"> 
</section>

<section class="sec5">
    <h1>One Axis Movement Same Direction - points moving outside mask area problem fixed</h1>
    <h1>n=20 b=50</h1>
    <img src="https://picsum.photos/id/1069/250/250" style="--n:20;--v:50"> 
    <h1>n=100 b=80 t=1</h1> 
<img src="https://picsum.photos/id/1019/250/250" style="--n:100;--v:80;--t:1"> 
</section>

<section class="sec6">
    <h1>One Axis Movement Same Direction</h1>
        <h4> Hoverable area only limited to image problem fixed
        earlier hoverable area was outside the image
    </h4>
    <div class="box box1"  style="--n:20;--v:50;--t:0;">
        <img src="https://picsum.photos/id/1069/300/300">
      </div >
      <div class="box box2" style="--n:100;--v:80;--t:1">
      <img src="https://picsum.photos/id/1019/300/300" > 
      </div>

</section>

<section class="sec7">
    <h1>One Axis Movement Same Direction with keyframes</h1>
    <div class="box" style="--n:120;--v:120;--t:1">
        <img src="https://picsum.photos/id/1016/450/450"> 
      </div>
</section>


<section class="sec8">
    <h1>Circular MOvement</h1>
    <img src="https://picsum.photos/id/1069/300/300" style="--n:30;"> 
    <img src="https://picsum.photos/id/1074/300/300" style="--n:15;"> 
</section>

<section class="sec9">
    <h1>Spiral MOvement</h1>
    <img src="https://picsum.photos/id/1069/300/300" style="--n:30;--v:15"> 
<img src="https://picsum.photos/id/1074/300/300" style="--n:15;--v:50"> 
</section>








<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
section {
    margin: 2rem 0;
    border: 1px solid orangered;
}
.sec1{
  img {
   mask:paint(blob1);
  -webkit-mask:paint(blob1);
  --n:15;
}
  background:pink;
}
@property --b{
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
// I get the value of this variable 
//inside the paint() function and use
// it to define the position of our point.
// if(i==0) 
//   var r = RADIUS - B;
// else
//   var r = RADIUS   
// ABOVE HOW TO CHANGE POSITION OF ONLY ONE POINT

// Let’s do this for more points.
//  Not all of them but only the even ones.
//   I will define the position as follow:
//var r = RADIUS - B*(i%2);  ONLY FOR EVEN POINTS

// Now let’s try it with some random stuff. Instead 
// of moving our points with a fixed value,
//  let’s make that value random move them all around.

//var r = RADIUS - B*random();


// We can make that instruction a variable so we 
// can decide if we want to use the uniform or the
//  random configuration without changing our 
//  JavaScript. We introduce another variable,
//   T, that behaves like a boolean:

// if(T == 0) 
//   var r = RADIUS - B*(i%2);
// else 
//   var r = RADIUS - B*random();

.sec2{
//     img {
//   --b:0;
//   transition:--b .5s;
// }
// img:hover {
//   --b:100
// }
img {
  cursor:pointer;
  border-radius:50%;
  mask:paint(blob2);
  -webkit-mask:paint(blob2);
  --n:20;
  --b:0;
  --t:0;
  transition:--b .5s;
}
img:hover {
  --b:var(--v)
}

}




// Controlling the movement of the points
// In all the blobs we’ve created so far, we
//  considered the same movement for our points.
//   Whether we’re using the uniform 
//   configuration or the random one,
//    we always move the points from the edge 
//    to the center of the circle following a line.

// Now let’s see how we can control that movement
//  in order to get even more animations. The
//   idea behind this logic is simple: we move the x and y differently.

// Previously we were doing this:


// var x = Math.cos((i / N) * (2 * Math.PI)) * (Radius - F(B)) + CenterX;
// var y = Math.sin((i / N) * (2 * Math.PI)) * (Radius - F(B)) + CenterY;
//where F(B) is a function based on the variable B that holds the transition.


//Now we will have something like this instead:
// var x = Math.cos((i / N) * (2 * Math.PI)) * (Radius - Fx(B)) + CenterX;
// var y = Math.sin((i / N) * (2 * Math.PI)) * (Radius - Fy(B)) + CenterY;
//where we’ve updating the x and y variables differently to makes more animations.

//One axis movement
//Fy(B) = 0
.sec3{
    img {
  cursor:pointer;
  border-radius:50%;
  -webkit-mask:paint(blob3);
  --n:20;
  --b:0;
  --t:0;
  transition:--b .5s;
}
img:hover {
  --b:var(--v)
}
}


//Left or right movement

// Instead of making the points converging into
//  the center, let’s make them move into the
//   same direction (either right or left). We
//    need a condition based on the location of
//     the point which is defined by the angle.


// We have two group of points: ones in the
//  [90deg 270deg] range (the left side),
//   and the remaining points along the ride side 
//   of the shape. If we consider the indexes,
//    we can express the range differently, like
//     [0.25N 0.75N] where N is the number of points.

// The trick is to have a different sign for each group:

// var sign = 1;
// if(i<0.75*N && i>0.25*N) 
//   sign = -1; /* we invert the sign for the left group */
// if(T == 0) 
//   var r = RADIUS - B*sign*(i%2);
// else 
//   var r = RADIUS - B*sign*random();
// var x = Math.cos((i / N) * (2 * Math.PI)) * r + cx;


.sec4{
    img {
  cursor:pointer;
  border-radius:50%;
  mask:paint(blob4);
  -webkit-mask:paint(blob4);
  --n:20;
  --b:0;
  --t:0;
  transition:--b .5s;
}
img:hover {
  --b:var(--v)
}
}

// We are able to get the same direction but 
// with one small drawback: one group of the
//  points are going outside the mask area
//   because we are increasing the distance on 
//   some points while decreasing the distance
//    on others. We need to reduce the size of 
//    our circle to leave enough space for all of our points.

// We simply decrease the size of our circle
//  using the V value that defines the final
//   value for our B variable. In other words,
//    it’s the maximum distance that one point can reach.

// const V = parseFloat(properties.get('--v'));
// const RADIUS = size.width/2 - V;

.sec5{
    img {
  cursor:pointer;
  border-radius:50%;
  mask:paint(blob5);
  -webkit-mask:paint(blob5);
  --n:20;
  --b:0;
  --t:0;
  transition:--b .5s;
}
img:hover {
  --b:var(--v)
}
}


// We fixed the issue of the points getting outside
//  but we have another small drawback: the
//   hover-able area is the same, so the 
//   effect starts even before the cursor 
//   hits the image. It would be good if
//    we can also reduce that area so everything is consistent.

// We can use an extra wrapper and a negative margin trick.
.sec6{
    .box {
  display:inline-block;
  border-radius:50%;
  cursor:pointer;
  margin:calc(var(--v)*1px);
  --t:0;
}

// The extra wrapper is an inline-block element.
//  The image inside it has negative margins
//   equal to the V variable which reduces the
//    overall size of the shape’s box. Then we
//     disable the hover effect on the image 
//     element (using pointer-events: none)
//      so only the box element triggers the 
//      transition. Finally we add some margin to the box element to avoid any overlap.

img {
  display:block;
  margin:calc(var(--v)*-1px);
  pointer-events:none;
  mask:paint(blob5);
  -webkit-mask:paint(blob5);
  --b:0;
  transition:--b .5s;
}
.box1:hover img {
    --b:var(--v);
}
.box2:hover img {

// Like the previous effect, this one can also be combined with 
// cubic-bezier() and keyframes to get more cool
//  animations. Below is an example using my 
//  sinusoidal curve for a wobbling effect on hover.

transition:--b .5s cubic-bezier(.5,calc(var(--v)/(-.289*.1)),.5,calc(var(--v)/(.289*.1)));
  --b:0.1
}
}

.sec7{
    @property --b{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}
    .box {
  display:inline-block;
  border-radius:50%;
  cursor:pointer;
  margin:10px calc(var(--v) * 1px);
  --t:0;
  animation: wob 2s linear infinite;
}

img {
  display:block;
  margin:calc(var(--v) * -1px);
  pointer-events:none;
  mask: paint(blob5);
  -webkit-mask: paint(blob5);
}
@keyframes wob{
  0%,10%,90%,100% {
    --b: 0;
    transform: translate(0);
  }
  25% {
    --b: calc(var(--v) * -1);
    transform: translate(0);
  }
  45%,55% {
    --b:0;
    transform: translate(calc(var(--v) * 1px));
  }
  75% {
    --b: var(--v);
    transform: translate(calc(var(--v) * 1px));
  }
}
}

// Circular movement
// Let’s tackle another interesting movement 
// that will allow us to create infinite and
//  “realistic” blob animations. Instead of
//   moving our points from one location to 
//   another, we will rotate them around an 
//   orbit to have a continuous movement.

// The initial location of our points (in green) 
// will become an orbit and the red circle is 
// the path that our points will take. In other
//  words, each point will rotate around its
//   initial position following a circle having a radius r.

// All we need to do is make sure there is no
//  overlap between two adjacent paths so the
//   radius need to have a maximum allowed value.


//const r = 2*Radius*Math.sin(Math.PI/(2*N));

// var r = (size.width)*Math.sin(Math.PI/(N*2));
// const RADIUS = size.width/2 - r;
// // ...

// for(var i = 0; i < N; i++) {
//   var rr = r*random();
//   var xx = rr*Math.cos(B * (2 * Math.PI));
//   var yy = rr*Math.sin(B * (2 * Math.PI)); 
//   var x = Math.cos((i / N) * (2 * Math.PI)) * RADIUS + xx + cx;
//   var y = Math.sin((i / N) * (2 * Math.PI)) * RADIUS + yy + cy;
//   point[i] = [x,y];
// }

.sec8{
    @property --b{
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

img {
  cursor:pointer;
  mask:paint(blob-circular);
  -webkit-mask:paint(blob-circular);
  --n:20;
  --b:0;
  animation:b 2s infinite linear;
}




// Notice the value B which is, as
//  usual, the one with the transition.
//   This time, we will have a transition
//    from 0 to 1 in order to make a full turn around the orbit.

@keyframes b {
  to {--b:1}
}
}



// Spiral movement
// One more for you! This one is a combination
//  of the two previous ones.

// We saw how to move the points around a 
// fixed orbit and how to move a point from 
// the edge of the circle to the center. 
// We can combine both and have our point 
// move around an orbit and we do the same 
// for the orbit by moving it from the edge to the center.

// Let’s add an extra variable to our existing code:

// for(var i = 0; i < N; i++) {
//   var rr = r*random();
//   var xx = rr*Math.cos(B * (2 * Math.PI));
//   var yy = rr*Math.sin(B * (2 * Math.PI)); 

//   var ro = RADIUS - Bo*random();
//   var x = Math.cos((i / N) * (2 * Math.PI)) * ro + xx + cx;
//   var y = Math.sin((i / N) * (2 * Math.PI)) * ro + yy + cy;
//   point[i] = [x,y];
// }

// Yet another fancy blob animation! Now each 
// element has two animations: one animates the
//  orbit (Bo), and the other animates the point
//   in its circular path (B). Imagine all the
//    effects that you can get by simply adjusting 
//    the animation value (duration, ease, etc.)!

.sec9{
    @property --b{
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
@property --bo{
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

img {
  cursor:pointer;
  mask:paint(blob-spiral);
  -webkit-mask:paint(blob-spiral);
  --n:20;
  --b:0;
  --bo:0;
  animation:
     b  2s infinite linear,
     bo .8s infinite alternate;
}

@keyframes b {
  to {--b:1}
}

@keyframes bo {
  to {--bo:var(--v)}
} 
}
</style>