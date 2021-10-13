<script>
  
    import { onMount } from 'svelte';
    
    let shape;
    let numberOfPoints = 36;
    let radius = 100;
 // Function to plot points on circle
 const plotPoints = () => {
     console.log('numberOfPoints', numberOfPoints);
     console.log('radius', radius);

// step used to place each point at equal distances
const angleStep = (Math.PI * 2) / numberOfPoints

// keep track of our points
const points = []

for (let i = 1; i <= numberOfPoints; i++) {
   // Star polygons
//The types of polygons we’ve plotted so far 
//are known as convex polygons. We can also plot s
//tar polygons by modifying our code in the plotPoints()
// function ever so slightly. For every
// other point, we could change the radius 
//value to be 50% of the original value:


/* Set every other point’s radius to be 50% */
const radiusAtPoint = i % 2 === 0 ? radius * 0.5 : radius


//     This clips a polygon, but you’ll notice we can only see one 
//quarter of it. The clip path is positioned in the top left corner,
// with the center of the polygon in the corner. This is because at 
//some points, calculating the cartesian coordinates from the polar 
//coordinates is going to result in negative values. The area
// we’re clipping is outside of the element’s bounding box.

// To position the clip path centrally,
// we need to add half of the width and 
//height respectively to our calculations:

	// x and y position to center the path

   // console.log('Width:', shape.width); // Not working therefore using 320 directly
   // console.log('Height:', shape.height);
	const xPosition = 320 / 2 ;
	const yPosition = 320 / 2 ;
    
    // // x & y coordinates of the current point FOR CONVEX POLYGONS
    // const x = xPosition + Math.cos(i * angleStep) * radius  // Base = cos(angle)* Hypotenuse
    // const y = yPosition + Math.sin(i * angleStep) * radius  // Height = sin(angle)* Hypotenuse

        // x & y coordinates of the current point FOR STAR POLYGONS
        const x = xPosition + Math.cos(i * angleStep) * radiusAtPoint  // Base = cos(angle)* Hypotenuse
    const y = yPosition + Math.sin(i * angleStep) * radiusAtPoint  // Height = sin(angle)* Hypotenuse

    // push the point to the points array
    points.push({ x, y })
}

console.log('Points', points.map(({ x, y }) => {
    return `${x}px ${y}px`
}).join(','));

return points.map(({ x, y }) => {
    return `${x}px ${y}px`
}).join(',')


}

const createPolygon = ()=>{
    //plotPoints();
    shape.style.setProperty('--clip', `polygon(${plotPoints()})`);
};

    onMount( () => {
     createPolygon();
	});


    
   




</script>



<main>
    <div class="controls">
        <div class="controls__group">
            <label for="points">Points: {numberOfPoints}<span data-label="points"></span></label>
            <input id="points" type="range" min="8" max="60" step="2" bind:value={numberOfPoints} on:change={createPolygon}>
        </div>
        <div class="controls__group">
            <label for="rad">Inner radius: {radius}%<span data-label="inner-radius"></span></label>
            <input id="rad" type="range" min="20" max="120" step="5" bind:value={radius} on:change={createPolygon}>
        </div>
    </div>




    <div class="shape"
    bind:this={shape}>
    </div>
</main>



<style lang="scss">
     @use "sass:math";
	 @import '../../styles/vars';

   
   main{
	margin: 0;
	padding: 1rem;
	min-height: 100vh;
	display: grid;
	gap: 1rem;
	place-content: center;
}

.shape {
	width: min(20rem, 90vmin);
	height: min(20rem, 90vmin);
	position: relative;
	background: whitesmoke;
	border: 1px solid lightgrey;
	
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(45deg, deeppink, orange);
		clip-path: var(--clip);
	}
}
</style>