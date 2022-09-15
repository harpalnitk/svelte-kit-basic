<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Flex Basis" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>flex-basis</code></h2>

    <p>Default: <code>flex-basis: auto</code></p>
    <div class="container">
      <div>1 <br>flex-basis: auto</div>
      <div>2 <br>flex-basis: auto</div>
      <div>3 <br>flex-basis: auto</div>
      <div>4 <br>flex-basis: auto</div>
    </div>

    <p>Different <code>flex-basis</code> values (act like width on the main axis)</p>
    <div class="basis1 container">
      <div>1 <br>flex-basis: 200px</div>
      <div>2 <br>flex-basis: 300px</div>
      <div>3 <br>flex-basis: auto</div>
      <div>4 <br>flex-basis: 100px</div>
    </div>

    <p>Percent values (note that it's necessary to combine with <code>flex-shrink</code>)</p>
    <div class="basis2 container">
      <div>1 <br>flex-basis: 25%</div>
      <div>2 <br>flex-basis: auto</div>
      <div>3 <br>flex-basis: auto</div>
      <div>4 <br>flex-basis: 50%</div>
    </div>
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
	
.basis1 div:nth-child(1) {
  flex-basis: 200px;
}

.basis1 div:nth-child(2) {
  flex-basis: 300px;
}

.basis1 div:nth-child(4) {
  flex-basis: 100px;
}

.basis2 div:nth-child(1) {
  flex-basis: 25%;
}

.basis2 div:nth-child(4) {
  flex-basis: 50%;
}

</style>
