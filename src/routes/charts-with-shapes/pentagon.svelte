


<div id=chart>
    <div id=chart-shape>&#x2B20</div>
    <div id=chart-value></div> 
  </div>


  <style>
      #chart-shape {
        /* 300px/300px  font-size/line-height */
  font: 300px/300px serif;
  text-align: center; 
  color: limegreen;
}
 #chart-value {
  background: conic-gradient(transparent 75%, darkseagreen 75%);
  mix-blend-mode: screen;
  /* The mix-blend-mode property specifies 
  how an element's content should blend with
   its background 
   The screen blend mode value causes a 
   lighter blend to come through. A lighter
    green shows through the portion where the
    darkseagreen colored part of the conic 
    gradient overlaps with the limegreen 
    colored pentagram, while the rest of the
     darskseagreen gradient disappears against
      the white backdrop of the chart.*/
}

#chart {
  width: 300px;
  height: 300px;
  display: grid;
  margin: auto;
  margin-top: calc(50vh - 150px);
  background: white;
}
#chart * {
   height: inherit; 
   grid-area: 1 / 1; 
} 
  </style>