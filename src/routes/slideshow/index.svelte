<script>
	import Slide from '$lib/slideshow/Slide.svelte';
	import Dot from '$lib/slideshow/Dot.svelte';
	import { quotes } from '$lib/slideshow/slideData';

  import ToggleSwitch from '$lib/components/UI/ToggleSwitch.svelte';

	let quoteIndex = 0;
	$: console.log(quoteIndex);
	$: quote = quotes[quoteIndex].quote;
	$: author = quotes[quoteIndex].author;

	const nextQuote = () => {
		if (quoteIndex === quotes.length - 1) {
			quoteIndex = 0;
		} else {
			quoteIndex += 1;
		}
	};

	const prevQuote = () => {
		if (quoteIndex === 0) {
			quoteIndex = quotes.length - 1;
		} else {
			quoteIndex -= 1;
		}
	};
  
  /*AUTOPLAY*/

  let switchOn = false;
  let autoAdvance;
  let autoPlaying=false;

  $: console.log(switchOn);
  const handleAutoAdvance = ()=>{
    if(switchOn){
      autoAdvance = setInterval(nextQuote, 2000);
      autoPlaying = true;
    } else {
      clearInterval(autoAdvance);
      autoPlaying= false;
    }
  }

</script>

<div class="page-container">
	<h1>Slideshow</h1>

	<section>
		<!-- Slideshow container -->
		<div class="slideshow-container">
			<!-- Full-width slides/quotes -->

      <!-- we cannot use transition on this component as only text values
      are being chnaged inside it and the component is not being rendered again
      svelte offers something called key KEY which re-renders the component 
      whneever some value changes -->

      {#key quote}
			<Slide {quote} {author} />
      {/key}
			<!-- Next/prev buttons -->
			<span class="prev" on:click={prevQuote} class:not-clickable={autoPlaying}>&#10094;</span>
			<span class="next" on:click={nextQuote} class:not-clickable={autoPlaying}>&#10095;</span>
		</div>

		<!-- Dots/bullets/indicators -->
		<div class="dot-container">
			<!-- {#each Array(quotes.length) as _, i} -->
      {#each quotes as quote, i}
				<Dot 
        {quoteIndex} 
        counter={i} 
        on:click={() => (quoteIndex = i)} 
        attribution={quote.author}
        {autoPlaying}/>
			{/each}

      <ToggleSwitch bind:switchOn on:change={handleAutoAdvance}/>
		</div>
	</section>
</div>

<style lang="scss">
	@import '../../styles/vars';
	@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');

	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		/* margin-top: ; */
		text-align: center;
		max-width: 768px;
	}
	section {
		width: 85%;
		height: auto;
		box-shadow: 1px 1px 4px black;
		margin: 20px auto 0;
	}

	/* Slideshow container */
	.slideshow-container {
		position: relative;
		background: $primary-color;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 250px;
	}
	/* Next & previous buttons */
	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -30px;
		padding: 16px;
		color: #555;
		font-weight: bold;
		font-size: 20px;
		border-radius: 0 3px 3px 0;
		user-select: none;
	}

	.prev {
		left: 0;
	}

	/* Position the "next button" to the right */
	.next {
		position: absolute;
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		text-decoration: none;
	}

	.not-clickable {
		pointer-events: none;
	}

	/* The dot/bullet/indicator container */
	.dot-container {
		text-align: center;
		padding: 20px;
		background: #666;
		position: relative;
		bottom: 0;
	}
</style>
