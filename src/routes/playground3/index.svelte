<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
	let content= [
		{url:'random-particles', name: 'Random Particles'},
		];
</script>

<BasicPage title="Playground 3 for CSS" path="/" />
<main class='main-index'>
	<ul class="link-grid">
		{#each content as item, i}
		<li>{i+1}. <a href="/playground3/{item.url}">{item.name}</a></li>
		{/each}
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';
</style>
