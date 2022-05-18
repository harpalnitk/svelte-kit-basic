<main class='flex-center'>
    <h4>First Hover effect using text shadow</h4>
    <section class='first'>
        <h3 class="hover-1">1. Hover Me</h3>
    </section>
    <h4>First-2-With Optimized code</h4>
    <section class='first-2'>
        <h3 class="hover-1">1. Hover Me</h3>
        <h3 class="hover-1 lat">1. Hover Me - Reverse direction</h3>
    </section>
    <h4>Second Effect</h4>
    <section class='second'>
        <h3 class="hover-2">2. Hover Me</h3>
    </section>
    <h4>Second Effect-2</h4>
    <section class='second-2'>
        <h3 class="hover-2">2. Hover Me</h3>
    </section>
    <h4>Second Effect-3</h4>
    <section class='second-3'>
        <h3 class="hover-2">2. Hover Me</h3>
    </section>
    <h4>Second Effect-4- With Only one variable</h4>
    <section class='second-4'>
        <h3 class="hover-2">2. Hover Me</h3>
    </section>
    <h4>Third Hover Effect</h4>
    <section class='third'>
        <h3 class="hover-3">3. Hover Me</h3>
    </section>
    <h4>Third-2 With Optimized code</h4>
    <section class='third-2'>
        <h3 class="hover-3">3. Hover Me</h3>
    </section>
    <h4>Fourth</h4>
    <section class='fourth'>
        <h3 class="hover-4">4. Hover Me</h3>
    </section>
    </main>
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: #f8f8f8;
            flex-direction: column;
            h4{
                margin-bottom: 2rem;
            }

            h3 {
  font-family: system-ui, sans-serif;
  font-size: 3rem;
  margin:0;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0 .1em;
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
            .hover-1 {
  line-height: 1.2em;
//   The first thing to notice is that I am making the 
// color of the actual text transparent (using #0000)
//  in order to hide it.
  color: #0000;
//   After that, I am using text-shadow to create two
//    shadows where I am defining only two length 
//    values for each one. That means there’s no
//     blur radius, making for a sharp, crisp 
//     shadow that effectively produces a copy
//      of the text with the specified color.
//text-shadow: h-shadow v-shadow blur-radius color
  text-shadow: 
    0 0 #000,  //this is black text
    0 1.2em #1095c1; // this is shadow but hidden due to overflow property
  overflow: hidden; // hides the shadow
  transition: .3s;
}
.hover-1:hover {
  text-shadow: 
    0 -1.2em #000, //the black text moves up
    0 0 #1095c1; // colored text shadow takes place of black text
}


        }

        .first-2{
            display: flex;
            flex-direction: column;
            .hover-1 {
                // I am using the value 1.2em a lot to
                //  define the height and the offset of the
                //   shadows, making it an ideal candidate 
                //   for a CSS custom property (which we’re calling --h)
  --h: 1.2em;   
  
  line-height: var(--h);
  color: #0000;
//   We can still go further and apply more calc()-ulations
//    to streamline things to where we only use the text-shadow once.
  text-shadow: 
    0 calc(-1*var(--_t,0em)) #000, 
    0 calc(var(--h) - var(--_t,0em)) #1095c1;
    // In case you are wondering why I am adding an 
    // underscore to the --_t variable, it’s just a 
    // naming convention I am using to distinguish 
    // between the variables we use to control the
    //  effect that the user can update (like --h)
    //   and the internal variables that are only 
    //   used for optimization purposes that we don’t
    //    need to change (like --_t ). In other words
    //    , the underscore is part of the variable 
    //    name and has no special meaning.
  overflow: hidden;
  transition: .3s;
}
.alt {
  text-shadow: 
    0 var(--_t,0em) #000, 
    0 calc(var(--_t,0em) - var(--h)) #1095c1;
}
.hover-1:hover {
  --_t: var(--h);
}

        }

        .second{
            background: pink;
            .hover-2 {
  --h: 1.2em;   /* the height */
  
  line-height: var(--h);
  color: #0000;
//   For this one, we will animate two properties:
//    text-shadow and background. Concerning the
//     text-shadow, we still have two layers like 
//     the previous example, but this time we will
//      move only one of them while making the color
//       of the other one transparent during the swap.
  text-shadow: 
    0 var(--_t,var(--h)) #fff,   //0 1.2 white   hover  0  0 white
    0 0 var(--_c,#000);          //0  0  black          0  0 transparent  
  transition: 0.3s;
}
// On hover, we move the white text layer 
// to the top while changing the color of
//  the other one to transparent. 
.hover-2:hover {
  --_t: 0;
  --_c: #0000;
}
        }
        //To this, we add a background-size animation applied to a gradient:
        .second-2{
            background: pink;
            .hover-2 {
  --h: 1.2em;   /* the height */
  
  line-height: var(--h);
  color: #0000;
  text-shadow: 
    0 var(--_t,var(--h)) #fff,
    0 0 var(--_c,#000);
  background: 
    linear-gradient(#1095c1 0 0) 
    bottom/100% var(--_d, 0) no-repeat;
  transition: 0.3s;
}
.hover-2:hover {
  --_d: 100%;
  --_t: 0;
  --_c: #0000;
}
        }
        // And finally, we add overflow: hidden to keep 
        //the animation only visible inside the element’s boundaries:
        .second-3{
            .hover-2 {
  --h: 1.2em;   /* the height */
  
  line-height: var(--h);
  color: #0000;
  text-shadow: 
    0 var(--_t,var(--h)) #fff,
    0 0 var(--_c,#000);
    //background-image: linear-gradient(#1095c1 0 0);
    //The syntax might look a bit strange, but we
    //  are telling the browser that one color is
    //   applied to two color stops, and that’s
    //    enough to define a gradient in CSS. 
    //    Both color stops are 0, so the browser
    //     automatically makes the last one 100%
    //      and fills our gradient with the same
    //       color. Shortcuts, FTW!
    // With background-size, we can omit the height because 
    // gradients are full height by default. We can do a
    //  transition from background-size: 0 to background-size: 100%.

   // background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
 //If one of the properties in the shorthand declaration
//   is the bg-size property, you must use a / (slash)
//    to separate it from the bg-position property
   background: 
    linear-gradient(#1095c1 0 0) 
    bottom/100% var(--_d, 0) no-repeat;// from bottom width 100% height 0
    // on hover from bottom width 100% height 100%
  overflow: hidden;
  transition: 0.3s;
}
.hover-2:hover {
  --_d: 100%;
  --_t: 0;
  --_c: #0000;
}
        }

        .second-4{
            .hover-2 {
  /* the height */
  --h: 1.2em;

  line-height: var(--h);
  color: #0000;
  text-shadow: 
    0 var(--_i, var(--h)) #fff,
    0 0 rgb(0 0 0 / calc(var(--_i, 1) * 100%) );
  background: 
    linear-gradient(#1095c1 0 0) 
    bottom/100% calc(100% - var(--_i, 1) * 100%) no-repeat;
  overflow: hidden;
  transition: 0.3s;
}
.hover-2:hover {
  --_i: 0;
} 
        }


        // This hover effect is nothing but a combination 
        // of two effects we’ve already made: the second 
        // hover effect of the previous article and the
        //  first hover effect in this article.

        .third{
            .hover-3 {
  --c: #1095c1; /* the color  */
  --h: 1.2em;   /* the height */
  
  line-height: var(--h);
  background: 
    linear-gradient(var(--c) 0 0) no-repeat 
    calc(200% - var(--_p,0%)) 100%/200% var(--_p,.08em);
  color: #0000;
  overflow: hidden;
  text-shadow: 
    0 calc(-1*var(--_t,0em)) var(--c), 
    0 calc(var(--h) - var(--_t,0em)) #fff;
  transition: .3s var(--_s,0s), background-position .3s calc(.3s - var(--_s,0s));
}
.hover-3:hover {
  --_t: var(--h);
  --_p: 100%;
  --_s: .3s
}
        }
//With Optimized Code
        .third-2{
            .hover-3 {
  --c: #1095c1; /* the color  */
  --h: 1.2em;   /* the height */
  
  line-height: var(--h);  
  color: #0000;
  overflow: hidden;
  text-shadow: 
    0 calc(-1*var(--h)*var(--_i,0)) var(--c), 
    0 calc(var(--h)*(1 - var(--_i,0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));
}
.hover-3:hover {
  --_i: 1;
}

        }
//This hover effect is an improvement of the
//  second one. First, let’s introduce a clip-path
//   animation to reveal one of the text layers before it moves
        .fourth{

        }
        
    </style>