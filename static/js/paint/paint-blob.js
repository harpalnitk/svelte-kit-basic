registerPaint('blob1', class  {

  static get inputProperties() {
   return [
     '--n'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const RADIUS = size.width/2;
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n'));
  
   for(var i = 0; i < N; i++) {
    // Each point is offset by a random value between 0
    //  and 50 pixels, bringing each point closer to 
    //  the center by a slightly different amount. And
    //   we get our blob shape as a result!
     var r = RADIUS - Math.random()*50;
     var x = Math.cos((i / N) * (2 * Math.PI)) * r + cx;
     var y = Math.sin((i / N) * (2 * Math.PI)) * r + cy;
     point[i] = [x,y];
   }
//     Considering the center point (defined by CenterX/CenterY) 
// and the radius, we calculate the coordinate of each
//  point using some basic trigonometry.

//  After that, we draw a cubic Bézier curve
//  between our points using quadraticCurveTo().
//   To do this, we introduce more points (illustrated in red)
//    because a cubic Bézier curve requires a start
//     point, a control point, and an end point.

//  The red points are the start and end points,
//  and the green points can be the control points. 
//  Each red point is placed at the midpoint between two green points.
   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
});


// Animating the blob is actually the main purpose of this article
//Let’s start with the basic one: a transition from a circle 
//into a blob by changing the position of one point.



registerPaint('blob2', class  {

  static get inputProperties() {
   return [
     '--n',
     '--b',
     '--t'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const RADIUS = size.width/2;
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n')); //number of points
   const B = parseFloat(properties.get('--b'));
   //var r = RADIUS - B*(i%2);  ONLY FOR EVEN POINTS
   //var r = RADIUS - B*random(); For asymmetric blob; For all points but with random shifts
   const T = parseInt(properties.get('--t')); // whther to have symmetric blob or asymmetic blob
   // if(T == 0) 
//   var r = RADIUS - B*(i%2);
// else 
//   var r = RADIUS - B*random();
 


// It’s the same function I used in the previous article.
//  We saw there that we cannot rely on the default
//   built-in function because we need a random function
//    where we are able to control the seed to make 
//    sure we always get the same sequence of random
//     values. So the seed value is also another
//      variable that we can control to get a different
//       blob shape. Go change that value manually and see the result.

   const mask = 0xffffffff;
   const seed = 456;
   let m_w  = (123456789 + seed) & mask;
   let m_z  = (987654321 - seed) & mask;
   let random =  function() {
     m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
     m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

     var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
     result /= 4294967296;
     return result;
   }
   
   for(var i = 0; i < N; i++) {
     if(T == 0) 
       var r = RADIUS - B*(i%2);
     else 
       var r = RADIUS - B*random();
     var x = Math.cos((i / N) * (2 * Math.PI)) * r + cx;
     var y = Math.sin((i / N) * (2 * Math.PI)) * r + cy;
     point[i] = [x,y];
   }
   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
});




registerPaint('blob3', class  {

  static get inputProperties() {
   return [
     '--n',
     '--b',
     '--t'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const RADIUS = size.width/2;
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n'));
   const B = parseFloat(properties.get('--b'));
   const T = parseInt(properties.get('--t'));
   
   const mask = 0xffffffff;
   const seed = 456;
   let m_w  = (123456789 + seed) & mask;
   let m_z  = (987654321 - seed) & mask;
   let random =  function() {
     m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
     m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

     var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
     result /= 4294967296;
     return result;
   }
   
  
   for(var i = 0; i < N; i++) {
     if(T == 0) 
       var r = RADIUS - B*(i%2);
     else 
       var r = RADIUS - B*random();
     var x = Math.cos((i / N) * (2 * Math.PI)) * RADIUS + cx;
     //ONLY THIS LINE CHANGED TO HAVE BLOB EFFECT ONLY ON y-AXIS AND NOT ON X-AXIS
     var y = Math.sin((i / N) * (2 * Math.PI)) * r + cy;
     point[i] = [x,y];
   }
   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
})


registerPaint('blob4', class  {

  static get inputProperties() {
   return [
     '--n',
     '--b',
     '--t'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const RADIUS = size.width/2;
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n'));
   const B = parseFloat(properties.get('--b'));
   const T = parseInt(properties.get('--t'));
   
   const mask = 0xffffffff;
   const seed = 456;
   let m_w  = (123456789 + seed) & mask;
   let m_z  = (987654321 - seed) & mask;
   let random =  function() {
     m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
     m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

     var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
     result /= 4294967296;
     return result;
   }
   
   for(var i = 0; i < N; i++) {
     var sign = 1;
     if(i<0.75*N && i>0.25*N) 
       sign = -1;
     if(T == 0) 
       var r = RADIUS - B*sign*(i%2);
     else 
       var r = RADIUS - B*sign*random();
     var x = Math.cos((i / N) * (2 * Math.PI)) * r + cx;
     var y = Math.sin((i / N) * (2 * Math.PI)) * RADIUS + cy;
     point[i] = [x,y];
   }
   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
});


registerPaint('blob5', class  {

  static get inputProperties() {
   return [
     '--n',
     '--b',
     '--t',
     '--v'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n'));
   const B = parseFloat(properties.get('--b'));
   const T = parseInt(properties.get('--t'));
   const V = parseFloat(properties.get('--v'));
   //RADIUS OF CIRCLE REDUCED BY V MAXIMUM VALUE BY WHICH POINTS MOVE TO FIX
   //POINTS MOVING OUT OF MASK AREA PROBLEM IN LEFT RIGHT MOVEMENT
   const RADIUS = size.width/2 - V;
   
   const mask = 0xffffffff;
   const seed = 456;
   let m_w  = (123456789 + seed) & mask;
   let m_z  = (987654321 - seed) & mask;
   let random =  function() {
     m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
     m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

     var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
     result /= 4294967296;
     return result;
   }
   
   for(var i = 0; i < N; i++) {
     var sign = 1;
     if(i<0.75*N && i>0.25*N) 
       sign = -1;
     if(T == 0) 
       var r = RADIUS - B*sign*(i%2);
     else 
       var r = RADIUS - B*sign*random();
     var x = Math.cos((i / N) * (2 * Math.PI)) * r + cx;
     var y = Math.sin((i / N) * (2 * Math.PI)) * RADIUS + cy;
     point[i] = [x,y];
   }
   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
});




registerPaint('blob6', class  {

  static get inputProperties() {
   return [
     '--n',
     '--b',
     '--t',
     '--v'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n'));
   const B = parseFloat(properties.get('--b'));
   const T = parseInt(properties.get('--t'));
   const V = parseFloat(properties.get('--v'));
   const RADIUS = size.width/2 - V;
   
   const mask = 0xffffffff;
   const seed = 166;
   let m_w  = (123456789 + seed) & mask;
   let m_z  = (987654321 - seed) & mask;
   let random =  function() {
     m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
     m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

     var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
     result /= 4294967296;
     return result;
   }
   
   for(var i = 0; i < N; i++) {
     var sign = 1;
     if(i<0.75*N && i>0.25*N) 
       sign = -1;
     if(T == 0) 
       var r = RADIUS - B*sign*(i%2);
     else 
       var r = RADIUS - B*sign*random();
     var x = Math.cos((i / N) * (2 * Math.PI)) * r + cx;
     var y = Math.sin((i / N) * (2 * Math.PI)) * RADIUS + cy;
     point[i] = [x,y];
   }
   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
});



registerPaint('blob-circular', class  {

  static get inputProperties() {
   return [
     '--n',
     '--b',
     '--t'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n'));
   const B = parseFloat(properties.get('--b'));
   const T = parseInt(properties.get('--t'));
   
   // This is the small radius around which points on bigger circle rotate
   var r = (size.width)*Math.sin(Math.PI/(N*2));
   const RADIUS = size.width/2 - r;
   
   const mask = 0xffffffff;
   const seed = 456;
   let m_w  = (123456789 + seed) & mask;
   let m_z  = (987654321 - seed) & mask;
   let random =  function() {
     m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
     m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

     var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
     result /= 4294967296;
     return result;
   }
   
   for(var i = 0; i < N; i++) {
     var rr = r*random();
     var xx = rr*Math.cos(B * (2 * Math.PI));
     var yy = rr*Math.sin(B * (2 * Math.PI)); 
     var x = Math.cos((i / N) * (2 * Math.PI)) * RADIUS + xx + cx;
     var y = Math.sin((i / N) * (2 * Math.PI)) * RADIUS + yy + cy;
     point[i] = [x,y];
   }

  //  We get the max value of the radius
  //  and we reduce that value from the 
  //  main radius. Remember that we need 
  //  to have enough space for our points
  //   so we need to reduce the mask area
  //    like we did with the previous 
  //    animation. Then for each point
  //     we get a random radius rr 
  //     (between 0 and r). Then we
  //      calculate the position inside the
  //       circular path using xx and yy. And,
  //        finally, we place the path around
  //         its orbit and get the final 
  //         position (the x, y values).


   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
});


registerPaint('blob-spiral', class  {

  static get inputProperties() {
   return [
     '--n',
     '--b',
     '--bo',
     '--t'
   ]
 }
 
 paint(ctx, size, properties) {
   var point = [];
   const cx = size.width/2;
   const cy = size.height/2;
   const N = parseInt(properties.get('--n'));
   const B = parseFloat(properties.get('--b'));
   const Bo = parseFloat(properties.get('--bo'));
   const T = parseInt(properties.get('--t'));
   
   var r = (size.width)*Math.sin(Math.PI/(N*2));
   const RADIUS = size.width/2 - r;
   
   const mask = 0xffffffff;
   const seed = 456;
   let m_w  = (123456789 + seed) & mask;
   let m_z  = (987654321 - seed) & mask;
   let random =  function() {
     m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
     m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

     var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
     result /= 4294967296;
     return result;
   }
   
   for(var i = 0; i < N; i++) {
     var rr = r*random();
     var xx = rr*Math.cos(B * (2 * Math.PI));
     var yy = rr*Math.sin(B * (2 * Math.PI)); 
     //FOR SPIRAL EFFECT
     var ro = RADIUS - Bo*random();
     var x = Math.cos((i / N) * (2 * Math.PI)) * ro + xx + cx;
     var y = Math.sin((i / N) * (2 * Math.PI)) * ro + yy + cy;
     point[i] = [x,y];
   }
   ctx.beginPath();
   var xc1 = (point[0][0] + point[N - 1][0]) / 2;
   var yc1 = (point[0][1] + point[N - 1][1]) / 2;

   ctx.moveTo(xc1, yc1);
   for(var i = 0; i < N - 1; i++) {
     var xc = (point[i][0] + point[i + 1][0]) / 2;
     var yc = (point[i][1] + point[i + 1][1]) / 2;
     ctx.quadraticCurveTo(point[i][0], point[i][1], xc, yc)
   }
   ctx.quadraticCurveTo(point[N - 1][0], point[N - 1][1], xc1, yc1);
   ctx.fillStyle = '#000';
   ctx.closePath();
   ctx.fill();
   }
})




