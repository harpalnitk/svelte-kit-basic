console.log("Hello from paint.js");
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
} catch (error) {
    console.log('error',error);
}

//WITH PROPERTY

//We define the getter inputProperties with our variables as an array.
 //We add properties as a third parameter to paint()
 // and later we get our variable using properties.get().
registerPaint('draw2', class {
  
    static get inputProperties() {return ['--color']}
    
    paint(ctx, size, properties) {
        const c = properties.get('--color');
       
        ctx.fillStyle = c;
        ctx.fillRect(0, 0, size.width, size.height);
    }
 });



 // IMAGE FRAGMENTATION INTO TWO PARTS

 registerPaint('fragmentation', class  {
  
    paint(ctx, size, properties) {
      
     /* left */
     ctx.fillStyle = 'rgba(0,0,0,1)';
     ctx.fillRect(0, 0, size.width/2, size.height);
     /* right */ 
     ctx.fillStyle = 'rgba(0,0,0,0.5)';
     ctx.fillRect(size.width/2, 0, size.width/2, size.height);
        
    }
  
  });



   // IMAGE FRAGMENTATION INTO MULTIPLE PARTS WITH TWO VARIABLES



   registerPaint('fragmentation2', class  {

    static get inputProperties() {
      return [
        '--f-n',
        '--f-m'
      ]
    }
    
    paint(ctx, size, properties) {
  
      const n = properties.get('--f-n');
      const m = properties.get('--f-m');
      const w = size.width/n;
      const h = size.height/m;
     
      for(var i=0;i<n;i++) {
         for(var j=0;j<m;j++) {
           ctx.fillStyle = 'rgba(0,0,0,'+(Math.random())+')';
           ctx.fillRect(i*w, j*h, w, h);
          }
        }
    }
  
  });




// IMAGE FRAGMENTATION INTO MULTIPLE PARTS WITH TWO VARIABLES AND THIRD VARIABLE FOR CONTROLLING ALPHA


   //Now that we have built our fragmentation effect,/
    // let’s focus on the CSS. Notice that the effect is as 
    // simple as changing the opacity value (or the value of 
    //     whichever property you are working with) of an
    //      element on it hover state.

    // img {
    //     opacity:1;
    //     transition:opacity 1s;
    //   }
      
    //   img:hover {
    //     opacity:0;
    //   }

    // img {
    //     -webkit-mask: paint(fragmentation);
    //     --f-o:1;
    //     transition:--f-o 1s;
    //   }
      
    //   img:hover {
    //     --f-o:0;
    //   }
  registerPaint('fragmentation3', class  {

    static get inputProperties() {
      return [
        '--f-n',
        '--f-m',
        '--f-o'
      ]
    }
    
    paint(ctx, size, properties) {
  
      const n = properties.get('--f-n');
      const m = properties.get('--f-m');
      const o = properties.get('--f-o');
      const w = size.width/n;
      const h = size.height/m;
     
      // o is 1 (Black) initially an on hover it becomes 0 (WHITE)
      for(var i=0;i<n;i++) {
         for(var j=0;j<m;j++) {
           ctx.fillStyle = 'rgba(0,0,0,'+o+')';
           ctx.fillRect(i*w, j*h, w, h);
          }
        }
    }
  
  })
  


//We need a trick to prevent fading of all the rectangles at the same time, instead creating a delay between them


// First we define a variable L that should be bigger or equal to 1
//  then for each rectangle of our matrix (i.e. for each alpha channel)
//   we perform a transition between X and Y where X - Y = L
//    so we have the same overall duration for all the alpha channel.
//     X should be bigger or equal to 1 and Y smaller or equal to 0.

// Wait, the alpha value shouldn’t be in the range [1 0], right ?

// Yes, it should! And all the tricks that we’re working on 
// rely on that. Above, the alpha is animating from 8 to -2,
//  meaning we have an opaque color in the [8 1] range, a 
//  transparent one in the [0 -2] range and an animation within
//   [1 0]. In other words, any value bigger than 1 will have the
//    same effect as 1, and any value smaller than 0 will have the
//     same effect as 0.



//L is the variable illustrated previously, and O is the value of our CSS variable that transitions from 1 to 0


//When O=1, we have (Math.random()*(l-1) + 1).
// Considering the fact that the random() function
 // gives us a value within the [0 1] range, the 
 // final value will be in the [L 1]range.

//When O=0, we have (Math.random()*(l-1) + 1 - l)
// and a value with the [0 1-L] range.

