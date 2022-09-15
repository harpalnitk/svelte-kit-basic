<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Justify Content" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>justify-content</code></h2>
    <code>justify-content: flex-start;</code>
    <div class="justify-start container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>justify-content: flex-end;</code>
    <div class="justify-end container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>justify-content: center;</code>
    <div class="justify-center container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>justify-content: space-around;</code>
    <div class="justify-around container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>justify-content: space-between;</code>
    <div class="justify-between container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
	
.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

</style>