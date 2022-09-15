<script>
	import NewsPageContent from '../NewsPageContent.svelte'
	import Footer from '../Footer.svelte'
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';

	let y;
	let showFloat = false;
	$: console.log(y);
	$: (y > 400) ? showFloat = true : showFloat = false;
	
</script>

<svelte:window bind:scrollY={y}/>

<div id="News" class="tabcontent">
	<div class="header">
<VideoPlayer {showFloat}/>
	</div>
<NewsPageContent/>
<Footer/>
</div>

<style>
	/* Style the tab content (and add height:100% for full page content) */
	.tabcontent {
		color: black;
		display: block;
		padding: 100px 20px;
		height: 100%;
	}

	/* Header/Blog Title */
	.header {
height: auto;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
/* padding: 1rem 2rem; */
/* border-bottom: 1px solid black; */
	}

</style>
