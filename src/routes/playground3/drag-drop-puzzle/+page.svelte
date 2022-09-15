<main>
    <h1>CSS Puzzle</h1>
    <p>drag & drop the piece into...<br> Well, you know how a puzzle works :)</p>
    <div style="--i:url(/img/misc/puzzle.jpg)">
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>
      <z><s></s><b draggable="true"></b></z>

    </div>
</main>





<style lang='scss'>
main{
    --s: 300px; /* size of the puzzle */  
  background: #2c6603;
  color: #fff;
  font-family: system-ui, sans-serif;
  position: relative;
 

h1 {
  font-size: 2rem;
  margin: 0;
  text-align: center;
}
p {
  font-size: 1.2rem;
  text-align: center;
}
}




$n : 4; /* number of columns/rows */

div {
  display: grid;
  max-width: var(--s);
  border: 1px solid;
  margin: auto;
  grid-template-columns: repeat($n, 1fr);
  //position: relative;
  
}
div::before {
  content: "Original Image";
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-shadow: 0 0 2px #000,0 0 2px #000,0 0 2px #000;
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(var(--s) * 0.6);
  aspect-ratio: 1;
  -webkit-mask: repeating-linear-gradient(-45deg,#000 0 10%,#000d 0 20%);
  mask: repeating-linear-gradient(-45deg,#000 0 10%,#000d 0 20%);
  background: var(--i) 0/100% 100%;
  display: grid;
  place-content: center;
}
z {
  aspect-ratio: 1;
  outline: 1px dashed;
  display: grid;
  position: relative;
  pointer-events: none;
}
s {
   grid-area: 1/1;
   width: 0;
   transition: 0s .2s;
   pointer-events: initial;
}
b {
  grid-area: 1/1;
  background: var(--i) 0/var(--s) var(--s);
  box-shadow: 0 0 4px 1px red;
  z-index: 2;
  cursor: grab;
  pointer-events: initial;
}


// As you can see, nothing fancy — we created a grid
//  with a specific size. The rest of the CSS we need is
//   for the drag and drop feature, which requires us to
//    randomly place the pieces around the board. I’m going 
//    to turn to Sass for this, again for the convenience of 
//    being able to loop through and style all the puzzle pieces
//     with a function:

//LOOP DOES NOT WORK IN SVELTE

// @for $i from 1 to ($n * $n + 1) {
//   $r: (random(180));
//   $x: (($i - 1) % $n);
//   $y: floor(($i - 0.001) / $n);
//   z:nth-of-type(#{$i}) b{
//     background-position: ($x / ($n - 1)) * 100% ($y / ($n - 1)) * 100%;
//     transform: 
//       translate((($n - 1) / 2 - $x) * 100%, (($n - 1)/2 - $y) * 100%) 
//       rotate($r * 1deg) 
//       translate((random(100) * 1% + ($n - 1) * 100%)) 
//       rotate((random(20) - 10 - $r) * 1deg)
//    }
// }

//EXPANDED FORM OF LOOP
z:nth-of-type(1) b {
  background-position: 0% 0%;
  transform: translate(150%, 150%) rotate(104deg) translate(326%) rotate(-110deg);
}

z:nth-of-type(2) b {
  background-position: 33.3333333333% 0%;
  transform: translate(50%, 150%) rotate(119deg) translate(385%) rotate(-109deg);
}

z:nth-of-type(3) b {
  background-position: 66.6666666667% 0%;
  transform: translate(-50%, 150%) rotate(64deg) translate(347%) rotate(-56deg);
}

z:nth-of-type(4) b {
  background-position: 100% 0%;
  transform: translate(-150%, 150%) rotate(175deg) translate(365%) rotate(-174deg);
}

z:nth-of-type(5) b {
  background-position: 0% 33.3333333333%;
  transform: translate(150%, 50%) rotate(179deg) translate(398%) rotate(-169deg);
}

z:nth-of-type(6) b {
  background-position: 33.3333333333% 33.3333333333%;
  transform: translate(50%, 50%) rotate(158deg) translate(311%) rotate(-154deg);
}

z:nth-of-type(7) b {
  background-position: 66.6666666667% 33.3333333333%;
  transform: translate(-50%, 50%) rotate(15deg) translate(389%) rotate(-16deg);
}

z:nth-of-type(8) b {
  background-position: 100% 33.3333333333%;
  transform: translate(-150%, 50%) rotate(178deg) translate(326%) rotate(-181deg);
}

z:nth-of-type(9) b {
  background-position: 0% 66.6666666667%;
  transform: translate(150%, -50%) rotate(38deg) translate(327%) rotate(-43deg);
}

z:nth-of-type(10) b {
  background-position: 33.3333333333% 66.6666666667%;
  transform: translate(50%, -50%) rotate(103deg) translate(392%) rotate(-95deg);
}

z:nth-of-type(11) b {
  background-position: 66.6666666667% 66.6666666667%;
  transform: translate(-50%, -50%) rotate(104deg) translate(311%) rotate(-101deg);
}

z:nth-of-type(12) b {
  background-position: 100% 66.6666666667%;
  transform: translate(-150%, -50%) rotate(83deg) translate(360%) rotate(-81deg);
}

z:nth-of-type(13) b {
  background-position: 0% 100%;
  transform: translate(150%, -150%) rotate(34deg) translate(396%) rotate(-24deg);
}

z:nth-of-type(14) b {
  background-position: 33.3333333333% 100%;
  transform: translate(50%, -150%) rotate(159deg) translate(365%) rotate(-168deg);
}

z:nth-of-type(15) b {
  background-position: 66.6666666667% 100%;
  transform: translate(-50%, -150%) rotate(38deg) translate(303%) rotate(-47deg);
}

z:nth-of-type(16) b {
  background-position: 100% 100%;
  transform: translate(-150%, -150%) rotate(72deg) translate(376%) rotate(-78deg);
}

// In that same loop, I am also defining the background 
// configuration for each piece of the puzzle. All of them
//  will logically share the same image as the background, 
//  and its size should be equal to the size of the whole
//  grid (defined with the --s variable). Using the same
//   background-image and some math, we update the
//    background-position to show only a piece of the image.

z b {
  transition: 999s 999s;
}
z:active s{
  width: 100%;
  transition: 0s;
}
// You may have noticed that I’m using the Sass random()
//  function. That’s how we get the randomized positions for
//   the puzzle pieces. Remember that we will disable that
//    position when hovering over the <a> element after 
//    dragging and dropping its corresponding <b> element 
//    inside the grid cell.
z s:hover ~ b {
  transform: translate(0);
  box-shadow: none;
  transition: 0s;
}
</style>