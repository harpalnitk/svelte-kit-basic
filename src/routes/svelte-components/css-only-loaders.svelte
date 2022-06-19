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
</style>
