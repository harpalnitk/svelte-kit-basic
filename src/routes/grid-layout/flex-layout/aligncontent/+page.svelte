<script>
      import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Align-Content' path='/grid-layout/flex-layout'></BasicPage>
<main>
    <h2>Property: <code>align-content</code></h2>

    <code>align-content: flex-start;</code>
    <div class="align-start container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>

    <code>align-content: flex-end;</code>
    <div class="align-end container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>

    <code>align-content: center;</code>
    <div class="align-center container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>

    <code>align-content: space-around;</code>
    <div class="align-around container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>

    <code>align-content: space-between;</code>
    <div class="align-between container outlined">
      <div>1</div> <div>2</div> <div>3</div> <div>4</div>
      <div>5</div> <div>6</div> <div>7</div> <div>8</div>
      <div>9</div> <div>10</div> <div>11</div> <div>12</div>
    </div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
    @import 'index';
    .container div {
  padding-top: 10px;
  padding-bottom: 10px;
}

.container {
  flex-wrap: wrap;
  align-items: flex-start;
}

.align-start {
  align-content: flex-start;
}

.align-end {
  align-content: flex-end;
}

.align-center {
  align-content: center;
}

.align-around {
  align-content: space-around;
}

.align-between {
  align-content: space-between;
}
</style>

