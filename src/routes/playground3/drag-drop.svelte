<main>
    <div class="box">
        <div class="a"></div>
        <img alt='image1' src="https://assets.codepen.io/1480814/1015-800x800.jpg" width="200" height="200">
      </div>
</main>

<style>
  .box {
  display: inline-grid;
  border: 2px solid;
  pointer-events: none;
}
.box > * {
  pointer-events: initial;
}
/* 
WHY a needed
Did you notice that hovering the image also triggers
 the changes? That’s because the image is part
  of the box element, which is not good for us. 
  We can fix this by adding pointer-events: none 
  to the image but we won’t be able to drag it later.

That means we have to introduce another element inside the .box

That extra div (we’re using a class of .a) will 
take the same area as the image (thanks to CSS Grid
 and grid-area: 1 / 1) and will be the element that 
 triggers the hover effect. And that is where 
 the sibling selector comes into play*/
.a {
  grid-area: 1/1;
  width: 0%;
  background: red;
  transition: 0s .2s; /* add a small delay to make sure we catch the hover effect */
}
/* Clicking on the image fires the :active pseudo-class 
that makes the .a element full-width (it is initially
 equal to 0). The active state will remain active 
 until we release the image. If we release the image 
 inside the box, the .a element goes back to width: 
 0, but we will trigger the hover effect before it
  happens and the image will fall inside the box!
   If you release it outside the box, nothing happens. */

.box:active .a{  /* on :active increase the width */
  width: 100%;
  transition: 0s; /* instant change */
}
img {
  grid-area: 1/1;
  transform: translate(200%);
  /* The trick is to add a big transition
   duration and delay — so big that the image
    takes lots of time to return to its initial 
    position. */
  transition: 999s 999s; /* very slow move on mouseout */
}
.a:hover + img {
  transform: translate(0);
  transition: 0s;  /* instant move on hover */
}  
</style>