//L is our variable to control the delay.


  registerPaint('fragmentation4', class  {

    static get inputProperties() {
      return [
        '--f-n',
        '--f-m',
        '--f-o'
      ]
    }
    
    paint(ctx, size, properties) {
  
      const n = properties.get('--f-n');
      const m = properties.get('--f-m');
      const o = properties.get('--f-o');
      const w = size.width/n;
      const h = size.height/m;
      const l = 10;
     
      
      for(var i=0;i<n;i++) {
         for(var j=0;j<m;j++) {
           ctx.fillStyle = 'rgba(0,0,0,'+((Math.random()*(l-1) + 1) - (1-o)*l)+')';
           ctx.fillRect(i*w, j*h, w, h);
          }
        }
    }
  
  });


//   We are getting closer. We have a cool fragmentation effect but
//    not the one we saw in the beginning of the article. 
//    This one isn’t as smooth.

// The issue is related the random() function.
//  We said that each alpha channel need to animate 
//  between X and Y, so logically those value need to 
//  remain the same. But the paint() function is called
//   a bunch during the transition, so each time, the
//    random() function give us different X and Y values
//     for each alpha channel; hence the “random” effect
//      we are getting.

// To fix this we need to find a way to store the 
// generated value so they are always the same for 
// each call of the paint() function. Let’s consider 
// a pseudo-random function, a function that always 
// generates the same sequence of values. In other words,
//  we want to control the seed.
  
// Unfortunately, we cannot do this with the JavaScript’s built-in 
// random() function, so like any good
//  developer, let’s pick one up from Stack Overflow: 
  
registerPaint('fragmentation5', class  {

    static get inputProperties() {
      return [
        '--f-n',
        '--f-m',
        '--f-o'
      ]
    }
    
    paint(ctx, size, properties) {
  
      const n = properties.get('--f-n');
      const m = properties.get('--f-m');
      const o = properties.get('--f-o');
      const w = size.width/n;
      const h = size.height/m;
      const l = 10;
      
      /* Constant random seed function start*/
      const mask = 0xffffffff;
      const seed = 30; /* update this to change the generated sequence */
      let m_w  = (123456789 + seed) & mask;
      let m_z  = (987654321 - seed) & mask;
  
      let random =  function() {
        m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;
        var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
      }

        /* Constant random seed function end*/
      
      
      for(var i=0;i<n;i++) {
         for(var j=0;j<m;j++) {
           ctx.fillStyle = 'rgba(0,0,0,'+((random()*(l-1) + 1) - (1-o)*l)+')';
           ctx.fillRect(i*w, j*h, w, h);
          }
        }
    }
  
  });

//   If you play with the above demos you will notice, in some particular case, strange gaps between the rectangles
  
//   To avoid this, we can extend the area of each rectangle with a small offset.

// We update this:

//FINAL FRAGMENTATION WITH SQUARES
registerPaint('fragmentation6', class  {

    static get inputProperties() {
      return [
        '--f-n',
        '--f-m',
        '--f-o'
      ]
    }
    
    paint(ctx, size, properties) {
  
      const n = properties.get('--f-n');
      const m = properties.get('--f-m');
      const o = properties.get('--f-o');
      const w = size.width/n;
      const h = size.height/m;
      const l = 10;
      
      
      const mask = 0xffffffff;
      const seed = 5; /* update this to change the generated sequence */
      let m_w  = (123456789 + seed) & mask;
      let m_z  = (987654321 - seed) & mask;
  
      let random =  function() {
        m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;
        var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
      }
      
      
      for(var i=0;i<n;i++) {
         for(var j=0;j<m;j++) {
            ctx.fillStyle = 'rgba(0,0,0,'+((random()*(l-1) + 1) - (1-o)*l)+')'; 
            /* offset of 0.5 used here */
            ctx.fillRect(i*w-.5, j*h-.5, w+.5, h+.5);
          }
        }
    }
  
  })


//   USING HEXAGON SHAPES

registerPaint('fragmentation7', class  {

    static get inputProperties() {
      return [
        '--f-r',
        '--f-o'
      ]
    }
    
    paint(ctx, size, properties) {
  
      const r = parseInt(properties.get('--f-r'));
      const o = properties.get('--f-o');
      const w = size.width;
      const h = size.height;
      const a = 2 * Math.PI / 6;
      const l = 7; 
     
      /* seeded random */
      const mask = 0xffffffff;
      const seed = 30;
      let m_w  = (123456789 + seed) & mask;
      let m_z  = (987654321 - seed) & mask;
      let random =  function() {
        m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
        m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;
  
        var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
        result /= 4294967296;
        return result;
      }
      /**/
      
    for (let y = 0; y + r * Math.sin(a) < (h + 3*r); y += r * Math.sin(a)) {
      for (let x = 0, j = 0; x + r * (1 + Math.cos(a)) < (w + 3*r); x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
           ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
         }
        ctx.closePath();
        var alpha = (random()*(l-1) + 1) - (1-o)*l;
        ctx.fillStyle = 'rgba(0,0,0,'+alpha+')';
        ctx.strokeStyle = 'rgba(0,0,0,'+alpha+')';
        ctx.stroke();
        ctx.fill();
      }
    }
    }
  
  })