<script lang='ts'>

import {onMount} from 'svelte';

	let container1,container2,container3;
  

    
    type DataSetEntry = {
  label: string;
  value: number;
};
const svgDimension: number = 320;
const colors: string[] = [
    "#264653",
    "#2A9D8F",
    "#E76F51",
    "#F4A261",
    "#E9C46A"
];
const fallbackColor: string = "#DDDDDD";
type DataSet = DataSetEntry[];

const rawDataSet: DataSet = [
  { label: 'Bad', value: 1231 },
  { label: 'Beginning', value: 6321 },
  { label: 'Developing', value: 10028 },
  { label: 'Accomplished', value: 12123 },
  { label: 'Exemplary', value: 2120 }
];

//When we are appending the rectangles to the DOM,
// we have to pay attention to their order. Otherwise,
// we would have to specify the z-index explicitly. 
//The first rectangle has to be the largest, and the
// last rectangle has to be the smallest. 
//Best to sort the data before the loop.
const data = rawDataSet.sort(
  (a: DataSetEntry, b: DataSetEntry) => b.value - a.value
);

//It will become apparent in a moment why we need the 
// highest value. We can use the Math.max() 
// to get it. It accepts any number of arguments
//  and returns the highest value in a set.
const dataSetHighestValue: number = Math.max(
  ...rawDataSet.map((entry: DataSetEntry) => entry.value)
);


//Asked another way, how do we map a number from one 
// range ([0, 12123]) to another one ([0, 320])? Or, in
//  more math-y terms, how do we scale a variable to an
//   interval of [a, b]?

const remapValue = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number => {
  return ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
};
// remapValue(1231, 0, 12123, 0, 320); // 32
// remapValue(6321, 0, 12123, 0, 320); // 167
// remapValue(12123, 0, 12123, 0, 320); // 320

//Since we map values to the same range in our code,
//  instead of passing the minimums and maximums 
//  over and over, we can create a wrapper function:

const valueRemapper = (
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
) => {
  return (value: number): number => {
    return remapValue(value, fromMin, fromMax, toMin, toMax);
  };
};

const remapDataSetValueToSvgDimension = valueRemapper(
  0,
  dataSetHighestValue,
  0,
  svgDimension
);

// remapDataSetValueToSvgDimension(1231); // 32
// remapDataSetValueToSvgDimension(6321); // 167
// remapDataSetValueToSvgDimension(12123); // 320


// Notice that we are using the createElementNS
//  instead of the more common createElement.
//   This is because we are working with an SVG.
//    HTML and SVG elements have different specs,
//     so they fall under a different namespace URI.
//      It just happens that the createElement 
//      conveniently uses the HTML namespace! So,
//       to create an SVG, we have to be this verbose
//document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;

const createSvgNSElement = (element: string): SVGElement => {
   
   return document.createElementNS('http://www.w3.org/2000/svg', element);
 };
 
