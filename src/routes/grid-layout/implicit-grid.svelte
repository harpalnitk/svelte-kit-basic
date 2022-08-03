<!-- https://css-tricks.com/exploring-css-grids-implicit-grid-and-auto-placement-powers/ -->
<main class="body-main flex-center">
	<h3>Without Sidebar</h3>
	<section class="main-section basic">
		<main>
			<section />
		</main>
		<h3>With right Sidebar</h3>
		<main>
			<section />
			<aside />
		</main>
		<h3>With left Sidebar</h3>
		<main>
			<aside />
			<section />
		</main>
	</section>
	<h3>Same thing with Autoflow</h3>
	<section class="main-section with-auto-flow">
		<main>
			<section />
		</main>
		<h3>With right Sidebar</h3>
		<main>
			<section />
			<aside />
		</main>
		<h3>With left Sidebar</h3>
		<main>
			<aside />
			<section />
		</main>
	</section>
	<h3>Image Grid</h3>
	<section class="main-section image-grid">
		<div class="grid">
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
		</div>

		<div class="grid horizontal">
			<img alt="img" src="https://picsum.photos/id/1074/400/200" />
			<img alt="img" src="https://picsum.photos/id/1074/400/200" />
			<img alt="img" src="https://picsum.photos/id/1074/400/200" />
			<img alt="img" src="https://picsum.photos/id/1074/400/200" />
		</div>
	</section>
	<h3>Image Grid With Custom property</h3>
	<section class="main-section image-grid-custom-property">
		<div class="grid">
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
		</div>
		<div class="grid" style="--n:4">
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
			<img alt="img" src="https://picsum.photos/id/237/400/200" />
		</div>
		<br />
		<div class="grid horizontal" style="--n:2">
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
		</div>
		<div class="grid horizontal" style="--n:5">
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
			<img alt="img" src="https://picsum.photos/id/1074/400/300" />
		</div>
	</section>
	<h3>Dynamic layouts</h3>
	<section class="main-section dynamic-layouts">
		<div class="grid">
			<div />
		</div>
		<div class="grid">
			<div />
			<div />
		</div>
		<div class="grid">
			<div />
			<div />
			<div />
		</div>
		<div class="grid">
			<div />
			<div />
			<div />
			<div />
		</div>
	</section>
	<h3>Dynamic layouts Row</h3>
	<section class="main-section dynamic-layouts-row">
		<div class="grid">
			<div />
		</div>
		<div class="grid">
			<div />
			<div />
		</div>
		<div class="grid">
			<div />
			<div />
			<div />
		</div>
		<div class="grid">
			<div />
			<div />
			<div />
			<div />
		</div>
	</section>
	<h3>Different Size with Content</h3>
	<section class="main-section different-size">


        <div class="grid">
            <div></div>
          </div>
          <div class="grid">
            <div></div>
            <div> text</div>
          </div>
          <div class="grid">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="grid">
            <div></div>
            <div></div>
            <div></div>
            <div>content</div>
          </div>
          
          
	</section>
    <h3>Same Size with Content</h3>
	<section class="main-section same-size">


        <div class="grid">
            <div></div>
          </div>
          <div class="grid">
            <div></div>
            <div> text</div>
          </div>
          <div class="grid">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="grid">
            <div></div>
            <div></div>
            <div></div>
            <div>content</div>
          </div>
          
          
	</section>
    <h3>Six contents with Auto Flow</h3>
	<section class="main-section six-content">
        

<div class="grid">
    <div></div>
  </div>
  <div class="grid">
    <div></div>
    <div></div>
  </div>
  <div class="grid">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  
        </section>
        <h3>Grid patterns</h3>
        <section class="main-section grid-patterns">
            

<div class="grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  
            </section>
            <h3>6n Grid pattern- Part 1</h3>
            <section class="main-section six-n-pattern-1">
                

<div class="grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  
                </section>
                <h3>6n Grid pattern- Part 2</h3>
                <section class="main-section six-n-pattern-2">
                    
    
    <div class="grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      
                    </section>
                    <h3>6n Grid pattern- Part Final</h3>
                    <section class="main-section six-n-pattern-final">
                        
        
        <div class="grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          
                        </section>
                        <h3>10n Grid pattern Final</h3>
                        <section class="main-section ten-n-pattern">
                            
            


                            <div class="grid">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                              
                              
              
              
                            </section>
</main>

