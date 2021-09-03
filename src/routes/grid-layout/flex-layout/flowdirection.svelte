<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Flow Direction" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>flex-direction</code></h2>

    <code>flex-direction: row;</code>
    <div class="row container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>flex-direction: row-reverse;</code>
    <div class="row-reverse container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>flex-direction: column;</code>
    <div class="column container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>flex-direction: column-reverse;</code>
    <div class="column-reverse container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
	@import 'index';
	
.row, .row-reverse, .column, .column-reverse {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin-bottom: 50px;
}

.row {
  flex-direction: row;
}

.row-reverse {
  flex-direction: row-reverse;
}

.column {
  flex-direction: column;
}

.column-reverse {
  flex-direction: column-reverse;
}

</style>