//Creating and inserting the DOM elements
 onMount(async () => {
  const svg1 = getSquareChart();
  container1.appendChild(svg1);
  const svg2 = getSquareChart();
  container2.appendChild(svg2);
  const svg3 = getMaskedSquareChart();
  container3.appendChild(svg3);
	});

  const getSquareChart = ()=>{
    //What remains has to do with DOM manipulation. 
//We have to create the <svg> and the five <rect> elements, 
//set their attributes, and append them to the DOM.
// We can do all this with the basic createElementNS,
// setAttribute, and the appendChild functions.
 const svg = getSVG();

data.forEach((d: DataSetEntry, index: number) => {
    const rect = getRect(d.value,index);
    svg.appendChild(rect);
});
return svg;		
  }

  const getMaskedSquareChart = ()=>{
    const svg = getSVG();
    data.forEach((d: DataSetEntry, index: number) => {
    const mask: SVGMaskElement = createSvgNSElement("mask") as SVGMaskElement;

    const rectDimension: number = remapDataSetValueToSvgDimension(d.value);
    const rect = createRect(
        rectDimension,
        0,
        svgDimension - rectDimension,
        "white"
    );

    mask.setAttribute("id", maskIdForDimension(rectDimension));

    mask.appendChild(rect);

    const smallerRectIndex = index + 1;

    if (data[smallerRectIndex] !== undefined) {
        const smallerRectDimension: number = remapDataSetValueToSvgDimension(
            data[smallerRectIndex].value
        );
        const smallerRect = createRect(
            smallerRectDimension,
            0,
            svgDimension - smallerRectDimension,
            "black"
        );

        mask.appendChild(smallerRect);
    }

    svg.appendChild(mask);
});

data.forEach((d: DataSetEntry, index: number) => {
    const rectDimension: number = remapDataSetValueToSvgDimension(d.value);
    const rect = createRect(
        rectDimension,
        0,
        svgDimension - rectDimension,
        colors[index] ?? fallbackColor
    );

    rect.setAttribute("mask", `url(#${maskIdForDimension(rectDimension)})`);

    svg.appendChild(rect);
});

return svg;
  }


  function getSVG(){
    const svg: SVGSVGElement = createSvgNSElement("svg") as SVGSVGElement;
     svg.setAttribute("viewBox", `0 0 ${svgDimension} ${svgDimension}`);
     svg.setAttribute("width", `${svgDimension}`);
     svg.setAttribute("height", `${svgDimension}`);
     return svg;
  }

  function getRect(value,index){
    const rect: SVGRectElement = createSvgNSElement("rect") as SVGRectElement;
    const rectDimension: number = remapDataSetValueToSvgDimension(value);

    rect.setAttribute("width", `${rectDimension}`);
    rect.setAttribute("height", `${rectDimension}`);
    //To give the visual impression that all of the rectangles 
    //originate from the same point that touches their 
    //bottom-left corners, we have to push the rectangles
    // down so to speak. By how much? The exact amount that
    // the rectangle does not fill. And that value is the 
    //difference between the dimension of the chart and the particular rectangle
    rect.setAttribute("y", `${svgDimension - rectDimension}`);
    rect.setAttribute("fill", colors[index] ?? fallbackColor);
    return rect;
  }

    //Masking 101
// A mask is something you define and later apply to an element. 
// Typically, the mask is inlined in the <svg> element it
//  belongs to. And, generally, it should have a unique
//   id because we have to reference it in order to apply
//    the mask to an element.
//In the <mask> tag, we put the shapes that serve as the actual masks. We also apply the mask attribute to the elements.
//     <svg>
//   <mask id="myCleverlyNamedMask">
//     <!-- ... -->
//   </mask>
//   <rect mask="url(#myCleverlyNamedMask)"></rect>
// </svg>

//We said that we want to cover the cutout areas
//  that match the sizes of the existing rectangles
//  . If we take the largest element and we apply 
//  the previous rectangle as a mask, we end up with this code:

// <svg viewBox="0 0 320 320" width="320" height="320">
//   <mask id="theMask">
//     <rect width="264" height="264" y="56" fill=""></rect>
//   </mask>
//   <rect width="320" height="320" y="0" fill="#264653" mask="url(#theMask)"></rect>
// </svg>


const maskIdForDimension = (dimension: number): string => {
    const fixedDimension = dimension.toFixed();

    return `maskW${fixedDimension}`;
};

const createRect = (
    dimension: number,
    x: number,
    y: number,
    fill: string
): SVGRectElement => {
    const rect: SVGRectElement = createSvgNSElement("rect") as SVGRectElement;

    rect.setAttribute("width", `${dimension}`);
    rect.setAttribute("height", `${dimension}`);
    rect.setAttribute("x", `${x}`);
    rect.setAttribute("y", `${y}`);
    rect.setAttribute("fill", fill);

    return rect;
};
</script>



