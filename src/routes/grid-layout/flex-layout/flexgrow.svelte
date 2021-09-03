<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Flex Grow" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>flex-grow</code></h2>

    <p>Default: <code>flex-grow: 0</code> (remaining space not filled)</p>
    <div class="container">
      <div>1 <br>flex-grow: 0</div>
      <div>2 <br>flex-grow: 0</div>
      <div>3 <br>flex-grow: 0</div>
      <div>4 <br>flex-grow: 0</div>
    </div>

    <p>3 allowed to take remaining space (<code>flex-grow: 1</code>)</p>
    <div class="grow1 container">
      <div>1 <br>flex-grow: 0</div>
      <div>2 <br>flex-grow: 0</div>
      <div>3 <br>flex-grow: 1</div>
      <div>4 <br>flex-grow: 0</div>
    </div>

    <p>Remaining space distributed equally (all have same <code>flex-grow</code>)</p>
    <div class="grow2 container">
      <div>1 <br>flex-grow: 1</div>
      <div>2 <br>flex-grow: 1</div>
      <div>3 <br>flex-grow: 1</div>
      <div>4 <br>flex-grow: 1</div>
    </div>

    <p>3 gets 2/5 (40%) of remaining space (does not mean that 3 will be twice as wide)</p>
    <div class="grow3 container">
      <div>1 <br>flex-grow: 1</div>
      <div>2 <br>flex-grow: 1</div>
      <div>3 <br>flex-grow: 2</div>
      <div>4 <br>flex-grow: 1</div>
    </div>

    <p>3 gets 4/7 of remaining space</p>
    <div class="grow4 container">
      <div>1 <br>flex-grow: 1</div>
      <div>2 <br>flex-grow: 1</div>
      <div>3 <br>flex-grow: 4</div>
      <div>4 <br>flex-grow: 1</div>
    </div>

</main>

<style lang="scss">
	@import '../../../styles/vars';
	@import 'index';
	
.grow1 div:nth-child(3) {
  flex-grow: 1;
}

.grow2 div, .grow3 div, .grow4 div {
  flex-grow: 1;
}

.grow3 div:nth-child(3) {
  flex-grow: 2;
}

.grow4 div:nth-child(3) {
  flex-grow: 4;
}
</style>
