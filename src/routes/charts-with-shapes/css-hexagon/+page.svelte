<!-- //https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/ -->
<script>
  
</script>

<main>
<div class="main">
	<div class="container">
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
</div>



</main>

<style>
    main{
        margin: 5rem;
    }
	.main {
		display: flex;
		--s: 100px; /* size  */
		--m: 4px; /* margin */
		--f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
	}

	.container {
		font-size: 0; /*disable white space between inline block element */
	}

	.container div {
		width: var(--s);
		margin: var(--m);
		height: calc(var(--s) * 1.1547); /*height = width/cos(30 degree) = width*1.1547 */
		display: inline-block;
		font-size: initial; /* we reset the font-size if we want to add some content */
		clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
		background: red;
		/*to lift the secon row up and fit it into the sapce of hexagons of top row we have to lift the
  bottom row by 25% of height (Height*25%   = width * 1.1547 *.25 = width*0.2886 )
  and finally this number is used for giving negative margin bottom */
		margin-bottom: calc(var(--m) - var(--s) * 0.2885);
	}
	.container div:nth-child(odd) {
		background: green;
	}

	/*Now the real trick is how we can shift the second row to 
get a perfect hexagon grid. We’ve already scrunched things
 to the point where the rows overlap each other vertically,
  but what we need is to push every other row toward the right
   so the hexagons stagger rather than overlap. Here’s where
    float and shape-outside come into play.

Did you wonder why we have a .main element wrapping 
our container and having display: flex ? 
That div is also a part of the trick. 
In a previous article, I used float and I needed that 
flexbox container in order to be able to use height: 100%.
 I will be doing the same thing here.*/

 /*container::before pseudo-element to create a float
  element that take up all the height at the left of 
  the grid, and that has a width equal to half a hexagon
   (plus its margin). We get the following result:*/
	.container::before {
		content: '';
		width: calc(var(--s) / 2 + var(--m));
		float: left;
		height: 120%;
        /*The shape-outside CSS property defines a
         shape—which may be non-rectangular—around 
         which adjacent inline content should wrap.
          By default, inline content wraps around its
           margin box; shape-outside provides a way to
            customize this wrapping, making it possible
             to wrap text around complex objects rather
              than simple boxes.*/

              
              /*We’ll create a gradient with two colors:

A transparent one to create the “free space” while 
allowing the first row to stay in place (illustrated 
by the blue arrow above).
An opaque color to shift the second row to the right
 so the hexagons aren’t directly stacked on top of one
  another (illustrated by the green arrow).*/

  /*shape-outside: repeating-linear-gradient(#0000 0 A, #000 0 B); /* #0000 = transparent */

  /*The height of two rows is equal to the height of two
   hexagons (including their margins), minus twice the
    overlap (2*Height + 4*M - 2*Height*25% = 1.5*Height + 4*M ).
     Or, expressed in CSS with calc()
     
     calc(1.732 * var(--s) + 4 * var(--m))
     
     
     The value of A (defined by the blue arrow in the previous figure) 
     needs to be at least equal to the size of one hexagon, but it can 
     also be bigger. In order to push the second row over to the right, 
     we need few pixel of opaque color so A can simply be equal to B - Xpx,
      where X is a small value.

      shape-outside: repeating-linear-gradient(#0000 0 calc(var(--f) - 3px),#000 0 var(--f));


      You may have noticed that I am adding -1px to the variable F.
       Since we are dealing with calculation that involve decimals,
        the rounding may give us bad results. To avoid this we add 
        or remove few pixels. I am also using 120% instead of 100% 
        for the height of the floated element for similar reasons. 
        There is no particular logic with theses values; we simply 
        adjust them to make sure to cover most of the cases without 
        any misaligning our shapes.

        #0000 color does not matter as it is shape ouside which does not use color
     */
		shape-outside: repeating-linear-gradient(#0000 0 calc(var(--f) - 3px), #000 0 var(--f));
	}

	/*FOR RHOMBUS GRID 4 CHANGES
    	Hexagon grid	Rhombus grid
height	calc(var(--s)*1.1547)	var(--s)
clip-path	polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)	polygon(50% 0, 100% 50%, 50% 100%, 0 50%)
margin-bottom	calc(var(--m) - var(--s)*0.2885)	calc(var(--m) - var(--s)*0.5)
--f	calc(var(--s)*1.7324 + 4*var(--m))	calc(var(--s) + 4*var(--m))
    */
    
    
    
    
    
    




















    
    
   
</style>
