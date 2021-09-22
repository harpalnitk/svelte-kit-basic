<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='How to Create CSS Charts With Interesting Shapes, Glyphs and Emoji ' path='/'></BasicPage>

<main>
    <ul class='link-grid'>
        <li>1. <a href="/charts-with-shapes/pentagon">Pentagon With Glyphs</a></li>
        <li>2. <a href="/charts-with-shapes/pentagon-2">Pentagon With SVG</a></li>
        <li>3. <a href="/charts-with-shapes/css-shapes">With CSS Shapes</a></li>
        <li>4. <a href="/charts-with-shapes/emojis">With Emojis</a></li>
        <li>5. <a href="/charts-with-shapes/mix">Mix Shapes</a></li>
		<li>6. <a href="/charts-with-shapes/polygon-border">Polygon Border With CSS Paint API</a></li>
    </ul>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main {
        width: 50%;
        margin: auto;
        padding-top: 2rem;
        display: grid;
        place-items: center;
    }
    .link-grid li {
		 display: flex;
	}
	.link-grid li a {
		margin-left: 1rem;
		text-decoration: none;
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
	
		opacity: 1;
	}

	.link-grid li a:focus:before,
	.link-grid li a:hover:before {
		transform: translateX(0);
	}

</style>

