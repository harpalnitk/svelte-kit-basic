<main>
    <h3>Scroll Shadows to hint of more content</h3>
    <section class='white'>
      
        <div>
            <ul class="scroll-shadows">
              <li>Lorem, ipsum.</li>
              <li>Eligendi, repudiandae.</li>
              <li>Dolor, vel.</li>
              <li>Obcaecati, praesentium.</li>
              <li>Impedit, tenetur.</li>
              <li>Exercitationem, repellat!</li>
              <li>Aut, asperiores!</li>
              <li>Dolor, fuga.</li>
              <li>Ab, aliquid!</li>
              <li>Adipisci, totam.</li>
              <li>Error, dicta.</li>
              <li>Saepe, vero?</li>
              <li>Eveniet, dolorem!</li>
              <li>Id, tempora!</li>
              <li>Voluptate, consectetur?</li>
              <li>Voluptatibus, omnis.</li>
              <li>Eius, fugit.</li>
              <li>Quia, non!</li>
              <li>At, laudantium?</li>
              <li>Commodi, maiores!</li>
            </ul>
          </div>
    </section>
    <h3>Scroll ShadowsDark Mode</h3>
    <section class='dark'>
      
        <div>
            <ul class="scroll-shadows">
              <li>Lorem, ipsum.</li>
              <li>Eligendi, repudiandae.</li>
              <li>Dolor, vel.</li>
              <li>Obcaecati, praesentium.</li>
              <li>Impedit, tenetur.</li>
              <li>Exercitationem, repellat!</li>
              <li>Aut, asperiores!</li>
              <li>Dolor, fuga.</li>
              <li>Ab, aliquid!</li>
              <li>Adipisci, totam.</li>
              <li>Error, dicta.</li>
              <li>Saepe, vero?</li>
              <li>Eveniet, dolorem!</li>
              <li>Id, tempora!</li>
              <li>Voluptate, consectetur?</li>
              <li>Voluptatibus, omnis.</li>
              <li>Eius, fugit.</li>
              <li>Quia, non!</li>
              <li>At, laudantium?</li>
              <li>Commodi, maiores!</li>
            </ul>
          </div>
    </section>
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

.white{
    .scroll-shadows {
  max-height: 200px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;

//There are two types of shadows at work here:
//Regular shadows
//Cover shadows
//All of the shadows are created with background 
// gradients. For example, a non-repeatingradial-gradient
//  sized and placed at the center top of the 
//  element to look like a shadow.
//The cover shadows are placed on top of those regular
//  shadows, by way of the stacking order of multiple 
//  backgrounds, and capable of entirely hiding them

//The regular shadows use the default value of
//  background-attachment, which is scroll, which
//   you’ll be familiar with because it’s the way 
//   backgrounds normally work in that you don’t 
//   really think about it. The backgrounds are 
//   just there, positioned in the visible portion
//    of the element, and don’t move around as the
//     element scrolls

//The overflow shadows us the unusual background-attachment:
//  local; which places them at the top and bottom 
//  edges of the element factoring in the entire 
//  scroll height of the element. They move as the 
//  elements scroll position moves

//Scroll down a little, and the cover sticks to 
// the very top of the element, now hidden by overflow,
//  so you can’t see the cover anymore and the shadow
//   reveals itself. At the bottom, you’ve been able 
//   to see the shadow the whole time because the cover
//    is stuck to the very bottom of the element and
//     the shadow is stuck to the bottom of the visible
//      area. Scroll all the way to the bottom and
//       the cover will overlap the bottom shadow,
//        hiding it.

  background:
    /* Shadow Cover TOP */
    linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ) center top,
    
    /* Shadow Cover BOTTOM */
    linear-gradient(
      rgba(255, 255, 255, 0), 
      white 70%
    ) center bottom,
    
    /* Shadow TOP */
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center top,
    
    /* Shadow BOTTOM */
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center bottom;
  
  background-repeat: no-repeat;
  //width height
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
}



/* Not important to the functionality, just for this particular demo */
.scroll-shadows {
  list-style: none;
  padding-right: 0.5rem;
}
.scroll-shadows > * {
  padding: 0.2rem;
}


.scroll-shadows {
  --scrollbarBG: transparent;
  --thumbBG: #90a4ae;

  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.scroll-shadows::-webkit-scrollbar {
  width: 6px;
}
.scroll-shadows::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
.scroll-shadows::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
}


.dark{
    background: #455A64;
    div {
  background: #455A64;
  color: #CFD8DC;
 // height: 100vh;
  display: grid;
  place-items: center;
  font: 500 100% system-ui, sans-serif;
}


    .scroll-shadows {
  --bgRGB: 73, 89, 99;
  --bg: rgb(var(--bgRGB));
  --bgTrans: rgba(var(--bgRGB), 0);
  
  --shadow: rgba(41, 50, 56, 0.5);
  
  max-height: 200px;
  overflow: auto;

  background:
    /* Shadow Cover TOP */
    linear-gradient(
      var(--bg) 30%,
      var(--bgTrans)
    ) center top,
    
    /* Shadow Cover BOTTOM */
    linear-gradient(
      var(--bgTrans), 
      var(--bg) 70%
    ) center bottom,
    
    /* Shadow TOP */
    radial-gradient(
      farthest-side at 50% 0,
      var(--shadow),
      rgba(0, 0, 0, 0)
    ) center top,
    
    /* Shadow BOTTOM */
    radial-gradient(
      farthest-side at 50% 100%,
      var(--shadow),
      rgba(0, 0, 0, 0)
    ) center bottom;
  
  background-repeat: no-repeat;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
}



/* Not important to the functionality, just for this particular demo */
.scroll-shadows {
  list-style: none;
  padding-right: 0.5rem;
}
.scroll-shadows > * {
  padding: 0.2rem;
}



.scroll-shadows {
  --scrollbarBG: transparent;
  --thumbBG: #90a4ae;

  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
.scroll-shadows::-webkit-scrollbar {
  width: 6px;
}
.scroll-shadows::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
.scroll-shadows::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
}
   
</style>