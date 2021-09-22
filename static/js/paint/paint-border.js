registerPaint('border1', class  {
    static get inputProperties() {
        return [
          '--path',
          '--border'
        ]
      }
      paint(ctx, size, properties) {
        const points = properties.get('--path').toString().split(',');
       // points = ["50% 0","100% 100%","0 100%"]
        const b = parseFloat(properties.get('--border').value);
        const w = size.width;
        const h = size.height;
        
        const cc = function(x,y) {

            // The logic is simple: if it’s a percentage value,
            //  I use the width (or the height) to
            //   find the final value. If
            //    it’s a pixel value,
            //     I simply get the
            //     value without the unit.
            //      If, for, example we have
            //       [50% 20%] where the
            //        width is equal to 200px 
            //        and the height is 
            //        equal to 100px, then
            //         we get [100 20]. If it’s
            //          [20px 50px], then we get [20 50]. And so on.


            var fx=0,fy=0;
            if (x.indexOf('%') > -1) {
              fx = (parseFloat(x)/100)*w;
            } else if(x.indexOf('px') > -1) {
              fx = parseFloat(x);
            }
            if (y.indexOf('%') > -1) {
              fy = (parseFloat(y)/100)*h;
            } else if(y.indexOf('px') > -1) {
              fy = parseFloat(y);
            }
            return [fx,fy];
          }
        
        var p = points[0].trim().split(" ");
        p = cc(p[0],p[1]);
        
        ctx.beginPath();
        ctx.moveTo(p[0],p[1]);
        for (var i = 1; i < points.length; i++) {
          p = points[i].trim().split(" ");
          p = cc(p[0],p[1]);
          ctx.lineTo(p[0],p[1]);
        }
        // Then we loop through the points to draw a
        //  polygon using moveTo and lineTo. This
        //   polygon is exactly the same as the 
        //   one drawn in CSS with the clip-path property.
        ctx.closePath();
        
        //  Why are you using CSS clip-path if the mask 
        // is already clipping the element to the stroke of the shape?
        // /Using only the mask was the 
        // first idea I had in mind, but I stumbled
        //  upon two major issues with that approach. 
        //  The first is related to how stroke() works. From MDN:
        
        //  Strokes are aligned to the center of a path; 
        // in other words, half of the stroke is drawn on 
        // the inner side, and half on the outer side.
        
        //  That “half inner side, half outer side”
        //  gave me a lot of headaches, and I always 
        //  end up with a strange overflow when putting
        //   everything together. That’s where CSS 
        //   clip-path helps; it clips the outer part 
        //   and only keeps the inner side — no more overflow!
        
        //  You will notice the use of ctx.lineWidth 
        // = 2*b. I am adding double the border thickness
        //  because I will clip half of it to end with
        //   the right thickness needed around the entire shape.

        // The second issue is related to the shape’s
        //  hover-able area. It’s known that
        //   masking does not affect that area 
        //   and we can still hover/interact
        //    with the whole rectangle. Again,
        //     reaching for clip-path fixes the
        //      issue, plus we limit the 
        //      interaction just to the shape itself.


        ctx.lineWidth = 2*b;
        ctx.strokeStyle = '#000';
        ctx.stroke();
        // Finally, and after drawing the shape, I
        //  add a stroke to it. I define the 
        //  thickness of the stroke using
        //   lineWidth and I set a solid
        //    color using strokeStyle. In
        //     other words, only the stroke
        //      of the shape is visible since
        //       I am not filling the shape
        //        with any color (i.e. it’s transparent).
      }


   
});

registerPaint('border2', class  {
    static get inputProperties() {
        return [
          '--path',
          '--border'
        ]
      }
      paint(ctx, size, properties) {
        const points = properties.get('--path').toString().split(',');
       // points = ["50% 0","100% 100%","0 100%"]
        const b = parseFloat(properties.get('--border').value);
        const w = size.width;
        const h = size.height;
      
        
        // In the above, calc(100% - 40px) is a value that the 
        // browser considers a <length-percentage>,
        //  but the browser cannot compute that 
        //  value until it knows the reference 
        //  for the percentage. In other words,
        //   we cannot get the equivalent pixel
        //    value inside the paint() function
        //     since the reference can only be 
        //     known when the value gets used within var().

        // To overcome this, we can can extend
        //  the cc() function to do the conversion
        //  . We did the conversion of a 
        //  percentage value and a pixel 
        //  value, so let’s combine those
        //   into one conversion. We will
        //    consider 2 cases: calc(P% - Xpx)
        //     and calc(P% + Xpx). Our script becomes:

        const cc = function(x,y) { 
            var fx=0,fy=0;
            if (x.indexOf('calc') > -1) {
              var tmp = x.replace('calc(','').replace(')','');
              if (tmp.indexOf('+') > -1) {
                tmp = tmp.split('+');
                fx = (parseFloat(tmp[0])/100)*w + parseFloat(tmp[1]);
              } else {
                tmp = tmp.split('-');
                fx = (parseFloat(tmp[0])/100)*w - parseFloat(tmp[1]);
              }
             } else if (x.indexOf('%') > -1) {
                fx = (parseFloat(x)/100)*w;
             } else if(x.indexOf('px') > -1) {
                fx = parseFloat(x);
             }
                
             if (y.indexOf('calc') > -1) {
              var tmp = y.replace('calc(','').replace(')','');
              if (tmp.indexOf('+') > -1) {
                 tmp = tmp.split('+');
                 fy = (parseFloat(tmp[0])/100)*h + parseFloat(tmp[1]);
               } else {
                 tmp = tmp.split('-');
                 fy = (parseFloat(tmp[0])/100)*h - parseFloat(tmp[1]);
               }
              } else if (y.indexOf('%') > -1) {
                fy = (parseFloat(y)/100)*h;
              } else if(y.indexOf('px') > -1) {
                fy = parseFloat(y);
              }
            return [fx,fy];
          }
        //   We’re using indexOf() to test the existence of calc,
        //    then, with some string manipulation, we extract 
        //    both values and find the final pixel value.

        //   And, as a result, we also need to update this line:
        //var p = points[0].trim().split(" "); to
        var p = points[0].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
        p = cc(p[0],p[1]);
        
        ctx.beginPath();
        ctx.moveTo(p[0],p[1]);
        for (var i = 1; i < points.length; i++) {
            p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
          p = cc(p[0],p[1]);
          ctx.lineTo(p[0],p[1]);
        }
        ctx.closePath();
        ctx.lineWidth = 2*b;
        ctx.strokeStyle = '#000';
        ctx.stroke();
      }
});

