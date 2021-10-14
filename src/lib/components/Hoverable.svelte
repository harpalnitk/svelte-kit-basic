<script>
	let hover;
	
	function enter() {
		hover = true;
	}

	function leave() {
		hover = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
	<slot hoveringI={hover}></slot>
</div>

