<script>
  import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Charts With Emojis' path='/charts-with-shapes'></BasicPage>

<div id="chart">

</div>
<div id="chart-1">

</div>

<style>
    #chart {
  width: 300px; 
  height: 300px;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='300px' height='300px'><body style='margin:0;text-align:center;color:transparent;' xmlns='http://www.w3.org/1999/xhtml'><div style='text-shadow: 0 0 limegreen;font:200px/300px serif;background:white;'>🍏</div><div style='text-shadow:0 0 white;font:170px/300px serif;position:relative;top:-300px;'>🍏</div></body></foreignObject></svg>"),
  
  /* Just as with the last demo, a smaller
   white apple shape is added at the center to
    create the border design.
    I added the two divs inside the <body> element 
        so the repeating style properties of the divs 
        are declared only once in the body element. The 
        divs will then automatically inherit those properties.
         */
  conic-gradient(transparent 64%, darkseagreen 64%);
  background-blend-mode: screen;
}


/* animated icon */

@property --n {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 30%;
}
/* @property is a CSS at-rule that explicitly 
defines a custom CSS property. In supported browsers,
 when a custom property is defined using @property it 
 can be animated. */
 
#chart-1 {
  width: 300px; 
  height: 300px;
  --n: 30%;  /*declaration for browsers with no @property support */
  background: 
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='300px' height='300px'><body style='margin:0;text-align:center;color:transparent;' xmlns='http://www.w3.org/1999/xhtml'><div style='text-shadow: 0 0 limegreen;font:200px/300px serif;background:white;'>🍏</div><div style='text-shadow:0 0 white;font:170px/300px serif;position:relative;top:-300px;'>🍏</div></body></foreignObject></svg>"),
    conic-gradient(transparent var(--n), darkseagreen var(--n));
  background-blend-mode: screen;
  transition: --n 2s ease-in-out	
}
#chart-1:hover { --n: 70%; }
</style>