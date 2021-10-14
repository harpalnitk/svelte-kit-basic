<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Order" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>order</code></h2>

    <p>Default order</p>
    <div class="container">
      <div>1 <br>order: 0</div>
      <div>2 <br>order: 0</div>
      <div>3 <br>order: 0</div>
      <div>4 <br>order: 0</div>
    </div>

    <p>2 and 3 with custom order</p>
    <div class="order1 container">
      <div>1 <br>order: 0</div>
      <div>2 <br>order: -1</div>
      <div>3 <br>order: 1</div>
      <div>4 <br>order: 0</div>
    </div>

    <p>All with custom order</p>
    <div class="order2 container">
      <div>1 <br>order: 3</div>
      <div>2 <br>order: 2</div>
      <div>3 <br>order: 1</div>
      <div>4 <br>order: 2</div>
    </div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
	@import 'index';
	
.order1 div:nth-child(2) {
  order: -1;
}

.order1 div:nth-child(3) {
  order: 1;
}

.order2 div:nth-child(1) {
  order: 3;
}

.order2 div:nth-child(2) {
  order: 2;
}

.order2 div:nth-child(3) {
  order: 1;
}

.order2 div:nth-child(4) {
  order: 2;
}

</style>
