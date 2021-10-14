<script>
	import { images } from './imageData';
</script>

<div class="demo-img-row">
	{#each images as { id, imgurl, name }}
		<img {id} src={imgurl} alt={name} on:click />
	{/each}
</div>

<style lang="scss">
	@import '../../../styles/vars';
	.demo-img-row {
		width: 90%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		// grid-template-rows: repeat(150px);
		grid-gap: 0px;
	}

	img {
		width: 100%;
		height: 150px;
		transition: 0.2s;
		cursor: pointer;
		&:hover {
			box-shadow: 0 0 13px rgba(0, 0, 0, 0.8);
		}
		object-fit: cover;
	}
</style>
