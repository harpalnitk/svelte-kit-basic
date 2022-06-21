<main class='grid-example'>
    <h4>click or tap on any adjacent boxes</h4>
    <section>
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox>
      <input type=checkbox checked>
      <input type=checkbox checked> 
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox>
      <input type=checkbox>
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox>
      <input type=checkbox>
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox> 
      <input type=checkbox>
    </section>
    </main>
    <main class="calendar">
        <h4>Calendar</h4>
        <section>
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox>
            <input type=checkbox>
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox checked>
            <input type=checkbox checked>
            <input type=checkbox checked> 
            <input type=checkbox checked> 
            <input type=checkbox> 
            <input type=checkbox>
            <input type=checkbox>
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox>
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox>
            <input type=checkbox>
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox> 
            <input type=checkbox>
            <input type=checkbox>
        </section>
        <section>
            <i>1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
            <i>6</i>
            <i>7</i>
            <i>8</i>
            <i>9</i>
            <i>10</i>
            <i>11</i>
            <i>12</i>
            <i>13</i>
            <i>14</i>
            <i>15</i>
            <i>16</i>
            <i>17</i>
            <i>18</i>
            <i>19</i>
            <i>20</i>
            <i>21</i>
            <i>22</i>
            <i>23</i>
            <i>24</i>
            <i>25</i>
            <i>26</i>
            <i>27</i>
            <i>28</i>
            <i>29</i>
            <i>30</i>
          </section>
    </main>


<!-- As you may have noticed in the earlier demo,
 checking and unchecking a checkbox element
  modifies the design of the boxes, depending
   on the selection state of the other checkboxes
    around it. This is possible because I 
    styled each box using the pseudo-elements
     of its adjacent elements instead of its own element. -->

     <!-- The following figure shows how the
      ::before pseudo-elements of boxes in 
      each column (except the first column)
       overlap the boxes to their left, 
       and how the ::after pseudo-elements 
       of boxes in each row (except the first row)
        overlap the boxes above. -->

<style lang='scss'>

