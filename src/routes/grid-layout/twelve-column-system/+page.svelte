<main>
    <div class="wrapper">
        <header class="main-head">The header</header>
        <nav class="main-nav">
          <ul>
            <li><a href="">Nav 1</a></li>
            <li><a href="">Nav 2</a></li>
            <li><a href="">Nav 3</a></li>
          </ul>
        </nav>
        <article class="content">
          <h1>Main article area</h1>
          <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
        </article>
        <aside class="side">Sidebar</aside>
        <div class="ad">Advertising</div>
        <footer class="main-footer">The footer</footer>
      </div>
</main>



<style lang="scss">
	@import '../../../styles/vars';

    main{
        width: 90vw;
        margin: 0 auto;
    }

    .wrapper > * {
        border: 1px solid goldenrod;
        border-radius: 5px;
        background: dodgerblue;
        padding: 1rem;
    }

    .wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
.wrapper > * {
  grid-column: col-start / span 12;
}

@media (min-width: 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .content, .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}

@media (min-width: 700px) {
  .main-nav {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .side {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .ad {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
  }
}
</style>