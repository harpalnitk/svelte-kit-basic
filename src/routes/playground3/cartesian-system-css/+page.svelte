<main>
    <h3>Basic Axes</h3>
    <section>
        <div class="axis">
            <div class="dot" style="--x: -3;"></div>
            <div class="dot" style="--x: 0;"></div>
            <div class="dot" style="--x: 1;"></div>
            <div class="dot" style="--x: 2;"></div>
        </div>
    </section>


    <h3>f(x) = x - 3</h3>
    <section class='first-example'>
        <div class="axis" id="axis_x-3" style="--c: 20; --cx: 5; --cy: 12; --dsize: 6;">
          <div class="dot" style="--x: -5;"></div>
          <div class="dot" style="--x: -4;"></div>
          <div class="dot" style="--x: -3;"></div>
          <div class="dot" style="--x: -2;"></div>
          <div class="dot" style="--x: -1;"></div>
          <div class="dot" style="--x: 0;"></div>
          <div class="dot" style="--x: 1;"></div>
          <div class="dot" style="--x: 2;"></div>
          <div class="dot" style="--x: 3;"></div>
          <div class="dot" style="--x: 4;"></div>
          <div class="dot" style="--x: 5;"></div>
          <div class="dot" style="--x: 6;"></div>
          <div class="dot" style="--x: 7"></div>
          <div class="dot" style="--x: 8"></div>
          <div class="dot" style="--x: 9;"></div>
          <div class="dot" style="--x: 10;"></div>
          <div class="dot" style="--x: 11;"></div>
          <div class="dot" style="--x: 12; --dcolor: red; --dsize: 10;"></div>
          <div class="dot" style="--x: 13;"></div>
          <div class="dot" style="--x: 14;"></div>
          <div class="dot" style="--x: 15;"></div>
        </div>
      
      </section>
      <h3>f(x) = x<sup>2</sup> - 5</h3>
      <section class='second-example'>

       
        <div class="axis" id="axis_x2-5" style="--c: 10; --cx: 5; --cy: 5;">
          <div class="dot" style="--x: -3;"></div>
          <div class="dot" style="--x: -2.75;"></div>
          <div class="dot" style="--x: -2.5;"></div>
          <div class="dot" style="--x: -2.25;"></div>
          <div class="dot" style="--x: -2;"></div>
          <div class="dot" style="--x: -1.75;"></div>
          <div class="dot" style="--x: -1.5;"></div>
          <div class="dot" style="--x: -1.25;"></div>
          <div class="dot" style="--x: -1;"></div>
          <div class="dot" style="--x: -0.75;"></div>
          <div class="dot" style="--x: -0.5;"></div>
          <div class="dot" style="--x: -0.25;"></div>
          <div class="dot" style="--x: 0;"></div>
          <div class="dot" style="--x: 0.25;"></div>
          <div class="dot" style="--x: 0.5;"></div>
          <div class="dot" style="--x: 0.75;"></div>
          <div class="dot" style="--x: 1;"></div>
          <div class="dot" style="--x: 1.25;"></div>
          <div class="dot" style="--x: 1.5;"></div>
          <div class="dot" style="--x: 1.75;"></div>
          <div class="dot" style="--x: 2; --dcolor: red; --dsize: 15;"></div>
          <div class="dot" style="--x: 2.25;"></div>
          <div class="dot" style="--x: 2.5;"></div>
          <div class="dot" style="--x: 2.75;"></div>
          <div class="dot" style="--x: 3;"></div>
        </div>
      
      </section>
      <h3>f(x) = 1 / x<sup>2</sup></h3>
      <section class='third-example'>
        <div class="axis" id="axis_1_x2" style="--c: 14; --cx: 7; --cy: 13; --dcolor: #080;">
          <div class="dot" style="--x: -6;"></div>
          <div class="dot" style="--x: -5;"></div>
          <div class="dot" style="--x: -4;"></div>
          <div class="dot" style="--x: -3;"></div>
          <div class="dot" style="--x: -2;"></div>
          <div class="dot" style="--x: -1;"></div>
          <div class="dot" style="--x: -0.75;"></div>
          <div class="dot" style="--x: -0.6;"></div>
          <div class="dot" style="--x: -0.5;"></div>
          <div class="dot" style="--x: -0.4;"></div>
          <div class="dot" style="--x: -0.3;"></div>
          <div class="dot" style="--x: 0.3;"></div>
          <div class="dot" style="--x: 0.4;"></div>
          <div class="dot" style="--x: 0.5;"></div>
          <div class="dot" style="--x: 0.6;"></div>
          <div class="dot" style="--x: 0.75;"></div>
          <div class="dot" style="--x: 1;"></div>
          <div class="dot" style="--x: 2;"></div>
          <div class="dot" style="--x: 3;"></div>
          <div class="dot" style="--x: 4;"></div>
          <div class="dot" style="--x: 5;"></div>
          <div class="dot" style="--x: 6;"></div>
        </div>
      
      </section>
