<main class='flex-center'>
    <h2>Using Background clip</h2>
    <section class='background-clip'>
        <h3 class="hover">Hover Me</h3>
    </section>
    <h2>Using Background clip: With multiple gradients</h2>
    <section class='background-clip-2'>
        <h3 class="hover">Hover Me</h3>
    </section>
    <h2>Using Background clip: Text scan effect</h2>
    <section class='background-clip-3'>
        <h3 class="hover">Hover Me</h3>
    </section>
    </main>
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: #f8f8f8;
            flex-direction: column;
            h2{
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
            h3 {
  font-family: system-ui, sans-serif;
  font-size: 3rem;
  margin:0;
  cursor: pointer;
  padding: 0 .1em;
}
        }

        .background-clip{
            .hover {
  color: #0000;
      // With background-size, we can omit the height because 
    // gradients are full height by default. We can do a
    //  transition from background-size: 0 to background-size: 100%.

   // background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
 //If one of the properties in the shorthand declaration
//   is the bg-size property, you must use a / (slash)
//    to separate it from the bg-position property
  background: 
    linear-gradient(90deg,#1095c1 50%,#000 0) 
    var(--_p,100%)/200% 
    
    no-repeat;
//     Let’s talk about background-clip. This CSS property accepts 
//a text keyword value that allows us to apply gradients to
// the text of an element instead of the actual background.

// So, for example, we can change the color of the text 
//on hover as we would using the color property,
// but this way we animate the color change:
  -webkit-background-clip: text;
          background-clip: text;
  transition: .4s;
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
        .background-clip-2{
            .hover {
  --s: 0.1em;   /* the thickness of the line */
  --c: #1095c1; /* the color */
  
  color: #0000;
  padding-bottom: var(--s);
  background: 
    linear-gradient(90deg,var(--c) 50%,#000 0) calc(100% - var(--_p,0%))/200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) var(--s) no-repeat;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: 0.5s;
}
.hover:hover {
  --_p: 100%
}
        }





        // This time I changed the size of the first gradient to
        //  create the line. Then I slide it with the other gradient
        //   that update the text color to create the illusion
        .background-clip-3{
            .hover {
  --b: 0.1em;   /* the thickness of the line */
  --c: #1095c1; /* the color */
  
  color: #0000;
  padding-block: var(--b);
  background: 
    linear-gradient(var(--c) 50%,#000 0) 0% calc(100% - var(--_p,0%))/100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));
}
.hover:hover {
  --_p: 100%;
  --_s: .3s;
}
        }
        
    </style>