<script>
        import { onMount } from "svelte";

onMount(() => {
    if (CSS.paintWorklet) {  
        try {
            //We add the paint worklet using CSS.paintWorklet.addModule('your_js_file')
            CSS.paintWorklet.addModule('../js/paint/paint-rounded-corner.js'); 
            console.log('Js file loaded');
        } catch (error) {
            console.log('Error',error);
        }            
    
}});
</script>




<main class='flex-center'>

    <h1>Basic</h1>
    <section class="basic">
       
        <div class="hexagone" style="--path:25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%"></div>
        <div class="triangle" style="--path:50% 0%, 0% 100%, 100% 100%;background:url(https://picsum.photos/id/1061/300/300) center/cover;"></div>
        <div class="star" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;background:gold"></div>
        <div class="arrow" style="--path:40% 0%, 40% 35%, 100% 35%, 100% 65%, 40% 65%, 40% 100%, 0% 50%;background:green"></div>
        <div class="custom" style="--path:50% 0%, 50% 50%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;background: conic-gradient(at 53% 47%, orange,pink,purple);"></div>
   
    </section> 
    <h1>Basic With Radius Problem Fixed</h1>
    <section class="basic-radius-problem-fixed">
       
        <div class="hexagone" style="--path:25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%"></div>
        <div class="triangle" style="--path:50% 0%, 0% 100%, 100% 100%;background:url(https://picsum.photos/id/1061/300/300) center/cover;"></div>
        <div class="star" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;background:gold"></div>
        <div class="arrow" style="--path:40% 0%, 40% 35%, 100% 35%, 100% 65%, 40% 65%, 40% 100%, 0% 50%;background:green"></div>
        <div class="custom" style="--path:50% 0%, 50% 50%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;background: conic-gradient(at 53% 47%, orange,pink,purple);"></div>
   
    </section> 
    <h1>With Borders</h1>
    <section class="with-borders">
       
        <div class="hexagone" style="--path:25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%"></div>
        <div class="triangle" style="--path:50% 0%, 0% 100%, 100% 100%;--back:url(https://picsum.photos/id/1061/300/300) center/cover;--border:10px"></div>
        <div class="star" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;--back:gold;--border:4px"></div>
        <div class="arrow" style="--path:40% 0%, 40% 35%, 100% 35%, 100% 65%, 40% 65%, 40% 100%, 0% 50%;--back:green;--border:12px"></div>
        <div class="custom" style="--path:50% 0%, 50% 50%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;--back: conic-gradient(at 53% 47%, orange,pink,purple);"></div>
   
    </section> 
    <h1>Dashed Borders</h1>
    <section class="dashed-borders">
     
        <div class="hexagone" style="--path:25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%"></div>
        <div class="triangle" style="--path:50% 0%, 0% 100%, 100% 100%;--back:url(https://picsum.photos/id/1061/300/300) center/cover;--border:10px;--dash:25,4"></div>
        <div class="star" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;--back:gold;--border:4px"></div>
        <div class="arrow" style="--path:40% 0%, 40% 35%, 100% 35%, 100% 65%, 40% 65%, 40% 100%, 0% 50%;--back:green;--border:8px"></div>
        <div class="custom" style="--path:50% 0%, 50% 50%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;--back: conic-gradient(at 53% 47%, orange,pink,purple);--dash:20,20"></div>
    </section> 
    <h1>Separate radius for each corner</h1>
    <section class="separate-radius">
       
        <div class="hexagone border" style="--path:25% 0% 0, 75% 0% 0, 100% 50%, 75% 100% 0, 25% 100% 0, 0% 50%"></div>
        <div class="triangle" style="--path:50% 0% 0, 0% 100%, 100% 100%;--back:url(https://picsum.photos/id/1061/300/300) center/cover;--border:10px;"></div>
        <div class="star border" style="--path:50% 0% 0, 61% 35%, 98% 35% 0, 68% 57%, 79% 91% 0, 50% 70%, 21% 91% 0, 32% 57%, 2% 35% 0, 39% 35%;--back:gold;--border:4px"></div>
        <div class="arrow" style="--path:40% 0% 0, 40% 35%, 100% 35%, 100% 65%, 40% 65%, 40% 100% 0, 0% 50%;--back:green;--border:8px"></div>
        <div class="custom" style="--path:50% 0%, 50% 50% 0, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;--back: conic-gradient(at 53% 47%, orange,pink,purple);"></div>
    </section> 
    <h1>Different Shapes using the learning</h1>
    <section class="different-shapes">
       
        <div style="width:150px;height:100px;--path:0 0,50% 40%,100% 0,100% 100%,50% 60%,0 100%;--radius:40px;"></div>

        <div style="width:150px;height:100px;--path:0 50%,33% 0,66% 50%,100% 0,100% 50%,66% 100%,33% 50%,0 100%;--radius:10px;"></div>
        
        <div style="width:150px;height:100px;--path:50% 0,100% 50% 0,50% 100%,0 50% 0;--radius:60px;"></div>
        <div style="width:100px;height:100px;--path:25% 0,50% 25% 0,75% 0,100% 33%,50% 100% 0,0 33%;--radius:60px;"></div>
        
        <div style="width:100px;height:100px;--path:0 0 0,50% 40%,100% 0 0,100% 100% 0,50% 60%,0 100% 0;--radius:100px;"></div>
        
        <div style="width:100px;height:100px;--path:20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%;--radius:100px;"></div>
        
        <div style="width:100px;height:100px;--path:20% 0%, 0% 20%, 30% 50% 0, 0% 80%, 20% 100%, 50% 70% 0, 80% 100%, 100% 80%, 70% 50% 0, 100% 20%, 80% 0%, 50% 30% 0;--radius:100px;"></div>
        
        <div style="width:100px;height:100px;--path:20% 0%, 0% 20%, 30% 50% 20px, 0% 80%, 20% 100%, 50% 70% 20px, 80% 100%, 100% 80%, 70% 50% 20px, 100% 20%, 80% 0%, 50% 30% 20px;--radius:0px;"></div>
        
        <div style="width:100px;height:100px;--path:0 0,100%  0 0,20% 20%,0 100% 0;--radius:25px;"></div>
        
        <div style="width:100px;height:100px;--path:50% -100% 0,50% 50%,200% 50% 0,50% 50%,50% 200% 0,50% 50%,-100% 50% 0,50% 50%;--radius:55px;"></div>
        
        <div style="width:100px;height:100px;--path:30% 0,70% 0,70% 100%,150% 100% 0,-50% 100% 0,30% 100%;--radius:50px;"></div>
        
        <div style="width:100px;height:100px;--path:0 0,30% 0,30% 70%,100% 70%,100% 100%,0 100%;--radius:100px;"></div>
        
        <div style="width:100px;height:100px;--path:50% 0 0,100% 100%,0 100%;--radius:100px;"></div>
        
        <div style="width:100px;height:100px;--path:0 0,33% 50% 100px,50% 0,66% 50% 100px,100% 0,80% 100%,20% 100% ;--radius:0;"></div>
        
        <div style="width:150px;height:100px;--path:40% 0 0,50% 50%,60% 0 0,100% 100%,0 100%;--radius:100px;"></div>
        
        <div style="width:150px;height:100px;--path:75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%;--radius:10px;"></div>
        
        <div style="width:150px;height:100px;--path:50% 0,100% 0,100% 50%,50% 50%,0 100% 0;--radius:50px;"></div>
        
        <div style="width:150px;height:100px;--path:0 20%,50% 0,100% 20%,60% 50% 50px,100% 80%,50% 100%,0 80%,40% 50% 50px;--radius:0;"></div>
        
        <div style="width:100px;height:100px;--path:50% 0%, 50% 50%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%;--radius:100px;"></div>
        
        <div style="width:100px;height:100px;--path:50% 0%, 37.64% 11.96%, 20.61% 9.55%, 17.64% 26.49%, 2.45% 34.55%, 10% 50%, 2.45% 65.45%, 17.64% 73.51%, 20.61% 90.45%, 37.64% 88.04%, 50% 100%, 62.36% 88.04%, 79.39% 90.45%, 82.36% 73.51%, 97.55% 65.45%, 90% 50%, 97.55% 34.55%, 82.36% 26.49%, 79.39% 9.55%, 62.36% 11.96%;--radius:100px;"></div>
        
        <div style="width:80px;height:100px;--path:0 0,100% 0,100% 20%,25% 20%,25% 40%,100% 40%,100% 100%,0 100%,0 80%,75% 80%,75% 60%,0 60%;--radius:100px;"></div>
        
        <div style="width:200px;height:100px;--path:30% 0 0,50% 35%,70% 0 0,100% 100% 0,80% 80%,70% 100% 0,50% 70%,30% 100% 0,20% 80%,0 100% 0;--radius:100px;"></div>
        
        <div style="width:100px;height:100px;--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;--radius:10px;"></div>
        
        <div style="width:100px;height:100px;--path:50% 50%, 83% 12%, 100% 43%, 50% 50%, 68% 100%, 32% 100%, 50% 50%, 0% 43%, 17% 12%;--radius:50px;"></div>
    </section> 
    <h1>Speech bubbles with rounded corner</h1>
    <section class="speech-bubbles">
      
        <div class="p-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="p-top" style="--a:15px;--border:5px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="p-right" style="--a:20px;--border:4px;--radius:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="p-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-left" style="--border:1px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-left" style="--a:20px;--d:30px;--radius:5px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-right" style="--a:25px;--d:40px;--border:5px;--radius:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-right" style="--a:25px;--border:3px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
    </section> 
    <h1>Frames With Gradient Borders</h1>
    <section class="frames">
       
        <div class="frame f1"></div>
        <div class="frame f2" style="--dash:10,5"></div>
        <div class="frame f3"></div>
        <div class="frame f4" style="--dash:10,5"></div>
        <div class="frame f5"></div>
        <div class="frame f6" style="--dash:10,5"></div>
    </section> 
    <h1>Navigation Menu</h1>
    <section class="menu">
        <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li class="active"><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
    </section> 
    <h1>Navigation Menu 2</h1>
    <section class="menu2">
        <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li class="active"><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
    </section> 
    <h1>Gooey Effect Menu</h1>
    <section class="gooey">
