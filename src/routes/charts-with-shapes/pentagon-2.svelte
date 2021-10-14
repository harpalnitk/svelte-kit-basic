

<div id="chart">

</div>

<!--An alternative to adding the chart shape in the HTML is to add it as another background layer in CSS
and use background-blend-mode instead of mix-blend-mode. However, the code for a chart shape inside
the CSS can be less legible for a quick glance. So it’s up to you to see where it’ll be easier for
you to add the chart shape in: HTML or CSS. You’ve both options.-->

<style lang="scss">
    #chart {
  width: 300px; 
  height: 300px;
  background:
  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='300px' height='100%'><div xmlns='http://www.w3.org/1999/xhtml' style='font:300px/300px serif;color:limegreen;text-align: center;background:white'>⬠</div></foreignObject></svg>"),
  conic-gradient(transparent 75%, darkseagreen 75%);
  background-blend-mode: screen;
}




</style>
