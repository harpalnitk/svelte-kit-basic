

<main>
	<h1>Hello world!</h1>
	<ul class="link-grid">
		<li>1. <a href="/playground">Go To Playground</a></li>
		<li>2. <a href="/playground2">Go To Playground 2</a></li>
		<li>3. <a href="/charts-with-shapes">Charts With Shapes</a></li>
		<li>4. <a href="/images">Images CSS</a></li>
		<li>5. <a href="/grid-layout">Grid layout</a></li>
		<li>6. <a href="/cards">Cards</a></li>
		<li>7. <a href="/videos">Videos</a></li>
		<li>8. <a href="/audio">Audio</a></li>
		<li>9. <a href="/web-pages">WebSite Designs</a></li>
		<li>10. <a href="/svelte-components">Svelte Components</a></li>
	</ul>

</main>

<style lang="scss">
	@import '../styles/vars';
	main {
		padding: 1rem;
		margin: 0 auto;
		width: fit-content;
	}
	h1{
		margin-bottom: 3rem;
	}
	.link-grid li {
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
