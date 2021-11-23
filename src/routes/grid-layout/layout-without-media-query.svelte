<main class='flex-center'>
    <h3>Using FlexBox</h3>
    <section class='using-flex'>
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>Using auto-fit and minmax</h3>
    <section class="auto-fit">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>Control the number of items per row-With Flex</h3>
    <section class="control-row-item-number">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>Control the number of items per row-Optimized</h3>
    <section class="control-row-item-number-optimized">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>Control the number of items per row- With Grid</h3>
    <section class="control-row-item-number-grid">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>SOLUTION-- Items grow, but do not shrink- In Grid</h3>
    <section class="shrink-grid">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>Control when the items wrap</h3>
    <section class="wrap-control">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>from N items per row to M items per row</h3>
    <section class="wrap-control-two-level">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>from N items per row to M items per row, down to one item pre row</h3>
    <section class="wrap-control-three-level">
        <div class="container with-five">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="container with-eight">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <h3>from N columns to M columns to P columns to one column</h3>
    <section class="wrap-control-four-level">
        <div class="container with-six">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="container with-eight">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

    </section>
    <h3>from N columns to M columns to P columns to one column-With Containers</h3>
    <section class="wrap-control-four-level-container">
        <div class="container with-six">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="container with-eight">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

    </section>
    <!-- /**USE CASES*/ -->
    <h3>Conditional Background Color</h3>
    <section class="background-color">
        <div class="box" style="--width:600px"></div>

        <div class="box" style="--width:400px"></div>
    </section>

    <h3>Conditional Background Color Multiple</h3>
    <section class="background-color-multiple">
        <h4>Resize the below div</h4>
        <div class="box"></div>
    </section>
    <h3>Toggling an element’s visibility</h3>
    <p>Notice how the green elements disappear on small screens</p>
    <section class="toggle">
        <div class="box"></div>
<div class="box green"></div>
<div class="box"></div>
<div class="box inline"></div>
<div class="box inline green"></div>
<div class="box inline"></div>
<div class="box inline green"></div>
<div class="box inline"></div>
    </section>
    <h3>Changing the position of an element</h3>
    <p>At 600px position of the box changes</p>
    <section class="position">
        <div class="box"></div>
    </section>

    <h3>Progress bar</h3>
    <p>Color Changing Progress bar</p>
    <section class="progress-bar">
        <progress max="100" value="10">10%</progress>
        <progress max="100" value="20">20%</progress>
        <progress max="100" value="30">30%</progress>
        <progress max="100" value="50">50%</progress>
        <progress max="100" value="60">60%</progress>
        <progress max="100" value="90">90%</progress>
        <progress max="100" value="100">100%</progress>
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
            border: 1px solid gray;
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;

        }
        .container{
            gap:10px;
            div{
                height: 100px;
                background: sandybrown;
            }
        }
        .using-flex{
            .container {
  display:flex;
  flex-wrap:wrap; /* this */

}
.container > div {
  
  flex:400px; /* and this  flex: 400px sets a base width for
   each element in the grid that is equal to 400px.

  Let’s also remember that flex: 400px is a shorthand equivalent 
  to flex: 1 1 400px (flex-grow: 1, flex-shrink: 1, flex-basis: 400px).
  *
  
  ✔️ Only two lines of code
❌ Consistent element widths in the footer
❌ Control the number of items per row
❌ Control when the items wrap
  
  */
 
}
        }


        .auto-fit{
            .container {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(400px,1fr)); /*this */
 
  
}

