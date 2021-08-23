<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
	//overlapping avatars property set --cx

	let cx = -50;
</script>

<BasicPage title="Cutouts using SVG, Clip Path, Mask" path="/playground2" />

<main>
	<!-- Solution 1 - Clip Path -->
	<section class="section1">
		<h1>Solution 1 With Clip Path</h1>
		<div class="avatar">
			<img class="item-2" src="/img/profile/profile-1.jpg" alt="" />
			<span class="badge" />
		</div>

		<svg class="svg">
			<defs>
				<!-- By default, SVG path points are absolute. 
                    That means, they can stretch if the width 
                    and height change. To fix that early on, we
                     can use https://yoksel.github.io/relative-clip-path/
                     -->
				<clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
					<!-- Then, the path should be added to an inline SVG in the page as a <clipPath> -->
					<!-- The value objectBoundingBox for the clipPathUnits
                         attribute means that the values inside the path are
                          relative to the bounding box of the element that the 
                          clip-path is being applied to. -->
					<path
						d="M0.5,0 C0.776,0,1,0.224,1,0.5 C1,0.603,0.969,0.7,0.915,0.779 C0.897,0.767,0.876,0.76,0.853,0.76 C0.794,0.76,0.747,0.808,0.747,0.867 C0.747,0.888,0.753,0.908,0.764,0.925 C0.687,0.972,0.597,1,0.5,1 C0.224,1,0,0.776,0,0.5 C0,0.224,0.224,0,0.5,0"
					/>
				</clipPath>
			</defs>
		</svg>
	</section>

	<!-- Solution 2 - CSS Mask -->

	<section class="section2">
		<h3>Solution 2 with CSS Mask</h3>
		<h1>Learn 1</h1>
		<div class="item-learn" />
		<h2>Learn2</h2>
		<div class="item-learn2" />
		<h3>Final result with css Mask</h3>
		<img class="item" src="/img/profile/profile-2.jpg" alt="" />
	</section>

	<!-- Solution 3 - SVG Mask -->

	<section class="section3">
		<h1>Solution 3 - WITH SVG MASK</h1>

		<!-- // First, let me explain how the SVG mask works.
        // We need to create the mask, and then apply it 
        //somewhere within the SVG itself. Consider the following example. -->
		<div class="learn-1">
			<h1>Learn 1</h1>
			<svg role="none">
				<mask id="circle1">
					<circle fill="white" cx="100" cy="100" r="100" />
				</mask>
				<image
					x="0"
					y="0"
					height="100%"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					xlink:href="/img/profile/profile-cover.jpg"
					mask="url(#circle1)"
				/>
			</svg>
		</div>
		<div class="learn-2">
			<h2>Learn 2</h2>
			<svg role="none">
				<mask id="circle2">
					<circle fill="white" cx="100" cy="100" r="100" />
					<!-- That’s great. The question is, how we can make
                         the cut-out effect? Well, I learned about a very
                          interesting thing while researching this,
                           here it is.

In masks, an object with a white fill represents the area we want
 to show. While an object filled with black represents an area we
  want to hide. Interesting, right?