registerPaint('border3', class  {

    static get inputProperties() {
      return [
        '--path',
        '--border',
        '--dash'
      ]
    }
    
    paint(ctx, size, properties) {
  
      const points = properties.get('--path').toString().split(',');
      const b = parseFloat(properties.get('--border').value);
      //reading dashed stroke value
      const d = properties.get('--dash').toString().split(',');
      const w = size.width;
      const h = size.height;
      console.log(points);
      
      const cc = function(x,y) {
        var fx=0,fy=0;
        if (x.indexOf('calc') > -1) {
          var tmp = x.replace('calc(','').replace(')','');
          if (tmp.indexOf('+') > -1) {
            tmp = tmp.split('+');
            fx = (parseFloat(tmp[0])/100)*w + parseFloat(tmp[1]);
          } else {
            tmp = tmp.split('-');
            fx = (parseFloat(tmp[0])/100)*w - parseFloat(tmp[1]);
          }
        } else if (x.indexOf('%') > -1) {
          fx = (parseFloat(x)/100)*w;
        } else if(x.indexOf('px') > -1) {
          fx = parseFloat(x);
        }
        
        if (y.indexOf('calc') > -1) {
          var tmp = y.replace('calc(','').replace(')','');
          if (tmp.indexOf('+') > -1) {
            tmp = tmp.split('+');
            fy = (parseFloat(tmp[0])/100)*h + parseFloat(tmp[1]);
          } else {
            tmp = tmp.split('-');
            fy = (parseFloat(tmp[0])/100)*h - parseFloat(tmp[1]);
          }
        } else if (y.indexOf('%') > -1) {
          fy = (parseFloat(y)/100)*h;
        } else if(y.indexOf('px') > -1) {
          fy = parseFloat(y);
        }
        return [fx,fy];
      }
      
      var p = points[0].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      p = cc(p[0],p[1]);
      ctx.beginPath();
         //setting dashed stroke value
      ctx.setLineDash(d);
      ctx.moveTo(p[0],p[1]);
      
      for (var i = 1; i < points.length; i++) {
        p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
        p = cc(p[0],p[1]);
        ctx.lineTo(p[0],p[1]);
      }
      ctx.closePath();
      ctx.lineWidth = 2*b;
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  
  });


  registerPaint('border4', class  {

    static get inputProperties() {
      return [
        '--path',
        '--border',
        '--dash',
        '--offset'
      ]
    }
    
    paint(ctx, size, properties) {
      const points = properties.get('--path').toString().split(',');
      const b = parseFloat(properties.get('--border').value);
      const d = properties.get('--dash').toString().split(',');
      const o = properties.get('--offset');
      const w = size.width;
      const h = size.height;
      
      const cc = function(x,y) {
        var fx=0,fy=0;
        if (x.indexOf('calc') > -1) {
          var tmp = x.replace('calc(','').replace(')','');
          if (tmp.indexOf('+') > -1) {
            tmp = tmp.split('+');
            fx = (parseFloat(tmp[0])/100)*w + parseFloat(tmp[1]);
          } else {
            tmp = tmp.split('-');
            fx = (parseFloat(tmp[0])/100)*w - parseFloat(tmp[1]);
          }
        } else if (x.indexOf('%') > -1) {
          fx = (parseFloat(x)/100)*w;
        } else if(x.indexOf('px') > -1) {
          fx = parseFloat(x);
        }
        
        if (y.indexOf('calc') > -1) {
          var tmp = y.replace('calc(','').replace(')','');
          if (tmp.indexOf('+') > -1) {
            tmp = tmp.split('+');
            fy = (parseFloat(tmp[0])/100)*h + parseFloat(tmp[1]);
          } else {
            tmp = tmp.split('-');
            fy = (parseFloat(tmp[0])/100)*h - parseFloat(tmp[1]);
          }
        } else if (y.indexOf('%') > -1) {
          fy = (parseFloat(y)/100)*h;
        } else if(y.indexOf('px') > -1) {
          fy = parseFloat(y);
        }
        return [fx,fy];
      }
      
      var p = points[0].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      p = cc(p[0],p[1]);
      ctx.beginPath();
      ctx.setLineDash(d);
      ctx.lineDashOffset=o;
      ctx.moveTo(p[0],p[1]);
      
      for (var i = 1; i < points.length; i++) {
        p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
        p = cc(p[0],p[1]);
        ctx.lineTo(p[0],p[1]);
      }
      ctx.closePath();
      ctx.lineWidth = 2*b;
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  
  });