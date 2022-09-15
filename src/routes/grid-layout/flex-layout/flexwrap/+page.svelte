<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Flex Wrap" path="/grid-layout/flex-layout" />

<main>
	
    <h2>Property: <code>flex-wrap</code></h2>

    <code>flex-wrap: nowrap;</code>
    <div class="nowrap container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>

    <code>flex-wrap: wrap;</code>
    <div class="wrap container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>

    <code>flex-wrap: wrap-reverse;</code>
    <div class="wrap-reverse container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
	@import 'index';
	body {
  padding: 200px;
}

.nowrap {
  flex-wrap: nowrap;
}

.wrap {
  flex-wrap: wrap;
}

.wrap-reverse {
  flex-wrap: wrap-reverse;
}

</style>