Let’s change the little circle fill to black instead. -->
					<circle fill="black" cx="86%" cy="86%" r="18" />
				</mask>
				<image
					x="0"
					y="0"
					height="100%"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					xlink:href="/img/profile/profile-cover.jpg"
					mask="url(#circle2)"
				/>
			</svg>
		</div>

		<div class="learn-3">
			<h2>Learn 3</h2>
			<svg role="none">
				<mask id="circle3">
					<circle fill="white" cx="100" cy="100" r="100" />
					<!-- When the mask items are both white, it
                         will lead to a result similar to merging
                          two shapes (AKA union). If one of white 
                          and the other is black, one shape will be 
                          subtracting from the other. -->
					<circle fill="white" cx="86%" cy="86%" r="18" />
				</mask>
				<image
					x="0"
					y="0"
					height="100%"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					xlink:href="/img/profile/profile-cover.jpg"
					mask="url(#circle3)"
				/>
			</svg>
		</div>

		<div class="final">
			<h3>Final with SVG MASK</h3>
			<svg role="none">
				<mask id="final-mask">
					<circle fill="white" cx="100" cy="100" r="100" />
					<circle fill="black" cx="86%" cy="86%" r="18" />
				</mask>
				<!-- The next step is to add the inner border to the avatar.
                 With SVG, this is much easier. We need to use a <circle> 
                     with an empty fill and a semi-transparent border with
                      rgba(). -->
				<g mask="url(#final-mask)">
					<image
						x="0"
						y="0"
						height="100%"
						preserveAspectRatio="xMidYMid slice"
						width="100%"
						xlink:href="/img/profile/profile-cover.jpg"
					/>
					<circle fill="none" cx="100" cy="100" r="100" stroke="rgba(0,0,0,0.1)" stroke-width="2" />
				</g>
				<!-- Notice that the image and the border
                 are within a group, and that group has a mask attribute. -->
			</svg>
		</div>
	</section>

	<!-- OVERLAPPING AVATARS -->

	<section class="section4">
		<h1>Overlapping Avatars</h1>
		<div class="wrapper" style="--cx:{cx}">
			<p class="text-center u-push-b">Mask</p>
			<div class="demo-wrapper" style="margin-bottom: 2.5rem;">
				<span class="fake-circle" />
				<svg role="none" class="avatar-wrapper">
					<mask id="test-demo">
						<circle cx="50" cy="50" r="50" fill="white" />
						<circle fill="black" class="mask-item" cy="50" r="50" />
					</mask>
					<g mask="url(#test-demo)">
						<circle fill="#fff" cx="50" cy="50" r="50" stroke="rgba(0,0,0,0.1)" stroke-width="2" />
					</g>
				</svg>
			</div>

			<p class="text-center u-push-b">Result</p>
			<svg role="none" class="avatar-wrapper final-svg">
				<style>
					.masking-circle {
						cx: var(--cx);
					}
				</style>
				<mask id="finalMask">
					<circle cx="50" cy="50" r="50" fill="white" />
					<!-- When the cx value of the black circle is 0, 
                    it will already be hiding half of the image. 
                    We can tweak this and use a negative value instead.
                     The value can be determined based on the size of the cut-out area. -->
					<circle class="masking-circle" fill="black" cy="50" r="50" />
				</mask>
				<g mask="url(#finalMask)">
					<image
						x="0"
						y="0"
						height="100%"
						preserveAspectRatio="xMidYMid slice"
						width="100%"
						xlink:href="/img/profile/profile-1.jpg"
					/>
				</g>
			</svg>

			<form action="">
				<p>
					<label for="cx">CX</label>
					<input type="range" min="-50" max="50" name="" id="cx" bind:value={cx} />
				</p>
			</form>
		</div>
	</section>

	<!-- OVERLAPPING AVATARS EITH BOTH IMAGES-->
	<section class="section5">
		<h1>Overlapping Avatars With Both Images</h1>
		<div class="wrapper">
			<div class="card">
				<div class="card__content">
					<div class="seen-group">
						<svg role="none" class="avatar-wrapper1">
							<style>
								.avatar-wrapper1 circle {
									cx: calc(var(--size1) / 2);
									cy: calc(var(--size1) / 2);
									r: calc(var(--size1) / 2);
								}
							</style>

							<mask id="test2">
								<circle fill="white" />
							</mask>
							<g mask="url(#test2)">
								<image
									x="0"
									y="0"
									height="100%"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									xlink:href="/img/profile/profile-1.jpg"
								/>
								<circle fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2" />
							</g>
						</svg>
						<svg role="none" class="avatar-wrapper1">
							<style>
								.avatar-wrapper1 circle {
									cx: calc(var(--size1) / 2);
									cy: calc(var(--size1) / 2);
									r: calc(var(--size1) / 2);
								}
							</style>

							<mask id="image2">
								<circle fill="white" />
								<circle fill="black" cx="-30" />
							</mask>
							<g mask="url(#image2)">
								<image
									x="0"
									y="0"
									height="100%"
									preserveAspectRatio="xMidYMid slice"
									width="100%"
									xlink:href="/img/profile/profile-2.jpg"
								/>
								<circle fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2" />
							</g>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- HEADER WITH LOGO IN THE CENTRE -->
	<h1>Site Header With LOGO in centre</h1>

    <!-- For this solution, I used the same technique used previously.
         There is a rectangle with a white
          fill and a circle with a black fill.
           This will create a cut-out effect. -->
	<section class="section6">
		<header>
			<div class="logo">Logo</div>
            <!-- Keep in mind that the SVG needs to be positioned absolutely to cover the whole header area. -->


			<svg role="none" height="80">
				<defs>
					<mask id="hole">
						<rect width="100%" height="100%" fill="white" />
						<circle cx="50%" cy="80%" r="58" fill="black" />
					</mask>
				</defs>

				<rect class="bg" width="100%" height="100%" mask="url(#hole)" />
			</svg>
		</header>

		<div class="wrapper">
			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>

			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>

			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>
			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>
			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>
			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>
			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>
			<h2>This is a title</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, beatae ab nesciunt optio
				accusantium atque expedita. Amet ducimus rem impedit consequatur tempora, inventore, quidem
				labore perspiciatis, aliquid id corrupti laboriosam.
			</p>
		</div>
	</section>