/**that means the elements on each line also grow to fill any
 remaining space, but unlike the flexbox configuration, 
 the last row maintains the same width as the rest of
  the elements.

So, we improved one of requirements and solved
 another, but also introduced a new issue since
  our items cannot shrink below 400px which may
   lead to some OVERFLOW.

✔️ Only one line of code
✔️ Consistent element widths in the footer
❌ Control the number of items per row
❌ Items grow, but do not shrink
❌ Control when the items wrap
*/
        }


        .control-row-item-number{
            .container {
  display:flex;
  flex-wrap:wrap; /* this */
 
  
}
.container > div {
 
  flex:max(400px, 100%/3 - 20px); /* and this
  We have limited each line to a maximum of three elements, 
  meaning each line only contains between
   one and three items at any given time. 
   
   
   You might also be asking: What the heck is that 20px value in the formula?

It’s twice the grid template’s gap value,
 which is 10px times two. When we have three 
 items on a row, there are two gaps between 
 elements (one on each on the left and right
  sides of the middle element), so for N items
   we should use max(400px, 100%/N - (N - 1) * gap).
    Yes, we need to account for the gap when
     defining the width, but don’t worry, we
      can still optimize the formula to remove it!
      
      We can use max(400px, 100%/(N + 1) + 0.1%). 
      The logic is: we tell the browser that each
       item has a width equal to 100%/(N + 1)
        so N + 1 items per row, but we add a 
        tiny percentage ( 0.1%)—thus one of
         the items wraps and we end with only
          N items per row. Clever, right? 
          No more worrying about the gap!
      
      */
 
}
        }

        .control-row-item-number-optimized{
            .container {
  display:flex;
  flex-wrap:wrap; /* this */

  
}
.container > div {
  flex:max(400px, 100%/4 + 0.1%); /* and this */
}
        }

        .control-row-item-number-grid{
            .container {
  --w:400px;
  --n:3;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(max(var(--w), 100%/(var(--n) + 1) + 0.1%),1fr)); /*this */

  
}
        }

        /** STILL PROBLEMS 
        ✔️ Only one line of code
✔️ Consistent element widths in the footer
⚠️ Partial control of the number of items per row
❌ Items grow, but do not shrink
❌ Control when the items wrap
        */
     .shrink-grid{
        .container {
  --w:400px;
  --n:3;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(clamp(100%/(var(--n) + 1) + 0.1%,var(--w),100%),1fr)); 
  /*this When the screen width is big, 400px is clamped 
  to 100%/(N + 1) + 0.1%,
   maintaining our control 
   of the maximum number of items per row.
When the screen width is small, 400px is 
clamped to 100% so our items never exceed 
the container width. */


}
     }  
     
     /**problems now left
     ✔️ Only one line of code
✔️ Consistent element widths in the footer
⚠️ Partial control of the number of items per row
✔️ Items grow and shrink
❌ Control when the items wrap
     */

     .wrap-control{
        .container {
  --w:400px;
  --n:3;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(clamp(100%/(var(--n) + 1) + 0.1%,(var(--w) - 100vw)*1000,100%),1fr)); 
  /*this
  When the screen width (100vw) is greater than 400px,
   (400px - 100vw) results in a negative value,
    and it gets clamped down to 100%/(N + 1) + 0.1%,
     which is a positive value. This gives us N 
     items per row.
When the screen width (100vw) is less than 400px,
 (400px - 100vw) is a positive value and multiplied 
 by a big value that’s clamped to the 100%. This results
  in one full-width element per row.
  */
  
}
     }

     .wrap-control-two-level{
        .container {
            --w:400px;
  --n:4;
  --m:2;
  
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(clamp(100%/(var(--n) + 1) + 0.1%,(var(--w) - 100vw)*1000,100%/(var(--m) + 1) + 0.1%),1fr)); 
  /*this I think you probably get the trick by now.
   When the screen width is bigger than 400px
    we fall into the first rule (N items per row).
     When the screen width is smaller than 400px,
      we fall into the second rule (M items per row).
       */
     }
    }
    /**
    ✔️ Only one line of code
✔️ Consistent element widths in the footer
✔️ Full control of the number of items per row
✔️ Items grow and shrink
✔️ Control when the items wrap
*/


