<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Playground 2 for CSS" path="/" />
<main>
	<ul class="link-grid">
		<li>1. <a href="/playground2/search-box">Search Box</a></li>
		<li>2. <a href="/playground2/abstract-bg">Abstract Background</a></li>
		<li>3. <a href="/playground2/cutout">Cutouts using SVG, Clip Path, Mask</a></li>
		<li>4. <a href="/playground2/indian-flag">Indian Flag Using CSS</a></li>
		<li>5. <a href="/playground2/social-icon-hover">Social Media Icon Hover Effect</a></li>
		<li>6. <a href="/playground2/contact-info">Contact Info Page-Glassmorphism</a></li>
		<li>7. <a href="/playground2/glass-calendar">Glassmorphism Calendar</a></li>
		<li>8. <a href="/playground2/menu-hover">Menu Hover Effect</a></li>
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';

	main {
		padding: 1rem;
		margin: 0 auto;
		width: fit-content;
	}
	.link-grid li{
		display: flex;
	}

	.link-grid li a {
		margin-left: 1rem;
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
