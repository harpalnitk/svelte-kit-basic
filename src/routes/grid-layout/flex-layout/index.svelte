<script>
     import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Flex Layout Concepts' path='/grid-layout'></BasicPage>
<main>
    <h2>Flex Containers</h2>
    <div class="container">
      <div class="third">
        <a href="/grid-layout/flex-layout/flowdirection">Flow direction</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/justify">Justify Content</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/alignment">Align Items</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/flexwrap">Flex Wrap</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/aligncontent">Align Content</a>
      </div>
    </div>

    <h2>Flex Items</h2>
    <div class="container">
      <div class="third">
        <a href="/grid-layout/flex-layout/order">Order</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/alignself">Align Self</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/flexgrow">Flex Grow</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/flexshrink">Flex Shrink</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/flexbasis">Flex Basis</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/growshrinkbasis">Grow, Shrink & Basis</a>
      </div>
    </div>

    <h2>Flexbox Awesomeness</h2>
    <div class="container">
      <div class="third">
        <a href="/grid-layout/flex-layout/grids">Flexbox Grids</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/mediaobjects">Media Objects</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/holygrail">Holy Grail Layout</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/vertical">Real Vertical Centering</a>
      </div>
      <div class="third">
        <a href="/grid-layout/flex-layout/hexagon">Hexagon</a>
      </div>
      <!-- <div class="third">
        <a href="nesting.html">Nesting Flexboxes</a>
      </div> -->
    </div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
  @import 'index';
    
    </style>