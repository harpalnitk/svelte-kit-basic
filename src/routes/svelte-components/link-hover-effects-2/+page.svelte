<!-- https://css-tricks.com/cool-hover-effects-using-background-properties/ -->
<main class='flex-center'>
    <h3>First Hover Effect</h3>
    <section class='first'>
        <h3 class="hover-1">1. Hover Me</h3>
        
        <h3 class="hover-1 alt">2. Hover Me</h3>
    </section>
    <section class="second">
        <h3 class="hover-2">3. Hover Me</h3>
    </section>
    <section class="third">
        <h3 class="hover-3">Hover Me</h3>
    </section>
    <section class="fourth">
        <h3 class="hover-4">4. Hover Me</h3>
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
        }
        section{
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .first{
            display: grid;
  gap: 20px;
  place-content: center;
            .hover-1 {
  background: linear-gradient(#1095c1 0 0) var(--p, 0) / var(--p, 0) no-repeat;
  transition: 0.4s, background-position 0s;
}
.hover-1:hover {
  --p: 100%;
  color: #fff;
}
.hover-1.alt {
  background: linear-gradient(#1095c1 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
}
}
// .hover-1 {
//   background-image: linear-gradient(#1095c1,#1095c1);
//   background-size: 0 100%;
//   background-repeat: no-repeat;
//   transition: .4s;
// }
// .hover-1:hover {
//   background-size: 100% 100%;
// }


// We are animating the size of a linear gradient 
// from 0 100% to 100% 100%. That means the width is 
// going from 0 to 100% while the background itself 
// remains at full height. Nothing complex so far.

// We first transform our gradient to use the color only once:
// background-image: linear-gradient(#1095c1 0 0);
// The syntax might look a bit strange, but we are telling the
//  browser that one color is applied to two color stops, 
//  and that’s enough to define a gradient in CSS. Both 
//  color stops are 0, so the browser automatically
//   makes the last one 100% and fills our gradient
//    with the same color.

// With background-size, we can omit the height 
// because gradients are full height by default.
//  We can do a transition from background-size:
//   0 to background-size: 100%.
//   .hover-1 {
//   background-image: linear-gradient(#1095c1 0 0);
//   background-size: 0;
//   background-repeat: no-repeat;
//   transition: .4s;
// }
// .hover-1:hover {
//   background-size: 100%;
// }

// Let’s introduce a custom property to avoid
//  the repetition of background-size:
        
//  .hover-1 {
//   background-image: linear-gradient(#1095c1 0 0);
//   background-size: var(--p, 0%);
//   background-repeat: no-repeat;
//   transition: .4s;
// }
// .hover-1:hover {
//   --p: 100%;
// }
// We are not defining --p initially,
//  so the fallback value (0% in our case)
//   will be used. On hover, we define a 
//   value that replaces the fallback one ( 100%).

//   .hover-1 {
//   background: linear-gradient(#1095c1 0 0) left / var(--p, 0%) no-repeat;
//   transition: .4s;
// }
// .hover-1:hover {
//   --p: 100%;
// }

// We are getting closer! Note that I have 
// introduced a left value (for the background-position) 
// which is mandatory when defining the size 
// in the background shorthand. Plus, we need
//  it anyway to achieve our hover effect.

// We need to also update the position on hover. We can do that in two steps:

// 1. Increase the size from the right on mouse hover.
// 2. Decrease the size from the left on mouse out.

// .hover-1 {
//   background: linear-gradient(#1095c1 0 0) left / var(--p,0) no-repeat;
//   transition: .4s,background-position 0s;
// }
// .hover-1:hover {
//   --p: 100%;
//   background-position: right;
// }

// We added two things to our code:

// 1. A background-position value of right on hover
// 2. A transition-duration of 0s on the background-position
// This means that, on hover, we instantly change
//  the background-position from left (see,
//   we needed that value!) to right so 
//   the background’s size will increase 
//   from the right side. Then, when the
//    mouse cursor leaves the link, the 
//    transition plays in reverse, from 
//    right to left, making it appear that
//     we are decreasing the background’s size 
//     from the left side. Our hover effect is done!


// That’s true, nice catch. The left
// and right values can be changed to
//  0 0 and 100% 0, respectively; and 
//  since our gradient is already 
//  full height by default, we can get
//   by using 0 and 100%.

// .hover-1 {
//   background: linear-gradient(#1095c1 0 0) 0 / var(--p, 0%) no-repeat;
//   transition: .4s, background-position 0s;
// }
// .hover-1:hover {
//   --p: 100%;
//   background-position: 100%;
// }

// See how background-position and --p are 
// using the same values? Now we can reduce 
// the code down to three declarations:
// .hover-1 {
//   background: linear-gradient(#1095c1 0 0) var(--p, 0%) / var(--p,0%) no-repeat;
//   transition: .4s, background-position 0s;
// }
// .hover-1:hover {
//   --p: 100%;
// }

// We can still use one variable and update our code 
// slightly to achieve the opposite effect. What 
// we want is to go from 100% to 0% instead 
// of 0% to 100%. We have a difference of 100% 
// that we can express using calc(), like this:

// .hover-1 {
//   background: linear-gradient(#1095c1 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
//   transition: .4s, background-position 0s;
// }
// .hover-1:hover {
//   --p: 100%;
// }

// --p will change from 0% to 100%, but 
// the background’s position will change
//  from 100% to 0%, thanks to calc().

// Before we move to the next hover effect,
//  I want to highlight something important 
//  that you have probably noticed. When
//   dealing with custom properties, I
//    am using 0% (with a unit) instead
//     of a unit-less 0. The unit-less
//      zero may work when the custom
//       property is alone, but will fail
//        inside calc() where we need
//         to explicitly define the unit.

.second{
    .hover-2 {
  background: linear-gradient(#1095c1 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.08em);
  transition: 0.3s var(--t, 0s),
    background-position 0.3s calc(0.3s - var(--t, 0s));
}
.hover-2:hover {
  --p: 100%;
  --t: 0.3s;
  color: #fff;
}
}

// We first have a background-position transition 
// followed by a background-size one.

// .hover-2 {
//   background-image: linear-gradient(#1095c1 0 0);
//   background-size: 100% .08em; /* .08em is our fixed height; modify as needed. */
//   background-position: /* ??? */;
//   background-repeat: no-repeat;
//   transition: background-size .3s, background-position .3s .3s;
// }
// .hover-2:hover {
//   transition: background-size .3s .3s, background-position .3s;
//   background-size: 100% 100%;
//   background-position: /* ??? */;
// }

// Note the use of two transition values. On
//  hover, we need to first change the position 
//  and later the size, which is why we are adding
//   a delay to the size. On mouse out, we do the opposite.
//extra .3s is delay

// The question now is: what values do we use for
//  background-position? We left
//  those blank above. The background-size
//   values are trivial, but the ones for 
//   background-position are not. And if we
//    keep the actual configuration we’re unable to move our gradient.

// Our gradient has a width equal to 100%, 
// so we cannot use percentage values on 
// background-position to move it.

// The trick is to change the width to 
// something different than 100%. Let’s use
//  200%. We’re not worried about the 
//  background exceeding the element 
//  because the overflow is hidden anyway.
// .hover-2 {
//   background-image: linear-gradient(#1095c1 0 0);
//   background-size: 200% .08em;
//   background-position: 200% 100%;
//   background-repeat: no-repeat;
//   transition: background-size .3s, background-position .3s .3s;
// }
// .hover-2:hover {
//   transition: background-size .3s .3s, background-position .3s;
//   background-size: 200% 100%;
//   background-position: 100% 100%;
// }

// It’s time to optimize our code. If we 
// take the ideas we learned from the 
// first hover effect, we can use 
// shorthand properties and write
//  fewer declarations to make this work:

// .hover-2 {
//   background: 
//     linear-gradient(#1095c1 0 0) no-repeat
//     var(--p, 200%) 100% / 200% var(--p, .08em);
//   transition: .3s var(--t, 0s), background-position .3s calc(.3s - var(--t, 0s));
// }
// .hover-2:hover {
//   --p: 100%;
//   --t: .3s;
// }
// We add all the background properties 
// together using the shorthand version 
// then we use --p to express our values.
//  The sizes change from .08em to 100% 
//  and the position from 200% to 100%

// I am also using another variable --t ,
//  to optimize the transition property. 
//  On mouse hover we have it set to a .3s 
//  value, which gives us this:
//transition: .3s .3s, background-position .3s 0s;
//On mouse out, --t is undefined, so the fallback value will be used:
//transition: .3s 0s, background-position .3s .3s;

// Shouldn’t we have background-size in the transition?

// That is indeed another optimization we can make. 
// If we don’t specify any property it means “all” 
// the properties, so the transition is defined for
//  “all” the properties (including background-size
//   and background-position). Then it’s 
//   defined again for background-position
//    which is similar to defining it for
//     background-size, then background-position.

// “Similar” is different than saying 
// something is the “same.” You will 
// see a difference if you change more 
// properties on hover, so the last 
// optimization might be unsuitable in some cases.

// Can we still optimize the code and use only one custom property?

// Yes, we can! Ana Tudor shared a great article 
// explaining how to create DRY switching where
//  one custom property can update multiple 
//  properties. I won’t go into the details
//   here, but our code can be revised like this:

// .hover-2 {
//   background: 
//     linear-gradient(#1095c1 0 0) no-repeat
//     calc(200% - var(--i, 0) * 100%) 100% / 200% calc(100% * var(--i, 0) + .08em);
//   transition: .3s calc(var(--i, 0) * .3s), background-position .3s calc(.3s - calc(var(--i, 0) * .3s));
// }
// .hover-2:hover {
//   --i: 1;
// }

//THIRD EFFECT

.third{
    .hover-3 {
  --c: no-repeat linear-gradient(#1095c1 0 0);
  background: 
    var(--c) calc(-101% + var(--i,0)*101%) 100% / 50.1% calc(100%*var(--i,0) + .08em),
    var(--c) calc( 201% - var(--i,0)*101%) 0    / 50.1% calc(100%*var(--i,0) + .08em);
  transition: .3s calc(var(--i,0)*.3s), background-position .3s calc(.3s - var(--i,0)*.3s);
}
.hover-3:hover {
  --i: 1;
}
}

// .hover-3 {
//   background-image:
//     linear-gradient(#1095c1 0 0),
//     linear-gradient(#1095c1 0 0);
//   background-repeat: no-repeat;
//   background-size: 50% .08em;
//   background-position:                 background position is with respect to size; -100% means that 50% size background will move entirely 100% to left

//     -100% 100%,
//     200% 0;           and 200% will mean that 50% background element will move 100% to right
//   transition: background-size .3s, background-position .3s .3s;
// }
// .hover-3:hover {
//   background-size: 50% 100%;
//   background-position:
//     0 100%,
//     100% 0;  
//   transition: background-size .3s .3s, background-position .3s;
// }

// The code is almost the same as the other hover
//  effects we’ve covered. The only
//   difference is that we have two
//    gradients with two different positions.
//     The position values may look strange but,
//      again, that’s related to how percentages
//       work with the background-position property
//        in CSS, so I highly recommend reading 
//        my Stack Overflow(https://stackoverflow.com/questions/51731106/using-percentage-values-with-background-position-on-a-linear-gradient/51734530#51734530)
// answer if you want
//         to get into the gritty details.

// Now let’s optimize! You get the idea by now — 
// we’re using shorthand properties, custom properties,
//  and calc() to tidy things up.

// .hover-3 {
//   --c: no-repeat linear-gradient(#1095c1 0 0);
//   background: 
//     var(--c) calc(-100% + var(--p, 0%)) 100% / 50% var(--p, .08em),
//     var(--c) calc( 200% - var(--p, 0%)) 0    / 50% var(--p, .08em);
//   transition: .3s var(--t, 0s), background-position .3s calc(.3s - var(--t, 0s));
// }
// .hover-3:hover {
//   --p: 100%;
//   --t: 0.3s;
// }

// I am using 50.1% in that demo 
// instead of 50% for the background 
// size because it prevents a gap from
//  showing between the gradients.
//   I also added 1% to the positions 
//   for similar reasons.

//Let’s do the second optimization by using the switch variable:
// .hover-3 {
//   --c: no-repeat linear-gradient(#1095c1 0 0);
//   background: 
//     var(--c) calc(-100% + var(--i, 0) * 100%) 100% / 50% calc(100% * var(--i, 0) + .08em),
//     var(--c) calc( 200% - var(--i, 0) * 100%) 0 / 50% calc(100% * var(--i, 0) + .08em);
//   transition: .3s calc(var(--i, 0) * .3s), background-position .3s calc(.3s - var(--i, 0) * .3s);
// }
// .hover-3:hover {
//   --i: 1;
// }



.fourth{
    .hover-4 {
  --c: #1095c1;
  line-height: 1.2em;
  background: conic-gradient(from -135deg at 100% 50%, var(--c) 90deg, #0000 0)
      0 var(--p, 0%),
    conic-gradient(from -135deg at 1.2em 50%, #0000 90deg, var(--c) 0) 100%
      var(--p, 0%);
  background-size: var(--s, 0%) 200%;
  background-repeat: no-repeat;
  transition: 0.4s ease-in, background-position 0s;
}
.hover-4:hover {
  --p: 100%;
  --s: calc(
    50% + 0.61em
  ); /* it should be 0.6em(1.2em/2) but we use a litte bigger */
  color: #fff;
}
}

//This hover effect relies on two conic gradients and more calculations.

// Initially, we have both gradients 
// with zero dimensions in Step 1. We
//  increase the size of each one in
//   Step 2. We keep increasing their 
//   widths until they fully cover the
//    element, as shown in Step 3. 
//    After that, we slide them to 
//    the bottom to update their position. 
//    This is the “magic” part of the 
//    hover effect. Since both gradients
//     will use the same coloration, 
//     changing their position in Step 4
//      will make no visual difference —
//       but we will see a difference once
//        we reduce the size on mouse out
//         during Step 5.

//If you compare Step 2 and Step 5, you can see that we have a different inclination.
// Let’s translate that into code:

// .hover-4 {
//   background-image:
//     conic-gradient(/* ??? */),
//     conic-gradient(/* ??? */);
//   background-position:
//     0 0,
//     100% 0;
//   background-size: 0% 200%;
//   background-repeat: no-repeat;
//   transition: background-size .4s, background-position 0s;
// }
// .hover-4:hover {
//   background-size: /* ??? */ 200%;
//   background-position:
//     0 100%,
//     100% 100%;
// }

//The positions are pretty clear.
//  One gradient starts at top left (0 0) 
//  and ends at bottom left (0 100%) while 
//  the other starts at top right (100% 0) 
//  and ends at bottom right (100% 100%).

// We’re using a transition on the background positions
//  and sizes to reveal them. We only need a transition 
//  value for the background-size. And like before, 
//  background-position needs to change instantly,
//   so we’re assigning a 0s value for the transition’s duration.

// For the sizes, both gradient need to have 0 
// width and twice the element height (0% 200%).
//  We will see later how their sizes change on hover. 
//  Let’s first define the gradient configuration.

//conic-gradient(from -135deg at 100% 50%, red 90deg,#0000 0)
//conic-gradient(from -135deg at H 50%, #0000 90deg,green 0)

//Note that for the second gradient (indicated in green),
//  we need to know the height to use it inside the
//   conic-gradient we’re creating. For this reason,
//    I am going to add a line-height that sets the 
//    element’s height and then try that same value 
//    for the conic gradient values we left out.

// .hover-4 {
//   --c: #1095c1;
//   line-height: 1.2em;
//   background-image:
//     conic-gradient(from -135deg at 100%  50%, var(--c) 90deg, #0000 0),
//     conic-gradient(from -135deg at 1.2em 50%, #0000 90deg, var(--c) 0);
//   background-position:
//     0 0,
//     100% 0;
//   background-size: 0% 200%;
//   background-repeat: no-repeat;
//   transition: background-size .4s, background-position 0s;
// }
// .hover-4:hover {
//   background-size: /* ??? */ 200%;
//   background-position:
//     0 100%,
//     100% 100%;
// }

//The last thing we have left is to figure
//  out the background’s size. Intuitively, 
//  we may think that each gradient needs to
//   take up half of the element’s width but
//    that’s actually not enough.

//We get a gap equal to the height, 
// so we actually need to do is increase
//  the size of each gradient by half the
//   height on hover for them to cover
//    the whole element.

// .hover-4:hover {
//   background-size: calc(50% + .6em) 200%;
//   background-position:
//     0 100%,
//     100% 100%;
// }

//Here’s what we get after optimizing them like the previous examples:

// .hover-4 {
//   --c: #1095c1;
//   line-height: 1.2em;
//   background:
//     conic-gradient(from -135deg at 100%  50%, var(--c) 90deg, #0000 0) 
//       0  var(--p, 0%) / var(--s, 0%) 200% no-repeat,
//     conic-gradient(from -135deg at 1.2em 50%, #0000 90deg, var(--c) 0) 
//       100% var(--p, 0%) / var(--s, 0%) 200% no-repeat;
//   transition: .4s, background-position 0s;
// }
// .hover-4:hover {
//   --p: 100%;
//   --s: calc(50% + .6em);
// }
    </style>