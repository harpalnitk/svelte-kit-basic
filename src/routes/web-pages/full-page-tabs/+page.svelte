<script>
    import HomePage from './HomePage/+page.svelte';
    import NewsPage from './NewsPage/+page.svelte';
    import ContactPage from './ContactPage/+page.svelte';
    import AboutPage from './AboutPage/+page.svelte';

    const webpages = [
        {name:'Home', component: HomePage},
        {name:'News', component: NewsPage},
        {name:'Contact', component: ContactPage},
        {name:'About', component: AboutPage},
    ];

    let selectedPage = webpages[0];

    const loadPage = (obj)=> selectedPage = obj;

    $: console.log(selectedPage)
</script>


<div class="page-container">
	<h1>Full Page Tabs</h1>
{#each webpages as webpageObj}
<button class="tablink" on:click={()=>{loadPage(webpageObj)}}>{webpageObj.name}</button>
{/each}

<svelte:component this={selectedPage.component}/>

</div>

<style lang="scss">
	@import '../../../styles/vars';
	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		/* margin-top: ; */
		/* text-align: center; */
		h1 {
			text-align: center;
		}
		max-width: 768px;
	}

	/* Style tab links */
	.tablink {
		background-color: #555;
		color: white;
		float: left;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 14px 16px;
		font-size: 17px;
		width: 25%;
	}

	.tablink:hover {
		background-color: #777;
	}

</style>
