<script>

	import RippleButton from '$lib/components/UI/RippleButton.svelte';
	import ShineButton from '$lib/components/UI/ShineButton.svelte';
	import CreativeButton from '$lib/components/UI/CreativeButton.svelte';
	import GradientButton from '$lib/components/UI/GradientButton.svelte';
	import BorderGlowButton from '$lib/components/UI/BorderGlowButton.svelte';
</script>



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
	<section class="gradient">
		<h1>Gradient Button</h1>
		<div class="container">
			<GradientButton background1 = {'#a18cd1'} background2 = {'#fbc2eb'}/>
			<GradientButton background1 = {'#43e97b'} background2 = {'#38f9d7'}/>
			<GradientButton background1 = {'#fa709a'} background2 = {'#fee140'}/>
			<GradientButton background1 = {'#4481eb'} background2 = {'#04befe'}/>
			<GradientButton background1 = {'#ffe29f'} background2 = {'#ffa99f'}/>
			<GradientButton background1 = {'#fdfc47'} background2 = {'#24fe41'}/>
		</div>
	</section>
	<section class='border-glow'>
		<BorderGlowButton color={'#ff22bb'} index={0}/>
		<BorderGlowButton color={'#00ccff'} index={1}/>
		<BorderGlowButton color={'#22e622'} index={2}/>
	</section>
	<section class="link">
		<a href="#1">Sick Hover</a>
	</section>
	<section class="link-2">
		<p><a href="#1">Multiline<br/>effect</a></p>
<p><a href="#1" class="underline">Underline<br/>version</a></p>
	</section>

	<section class="link-3">
		<h1>Using Just background transitions</h1>
		<a href="#1">Hover Me</a>
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
	.gradient{
		.container{
			width: 480px;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			gap: 20px;
		}
	}
	.border-glow{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 20vh;
		background: #0e1538;
		gap:40px;
		padding:20px;

	}
	.link{
		a {
  color: #000;
  position: relative;
  text-decoration: none;
  font-size: 3rem;
}

a::before {
  background: hsl(45 100% 70%);
  content: "";
  inset: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
  z-index: -1;
}

a:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
	}
	.link-2{
		a {
			font-size: 3rem;
  background: linear-gradient(0deg, slateblue, slateblue) no-repeat right bottom / 0 var(--bg-h);
  transition: background-size 350ms;
  --bg-h: 100%;
}
a:where(:hover, :focus-visible) {
  background-size: 100% var(--bg-h);
  background-position-x: left;
}

.underline {
  padding-bottom: 2px;
  --bg-h: 2px;
}
a {
  text-decoration: none;
  color: inherit;
  line-height: 1;
}
	}
	.link-3{
		h1{
			font-size: 1rem;
			color: #000;
			margin: 0 1rem;
		}
		--mainColor: #ff9800;
		a {
			font-size: 3rem;
  background:
     linear-gradient(
       to bottom,
       var(--mainColor) 0%,
       var(--mainColor) 100%
     );
	background-position: right center;
	background-repeat: no-repeat;
	background-size: 0 100%;
  color: #000;
  text-decoration: none;
  transition: background-size .2s;
}

a:hover {
  background-size: 100% 100%;
  background-position: left center;
}
	}
</style>
