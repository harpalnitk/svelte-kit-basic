<script>
	import store from '$lib/stores/pageData';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	onMount(async () => {
		store.setTitle('Svelte Components');
		store.setUrl('/');
	});
	const changePage = (i) => {
		store.setTitle(content[i].name);
		store.setUrl(`/svelte-components`);
		goto(`/svelte-components/` + content[i].url);
	};
	let content = [
		//Box-Shadows
		{ url: 'timeline', name: 'Timeline' },
		{ url: 'tree-view', name: 'Tree View' },
		{ url: 'data-list', name: 'Sticky Header Data List' },
		{ url: 'skill-bars', name: 'Skill Bars' },
		{ url: 'sort-table', name: 'Sort Table' },
		{ url: 'calendar', name: 'Calendar' },
		{ url: 'autocomplete', name: 'Autocomplete' },
		{ url: 'flip-box', name: 'Flip Box' },
		{ url: 'emoji-chat', name: 'Emoji Chat' },
		{ url: 'product-filter', name: 'Product Filter' },
		{ url: 'progress-bar', name: 'File Upload Progress Bar' },
		{ url: 'pwd-gen', name: 'Password Generator' },
		{ url: 'bar-charts', name: 'Bar Charts' },

		//Buttons
		{ url: 'radio-glow', name: 'Radio Buttons-Neon Glowing' },
		{ url: 'radio-dark', name: 'Radio Button-Dark Mode' },
		{ url: 'all-buttons', name: 'Different Kind Of Buttons' },
		{ url: 'all-buttons2', name: 'Different Kind Of Buttons 2' },
		{ url: 'neumorphism-button', name: 'Neumorphism-Button' },
		//CheckBoxes
		{ url: 'glowing-checkbox', name: 'Glowing Checkbox' },
		{ url: 'checkbox', name: 'Checkbox' },
		{ url: 'yes-no-checkbox', name: 'Yes No Checkbox' },
		{ url: 'toggle-light-dark', name: 'Toggle Button Light and Dark Mode' },
		{ url: 'smiley-toggle', name: 'Smiley Toggle Button' },
		{ url: 'square-button-checkbox', name: 'Square Button CheckBox' },
		{ url: 'sleek-checkbox', name: 'Sleek CheckBox' },

		//Search
		{ url: 'search-box', name: 'Search Box' },
		{ url: 'show_hide_pwd', name: 'Show Hide Password' },
		{ url: 'show-hide-pwd-2', name: 'Show Hide Password 2-Using HTML icon' },
		//links
		{ url: 'link-hover-effects', name: 'Link Hover Effects' },
		{ url: 'link-hover-effects-2', name: 'Link Hover Effects-2 using Backgrounds' },
		{ url: 'link-hover-effects-3', name: 'Link Hover Effects-3 Using Text Shadows' },
		{ url: 'link-hover-effects-4', name: 'Link Hover Effects-3 Using Clipping, Masks etc.' },

		{ url: 'css-only-loaders', name: 'CSS Only Loaders- Circles' },
		{ url: 'css-only-loaders-2', name: 'CSS Only Loaders- Dots' },
		{ url: 'css-only-loaders-3', name: 'CSS Only Loaders- Bars' },
		{ url: 'css-only-loaders-4-3d', name: 'CSS Only Loaders- 3D' },

		{ url: 'scroll-shadows', name: 'Scroll Shadows' },
		{ url: 'range-slider', name: 'Custom Range Slider' },
		{ url: 'email-verify', name: 'Automatic email verify textbox' },
		{ url: 'min-width-table', name: 'Faking min width on a Table column' }
	];
</script>

<main class="main-index">
	<ul class="link-grid">
		{#each content as item, i}
			<li>{i + 1}. <span on:click={() => changePage(i)}>{item.name}</span></li>
		{/each}
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';
</style>
