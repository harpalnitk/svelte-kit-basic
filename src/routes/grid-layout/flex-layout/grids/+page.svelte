<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Grids" path="/grid-layout/flex-layout" />

<main>
    <div class="container">
        <div class="half">Half</div>
        <div class="half">Half</div>
        <div class="fourth">Fourth</div>
        <div class="fourth">Fourth</div>
        <div class="fourth">Fourth</div>
        <div class="fourth">Fourth</div>
        <div class="third">Third</div>
        <div class="third">Third</div>
        <div class="third">Third</div>
        <div class="full">Full width</div>
        <div class="sixth">Sixth</div>
        <div class="sixth">Sixth</div>
        <div class="sixth">Sixth</div>
        <div class="sixth">Sixth</div>
        <div class="sixth">Sixth</div>
        <div class="sixth">Sixth</div>
        <div class="half">Half</div>
        <div class="half">Half</div>
      </div>  
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
</style>
