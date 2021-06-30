<!-- //https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/ -->
<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='CSS Hexagon'></BasicPage>
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

<section>
	<h1>Resize the below div!</h1>

  

    <div class="wrapper-1">
      <div class="box-1">
        <div class="float-1"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci. Pellentesque gravida urna sit amet nulla suscipit, at venenatis lorem dignissim. Morbi quis nunc eu velit condimentum ornare. Curabitur finibus tincidunt ullamcorper. Pellentesque tincidunt et odio vitae tempus. Praesent ac erat ut eros venenatis pulvinar. Pellentesque eu dapibus dui. Ut semper sed enim ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit eget velit porttitor consequat nec sed turpis. Proin libero nisl, egestas hendrerit vulputate et, lobortis non nulla. Aenean dui libero, dictum vel nibh eget, tristique egestas enim.
      </div>
    </div>
</section>


<section>
    <h1>Resize the below div!</h1>

    <div class="wrapper-2">
      <div class="box-2">
        <div class="float2"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
        <div class="float2"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci. Pellentesque gravida urna sit amet nulla suscipit, at venenatis lorem dignissim. Morbi quis nunc eu velit condimentum ornare. Curabitur finibus tincidunt ullamcorper. Pellentesque tincidunt et odio vitae tempus. Praesent ac erat ut eros venenatis pulvinar. Pellentesque eu dapibus dui. Ut semper sed enim ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit eget velit porttitor consequat nec sed turpis. Proin libero nisl, egestas hendrerit vulputate et, lobortis non nulla. Aenean dui libero, dictum vel nibh eget, tristique egestas enim.
      </div>
    </div>
</section>

<section>
    <h1>Resize the below div!</h1>

<div class="wrapper-3">
  <div class="box-3">
    <img src="https://picsum.photos/id/1/100/100"  alt=''> 
    <img src="https://picsum.photos/id/1/100/100" alt=''>
    <div class="float3"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
    <div class="float3"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci. Pellentesque gravida urna sit amet nulla suscipit, at venenatis lorem dignissim. Morbi quis nunc eu velit condimentum ornare. Curabitur finibus tincidunt ullamcorper. Pellentesque tincidunt et odio vitae tempus. Praesent ac erat ut eros venenatis pulvinar. Pellentesque eu dapibus dui. Ut semper sed enim ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit eget velit porttitor consequat nec sed turpis. Proin libero nisl, egestas hendrerit vulputate et, lobortis non nulla. Aenean dui libero, dictum vel nibh eget, tristique egestas enim.
  </div>
</div>
</section>

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
    
    
    
    
    
    




















    
    
    /*CSS FOR IMAGE ALONGWITH TEXT IN A BOX*/

	section {
		margin: 5rem 0;
	}

/* FIRST////////////////////////////////////////////////////////// */

    .wrapper-1 {
        /*Flexbox allows us to rely on the default stretch alignment to be able to later use height: 100%*/
    display:flex;
    border:1px solid;
    overflow: hidden;
    resize: horizontal;
    margin-bottom:100px;
}

/*The .box within the .wrapper is our flex item.
 We don’t need any particular CSS applied to the
  box. It defines the height of the wrapper and, at
   the same time, is stretched to the same height. This
    behavior will give us a “reference height” that can 
    be used by the child elements.*/
.box-1 {
    text-align:justify;
    font-size:20px;
}
/*Our .float element will take the entire height
 next to the text content, thanks to the height 
 calculation we detailed above. Inside this element 
 we push the image to the bottom using flexbox alignment.*/
.float-1 {
    float:right;
    height:100%;
    margin-left:15px;
    display:flex;
    align-items:flex-end;
    /*The shape-outside CSS property defines a shape—which may be 
    non-rectangular—around which adjacent inline content should wrap.
     By default, inline content wraps around its margin box; shape-outside
      provides a way to customize this wrapping, making it possible 
      to wrap text around complex objects rather than simple boxes.

In other words, shape-outside sets the way content
 flows around an element’s bounding box.*/

    shape-outside:inset(calc(100% - 100px) 0 0); 
    /* inset: 5px 15px 10px; /* top left/right bottom ; 
    The inset CSS property is a shorthand that corresponds
     to the top, right, bottom, and/or left properties.*/


     /*TP PLACE IMAGE IN CENTER USE
         justify-content:center;
    shape-outside:inset(calc(50% - 50px) 0 );
    
    */
    
    
    /*It takes a number of values. One of those is the inset() 
    function which, again, according to MDN:

Defines an inset rectangle. When all of the first four 
arguments are supplied they represent the top, right, bottom
and left offsets from the reference box inward that define 
the positions of the edges of the inset rectangle.

So, with shape-outside: inset(calc(100% - X) 0 0) we can
 create an inset rectangle that starts exactly at the top
  of the image. And the top is equal to 100% - X, where X 
  is the image height and 100% is the height of the .float
   element. This allows the text to wrap within the free
    space on the top of the image. This is responsive,
     plus we can easily switch between left and right
      (by adjusting the float property)


That’s it! The only major caveat is that you need to know the image height.*/
}


/*CSS FOR SECOND BOX*/

.wrapper-2 {
    display:flex;
    border:1px solid;
    overflow: hidden;
    resize: horizontal;
    margin-bottom:100px;
}
.box-2 {
    text-align:justify;
    font-size:20px;
}
.float2 {
    float:left;
    height:100%;
    margin-right:15px;
    display:flex;
    align-items:flex-end;
    shape-outside:inset(calc(100% - 100px) 0 0);
}
.float2 ~ .float2 {
    float:right;
    margin-left:15px;
    margin-right:0;
}

/*CSS FOR THIRD BOX*/

.wrapper-3 {
    max-width:800px;
    display:flex;
    border:1px solid;
    overflow:hidden;
    resize: horizontal;
    margin-bottom:100px;
}
.box-3 {
    text-align:justify;
    font-size:20px;
    padding-bottom: 80px;
}
.float3 {
    float:left;
    height:115%;
    margin-right: 15px;
    margin-left: -110px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    shape-outside:inset(calc(100% - 100px) 0 0);
}
.float3 ~ .float3 {
    float:right;
    margin-right: -110px;
    margin-left: 15px;
}
img {
  float:left;
    margin-right: 10px;
}
img ~ img {
  float:right;
    margin-right: 0;
    margin-left: 10px;
}
.float3  img {
  margin:0;
}
</style>
