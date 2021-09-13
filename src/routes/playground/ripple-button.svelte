<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
	import RippleButton from '$lib/components/UI/RippleButton.svelte';
	import ShineButton from '$lib/components/UI/ShineButton.svelte';
	import CreativeButton from '$lib/components/UI/CreativeButton.svelte';
</script>

<BasicPage title="Ripple Button" path="/playground" />

<main>
	<section class="ripple">
		<h1>Ripple Button</h1>
		<RippleButton />
		<RippleButton />
	</section>
	<section class="shine">
		<h1>Shine Button</h1>
		<ShineButton background={'#27022d'} hoverBackground={'#a41ee9'} />
		<ShineButton background={'#27022d'} hoverBackground={'#ff3c7f'} />
	</section>
	<section class="creative">
		<h1>Creative Button</h1>
		<CreativeButton/>
	</section>
</main>

<style lang="scss">
	@import '../../styles/vars';
	section {
		position: relative;
	
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 30vh;
		width: min(70rem, 90vw);
		margin: 0 auto;
	}
	h1 {
		color: #fff;
	}
	.ripple {
        text-align: center;
		background: #040d15;
	}
	.shine {
		background: #19011d;
	}

	.creative {
        h1{
            color: #000;
        }
		background: #FFF;
	}
</style>
