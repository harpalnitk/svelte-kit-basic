<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Flex Shrink" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>flex-shrink</code></h2>

    <p>Default: <code>flex-shrink: 1</code> (flex items are allowed to shrink to some degree)</p>
    <div class="container">
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 1</div>
    </div>

    <p>3, 4, and 5 are no longer allowed to shrink (<code>flex-shrink: 0</code>)</p>
    <div class="shrink1 container">
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 0</div>
      <div>flex-<br>shrink: 0</div>
      <div>flex-<br>shrink: 0</div>
      <div>flex-<br>shrink: 1</div>
    </div>

    <p>3 and 4 are allowed to shrink more compared to other flex items</p>
    <div class="shrink2 container">
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 5</div>
      <div>flex-<br>shrink: 1</div>
      <div>flex-<br>shrink: 1</div>
    </div>
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
	
.container {
  flex-wrap: nowrap;
  border: 1px solid #fff;
  border-radius: 2px;
}

.container div {
  flex-basis: 200px;
}

.shrink1 div:nth-child(3),
.shrink1 div:nth-child(4),
.shrink1 div:nth-child(5) {
  flex-shrink: 0;
}

.shrink2 div:nth-child(3) {
  flex-shrink: 5;
}

</style>