main.grid-example {
  display: grid;
  grid-template-rows: min-content min-content;
  margin-top: 25vh;
  align-items: center; justify-items: center;
  user-select: none; -webkit-user-select:  none;
  -webkit-tap-highlight-color: transparent;

  input {
        /* wipe out the default appearance of the 
        checkboxes, then give them my own light
         gray background and super rounded borders */

         /* Notice, too, that the checkboxes themselves are grids. 
         That’s key for placing their ::before and
          ::after pseudo-elements.  */
  display: grid;
  width: 60px; height: 40px; margin: 0;
  appearance: none; -webkit-appearance: none; 
  cursor: pointer;
  background: #ddd;
  border-radius: 20px;
}
/* pseudo-elements except for the first column and first row */
/* We’re only selecting the pseudo-elements of checkboxes
 that are not in the first column or the first row of
  the grid. input:not(:nth-of-type(4n+1)) starts at
   the first checkbox, then selects the ::before 
   of every fourth item from there. But notice 
   we’re saying :not(), so really what we’re 
   doing is skipping the ::before pseudo-element 
   of every fourth checkbox, starting at the first.
    Then we’re applying styles to the ::after pseudo
     of every checkbox from the fifth one. */
input:not(:nth-of-type(4n+1))::before,
input:nth-of-type(n+5)::after {
  content: '';  
  border-radius: 20px;
  pointer-events: none;
  grid-area: 1/1;
}
/* pseudo-elements other than the first column */
input:not(:nth-of-type(4n+1))::before { transform: translatex(-85px); }
/* pseudo-elements other than the first row */
input:nth-of-type(n+5)::after { transform: translatey(-60px); }
/* Now comes styling the checkboxes when they are in a
 :checked state. First, let’s give them a color,
  say a limegreen background */
input:checked { background: limegreen; }


/* A checked box should be able to re-style
 all of its adjacent checked boxes. In other
  words, if we select the eleventh checkbox
   in the grid, we should also be able to 
   style the boxes surrounding it at the top,
    bottom, left, and right. */


/* a checked box's right borders (if the element to its right is checked) */
input:not(:nth-of-type(4n)):checked + input:checked::before { 
  border-top-right-radius: 0; 
  border-bottom-right-radius: 0; 
  background: limegreen;
}
/* a checked box's bottom borders (if the element below is checked) */
input:nth-last-of-type(n+5):checked + * + * + * + input:checked::after {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background: limegreen;
}
/* a checked box's adjacent (rightside) checked box's left borders */
input:not(:nth-of-type(4n)):checked + input:checked + input::before {   
  border-top-left-radius: 0; 
  border-bottom-left-radius: 0; 
  background: limegreen;
}
/* a checked box's adjacent (below) checked box's top borders */
input:not(:nth-of-type(4n)):checked + * + * + * +  input:checked + input::before { 
  border-top-left-radius: 0; 
  border-top-right-radius: 0; 
  background: limegreen;
}

/* We also need to add styling for the last 
checkboxes in the grid — they’re not all
 covered by pseudo-elements as they are 
 the last items in each axis. */


/* a checked box's (in last column) left borders */
/* A checked <input> element next to a
 checked <input> in the second last column. */
input:nth-of-type(4n-1):checked + input:checked {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
/* a checked box's (in last column) adjacent (below) checked box's top borders */
/* An <input> element provided that is checked,
 is directly adjacent to an element, which
  is directly adjacent to another element,
   which is also directly adjacent to another
    element, which, in turn, is directly
     adjacent to an <input> element that
      is in a checked state */
input:nth-of-type(4n):checked + * + * + * + input:checked {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

section {
  display: grid;
  /* That’s a grid of five rows and four columns 
  that contain checkboxes */
  grid:  repeat(5, 60px) / repeat(4, 85px);
  align-items: center; justify-items: center;
  margin: 0;
}
h4 {
  font-family: courier new;
  margin:0;
  margin-bottom: 10px;
  color:  darkslategray;
}
}





main.calendar{
    display: grid;
  margin-top: 25vh;
  align-items: center; justify-items: center;
  user-select: none; -webkit-user-select:  none;
  -webkit-tap-highlight-color: transparent;

  input {
  display: grid;
  width: 40px; height: 40px; margin: 0;
  appearance: none; -webkit-appearance: none; 
  cursor: pointer;
  background: #ddd;
  border-radius: 20px;
}

input:not(:nth-of-type(7n+1))::before,
input:nth-of-type(n+8)::after {
  content: '';  
  border-radius: 20px;
  pointer-events: none;
  grid-area: 1/1;
  z-index: -1;
}

input:not(:nth-of-type(7n+1))::before { transform: translatex(-60px); }

input:nth-of-type(n+8)::after { transform: translatey(-60px); }

input:checked { background: limegreen; }

/* a box's right borders */
input:not(:nth-of-type(7n)):checked + input:checked::before { 
  border-top-right-radius: 0; 
  border-bottom-right-radius: 0; 
  background: limegreen;
}
/* a box's bottom borders */
input:nth-last-of-type(n+8):checked + * + * + * + * + * + * + input:checked::after {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background: limegreen;
}
/* a box's adjacent (rightside) box's left borders */
input:not(:nth-of-type(7n)):checked + input:checked + input::before {   
  border-top-left-radius: 0; 
  border-bottom-left-radius: 0; 
  background: limegreen;
}
/* a box's adjacent (below) box's top borders */
input:not(:nth-of-type(7n)):checked + * + * + * + * + * + * +  input:checked + input::before { 
  border-top-left-radius: 0; 
  border-top-right-radius: 0; 
  background: limegreen;
}
/* a box's (in last column) left borders */
input:nth-of-type(7n-1):checked + input:checked {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
/* a box's (in last column) adjacent (below) box's top borders */
input:nth-of-type(7n):checked + * + * + * + * + * + * + input:checked {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

section {
  display: grid;
  grid-area: 1/1;
  grid:  repeat(5, 60px) / repeat(7, 60px);
  align-items: center; justify-items: center;
  margin: 0;
}

section:nth-of-type(2){
  pointer-events: none;
}

h4 {
  font-family: courier new;
  margin:0;
  margin-bottom: 10px;
  color:  darkslategray;
}
}
</style>