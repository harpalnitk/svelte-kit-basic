<!-- <script context="module">


	// // retain module scoped expansion state for each tree node
	// const _expansionState = {
	// 	/* treeNodeId: expanded <boolean> */
	// };
</script> -->

<script>
		const _expansionState = {
	}
	export let tree;
	console.log('tree in treeview', tree)
	const { label, children } = tree;

	let expanded = _expansionState[label] || false;
	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded;
	};
	$: arrowDown = expanded;
</script>

<ul>
	<!-- transition:slide -->
	<li>
		{#if children}
			<span on:click={toggleExpansion}>
				<span class="arrow" class:arrowDown>&#x25b6</span>
				{label}
			</span>
			{#if expanded}
				{#each children as child}
					<svelte:self tree={child} />
				{/each}
			{/if}
		{:else}
			<span>
				<span class="no-arrow" />
				<span class='list-item'>{label}</span>
			</span>
		{/if}
	</li>
</ul>

<style lang="scss">
    @import '../../../styles/vars';
	ul {
		margin: 0;
		list-style: none;
		padding-left: 1.2rem;
		user-select: none;
	}
	.no-arrow {
		padding-left: 1rem;
	}
	.arrow {
		cursor: pointer;
		display: inline-block;
	    transition: transform 200ms; 
	}
	.arrowDown {
		transform: rotate(90deg);
        // transition: transform .3s;
	}
    .list-item{
        color: $primary-color;
    }
</style>
