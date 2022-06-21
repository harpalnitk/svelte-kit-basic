<main class="flex-center">
	<h3>Generating two bars</h3>
	<section class="two-bars">
		<div class="loader" />
	</section>
	<h3>Generating four bars</h3>
	<section class="four-bars">
		<div class="loader" />
	</section>
	<h3>Generating eight bars</h3>
	<section class="eight-bars">
		<div class="loader" />
	</section>
	<h3>Rotate on Hover</h3>
	<section class="hover-rotate">
		<div class="loader" />
	</section>
	<h3>Use of CSS Mask with conic gradient</h3>
	<section class="mask-conic-gradient">
		<div class="box" />
	</section>
	<h3>Rotating the loader</h3>
	<section class="rotate-loader">
		<div class="loader"></div>
<div class="loader alt"></div>
	</section>
	<h3>Different Size and Colors</h3>
	<section class="size-color">
		<div class="loader" style="color:green;"></div>
		<div class="loader" style="color:red;width:120px;"></div>
		<div class="loader" style="color:purple;width:80px;"></div>
	</section>
	<h3>12 Bars using PSeudo After</h3>
	<section class="twelve-bars">
		<div class="loader" style="color:green;"></div>
		<div class="loader" style="color:red;width:120px;"></div>
		<div class="loader" style="color:purple;width:80px;"></div>
	</section>
	<h3>Same Implementation using another logic opacity</h3>
	<section class="opacity-logic">
		<div class="loader" style="color:green;"></div>
		<div class="loader" style="--c:255 0 0;width:120px;"></div>
		<div class="loader" style="--c:125 0 255;width:80px;"></div>
	</section>
	<h3>Dots</h3>
	<section class="dots">
		<div class="loader" style="color:green;"></div>
		<div class="loader" style="color:red;width:120px;"></div>
		<div class="loader" style="color:purple;width:80px;"></div>
	</section>
	<h3>Dashed Border</h3>
	<section class="dashed-border">
		<div class="loader"></div>
		<div class="loader" style="--b: 15px;--c:blue;width:120px;--n:8"></div>
		<div class="loader" style="--b: 5px;--c:green;width:80px;--n:6;--g:20deg"></div>
		<div class="loader" style="--b: 20px;--c:#000;width:80px;--n:15;--g:7deg"></div>
	</section>
	<h3>Continuous Border</h3>
	<section class="continuous-border">
		<div class="loader"></div>
	</section>
	<h3>Advanced-1</h3>
	<section class="advanced-1">
		<div class="spinner-1"></div>
		<div class="spinner-2"></div>
		<div class="spinner-3"></div>
		<div class="spinner-4"></div>
		<div class="spinner-5"></div>
		<div class="spinner-6"></div>
		<div class="spinner-7"></div>
		<div class="spinner-8"></div>
		<div class="spinner-9"></div>
		<div class="spinner-10"></div>
	</section>
	<h3>Advanced-2</h3>
	<section class="advanced-2">
		<div class="spinner-1"></div>
		<div class="spinner-2"></div>
		<div class="spinner-3"></div>
		<div class="spinner-4"></div>
		<div class="spinner-5"></div>
		<div class="spinner-6"></div>
		<div class="spinner-7"></div>
		<div class="spinner-8"></div>
		<div class="spinner-9"></div>
		<div class="spinner-10"></div>
	</section>
	<h3>Advanced-3</h3>
	<section class="advanced-3">
		<div class="spinner-1"></div>
		<div class="spinner-2"></div>
		<div class="spinner-3"></div>
		<div class="spinner-4"></div>
		<div class="spinner-5"></div>
		<div class="spinner-6"></div>
		<div class="spinner-7"></div>
		<div class="spinner-8"></div>
		<div class="spinner-9"></div>
		<div class="spinner-10"></div>
	</section>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		background: #f8f8f8;
		flex-direction: column;
		h3 {
			font-weight: 700;
			font-size: 2em;
			margin-bottom: 1rem;
		}
	}
	section {
		width: 100%;
		padding: 1rem;
		margin-bottom: 1rem;
		border: 1px solid grey;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.two-bars {
		.loader {
			width: 150px; /* control the size */
			aspect-ratio: 1; /* make height equal to width */
			background: linear-gradient(#17177c 0 0) 50%/34% 8% space no-repeat;
			//   Our gradient is defined with one color
			//  and two color stops. The result is a solid
			//   color with no fading or transitions. The
			//    size is equal to 34% wide and 8% tall.
			//     It’s also placed in the center (50%).
			//     The trick is the use of the keyword value
			//     space — this duplicates the gradient,
			//     giving us two total bars.
			// I am using a width equal to 34% which
			//  means we cannot have more than two bars
			//  (3*34% is greater than 100%) but with two
			//   bars we will have empty spaces (100% - 2 * 34% = 32%).
			//   That space is placed in the center between the two bars.
			//    In other words, we use a width for the gradient that
			//     is between 33% and 50% to make sure we have at
			//     least two bars with a little bit of space between
			//      them. The value space is what correctly places them for us.
			// We can optimize that using a CSS variable to avoid repetition:

			// --_g: linear-gradient(#17177c 0 0) 50%; /* update the color here */
			// background:
			//  var(--_g)/34% 8%  space no-repeat,
			//  var(--_g)/8%  34% no-repeat space;
		}
	}
	.four-bars {
		.loader {
			width: 150px; /* control the size */
			aspect-ratio: 1; /* make height equal to width */
			background: linear-gradient(#17177c 0 0) 50%/34% 8% space no-repeat,
				linear-gradient(#17177c 0 0) 50%/8% 34% no-repeat space;
		}
	}

	// To create the remaining bars, let’s tap into the
	//  .loader element and its ::before pseudo-element
	//   to get four more bars for a grand total of eight in all.

	.eight-bars {
		.loader {
			width: 150px; /* control the size */
			aspect-ratio: 1;
			display: grid;
			//   Note the use of display: grid.
			//  This allows us to rely on the grid’s
			//  default stretch alignment to make the
			//  pseudo-element cover the whole area of
			//   its parent; thus there’s no need to
			//    specify a dimension on it — another
			//    trick that reduces the code and avoid
			//     us to deal with a lot of values!
		}
		.loader,
		.loader::before {
			--_g: linear-gradient(#17177c 0 0) 50%; /* update the color here */
			background: var(--_g) / 34% 8% space no-repeat, var(--_g) / 8% 34% no-repeat space;
		}
		.loader::before {
			content: '';
			transform: rotate(45deg);
		}
	}

	.hover-rotate {
		.loader {
			width: 150px; /* control the size */
			aspect-ratio: 1;
			display: grid;
			cursor: pointer;
		}
		.loader,
		.loader:before {
			--_g: linear-gradient(#17177c 0 0) 50%; /* update the color here */
			background: var(--_g) / 34% 8% space no-repeat, var(--_g) / 8% 34% no-repeat space;
		}
		.loader:before {
			content: '';
			transition: 0.5s;
		}
		.loader:hover:before {
			transform: rotate(45deg);
		}
	}

	.mask-conic-gradient {
		.box {
			width: 200px;
			aspect-ratio: 1;
			background: red;
			-webkit-mask: conic-gradient(from 22deg, #0003, #000);
			mask: conic-gradient(from 22deg, #0003, #000);
		}
	}
	// // The transparency of the red color is gradually
	// increasing clockwise. We apply this to our loader
	//  and we have the bars with different opacity:

	// In reality, each bar appears to fade because it’s
	// masked by a gradient and falls between two
	// semi-transparent colors. It’s hardly noticeable
	//  when this runs, so it’s sort of like being able
	//   to say that all the bars have the same color
	//    with a different level of opacity.

	// Let’s apply a rotation animation to get our
	// loader. Note, that we need a stepped animation
	//  and not a continuous one that’s why I am using
	//   steps(8). 8 is nothing but the number of the
	//    bars, so that value can be changed depending
	//     on how many bars are in use.

	.rotate-loader{
		.loader {
  width: 150px; /* control the size */
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 22deg, #0003,#000);
          mask: conic-gradient(from 22deg, #0003,#000);
  animation: load 3s steps(8) infinite;
}
.alt {
  animation: load 3s linear infinite;
}
.loader,
.loader:before {
  --_g: linear-gradient(#17177c 0 0) 50%; /* update the color here */
  background: 
    var(--_g)/34% 8%  space no-repeat,
    var(--_g)/8%  34% no-repeat space;
}
.loader:before {
  content: "";
  transform: rotate(45deg);
}
@keyframes load {
  from {transform: rotate(0turn)}
  to   {transform: rotate(1turn)}
}
	}

	//We have our loader with only one element and a few lines of CSS. 
	// We can easily control its size 
	// and color by adjusting one value.

	.size-color{
		.loader {
  width: 150px; /* control the size */
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 22deg, #0003,#000);
          mask: conic-gradient(from 22deg, #0003,#000);
  animation: load 1s steps(8) infinite;
}
.loader,
.loader:before {
  --_g: linear-gradient(currentColor 0 0) 50%; /* update the color here */
  background: 
    var(--_g)/34% 8%  space no-repeat,
    var(--_g)/8%  34% no-repeat space;
}
.loader:before {
  content: "";
  transform: rotate(45deg);
}
@keyframes load {
  from {transform: rotate(0turn)}
  to   {transform: rotate(1turn)}
}
	}

	.twelve-bars{
		.loader {
  width: 150px; /* control the size */
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 22deg, #0003,#000);
          mask: conic-gradient(from 22deg, #0003,#000);
  animation: load 1s steps(12) infinite;
}
.loader,
.loader:before,
.loader:after{
  --_g: linear-gradient(currentColor 0 0) 50%; /* update the color here */
  background: 
    var(--_g)/34% 5%  space no-repeat,
    var(--_g)/5%  34% no-repeat space;
}
.loader:before,
.loader:after{
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}

// We update the rotation of our pseudo-elements to
//  consider 30deg and 60deg instead of 45deg while 
//  using an twelve-step animation, rather than eight.
//   I also decreased the height to 5% instead of 8%
//    to make the bars a little thinner.

// // Notice, too, that we have grid-area: 1/1 
// on the pseudo-elements. This allows us to place
//  them in the same area as one another, stacked
//   on top of each other.
.loader:after{
  transform: rotate(60deg);
}
@keyframes load {
  from {transform: rotate(0turn)}
  to   {transform: rotate(1turn)}
}
	}

	.opacity-logic{
		.loader {
  width: 150px; /* control the size*/
  --c: 0 0 0; /* the color using the RGB format */
  
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background:
    linear-gradient(0deg ,rgb(var(--c)/50%) 30%,#0000 0 70%,rgb(var(--c)/100%) 0) 50%/5% 100%,
    linear-gradient(90deg,rgb(var(--c)/25%) 30%,#0000 0 70%,rgb(var(--c)/75% ) 0) 50%/100% 5%;
  background-repeat: no-repeat;
  animation: load 1s infinite steps(12);
}
.loader::before,
.loader::after {
   content: "";
   grid-area: 1/1;
   border-radius: 50%;
   background: inherit;
   opacity: 0.915;
   transform: rotate(30deg);
}
.loader::after {
   opacity: 0.83;
   transform: rotate(60deg);
}

@keyframes load {
  from {transform: rotate(0turn)}
  to   {transform: rotate(1turn)}
}
	}

	.dots{

.loader {
  width: 150px; /* control the size */
  aspect-ratio: 1;
  display: grid;
  -webkit-mask: conic-gradient(from 15deg, #0003,#000);
          mask: conic-gradient(from 15deg, #0003,#000);
  animation: load 1s steps(12) infinite;
}
// If you check the code, you will see that we’re 
// now working with a radial gradient instead of
//  a linear one. Otherwise, the concept is 
//  exactly the same where the mask creates 
//  the impression of opacity, but we made
//   the shapes as circles instead of lines.
.loader,
.loader:before,
.loader:after{
  background:
    radial-gradient(closest-side at 50% 12.5%,currentColor 90%,#0000 98%) 
    50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%,currentColor 90%,#0000 98%) 
    0 50%/80% 20% repeat-x;
}
.loader:before,
.loader:after{
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}
.loader:after{
  transform: rotate(60deg);
}
@keyframes load {
  from {transform: rotate(0turn)}
  to   {transform: rotate(1turn)}
}
	}

	// For this one, I am only relying on background and 
	// mask to create the shape (no pseudo-elements needed).
	//  I am also defining the configuration with CSS 
	//  variables to be able to create a lot of 
	//  variations from the same code — another 
	//  example of just the powers of CSS variables
	.dashed-border{
		.loader {
  --b: 10px;  /* border thickness */
  --n: 10;    /* number of dashes*/
  --g: 10deg; /* gap  between dashes*/
  --c: red;   /* the color */
  
  width:100px; /* size */
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px; /* get rid of bad outlines */
  background: conic-gradient(#0000,var(--c)) content-box;
  --_m: /* we use +/-1deg between colors to avoid jagged edges */
    repeating-conic-gradient(#0000 0deg,
       #000 1deg calc(360deg/var(--n) - var(--g) - 1deg),
       #0000     calc(360deg/var(--n) - var(--g)) calc(360deg/var(--n))),
    radial-gradient(farthest-side,#0000 calc(98% - var(--b)),#000 calc(100% - var(--b)));
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: destination-in;
          mask-composite: intersect;
  animation: load 1s infinite steps(var(--n));
}
@keyframes load {to{transform: rotate(1turn)}}
	}

	.continuous-border{
		.loader {
  width: 120px;        /* the size */
  padding: 15px;       /* the border thickness */
  background: #07e8d6; /* the color */
  
  aspect-ratio: 1;
  border-radius: 50%;
  --_m: 
    conic-gradient(#0000,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  box-sizing: border-box;
  animation: load 1s linear infinite;
}

@keyframes load {
  to{transform: rotate(1turn)}
}
	}

	.advanced-1{
		.spinner-1 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #000 #0000;
  animation: s1 1s infinite;
}
@keyframes s1 {to{transform: rotate(.5turn)}}

.spinner-2 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid lightblue;
  border-right-color: orange;
  animation: s2 1s infinite linear;
}
@keyframes s2 {to{transform: rotate(1turn)}}

.spinner-3 {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: s3 1s infinite linear;
}
@keyframes s3 {to{transform: rotate(1turn)}}

.spinner-4 {
  width: 50px;
  --b: 8px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%,#f03355) content-box;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
    radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation:s4 1s infinite steps(10);
}
@keyframes s4 {to{transform: rotate(1turn)}}

.spinner-5 {
  width: 50px;
  --b: 8px; /* the border thickness */
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
    radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: s5 1s infinite;
}
@keyframes s5 {to{transform: rotate(.5turn)}}

.spinner-6 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: 
    radial-gradient(farthest-side,#ffa516 95%,#0000) 50% 0/12px 12px no-repeat,
    radial-gradient(farthest-side,#0000 calc(100% - 5px),#ffa516 calc(100% - 4px)) content-box;
  animation: s6 2s infinite ;
}
@keyframes s6 {to{transform: rotate(1turn)}}

.spinner-7 {
  width: 50px;
  aspect-ratio: 1;
  --_c: radial-gradient(farthest-side,#25b09b 92%,#0000);
  background: 
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: s7 1s infinite;
}
@keyframes s7 {to{transform: rotate(.5turn)}}

.spinner-8 {
  width: 50px;
  aspect-ratio: 1;
  color: #f03355;
  --_c: no-repeat radial-gradient(farthest-side,currentColor 92%,#0000);
  background: 
    var(--_c) 50% 0   /12px 12px,
    var(--_c) 50% 100%/12px 12px,
    var(--_c) 100% 50%/12px 12px,
    var(--_c) 0    50%/12px 12px,
    var(--_c) 50%  50%/12px 12px,
    conic-gradient(from 90deg at 4px 4px,#0000 90deg,currentColor 0)
    -4px -4px/calc(50% + 2px) calc(50% + 2px);
  animation: s8 1s infinite linear;
}
@keyframes s8 {to{transform: rotate(.5turn)}}

.spinner-9 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#f03355 95%,#0000) 50% 1px/12px 12px no-repeat,
    radial-gradient(farthest-side,#0000 calc(100% - 14px),#ccc 0);
  animation: s9 2s infinite linear;
}
@keyframes s9 {to{transform: rotate(1turn)}}

.spinner-10 {
  width: 50px;
  aspect-ratio: 1;
  color: #854f1d;
  border-radius: 50%;
  display: grid;
  background: 
    conic-gradient(from 90deg at 4px 4px,#0000 90deg,currentColor 0)
    -4px -4px/calc(50% + 2px) calc(50% + 2px),
    radial-gradient(farthest-side,currentColor 6px,#0000 7px calc(100% - 6px),currentColor calc(100% - 5px)) no-repeat;
  animation: s10 2s infinite linear;
  position: relative;
}
.spinner-10:before {
  content: "";
  border-radius: inherit;
  background: inherit;
  transform: rotate(45deg);
}
@keyframes s10 {to{transform: rotate(.5turn)}}
	}

	.advanced-2{
		.spinner-1 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 6px;
  background:
    conic-gradient(from 135deg at top,currentColor 90deg, #0000 0) 0 calc(50% - 4px)/17px 8.5px,
    radial-gradient(farthest-side at bottom left,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) top right/50%  50% content-box content-box,
    radial-gradient(farthest-side at top        ,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) bottom   /100% 50% content-box content-box;
  background-repeat: no-repeat;
  animation: s1 1s infinite linear;
}

@keyframes s1{ 
  100%{transform: rotate(1turn)}
}

.spinner-2 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.spinner-2::before,
.spinner-2::after {    
  content:"";
  grid-area: 1/1;
  --c: radial-gradient(farthest-side,#25b09b 92%,#0000);
  background: 
    var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: s2 1s infinite;
}
.spinner-2::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear
}

@keyframes s2{ 
  100%{transform: rotate(.5turn)}
}

.spinner-3 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#ffa516 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,#ffa516);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation: s3 1s infinite linear;
}

@keyframes s3{ 
  100%{transform: rotate(1turn)}
}

.spinner-4 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: s4 4s infinite;
}
.spinner-4::before,
.spinner-4::after {    
  content: "";
  grid-area: 1/1;
  border: 8px solid;
  border-radius: 50%;
  border-color: red red #0000 #0000;
  mix-blend-mode: darken;
  animation: s4 1s infinite linear;
}
.spinner-4::after {
  border-color: #0000 #0000 blue blue;
  animation-direction: reverse;
}

@keyframes s4{ 
  100%{transform: rotate(1turn)}
}


.spinner-5 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border:4px solid #0000;
  border-radius: 50%;
  border-right-color: #25b09b;
  animation: s5 1s infinite linear;
}
.spinner-5::before,
.spinner-5::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: s5 2s infinite;
}
.spinner-5::after {
  margin: 8px;
  animation-duration: 3s;
}

@keyframes s5{ 
  100%{transform: rotate(1turn)}
}

.spinner-6 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-color: #ccc #0000;
  animation: s6 1s infinite linear;
}
.spinner-6::before,
.spinner-6::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}
.spinner-6::before {
  border-color: #f03355 #0000;
  animation: inherit; 
  animation-duration: .5s;
  animation-direction: reverse;
}
.spinner-6::after {
  margin: 8px;
}

@keyframes s6 { 
  100%{transform: rotate(1turn)}
}

.spinner-7 {
  width: 70px;
  aspect-ratio: 1;
  background:
    radial-gradient(farthest-side,#ffa516 90%,#0000) center/16px 16px,
    radial-gradient(farthest-side,green   90%,#0000) bottom/12px 12px;
  background-repeat: no-repeat;
  animation: s7 1s infinite linear;
  position: relative;
}
.spinner-7::before {    
  content:"";
  position: absolute;
  width: 8px;
  aspect-ratio: 1;
  inset: auto 0 16px;
  margin: auto;
  background: #ccc;
  border-radius: 50%;
  transform-origin: 50% calc(100% + 10px);
  animation: inherit;
  animation-duration: 0.5s;
}


@keyframes s7 { 
  100%{transform: rotate(1turn)}
}


.spinner-8 {
  width: 50px;
  aspect-ratio: 1;
  --c: radial-gradient(farthest-side,#514b82 92%,#0000);
  background: 
    var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 10px 10px;
  background-repeat: no-repeat;
  animation: s8 1s infinite;
  position: relative;
}
.spinner-8::before {    
  content:"";
  position: absolute;
  inset:0;
  margin: 3px;
  background: repeating-conic-gradient(#0000 0 35deg,#514b82 0 90deg);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0);
  border-radius: 50%;
}

@keyframes s8 { 
  100%{transform: rotate(.5turn)}
}

.spinner-9 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  color: #854f1d;
  background: radial-gradient(farthest-side, currentColor calc(100% - 6px),#0000 calc(100% - 5px) 0);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 13px),#000 calc(100% - 12px));
  border-radius: 50%;
  animation: s9 2s infinite linear;
}
.spinner-9::before,
.spinner-9::after {    
  content: "";
  grid-area: 1/1;
  background:
    linear-gradient(currentColor 0 0) center,
    linear-gradient(currentColor 0 0) center;
  background-size: 100% 10px,10px 100%;
  background-repeat: no-repeat;
}
.spinner-9::after {
   transform: rotate(45deg);
}

@keyframes s9 { 
  100%{transform: rotate(1turn)}
}

.spinner-10 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #514b82;
  animation:
    s10-1 0.8s infinite linear alternate,
    s10-2 1.6s infinite linear;
}
@keyframes s10-1{
   0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
}
@keyframes s10-2{ 
  0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
}
	}

	.advanced-3{
		.spinner-1 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: repeating-conic-gradient(#000 0 90deg,#ccc 0 180deg);
  animation: s1 1s infinite linear;
}

@keyframes s1 {
  100% {transform: rotate(.5turn)}
}

.spinner-2 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: conic-gradient(#25b09b 25%,#f03355 0 50%,#514b82 0 75%,#ffa516 0);
  animation: s2 2s infinite linear;
}
.spinner-2::before,
.spinner-2::after {
   content: "";
   grid-area: 1/1;
   margin: 15%;
   border-radius: 50%;
   background: inherit;
   animation: inherit;
}
.spinner-2::after {
   margin: 25%;
   animation-duration: 3s;
}

@keyframes s2 {
  100% {transform: rotate(1turn)}
}


.spinner-3 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background:
    linear-gradient(0deg ,rgb(0 0 0/50%) 30%,#0000 0 70%,rgb(0 0 0/100%) 0) 50%/8% 100%,
    linear-gradient(90deg,rgb(0 0 0/25%) 30%,#0000 0 70%,rgb(0 0 0/75% ) 0) 50%/100% 8%;
  background-repeat: no-repeat;
  animation: s3 1s infinite steps(12);
}
.spinner-3::before,
.spinner-3::after {
   content: "";
   grid-area: 1/1;
   border-radius: 50%;
   background: inherit;
   opacity: 0.915;
   transform: rotate(30deg);
}
.spinner-3::after {
   opacity: 0.83;
   transform: rotate(60deg);
}

@keyframes s3 {
  100% {transform: rotate(1turn)}
}

.spinner-4 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #0000;
  border-right-color: #ffa50097;
  position: relative;
  animation: s4 1s infinite linear;
}
.spinner-4:before,
.spinner-4:after {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: inherit;
  animation: inherit;
  animation-duration: 2s;
}
.spinner-4:after {
  animation-duration: 4s;
}

@keyframes s4 {
  100% {transform: rotate(1turn)}
}


.spinner-5 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask: radial-gradient(circle closest-side at 50% 40%,#0000 94%, #000);
  transform-origin: 50% 40%;
  animation: s5 1s infinite linear;
}

@keyframes s5 {
  100% {transform: rotate(1turn)}
}

.spinner-6 {
  width: 50px;
  aspect-ratio: 1;
  display:grid;
  -webkit-mask: conic-gradient(from 15deg,#0000,#000);
  animation: s6 1s infinite steps(12);
}
.spinner-6,
.spinner-6:before,
.spinner-6:after{
  background:
    radial-gradient(closest-side at 50% 12.5%,
     #f03355 96%,#0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%,
     #f03355 96%,#0000) 0 50%/80% 20% repeat-x;
}
.spinner-6:before,
.spinner-6:after {
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}
.spinner-6:after {
  transform: rotate(60deg);
}

@keyframes s6 {
  100% {transform:rotate(1turn)}
}

.spinner-7 {
  --d:22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow: 
    calc(1*var(--d))      calc(0*var(--d))     0 0,
    calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
    calc(0*var(--d))      calc(1*var(--d))     0 2px,
    calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
    calc(-1*var(--d))     calc(0*var(--d))     0 4px,
    calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
    calc(0*var(--d))      calc(-1*var(--d))    0 6px;
  animation: s7 1s infinite steps(8);
}

@keyframes s7 {
  100% {transform: rotate(1turn)}
}

.spinner-8 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  color: #514b82;
  background: 
    conic-gradient(from 90deg at 3px 3px,#0000 90deg,currentColor 0)
    -3px -3px/calc(50% + 1.5px) calc(50% + 1.5px);
  animation: s8 2s infinite;
}

.spinner-8::before,
.spinner-8::after {
  content: "";
  grid-area: 1/1;
  background: repeating-conic-gradient(#0000 0 35deg,currentColor 0 90deg);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0);
  border-radius: 50%;
}
.spinner-8::after {
  margin: 20%;
}

@keyframes s8 {
  100% {transform: rotate(1turn)}
}

.spinner-9 {
  width: 50px;
  aspect-ratio: 1;
  --_c: no-repeat linear-gradient(orange 0 0) 50%; 
  background: 
    var(--_c)/100% 50%,
    var(--_c)/50% 100%;
  border-radius: 50%;
  animation: s9 2s infinite linear;
  
}

@keyframes s9 {
  100% {transform: rotate(1turn)}
}

.spinner-10 {
  --R: 30px;
  --g1: #514b82 96%, #0000;
  --g2: #eeeeee 96%, #0000;
  width: calc(2*var(--R));
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  -webkit-mask: linear-gradient(#000 0 0);
  animation: s10 2s infinite linear;
}

.spinner-10::before,
.spinner-10::after{
  content:"";
  grid-area: 1/1;
  width: 50%;
  background:
    radial-gradient(farthest-side,var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R)   - var(--R)),
    radial-gradient(farthest-side,var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R)   - var(--R)),
    radial-gradient(farthest-side,var(--g2)) calc(var(--R) + 0.5*var(--R)   - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
    radial-gradient(farthest-side,var(--g1)) 0 calc(-1*var(--R)),
    radial-gradient(farthest-side,var(--g2)) calc(var(--R) - 0.5*var(--R)   - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
    radial-gradient(farthest-side,var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R)   - var(--R)),
    radial-gradient(farthest-side,var(--g2)) calc(-1*var(--R))  0,
    radial-gradient(farthest-side,var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) + 0.5*var(--R)   - var(--R));
   background-size: calc(2*var(--R)) calc(2*var(--R));
   background-repeat :no-repeat;
}

.spinner-10::after {
 transform: rotate(180deg);
 transform-origin: right;
}

@keyframes s10 {
  100% {transform: rotate(-1turn)}
}
	}
</style>
