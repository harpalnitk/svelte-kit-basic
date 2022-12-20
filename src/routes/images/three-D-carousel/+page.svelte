<main class="flex-center">
	<h3>Basic Set Up</h3>
	<section class="basic">
		<div class="gallery">
			<img src="https://picsum.photos/id/1059/300/300" alt="many clothes and pictures" />
			<img src="https://picsum.photos/id/1060/300/300" alt="someone preparing artisanal coffee" />
			<img src="https://picsum.photos/id/225/300/300" alt="some tee" />
			<img src="https://picsum.photos/id/163/300/300" alt="an empty table in a restaurant" />
			<img src="https://picsum.photos/id/180/300/300" alt="a laptop with a notebook" />
			<img src="https://picsum.photos/id/20/300/300" alt="a laptop and many books around it" />
		</div>
	</section>
	<h3>Full Demo</h3>
	<section class="basic-1">
		<div class="gallery">
			<img src="https://picsum.photos/id/1059/300/300" alt="many clothes and pictures" />
			<img src="https://picsum.photos/id/1060/300/300" alt="someone preparing artisanal coffee" />
			<img src="https://picsum.photos/id/225/300/300" alt="some tee" />
			<img src="https://picsum.photos/id/163/300/300" alt="an empty table in a restaurant" />
			<img src="https://picsum.photos/id/180/300/300" alt="a laptop with a notebook" />
			<img src="https://picsum.photos/id/20/300/300" alt="a laptop and many books around it" />
		</div>
	</section>
	<h3>Vertical-Slider</h3>
	<section class="basic-2">
		<div class="gallery">
			<img src="https://picsum.photos/id/1059/300/300" alt="many clothes and pictures" />
			<img src="https://picsum.photos/id/1060/300/300" alt="someone preparing artisanal coffee" />
			<img src="https://picsum.photos/id/225/300/300" alt="some tee" />
			<img src="https://picsum.photos/id/163/300/300" alt="an empty table in a restaurant" />
			<img src="https://picsum.photos/id/180/300/300" alt="a laptop with a notebook" />
			<img src="https://picsum.photos/id/20/300/300" alt="a laptop and many books around it" />
		</div>
	</section>
    <h3>Cube-Slider</h3>
	<section class="basic-3">
        <div class="gallery">
            <img src="https://picsum.photos/id/174/400/400" alt="a hot air balloon">
            <img src="https://picsum.photos/id/175/400/400" alt="a clock">
            <img src="https://picsum.photos/id/188/400/400" alt="a sky of an old city">
            <img src="https://picsum.photos/id/211/400/400" alt="a small boat">
            <img src="https://picsum.photos/id/22/400/400" alt="a lonely man :(">
            <img src="https://picsum.photos/id/28/400/400" alt="a forest">
          </div>
	</section>
    <h3>Random Cube-Slider</h3>
	<section class="basic-4">
        <div class="gallery">
            <img src="https://picsum.photos/id/174/400/400" alt="a hot air balloon">
            <img src="https://picsum.photos/id/175/400/400" alt="a clock">
            <img src="https://picsum.photos/id/188/400/400" alt="a sky of an old city">
            <img src="https://picsum.photos/id/211/400/400" alt="a small boat">
            <img src="https://picsum.photos/id/22/400/400" alt="a lonely man :(">
            <img src="https://picsum.photos/id/28/400/400" alt="a forest">
          </div>
	</section>
</main>

