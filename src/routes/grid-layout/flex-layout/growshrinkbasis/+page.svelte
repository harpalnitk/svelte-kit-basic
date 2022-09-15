<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Grow Shrink Basis" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>flex</code></h2>

    <p>Default: <code>flex: 0 1 auto</code> (grow, shrink, basis)</p>
    <div class="container">
      <div>1 <br>flex: 0 1 auto</div>
      <div>2 <br>flex: 0 1 auto</div>
      <div>3 <br>flex: 0 1 auto</div>
      <div>4 <br>flex: 0 1 auto</div>
    </div>

    <p><code>flex: 1</code> is the same as <code>flex: 1 1 0%</code></p>
    <div class="gallery1 container">
      <div>1 <br>flex: 1</div>
      <div>2 <br>flex: 1</div>
      <div>3 <br>flex: 1</div>
      <div>4 <br>flex: 1</div>
      <div>5 <br>flex: 1</div>
      <div>6 <br>flex: 1</div>
      <div>7 <br>flex: 1</div>
      <div>8 <br>flex: 1</div>
    </div>

    <p>Flex items stick to 25% width (works due to <code>flex-wrap: nowrap</code>, thus only for one row)</p>
    <div class="gallery2 container">
      <div>1 <br>flex: 1 1 25%</div>
      <div>2 <br>flex: 1 1 25%</div>
      <div>3 <br>flex: 1 1 25%</div>
      <div>4 <br>flex: 1 1 25%</div>
    </div>

    <p>Example from <code>flex-basis</code> section, now combined with other properties</p>
    <div class="gallery3 container">
      <div>1 <br>flex: 0 1 25%</div>
      <div>2 <br>flex: 1 1 auto</div>
      <div>3 <br>flex: 1 1 auto</div>
      <div>4 <br>flex: 0 1 50%</div>
    </div>

</main>

<style lang="scss">
	@import '../../../styles/vars';
	@import 'index';
	
.gallery1 div {
  flex: 1;  /* = flex: 1 1 0% */
}

.gallery2 {
  flex-wrap: nowrap;
}

.gallery2 div {
  flex: 1 1 25%;
}

.gallery3 {
  flex-wrap: nowrap;
  flex: 1 1 auto;
}

.gallery3 div:nth-child(1) {
  flex: 0 1 25%;
}

.gallery3 div:nth-child(4) {
  flex: 0 1 50%;
}

</style>
