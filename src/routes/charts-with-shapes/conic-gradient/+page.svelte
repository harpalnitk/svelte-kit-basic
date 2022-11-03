<!-- https://verpex.com/blog/website-tips/how-to-create-background-pattern-using-css-conic-gradient -->
<main class='flex-center'>
    <h3>Basic</h3>
    <section class='basic'>
        <div class="box"></div>
    </section>
    <h3>Basic with hard color stops</h3>
    <section class='basic-2'>
        <div class="box"></div>
    </section>
    <h3>Basic with background size</h3>
    <section class='basic-3'>
        <div class="box"></div>
    </section>
    <h3>Chessboard Design</h3>
    <section class='chessboard'>
        <div class="box"></div>
    </section>
    <h3>Two Gradient overlap</h3>
    <section class='gradient-overlap'>
        <div class="box"></div>
    </section>
    <h3>Paper-1</h3>
    <section class='paper-1'>
        <div class="box"></div>
    </section>
    <h3>Paper-2</h3>
    <section class='paper-2'>
        <div class="box"></div>
    </section>
    <h3>Paper Final Optimized</h3>
    <section class='paper-final'>
        <div class="box"></div>
    </section>
    <h3>Triangular Pattern</h3>
    <section class='triangular'>
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
            .box {
  width: 200px;
  aspect-ratio: 1;
  border: 1px solid;
  //We place the center point at X=75% and Y=25% then we create a 
  //color transition between red, blue, and yellow
  background: conic-gradient(at 75% 25%, red, blue, yellow)
}
        }
        .basic-2{
            .box {
  width: 200px;
  aspect-ratio: 1;
  border: 1px solid;
  //background: conic-gradient(at 75% 25%, red 90deg, blue 90deg 225deg, yellow 225deg)
  //below one is same as upper one
  background: conic-gradient(at 75% 25%, red 90deg, blue 0 225deg, yellow 0)
//By specifying 0 (a value smaller than the previous one) the 
//browser will automatically make it equal to the previous one. 
//This will avoid us writing the same value twice.
}
        }
        .basic-3{
            .box {
  width: 200px;
  aspect-ratio: 1;
  border: 1px solid;
  background: conic-gradient(at 75% 25%, red 90deg, blue 0 225deg, yellow 0);
  background-size: 50px 50px;
}
        }
        .chessboard{
            .box{
                width: 200px;
  aspect-ratio: 1;
  border: 1px solid;
  //It’s clear that the center of our circle is placed at the center of the background area
  // (the default position) so we don’t need to define it. 
  //Then we have 4 colors (2 whites and 2 blacks) each one 
  //filling 90deg (25% of the area). The code will be:
  
 background: conic-gradient(#000 90deg,#fff 0 180deg,#000 0 270deg,#fff 0);
  
  //We have repetition so we can optimize the syntax using a 
  //repeating gradient and write the colors only once
  
  //background: repeating-conic-gradient(#000 0 90deg, #fff 0 180deg);

  //We can also use a percentage instead of a degree

// background: repeating-conic-gradient(#000 0 25%, #fff 0 50%);
  background-size: 100px 100px;
}
        }

        .gradient-overlap{
            .box {
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;
  --s: 100px; /* control the size */
  
  --_g: #ECEDDC /* first color */ 90deg,#0000 90.5deg;

//background:
// conic-gradient(from -45deg,#ECEDDC 90deg,#0000   0),
//   conic-gradient(from 135deg,#ECEDDC 90deg,#29AB87 0);

  background:
   conic-gradient(from -45deg,var(--_g)),
  //second gradient is shifted right by 50px
  //The 50px 0 is nothing but the background-position of 
  //the second gradient and 50px is half the background-size
   conic-gradient(from 135deg,var(--_g)) calc(var(--s)/2) 0,
   #29AB87
   ; 
   /* second color */
  background-size: var(--s) var(--s)
}
        }

        .paper-1{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;   
  //0 0 is background position
  //100px 100px is background size   
  background: conic-gradient(from 90deg at 2px 2px,#0000 90deg,#366 0) 0 0/100px 100px;

            }
        }
        .paper-2{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;   
//The second gradient is the same but instead of 2px 
// 2px we use 1px 1px to have thinner lines and we divide 
// the size by 5. This will give us the logical result of the
//  small squares (a 5x5 grid) inside a bigger one.
  background: 
 conic-gradient(from 90deg at 2px 2px,#0000 90deg,#366 0) 0 0/100px 100px,
 conic-gradient(from 90deg at 1px 1px,#0000 90deg,#366 0) 0 0/20px  20px;

            }
        }
        
        .paper-final{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;   
            --s: 100px; /* control the size */
  
--_g: #0000 90deg,#366 0; /* update the color here */
background: 
 conic-gradient(from 90deg at 2px 2px,var(--_g)) 0 0/var(--s) var(--s),
 conic-gradient(from 90deg at 1px 1px,var(--_g)) 0 0/calc(var(--s)/5) calc(var(--s)/5);
            }
           
        }

        .triangular{
            .box{
                width: 400px;
  aspect-ratio: 1;
  border: 1px solid;   
  --s: 120px; /* control the size */
  
background:
  conic-gradient(from 150deg at 50% 33%,#FA6900 60deg,#0000 0) 
      calc(var(--s)/2) calc(var(--s)/1.4),
  conic-gradient(from -30deg at 50% 66%,#D95B43 60deg,#ECD078 0);
background-size: var(--s) calc(var(--s)/1.154);
}
        }
    </style>