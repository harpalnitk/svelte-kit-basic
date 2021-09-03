<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Align Self" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>align-self</code></h2>

    <code>align-self: flex-start;</code>
    <div class="container outlined">
      <div>1</div>
      <div class="self-start">align-self: flex-start</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-self: flex-end;</code>
    <div class="container outlined">
      <div>1</div>
      <div class="self-end">align-self: flex-end</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-self: center;</code>
    <div class="container outlined">
      <div>1</div>
      <div class="self-center">align-self: center</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-self: stretch;</code>
    <div class="container outlined">
      <div>1</div>
      <div class="self-stretch">align-self: stretch</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-self: baseline;</code>
    <div class="container outlined baseline">
      <div>1</div>
      <div class="self-baseline">align-self: baseline</div>
      <div class="self-baseline">align-self: baseline</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
	@import 'index';
	
.self-start {
  -ms-align-self: flex-start;
  align-self: flex-start;
}

.self-end {
  -ms-align-self: flex-end;
  align-self: flex-end;
}

.self-center {
  -ms-align-self: center;
  align-self: center;
}

.self-stretch {
  -ms-align-self: stretch;
  align-self: stretch;
}

.self-baseline {
  -ms-align-self: baseline;
  align-self: baseline;
}

.container.baseline {
  width: 800px;
}

.container.baseline div:nth-child(2) {
  font-size: 24px;
}

.container.baseline div:nth-child(3) {
  font-size: 14px;
}

.container.baseline div:nth-child(4) {
  font-size: 30px;
}

.container.baseline div:nth-child(5) {
  font-size: 8px;
}

.container.baseline div:nth-child(6) {
  font-size: 50px;
}

</style>
