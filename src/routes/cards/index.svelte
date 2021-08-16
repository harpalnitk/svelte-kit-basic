<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Different type of card Designs" path="/" />
<main>
	<h1>Different CSS Card Designs</h1>
	<ul class="link-grid">
		<li>1. <a href="/cards/overlapping-cards">Overlapping Cards</a></li>
		<li>2. <a href="/cards/glow-card">Double color neon glow card</a></li>
		<li>3. <a href="/cards/glass">Transparent Cards-Glasmorphism</a></li>
		<li>4. <a href="/cards/product-card">Product card</a></li>
		<li>5. <a href="/cards/player-card">Player card</a></li>
		<li>6. <a href="/cards/profile-card">Profile card</a></li>
		<li>7. <a href="/cards/hovering-cards">Hovering cards</a></li>
		<li>8. <a href="/cards/glowing-card">Glowing Card</a></li>
		<li>9. <a href="/cards/3d-stack-cards">3D Stack of a Card</a></li>
		<li>10. <a href="/cards/glass-card">Glass card</a></li>
		<li>11. <a href="/cards/neumorphic-card">Neumorphic Cards</a></li>
		<li>12. <a href="/cards/neumorphic-card-d">Neumorphic Cards Dark</a></li>
		<li>13. <a href="/cards/gradient-card-shadow">Gradient Card Shadow</a></li>
		<li>13. <a href="/cards/testimonial-with-swiper">Responsive Testimonial slider With Swiper.js</a></li>
		<li>13. <a href="/cards/contact-info">Contact Info Card</a></li>
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';

	main {
		padding: 1rem;
		margin: 0 auto;
		width: fit-content;
	}

	.link-grid li a {
		text-decoration: none;
		// color: #a9a39f;
		position: relative;
		display: inline-block;
		overflow: hidden;
		margin-right: 0.2rem;
	}
	.link-grid li a:before {
		content: '';
		transition: 0.2s;
		position: absolute;
		top: calc(100% - 1px);
		left: 0;
		width: 100%;
		height: 1px;
		background: #333;
		transform: translateX(-101%);
	}

	.link-grid li a:focus,
	.link-grid li a:hover {
		// color: #fff;
		opacity: 1;
	}

	.link-grid li a:focus:before,
	.link-grid li a:hover:before {
		transform: translateX(0);
	}
</style>