</main>

<style lang="scss">
	@import '../../styles/vars';
	main {
		min-height: 100vh;
		position: relative;
		width: min(70rem, 90vw);
		margin: 0 auto;
	}
	// Solution 1 - Clip Path
	.section1 {
		.avatar {
			position: relative;
			--size: 175px;
			width: var(--size);
			height: var(--size);
			margin: 1rem auto;
			// //   Unfortunately, it’s not possible to add an inner
			// shadow for an <img>. To work around that,
			// we can either use an additional HTML element
			//  (e.g: span) or a pseudo-element.

			// // I will go with the pseudo-element.
			&:after {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				border: 1px solid;
				opacity: 0.2;
				clip-path: url('#my-clip-path');
			}

			&.seen {
				&:after {
					clip-path: url('#seen');
				}
			}
		}

		.item-2 {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 50%;
			clip-path: url('#my-clip-path');

			&.seen {
				clip-path: url('#seen');
				border-radius: 0;
			}
		}
	}

	.section2 {
		//   By using a radial-gradient, we can draw a circle and then fill the rest of the space with another color.
		.item-learn {
			display: block;
			width: 200px;
			height: 200px;
			background-image: radial-gradient(
				circle 20px at calc(100% - 30px) calc(100% - 30px),
				yellow 30px,
				purple 0
			);
		}
		// Next, we need to change the circle color to transparent and add border-radius to the element.
		.item-learn2 {
			display: block;
			width: 200px;
			height: 200px;
			background-image: radial-gradient(
				circle 20px at calc(100% - 30px) calc(100% - 30px),
				transparent 30px,
				purple 0
			);
			border-radius: 50%;
		}

		.item {
			display: block;
			width: 200px;
			height: 200px;
			//   Based on that, we can use it as a CSS mask as below.
			-webkit-mask-image: radial-gradient(
				circle 20px at calc(100% - 30px) calc(100% - 30px),
				transparent 30px,
				#000 0
			);
			mask-image: radial-gradient(
				circle 20px at calc(100% - 30px) calc(100% - 30px),
				transparent 30px,
				#000 0
			);
			//   With this solution, it’s possible to add an outer
			// border as it will be masked within the shape. However,
			//  for an inner border (AKA: inset shadow), it’s not
			//   possible until we use another element for that,
			//    just like the previous solution.
			object-fit: cover;
			border-radius: 50%;
			margin: 2rem auto;
		}
	}

	// Solution 3 - SVG Mask

	.section3 {
		// First, let me explain how the SVG mask works.
		// We need to create the mask, and then apply it
		//somewhere within the SVG itself. Consider the following example.
		.learn-1,
		.learn-2,
		.learn-3 {
			width: 200px;
			height: 200px;
			margin: 4rem auto;

			svg {
				width: 100%;
				height: 100%;
			}

			img {
				max-width: 100%;
			}
		}
		.final {
			width: 200px;
			height: 200px;
			margin: 2rem auto;

			svg {
				width: 100%;
				height: 100%;
			}

			img {
				max-width: 100%;
			}
		}
	}

	// <!-- OVERLAPPING AVATARS -->

	.section4 {
		.wrapper {
			//   --cx: -50; //we will set this using svelte inline
			max-width: 700px;
			margin: 2rem auto;
		}

		.border {
			stroke-width: 3;
			stroke: rgba(0, 0, 0, 0.1);
			fill: none;
		}

		.avatar-wrapper {
			--size: 100px;
			width: var(--size);
			height: var(--size);
		}

		.demo-wrapper {
			display: flex;
			justify-content: center;
		}

		.mask-item {
			cx: var(--cx);
		}

		.fake-circle {
			position: relative;
			right: calc((var(--cx) + 50) * -1px);
			width: 100px;
			height: 100px;
			border-radius: 50%;
			border: 2px solid lightgrey;
			background: #222 linear-gradient(45deg, #0000 50%, grey 0, #0000 10px);
			background-size: 14px 14px;
		}

		form {
			margin-top: 1rem;

			p {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		label {
			font-size: 0.85rem;
			margin-right: 0.25rem;
		}

		.demo-content {
			margin-top: 3.5rem;
			text-align: center;

			p {
				color: #4c4c4c;
				font-size: 0.85rem;
			}

			a {
				color: #2842c7;
			}
		}

		.final-svg {
			text-align: center;
			margin: 0 auto;
			display: block;
		}

		.text-center {
			text-align: center;
		}

		.u-push-b {
			margin-bottom: 1rem;
		}
	}

	// <!-- OVERLAPPING AVATARS EITH BOTH IMAGES-->
	.section5 {
		.seen-group {
			display: flex;
			//   To define the negative margin value between the two avatars, we need to divide the size by 5.5 and multiply by -1
			> * + * {
				margin-left: calc(var(--size1) / 5.5 * -1);

				circle[fill='black'] {
					cx: calc(var(--size1) / 4 * -1);
					cy: calc(var(--size1) / 2);
					r: calc(var(--size1) / 2);
				}
			}
		}

		.wrapper {
			max-width: 344px;
			margin: 2rem auto;
		}

		.card {
			--primary-text: #050505;
			--secondary-text: #65676b;
			--bg-color: #fff;

			position: relative;
			background-color: var(--bg-color);
			padding: 8px 12px 8px 8px;
			border-radius: 7px;
			box-shadow: 0 3px 15px 0 rgba(#000, 0.05);
		}

		.card__content {
			display: flex;
			justify-content: center;
		}

		.avatar-wrapper1 {
			--size1: 100px;
			width: var(--size1);
			height: var(--size1);
		}
	}

	// <!-- HEADER WITH LOGO IN THE CENTRE -->

	.section6 {
        --header-height: 100px;
  --radius: 55px;
  --logo-size: calc(calc(var(--radius) * 2) - 8px);

  header {
  position: sticky;
  top: 0;
  text-align: center;
  backdrop-filter: blur(2px);
  height: 80px;

  svg {
    // Keep in mind that the SVG needs to be positioned absolutely to cover the whole header area.


    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .bg {
    fill: #95a57f;
  }
}

.logo {
  position: relative;
  top: calc(var(--header-height) * 0.7 - var(--radius));
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--logo-size);
  height: var(--logo-size);
  border-radius: 50%;
  background: #7eaf24;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
}

.wrapper {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;

  > * {
    margin-bottom: 1rem;
  }

  p {
    font-size: 18px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
}

	}
</style>
