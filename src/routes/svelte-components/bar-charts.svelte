<script>
let data = [{year:'2018',bar1:'50',bar2:'53'},
{year:'2019',bar1:'30',bar2:'26'},
{year:'2020',bar1:'60',bar2:'63'},
{year:'2021',bar1:'100',bar2:'95'},
{year:'2022',bar1:'80',bar2:'86'},];
</script>

<main>
    <div class="container">
        <div class="chart">
            <!-- description lists 
            Y-AXIS -->

            <!-- While we’re talking about announcing 
                content, we can probably prevent the
                 y-axis labels from being read. It’s not
                  like the user is missing information,
                   as the actual percentages for each 
                   bar are already available and announced.
                    We can use the aria-hidden attribute
                     for that: -->
            <dl class="numbers" aria-hidden="true">
                <dd><span>100%</span></dd>
                <dd><span>80%</span></dd>
                <dd><span>60%</span></dd>
                <dd><span>40%</span></dd>
                <dd><span>20%</span></dd>
                <dd><span>0%</span></dd>
            </dl>
            <!-- X-AXIS -->
            <dl class="bars">
                {#each data as item}
                <div>
                    <dt>{item.year}</dt>
                    <dd>
                        <div class="bar" data-percentage="{item.bar1}" style="height:{item.bar1}%" tabindex="0" aria-label="Estimate">
                           <!-- Notice that we have the bar’s value directly 
                           in the HTML as well. That will get announced,
                            but we still want to visually hide it. We 
                            could use transparent text for that, but 
                            another way is to use the classic .
                            visually-hidden trick by wrapping the
                             value in span: -->
                            <span class="visually-hidden">{item.bar1}%</span>
                        </div>
                        <div class="bar overlap" data-percentage="{item.bar2}" style="height:{item.bar2}%" tabindex="0" aria-label="Actual">
                          <span class="visually-hidden">{item.bar2}%</span>
                        </div>
                    </dd>
                </div>
                {/each}
            </dl>
        </div>
        <!-- I also think it’s OK for screen readers to
             ignore the legend since it’s a visual
              aid: -->
        <figure class="legend" aria-hidden="true">
            <div class="type1">Estimate</div>
            <div class="type2">Actual</div>
        </figure>
    </div>  
</main>



<style lang='scss'>
main {
    margin: 0;
    padding: 0;
    background: #333;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
}

.container {
    padding: 20px;
    display: flex;
    flex-direction: row;
    position: relative;
}



.chart {
  display: flex;
  position: relative;
}

/* Y-AXIS STYLES */
.numbers {
  color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 20px 0 0;
  padding: 0;
}

.numbers dd {
  background-image: linear-gradient(45deg, #000, #333);
  padding: 0 10px;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  justify-content:center;
  display: flex;
  margin: 0;
  flex: 60px;
  width: 100%;
}
//  X-AXIS Styles 
.bars {
    background: #111;
  padding: 0px 20px;
  display: flex;
  flex: auto; /* fill up the rest of the `.chart` space */
  gap: 50px;
  margin: 0;
  position: relative;
}
// “bar” is actually two bars where one overlaps the other. 
// I wrapped those in a generic <div> that we can use as yet
//      another flexible container that holds the definition
//       term (<dt>) we’re using as a label and the 
//         description details (<dd>) that holds both bar values
.bars > div {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;//Each bar is going to be the same width, hence flex: 1
  position: relative;
  width:50px;
}
.bars dt {
  font-size: 14px;
  color: #fff;
  position:absolute;
  bottom: -15px;
  z-index: 2;
}
.bars dd .bar {
   display: block;
    background: #25deaa;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    transition: 0.5s;
    transition-property: box-shadow;
    z-index: 2;
}
.bars dd .bar:hover {
    box-shadow: 0px 2px 8px 1px #25deaa;
    cursor: pointer;
}

//The bars are already overlapping; it’s just 
// tough to tell. Notice in the HTML that the second 
// .bar in each set has an additional .overlap class.
//  Let’s use that to differentiate the bars. You’re 
//  totally free to choose your own styling for this. 
//  I’m adding a little padding to the .overlap bars
//   so that they are wider than the other bars.
//    Then I’m tweaking the stacking order using
//     z-index so that the .overlap bars sit below the other bars.
.bars dd .overlap {
  background: #696969;
  z-index: 1;
  width: 70px;
  margin-left: -10px;
}

.bars dd .overlap:hover {
    box-shadow: 0px 2px 8px 1px #696969;
}
// for tab index
.bar:focus {
  outline: 1.5px solid #f1f1f1;
}

/* LEGEND STYLES */

.legend {
  position: relative;
}

.legend div::before {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  margin: 3px -15px;
}

.legend .type1 {
  margin: 10px 0px;
  color: #ffffff;
}

.legend .type1::before {
  background-color: #25deaa;
}

.legend .type2 {
  color: #ffffff;
}

.legend .type2::before {
  background-color: #838383;
}
.visually-hidden {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
</style>