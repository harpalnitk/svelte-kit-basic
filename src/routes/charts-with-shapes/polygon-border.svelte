<script>
   
    import { onMount } from "svelte";

onMount(() => {
    if (CSS.paintWorklet) {  
        try {
            //We add the paint worklet using CSS.paintWorklet.addModule('your_js_file')
            CSS.paintWorklet.addModule('../js/paint/paint-border.js'); 
            console.log('Js file loaded');
        } catch (error) {
            console.log('Error',error);
        }            
    
}});
  </script>
 


  <main>
    <h1>Basic</h1>
      <section class='basic'>
       
        <div class="box"></div>
        <div class="box" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;--border:3px">Star </div>
        <div class="box" style="--path:50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;--border:10px">Septagon </div>
      </section>
      <h1>With Advanced path variables</h1>
      <section class="advanced-path">
      <div class="box"></div>
      <div class="box" style="--v:calc(100% - 4em)"> </div>
<div class="box" style="--v:calc(100% + 10% - 50% - 4em + 2px)"> </div>
<div class="box" style="--v:calc(100% + 10% - 50% - 4em + 2px)"> </div>
<div class="box" style="--v:calc(80% - 5ch)"> </div>
<div class="box" style="--v:calc(-50px + 80%)"> </div>
      </section>
      <h1>With Dashed Borders</h1>
      <section class="dashed-border">
        <div class="box"></div>
        <div class="box" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;--border:4px;background:purple;--dash:10,30"> </div>
<div class="box" style="--path:50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;--border:10px;background:conic-gradient(blue,purple,orange,green,blue);--dash:74,19"> </div>
<div class="box" style="--path:50% 0%, 100% 30%, 50% 100%, 0% 30%;background:linear-gradient(45deg,red 50%,blue 0);--dash:10,5,15,10"> </div>
<div class="box" style="--path:0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%;background:linear-gradient(#000 40%,#0000 0 60%,grey 0);--dash:5,15"> </div>
      </section>
      <h1>Practical Use Cases- Fancy Buttons</h1>
      <section class="buttons">
        <button class="b1"> button </button>
        <button class="b2"> button </button>
        <button class="b3"> button </button>
        <button class="b4"> button </button>
        <button class="b5"> button </button>
        <br>
        <button class="b1 f"> button </button>
        <button class="b2 f"> button </button>
        <button class="b3 f"> button </button>
        <button class="b4 f"> button </button>
        <button class="b5 f"> button </button>
        <br>
        <button class="b1 d"> button </button>
        <button class="b2 d"> button </button>
        <button class="b3 d"> button </button>
        <button class="b4 d"> button </button>
        <button class="b5 d"> button </button>
        <br>
        <button class="b1 d h"> button </button>
        <button class="b2 d h"> button </button>
        <button class="b3 d h"> button </button>
        <button class="b4 d h"> button </button>
        <button class="b5 d h"> button </button>
        
     </section>
     <h1>Practical Use Cases- Breadcrumbs</h1>
     <section class="breadcrumbs">
        <div class="breadcrumb">
            <div>Irem 1</div>
            <div>another Irem</div>
            <div>Irem 3</div>
          </div>
          <div class="breadcrumb" style="border:5px;--ab:15px;--gap:20px">
            <div>AA</div>
            <div>a very long item</div>
          </div>
          <div class="breadcrumb last" style="--border:2px;--gap:0px">
            <div>AA</div>
            <div>BB</div>
            <div>CC</div>
            <div>DD</div>
            <div>EE</div>
            <div>FF</div>
            <div>GG</div>
          </div>
          
          <div class="breadcrumb last" style="--gap:0px;--ab:0px;">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </div>
          
          <div class="breadcrumb" style="--dash:10,3;--border:1px;--gap:10px;--ab:20px">
            <div>Item 1</div>
            <div>Item 2</div>
          </div>
          
          <div class="breadcrumb last" style="--dash:10,3;--border:2px">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </div>
     </section>
     <h1>Practical Use Cases- Cards</h1>
     <section class="card1">
        <div class="box" style="--path:50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%"></div>
        <div class="box" style="--path:50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%"></div>
        <div class="box" style="--path:0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%"></div>
     </section>
     <h1>Practical Use Cases- Revealing Cards</h1>
     <section class="card2">
        <div class="box" style="--img:url(/img/avatar/avatar-1.jpg)">Al Pacino</div>
        <div class="box" style="--img:url(/img/avatar/avatar-2.jpg)">Ben Stiller</div>
        <div class="box" style="--img:url(/img/avatar/avatar-3.png)">Patrick Stewart</div>
     </section>
     <h1>Practical Use Cases- Callouts and bubbles</h1>
     <section class="bubbles">
        <div class="p-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="p-top" style="--ab:15px;--border:5px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="p-right" style="--ab:20px;--border:4px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="p-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-left" style="--border:1px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-left" style="--ab:20px;--d:30px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-right" style="--ab:25px;--d:40px;--border:5px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
        <div class="b-right" style="--ab:25px;--border:3px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta nulla eu sapien congue, a ultrices felis rhoncus. Nunc nisl metus, commodo vitae facilisis nec,</div>
     </section>
     <h1>Practical Use Cases- Animated Dashes</h1>
     <section class="animated-dashes">
        <div class="box" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;"></div>
        <div class="box" style="--path:50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;"></div>
     </section>
     <h1>Practical Use Cases- Animated Dashes 2</h1>
     <section class="animated-dashes2">
        <div class="box" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;"></div>
        <div class="box" style="--path:50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;"></div>
     </section>
     <h1>Practical Use Cases- Animated Dashes 3-Infinite Loop</h1>
     <section class="animated-dashes3">
        <div class="box" style="--path:50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%;--s:1"></div>
        <div class="box" style="--path:50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;--s:-1"></div>
     </section>
  </main>

  <style lang="scss">
      main{
          width: 80vw;
        //   display: flex;
        //   flex-wrap: wrap;
        //   justify-content: center;
        //   align-items: center;
          margin: 0 auto;
          h1{
        border: 1px solid #ccc;
        padding: 0.5rem;
        text-align: center;
    }
      }

