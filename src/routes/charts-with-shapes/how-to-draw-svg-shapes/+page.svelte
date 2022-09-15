<!--https://svg-path-visualizer.netlify.app/-->
<main class='flex-center'>
    <h3>Draw SVG Shape</h3>
    <section class="basic">
        <!--The element in SVG is the ultimate drawing element.
             It can draw anything! I’ve heard that under the hood
              all the other drawing elements ultimately use path
               anyway. The path element takes a single attribute
                to describe what it draws: the d attribute. 
                The value it has is a mini syntax all to itself.-->

                <!--The letters are commands. The numbers are passing 
                    values to those commands. All the commas are
                     optional (they could be spaces)-->
                     <!--M 100,100 means “Pick up the pen and move 
                        it to the exact coordinates 100,100”
                      m 100,100 means “Move the Pen 100 down and 100 right from 
                       wherever you currently are.
                       https://css-tricks.com/svg-path-syntax-illustrated-guide/
                       ”-->
        <svg class='icon--plus' viewBox="0 0 320 320" width="320" height="320">
            <path d="M320 0H0V56H264V320H320V0Z" fill="#264653"/>
          </svg>
    </section>
    <!--
M
x,y	Move to the absolute coordinates x,y
m
x,y	Move to the right x and down y (or left and up if negative values)
L
x,y	Draw a straight line to the absolute coordinates x,y
l
x,y	Draw a straight line to a point that is relatively right x and down y (or left and up if negative values)
H
x	Draw a line horizontally to the exact coordinate x
h
x	Draw a line horizontally relatively to the right x (or to the left if a negative value)
V
y	Draw a line vertically to the exact coordinate y
v
y	Draw a line vertically relatively down y (or up if a negative value)
Z
(or
z
)	-->
<h3>Basic Cross Drawn with SVG</h3>
    <section class="cross">
        <svg class="icon  icon--plus" viewBox="0 0 500 500" width="500" height="500">
            <path d="M200 100 h100 v100 h100 v100 h-100 v100 h-100 v-100 h-100 v-100 h100 z" />
        </svg>
    </section>

    <!--CURVES
        Those are “Bezier Curves” and require more data do their thing.

The C command takes three points. The first two points define the location 
of two bezier curve handles.
The last of the three points is the end of the curve. 
The point where the curve should finish up.
The lowercase c command is exactly the same, 
except all three points use relative values.
-->
<h3>Basic Bezier Curve- C Command</h3>
<section class="curve-bezier">
    <svg  viewBox="0 0 200 200" width="200" height="200">
        <path d="
        M25,50
        C 25,100 
          150,100
          150,50
        " />
    </svg>
</section>
<h3>Basic Bezier Curve- S Command</h3>
<section class="curve-bezier">
    <svg  viewBox="0 0 200 200" width="200" height="200">
        <path d="
        M 25,100
        C 25,150 75,150 75,100
        S 100,25 150,75
        " />
    </svg>
</section>
<h3>Basic Quadratic Curve- Q and T Command</h3>
<!--The Q command is one of the easier ones as it only requires two points. The bezier point it wants is a “Quadratic” curve control point. It’s as if both the starting and ending point share a single point for where their control handle end.
We might as well cover T at the same time. It’s buddies with Q just like S is with C. When T comes after a Q, the control point is assumed to be a reflection of the previous one, so you only need to provide the final point.-->
<section class="curve-quadratic">
    <svg  viewBox="0 0 200 200" width="200" height="200">
        <path d="
        M 25,75
        Q 50,150 75,100
        T 150,150
        " />
    </svg>
</section>
<!--
    C
cX1,cY1 cX2,cY2 eX,eY	Draw a bezier curve based on two bezier control points and end at specified coordinates
c
Same with all relative values
S
cX2,cY2 eX,eY	Basically a C command that assumes the first bezier control point is a reflection of the last bezier point used in the previous S or C command
s
Same with all relative values
Q
cX,cY eX,eY	Draw a bezier curve based a single bezier control point and end at specified coordinates
q
Same with all relative values
T
eX,eY	Basically a Q command that assumes the first bezier control point is a reflection of the last bezier point used in the previous Q or T command
t
Same with all relative values
A
rX,rY rotation, arc, sweep, eX,eY	Draw an arc that is based on the curve an oval makes. First define the width and height of the oval. Then the rotation of the oval. Along with the end point, this makes two possible ovals. So the arc and sweep are either 0 or 1 and determine which oval and which path it will take.
a
Same with relative values for eX,eY
-->

<h3>All Curve Examples</h3>
<section class="all-examples">
    <svg viewBox="0 0 10 10" class="svg-1">
        <path d="M2,2 L8,8" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-2">
        <path d="M2,8 L5,2 L8,8" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-3">
        <path d="M2,2 Q8,2 8,8" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-4">
        <path d="M2,5 C2,8 8,8 8,5" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-5">
        <path d="M2,2 L8,2 L2,5 L8,5 L2,8 L8,8" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-6">
        <path d="M2,5 A 5 25 0 0 1 8 8" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-7">
        <path d="M2,5 S2,-2 4,5 S7,8 8,4" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-8">
        <path d="M5,2 Q 2,5 5,8" />
      </svg>
      
      <svg viewBox="0 0 10 10" class="svg-9">
        <path d="M2,2 Q5,2 5,5 T8,8" />
      </svg>
</section>
</main> 

<style lang="scss">
    svg{
        border: 1px solid red;
    }
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
    .basic{
        .icon--plus > path {
    fill: gold;
    stroke: gold;
    stroke-width: 0.1;
    stroke-linejoin: round;
}
    }
    .cross{
//         .icon {
//     display: inline-block;
//     vertical-align: middle;
// }

.icon--plus {
    background-color: cornflowerblue;
}

.icon--plus > path {
    fill: gold;
    stroke: gold;
    stroke-width: 0.1;
    stroke-linejoin: round;
}
    }

    .curve-bezier,.curve-quadratic{
        path {
     fill: transparent;
    stroke: gold;
    stroke-width: 2;
    stroke-linejoin: round;
}
    }

    .all-examples{
        display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  svg {
  width: 30%;
  height: 30%;
  background: #eee;
  margin-bottom: 5%;
}
svg polyline,
svg line,
svg path {
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: 0.2s;
}

.svg-1:hover path {
  d: path("M8,2 L2,8");
}
.svg-2:hover path {
  d: path("M2,2 L5,8 L8,2");
}
.svg-3:hover path {
  d: path("M2,2 Q2,8 8,8");
}
.svg-4:hover path {
  d: path("M2,5 C2,2 8,2 8,5");
}
.svg-5:hover path {
  d: path("M3,3 L8,3 L2,5 L8,5 L3,7 L7,7");
}
.svg-6:hover path {
  d: path("M2,5 A 5 25 -15 0 1 8 8");
}
.svg-7:hover path {
  d: path("M2,5 S2,14 4,5 S7,8 8,4")
}
.svg-8:hover path {
  d: path("M5,2 Q 8,5 5,8")
}
.svg-9:hover path {
  d: path("M2,2 Q8,2 5,5 T8,8")
}
    }
</style>