.wrap-control-three-level{
    .container {


  display:grid;
  grid-template-columns:
    repeat(auto-fill,
      minmax(
        clamp(
          clamp(
              100%/(var(--n) + 1) + 0.1%,
              (var(--w1) - 100vw)*1000,
              100%/(var(--m) + 1) + 0.1%
              ), 
        (var(--w2) - 100vw)*1000,
        100%), 1fr)
        );
  
          /**
  Clamp within a Clamp
          When the screen width is smaller than W2, we clamp to 100%, or one item per row.
When the screen width is larger than W2, we clamp to the first clamp().
In that first clamp, when the screen width is smaller than W1, we clamp to 100%/(M + 1) + 0.1%), or M items per row.
In that first clamp, when the screen width is bigger than W1, we clamp to 100%/(N + 1) + 0.1%), or N items per row.*/
}
.with-five{
  /* first breakpoint*/
  --w1:800px;
  --n:5;
  /* second breakpoint*/
  --w2:400px;
  --m:2;
}
.with-eight{
  /* first breakpoint*/
  --w1:900px;
  --n:8;
  /* second breakpoint*/
  --w2:500px;
  --m:4;
  padding:50px;
  div{
      background: lightcoral;
  }
}
}

.wrap-control-four-level{
    .container {


  display:grid;
  grid-template-columns:
    repeat(auto-fill,
      minmax(clamp(clamp(clamp(  
            100%/(var(--n) + 1) + 0.1%,
              (var(--w1) - 100vw)*1000,
            100%/(var(--m) + 1) + 0.1%), 
              (var(--w2) - 100vw)*1000,
            100%/(var(--p) + 1) + 0.1%), 
              (var(--w3) - 100vw)*1000,
            100%), 1fr));
  
}
.with-six{
  /* first breakpoint*/
  --w1:1200px;
  --n:6;
  /* second breakpoint*/
  --w2:800px;
  --m:4;
  /* third breakpoint*/
  --w3:400px;
  --p:2;
}
.with-eight{
  /* first breakpoint*/
  --w1:900px;
  --n:8;
  /* second breakpoint*/
  --w2:500px;
  --m:4;
  /* third  breakpoint*/
  --w3:300px;
  --p:2;
  padding:50px;
div{
    background: lawngreen;
}
}

}

/**
What makes them neat is they consider the width of 
the element instead of the viewport/screen. 
The idea is that an element can adapt based 
on the width of its parent container for more
 fine-grain control over how elements respond
  to different contexts.

Container queries aren’t officially supported
 anywhere at the time of this writing, but
  we can certainly mimic them with our strategy.
   If we change 100vw with 100% throughout 
   the code, things are based on the
    .container element’s width instead of
     the viewport width. As simple as that!
*/
.wrap-control-four-level-container{
    .container {


  display:grid;
  grid-template-columns:
    repeat(auto-fill,
      minmax(clamp(clamp(clamp(  
            100%/(var(--n) + 1) + 0.1%,
              (var(--w1) - 100%)*1000,
            100%/(var(--m) + 1) + 0.1%), 
              (var(--w2) - 100%)*1000,
            100%/(var(--p) + 1) + 0.1%), 
              (var(--w3) - 100%)*1000,
            100%), 1fr));
            border:1px solid;
  overflow:hidden;
  margin:5px;
  resize:horizontal;
}
.with-six{
  /* first breakpoint*/
  --w1:1200px;
  --n:6;
  /* second breakpoint*/
  --w2:800px;
  --m:4;
  /* third breakpoint*/
  --w3:400px;
  --p:2;
}
.with-eight{
  /* first breakpoint*/
  --w1:900px;
  --n:8;
  /* second breakpoint*/
  --w2:500px;
  --m:4;
  /* third  breakpoint*/
  --w3:300px;
  --p:2;
  padding:50px;
div{
    background: lawngreen;
}
}

}

/**USE CASES*/