</main>
<style lang='scss'>
    main{
        padding: 0rem;
        margin: 0 auto;
        max-height: 50vh;
        width: 80vw;

        section{
            margin-bottom: 5rem;

        }
    }
    .axis {
        
  --c: 10;/* Number. Size of the diagram (in total "cells"). It must be a positive number. */
  --cx: 5; /**Number. Position of the x-axis in the diagram. It must be an integer. It should be positive and less or equal to --c*/
  --cy: 5;/**Number. Position of the y-axis in the diagram. It must be an integer. It should be positive and less or equal to --c*/
  --dsize: 10;/**Number. Size of the dots in pixels. It must be positive and greater than zero*/
  --dcolor: #369;/**Color. Color of the dots (any color format)*/
  --size: 100%;/**Length. Width of the coordinate system. It can be absolute or relative to the parent*/
  position: relative;
  width: var(--size);
  height: 0;
  padding-top: var(--size);
  box-sizing: border-box;
  aspect-ratio: 1/1;
  background-image:
    linear-gradient(#0000 calc(var(--cy) * 100% / var(--c) - 1px), #0008 0 calc(var(--cy) * 100% / var(--c) + 1px), transparent 0),
    linear-gradient(to right, #0000 calc(var(--cx) * 100% / var(--c) - 1px), #0008 0 calc(var(--cx) * 100% / var(--c) + 1px), transparent 0),
    repeating-linear-gradient(#0002 0 0.5px, #0000 0 calc(100% / var(--c) - 0.5px), #0002 0 calc(100% / var(--c))),
    repeating-linear-gradient(to right, #0002 0 0.5px, #0000 0 calc(100% / var(--c) - 0.5px), #0002 0 calc(100% / var(--c)));
}

.axis.no-overflow {
  overflow: hidden;
}

.axis .dot {
  --translationUnit: 100% / var(--c);
  --translationX: var(--translationUnit) * var(--cx);
  --translationY: var(--translationUnit) * var(--cy);
  /* Vertical is "flipped" in CSS: higher values go down! Do negative! */
  --y: calc(var(--translationY) - var(--translationUnit) * var(--function));
  width: calc(var(--dsize) * 1px);
  height: calc(var(--dsize) * 1px);
  background: var(--dcolor);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  left: calc(var(--translationX) + var(--x) * var(--translationUnit));
  top: var(--y);
}

.first-example{
    /* Demo functions */
#axis_x-3 {
  --size: 350px;
}
#axis_x-3 .dot {
  /**
   * f(x) = x - 3
   *        x = var(--x)
   */
  --function: calc(var(--x) - 3);
}
}

.second-example{
    /* Demo functions */
#axis_x2-5 {
  --size: 350px;
}
#axis_x2-5 .dot {
  /**
   * f(x) = x^2 - 5
   *        x^2 = var(--x) * var(--x)
   */
  --function: calc(var(--x) * var(--x) - 5);
}
}

.third-example{
    /* Demo functions */
#axis_1_x2 {
  --size: 350px;
}
#axis_1_x2 .dot {
  /**
   * f(x) = 1 / x^2
   *        x^2 = var(--x) * var(--x)
   */
  --function: calc(1 / (var(--x) * var(--x)));
}
}
</style>