<!-- using "div" instead of "a" because for unkown reasons it's not working with "a" (probably bug)-->
   <nav class='navigation'>
    <div class="nav-item" href="#"><i>🏠</i>home</div>
    <div class="nav-item" href="#"><i>🔍</i>search</div>
    <div class="nav-item" href="#"><i>🖤</i>likes</div>
    <div class="nav-item" href="#"><i>🔔</i>notification</div>
    <div class="nav-item" href="#"><i>👱</i>profile</div>
  </nav>
    </section> 
    <h1>Gooey Effect Menu Another Variation</h1>
    <section class="gooey2">
      <!-- using "div" instead of "a" because for unkown reasons it's not working with "a" (probably bug)-->
         <nav class='navigation'>
          <div class="nav-item" href="#"><i>🏠</i>home</div>
          <div class="nav-item" href="#"><i>🔍</i>search</div>
          <div class="nav-item" href="#"><i>🖤</i>likes</div>
          <div class="nav-item" href="#"><i>🔔</i>notification</div>
          <div class="nav-item" href="#"><i>👱</i>profile</div>
        </nav>
          </section> 
</main>
<style lang="scss">
    main{
        flex-direction: column;
    }
    h1{
            border-bottom: 1px dotted limegreen;
            margin-bottom: 1rem;
        }
    section{
        margin-bottom: 1rem;
        border: 1px solid grey;
        min-width: 90vw;
        display: flex;
        flex-wrap:wrap;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 1rem;

    }
    @property --radius{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
    .basic{
        //using the --path variable that defines our shape,
        // the cc() function to convert our points,
         // and a few other tricks


        //  start with a classic rectangular element and define our shape
        //   inside the --path variable (triangle). 
        //   The --path variable behaves the same way as 
        //   the path we define inside clip-path: polygon()


div[class] {
  display:inline-block;
  width:150px;
  cursor:pointer;
  background:red;
  margin:20px;
  --radius:5px;
  transition:--radius .3s;
  clip-path:polygon(var(--path));
  -webkit-mask:paint(rounded-shape);
  mask:paint(rounded-shape);
}
div[class]:hover {
  --radius:15px;
}
div[class]::before {
   content:"";
   display:block;
}

.hexagone::before,
.triangle::before{
   padding-top:86.6%;
}
.star::before,
.custom::before{
   padding-top:100%;
}
.arrow::before {
   padding-top:70%;
}
    }

    // Yes, there are drawbacks,
    //  and you probably noticed 
    //  them in the last example. The
    //   first drawback is related to the 
    //   hover-able area. Since we are using
    //    mask, we can still interact with the 
    //    initial rectangular shape. Remember,
    //     we faced the same issue with the polygon 
    //     border and we used clip-path to fix it.
    //      Unfortunately, clip-path does not help
    //       here because it also affects the rounded
    //        corner.


//     div[class] {
//   display:inline-block;
//   width:150px;
//   cursor:pointer;
//   background:red;
//   margin:20px;
//   --radius:5px;
//   transition:--radius .3s;
//   clip-path:polygon(var(--path));    //THIS ADDED
//   -webkit-mask:paint(rounded-shape);
// }


// There’s no issue with the hexagon 
// and triangle shapes, but the others 
// are missing some curves. It could be
//  an interesting feature to keep only 
//  the outward curvature — thanks to
//   clip-path— and at the same time we
//    fix the hover-able area. But we 
//    cannot keep all the curvatures and 
//    reduce the hover-able area at the
//     same time.

// The second issue? It’s related to the use 
// of a big radius value. Hover over the
//  shapes below and see the crazy results we get

// We could fix this by limiting the value
//  of the radius to within a range that
//   caps it at a maximum value. For 
//   each corner, we calculate the
//    radius that allows us to have 
//    the biggest arc without any 
//    overflow. I won’t dig into the 
//    math logic behind this (😱), but
//     here is the final code to cap 
//     the radius value:


.basic-radius-problem-fixed{
    
div[class] {
  display:inline-block;
  width:150px;
  cursor:pointer;
  background:red;
  margin:20px;
  --radius:5px;
  transition:--radius .3s;
  clip-path:polygon(var(--path));
  -webkit-mask:paint(rounded-shape-radius-fixed);
  mask:paint(rounded-shape-radius-fixed);
}
div[class]:hover {
  --radius:80px;  // Extra large radius used//but it is handled in js code
}
div[class]::before {
   content:"";
   display:block;
}

.hexagone::before,
.triangle::before{
   padding-top:86.6%;
}
.star::before,
.custom::before{
   padding-top:100%;
}
.arrow::before {
   padding-top:70%;
}
}



//BORDERS

// All we have to do is to use stroke() instead of fill() inside our paint() function. So, instead of using:

// ctx.fillStyle = '#000';
// ctx.fill();
// …we use this:

// ctx.lineWidth = b;
// ctx.strokeStyle = '#000';
// ctx.stroke();



// Did you notice that we have some strange overflow?
//  We faced the same issue in the previous article,
//   and that due to how stroke() works. I quoted 
//   MDN in that article and will do it again here
//    as well:

// Strokes are aligned to the center of a 
// path; in other words, half of the stroke 
// is drawn on the inner side, and half 
// on the outer side.

// Again, it’s that “half inner side,
//  half outer side” that’s getting us!
//   In order to fix it, we need to hide
//    the outer side using another mask,
//     the first one where we use the fill().
    
//     First, we need to introduce a conditional
//      variable to the paint() function in order
//       to choose if we want to draw the shape or only its border.


// if(t==0) {
//   ctx.fillStyle = '#000';
//   ctx.fill();
// } else {
//   ctx.lineWidth = 2*b;
//   ctx.strokeStyle = '#000';
//   ctx.stroke();
// }




// Next, we apply the first type of mask (t=0) 
// on the main element, and the second type (t=1)
//  on a pseudo-element. The mask applied on the 
//  pseudo-element produces the border (the one
//   with the overflow issue). The mask applied
//    on the main element addresses the overflow
//     issue by hiding the outer part of the border.
//      And if you’re wondering, that’s why we are
//       adding twice the border thickness to lineWidth.

@property --border{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
.with-borders{
    div[class] {
  display:inline-block;
  width:150px;
  cursor:pointer;
  margin:20px;
  --radius:5px;
  --border:6px;
  --t:0;
  transition:--radius 1s;
  -webkit-mask:paint(with-borders);
  mask:paint(with-borders);
}
div[class]:hover {
  --radius:80px;
}
div[class]::before {
   content:"";
   display:block;
   background:var(--back,red);
   --t: 1; /* The second mask on the pseudo-element */
  -webkit-mask: paint(with-borders); /* Remove this if you want the full shape */
   mask:paint(with-borders);
}

.hexagone::before,
.triangle::before{
   padding-top:86.6%;
}
.star::before,
.custom::before{
   padding-top:100%;
}
.arrow::before {
   padding-top:70%;
}
}

.dashed-borders{
    div[class] {
  display:inline-block;
  width:150px;
  cursor:pointer;
  margin:20px;
  --radius:5px;
  --border:6px;
  --dash:10,5;
  --t:0;
  transition:--radius 1s;
  -webkit-mask:paint(dashed-borders);
  mask:paint(dashed-borders);
}
div[class]:hover {
  --radius:80px;
}
div[class]::before {
   content:"";
   display:block;
   background:var(--back,red);
   --t: 1; /* The second mask on the pseudo-element */
  -webkit-mask: paint(dashed-borders); /* Remove this if you want the full shape */
   mask:paint(dashed-borders);
}

.hexagone::before,
.triangle::before{
   padding-top:86.6%;
}
.star::before,
.custom::before{
   padding-top:100%;
}
.arrow::before {
   padding-top:70%;
} 
}


///SETTING RADIUS OF EACH CORNER SEPARATELY

// Actually, our path can be expressed as a 
// list of [x y] values. We’ll make a list
//  of [x y r] values where we introduce a
//   third value for the radius. This value
//    isn’t mandatory; if omitted, it falls 
//    back to the main radius.

.separate-radius{
    div[class] {
  display:inline-block;
  width:150px;
  cursor:pointer;
  margin:20px;
  --radius:20px;
  --border:6px;
  --t:0;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
}

div[class]::before {
   content:"";
   display:block;
   background:var(--back,red);
}
div[class].border::before {
  --t:1;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
}

.hexagone::before,
.triangle::before{
   padding-top:86.6%;
}
.star::before,
.custom::before{
   padding-top:100%;
}
.arrow::before {
   padding-top:70%;
}
}

//DIFFERENT KIND OF SHAPES DRAWN USING THE LEARNING

.different-shapes{
    div[style] {
  display:inline-block;
  cursor:pointer;
  margin:10px;
  --border:5px;
  --t:0;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
  position:relative;
}
div[style]:before {
  content:"";
  position:absolute;
  inset:0;
  background:#000;
  --t:1;
}
div[style]:hover:before {
  -webkit-mask:inherit;
  mask:inherit;
}
}


.speech-bubbles{
    div[class] {
  --border:2px;
  --radius:10px;
  width:150px;
  display:inline-block;
  margin:5px;
  font-size:12px;
  padding:10px;
  text-align:justify;
  font-family:sans-serif;
  background:#eee;
  --t:0;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
  position:relative;
  z-index:0;
}
div[class]:before {
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  --t:1;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
  background:#00a8c6;
}
div.p-bottom {
  --a:10px;
  --path:0 0,100% 0,100% calc(100% - var(--a)),calc(50% + var(--a)) calc(100% - var(--a)),50% 100% 0,calc(50% - var(--a)) calc(100% - var(--a)),0 calc(100% - var(--a));
  padding-bottom:calc(10px + var(--a));
}
div.p-top {
  --a:10px;
  --path:0 var(--a),calc(50% - var(--a)) var(--a),50% 0 0,calc(50% + var(--a)) var(--a),100% var(--a),100% 100%,0 100%;
  padding-top:calc(10px + var(--a));
}
div.p-left {
  --a:10px;
  --path:var(--a) 0,100% 0,100% 100%,var(--a) 100%,var(--a) calc(50% + var(--a)),0 50% 0,var(--a) calc(50% - var(--a));
  padding-left:calc(10px + var(--a));
}
div.p-right {
  --a:10px;
  --path:0 0,calc(100% - var(--a)) 0,calc(100% - var(--a)) calc(50% - var(--a)),100% 50% 0,calc(100% - var(--a)) calc(50% + var(--a)), calc(100% - var(--a)) 100%,0 100%;
  padding-right:calc(10px + var(--a));
}
div.b-left {
  --a:10px;
  --d:0px;
  --path:0 0,100% 0,100% calc(100% - var(--a)),var(--a) calc(100% - var(--a)),var(--d) 100% 0,0 calc(100% - var(--a));
  padding-bottom:calc(10px + var(--a));
}
div.b-right {
  --a:10px;
  --d:0px;
  --path:0 0,100% 0,100% calc(100% - var(--a)),calc(100% - var(--d)) 100% 0,calc(100% - var(--a)) calc(100% - var(--a)),0 calc(100% - var(--a));
  padding-bottom:calc(10px + var(--a));
}
}

.frames{
    .frame {
  display:inline-block;
  width:300px;
  height:200px;
  margin:5px;
  position:relative;
  --border:4px;
  --radius:15px;
  --t:0;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
}
.frame:before {
  content:"";
  position:absolute;
  inset:0;
  --t:1;
  background:linear-gradient(60deg,#d35877,#dacd62,#56a7c0);
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
}

.f1 {
  --path:0 0,100% 0,100% calc(50% - 20px) 0,calc(100% - 20px) 50% 50px,100% calc(50% + 20px) 0,100% 100%,0 100%,0 calc(50% + 20px) 0,20px 50% 50px,0 calc(50% - 20px) 0;
}
.f2 {
  --path:0 40px,40px 0,100% 0,100% calc(100% - 40px),calc(100% - 40px) 100%,0 100%;
}
.f3 {
  --path:0 0,80px 0,80px 40px,100% 40px,100% 100%,0 100%;
}
.f4 {
  --path:0 40px,calc(50% - 30px) 0,calc(50% + 30px) 0,100% 40px,100% 100%,0 100%;
}
.f5 {
  --path:0 0,50% 20px,100% 0,calc(100% - 20px) 50%,100% 100%,50% calc(100% - 20px),0 100%,20px 50%;
}
.f6 {
  --path:0 0,20px 0,25px 30px,calc(100% - 25px) 30px,calc(100% - 25px) 0,100% 0,100% 100%,calc(100% - 25px) 100%,calc(100% - 25px) calc(100% - 30px),25px calc(100% - 30px),25px 100%,0 100%;
}
}


//NAVIGATION MENU
.menu{
    position:relative;
    min-height: 50vh;
    nav {
  position:absolute;
  inset:0 auto 0 0;
  background:
    linear-gradient(#33ace3 0 0)left/20px 100% no-repeat,
    #1380b8;
}
ul {
  margin:0;
  padding:10px 20px;
  font-size:25px;
  font-family:sans-serif;
  text-transform:uppercase;
  list-style:none;
}
ul li {
  padding:15px 10px;
  margin:-10px 0;
  line-height:2em;
  --path:0 -20px 0,0 15px,100% 15px 10px,100% calc(100% - 15px) 10px,0 calc(100% - 15px), 0 calc(100% + 20px) 0;
  --radius:30px;
  --t:0;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
}
ul li.active {
  background:#33ace3;
}
ul li a {
  display:block;
  text-decoration:none;
  color:#fff;
}
}

// NAVIGATION MENU 2

.menu2{
    position:relative;
    min-height: 50vh;
    nav {
  position:absolute;
  inset:0 auto 0 0;
  background:#4e64fa;
}
ul {
  margin:0;
  padding:10px 0 20px 10px;
  font-size:25px;
  font-family:sans-serif;
  text-transform:uppercase;
  list-style:none;
}
ul li {
  padding:15px 10px;
  margin:-10px 0;
  line-height:2em;
  --path:100% -20px 0,100% 15px,0 15px 10px,0 calc(100% - 15px) 10px,100% calc(100% - 15px), 100% calc(100% + 20px) 0;
  --radius:30px;
  --t:0;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
}
ul li.active {
  background:#fff;
}
ul li a {
  display:block;
  text-decoration:none;
  color:#fff;
}
ul li.active a{
  color:#000;
}
}

// Goeey Effect Menu

@property --d{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
.gooey{
    display:grid;
    place-content: center;
  margin: 0;
  height: 100vh;
  background: 
    repeating-radial-gradient(circle at 25% 25%, 
        transparent 0, hsla(0, 0%, 0%, .2) 1px 4px, transparent 5px 8px)
    #f03;

    nav {
        display:grid;
  grid-auto-flow: column;
  padding: 0 20px;
  border-radius: 10px;
  background:
    linear-gradient(#fff 0 0) left,
    linear-gradient(#fff 0 0) right;
  background-size:20px 100%; //width height
  background-repeat:no-repeat;
  font: .625em/ 1.5 ubuntu, sans-serif;
}

.nav-item {
    display:grid;
  box-sizing: border-box;
  cursor:pointer;
  place-content: center;
  width: 7.5em; 
  height: 7.5em;
  color: #000;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  position:relative;
  z-index:0;
}
.nav-item i {
  font-style:initial;
  font-size: 2em;
  filter: brightness(0) contrast(var(--hl,0))
}
//curved element
.nav-item::after {
  content:"";
  position:absolute;
  z-index:-1;
  inset:0;
  background:#fff;
  --t:0;
  --path:0 0,10px 0 50px,50% var(--d) 50px,calc(100% - 10px) 0 50px,100% 0,100% 100%,0 100%;
  --radius:0px;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
  transition:--d .3s;
}
//Ball
.nav-item::before {
  content:"";
  position:absolute; 
  background:#fff;
  width:6px;
  height:6px;
  border-radius:50%;
  top:-150px;
  opacity:0;
  transition:.8s;
  left:calc(50% - 3px);
}
.nav-item:hover::after {
  --d:18px;
  transition:--d .3s .5s;
}
.nav-item:hover::before {
  top:0;
  opacity:1;
}

.nav-item:focus { outline: none }
.nav-item:focus,.nav-item:hover { --hl: 1 }
}

//GOOEY EFFECT MENU ANOTHER VARIATION
@property --d1{
  syntax: '<length>';
  inherits: true;
  initial-value: 18px;
}
.gooey2{
    display:grid;
    place-content: center;
  margin: 0;
  height: 100vh;
  background: 
    repeating-radial-gradient(circle at 25% 25%, 
        transparent 0, hsla(0, 0%, 0%, .2) 1px 4px, transparent 5px 8px)
    #f03;
    nav {
      display:grid;
  grid-auto-flow: column;
  padding: 0 20px;
  border-radius: 10px;
  background:
    linear-gradient(#fff 0 0) left,
    linear-gradient(#fff 0 0) right;
  background-size:20px 100%;
  background-repeat:no-repeat;
  font: .625em/ 1.5 ubuntu, sans-serif;
}
    .nav-item {
      display:grid;
  box-sizing: border-box;
  cursor:pointer;
  place-content: center;
  width: 7.5em; 
  height: 7.5em;
  color: #000;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  position:relative;
  z-index:0;
}
.nav-item i {
  font-style:initial;
  font-size: 2em;
  transition: .4s;
  filter: brightness(0) contrast(var(--hl,0))
}
.nav-item::after {
  content:"";
  position:absolute;
  z-index:-1;
 inset: -18px 0 0 0; //MOVE 18PX ABOVE
 background: #fff;
 --t: 0;
 --path: 0 18px,10px 18px 50px,50% var(--d1,18px) 50px,calc(100% - 10px) 18px 50px,100% 18px,100% 100%,0 100%;
  --radius: 0px;
  -webkit-mask:paint(separate-radius);
  mask:paint(separate-radius);
  transition:--d1 .4s;
}

.nav-item:hover::after {
  --d1:0;
}
.nav-item:hover i {
  transform:translateY(-15px);
}


.nav-item:focus { outline: none }
.nav-item:focus,.nav-item:hover { --hl: 1 }
}
    </style>