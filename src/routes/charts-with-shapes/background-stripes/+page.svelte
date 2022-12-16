<!-- https://css-tricks.com/animated-background-stripes-transition-hover/ -->
<main class='flex-center'>
    <h3>Basic Div</h3>
    <section class='basic'>
        <div></div>
    </section>
    <h3>Basic Div with background</h3>
    <section class='basic-1'>
        <div></div>
    </section>
    <h3>Basic Div with background with variables</h3>
    <section class='basic-2'>
        <div></div>
    </section>
    <h3>Setting width</h3>
    <section class='basic-3'>
        <div></div>
    </section>
    <h3>Setting both width and height</h3>
    <section class='basic-4'>
        <div></div>
    </section>
    <h3>With gaps</h3>
    <section class='basic-5'>
        <div></div>
    </section>
    <!-- A black and white pattern like this is perfect for 
        masking and blending. To do that, we’re first going
         to wrap our <div> in a new parent container and
             introduce a second <div> under it: -->
    <h3>With container and white background</h3>
    <section class='basic-6'>
        <section>
            <div></div>
            <div></div>
          </section>
    </section>
    <h3>With MASKING</h3>
    <section class='basic-7'>
        <section>
            <div></div>
            <div></div>
          </section>
    </section>
    <h3>HOVER effect</h3>
    <section class='basic-8'>
        <section>
            <div></div>
            <div></div>
            <strong>Click Here for Survey</strong>
          </section>
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
           // border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .basic{
            div {
  width: 500px;
  height: 500px;
  background: palegreen;
}
        }
        .basic-1{
            div {
  width: 500px;
  height: 500px;
  background: 
    linear-gradient(black, black) top right,
    linear-gradient(black, black) top 100px right,
    linear-gradient(black, black) top 200px right,
    linear-gradient(black, black) top 300px right,
    linear-gradient(black, black) top 400px right, 
    palegreen;
}
        }

        .basic-2{
            div {
  --gt: linear-gradient(black, black);
  --n: 100px;

  width: 500px;
  height: 500px;
  background: 
    var(--gt) top right,
    var(--gt) top var(--n) right,
    var(--gt) top calc(var(--n) * 2) right,
    var(--gt) top calc(var(--n) * 3) right,
    var(--gt) top calc(var(--n) * 4) right, 
    palegreen;
    //One more thing we ought to do before moving on is
    //  prevent our backgrounds from repeating; otherwise,
    //   they’ll tile and fill the entire space
  background-repeat: no-repeat;
}
        }
        //This is where we get to use the background-size property. 
        // We want to set both the height and the width of the stripes
        //  and the property supports a two-value syntax that allows
        //   us to do exactly that
        //Let’s start simple by setting the widths first.
        .basic-3{
            div {
  --gt: linear-gradient(black, black);
  --n: 100px;

  width: 500px;
  height: 500px;
  background: 
    var(--gt) top right,
    var(--gt) top var(--n) right,
    var(--gt) top calc(var(--n) * 2) right,
    var(--gt) top calc(var(--n) * 3) right,
    var(--gt) top calc(var(--n) * 4) right, 
    palegreen;
  background-repeat: no-repeat;
  background-size: 60%, 90%, 70%, 40%, 10%;
}
        }
        //Doesn’t exactly look like we set the width for all the stripes,
        //  does it? That’s because of the auto height behavior of the
        //   single-value syntax. The second stripe is wider than
        //    the others below it, and it is covering them. We ought
        //     to set the heights so we can see our work.
        .basic-4{
            div {
  --gt: linear-gradient(black, black);
  --n: 100px;

  width: 500px;
  height: 500px;
  background: 
    var(--gt) top right,
    var(--gt) top var(--n) right,
    var(--gt) top calc(var(--n) * 2) right,
    var(--gt) top calc(var(--n) * 3) right,
    var(--gt) top calc(var(--n) * 4) right, 
    palegreen;
    background-repeat: no-repeat;
    background-size: 60% var(--n), 90% var(--n), 70% var(--n), 40% var(--n), 10% var(--n); // HIGHLIGHT 15
}
        }

        .basic-5{
            div {
  --gt: linear-gradient(black, black);
  --n: 100px;
  //We can continue to use our --n variable, but subtract a 
  //small amount, say 5px, using calc() to get what we want.
  --h: calc(var(--n) - 5px);

  width: 500px;
  height: 500px;
  background: 
    var(--gt) top right, 
    var(--gt) top var(--n) right,
    var(--gt) top calc(var(--n) * 2) right, 
    var(--gt) top calc(var(--n) * 3) right,
    var(--gt) top calc(var(--n) * 4) right, 
    palegreen;
  background-repeat: no-repeat;
  background-size: 60% var(--h), 90% var(--h), 70% var(--h), 40% var(--h),
    10% var(--h);
}
        }

        //Now let’s swap the palegreen background color we’ve 
        //been using for visual
        // purposes up to this point for white.
        .basic-6{
            section {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 500px;
  height: 500px;
} 

section > div {
  width: inherit;
  height: inherit;
  //I’m also going to use CSS Grid to position
  // the two <div> elements on top of one another.
  grid-area: 1 / 1;
  
  --gt: linear-gradient(black, black);
  --n: 100px;
  --h: calc(var(--n) - 5px);


  background: 
    var(--gt) top right, 
    var(--gt) top var(--n) right,
    var(--gt) top calc(var(--n) * 2) right, 
    var(--gt) top calc(var(--n) * 3) right,
    var(--gt) top calc(var(--n) * 4) right, 
    #fff;
  background-repeat: no-repeat;
  background-size: 60% var(--h), 90% var(--h), 70% var(--h), 40% var(--h),
    10% var(--h);

}
        }
        //MASKING:  The area covered by white will remain white, and the area 
        //covered by black leaks through.

        .basic-7{
            section {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 500px;
  height: 500px;
}
section > div {
  width: inherit;
  height: inherit;
  grid-area: 1 / 1;
}
div:nth-child(1) {
  background: linear-gradient(to right, red, orange);
}
div:nth-child(2) {
  --gt: linear-gradient(black, black);
  --n: 100px;
  --h: calc(var(--n) - 5px);
  background: 
    var(--gt) top right, 
    var(--gt) top var(--n) right,
    var(--gt) top calc(var(--n) * 2) right, 
    var(--gt) top calc(var(--n) * 3) right,
    var(--gt) top calc(var(--n) * 4) right, 
    white;
  background-repeat: no-repeat;
  background-size: 60% var(--h), 90% var(--h), 70% var(--h), 40% var(--h), 10% var(--h);
  mix-blend-mode: screen;
}
        }

        .basic-8{
            section  {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 500px;
  height: 500px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;
}  
section > *  {
  width: inherit;
  height: inherit;
  grid-area: 1 / 1;
}
section > div:nth-child(1) { 
  background: linear-gradient(to right, red, orange); 
}
section > div:nth-child(2)  {
  --gt: linear-gradient(black, black);
  --n: 100px;
  --h: calc(var(--n) - 5px);
  background: 
    var(--gt) top right,
    var(--gt) top var(--n) right,
    var(--gt) top calc(var(--n) * 2) right,
    var(--gt) top calc(var(--n) * 3) right,
    var(--gt) top calc(var(--n) * 4) right, 
    beige;
  background-size: 60% var(--h), 90% var(--h), 70% var(--h), 40% var(--h), 10% var(--h);
  mix-blend-mode: screen;
  background-repeat: no-repeat;
  transition: background-size 1s;
}
//We’ll want to change the background-size of the stripes to the full width of the 
//container while maintaining the same height
section:hover > div:nth-child(2)  {
  background-size: 100% var(--h);
  //That “snaps” the background to full-width. 
  //If we add a little transition to this,
  // then we see the stripes expand on hover
  transition: background-size 1s;
}
strong  {
  height: max-content;
  text-align: center;   
  isolation: isolate;
  font-family: 'bungee shade';
  font-size: 95px;
  color: maroon;
}
        }
    </style>