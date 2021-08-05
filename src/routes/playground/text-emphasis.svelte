<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Text Emphasis Property' path='/playground'></BasicPage>


<main>
    <h2><code>filled</code></h2>
    <h2><code>open</code></h2>
    <h2><code>dot</code></h2>
    <h2><code>circle</code></h2>
    <h2><code>double-circle</code></h2>
    <h2><code>triangle</code></h2>
    <h2><code>sesame</code></h2>
    <h2><code>none</code></h2>
    <h2><code>string</code></h2>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}

main {
  background: #ff7a18;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  margin: auto;
  max-width: clamp(300px, 75%, 700px);
}

h2 {
  align-items: center;
  background: #fff;
  border: 1px solid #dd2c00;
  display: flex;
  font-size: 95%;
  height: 150px;
  justify-content: center;
  width: 150px;
}

h2:nth-child(1) {
    text-emphasis: filled;
    -webkit-text-emphasis: filled;
    text-emphasis-position: over right;
    -webkit-text-emphasis-position: over right;
}
h2:nth-child(2) {
  text-emphasis:open;
  -webkit-text-emphasis: open;
  text-emphasis-position: over left;
    -webkit-text-emphasis-position: over left;
}
h2:nth-child(3) {
  text-emphasis:dot;
  -webkit-text-emphasis: dot;
  text-emphasis-position: under left;
    -webkit-text-emphasis-position: under left;
}
h2:nth-child(4) {
  text-emphasis:circle;
  -webkit-text-emphasis: circle;
  text-emphasis-position: under right;
    -webkit-text-emphasis-position: under right;
}
h2:nth-child(5) {
  text-emphasis:double-circle;
  -webkit-text-emphasis: double-circle;
}
h2:nth-child(6) {
  text-emphasis:triangle;
  -webkit-text-emphasis: triangle;
}
h2:nth-child(7) {
  text-emphasis:sesame;
  -webkit-text-emphasis: sesame;
}
h2:nth-child(8) {
  text-emphasis:none;
  -webkit-text-emphasis: none;
}
h2:nth-child(9) {
  text-emphasis:"*";
  -webkit-text-emphasis: "*";
  text-emphasis-color: red;
  -webkit-text-emphasis-color: red;
}
</style>