<main class='flex-center'>
    <h3>Basic Square L Shape for Chart</h3>
    <section>
        <svg viewBox="0 0 320 320" width="320" height="320">
            <path d="M320 0H0V56H264V320H320V0Z" fill="#264653"/>
          </svg>
    </section>
  
  
    <h3> Square Chart</h3>
    <section bind:this={container1}></section>
  
  
    <h3> Square Chart With Hover Animation</h3>
    <section bind:this={container2} class='square-hover'></section>
   
   
    <h3>Basic Mask with white fill</h3>
    <section class="basic-mask">
        <svg viewBox="0 0 320 320" width="320" height="320">
            <mask id="theMask1">
              <rect width="264" height="264" y="56" fill="white"></rect>
            </mask>
            <rect width="320" height="320" y="0" fill="#264653" mask="url(#theMask1)"></rect>
          </svg>
    </section>
    <!-- //We don’t see anything. That’s because what is
       filled with black is what becomes invisible.
        We control the visibility of masks using white
         and black fills.  -->
    <h3>Basic Mask with black fill</h3>
    <section class="basic-mask">
        <svg viewBox="0 0 320 320" width="320" height="320">
            <mask id="theMask2">
              <rect width="264" height="264" y="56" fill="black"></rect>
            </mask>
            <rect width="320" height="320" y="0" fill="#264653" mask="url(#theMask2)"></rect>
          </svg>
    </section>

    <h3>Basic Mask with grey fill</h3>
    <section class="basic-mask">
        <svg viewBox="0 0 320 320" width="320" height="320">
            <mask id="theMask3">
              <rect width="264" height="264" y="56" fill="grey"></rect>
            </mask>
            <rect width="320" height="320" y="0" fill="#264653" mask="url(#theMask3)"></rect>
          </svg>
    </section>


    <!--DEsigning our final chart element-->
<!--We have only used one shape for the mask,
   but as with any general purpose HTML tag,
    we can nest as many child elements in ther
    e as we want. In fact, the trick to achieve
     what we want is using two SVG <rect> elements.
        We have to stack them one on top of the other:
      
      <svg viewBox="0 0 320 320" width="320" height="320">
  <mask id="maskW320">
    <rect width="320" height="320" y="0" fill="???"></rect>
    <rect width="264" height="264" y="56" fill="???"></rect>
  </mask>
  <rect width="320" height="320" y="0" fill="#264653" mask="url(#maskW320)"></rect>
</svg>

The <mask> is the dimension of the largest element and the largest element is filled with black. That means everything under that area is invisible. And everything under the smaller rectangle is visible.
      
  
  Now let’s do flip things where the black rectangle is on top:

<mask id="maskW320">
  <rect width="320" height="320" y="0" fill="white"></rect>
  <rect width="264" height="264" y="56" fill="black"></rect>
</mask>
      -->

      <h3> Final Result Masked Square Chart</h3>
      <section bind:this={container3} class='masked-square-chart'></section>
</main>



   




<style lang="scss">

    main{
        flex-direction: column;
    }
    h3{
        margin: 1rem auto;
    }
    section{
        border: 1px solid grey;
        padding: 1rem;
        margin: 1rem auto;
      
    }
    .square-hover,.masked-square-chart{
    background: #f0f0f0;
    display: grid;
    place-items: center;
    height: 80vh;
    width: 80vw;
        :global(svg) {
    display: block;
    overflow: visible;
    max-width: 100%;
    height: auto;
}
// global needed in svelte for element which are added to dom programatically
:global(rect) {
    transition: all 0.2s linear;
}

:global(svg:hover > rect) {
    opacity: 0.4;
    transform: translate(8px, -8px);
}

:global(svg:hover > rect:hover) {
    opacity: 1;
    transform: translate(0);
}

:global(svg:hover > rect:hover ~ rect) {
    transform: translate(-8px, 8px);
}
    }
    .basic-mask{
      background: cornflowerblue;
    }
    </style>