.background-color{
    --width-breakpoint:500px;
    .box {
  height:50px;
  width:var(--width);
  margin:10px;
  background:
   linear-gradient(green,green) 0 /max(0px,var(--width-breakpoint) - 100%) 1px,
   red;
}
/*
 I am using "linear-gradient(green,green) instead of linear-gradient(green 0 0) 
 for better browser support "

 We have a linear gradient layer with a width equal to max(0px,100px - 100%) 
 and a height equal to 1px.
  The height doesn’t really matter since the gradient repeats by default.
   Plus, it’s a one color gradient, so any height will do the job.
100% refers to the element’s width. If 100% computes to a value 
bigger than 100px, the max() gives us 0px, which means that the
 gradient does not show, but the comma-separated red background does.
If 100% computes to a value smaller than 100px, the gradient does
 show and we get a green background instead.



 The same logic can be based on an element’s height instead
  by rearranging where that 1px value goes: 1px max(0px,100px - 100%).
   We can also consider the screen dimension by using vh or vw
    instead of %. We can even have more than two colors 
    by adding more gradient layers.
*/
}


.background-color-multiple{
    .box {
  height:50px;
  margin:10px;
  overflow:hidden;
  resize:horizontal;
  background:
   linear-gradient(purple,purple) 0 /max(0px,100px - 100%) 1px,
   linear-gradient(blue,blue)     0 /max(0px,300px - 100%) 1px,
   linear-gradient(green,green)   0 /max(0px,500px - 100%) 1px,
   red;
}
}


.toggle{
    .box {
  height:50px;
  background:goldenrod;
  margin:10px;
}
.inline {
  display:inline-block;
  width:100px;
}

.green {
  background:lightseagreen;
  max-width: clamp(0px,(100vw - 500px)*1000,100%);
  max-height:clamp(0px,(100vw - 500px)*1000,1000px);
  margin:clamp(0px,(100vw - 500px)*1000,10px);
  overflow:hidden;
}
/**Based on the screen width (100vw),
 we either get clamped to a 0px value 
 for the max-height and max-width
  (meaning the element is hidden) or get clamped 
  to 100% (meaning the element is visible and 
  never greater than full width). We’re avoiding 
  using a percentage for the max-height since it 
  fails. That’s why we’re using a big pixel value (1000px).
  */
}

.position{
    position:relative;
    min-height: 50vh;
    .box {
  --c:(600px - 100vw); /* we define our condition */
  
  top: clamp(10%,var(--c)*-1000,50%);
  left:clamp(0px,var(--c)*1000,40%);

  /**Then, within each clamp(), we always start with the smallest 
  value for each property. Don’t incorrectly assume that
   we need to put the small screen value first!

Finally, we define the sign for each condition.
 I picked (100vw - 400px), which means that this
  value will be negative when the screen width
   is smaller than 400px, and positive when the
    screen width is bigger than 400px. If I 
    need the smallest value of clamp() to be 
    considered below 400px then I do nothing 
    to the sign of the condition (I keep it positive)
     but if I need the smallest value to be considered 
     above 400px I need to invert the sign of the condition.
      That’s why you see (100vw - 400px)*-1000 with the top property.*/
  
  position:absolute;
  width:100px;
  height:100px;
  background:
   linear-gradient(limegreen 0 0) 0 /max(0px,var(--c)) 1px,
   orangered;
  
}
}

.progress-bar{
    progress[value] {
  --w:200px;
  --b:
    /* if < 30% "red" */
    linear-gradient(red,red)       0 /max(0px,var(--w)*.3 - 100%) 1px,
    /* else if < 60% "orange" */
    linear-gradient(orange,orange) 0 /max(0px,var(--w)*.6 - 100%) 1px,
    /* else "green" */
    green;
  appearance: none;
  border: none;
  width: var(--w); 
  height: 20px;
  display:block;
  margin:10px;
  background-color: lightgrey;
  border-radius: 50px;
}

progress[value]::-webkit-progress-bar {
  background-color: lightgrey;
  border-radius: 50px;
}

progress[value]::-webkit-progress-value {
  border-radius: 50px;
  background:var(--b);
}

progress[value]::-moz-progress-bar {
  border-radius: 50px;
  background:var(--b);
}
}
    </style>