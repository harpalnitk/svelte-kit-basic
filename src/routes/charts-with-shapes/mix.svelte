<script>
  import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Mixed Shapes' path='/charts-with-shapes'></BasicPage>
<main>
    <section>
      <div class=charts-1>
        <div class=chart-shapes>☆</div>
        <div class=chart-values></div>
        <span class=chart-labels>30%</span>
      </div>
      <div class=charts-1>
        <div class=chart-shapes>☆</div>
        <div class=chart-values></div>
        <span class=chart-labels>40%</span>
      </div>
      <div class=charts-1>
        <div class=chart-shapes>☆</div>
        <div class=chart-values></div>
        <span class=chart-labels>50%</span>
      </div>
      <div class=charts-1>
        <div class=chart-shapes>☆</div>
        <div class=chart-values></div>
        <span class=chart-labels>60%</span>
      </div>
    </section>
    
    
    <section>
      <div class=charts-2>
        <span class=chart-labels>23%</span>
      </div>
      <div class=charts-2>
        <span class=chart-labels>58%</span>
      </div>
      <div class=charts-2>
        <span class=chart-labels>63%</span>
      </div>
      <div class=charts-2>
        <span class=chart-labels>71%</span>
      </div>
    </section>
    
    
    <section>
      <div class=charts-3>
        <span class=chart-labels>83%</span>
      </div>
      <div class=charts-3>
        <span class=chart-labels>54%</span>
      </div>
      <div class=charts-3>
        <span class=chart-labels>33%</span>
      </div>
      <div class=charts-3>
        <span class=chart-labels>5%</span>
      </div>
    </section>
    </main>



    <style>
        section {
  height: 90px;
  margin: 40px auto;
  text-align: center;
  width: max-content;
}

body{ text-align: center; }

main { margin-top: calc(50vh - 175px); }

.chart-labels {
  isolation: isolate;
  font-family: courier;
}

.charts-1, .charts-2, .charts-3 {
  width: 90px;
  height: 90px;
  display: inline-grid;
}


/* first row */


.charts-1 {
  background: white;
}

.charts-1 *{
  height: inherit;
  grid-area: 1 / 1;
}

.charts-1 .chart-shapes {
  font-size: 90px;
  line-height: 90px;
  text-align: center;
  color: red;
  font-weight: bolder;
}

.charts-1 .chart-labels {
  margin-top: calc(45px - .2em);
  font-size: 7pt;
  color: red;
} 

.charts-1 .chart-values {
  background: conic-gradient(transparent 30%, lightgrey 30%);
  mix-blend-mode: screen;
}

.charts-1:nth-of-type(2) .chart-values {
  background: conic-gradient(transparent 40%, lightgrey 40%);
}

.charts-1:nth-of-type(3) .chart-values {
  background: conic-gradient(transparent 50%, lightgrey 50%);
}

.charts-1:nth-of-type(4) .chart-values {
  background: conic-gradient(transparent 60%, lightgrey 60%);
}

/* second row */

.charts-2 .chart-labels {
  margin-top: calc(45px - .5em);
  color: limegreen;
}

.charts-2 {
  background:
  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml'><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: limegreen; box-shadow: -45px 0 0 white, 45px 0 0 white, 0 45px 0 white, 0 -45px 0 white;'></div><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: white; transform:scale(0.9) translateY(-100px);'></div></html></foreignObject></svg>"),
  conic-gradient(transparent 23%, lightgrey 23%);
  background-blend-mode: screen; 
  background-position: center;
  background-repeat: no-repeat;
}

.charts-2:nth-of-type(2){
  background:
  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml'><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: limegreen; box-shadow: -45px 0 0 white, 45px 0 0 white, 0 45px 0 white, 0 -45px 0 white;'></div><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: white; transform:scale(0.9) translateY(-100px);'></div></html></foreignObject></svg>"),
  conic-gradient(transparent 58%, lightgrey 58%);
}

.charts-2:nth-of-type(3){
  background:
  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml'><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: limegreen; box-shadow: -45px 0 0 white, 45px 0 0 white, 0 45px 0 white, 0 -45px 0 white;'></div><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: white; transform:scale(0.9) translateY(-100px);'></div></html></foreignObject></svg>"),
  conic-gradient(transparent 63%, lightgrey 63%);
}

.charts-2:nth-of-type(4){
  background:
  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml'><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: limegreen; box-shadow: -45px 0 0 white, 45px 0 0 white, 0 45px 0 white, 0 -45px 0 white;'></div><div style='width: 80px; height: 90px; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; background: white; transform:scale(0.9) translateY(-100px);'></div></html></foreignObject></svg>"),
  conic-gradient(transparent 71%, lightgrey 71%);
}



/* third row */

.charts-3 .chart-labels {
  margin-top: calc(45px - .4em);
  color: dodgerblue;
}

.charts-3 {
  background: 
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;text-align:center;line-height:100px;color:transparent;' ><div style='text-shadow: 0 0 dodgerblue;font-size:90px;background:white;'>🥛</div><div style='text-shadow:0 0 white;font-size:75px;position:relative;top:-100px;'>🥛</div></html></foreignObject></svg>"),
    conic-gradient(transparent 83%, lightgrey 83%);
  background-blend-mode: screen;
  background-position: center;
}

.charts-3:nth-of-type(2){
  background: 
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;text-align:center;line-height:100px;color:transparent;' ><div style='text-shadow: 0 0 dodgerblue;font-size:90px;background:white;'>🥛</div><div style='text-shadow:0 0 white;font-size:75px;position:relative;top:-100px;'>🥛</div></html></foreignObject></svg>"),
    conic-gradient(transparent 54%, lightgrey 54%);
} 

.charts-3:nth-of-type(3){
  background: 
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;text-align:center;line-height:100px;color:transparent;' ><div style='text-shadow: 0 0 dodgerblue;font-size:90px;background:white;'>🥛</div><div style='text-shadow:0 0 white;font-size:75px;position:relative;top:-100px;'>🥛</div></html></foreignObject></svg>"),
    conic-gradient(transparent 33%, lightgrey 33%);
}

.charts-3:nth-of-type(4){
  background: 
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><foreignObject width='90px' height='90px'><html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;text-align:center;line-height:100px;color:transparent;' ><div style='text-shadow: 0 0 dodgerblue;font-size:90px;background:white;'>🥛</div><div style='text-shadow:0 0 white;font-size:75px;position:relative;top:-100px;'>🥛</div></html></foreignObject></svg>"),
    conic-gradient(transparent 5%, lightgrey 5%);
}



@media (max-width: 400px){main{transform: scale(.8);} }
    </style>