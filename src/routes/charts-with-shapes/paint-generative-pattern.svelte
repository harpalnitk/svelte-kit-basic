<script>
   
    import { onMount } from "svelte";

onMount(() => {
    if (CSS.paintWorklet) {  
        try {
            //We add the paint worklet using CSS.paintWorklet.addModule('your_js_file')
            CSS.paintWorklet.addModule('../js/paint/paint-generative-pattern.js'); 
            console.log('Js file loaded');
        } catch (error) {
            console.log('Error',error);
        }            
    
}});
  </script>

  <main class='flex-center'>
      <h3>Basic Paint Set Up</h3>
      <section class="draw1">
        <div class="basic-pattern"></div>
      </section>

      <h3>Tiny Specks Pattern</h3>
      <section class="draw2">
        <div class="tiny-specks" style="--pattern:0;"></div>
      </section>

      <h3>Tiny Triangle Pattern</h3>
      <section class="draw2">
        <div class="tiny-specks triangle" style="--pattern:1;--pattern-speck-max-size:12;--pattern-colors:#161511, #e9edeb;"></div>
      </section>

      <h3>Tiny BauhausPattern  Pattern</h3>
      <section class="draw3">
        <div class="bauhausPattern" style="--pattern-colors:#2d58b5, #f43914, #f9c50e, #ffecdc;"></div>
      </section>

      <h3>Tiny BauhausPattern  Pattern White</h3>
      <section class="draw3">
        <div class="bauhausPattern white" style="--pattern-colors:#141b3d, #4bad7b, #ea2f34;"></div>
      </section>

      <h3>Voronoi Arcs  Pattern </h3>
      <section class="draw4">
        <div class="voronoiPattern" style="--pattern:0;--pattern-colors:#e9edeb, #66aac6, #e63890;--pattern-seed:123456;"></div>
      </section>

      <h3>Voronoi Arcs  Pattern - Rectangles</h3>
      <section class="draw4">
        <div class="voronoiPattern" style="--pattern:1;--pattern-background:#da7e17;--pattern-colors:#e9edeb,#000;"></div>
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

        .draw1{
            .basic-pattern {
  width: 20vw;
  height: 20vh;
  background-color: #fff;
  background-image: paint(draw1);
}
        }
@property --pattern{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}
@property --pattern-seed {
  syntax: "<number>";
  initial-value: 1000;
  inherits: true;
}

@property --pattern-colors {
  syntax: "<color>#";
  initial-value: #161511, #dd6d45, #f2f2f2;
  inherits: true;
}

// we define the syntax <color># for 
    // --pattern-colors. In turn, this 
    // allows us to pass an array of 
    // comma-separated colors to the
    //  worklet in any valid CSS color format.
    //   When our worklet receives these
    //    values, they have been converted to 
    //    RGB and placed in a neat little array.
    //     Without a syntax definition, worklets
    //      interpret all props as simple strings.

@property --pattern-speck-count {
  syntax: "<number>";
  initial-value: 3000;
  inherits: true;
}

@property --pattern-speck-min-size {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --pattern-speck-max-size {
  syntax: "<number>";
  initial-value: 3;
  inherits: true;
}
        .draw2{
 
            .tiny-specks{
                width: 100vw;
  height: 100vh;
  background-color: #91c2a5;
  background-image: paint(tinySpecksPattern);
            }
            .triangle{
                background-color: #e63890;
            }
        }
@property --pattern-size {
  syntax: "<number>";
  initial-value: 1024;
  inherits: true;
}

@property --pattern-detail {
  syntax: "<number>";
  initial-value: 16;
  inherits: true;
}
        .draw3{
            .bauhausPattern{
                width: 100vw;
  height: 100vh;
  background-color: #18111d;
  background-image: paint(bauhausPattern);
            }
            .white{
                background-color: #e9edeb;
            }
        }

        @property --pattern-background {
  syntax: "<color>";
  inherits: false;
  initial-value: #141b3d;
}

        .draw4{
//             A Voronoi tessellation (or diagram) is, in short,
//  a way to partition a space into non-overlapping polygons.

// We add a collection of points to a 2D space. Then for each point,
//  calculate a polygon that contains only it and no other points.
//   Once calculated, the polygons can be used as a kind of “grid” to position anything.
.voronoiPattern{
    width: 100vw;
  height: 100vh;
  background-image: paint(voronoiPattern);
}
        }


</style>