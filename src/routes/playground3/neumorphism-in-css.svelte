<main class='flex-center'>
    <h3>Basic</h3>
    <section class='basic'>
        
        <div class="element"></div>
    </section>
    
    <h2>Four Variations based on Direction of Light Source</h2>
    <section class="four-variations">
        <div class="element element-1">Top-Left</div>
<div class="element element-2">Top-Right</div>
<div class="element element-3">Bottom-Right</div>
<div class="element element-4">Bottom-Left</div>
    </section>

<h3>Pressed or Elevated based on inset value</h3>
    <section class="inset">
        <div class="element element-1">Drop Shadow</div>
<div class="element element-2">Inset Shadow</div>
    </section>


    <!-- On the other hand, using subtle gradients can 
        change how the surface is perceived. 
        As with the box-shadow property, there
         is alight and a dark value in a gradient.
          The gradient angle needs to be adjusted 
          to match the light source. We have the 
          following two variations when using gradients:

Convex surface variation:  The surface curves outwards
 where the gradient’s lighter section is aligned with
  the shadow’s lighter section, and the gradient’s
   darker section is aligned to the shadow’s darker
    section.
Concave surface variation:  The surface curves inward
 where the gradient’s lighter section is aligned to th
 e shadow’s darker section, and the gradient’s darker 
 section is aligned to the shadow’s lighter section.

 .element {
  background: linear-gradient(var(--bg-angle), var(--bg-start), var(--bg-end));
  box-shadow: var(--h1) var(--v1) var(--color-dark), 
              var(--h2) var(--v2) var(--color-light);
}
 -->
 <h3>Convex or Concave</h3>
    <section class="surface-gradient-angle">
        <div class="element element-1">Flat</div>
        <div class="element element-2">Convex</div>
        <div class="element element-3">Concave</div>
    </section>

    <h3>Buttons</h3>
    <section class="buttons">
        <section>
            <h2>CTA - Default</h2>
            <div class="neumorphic variation1">
              <span><strong>★</strong></span>
            </div>
          </section>
          <section>
            <h2>CTA - Pressed</h2>
            <div class="neumorphic neumorphic--pressed variation1 pressed">
              <span><strong>★</strong></span>
            </div>
          </section>
          
          <section>
            <h2>Toggle - Default</h2>
            <div class="neumorphic variation2">
              <span><strong>Auto</strong></span>
            </div>
          </section>
          <section>
            <h2>Toggle - Pressed</h2>
            <div class="neumorphic neumorphic--pressed variation2 pressed">
              <span><strong>Auto</strong></span>
            </div>
          </section>
    </section>


    <!-- Let’s take a look at some more HTML elements.
         One of the downsides of neumorphism that has 
         been pointed out is that it shouldn’t be
          applied to elements that can have various
           states, like inputs, select elements,
            progress bars, and others. These states include:

User interaction: Hover, active, focus, visited
Validation states: Error, success, warning, disabled -->
    </main>
    
    
    
    
    
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: #f8f8f8;
            flex-direction: column;
            h3{
                font-weight: 700;
                font-size: 2em;
                margin-bottom: 1rem;
            }
        }
        section{
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .basic{
            background-color: #afd275;
            .element {
  align-items: center;
  background-color: #afd275;
  //For neumorphism, it’s required to keep the shadows soft and low contrast.
  
  //a core part of neumorphic elements is the
//    use of two shadows: a light shadow and a dark 
//    shadow. That’s how we get that sort of
//     “raised” effect and we can create
//      variations by changing the “light source”
//       of the shadows.
  box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  display: flex;
  height: 200px;
  justify-content: center;
  margin-right: 4rem;
  width: 200px;
}
        }

        .four-variations{
            background: #afd275;
            display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100vh;
  justify-content: center;
            .element {
  align-items: center;
  background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
  border-radius: 50px;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 100%;
}

//box-shadow: var(--h1) var(--v1) var(--blur1) var(--color-dark), 
//            var(--h2) var(--v2) var(--blur2) var(--color-light);

// Light Source	Positive Values	Negative Values
// Top Left  	--h1, --v1	--h2, --v2
// Top Right	--h2, --v1	--h1, --v2
// Bottom Left	--h1, --v2	--h2, --v1
// Bottom Right	--h2, --v2	--h1, --v1



//top-left
.element-1 {
  box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
}
//top-right
.element-2 {
  box-shadow:
    -8px 8px 12px 0 rgba(0, 0, 0, 0.3),
    12px -12px 16px rgba(255, 255, 255, 0.25);
}
//bottom-right
.element-3 {
  box-shadow: 
    -8px -8px 12px 0 rgba(0, 0, 0, 0.3),
    12px 12px 16px rgba(255, 255, 255, 0.25);
}
//bottom-left
.element-4 {
  box-shadow: 
    8px -8px 12px 0 rgba(0, 0, 0, 0.3),
    -12px 12px 16px rgba(255, 255, 255, 0.25);
}

        }


        .inset{
            background-color: #afd275;
  display: flex;

  .element {
  align-items: center;
  background-color: #afd275;
  border-radius: 50px;
  display: flex;
  height: 200px;
  justify-content: center;
  margin-right: 4rem;
  width: 200px;
}

.element-1 {
  box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
}

.element-2 {
  box-shadow: 
    12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,
    -8px -8px 12px 0 rgba(0, 0, 0, .25) inset;
}
        }


        .surface-gradient-angle{
            background-color: #afd275;
            gap:1rem;
            .element {
  align-items: center;
//   background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
   -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 200px;
}

.element-1 {
  background: #afd275;
}

.element-2 {
  background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
}

.element-3 {
  background: linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
}
        }


        .buttons{
            padding: 3rem 4rem 0;
  background-color: #e0e0e0;
  color: #999;
  display: flex;
  flex-wrap: wrap;
  max-width: 680px;
  font-family: "Arial", sans-serif;
  margin: 0 auto;
            section {
  flex: 1 1 50%;
  padding-bottom: 3rem;
}

h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.neumorphic {
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
  font-size: 5rem;
  width: 200px;
  height: 200px;
  border-radius: 40px;
  overflow: hidden;
  padding: 1.3rem;
  display: flex;
}

.neumorphic--pressed {
  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
}

.variation1 {
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.2),
    rgba(255, 255, 255, 0.3)
  );
}

.variation1 span {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  padding: 0.65rem;
  box-shadow: inset 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
    inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4);
}

.variation1 strong {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  background-color: #f13c20;
  color: white;
}

.variation1.pressed strong {
  background-color: #bb3c20;
}

.variation2 {
  justify-content: space-around;
  align-items: center;
}

.variation2 span {
  display: block;
  padding-bottom: 1.5rem;
  position: relative;
  font-size: 3rem;
}

.variation2 span::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  height: 0.3rem;
  border-radius: 1rem;
  width: 50%;
  margin: 0 auto;
  background-color: currentColor;
}

.variation2.pressed {
  color: #5ab9ea;
}
        }
        
    </style>