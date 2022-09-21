<script>
	//import { tree } from './treeData';
  export let data;
  console.log('data',data);
  let tree;
	import TreeView from './TreeView.svelte';


     tree = data;

  $: console.log('data',data);
</script>

<div class="page-container">
	<section class="tree-view">
		<TreeView {tree} />

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
