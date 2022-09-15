<script>
   
</script>



<main>
    <div class="sidebar">
        <h2 class="title-with-border text-accent-400">Shop TODAY</h2>
        <ul class="content-snippets">
          <li class="content-snippet">
            <a href="#">
              <article>
                <img width="100px" height="100px" src="https://unsplash.it/100" alt="">
                <h3 class="text-small text-accent-400">Home</h3>
                <p>Get ready for fall with cozy staples, luxe bags, more essentials - up to 85% off</p>
              </article>
              <a href="#" class="btn btn--accent"></a>
            </a>
          </li>
          <li class="content-snippet">
            <a href="#">
              <article>
                <img width="100px" height="100px" src="https://unsplash.it/102" alt="">
                <h3 class="text-small text-accent-400">Style</h3>
                <p>Lululemon secretly marked down these 15 favotires - starting at $19</p>
              </article>
              <a href=" #" class="btn btn--accent">
              </a>
            </a>
          </li>
          <li class="content-snippet">
            <a href="#">
              <article>
                <img width="100px" height="100px" src="https://unsplash.it/105" alt="">
                <h3 class="text-small text-accent-400">Kitchen</h3>
                <p>This mini waffle maker made my mornings so much easier - but it's selling out</p>
              </article>
              <a href=" #" class="btn btn--accent">
              </a>
            </a>
          </li>
        </ul>
      </div>

      <section class='zig-zag-border flex-center'>
<div class="box"></div>
      </section>
    
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    --colors-accent-400: 358 72% 53%;
}
main{
    background: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.sidebar {
  margin: 5em;
  max-width: 18em;
}

.content-snippets {
  padding: 2rem;
  background: white;

  line-height: 1;

  list-style: none;

  a {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  li {
    border-top: 2px dotted rgb(black, .2);
    padding: 1em 0;
  }

  article {
    display: grid;
    gap: .5em;
    grid-template-columns: 100px 1fr;
  }

  h3 {
    text-transform: uppercase;
    font-family: sans-serif;
  }

  img {
    border-radius: 50%;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
}
.title-with-border{
    --left-offset: 2em;
    --fs: 1.953rem;
    --offset-top: .5em;
    position: relative;
    width: max-content;
    margin-bottom: -5em;
    color: hsl(var(--colors-accent-400));
    border: 1px solid hsl(var(--colors-accent-400));
    border-right: 0;
    padding: var(--offset-top) var(--left-offset) 5.5em;
    transform: translateX(calc(-1 * var(--left-offset)));
    line-height: 1;
    font-size: var(--fs);
    font-style: italic;
}
.title-with-border + *{
    position: relative;
    z-index: 2;
}
.title-with-border::before,
.title-with-border::after{
  
    content: '';
    position: absolute;
    background-color: currentColor;
}
.title-with-border::before{
right: 0;
top: 0;
height: calc(var(--fs)/2 + var(--offset-top));
width: 1px;
}
.title-with-border::after{
top: calc(var(--fs)/2 + var(--offset-top));
right: 0;
width: .65em;
height: 1px;
}

section.zig-zag-border{
  padding: 1rem;
  min-height: 80vh;
  width: 100%;
  background: #f8f8f8;
  .box{
 position: relative;
 width: 300px;
 height: 400px;
 background: #62baea;
  }
  .box::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: 
    linear-gradient(-135deg,#f8f8f8 12px, transparent 0%),
    linear-gradient(135deg,#f8f8f8 12px, transparent 0%);
    background-size: 24px;
  }
  .box::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: 
    linear-gradient(-45deg,#f8f8f8 12px, transparent 0%),
    linear-gradient(45deg,#f8f8f8 12px, transparent 0%);
    background-size: 24px;
  }
}

</style>