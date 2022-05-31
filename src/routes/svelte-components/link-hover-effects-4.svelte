<main class="flex-center">
	<h2>1. Using Background clip</h2>
	<section class="background-clip">
		<h3 class="hover">Hover Me</h3>
	</section>
	<h2>2. Using Background clip: With multiple gradients</h2>
	<section class="background-clip-2">
		<h3 class="hover">Hover Me</h3>
	</section>
	<h2>3. Using Background clip: Text scan effect</h2>
	<section class="background-clip-3">
		<h3 class="hover">Hover Me</h3>
	</section>
  <h2>4. Using Background clip: Slide and increase size</h2>
	<section class="background-clip-4">
		<h3 class="hover">Hover Me</h3>
	</section>
  <h2>5. Using Background clip: Slide and increase size: with fade Out</h2>
	<section class="background-clip-5">
		<h3 class="hover">Hover Me</h3>
	</section>
  <h2>6. Same above example with one css variable</h2>
	<section class="background-clip-6">
		<h3 class="hover">Hover Me</h3>
	</section>
  <h2>7. Similar-Examples</h2>
	<section class="background-clip-7">
    <div class="inverted-1">1. Hover me </div>
    <div class="inverted-2">2. Hover me </div>
    <div class="inverted-3">3. Hover me </div>
    <div class="inverted-4">4. Hover me </div>
    <div class="inverted-5">5. Hover me </div>
    <div class="inverted-6">6. Hover me </div>
    <div class="inverted-7">7. Hover me </div>
    <div class="inverted-8">8. Hover me </div>
	</section>
  <h2>8. Zig Zag</h2>
	<section class="background-clip-8">
		<h3 class="hover">Hover Me</h3>
	</section>
  <h2>9. Zig Zag With Animation</h2>
	<section class="background-clip-9">
		<h3 class="hover">Hover Me</h3>
	</section>
  <h2>10. Zig Examples</h2>
	<section class="background-clip-10">
    <h3 class="hover one">Hover Me</h3>
    <h3 class="hover two">Hover Me</h3>
    <h3 class="hover three">Hover Me</h3>
    <h3 class="hover four">Hover Me</h3>
    <h3 class="hover five">Hover Me</h3>
	</section>
  <h2>11. Wavy Line examples</h2>
	<section class="background-clip-11">
    <h3 class="hover one">Hover Me</h3>
    <h3 class="hover two">Hover Me</h3>
    <h3 class="hover three">Hover Me</h3>
    <h3 class="hover four">Hover Me</h3>
    <h3 class="hover five">Hover Me</h3>
	</section>
  <h2>12. Challenge- Decode code on own</h2>
	<section class="background-clip-12">
    <h3 class="hover">Hover Me</h3>
	</section>
  <h2>13. 3-d</h2>
	<section class="background-clip-13">
    <h3 class="d-1">Hover Me</h3>
	</section>
  <h2>14. 3-d with Translate function</h2>
	<section class="background-clip-14">
    <h3 class="d-1">Hover Me</h3>
    <h3 class="d-1" style="--b:.2em;--d:35px;--c:purple">Hover Me</h3>
    <h3 class="d-1" style="--b:3px;--d:10px;--c:darkred">Hover Me</h3>
	</section>
  <h2>15. 3-d with clip and perspective</h2>
	<section class="background-clip-15">
    <div class="d-1">1. Hover me </div>
    <div class="d-2">2. Hover me </div>
    <div class="d-3">3. Hover me </div>
    <div class="d-4">4. Hover me </div>
	</section>
  <h2>16. 3-d Effect used in picture</h2>
	<section class="background-clip-16">
    <div class="box">
      <h2>Jelly Fish</h2>
      <img src="https://picsum.photos/id/1069/400/250" alt='pic-1'>
    </div>
    <div class="box">
      <h2>Kayak Day</h2>
      <img src="https://picsum.photos/id/1011/400/250" alt='pic-2'>
    </div>
	</section>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		background: #f8f8f8;
		flex-direction: column;
		h2 {
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
		h3 {
			font-family: system-ui, sans-serif;
			font-size: 3rem;
			margin: 0;
			cursor: pointer;
			padding: 0 0.1em;
		}
	}

	.background-clip {
		.hover {
			color: #0000;
			// With background-size, we can omit the height because
			// gradients are full height by default. We can do a
			//  transition from background-size: 0 to background-size: 100%.

			// background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
			//If one of the properties in the shorthand declaration
			//   is the bg-size property, you must use a / (slash)
			//    to separate it from the bg-position property

			//The left and right values can be changed to 0 0 and 100% 0, respectively;
			// and since our gradient is already full height
			//  by default, we can get by using 0 and 100%.
			background: 
  //background 0 to 50% is blue and 50% to 100% is black
				linear-gradient(90deg, #1095c1 50%, #000 0) var(--_p, 100%) / 200%
				// above line means right/200%
				// i.e background moves from right to left
				//Explanation
				//     text
				//blue black         here background starts from right
				//     blue black    here background starts from left
				no-repeat;
			//     Let’s talk about background-clip. This CSS property accepts
			//a text keyword value that allows us to apply gradients to
			// the text of an element instead of the actual background.

			// So, for example, we can change the color of the text
			//on hover as we would using the color property,
			// but this way we animate the color change:
			-webkit-background-clip: text;
			background-clip: text;
			transition: 0.4s;
		}
		.hover:hover {
			// All I did was add background-clip: text to the element and
			// transition the background-position.
			// Doesn’t have to be more complicated than that!
			--_p: 0%;
		}
	}

	// In that example, I use two different gradients
	//  and two values with background-clip. The first
	//   background gradient is clipped to the text
	//    (thanks to the text value) to set the color
	//     on hover, while the second background gradient
	//      creates the bottom underline (thanks to
	//      the padding-box value). Everything else
	//      is straight up copied from the work we
	//       did in the first article of this series.
	.background-clip-2 {
		.hover {
			--s: 0.1em; /* the thickness of the line */
			--c: #1095c1; /* the color */

			color: #0000;
			padding-bottom: var(--s);
      //100%/200% 100%    to 0%/ 200% 100%
      //color black
      //       text
      //       color black
			background: linear-gradient(90deg, var(--c) 50%, #000 0) calc(100% - var(--_p, 0%)) / 200%
					100%,
				//below one is single color gradient
				linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) var(--s) no-repeat;
			// 0% 100%/0% 0.1em    to 0% 100%/100% 0.1em
			//left bottom/ 0 width 0.1em height  to left bottom /100% width 0.1em height

			// That’s true, nice catch. The left
			// and right values can be changed to
			//  0 0 and 100% 0, respectively; and
			//  since our gradient is already
			//  full height by default, we can get
			//   by using 0 and 100%.
			-webkit-background-clip: text, padding-box;
      //background-clip: padding-box: means background will be within the padding
      //background-clip: border-box (this is default): meand background will include border
			background-clip: text, padding-box;
			transition: 0.5s;
		}
		.hover:hover {
			--_p: 100%;
		}
	}

	// This time I changed the size of the first gradient to
	//  create the line. Then I slide it with the other gradient
	//   that update the text color to create the illusion
	.background-clip-3 {
		.hover {
			--b: 0.1em; /* the thickness of the line */
			--c: #1095c1; /* the color */

			color: #0000;
			padding-block: var(--b);
			background: 
      //linear gradient is not 90deg so top is colored bottom is black horizontally
      // 0% 100%/ 100% 200%   to    0% 0% / 100% 200%
      //initially background is above top by 100% i.e half of background size and 
      //then when it is 0% 0% background moves down and pusses down the line
      //linear gradient
      linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - var(--_p, 0%)) / 100% 200%,
      //linear gradient of line
      //0%(top) 0%(left)/0%(zero width) 0.1em(height)   to  0%(top) 100%(right)/100%(full width) 0.1em(height)  
				linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b) no-repeat;
			-webkit-background-clip: text, padding-box;
			background-clip: text, padding-box;
			transition: 0.3s var(--_s, 0s) linear, background-size 0.3s calc(0.3s - var(--_s, 0s));
		}
		.hover:hover {
			--_p: 100%;
			--_s: 0.3s;
		}
	}


  .background-clip-4{
    //All I am doing is sliding one gradient while increasing the size of another one.
    .hover {
  --c: #1095c1; /* the color */
  
  color: #0000;
  background: 
  //       text
  //white  color
  //       white color
  //100%/ 200% 100%  0%/ 200% 100%        200% width
    linear-gradient(90deg,#fff 50%,var(--c) 0) calc(100% - var(--_p,0%))/200% 100%,
    //color
    // 0% 100%/ 0% 100%    to     0% 100%/100% 100%
    //colored background increases in size from left to right on hover
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) 100% no-repeat
    ;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: 0.5s;
}
.hover:hover {
  --_p: 100%
}
  }

  .background-clip-5{
    .hover {
  --c: #1095c1; /* the color */
  
  color: #0000;
  background: 
    //       text
  //white  color
  //       white color
  //100%/ 200% 100%  0%/ 200% 100%        200% width
    linear-gradient(90deg,#fff 50%,var(--c) 0) calc(100% - var(--_p,0%))/200%,
        //color
    // 0% 100%/ 0%    to     0% 100%/100%   height of backround-size ommitted(100% by default)
    //colored background increases in size from left to right on hover
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) no-repeat,
    //transparent to colored
    var(--_c,#0000);
    //We have three background layers — two gradients and 
    // the background-color defined using --_c variable which
    //  is initially set to transparent (#0000). On hover, we
    //   change the color to white and the --_c variable to
    //    the main color (--c).
  -webkit-background-clip: text,padding-box,padding-box;
          background-clip: text,padding-box,padding-box;
  transition: 0s ,color .5s,background-color .5s;
}
.hover:hover {
//   Here’s what is happening on that transition: First,
//    we apply a transition to everything but we delay 
//    the color and background-color by 0.5s to create 
//    the sliding effect. Right after that, we change 
//    the color and the background-color. You might 
//    notice no visual changes because the text is
//     already white (thanks to the first gradient)
//      and the background is already set to the
//       main color (thanks to the second gradient).

// Then, on mouse out, we apply an instant change 
// to everything (notice the 0s delay), except for
//  the color and background-color that have a 
//  transition. This means that we put all the
//   gradients back to their initial states. 
//   Again, you will probably see no visual 
//   changes because the text color and 
//   background-color already changed on hover.

// Lastly, we apply the fading to color and
//  a background-color to create the mouse-out part of the animation.
  color: #fff;
  --_c: var(--c);
  --_p: 100%;
  transition: 0.5s,color 0s .5s,background-color 0s .5s;
}

  }

  .background-clip-6{
    .hover {
  --c: 16 149 193; /* the color using the RGB format */

  color: rgb(255 255 255 / var(--_i, 0));
  // If you’re wondering why I reached for the RGB syntax
  //  for the main color, it’s because I needed to play 
  //  with the alpha transparency. I am also using the
  //   variable --_t to reduce a redundant calculation 
  //   used in the transition property.
  background:
    /* Gradient #1 */
    linear-gradient(90deg, #fff 50%, rgb(var(--c)) 0) calc(100% - var(--_i, 0) * 100%) / 200%,
    /* Gradient #2 */
    linear-gradient(rgb(var(--c)) 0 0) 0% 100% / calc(var(--_i, 0) * 100%) no-repeat,
    /* Background Color */
    rgb(var(--c)/ var(--_i, 0));
  -webkit-background-clip: text, padding-box, padding-box;
          background-clip: text, padding-box, padding-box;
  --_t: calc(var(--_i,0)*.5s);
  transition: 
    var(--_t),
    color calc(.5s - var(--_t)) var(--_t),
    background-color calc(.5s - var(--_t)) var(--_t);
}
.hover:hover {
  --_i: 1;
}
  }








  .background-clip-7{
    display: flex;
    flex-direction: column;
    div[class] {
  color: #0000;
  font-weight: bold;
  display:inline-block;
  font-size:40px;
  font-family:sans-serif;
  margin:25px;
  padding:8px;
  cursor:pointer;
}
    .inverted-1 {
  background:
    linear-gradient(black 50%, #fff 0) 0 var(--_d, 0) /100% 200% no-repeat,
    linear-gradient(#0000 50%, #000 0) 0 var(--_d, 0) /100% 200% no-repeat;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: 0.8s
}
.inverted-1:hover {
  --_d: 50%;
}

.inverted-2 {
  background:
    linear-gradient( 90deg, #000  50%, #fff 0),
    linear-gradient(-90deg, #000  50%, #fff 0),
    linear-gradient( 90deg, #0000 50%, #000 0),
    linear-gradient(-90deg, #0000 50%, #000 0);
  background-repeat: no-repeat;
  background-size: 200% 51%;
  background-position: top left, bottom right;
  -webkit-background-clip: text, text, padding-box, padding-box;
          background-clip: text, text, padding-box, padding-box;
  transition: 0.8s
}

.inverted-2:hover {
  background-position: top right, bottom left;
}
.inverted-3 {
  background:
    linear-gradient(-135deg, #000  50%, #fff 0) var(--_d, 100%)/250% no-repeat,
    linear-gradient(-135deg, #0000 50%, #000 0) var(--_d, 100%)/250% no-repeat;
  -webkit-background-clip: text, padding-box;
          background-clip: text, padding-box;
  transition: 0.8s
}

.inverted-3:hover {
  --_d: 50%;
}

.inverted-4 {
  background:
    linear-gradient(to bottom right, #000  50%, #fff 50.1%) left/300% 300% no-repeat,
    linear-gradient(to bottom right, #0000 50%, #000 50.1%) left/300% 300% no-repeat;
  -webkit-background-clip: text, padding-box;
          background-clip: text, padding-box;
  transition: 0.8s
}
.inverted-4:hover {
  background-position: center;
}

.inverted-5 {
  background:
    linear-gradient(#000, 40%, #fff 0 60%, #000  0) left/var(--_p,0%) no-repeat,
    linear-gradient(#0000 40%, #000 0 60%, #0000 0) left/var(--_p,0%) no-repeat,
    #000;
  -webkit-background-clip: text, padding-box, text;
          background-clip: text, padding-box, text;
  transition: 0.8s
}
.inverted-5:hover {
  --_p: 100%;
}

.inverted-6 {
  --_g1: conic-gradient(from 90deg at 50% 75%,#000  90deg,#fff 0) no-repeat;
  --_g2: conic-gradient(from 90deg at 50% 75%,#0000 90deg,#000 0) no-repeat;
  background: 
    var(--_g1) 0    calc(134% - var(--_p,0%)),
    var(--_g2) 0    calc(134% - var(--_p,0%)),
    var(--_g1) 100% calc(200% - var(--_p,0%)),
    var(--_g2) 100% calc(200% - var(--_p,0%)),
    #000;
  background-size: 50.2% 400%;
  -webkit-background-clip: text, padding-box;
          background-clip: text, padding-box;
  transition: 0.8s
}
.inverted-6:hover {
  --_p: 134%;
}

.inverted-7 {
  background:
    linear-gradient(-45deg, #000  40%, #fff 0 60%, #000  0) right/300% 100% no-repeat,
    linear-gradient(-45deg, #0000 40%, #000 0 60%, #0000 0) right/300% 100% no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.8s
}
.inverted-7:hover {
  background-position: left;
}

.inverted-8 {
  background:
    linear-gradient(-45deg, #000  40%, #fff 0 60%, #000  0) right/300% 100% no-repeat,
    linear-gradient(-45deg, #0000 40%, #000 0 60%, #0000 0) right/300% 100% no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
}
.inverted-8:hover {
  background-position: left;
  transition: 0.8s
}
  }


  .background-clip-8{
    .hover {
  --c: #1095c1; /* the color */
  --s: .15em;
  
  line-height: 1.1em;
  padding-bottom: calc(2.1*var(--s));
  background: 
    conic-gradient(from 135deg at top,var(--c) 90deg,#0000 0) 
      left 0 bottom var(--s)/calc(2*var(--s)) var(--s) repeat-x,
    conic-gradient(from -45deg at bottom,var(--c) 90deg,#0000 0) 
      left var(--s) bottom 0/calc(2*var(--s)) var(--s) repeat-x
      ;
}
  }


  .background-clip-9{
    .hover {
  --c: #1095c1; /* the color */
  --s: .15em;
  
  line-height:1.1em;
  padding-bottom: calc(2.1*var(--s));
  background: 
    conic-gradient(from 135deg at top,var(--c) 90deg,#0000 0) 
      left 0 bottom var(--s)/calc(2*var(--s)) var(--s) repeat-x,
    conic-gradient(from -45deg at bottom,var(--c) 90deg,#0000 0) 
      left var(--s) bottom 0/calc(2*var(--s)) var(--s) repeat-x;
  -webkit-mask:
  // The mask is composed of two gradients. 
  // The first gradient is defined with an 
  // opaque color that covers the content
  //  area (thanks to the content-box value).
  //   That first gradient makes the text
  //    visible and hides the bottom zig-zag
  //     border. content-box is the mask-clip
  //      value which behaves the same as background-clip
    linear-gradient(#000 0 0) content-box,
    // The second gradient will cover the whole area (thanks to padding-box).
    //  This one has a width that’s defined using the --_p variable, 
    //  and it will be placed on the left side of the element.
    linear-gradient(#000 0 0) 0/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.hover:hover {
  // Now, all we have to do is to change
  //  the value of --_p on 
  //  hover to create a sliding 
  //  effect for the second gradient and reveal the underline.
  --_p: 100%;
  color: var(--c);
}
  }


  //ZIG ZAG EXAMPLES

  .background-clip-10{
    .hover {
  --c: #1095c1; /* the color */
  --s: .15em;
  
  line-height:1.1em;
  padding-bottom: calc(2.1*var(--s));
  background: 
    conic-gradient(from 135deg at top,var(--c) 90deg,#0000 0) 
      left 0 bottom var(--s)/calc(2*var(--s)) var(--s) repeat-x,
    conic-gradient(from -45deg at bottom,var(--c) 90deg,#0000 0) 
      left var(--s) bottom 0/calc(2*var(--s)) var(--s) repeat-x;
}
.hover:hover {
  color: var(--c);
}

.one {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    //LEFT/ 0 WIDTH TO 100% WIDTH
    linear-gradient(#000 0 0) 0/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.one:hover {
  --_p: 100%;
}
.two {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    //RIGHT /0 width to 100% width
    linear-gradient(#000 0 0) 100%/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.two:hover {
  --_p: 100%;
}
.three {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    //right/0%    to left/100%
    // right left is position   and 0% 100% is width
    linear-gradient(#000 0 0) calc(100% - var(--_p,0%))/var(--_p,0%) padding-box no-repeat;
  transition: .5s,-webkit-mask-position 0s .5s;
}
.three:hover {
  --_p: 100%;
}
.four {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    // start from 50% i.e. center
    linear-gradient(#000 0 0) 50% 100%/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.four:hover {
  --_p: 100%;
}
.five {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    //from left width 50% increase
    linear-gradient(#000 0 0) 0%   100%/var(--_p,0%) padding-box no-repeat,
    //from right width 50% increase
    linear-gradient(#000 0 0) 100% 100%/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.five:hover {
  --_p: 50.5%;
}
  }

  .background-clip-11{
    .hover {
  --c: #1095c1;
  --s: .15em;
  
  line-height: 1.1em;
  padding-bottom: calc(2.1*var(--s));
  //here only line changed from zig zag to wavy
  background: 
    radial-gradient(35% 100% at 50% -20%,#0000 50%,var(--c) 53% 96%,#0000) 
     left 0 bottom 0,
    radial-gradient(35% 100% at 50% 120%,#0000 50%,var(--c) 53% 96%,#0000) 
     left calc(3*var(--s)/2) bottom var(--s);
  background-size: calc(3*var(--s)) var(--s);
  background-repeat: repeat-x;
}
.hover:hover {
  color: var(--c);
}

.one {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) 0/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.one:hover {
  --_p: 100%;
}
.two {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) 100%/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.two:hover {
  --_p: 100%;
}
.three {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) calc(100% - var(--_p,0%))/var(--_p,0%) padding-box no-repeat;
  transition: .5s,-webkit-mask-position 0s .5s;
}
.three:hover {
  --_p: 100%;
}
.four {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) 50% 100%/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.four:hover {
  --_p: 100%;
}
.five {
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) 0%   100%/var(--_p,0%) padding-box no-repeat,
    linear-gradient(#000 0 0) 100% 100%/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
}
.five:hover {
  --_p: 50.5%;
}
  }


  //CHALANGE
  .background-clip-12{
    .hover {
  border: 8px solid;
  border-image: repeating-linear-gradient(135deg,#F8CA00 0 10px,#E97F02 0 20px,#BD1550 0 30px) 8;
  -webkit-mask: 
    conic-gradient(from 180deg at top 8px right 8px, #0000 90deg,#000 0)
     var(--_i,200%) 0  /200% var(--_i,8px) border-box no-repeat,
    conic-gradient(at bottom 8px left  8px,  #0000 90deg,#000 0)
     0   var(--_i,200%)/var(--_i,8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat
    ;
  transition: .3s, -webkit-mask-position .3s .3s;
}
.hover:hover {
  --_i: 100%;
  color: #CC333F;
  transition: .3s, -webkit-mask-size .3s .3s;
}
  }






  //3D
.background-clip-13{
  .d-1 {
  --c: #1095c1; /* the color */
  --b: .1em;    /* border length*/
  --d: 20px;    /* the cube depth */
  
  --_s: calc(var(--d) + var(--b));
  color: var(--c);
  border: solid #0000;
  // The top and right sides of the element both 
  // need to equal the --b value while the bottom
  //  and left sides need to equal to the sum of
  //   --b and --d (which is the --_s variable).
  border-width: var(--b) var(--b) var(--_s) var(--_s);
  // For the second part of the trick, we need to define
  //  one gradient that covers all the border areas we
  //   previously defined. A conic-gradient will work for that:
  background:
//   A conic gradient is a gradient with
// color transitions rotated around a center point.

// To create a conic gradient you must define at least two colors.
//By default, angle is 0deg and position is center.
//If no degree is specified, the colors will be spread 
//equally around the center point.

//in circle transparent color till 90deg; 0.3 color from 0 225deg i.e. from 90deg to 225deg and 0.6 color from 225 deg to 100%

//We add another gradient for the third part of
//  the trick. This one will use two semi-transparent
//   white color values that overlap the first 
//   previous gradient to create different shades
//    of the main color, giving us the illusion of shading and depth.   
//see picture  https://css-tricks.com/css-hover-effects-background-masks-3d/
conic-gradient(at left var(--d)  bottom var(--d),
      #0000 90deg, rgb(255 255 255 /0.3) 0 225deg,rgb(255 255 255 /0.6) 0) border-box,
    //For the second part of the trick, we need to define one gradient that covers all the border areas we previously defined
      conic-gradient(at left var(--_s) bottom var(--_s),
      #0000 90deg,var(--c) 0) 0 100%/calc(100% - var(--b)) calc(100% - var(--b))  border-box;
      // The last step is to apply a CSS clip-path to cut
      // the corners for that long shadow sorta feel:
      clip-path: 
    polygon(
     var(--d) 0%, 
     var(--d) 0%, 
     100% 0%, 
     100% calc(100% - var(--d)),
     100% calc(100% - var(--d)),
     var(--d) calc(100% - var(--d))
    );
  transition: 0.5s;
}
.d-1:hover {
  //see picture  https://css-tricks.com/css-hover-effects-background-masks-3d/
  //Notice the coordinates from the previous figure (indicated in red). Let’s update those to create the animation:
  clip-path: 
    polygon(
     0% var(--d), 
     var(--d) 0%, 
     100% 0%, 
     100% calc(100% - var(--d)), 
     calc(100% - var(--d)) 100%, 
     0% 100%
   );
}
}

// //The final touch is to move the element in the
//  opposite direction using translate — and the
//   illusion is perfect! Here’s the effect using 
//   different custom property values for varying depths:

.background-clip-14{
  .d-1 {
  --c: #1095c1; /* the color */
  --b: .1em;    /* border length*/
  --d: 20px;    /* the cube depth */
  
  --_s: calc(var(--d) + var(--b));
  color: var(--c);
  border: solid #0000;
  border-width: var(--b) var(--b) var(--_s) var(--_s);
  background:
    conic-gradient(at left var(--d)  bottom var(--d),
      #0000 90deg, rgb(255 255 255 /0.3) 0 225deg,rgb(255 255 255 /0.6) 0) border-box,
    conic-gradient(at left var(--_s) bottom var(--_s),
      #0000 90deg,var(--c) 0) 0 100%/calc(100% - var(--b)) calc(100% - var(--b))  border-box;
  transform: translate(calc(var(--d)/-1),var(--d));
  clip-path: 
    polygon(
     var(--d) 0%, 
     var(--d) 0%, 
     100% 0%, 
     100% calc(100% - var(--d)),
     100% calc(100% - var(--d)),
     var(--d) calc(100% - var(--d))
    );
  transition: 0.5s;
}
.d-1:hover {
  transform: translate(0,0);
  clip-path: 
    polygon(
     0% var(--d), 
     var(--d) 0%, 
     100% 0%, 
     100% calc(100% - var(--d)), 
     calc(100% - var(--d)) 100%, 
     0% 100%
   );
}
}

.background-clip-15{
  .d-1 {
   --d:14px;
   
   padding: 8px 8px 8px calc(8px + var(--d));
   background: linear-gradient(rgba(255,255,255,0.4) 0 0) left/var(--d) 100% no-repeat;
   clip-path: polygon(var(--d) 3px,var(--d) 0,100% 0,100% 100%,var(--d) 100%,var(--d) calc(100% - 3px));
   transform: perspective(1000px) rotateY(0deg);
   transition: 0.4s,color 0.4s 0.4s,background-color 0.4s 0.4s;
 }
 .d-1:hover {
   background-color: #000;
   color: #fff;
   clip-path: polygon(0px 3px,var(--d) 0,100% 0,100% 100%,var(--d) 100%,0  calc(100% - 3px));
   transform: perspective(1000px) rotateY(40deg);
   transition: 0.4s,clip-path 0.4s 0.4s,transform 0.4s 0.4s;
 }
 
  .d-2 {
   --d:14px;
   
   padding: 8px calc(8px + var(--d)) 8px 8px;
   background: linear-gradient(rgba(255,255,255,0.4) 0 0) right/var(--d) 100% no-repeat;
   clip-path: polygon(0 0,calc(100% - var(--d)) 0,calc(100% - var(--d)) 3px,calc(100% - var(--d)) calc(100% - 3px),calc(100% - var(--d)) 100%,0 100%); 
   transform: perspective(1000px) rotateY(0deg);
   transition: 0.4s,color 0.4s 0.4s,background-color 0.4s 0.4s;
 }
 .d-2:hover {
   background-color: blue;
   color: #fff;
   clip-path: polygon(0 0,calc(100% - var(--d)) 0,100% 3px,100% calc(100% - 3px),calc(100% - var(--d)) 100%,0 100%); 
   transform: perspective(1000px) rotateY(-40deg);
   transition: 0.4s,clip-path 0.4s 0.4s,transform 0.4s 0.4s;
 }
 .d-3 {
   --d:14px;
   
   padding: 8px 8px calc(8px + var(--d)) 8px;
   background: linear-gradient(rgba(255,255,255,0.4) 0 0) bottom/100% var(--d) no-repeat;
   clip-path: polygon(0 0,100% 0,100% calc(100% - var(--d)),calc(100% - 3px) calc(100% - var(--d)),3px calc(100% - var(--d)) ,0 calc(100% - var(--d))); 
   transform: perspective(1000px) rotateX(0deg);
   transition: 0.4s,color 0.4s 0.4s,background-color 0.4s 0.4s;
 }
 .d-3:hover {
   background-color: #000;
   color: #fff;
   clip-path: polygon(0 0,100% 0,100% calc(100% - var(--d)),calc(100% - 3px) 100%,3px 100% ,0 calc(100% - var(--d)));
   transform: perspective(1000px) rotateX(40deg);
   transition: 0.4s,clip-path 0.4s 0.4s,transform 0.4s 0.4s;
 }
  .d-4 {
   --d:14px;
   
   padding: calc(8px + var(--d)) 8px 8px 8px;
   background: linear-gradient(rgba(255,255,255,0.4) 0 0) top/100% var(--d) no-repeat;
   clip-path: polygon(0 var(--d),3px var(--d),calc(100% - 3px) var(--d),100% var(--d),100% 100%,0 100%); 
   transform: perspective(1000px) rotateX(0deg);
   transition: 0.4s,color 0.4s 0.4s,background-color 0.4s 0.4s;
 }
 .d-4:hover {
   background-color: blue;
   color: #fff;
   clip-path: polygon(0 var(--d),3px 0,calc(100% - 3px) 0,100% var(--d),100% 100%,0 100%); 
   transform: perspective(1000px) rotateX(-40deg);
   transition: 0.4s,clip-path 0.4s 0.4s,transform 0.4s 0.4s;
 }
}
//IMAGES
.background-clip-16{
  h2 {
  text-align: center;
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  transform: translateY(250%);
  transition: .8s;
}
.box:hover h2{
  transform: translateY(0%);
  transition: .8s .2s;
}
  img {
  /* adjust the below to control the 3D effect */
  --x: 10px;
  --y: 20px;
  transform: perspective(1000px) rotateX(var(--_a,40deg));
  /* */
  clip-path: polygon(       
     var(--y)              var(--y),       
     calc(100% - var(--y)) var(--y),       
     calc(100% - var(--y)) calc(100% - var(--y)),       
     calc(100% - var(--y) - var(--x)) var(--_c,100%),       
     calc(var(--x) + var(--y))        var(--_c,100%),      
     var(--y)        calc(100% - var(--y))       
     );
  outline: var(--y) solid rgba(0,0,0,0.4);
  outline-offset: calc(-1*var(--y));
  padding: var(--y) var(--y) 0 var(--y);
  transition: 1s;
}
.box:hover img {
  --_a: 0deg;
  --_c: calc(100% - var(--y));
}
}
</style>