<style lang="scss">
	@use 'sass:math';
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
        min-height: 80vh;
		width: 100%;
		padding: 1rem;
		margin-bottom: 1rem;
		border: 1px solid grey;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.basic {
		.gallery {
			display: grid;
		}
		.gallery > img {
			//we’re using CSS Grid to place the images
			//in a stack, one on top of another
			grid-area: 1 / 1;
			width: 160px;
			aspect-ratio: 1;
			object-fit: cover;
		}
	}

	//images are placed in a way that creates a polygon.
	//  After a full rotation, it returns to the first image.

	//  We first rotate all the images above each other. The
	//  angle of rotation depends on the number of images.
	//  For N images, we have an increment equal to 360deg/N.
	//   Then we translate all of the images by the same
	//    amount in a way that makes their center points
	//     meet on the sides

	//There’s some boring geometry that helps explain how all this works,
	//but the distance is equal to 50%/tan(180deg/N)
	.basic-1 {
		$n: 6;
		.gallery {
			display: grid;
			width: 160px;
			transform-style: preserve-3d;
			--_t: perspective(280px) rotateX(-90deg);
			animation: r 12s cubic-bezier(0.5, -0.2, 0.5, 1.2) infinite;
		}

		//same as Circular slider
		//The only difference is that we need to rotate the container by
		// -90deg along the x-axis to see the images since we have already
		// rotated them by 90deg on the same axis. Then we add a touch
		// of perspective to get the 3D effect.
		@keyframes r {
			0%,
			3% {
				transform: var(--_t) rotate(0deg);
			}
			@for $i from 1 to $n {
				#{(math.div($i, $n))*100 - 2}%,
				#{(math.div($i, $n))*100 + 3}% {
					transform: var(--_t) rotate(#{(math.div($i, $n)) * -360}deg);
				}
			}
			98%,
			100% {
				transform: var(--_t) rotate(-360deg);
			}
		}
		.gallery > img {
			grid-area: 1/1;
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
		}
		@for $i from 1 to ($n + 1) {
			.gallery > img:nth-child(#{$i}) {
				transform: rotate(#{math.div(360 * ($i - 1), $n)}deg)
					translateY(math.div(50%, math.tan(math.div(180deg, $n))))
					rotateX(90deg);
			}
		}
	}

	.basic-2 {
        $n: 6;
		.gallery {
			display: grid;
			width: 160px;
			transform-style: preserve-3d;
			--_t: perspective(280px) rotateX(-90deg);
			animation: rr 12s cubic-bezier(0.5, -0.2, 0.5, 1.2) infinite;
		}
        //replaced rotate() with rotateX() inside the keyframes and the image transform.
		@keyframes rr {
			0%,
			3% {
				transform: var(--_t) rotateX(0deg);
			}
			@for $i from 1 to $n {
				#{(math.div($i, $n))*100 - 2}%,
				#{(math.div($i, $n))*100 + 3}% {
					transform: var(--_t) rotateX(#{(math.div($i, $n)) * -360}deg);
				}
			}
			98%,
			100% {
				transform: var(--_t) rotateX(-360deg);
			}
		}
		.gallery > img {
			grid-area: 1/1;
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
		}
		@for $i from 1 to ($n + 1) {
			.gallery > img:nth-child(#{$i}) {
				transform: rotateX(#{math.div(360 * ($i - 1), $n)}deg)
					translateY(math.div(50%, math.tan(math.div(180deg, $n))))
					rotateX(90deg);
			}
		}
	}

    .basic-3{
        .gallery {
  --s: 250px; /* the size */
  
  display: grid;
  transform-style: preserve-3d;
  --_p: perspective(calc(2.5*var(--s)));
  animation: rrr 9s infinite cubic-bezier(.5,-0.5,.5,1.5);
}
.gallery img {
  grid-area: 1/1;
  width: var(--s);
  aspect-ratio: 1;
  object-fit: cover;
  //That comma makes the variable fall back to a null value. 
  //-_t for all the images except the first one because
  // I only need a translation for it
  transform: var(--_t, ) translateZ(calc(var(--s)/2));
}
//Let’s not forget the placement of our images. Each one is applied to a face of the cube using transform:
.gallery img:nth-child(2) {--_t: rotateX(-90deg)}
.gallery img:nth-child(3) {--_t: rotateY( 90deg) rotate(-90deg)}
.gallery img:nth-child(4) {--_t: rotateX(180deg) rotate( 90deg)}
.gallery img:nth-child(5) {--_t: rotateX( 90deg) rotate( 90deg)}
.gallery img:nth-child(6) {--_t: rotateY(-90deg)}
//We have six faces, so we need to perform at least six rotations
//  so that each image gets a turn. Well, actually, we need five 
//  rotations — the last one brings us back to the first image face.

//The transform property starts with zero rotations and,
// on each state, we append a new rotation on a specific 
//axis until we reach six rotations. Then we are back to the first image.
@keyframes rrr {
  0%,3%   {transform: var(--_p)}
  14%,19% {transform: var(--_p) rotateX(90deg)}
  31%,36% {transform: var(--_p) rotateX(90deg) rotateZ(90deg)}
  47%,52% {transform: var(--_p) rotateX(90deg) rotateZ(90deg) rotateY(-90deg)}
  64%,69% {transform: var(--_p) rotateX(90deg) rotateZ(90deg) rotateY(-90deg) rotateX(90deg)}
  81%,86% {transform: var(--_p) rotateX(90deg) rotateZ(90deg) rotateY(-90deg) rotateX(90deg) rotateZ(90deg)}
  97%,100%{transform: var(--_p) rotateX(90deg) rotateZ(90deg) rotateY(-90deg) rotateX(90deg) rotateZ(90deg) rotateY(-90deg)}
}
    }

    .basic-4{
        animation: b 9s infinite;
        @keyframes b {
  0%,3%   {background: #774F38}
  14%,19% {background: #C5E0DC}
  31%,36% {background: #036564}
  45%,55% {background: #B38184}
  64%,69% {background: #424254}
  81%,86% {background: #4DBCE9}
  97%,to  {background: #774F38}
}
        .gallery {
  --s: 250px; /* the size */
  
  display: grid;
  transform-style: preserve-3d;
  --_p: perspective(calc(2.5*var(--s)));
  animation: rrrr 9s infinite cubic-bezier(.5,-0.5,.5,1.5);
}
.gallery img {
  grid-area: 1/1;
  width: var(--s);
  aspect-ratio: 1;
  object-fit: cover;
  transform: var(--_t,) translateZ(calc(var(--s)/2));
}
.gallery img:nth-child(2) {--_t: rotateX(-90deg)}
.gallery img:nth-child(3) {--_t: rotateY( 90deg)}
.gallery img:nth-child(4) {--_t: rotateX(180deg) rotate( 90deg)}
.gallery img:nth-child(5) {--_t: rotateX( 90deg)}
.gallery img:nth-child(6) {--_t: rotateY(-90deg)}
//You define a transform on each keyframe that allows 
//you to show one face and

//You are not obligated to use a rotate3d() transform as I did.
// You can also chain different 
//rotations like we did in the previous example. 
@keyframes rrrr {
  0%,3%   {transform: var(--_p) rotate3d(0, 0, 0, 0deg)}
  14%,19% {transform: var(--_p) rotate3d(-1, 1, 0, 180deg)}
  31%,36% {transform: var(--_p) rotate3d(0, -1, 0, 90deg)}
  47%,52% {transform: var(--_p) rotate3d(1, 0, 0, 90deg)}
  64%,69% {transform: var(--_p) rotate3d(1, 0, 0, -90deg)}
  81%,86% {transform: var(--_p) rotate3d(0, 1, 0, 90deg)}
  97%,100%{transform: var(--_p) rotate3d(0, 0, 0, 0deg)}
} 
    }
</style>