<style lang="scss">
	.body-main {
		//min-height: 100vh;
		background: #f8f8f8;
		flex-direction: column;
		h3 {
			font-weight: 700;
			font-size: 2em;
			margin-bottom: 1rem;
		}
	}
	.main-section {
		width: 100%;
		padding: 1rem;
		margin-bottom: 1rem;
		border: 1px solid grey;
	}

	//MAIN CONTENT START HERE
	.basic {
		main {
			//Here, we have three different layouts but
			// we only have one grid configuration that works
			// for all of them

			//Only one column is taking up all the free space.
			//  This is our “explicit” grid. It’s set up to fit
			//  one grid item in the main grid container.
			display: grid;
			grid-template-columns: 1fr;
			height: 100px;
			gap: 20px;
			border: 5px solid;
		}
		section {
			background: red;
		}
		aside {
			//We place our element in the second column but… we
			// don’t have a second column. Weird, right? We never
			// declared a second column on the <main> grid container,
			//      but the browser created one for us
			width: 100px;
			background: blue;
		}
		aside:last-child {
			grid-column-start: 2;
		}
		aside:first-child {
			// 1 2 3    column namings in grid
			// -3  -2  -1
			grid-column-end: -2;
		}
	}

	//We can do the same thing more easily using the
	// grid-auto-flow property to set any and all implicit tracks to flow in a column direction:
	.with-auto-flow {
		main {
			display: grid;
			grid-template-columns: 1fr;
			grid-auto-flow: column;
			height: 100px;
			gap: 20px;
			border: 5px solid;
		}
		section {
			background: red;
		}
		aside {
			//here no need to specify position of second element
			//automatically placed in column position using
			//grid-auto-flow: column; property
			width: 100px;
			background: blue;
		}
		aside:first-child {
			//That said, we do still need grid-column-end
			// if we want to place it in a column to the left
			// of it because, otherwise, the <aside> will
			//     occupy the explicit column which, in
			//     turn, pushes the <section> outside
			//         the explicit grid and forces it
			//         to take the implicit column.

			//Now it doesn’t matter that <aside>
			// comes first in the HTML. By reassigning
			//  <aside> somewhere else, we’ve made the
			//      <section> element available to take the explicit column
			grid-column-end: -2;
		}
	}

	//IMAGE LAYOUTS

	.image-grid {
		.grid {
			display: grid;
			grid-auto-flow: row; /* it's the default value (can be omitted) */
			grid-gap: 10px;
			max-width: 600px;
			margin: 20px auto;
		}
		.horizontal {
			//For the second grid configuration in that demo,
			// all I’ve done is change the automatic flow
			// direction using grid-auto-flow: column the
			//  same way we did earlier when placing an
			//   <aside> element next to a <section>.
			//     This forces the browser to create a
			//      fourth column it can use to place the
			//       remaining images. And since we have
			//       three rows, the remaining images get
			//       placed inside the same vertical column.
			grid-auto-flow: column;
		}
		.grid img:first-child {
			//First of all, grid-area is a shorthand property
			//that combines the following properties into a single declaration:

			// grid-row-start
			// grid-row-end
			// grid-column-start
			//grid-column-end
			grid-area: span 3 / span 3;

			/* ...is equivalent to: */
			//.grid img:first-child {
			// grid-row-start: span 3;
			// grid-column-start: span 3;
			//  grid-row-end: auto;
			// grid-column-end: auto;
			//}
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	//IMAGE LAYOUTS WITH CUSTOM PROPERTIES
	.image-grid-custom-property {
		.grid {
			--n: 3;

			display: inline-grid;
			grid-auto-flow: row; /* it's the default value (can be omitted) */
			grid-gap: 10px;
			max-width: 400px;
			margin: 20px auto;
			border: 2px solid red;
			padding: 5px;
		}
		.horizontal {
			grid-auto-flow: column;
		}
		.grid img:first-child {
			grid-area: span var(--n) / span var(--n);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	//DYNAMIC LAYOUTS

	.dynamic-layouts {
		.grid {
			display: inline-grid;
		}
		.grid :nth-child(2) {
			grid-column-start: 2;
		}
		.grid :nth-child(3):last-child {
			grid-column-start: span 2;
		}

		/**/
		.grid {
			width: 300px;
			aspect-ratio: 1;
			grid-gap: 5px;
			outline: 2px solid red;
			vertical-align: top;
			margin: 10px;
			counter-reset: num;
		}
		.grid * {
			border: 2px solid;
			font-size: 30px;
			box-sizing: border-box;
			font-family: sans-serif;
			display: grid;
			place-content: center;
		}
		.grid *:before {
			content: counter(num);
			counter-increment: num;
		}
	}

	//DYNAMIC LAYOUTS ROW
	.dynamic-layouts-row, .different-size {
		.grid {
			display: inline-grid;
		}
		.grid :nth-child(4) {
			grid-column-start: 2;
		}
		.grid :nth-child(3):last-child {
			grid-column-start: span 2;
		}

		/**/
		.grid {
			width: 300px;
			aspect-ratio: 1;
			grid-gap: 5px;
			outline: 2px solid red;
			vertical-align: top;
			margin: 10px;
			counter-reset: num;
		}
		.grid * {
			border: 2px solid;
			font-size: 30px;
			box-sizing: border-box;
			font-family: sans-serif;
			display: grid;
			place-content: center;
		}
		.grid *:before {
			content: counter(num);
			counter-increment: num;
		}
	}

    //SAME SIZE WITH CONTENT
    .same-size{
        .grid {
  display: inline-grid;
  //Since we didn’t define any sizes for our items,
//    the browser automatically sizes them for us based
//     on their contents and we may end up with different
//      sizing than what we just saw. To overcome 
//      this, we have to explicitly specify that all
//       the columns and rows are equally sized
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
}
.grid :nth-child(4) {
  grid-column-start: 2;
}
.grid :nth-child(3):last-child {
  grid-column-start: span 2;
}

/**/
.grid {
  width: 300px;
  aspect-ratio: 1;
  grid-gap: 5px;
  outline: 2px solid red;
  vertical-align: top;
  margin: 10px;
  counter-reset: num;
}
.grid *{
  border: 2px solid;
  font-size: 30px;
  box-sizing: border-box;
  font-family: sans-serif;
  display: grid;
  place-content: center;
}
.grid *:before {
  content: counter(num);
  counter-increment: num;
}
    }

    .six-content{
        .grid {
  display: inline-grid;
  //If we have four rows (and here comes the interesting part),
//    we use the three values for the first three rows and
//     we reuse the first value again for the fourth row. 
//     That’s why it’s a kind of pattern that we repeat to
//      size all the implicit rows.
  grid-auto-rows: 2fr 2fr 1fr;
  grid-auto-columns: 1fr;
}
.grid :nth-child(1):nth-last-child(odd) {
  grid-column-start: span 2;
}
.grid :nth-child(4):nth-last-child(odd) {
  grid-column-start: 2;
}

/**/
.grid {
  width: 300px;
  aspect-ratio: 1;
  grid-gap: 5px;
  outline: 2px solid red;
  vertical-align: top;
  margin: 10px;
  counter-reset: num;
}
.grid *{
  border: 2px solid;
  font-size: 30px;
  box-sizing: border-box;
  font-family: sans-serif;
  display: grid;
  place-content: center;
}
.grid *:before {
  content: counter(num);
  counter-increment: num;
} 
    }

    //GRID PATTERNS
    .grid-patterns{
        .grid {
  display: grid;
  grid-auto-rows: 100px;/* all the rows equal to 100px */
  grid-auto-columns: 1fr;/* all the columns are equal */
  
  //grid-template-columns: repeat(3, 1fr); /* all the columns are equal */
  
  //above line can be used explicitly but implicit grid
  // will create this for us

  grid-gap: 5px;
}

//.grid :nth-child(4n + 1) { grid-column: 1/span 2; }
//.grid :nth-child(4n + 2) { grid-column-start: 3; }
//.grid :nth-child(4n + 3) { grid-column-start: 1; }
//.grid :nth-child(4n + 4) { grid-column: 2/span 2; }

//The first thing we can do is update grid-column: 
// 1 /span 2 and use only grid-column: span 2 since,
//  by default, the browser will place the first 
//  item into the first column

.grid :nth-child(4n + 1){
  grid-column: span 2;
}
// If we place the fourth element in the second
//  column while allowing it to take up two full 
//  columns, we’re forcing the grid to create a 
//  third implicit column, giving us a total of
//   three columns without explicitly telling it
//    to. The fourth element cannot go into the
//     first row since the first item is also
//      taking two columns, so it flows to the
//       next row. This configuration leave us
//        with an empty column in the first row
//         and an empty one in the second row
.grid :nth-child(4n + 4){
  grid-column: 2/span 2;
}
//if we use grid template column then use below lines of code
// .grid :nth-child(4n + 1),
// .grid :nth-child(4n + 4){
//   grid-column: span 2;
// }

/**/
.grid {
  max-width:600px;
  margin:auto;
  counter-reset:num;
}
.grid *{
  border:2px solid;
  font-size:30px;
  box-sizing:border-box;
  font-family:sans-serif;
  display:grid;
  place-content:center;
}
.grid *:before {
  content:counter(num);
  counter-increment:num;
}  
    }

    .six-n-pattern-1{
        .grid {
  display: grid;
  grid-auto-rows: 100px;
  grid-auto-columns: 1fr;
  grid-gap: 5px;
}
//Our pattern repeats every six elements. 
// The third and fourth elements each need to 
// occupy two full rows. If we place the third 
// and the fourth elements, it seems that we
//  don’t need to touch the others, so let’s 
//  try the following:

.grid :nth-child(6n + 3) {
  grid-area: span 2/2; /* grid-row: span 2 && grid-column: 2 */
}

			// grid-row-start
			// grid-row-end
			// grid-column-start
			//grid-column-end
			
            //grid-area: span 3 / span 3;
             /* ...is equivalent to: */
			// grid-row-start: span 3;
			// grid-column-start: span 3;
			//  grid-row-end: auto;
			// grid-column-end: auto;
			//}

.grid :nth-child(6n + 4) {
  grid-area: span 2/1; /* grid-row: span 2 && grid-column: 2 */
}

/**/
.grid {
  max-width: 600px;
  margin: auto;
  counter-reset: num;
}
.grid * {
  border: 2px solid;
  font-size: 30px;
  box-sizing: border-box;
  font-family: sans-serif;
  display: grid;
  place-content: center;
}
.grid *:before {
  content: counter(num);
  counter-increment: num;
}
    }


    //We need to place the second element in the first column. Otherwise, the grid will automatically place it in the second column.

    .six-n-pattern-2{
        .grid {
  display: grid;
  grid-auto-rows: 100px;
  grid-auto-columns: 1fr;
  grid-gap: 5px;
}

.grid :nth-child(6n + 2) {
  grid-column: 1; 
}
.grid :nth-child(6n + 3) {
  grid-area: span 2/2; /* grid-row: span 2 && grid-column: 2 */
}
.grid :nth-child(6n + 4) {
  grid-area: span 2/1; /* grid-row: span 2 && grid-column: 2 */
}

/**/
.grid {
  max-width: 600px;
  margin: auto;
  counter-reset: num;
}
.grid * {
  border: 2px solid;
  font-size: 30px;
  box-sizing: border-box;
  font-family: sans-serif;
  display: grid;
  place-content: center;
}
.grid *:before {
  content: counter(num);
  counter-increment: num;
}
    }


    // Better, but there’s still more work,
    // We need to shift the third element to the top.
     // It’s tempting to try placing it in the first row this way:
      //.grid :nth-child(6n + 3) {
  //grid-area: 1/2/span 2; 
    /* Equivalent to:
       grid-row-start: 1;
       grid-row-end: span 2;
       grid-column-start: 2 
     */
//}

// But this doesn’t work because it forces 
// all the 6n + 3 elements to get placed in th
//  same area which makes a jumbled layout.
//   The real solution is to keep the initial
//    definition of the third element and add
//     grid-auto-flow: dense to fill the gaps

.six-n-pattern-final{
    .grid {
  display: grid;
  grid-auto-flow: dense; //dense added to fill gaps
  grid-auto-rows: 100px;
  grid-auto-columns: 1fr;
  grid-gap: 5px;
}
.grid :nth-child(6n + 2) {
  grid-column: 1;
}
.grid :nth-child(6n + 3) {
  grid-area: span 2/2;
}
.grid :nth-child(6n + 4) {
  grid-row: span 2;
}

/**/
.grid {
  max-width: 600px;
  margin: auto;
  counter-reset: num;
}
.grid * {
  border: 2px solid;
  font-size: 30px;
  box-sizing: border-box;
  font-family: sans-serif;
  display: grid;
  place-content: center;
}
.grid *:before {
  content: counter(num);
  counter-increment: num;
}
}

.ten-n-pattern{
    .grid {
  display: grid;
  grid-auto-flow: dense;
  grid-auto-columns: 1fr;
  grid-auto-rows: 100px;
  grid-gap: 5px;
}
.grid :nth-child(10n + 8) {
  grid-column: 1;
}
.grid :nth-child(10n + 9) {
  grid-column: 2;
}
.grid :nth-child(10n + 2) {
  //grid-column: 3;   //not needed
}
.grid :nth-child(10n + 3) {
  grid-column: 4;
}
.grid :nth-child(10n + 1),
.grid :nth-child(10n + 10) {
  grid-area: span 2 / span 2;
}

/**/
.grid {
  max-width: 600px;
  margin: auto;
  counter-reset: num;
}
.grid * {
  border: 2px solid;
  font-size: 30px;
  box-sizing: border-box;
  font-family: sans-serif;
  display: grid;
  place-content: center;
}
.grid *:before {
  content: counter(num);
  counter-increment: num;
}
}
</style>
