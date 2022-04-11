<!-- ONLINE TOOL : https://css-generators.com/custom-corners/ -->
<!-- ARTICLE: https://css-tricks.com/cut-corners-using-css-mask-and-clip-path-properties/ -->
<main class='flex-center'>
    <h3>Circular Cut Basic</h3>
    <section class='circular-basic'>
        <div class="box"></div>
    </section>
    <h3>Circular Cut Basic With Mask</h3>
    <section class='circular-basic-mask'>
        <div class="box mask"></div>
<img class="mask" src="https://picsum.photos/id/1069/200/200" alt='image1'>

    </section>
    <h3>Circular Cut Basic With Mask WIth Generator Code</h3>
    <section class='circular-basic-mask-generator-code'>
        <div class="box mask"></div>
<img class="mask" src="https://picsum.photos/id/1069/200/200" alt='image1'>

    </section>
    <h3>Circular Cut Basic With Mask WIth only one gradient</h3>
    <section class='circular-basic-mask-one-gradient'>
        <img class="mask" src="https://picsum.photos/id/1069/200/200" alt='image1'>


    </section>
    <h3>Circular Cut Basic With Mask With only one gradient- Without knowing width</h3>
    <section class='circular-basic-mask-one-gradient-with-percentage'>
        <img class="mask" src="https://picsum.photos/id/1069/200/150">


    </section>
    <h3>Circular Cut Basic With Mask With -- Decimal-problem</h3>
    <section class='circular-basic-mask-decimal-problem'>
        <img class="mask" src="https://picsum.photos/id/1069/200/150">


    </section>
    <h3>Circular Cut Basic With Mask With Pseudo Element</h3>
    <!-- The third method uses one gradient and requires a pseudo-element.
     It won’t work with <img> and other elements that unable
      to support a pseudo-element. -->
    <section class='circular-basic-mask-pseudo-element'>
        <div class="box first"></div>
        <div class="box second"></div>
        <div class="box third"></div>
        <div class="box fourth"></div>
        <div class="box fourth hide"></div>
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
            z-index: 0;
        }
        section{
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 0;
        }

        .circular-basic{
            .box {
  width:300px;
  aspect-ratio:1.5;
  background:
//   #0000 transparent color
//top left meaning at the last of the line: The whole gradient is also placed so that it starts at the element’s top-left corner.
    radial-gradient(circle 30px at top left ,#0000 98%,red  ) top    left,
   //each radial gradient is a small rectangle of quarter size of original
    radial-gradient(circle 30px at top right,#0000 98%,blue ) top    right,
    radial-gradient(circle 30px at bottom left ,#0000 98%,green) bottom left,
    radial-gradient(circle 30px at bottom right,#0000 98%,purple) bottom right
    ;
    // Each gradient is taking a quarter of the element’s dimensions.
    background-size:51% 51%;
  background-repeat:no-repeat;
//   Like I did in the previous article, I will be using slightly bigger or smaller values this time around in order to avoid bad visual result. Here, I am using 98% instead of 100% to avoid jagged edges and 51% instead of 50% to create an overlap between gradients and avoid white spaces. This logic will follow throughout this article. In fact, you will find that adding or removing 1% or 1deg typically results in a nice visual.
}
        }

        .circular-basic-mask{
            .box {
  display:inline-block;
  width:300px;
  aspect-ratio:1.5;
  background: linear-gradient(45deg,blue,red);
}
.mask {
  -webkit-mask:
    radial-gradient(circle 30px at top    left ,#0000 98%,#000) top    left,
    radial-gradient(circle 30px at top    right,#0000 98%,#000) top    right,
    radial-gradient(circle 30px at bottom left ,#0000 98%,#000) bottom left,
    radial-gradient(circle 30px at bottom right,#0000 98%,#000) bottom right;
  -webkit-mask-size:51% 51%;
  -webkit-mask-repeat:no-repeat;
}
        }


        .circular-basic-mask-generator-code{
            .box {
  display:inline-block;
  width:300px;
  aspect-ratio:1.5;
  background: linear-gradient(45deg,blue,red);
}
.mask {
--g: #0000 98%,#000;
--r: 30px;
-webkit-mask:
// radial-gradient(var(--r) at 0    0   ,var(--g)) 0    0,
//   radial-gradient(var(--r) at 100% 0   ,var(--g)) 100% 0,
//   radial-gradient(var(--r) at 0    100%,var(--g)) 0    100%,
//   radial-gradient(var(--r) at 100% 100%,var(--g)) 100% 100%;
//   -webkit-mask-size:51% 51%;
//   -webkit-mask-repeat:no-repeat;
  radial-gradient(var(--r) at 0    0   ,var(--g)) 0    0   /51% 51% no-repeat,
  radial-gradient(var(--r) at 100% 0   ,var(--g)) 100% 0   /51% 51% no-repeat,
  radial-gradient(var(--r) at 0    100%,var(--g)) 0    100%/51% 51% no-repeat,
  radial-gradient(var(--r) at 100% 100%,var(--g)) 100% 100%/51% 51% no-repeat;

}
        }

        .circular-basic-mask-one-gradient{
            .mask {
  -webkit-mask: radial-gradient(30px,#0000 98%,#000) 0 0;
  transition:.5s linear;
  cursor:pointer;
}
.mask:hover {
    //200px 200px is width and height of the image
  -webkit-mask: radial-gradient(30px,#0000 98%,#000) -100px -100px;
}
//  Here, we define one radial-gradient() with no size 
// (by default it is 100% height and 100% width).
//  This gives us a hole in the center. We 
//  translate/move the gradient by half the 
//  width and height of the image to move
//   the hole to one corner. Since, by default,
//    the CSS mask repeats, we get the same
//     on each corner. We have four cut 
//     corners with only one gradient!
//! DRAWBACK
// The only drawback of this method is
//  that we need to know the width and height 
//  of the element in advance.
        }


//         Can’t we use -50% instead of half the width and height?
// Unfortunately, we’re unable to do that here because 
// percentages doesn’t behave the same as pixel values 
// when used with the CSS mask-position property. They’re tricky.
   
// When a gradient (or a background layer) has a width
//  and height equal to the element, we cannot move
//   it using percentage values. So we need to change
//    its size!

// I will define a size equal to 99.5% 99.5%. 
// I am reducing 0.5% from the width and the 
// height to have a value different from 100%
//  and at the same time keep the same visual
//   result since we won’t notice a big difference
//    between 100% and 99.5%. Now that our 
//    gradient has a size different from 100% 
//    we can move it using percentage values.

// I will not detail all the math, but to move it by half the width and 
// the height we need to use this equation:

//100% * (50/(100 - 99.5)) = 100% * 100 = 10000%
.circular-basic-mask-one-gradient-with-percentage{
            .mask {
  -webkit-mask: radial-gradient(30px,#0000 98%,#000) 10000% 10000%/99.5% 99.5%;
}
//DRAWBACK: However, this method has a small drawback
 //when the width or the height of the element
  //is a decimal value. Here is an example with
  // an image having a width equal to 150.5px:
        }

        .circular-basic-mask-decimal-problem{
            .mask {
  -webkit-mask: radial-gradient(30px,#0000 98%,#000) 10000% 10000%/99.5% 99.5%;
  width:150.5px;
//   The use of 99.5% combined with 150.5px will 
// create rounding issues that will break the 
// calculation, resulting in the mask being 
// misaligned. So, use this method with caution.
}
        }

        .circular-basic-mask-pseudo-element{
            .box {
  width:150px;
  aspect-ratio:1.5;
  display:inline-block;
  margin:15px;
  position:relative;
  border:2px solid green;
  z-index: 0;
}
// We define a pseudo-element that behaves as 
// our background layer. Logically, we should 
// use inset:0 to make it cover the entire
//  area, but we will create a small
//   overflow by using inset: -10% meaning 
//   that the pseudo element will overflow
//    each side by 10%.
.first::before {
  content:"";
  position:absolute;
  z-index:-1;
  inset:-10%;
  background:linear-gradient(45deg,red,blue);
}
// We set our CSS mask to the pseudo-element.
//  The mask size needs to match the size
//   of the main element, not the pseudo-element
//   . In other words, it will be smaller
//    than the size of the pseudo-element
//     and this is what we want to be able
//      to move using percentage values.
//       After we do the math, the size 
//       needs to be 100%/1.2. Notice in
//        the demo above that the CSS mask 
//        is within the green border so
//         that it matches the size of the container.
.second:before {
  content:"";
  position:absolute;
  z-index:-1;
  inset:-10%;
  background:linear-gradient(45deg,red,blue);
  -webkit-mask: 
    radial-gradient(20px,#0000 98%,#000) center/calc(100%/1.2) calc(100%/1.2) no-repeat
}
// Now, we need to move it in a way that
//  simulates cutting the corner of the main
//   element. The center of the hole needs
//    to be in the corner of the main element,
//     as illustrated in the demo. To do this,
//      we use mask-position: 300% 300% 
//      ( 300% = 50%/(1 - 1/1.2) ).
.third:before {
  content:"";
  position:absolute;
  z-index:-1;
  inset:-10%;
  background:linear-gradient(45deg,red,blue);
  -webkit-mask: 
    radial-gradient(20px,#0000 98%,#000) 300% 300%/calc(100%/1.2) calc(100%/1.2) no-repeat
}
// We remove no-repeat to activate the repetition 
//and get the same effect for every corner.
.fourth:before {
  content:"";
  position:absolute;
  z-index:-1;
  inset:-10%;
  background:linear-gradient(45deg,red,blue);
  -webkit-mask: 
    radial-gradient(20px,#0000 98%,#000) 300% 300%/calc(100%/1.2) calc(100%/1.2)
}
//We clip the overflow and we get our final result!
.hide {
  overflow:hidden;
}
//The third method uses one gradient and requires
// a pseudo-element. It won’t work with <img> and other elements that unable to support a pseudo-element.
        }
        
    </style>