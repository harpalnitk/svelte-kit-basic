<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Vertical" path="/grid-layout/flex-layout" />
<main>
	<div class="vcenter container">
		<p>I'm in the center!</p>
	  </div>
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
	
.vcenter {
  display: flex;
  align-items: center;
  height: 20%;
  border: 3px solid rgba(255, 255, 255, 0.5);
}

nav {
  width: 400px;
}

.vcenter * {
  margin: auto;
}

</style>