//       Why are you using @property with the border value?
// This is an interesting — and pretty tricky — part. By default,
//  custom properties (like --border) are considered a
//   “CSSUnparsedValue” which means they are treated as strings. 
//   From the CSS spec:

// ‘CSSUnparsedValue’ objects represent property values 
// that reference custom properties. They are comprised of a
//  list of string fragments and variable references.

// With @property, we can register the custom property and
//  give it a type so that it can be recognized by the browser
//   and handled as a valid type instead of a string. 
//   In our case, we are registering the border as a
//    <length> type so later it becomes a CSSUnitValue.
//      What this also does is allow us to use any length
//       unit (px, em, ch,vh, etc.) for the border value.

// This may sound a bit complex but let me try to illustrate 
// the difference with a DevTools screenshot.
// In the first case, the browser recognizes the 
// type and makes the conversion into a pixel value,
//  which is useful since we only need pixel values
//  inside the paint() function. In the second case, 
//  we get the variable as a string which is not
//   very useful since we cannot convert em units 
//   into px units inside the paint() function.

// Try all the units. It will always results with 
// the computed pixel value inside the paint() function.
      
@property --border{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background:pink;
    margin-bottom: 1rem;

}

section.basic{



.box {
  --path:50% 0,100% 100%,0 100%;
  --border:5px;
  margin:5px 20px;
  width:200px;
  height:200px;
  cursor:pointer;
  display:inline-grid;
  place-content:center;
  position:relative;
  clip-path:polygon(var(--path));
  z-index:0;
  //   Nothing complex so far but note the
//    use of the CSS variable --path.
//     The entire trick relies on that
//      single variable. Since I will
//       be using a clip-path and a mask,
//        both need to use the same parameters,
//         hence the --path variable. And,
//          yes, the Paint API will use
//           that same variable to 
//           create the custom mask.



// In addition to the clip-path,
//  we apply the custom mask,
//   plus we add an extra 
//   variable, --border, to 
//   control the thickness of the
//    border. As you can see, 
//    everything is still pretty
//     basic and generic CSS 
//     so far. After all, 
//     this is one of the 
//     things that makes 
//     the CSS Paint API
//      so great to work with.
}
.box:before {
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  -webkit-mask:paint(border1);
  mask:paint(border1);
  background:red;
}
}



