<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { fade } from 'svelte/transition';
	export let quote;
	export let author;
</script>

<div class="mySlides" transition:fade={{ duration: 500 }}>
	<q>{quote}</q>
	<p class="author">- {author}</p>
</div>

<style lang="scss">
	@import '../../../styles/vars';
	/* Slides */
	.mySlides {
		display: block;
		width: 50%;
		text-align: justify;
		font-size: 1.5rem;
		font-family: 'Sansita Swashed', cursive;
		position: absolute;
		/*	NOTE: Use with #key -- You just need the direct children position to always be in the same place (i.e. fixed), regardless of their position in DOM (well, for this transition at least) */
	}

	/* Add an italic font style to all quotes */
	q {
		color: #fff;
	}

	/* Add a blue color to the author */
	.author {
		text-align: right;
		margin: 7px 0;
	}
</style>
