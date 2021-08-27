<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Web Site Designs" path="/" />
<main>
	<ul class="link-grid">
		<li>1. <a href="/web-pages/full-page-tabs">Full Page Tabs</a></li>
		<li>2. <a href="/web-pages/fruits">Fruits Website</a></li>
		<li>3. <a href="/web-pages/personal-portfolio">Responsive Personal Portfolio Website</a></li>
		<li>4. <a href="/web-pages/e-commerce">E-Commerce Product Cards page</a></li>
		<li>5. <a href="/web-pages/advanced-css">Advanced CSS</a></li>
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';

	main {
		padding: 1rem;
		margin: 0 auto;
		width: fit-content;
	}
	.link-grid li {
		 display: flex;
	}
	.link-grid li a {
		text-decoration: none;
		// color: #a9a39f;
		position: relative;
		display: inline-block;
		overflow: hidden;
		margin-left: 1rem;
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
