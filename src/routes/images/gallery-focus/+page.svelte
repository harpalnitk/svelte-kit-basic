<main class='flex-center'>
    <h3>Basic</h3>
    <section class='basic'>
        <ul class="grid">
            <li class="grid__child"></li>
            <li class="grid__child"></li>
            <li class="grid__child"></li>
          </ul>
    </section>
    <h3>With Gap Problem</h3>
    <section class='basic gap-problem'>
        <ul class="grid">
            <li class="grid__child"></li>
            <li class="grid__child"></li>
            <li class="grid__child"></li>
          </ul>
    </section>
    <h3>With Gap Problem Fixed</h3>
    <section class='basic gap-fixed'>
        <ul class="grid">
            <li class="grid__child"></li>
            <li class="grid__child"></li>
            <li class="grid__child"></li>
            <li class="grid__child"></li>
            <li class="grid__child"></li>
            <li class="grid__child"></li>
          </ul>
    </section>

    <!-- Unfortunately, this trick won’t work when you want the container to be scrollable, e.g., like in some kind of horizontal slider. The pointer-events: none style would ignore not only the hover event but all the others, too. In such situations, you can wrap the .grid in another container, like this:
    
    <div class="container">
  <ul class="grid">
    <li class="grid__child"></li>
    <li class="grid__child"></li>
    <li class="grid__child"></li>
    <li class="grid__child"></li>
    <li class="grid__child"></li>
    <li class="grid__child"></li>
    <li class="grid__child"></li>
  </ul>
</div>

-->
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
            // display: flex;
            // justify-content: center;
            // align-items: center;
        }
        .basic{
            .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  grid-gap: 1rem;
}

.grid__child {
  background: rgba(0, 0, 0, .1);
  border-radius: .5rem;
  aspect-ratio: 1/1;
}
        }

        .gap-problem{
            .grid:hover .grid__child:not(:hover) {
  opacity: 0.3;
}
        }
        .gap-fixed{
            .grid {
                display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  grid-gap: 1rem;
  pointer-events: none;
  max-width: 60rem;
}


            .grid:hover .grid__child:not(:hover) {
  opacity: 0.3;
}

.grid__child {
    background: rgba(0, 0, 0, .1);
  border-radius: .5rem;
  aspect-ratio: 1/1;
  pointer-events: auto;
//   Let’s just add some cool transition on opacity and we have a ready component
  transition: opacity 300ms;
}
        }
        
    </style>