registerPaint('rounded-shape', class  {
    static get inputProperties() {
        return [
          '--path',
          '--radius',
          '--border',
          '--dash'
        ]
      }

    paint(ctx, size, properties) {
        // In addition to the points defined by the path 
        // variable (pictured as red points above; corners of triangle),
        //  we’re adding even more points (pictured 
        //     as green points above; mid points of 3 sides of triangles) that are simply
        //      the midpoints of each segment of the 
        //      shape. Then we use the arcTo() function
        //       to build the final shape 


        // One way to think about arcTo() is to imagine 
        // two straight segments: one from the starting
        //  point to a first control point, and another 
        //  from there to a second control point. Without
        //   arcTo(), these two segments would form a
        //    sharp corner: arcTo() creates a circular
        //     arc that fits this corner and smooths 
        //     is out. In other words, the arc is 
        //     tangential to both segments.


        // We first read the variables for the path and the radius.
        const points = properties.get('--path').toString().split(',');
       // console.log('Points', points);// ['50% 0%', ' 0% 100%', ' 100% 100%']
        var Ppoints = [];
        var Cpoints = [];
        const r = parseFloat(properties.get('--radius').value);
        const w = size.width;
        const h = size.height;
        //console.log(`Width: ${w} Height: ${h}`) //width 150 Height 130 for triangle
        
        const cc = function(x,y) {
            //For triangle input comes 6 times (50%,0%),(100%,100%),(0%,100%),(50%,0%),(100%,100%),(0%,100%)
          //  console.log(`Input to cc function x: ${x} y: ${y}`)
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
           //(75,0), (150,130),(0,130),(75,0), (150,130),(0,130),
         // console.log(`output of cc function fx: ${fx} fy: ${fy}`)
          return [fx,fy];
        }
       

        // Then we loop through the points to create two arrays.
        var N = points.length;
        for (var i = 0; i < N; i++) {
          var j = i-1;
          if(j<0) j=N-1;
          
          var p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
          // One defines the red points (Ppoints)  ; corners of the figure
          p = cc(p[0],p[1]);
          Ppoints.push([p[0],p[1]]);
          var pj = points[j].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
           // The other defines the green points (Cpoints) ; mid points of segments of the figure
          pj = cc(pj[0],pj[1]);
          Cpoints.push([p[0]-((p[0]-pj[0])/2),p[1]-((p[1]-pj[1])/2)]);
        }
        //console.log(`Ppoints: ${Ppoints} Cpoints: ${Cpoints}`)
        //Ppoints: 75,0,0,130,150,130 
        //Cpoints: 112.5,65,37.5,65,75,130
        ctx.beginPath();
        ctx.moveTo(Cpoints[0][0],Cpoints[0][1]);
        var i;
        // Using the arcTo() function to create the shape
        for (i = 0; i < (Cpoints.length - 1); i++) {
          ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[i+1][0],Cpoints[i+1][1], r);
        }
        ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[0][0],Cpoints[0][1], r);
        ctx.closePath();
        ctx.fillStyle = '#000';
        ctx.fill();
    }
});



