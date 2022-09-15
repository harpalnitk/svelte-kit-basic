<main class='flex-center'>
    <section class='first'>
        <div class="backdrop">
            <p class="shapes">🍃</p>
            <p class="shapes">🍂</p>
            <p class="shapes">\</p>
          </div>
    </section>
    <section class="second">
        <!-- I wanted the background-image on the backdrop to be 
            a bit brighter, so I also added filter: brightness(1.6).
             Another way to do this is with background-blend-mode
              instead, where all the different backgrounds of an
               element are blended and, instead of adding the
                emojis as separate elements, we add them as
                 background images. -->
        <div class="backdrop"></div>
    </section>
    <!-- Animating the light source -->
    <section class="third">
        <div class="backdrop">
            <p class="shapes">🍃</p>
            <p class="shapes">🍂</p>
            <p class="shapes">\</p>
          </div>
          
          <p class="content"><img width="70px" style="float: left;margin-right: 10px;" src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=100&q=60" alt="">Top ten tourists spots for the summer vacation <br><br><i style="font-weight: normal;">Here are the most popular places...</i></p>
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
            min-height: 100vh;
        }

        .first{
            .backdrop {
  display: grid;
}
            .backdrop {
  background: center / cover no-repeat
    url("https://images.unsplash.com/photo-1531685250784-7569952593d2?w=500&q=60");
  width: 400px;
  height: 240px;
  overflow: hidden;
  border-radius: 20px;
  filter: brightness(1.3);
}

.shapes {

    // These are the key properties the emojis should have — transparent 
    // color, black semi-transparent background (using the alpha channel
    //  in rgba()), blurry white text-shadow with a nice large font-size,
    //   and finally, a mix-blend-mode to smooth things out.
  color: transparent;
  background-color: rgba(0, 0, 0, 0.3);// Use alpha transparency
  text-shadow: 0 0 40px white;// Blurry white shadow
  mix-blend-mode: multiply;
//   mix-blend-mode sets how an element’s colors blend
//  with that of its container element’s content. 
//  The multiply value causes the backdrop of an element
//   to show through the element’s light colors and keeps
//    dark colors the same, making for a nicer and more 
//    natural dappled light effect.
  font: bolder 320pt/320pt monospace;
  margin-top: -100px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.backdrop > * {
  grid-area: 1/1;
}
/* for chrome */
@supports (-webkit-app-region:none) {
  .shapes {
    text-shadow: 0 0 14px white;
  }
}
        }


        .second{
            .backdrop {
  width: 400px;
  height: 240px;
  overflow: hidden;
  border-radius: 20px;
  background: center / cover no-repeat
      url("https://images.unsplash.com/photo-1531685250784-7569952593d2?w=500&q=60"),
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'> <foreignObject width='400px' height='240px'> <div xmlns='http://www.w3.org/1999/xhtml' style='font: bolder 720pt/220pt monospace;color:transparent;text-shadow: 0 0 40px floralwhite;background: rgba(0, 0, 0, 0.3);'>🌾</div> </foreignObject> </svg>"),
    // Notice that I used a different emoji in that last example
    //  as well as floralwhite for some color that’s less
    //   intense than pure white for the light. Here’s one
    //    of the emoji background images unwrapped:
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'> <foreignObject width='400px' height='240px'> <div xmlns='http://www.w3.org/1999/xhtml' style='font: bolder 720pt/220pt monospace;color:transparent;text-shadow: 0 0 40px floralwhite;background: rgba(0, 0, 0, 0.3);'>🍃</div> </foreignObject> </svg>");
  background-blend-mode: multiply;
  filter: brightness(1.3);
}

// .backdrop > * {
//   grid-area: 1/1;
// }


.backdrop {
  display: grid;
}
/* for chrome */

@supports(-webkit-app-region:none) {
  .backdrop {
    background: center / cover no-repeat
      url("https://images.unsplash.com/photo-1531685250784-7569952593d2?w=500&q=60"),
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'> <foreignObject width='400px' height='240px'> <div xmlns='http://www.w3.org/1999/xhtml' style='font: bolder 720pt/220pt monospace;color:transparent;text-shadow: 0 0 6px floralwhite;background: rgba(0, 0, 0, 0.3);'>🌾</div> </foreignObject> </svg>"),
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'> <foreignObject width='400px' height='240px'> <div xmlns='http://www.w3.org/1999/xhtml' style='font: bolder 720pt/220pt monospace;color:transparent;text-shadow: 0 0 6px floralwhite;background: rgba(0, 0, 0, 0.3);'>🍃</div> </foreignObject> </svg>");
  }
}
/* firefox */
@supports (-moz-user-focus:none){
  .backdrop{
    filter: brightness(1.1)
  }
}
        }

        .third{
            display: grid;
        }
        .third > *{
  grid-area: 1/1;
}

        .third{
            .backdrop {
  background: center / cover no-repeat
    url("https://images.unsplash.com/photo-1556993683-f5dcad606dd0?w=500&q=60");
  width: 400px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  filter: brightness(1.7);
  cursor: default;
}

.shapes {
  color: transparent;
  background-color: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 20px beige;
  mix-blend-mode: multiply;
  font: bolder 320pt/320pt monospace;
  margin-top: -100px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.backdrop:hover > .shapes:nth-of-type(1) {
  animation: 2s ease-in-out infinite alternate move;
}

.backdrop:hover > .shapes:nth-of-type(2):hover {
  animation: 4s ease-in-out infinite alternate move1;
}

.content {
  isolation: isolate;
  width: 300px;
  height: 100px;
  background-image: linear-gradient(45deg, white, beige, white, beige);
  padding: 25px;
  border-radius: 10px;
  font-family: "Gentium Basic", cursive;
  font-weight: bold;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}


.backdrop > * {
  grid-area: 1/1;
}


.backdrop {
  display: grid;
}
@keyframes move {
  from {
    text-indent: -20px;
  }
  to {
    text-indent: 20px;
  }
}

@keyframes move1 {
  from {
    text-indent: -60px;
  }
  to {
    text-indent: 40px;
  }
}

/* for chrome */
@supports (-webkit-app-region:none) {
  .shapes {
    text-shadow: 0 0 10px beige;
  }
}
        }
        
    </style>