<script>
	 
	import { onMount } from 'svelte';
	import SearchForm from '$lib/components/UI/SearchForm.svelte';
	import Book from './Book.svelte';
	
	import Menu from './Menu.svelte';
	import NoResults from '$lib/components/NoResults.svelte';

	export let data;

	let bookData = data.bookData;

	onMount(() => {
		getLanguages();
	});

	let selectedLang = '';
	let languages = [];
	const getLanguages = () => {
		for (let bookObj of bookData) {
			if (!languages.includes(bookObj.language)) {
				languages = [...languages, bookObj.language];
			}
		}
		languages = languages.sort();
	};
	//Query Results by Language
	let filteredBooks = [];
	//Reactive statement
	$: if (selectedLang) getBooksByLang();

	const getBooksByLang = () => {
		//clear search box input
		searchTerm= "";
		if (selectedLang === 'all') {
			return (filteredBooks = []);
		}
		return (filteredBooks = bookData.filter((bookObj) => {
			return bookObj.language === selectedLang;
		}));
	};

	//FOR SEARCH

	let searchTerm='';
	$: console.log('Search:', searchTerm);
	$: if(searchTerm) selectedLang = ""; // Clear language select if search is used // can use only one at a time

	const searchBooks = () => {
		console.log('Inside search books by title');
		return (filteredBooks = bookData.filter((bookObj) => {
			let bookTitleLower = bookObj.title.toLowerCase();
			return bookTitleLower.includes(searchTerm.toLowerCase());
		}));
	};
</script>

<div class="page-container">
	<section id="query-section">
		<Menu bind:selectedLang {languages} />
		<SearchForm placeholder="Enter book name" bind:searchTerm on:input={searchBooks}/>
	</section>

	<main id="bookshelf">
		{#if searchTerm && filteredBooks.length === 0}
		<NoResults/>
		{:else if filteredBooks.length > 0}
			<!-- Loop over filetered Books -->
			<!-- bookData is destructured using objet destructuring -->
			{#each filteredBooks as { title, image, language, ebookBundle, pdfLink, appleLink, googleLink, amazonLink }}
				<Book
					{title}
					{image}
					{language}
					{ebookBundle}
					{pdfLink}
					{appleLink}
					{googleLink}
					{amazonLink}
				/>
			{/each}
		{:else}
			<!-- Loop over all the books -->
			<!-- bookData is destructured using objet destructuring -->
			{#each bookData as { title, image, language, ebookBundle, pdfLink, appleLink, googleLink, amazonLink }}
				<Book
					{title}
					{image}
					{language}
					{ebookBundle}
					{pdfLink}
					{appleLink}
					{googleLink}
					{amazonLink}
				/>
			{/each}
		{/if}
	</main>
</div>

<style>
	.page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		/* margin-top: ; */
		text-align: center;
		max-width: 768px;
	}
	/* General Structure */
	main#bookshelf {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
	}
	#query-section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2% 0;
	}
</style>
