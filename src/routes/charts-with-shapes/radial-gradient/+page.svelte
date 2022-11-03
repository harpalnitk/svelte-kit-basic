<main class='flex-center'>
    <h3>Basic</h3>
    <section class='basic'>
        <div class="box"></div>
    </section>
    <h3>Two Gradient</h3>
    <section class='two-gradient'>
        <div class="box"></div>
    </section>
    <h3>Two Gradient half Circles</h3>
    <section class='two-gradient-half-circles'>
        <div class="box"></div>
    </section>
    <h3>Four Gradient Closest Corner</h3>
    <section class='four-gradient-closest-corner'>
        <div class="box"></div>
    </section>
    <h3>Two Half Circles</h3>
    <section class='two-half-circles'>
        <div class="box"></div>
    </section>
    <h3>Two Circles Small Big</h3>
    <section class='two-circles-small-big'>
        <div class="box"></div>
    </section>
    <h3>Repeating Radial Gradient</h3>
    <section class='repeating-radial-gradient'>
        <div class="box"></div>
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

        .basic{
            .box{
                width: 200px;
  aspect-ratio: 1;
  border: 1px solid;
  //Basically, we first define the center and size of our ellipse 
//   (the 50% 50% at center) then we fill it with a gradient coloration
//    (the c39f76 0 80%,#0000 81% 100%). We get a full circle in this
//     case because both radii are equal ( 50% of 100px ) and because
//      we have no transition between the colors.

// We have the main color from 0% to 80% and transparent from 81%
//  to 100%. (We should have used 80% instead of 81% but we keep a 
//  small transition to avoid jagged edges.)
  background: radial-gradient(50% 50% at center, #c39f76 0% 80%,#0000 81% 100%);
 
 //optimized
 
 //background: radial-gradient(50% 50%,#c39f76 80%,#0000 81%);

 //We reduce the radius of our circle and we increase the percentage 
//  of the main color. Note that I didn't define any
//   percentage with the transparent color since it
//    should be 100% (the default value) that we can omit
 
//background: radial-gradient(40% 40%,#c39f76 99%,#0000);

 //We omit the radius and the browser will use a default setting that
 // needs another color configuration
 
 //background-image: radial-gradient(#c39f76 56%,#0000 57%);
  background-size: 100px 100px  
            }
        }


        .two-gradient{
            .box{
                width: 200px;
  aspect-ratio: 1;
  border: 1px solid;
  background: 
     radial-gradient(25% 25% at 25% 25%,#c39f76 80%,#0000 81%),
     radial-gradient(25% 25% at 75% 75%,#c39f76 80%,#0000 81%);

     //We can also use closest-side instead of 25% 25%. 
// I know, it's a strange value, but it means "use a value
//  of radius that allows the circle to touch the closest 
//  side to its center". This value is useful and can save
//   us from dealing with some complex calculations
    

background: 
     radial-gradient(closest-side at 25% 25%,#c39f76 80%,#0000 81%),
     radial-gradient(closest-side at 75% 75%,#c39f76 80%,#0000 81%);

//radial-gradient() provide us with 3 other similar values
//  ( closest-corner, farthest-side, and farthest-corner). We 
//  either define an explicit size for our radius or we use 
//  those values and the browser will automatically find the
//   radius based on specific rules.
   background-size: 100px 100px; 
            }
        }

        .two-gradient-half-circles{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;

  //The center for the first gradient is placed at 50% 100%
//    while the second one is placed at 50% 0% but we can also
//     use top and bottom as their equivalent values.
//     radial-gradient(?? at top   ,??),
//     radial-gradient(?? at bottom,??);

//For the radius, we can use 50% 50% like we did before, 
// but this time I will try something different and consider
//  50px which is half the background-size.

// When using a pixel value or any unit that's different 
// from a percentage, we can specify only one radius and
//  the browser will understand that we want a circle with
//   that radius. This is still another way to define the
//    size of our shape in addition to percentage and the specific values.

background: 
     radial-gradient(50px at top   ,#c39f76 99%,#0000),
     radial-gradient(50px at bottom,#c39f76 99%,#0000);
   background-size: 100px 100px; 


   
//Yes, the above will not give us the pattern we're 
// going for – we still need a final touch. If you check
//  the previous illustration, you'll notice that the second 
//  gradient (the green one) is shifted to the right by half 
//  the size. In other words, we need to update its background-position:

background-position: 0 0, 50px 0;

//We can optimize the code a little by using the shorthand version:

background: 
     radial-gradient(50px at top   ,#c39f76 99%,#0000),
     radial-gradient(50px at bottom,#c39f76 99%,#0000) 50px 0;
     background-size: 100px 100px; 


     --s: 100px;
   background: 
     radial-gradient(calc(var(--s)/2) at top   ,#c39f76 99%,#0000),
     radial-gradient(calc(var(--s)/2) at bottom,#c39f76 99%,#0000) calc(var(--s)/2) 0;
   background-size: var(--s) var(--s); 
}


        }


        .four-gradient-closest-corner{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;
  background: 
     radial-gradient(closest-corner at 20% 20%,#c39f76 98%,#0000),
     radial-gradient(closest-corner at 80% 20%,#c39f76 98%,#0000),
     radial-gradient(closest-corner at 20% 80%,#c39f76 98%,#0000),
     radial-gradient(closest-corner at 80% 80%,#c39f76 98%,#0000);
//A good use for closest-corner to define the radius. 
// For each layer, the browser will draw a circle placed at 
// a specific position and touch the closest corner. This 
// setting allows us to use an easy color configuration while
//  having the needed overflow.

//We can also use closest-side like below:
background: 
     radial-gradient(closest-side at 20% 20%,#c39f76 140%,#0000 141%),
     radial-gradient(closest-side at 80% 20%,#c39f76 140%,#0000 141%),
     radial-gradient(closest-side at 20% 80%,#c39f76 140%,#0000 141%),
     radial-gradient(closest-side at 80% 80%,#c39f76 140%,#0000 141%);
//The only new thing in the above code is the color 
// configuration where I am using values that are bigger
//  than 100%. Since I am using closest-side to define the
//   radius, I need to get bigger than 100% to create the overflow.

   background-size: 100px 100px;
            }
        }

        .two-half-circles{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;
  //This time, we are using a different color configuration for
//    each one. The first one has 3 colors (transparent, then
//     the main color, then transparent again). The second has
//      the same color configuration we used with the previous examples.
  background:
    radial-gradient(50% 50% at left ,#0000 70%,#c39f76 71% 80%,#0000 81%),
    radial-gradient(50% 50% at right,#c39f76 0 80%,#0000 81%);
  background-size: 100px 100px;
}
        }

        .two-circles-small-big{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;

  //It's a circle placed at the center of the area
//    (defined with background-size as usual) but this 
//    time the color configuration is not as usual. I am using
//     a transparent color for the inside part and the main
//      color outside. It should be noted that we have a small 
//      overflow as well.

//As you can see, I am using 54% instead of 50% to create the overflow.

//The second layer is a smaller circle with white color as the main color. 
  background: 
    radial-gradient(10% 10%,#fff 98%,#0000),
    radial-gradient(54% 54%,#0000 98%,#c39f76) 50px 50px;
  background-size:100px 100px;
  //Note the use of 50px 50px. Like with the 3rd pattern,
//    we need to shift one of the layers by half the size to
//     get the correct result – otherwise both circles will 
//     have the same center which is not the intended result
}
        }

        .repeating-radial-gradient{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;
  background: repeating-radial-gradient(#0000 0% 12%,#c39f76 13% 26% );
  background-size:100px 100px;
}
        }
        
    </style>