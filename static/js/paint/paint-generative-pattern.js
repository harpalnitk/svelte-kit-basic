import random from "https://cdn.skypack.dev/random";
import seedrandom from "https://cdn.skypack.dev/seedrandom";

//All three of the patterns we are creating in this tutorial rely heavily on randomness. Paint API worklets should, however, (almost) always be deterministic. Given the same input properties and dimensions, a worklet’s paint() function should always render the same thing.

//Why random and randomseed?

//The Paint API may want to use a cached version of a worklet’s paint() output for better performance. Introducing an unpredictable element to a worklet renders this impossible!
//A worklet’s paint() function re-runs whenever the element it applies to changes dimensions. When coupled with “pure” randomness, this can result in significant flashes of content — a potential accessibility issue for some folks.


import { createVoronoiTessellation } from "https://cdn.skypack.dev/@georgedoescode/generative-utils";
try {
    //We register a new paint method called draw
    registerPaint('draw1', class {
        //Inside that, we create a paint() function where we do all the work.
        // And guess what? Everything is like working with <canvas>.
        // That ctx is the 2D context, and I simply used some well-known
        // functions to draw a red rectangle covering the whole area.
        paint(ctx, size) {
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size.width, size.height);
        }
    });



    registerPaint('tinySpecksPattern', class {
        static get inputProperties() {
            return [
              "--pattern",
              "--pattern-seed",
              "--pattern-colors",
              "--pattern-speck-count",
              "--pattern-speck-min-size",
              "--pattern-speck-max-size"
            ];
          }
          paint(ctx, geometry, props) {
            const { width, height } = geometry;
            const pattern = props.get("--pattern").value;
            console.log('pattern',pattern);
            const seed = props.get("--pattern-seed").value;
            console.log('seed',seed);
            const colors = props.getAll("--pattern-colors").map((c) => c.toString());
            console.log('colors',colors);
            const count = props.get("--pattern-speck-count").value;
            const minSize = props.get("--pattern-speck-min-size").value;
            const maxSize = props.get("--pattern-speck-max-size").value;
        
            random.use(seedrandom(seed));
        
            for (let i = 0; i < count; i++) {

                //As the first action in our for-loop, we define an
                //  x and y position for the speck. Somewhere between
                //   0 and the width/height of the worklet’s target element is perfec
              const x = random.float(0, width);
              const y = random.float(0, height);
              const radius = random.float(minSize, maxSize);
        //we have a position and a size defined for the speck. Let’s choose a random color from our colors to fill it wit
              ctx.fillStyle = colors[random.int(0, colors.length - 1)];
        //The first thing we need to do at this point is save()
        //  the state of our drawing context. Why? We want to
        //   rotate each speck, but when working with a 2D 
        //   drawing context like this, we cannot rotate 
        //   individual items. To rotate an object, we
        //    have to spin the entire drawing space. 
        //    If we don’t save() and restore() the 
        //    context, the rotation/translation in
        //    every iteration will stack, leaving us 
        //    with a very messy (or empty) canvas!
              ctx.save();
        //Now that we have saved the drawing context’s state,
        //  we can translate to the speck’s center point
        //   (defined by our x/y variables) and apply a 
        //   rotation. Translating to the center point of
        //    an object before rotating ensures the object
        //     rotates around its center axis:
              ctx.translate(x, y);
              ctx.rotate(((random.float(0, 360) * 180) / Math.PI) * 2);
              //After applying our rotation, we translate back to the top-left corner of the drawing space.
              ctx.translate(-x, -y);
        //Awesome! Finally, let’s render an ellipse — this is the shape that defines our specks
              
        switch (pattern) {
            case 0:
                //ellipse
                ctx.beginPath();
                ctx.ellipse(x, y, radius, radius / 2, 0, Math.PI * 2, 0);
                break;
            case 1:
                //triangle
                triangle(ctx, x, y, radius);
                break;
        
            default:
                //Default ellipse
                ctx.beginPath();
                ctx.ellipse(x, y, radius, radius / 2, 0, Math.PI * 2, 0);
                break;
        }

              ctx.fill();
        //Now, all we need to do is restore the drawing context
              ctx.restore();
            }
          }
    });



    registerPaint('bauhausPattern', class {
        static get inputProperties() {
            return [
              "--pattern-seed",
              "--pattern-colors",
              "--pattern-size",
              "--pattern-detail"
            ];
          }

          //--pattern-size — the value used to define both the width and height of a square pattern area
          // --pattern-detail — the number of columns/rows to divide the square pattern into
          paint(ctx, geometry, props) {
            const { width, height } = geometry;

            const patternSize = props.get("--pattern-size").value;
            const patternDetail = props.get("--pattern-detail").value;
            const seed = props.get("--pattern-seed").value;
            const colors = props.getAll("--pattern-colors").map((c) => c.toString());
        
            random.use(seedrandom(seed));
            this.scaleCtx(ctx, patternSize, patternSize, width, height);

            //Next up, we are going to create a 2D grid of cells. To do so, we define a 
            // cellSize variable (the size of the pattern area divided 
            //     by the number of columns/rows we would like)
            const cellSize = patternSize / patternDetail;
        //Then, we can use the cellSize variable to “step-through” the grid,
        // creating equally-spaced, equally-sized cells to add random shapes to
            for (let x = 0; x < patternSize; x += cellSize) {
              for (let y = 0; y < patternSize; y += cellSize) {
                const color = colors[random.int(0, colors.length - 1)];
                ctx.fillStyle = color;
        //Next, let’s store a reference to the current cell’s center x and y position:
                const cx = x + cellSize / 2;
                const cy = y + cellSize / 2;
        
                const shapeChoice = ["circle", "arc", "rectangle", "triangle"][
                  random.int(0, 3)
                ];
        
                const rotationDegrees = [0, 90, 180][random.int(0, 2)];
        
                ctx.save();
        
                ctx.translate(cx, cy);
                ctx.rotate((rotationDegrees * Math.PI) / 180);
                ctx.translate(-cx, -cy);
        
                switch (shapeChoice) {
                  case "circle":
                    circle(ctx, cx, cy, cellSize / 2);
                    break;
                  case "arc":
                    arc(ctx, cx, cy, cellSize / 2);
                    break;
                  case "rectangle":
                    rectangle(ctx, cx, cy, cellSize);
                    break;
                  case "triangle":
                    triangle(ctx, cx, cy, cellSize);
                    break;
                }
        
                ctx.fill();
        
                ctx.restore();
              }
            }
        }

        //So, with this worklet, we create a fixed-dimension square
        //  pattern filled with shapes. This fixed-dimension pattern is 
        //  then scaled up or down to cover the worklet’s target element.
        //   Think of this behavior a bit like background-size: cover in CSS!
        //Now, we can work to a set of fixed dimensions and have our worklet’s
        //  drawing context automatically scale everything for us — a 
        //  handy function for lots of use cases.
        scaleCtx(ctx, width, height, elementWidth, elementHeight) {
            const ratio = Math.max(elementWidth / width, elementHeight / height);
            const centerShiftX = (elementWidth - width * ratio) / 2;
            const centerShiftY = (elementHeight - height * ratio) / 2;
        
            ctx.setTransform(ratio, 0, 0, ratio, centerShiftX, centerShiftY);
          }
    });



    registerPaint('voronoiPattern', class {
        static get inputProperties() {
            return [ "--pattern","--pattern-seed", "--pattern-colors", "--pattern-background"];
          }
        
          paint(ctx, geometry, props) {
            const { width, height } = geometry;
            const pattern = props.get("--pattern").value;
            console.log('pattern',pattern);
            const background = props.get("--pattern-background").toString();
            const seed = props.get("--pattern-seed").value;
            const colors = props.getAll("--pattern-colors").map((c) => c.toString());
        
            random.use(seedrandom(seed));
        
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, width, height);
        //Now that we have our createVoronoiTessellation function available, let’s add it to paint()
        //Here, we create a Voronoi Tessellation at the width and height of the worklet’s 
        //target element, with 24 controlling points.
            const { cells } = createVoronoiTessellation({
              width,
              height,
              points: [...Array(24)].map(() => ({
                x: random.float(0, width),
                y: random.float(0, height)
              }))
            });
        
            cells.forEach((cell) => {
              ctx.fillStyle = colors[random.int(0, colors.length - 1)];
        //Next, we store a reference to the center x and y values of the cell:
              const cx = cell.centroid.x;
              const cy = cell.centroid.y;
        
              ctx.save();
        //Next, we save the context’s current state and rotate the canvas around the cell’s center point:
              ctx.translate(cx, cy);
              ctx.rotate((random.float(0, 360) / 180) * Math.PI);
              ctx.translate(-cx, -cy);
        
              switch (pattern) {
                  case 0:
                    ctx.beginPath();
                    //Now, we can render something. Let’s draw an arc with an end angle
                    // of either PI or PI * 2. To me and you, a semi-circle or a circle
                    ctx.arc(
                      cell.centroid.x,
                      cell.centroid.y,
                      cell.innerCircleRadius * 0.75,
                      0,
                      Math.PI * random.int(1, 2)
                    );
                    //Our createVoronoiTessellation function attaches a special 
                  //   innerCircleRadius to each cell — this is the largest possible 
                  //   circle that can fit at its center without touching any edges.
                  //    Think of it as a handy guide for scaling objects to the bounds
                  //     of a cell. In the snippet above, we are using innerCircleRadius
                  //      to determine the size of our arcs
                    ctx.fill();
              //Now that we have added a “primary” arc to each cell, let’s add 
              // another one, 25% of the time. This time, however, we can set 
              // the arc’s fill color to our worklets background color. Doing 
              // so gives us the effect of a little hole in the middle of some of the shapes!
                    if (random.float(0, 1) > 0.25) {
                      ctx.fillStyle = background;
                      ctx.beginPath();
                      ctx.arc(
                        cell.centroid.x,
                        cell.centroid.y,
                        (cell.innerCircleRadius * 0.75) / 2,
                        0,
                        Math.PI * 2
                      );
                      ctx.fill();
                    }
                      break;
              case 1:
                ctx.fillRect(
                    cx - cell.innerCircleRadius / 2,
                    cy - cell.innerCircleRadius / 2,
                    cell.innerCircleRadius,
                    cell.innerCircleRadius / 3
                  ); 
              break;
                  default:
                      break;
              }
             
        
              ctx.restore();
            });
          }
    });

} catch (error) {
    console.log('error',error);
}


function triangle(ctx, cx, cy, size) {
    const originX = cx - size / 2;
    const originY = cy - size / 2;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + size, originY + size);
    ctx.lineTo(originX, originY + size);
    ctx.closePath();
  }

  function circle(ctx, cx, cy, radius) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.closePath();
  }
  
  function arc(ctx, cx, cy, radius) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 1);
    ctx.closePath();
  }
  
  function rectangle(ctx, cx, cy, size) {
    ctx.beginPath();
    ctx.rect(cx - size / 2, cy - size / 2, size, size);
    ctx.closePath();
  }