<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Holy Grail Layout" path="/grid-layout/flex-layout" />

<main class='container' id='holygrail'>
	<header id="header"> Header </header>
    <main id="main" class="container">
      <article id="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique assumenda voluptatibus debitis quidem dolorem, provident reiciendis, perspiciatis ut consequatur illum aliquid repudiandae aperiam. Iusto reiciendis deserunt illo a harum dolor magni, sunt iure mollitia facere nulla repellat error at, accusamus quam exercitationem rerum fugit blanditiis voluptas odio aperiam temporibus! Delectus inventore eos atque vitae, sunt ea qui assumenda, quos aut aperiam nostrum iusto temporibus in rerum adipisci quidem et consequatur error quod, aliquam minima hic velit similique nemo. Aut voluptatibus reprehenderit autem harum adipisci libero animi quod sapiente veniam fugiat, soluta inventore omnis rerum facere nobis commodi placeat cupiditate assumenda.
      </article>
      <aside id="secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure nulla eaque, explicabo vel fugiat illum, eius debitis cupiditate. Doloremque!</aside>
      <aside id="tertiary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius eaque ullam eum, dolore ab quasi unde dicta obcaecati libero at placeat facilis dolor natus. Iure, quae consectetur enim eos.</aside>
    </main>
    <footer id="footer">Footer</footer>
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
	#holygrail {
  min-height: 100vh;
  flex-flow: column nowrap;
}

#main {
  flex-flow: row nowrap;
  display: flex;
  flex: 1;
}

#content {
  flex: 3 1 auto;
}

#secondary, #tertiary {
  flex: 1 2 auto;
}

#secondary {
  order: -1;
}

</style>