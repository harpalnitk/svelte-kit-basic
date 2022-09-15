<script>
	

	export let url;
	export let name;
	export let desc;
</script>

<div class="content">
	<img src={url} alt={name} style="width:100%" />
	<div class="body">
		<h4>{name}</h4>
		<p>{desc}</p>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/vars';
	/* Content */
	.content {
		background-color: white;
		color: $text-bg-primary-dark;

		// padding: .8rem;
		box-shadow: 0 0 15px $anchor-box-shadow;
		.body {
			padding: 0.8rem;
		}
	}

	img {
		min-height: 14rem;
	}
</style>