registerPaint('rounded-shape-radius-fixed', class  {

  static get inputProperties() {
    return [
      '--path',
      '--radius',
      '--border',
      '--dash'
    ]
  }
  
  paint(ctx, size, properties) {

    const points = properties.get('--path').toString().split(',');
    var Ppoints = [];
    var Cpoints = [];
    const r = parseFloat(properties.get('--radius').value);
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
   
    var N = points.length;
    for (var i = 0; i < N; i++) {
      var j = i-1;
      if(j<0) j=N-1;
      
      var p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      p = cc(p[0],p[1]);
      Ppoints.push([p[0],p[1]]);
      var pj = points[j].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      pj = cc(pj[0],pj[1]);
      Cpoints.push([p[0]-((p[0]-pj[0])/2),p[1]-((p[1]-pj[1])/2)]);
    }
    ctx.beginPath();
    ctx.moveTo(Cpoints[0][0],Cpoints[0][1]);
    var i;
    var rr;  // Maximum allowed radius
    for (i = 0; i < (Cpoints.length - 1); i++) {
      var angle = Math.atan2(Cpoints[i+1][1] - Ppoints[i][1], 
                             Cpoints[i+1][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
      if (angle < 0) {
        angle += (2*Math.PI)
      }
      if (angle > Math.PI) {
        angle = 2*Math.PI - angle
      }
      var distance = Math.min(Math.sqrt((Cpoints[i+1][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i+1][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
      rr = Math.min(distance * Math.tan(angle/2),r);
      ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[i+1][0],Cpoints[i+1][1], rr);
    }
  var angle = Math.atan2(Cpoints[0][1] - Ppoints[i][1], 
                             Cpoints[0][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
   if (angle < 0) {
      angle += (2*Math.PI)
   }
   if (angle > Math.PI) {
      angle = 2*Math.PI - angle
   }
   var distance = Math.min(Math.sqrt((Cpoints[0][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[0][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
    rr = Math.min(distance * Math.tan(angle/2),r);
    ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[0][0],Cpoints[0][1], rr);
    ctx.closePath();
    ctx.fillStyle = '#000';
    ctx.fill();
  }

});


///ROUNDED SHAPES BORDERS

registerPaint('with-borders', class  {

  // --radius: 5px; /* Defines the radius */
  // --border: 6px; /* Defines the border thickness */
  // --path: /* Define your shape here */;
  // --t: 0; /* The first mask on the main element */

  static get inputProperties() {
    return [
      '--path',
      '--radius',
      '--border',
      '--t',
      '--dash'
    ]
  }
  
  paint(ctx, size, properties) {

    const points = properties.get('--path').toString().split(',');
    var Ppoints = [];
    var Cpoints = [];
    const r = parseFloat(properties.get('--radius').value);
    const b = parseFloat(properties.get('--border').value);
    const t = parseInt(properties.get('--t'));
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
   
    var N = points.length;
    for (var i = 0; i < N; i++) {
      var j = i-1;
      if(j<0) j=N-1;
      
      var p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      p = cc(p[0],p[1]);
      Ppoints.push([p[0],p[1]]);
      var pj = points[j].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      pj = cc(pj[0],pj[1]);
      Cpoints.push([p[0]-((p[0]-pj[0])/2),p[1]-((p[1]-pj[1])/2)]);
    }
    ctx.beginPath();
    ctx.moveTo(Cpoints[0][0],Cpoints[0][1]);
    var i;
    var rr;
    for (i = 0; i < (Cpoints.length - 1); i++) {
      var angle = Math.atan2(Cpoints[i+1][1] - Ppoints[i][1], 
                             Cpoints[i+1][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
      if (angle < 0) {
        angle += (2*Math.PI)
      }
      if (angle > Math.PI) {
        angle = 2*Math.PI - angle
      }
      var distance = Math.min(Math.sqrt((Cpoints[i+1][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i+1][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
      rr = Math.min(distance * Math.tan(angle/2),r);
      ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[i+1][0],Cpoints[i+1][1], rr);
    }
  var angle = Math.atan2(Cpoints[0][1] - Ppoints[i][1], 
                             Cpoints[0][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
   if (angle < 0) {
      angle += (2*Math.PI)
   }
   if (angle > Math.PI) {
      angle = 2*Math.PI - angle
   }
   var distance = Math.min(Math.sqrt((Cpoints[0][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[0][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
    rr = Math.min(distance * Math.tan(angle/2),r);
    ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[0][0],Cpoints[0][1], rr);
    ctx.closePath();
    
    // The below code added for borders alongwith masking in css before element
    if(t==0) {
      ctx.fillStyle = '#000';
      ctx.fill();
    } else {
      ctx.lineWidth = 2*b;
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

})


//DASHED BORDERS


///ROUNDED SHAPES BORDERS

registerPaint('dashed-borders', class  {

  // --radius: 5px; /* Defines the radius */
  // --border: 6px; /* Defines the border thickness */
  // --path: /* Define your shape here */;
  // --t: 0; /* The first mask on the main element */

  static get inputProperties() {
    return [
      '--path',
      '--radius',
      '--border',
      '--t',
      '--dash'
    ]
  }
  
  paint(ctx, size, properties) {

    const points = properties.get('--path').toString().split(',');
    var Ppoints = [];
    var Cpoints = [];
    const r = parseFloat(properties.get('--radius').value);
    const b = parseFloat(properties.get('--border').value);
    const t = parseInt(properties.get('--t'));
    const d = properties.get('--dash').toString().split(',');  //for dashed borders
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
   
    var N = points.length;
    for (var i = 0; i < N; i++) {
      var j = i-1;
      if(j<0) j=N-1;
      
      var p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      p = cc(p[0],p[1]);
      Ppoints.push([p[0],p[1]]);
      var pj = points[j].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      pj = cc(pj[0],pj[1]);
      Cpoints.push([p[0]-((p[0]-pj[0])/2),p[1]-((p[1]-pj[1])/2)]);
    }
    ctx.beginPath();
    ctx.moveTo(Cpoints[0][0],Cpoints[0][1]);
    var i;
    var rr;
    for (i = 0; i < (Cpoints.length - 1); i++) {
      var angle = Math.atan2(Cpoints[i+1][1] - Ppoints[i][1], 
                             Cpoints[i+1][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
      if (angle < 0) {
        angle += (2*Math.PI)
      }
      if (angle > Math.PI) {
        angle = 2*Math.PI - angle
      }
      var distance = Math.min(Math.sqrt((Cpoints[i+1][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i+1][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
      rr = Math.min(distance * Math.tan(angle/2),r);
      ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[i+1][0],Cpoints[i+1][1], rr);
    }
  var angle = Math.atan2(Cpoints[0][1] - Ppoints[i][1], 
                             Cpoints[0][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
   if (angle < 0) {
      angle += (2*Math.PI)
   }
   if (angle > Math.PI) {
      angle = 2*Math.PI - angle
   }
   var distance = Math.min(Math.sqrt((Cpoints[0][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[0][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
    rr = Math.min(distance * Math.tan(angle/2),r);
    ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[0][0],Cpoints[0][1], rr);
    ctx.closePath();
    
    // The below code added for borders alongwith masking in css before element
    if(t==0) {
      ctx.fillStyle = '#000';
      ctx.fill();
    } else {
      ctx.setLineDash(d); //for dashed borders
      ctx.lineWidth = 2*b;
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

})


//SEPARATE RADIUS FOR EACH CORNER

registerPaint('separate-radius', class  {

  static get inputProperties() {
    return [
      '--path',
      '--radius',
      '--border',
      '--t',
      '--dash'
    ]
  }
  
  paint(ctx, size, properties) {

    const points = properties.get('--path').toString().split(',');
    var Ppoints = [];
    var Cpoints = [];
    var Radius = [];   //for separate radius
    const r = parseFloat(properties.get('--radius').value);
    const b = parseFloat(properties.get('--border').value);
    const d = properties.get('--dash').toString().split(',');
    const t = parseInt(properties.get('--t'));
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
   
    var N = points.length;
    for (var i = 0; i < N; i++) {
      var j = i-1;
      if(j<0) j=N-1;
      
      var p = points[i].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      // Code for separate radius
      if(p[2])
        Radius.push(parseInt(p[2]));
      else
        Radius.push(r);
      p = cc(p[0],p[1]);
      Ppoints.push([p[0],p[1]]);
      var pj = points[j].trim().split(/(?!\(.*)\s(?![^(]*?\))/g);
      pj = cc(pj[0],pj[1]);
      Cpoints.push([p[0]-((p[0]-pj[0])/2),p[1]-((p[1]-pj[1])/2)]);
    }
    ctx.beginPath();
    ctx.moveTo(Cpoints[0][0],Cpoints[0][1]);
    var i;
    var rr;
    for (i = 0; i < (Cpoints.length - 1); i++) {
      var angle = Math.atan2(Cpoints[i+1][1] - Ppoints[i][1], 
                             Cpoints[i+1][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
      if (angle < 0) {
        angle += (2*Math.PI)
      }
      if (angle > Math.PI) {
        angle = 2*Math.PI - angle
      }
      var distance = Math.min(Math.sqrt((Cpoints[i+1][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i+1][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
      rr = Math.min(distance * Math.tan(angle/2),Radius[i]);
      ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[i+1][0],Cpoints[i+1][1], rr);
    }
  var angle = Math.atan2(Cpoints[0][1] - Ppoints[i][1], 
                             Cpoints[0][0] - Ppoints[i][0]) -
                  Math.atan2(Cpoints[i][1] - Ppoints[i][1], 
                             Cpoints[i][0] - Ppoints[i][0]);
   if (angle < 0) {
      angle += (2*Math.PI)
   }
   if (angle > Math.PI) {
      angle = 2*Math.PI - angle
   }
   var distance = Math.min(Math.sqrt((Cpoints[0][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[0][0] - Ppoints[i][0]) ** 2),
                              Math.sqrt((Cpoints[i][1] - Ppoints[i][1]) ** 2 + 
                                        (Cpoints[i][0] - Ppoints[i][0]) ** 2));
    rr = Math.min(distance * Math.tan(angle/2),Radius[i]);
    ctx.arcTo(Ppoints[i][0], Ppoints[i][1], Cpoints[0][0],Cpoints[0][1], rr);
    ctx.closePath();
    
    
    if(t==0) {
      ctx.fillStyle = '#000';
      ctx.fill();
    } else {
      ctx.setLineDash(d);
      ctx.lineWidth = 2*b;
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

})


