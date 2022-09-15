<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Align-Items" path="/grid-layout/flex-layout" />

<main>
	<h2>Property: <code>align-items</code></h2>

    <code>align-items: flex-start;</code>
    <div class="align-start container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-items: flex-end;</code>
    <div class="align-end container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-items: center;</code>
    <div class="align-center container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-items: stretch;</code>
    <div class="align-stretch container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <code>align-items: baseline;</code>
    <div class="align-baseline container outlined">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
	@import 'index';
	
.align-start {
  -ms-align-items: flex-start;
  align-items: flex-start;
}

.align-end {
  -ms-align-items: flex-end;
  align-items: flex-end;
}

.align-center {
  -ms-align-items: center;
  align-items: center;
}

.align-stretch {
  -ms-align-items: stretch;
  align-items: stretch;
}

.align-baseline {
  -ms-align-items: baseline;
  align-items: baseline;
}

.align-baseline div:nth-child(2) {
  font-size: 24px;
}

.align-baseline div:nth-child(3) {
  font-size: 14px;
}

.align-baseline div:nth-child(4) {
  font-size: 30px;
}

</style>