// What about the --path variable?
// I wanted to use the same approach with the --path 
// variable but, unfortunately, I think I pushed
//  CSS right up to the limits of what it can do here.
//   Using @property, we can register complex types,
//    even multi-value variables. But that’s still
//     not enough for the path we need.


@property --v{
  syntax: '<length-percentage>';
  inherits: true;
  initial-value: 0px;
}
// Notice that we have stored the calc()
//  expression within the variable --v 
//  that we registered as a <length-percentage>.
//      This is also a part of the trick 
//      because if we do this, the browser
//       uses the correct format. Whatever
//        the complexity of the calc() 
//        expression, the browser always
//         converts it to the format 
//         calc(P% +/- Xpx). For this 
//         reason, we only have to deal with that format inside the paint() function.

// It should be noted that using the
//  variable --v is not mandatory.
//   We can include the calc() 
//   directly inside the path.
//    We simply need to make sure
//     we insert the correct format 
//     since the browser will not handle 
//     it for us (remember that we cannot 
//     register the path variable so it’s a
//      string for the browser). This can
//       be useful when we need to have
//        many calc() inside the path 
//        and creating a variable for 
//        each one will make the code 
//        too lengthy. We will see a few examples at the end.

section.advanced-path{
    //--path: 0 0,calc(100% - 40px) 0,100% 40px,100% 100%,0 100%;

//     In the above, calc(100% - 40px) is a value that the browser considers
//      a <length-percentage>, but the browser cannot compute that
//          value until it knows the reference for the percentage.
//           In other words, we cannot get the equivalent
//            pixel value inside the paint() function 
//            since the reference can only be known
//             when the value gets used within var().

// To overcome this, we can can extend the cc() function
//  to do the conversion. We did the conversion of a
//   percentage value and a pixel value, so let’s 
//   combine those into one conversion. We will 
//   consider 2 cases: calc(P% - Xpx) and calc(P% + Xpx). Our script becomes:

.box {
    --path:0 0,var(--v,0) 0,100% 40px,100% 100%,0 100%;
  --border:5px;
  margin:5px 20px;
  width:200px;
  height:200px;
  cursor:pointer;
  display:inline-grid;
  place-content:center;
  position:relative;
  clip-path:polygon(var(--path));
  z-index:0;
}
.box:before {
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  -webkit-mask:paint(border2);
  mask:paint(border2);
  background:red;
}
}
// @property --dash{
//   syntax: '<length>#';
//   inherits: true;
//   initial-value: 0;
// }
section.dashed-border{
    .box {
  --path:50% 0,100% 100%,0 100%;
  --border:5px;
  --dash:10,3;
  margin:5px 20px;
  width:200px;
  height:200px;
  cursor:pointer;
  background:red;
  display:inline-block;
  clip-path:polygon(var(--path));
  -webkit-mask:paint(border3);
  mask:paint(border3);
}
}
@property --s{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}
section.buttons{
    button {
  --border:4px;
  padding:10px 30px;
  margin:5px 10px;
  font-size:25px;
  font-weight:bold;
  text-transform:uppercase;
  color:#00aaff;
  border:none;
  background:none;
  cursor:pointer;
  position:relative;
  transition:.5s;
  clip-path:polygon(var(--path));
}
button:before {
  content:"";
  position:absolute;
  z-index:-1;
  inset:0;
  -webkit-mask:paint(border3);
  mask:paint(border3);
  background:currentColor;
}
button:hover {
  color:#ff00aa;
}
.f {
  background:linear-gradient(#00aaff 0 0) bottom/100% 0% no-repeat;
  transition:.5s;
}
.f:before {
  background:#00aaff;
}
.f:hover {
  color:#fff;
  background-size:100% 100%;
}
.d {
  --dash:11,5;
}
.h {
  --s:5;
  --dash:11,var(--s);
  transition:--s .7s;
}
.h:hover {
  --s:0;
}
.b1 {  --path:10% 0,100% 0,90% 100%,0 100%}
.b2 {  --path:10% 0,90% 0,100% 50%,90% 100%,10% 100%,0 50%}
.b3 {  --path:10% 0,100% 0,100% 50%,90% 100%,0 100%,0 50%}
.b4 {  --path:0 0,100% 0,90% 50%,100% 100%,0 100%,10% 50%}
.b5 {  --path:5px 0,calc(100% - 5px) 0,calc(100% - 10px) 10px,100% 5px,100% calc(100% - 5px),calc(100% - 10px) calc(100% - 10px),calc(100% - 5px) 100%,5px 100%,10px calc(100% - 10px),0 calc(100% - 5px),0 5px,10px 10px}
}


section.breadcrumbs{
    flex-direction: column;
    .breadcrumb {
  display:flex;
  margin:10px 0;
  --border:3px;
  --ab:10px; 
  --gap:5px; 
}
.breadcrumb > div {
  text-align:center;
  cursor:pointer;
  color:#00aaff;
  padding:10px calc(var(--ab) + 10px);
  margin-left:calc(var(--gap) - var(--ab) - var(--border)/2);
  --path:0 0,calc(100% - var(--ab)) 0,100% 50%,calc(100% - var(--ab)) 100%,0 100%,var(--ab) 50%;
  position:relative;
  clip-path:polygon(var(--path));
  transition:.5s;
}
.breadcrumb > div:before {
  content:"";
  position:absolute;
  z-index:-1;
  inset:0;
  -webkit-mask:paint(border3);
  mask:paint(border3);
  background:CurrentColor;
}
.breadcrumb > div:hover {
  color:#ff00aa;
  z-index:1;
}
.breadcrumb > div:first-child {
  --path:0 0,calc(100% - var(--ab)) 0,100% 50%,calc(100% - var(--ab)) 100%,0 100%;
  padding-left:10px;
  margin-left:0;
}
.last > div:last-child {
  --path:0 0,100% 0,100% 100%,0 100%,var(--ab) 50%;
  padding-right:10px;
}
}






section.card1{
  @property --border{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
    .box {
  width:200px;
  height:200px;
  cursor:pointer;
  display:inline-block;
  background:red;
  clip-path:polygon(var(--path));
  -webkit-mask:paint(border3);
  mask:paint(border3);
  --border:5px;
  transition:--border .5s;
}
.box:hover {
  --border:100px;
}
}


section.card2{
  @property --border{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}

    .box {
  width:250px;
  height:250px;
  margin:5px;
  cursor:pointer;
  --path:50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%;
  clip-path:polygon(var(--path));
  --border:120px;
  transition:--border .5s;
  position:relative;
  background:#444;
  color:#fff;
  display:inline-grid;
  place-content:center;
  font-size:20px;
  font-weight:bold;
  font-family:sans-serif;
}
.box:before {
  content:"";
  position:absolute;
  background:var(--img) center/cover;
  inset:0;
  -webkit-mask:paint(border3);
  mask:paint(border3);
}
.box:hover {
  --border:15px;
}
}
@property --border{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}

section.bubbles{

div[class] {
  --border:2px;
  width:150px;
  display:inline-block;
  margin:5px;
  font-size:12px;
  padding:10px;
  text-align:justify;
  font-family:sans-serif;
  background:#eee;
  clip-path:polygon(var(--path));
  position:relative;
  z-index:0;
}
div[class]:before {
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  -webkit-mask:paint(border3);
  mask:paint(border3);
  background:#00a8c6;
}
div.p-bottom {
  --ab:10px;
  --path:0 0,100% 0,100% calc(100% - var(--ab)),calc(50% + var(--ab)) calc(100% - var(--ab)),50% 100%,calc(50% - var(--ab)) calc(100% - var(--ab)),0 calc(100% - var(--ab));
  padding-bottom:calc(10px + var(--ab));
}
div.p-top {
  --ab:10px;
  --path:0 var(--ab),calc(50% - var(--ab)) var(--ab),50% 0,calc(50% + var(--ab)) var(--ab),100% var(--ab),100% 100%,0 100%;
  padding-top:calc(10px + var(--ab));
}
div.p-left {
  --ab:10px;
  --path:var(--ab) 0,100% 0,100% 100%,var(--ab) 100%,var(--ab) calc(50% + var(--ab)),0 50%,var(--ab) calc(50% - var(--ab));
  padding-left:calc(10px + var(--ab));
}
div.p-right {
  --ab:10px;
  --path:0 0,calc(100% - var(--ab)) 0,calc(100% - var(--ab)) calc(50% - var(--ab)),100% 50%,calc(100% - var(--ab)) calc(50% + var(--ab)), calc(100% - var(--ab)) 100%,0 100%;
  padding-right:calc(10px + var(--ab));
}
div.b-left {
  --ab:10px;
  --d:0px;
  --path:0 0,100% 0,100% calc(100% - var(--ab)),var(--ab) calc(100% - var(--ab)),var(--d) 100%,0 calc(100% - var(--ab));
  padding-bottom:calc(10px + var(--ab));
}
div.b-right {
  --ab:10px;
  --d:0px;
  --path:0 0,100% 0,100% calc(100% - var(--ab)),calc(100% - var(--d)) 100%,calc(100% - var(--ab)) calc(100% - var(--ab)),0 calc(100% - var(--ab));
  padding-bottom:calc(10px + var(--ab));
}
}

@property --border{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
@property --a{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

section.animated-dashes{


.box {
  --border:5px;
  --dash:var(--a),800;
  width:200px;
  height:200px;
  display:inline-block;
  clip-path:polygon(var(--path));
  position:relative;
  background:#eee;
  cursor:pointer;
  transition: --a 1s ;
  transition-delay: 1s;
}
.box:before {
  content:"";
  position:absolute;
  inset:0;
  background:#00a8c6;
  -webkit-mask:paint(border3);
  mask:paint(border3);
}
.box:hover {
  --a : 800;
//   The variable --a starts at 0, so our pattern is a 
//   solid line (where the length equals 0) with a gap
//    (where length 1000); hence no border. We animate
//     --a to a big value to draw our border.
}
}

@property --offset{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

section.animated-dashes2{


.box {
  --border:5px;
  --dash:15,10;
  --offset:0;
  width:200px;
  height:200px;
  display:inline-block;
  clip-path:polygon(var(--path));
  position:relative;
  background:#eee;
  cursor:pointer;
  transition:--offset 1s;
}
.box:before {
  content:"";
  position:absolute;
  inset:0;
  background:#00a8c6;
  -webkit-mask:paint(border4);
  mask:paint(border4);
}
.box:hover {
  --offset:40;
}
}

section.animated-dashes3{


.box {
  --border:5px;
  --dash:15,10;
  --offset:0;
  width:200px;
  height:200px;
  display:inline-block;
  clip-path:polygon(var(--path));
  position:relative;
  background:#eee;
  cursor:pointer;
  animation: o 1.5s linear infinite;
}
.box:before {
  content:"";
  position:absolute;
  inset:0;
  background:#00a8c6;
  -webkit-mask:paint(border4);
  mask:paint(border4);
}
@keyframes o{
  to {--offset:calc(var(--s,1)*25)}
}
}

  </style>