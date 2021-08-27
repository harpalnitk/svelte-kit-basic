<script>
   import BasicPage from '$lib/components/UI/BasicPage.svelte';
	import { tree } from './treeData';
	import TreeView from './TreeView.svelte';
</script>
<BasicPage title='Tree View' path='/svelte-components'></BasicPage>
<div class="page-container">
	<section class="tree-view">
		<TreeView {tree} />
		<!-- <ul id="myUL">
            <li><span class="caret" class:caret-down={bevsShowing} on:click={()=>bevsShowing =!bevsShowing}>Beverages</span>
              <ul class="nested" class:active={bevsShowing}>
                <li>Water</li>
                <li>Coffee</li>
                <li><span class="caret">Tea</span>
                  <ul class="nested">
                    <li>Black Tea</li>
                    <li>White Tea</li>
                    <li><span class="caret">Green Tea</span>
                      <ul class="nested">
                        <li>Sencha</li>
                        <li>Gyokuro</li>
                        <li>Matcha</li>
                        <li>Pi Lo Chun</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul> -->
	</section>
</div>

<style lang="scss">
	@import '../../../styles/vars';
	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 768px;
		h1 {
			margin-bottom: 5%;
		}
	}

	.tree-view {
   width: 50%;
   margin: 0 auto;
	}
</style>
