<script>
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import SelectInput from '$lib/components/UI/SelectInput.svelte';
    export let selectedLang;
    export let languages;
</script>

<section class="menu-cont">
	<SelectInput bind:selectedVal={selectedLang} items={languages} selectName="language"/>
</section>

<style lang="scss">
	@import '../../../styles/vars';
    	.menu-cont {
		width: 40%;
		display: flex;
		margin: 0 10px 0 0;
	}
</style>