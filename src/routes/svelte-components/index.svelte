<script>
			    import  store  from '$lib/stores/pageData';
		import { onMount } from 'svelte';
		import { goto } from '$app/navigation';
        onMount(async () => {
			store.setTitle('Svelte Components');
			store.setUrl('/')
        });
		const changePage = (i) => {
			store.setTitle(content[i].name);
			store.setUrl(`/svelte-components`);
			 goto(`/svelte-components/`+ content[i].url);
		}
		let content= [
		//Box-Shadows
		{url:'timeline', name: 'Timeline'},
		{url:'tree-view', name: 'Tree View'},
		{url:'data-list', name: 'Sticky Header Data List'},
		{url:'skill-bars', name: 'Skill Bars'},
		{url:'sort-table', name: 'Sort Table'},
		{url:'calendar', name: 'Calendar'},
		{url:'autocomplete', name: 'Autocomplete'},
		{url:'flip-box', name: 'Flip Box'},
		{url:'emoji-chat', name: 'Emoji Chat'},
		{url:'product-filter', name: 'Product Filter'},
		{url:'progress-bar', name: 'Progress Bar'},
		{url:'pwd-gen', name: 'Password Generator'},

				//Buttons
		{url:'radio-glow', name: 'Neon Glowing Radio Butotns'},
		{url:'all-buttons', name: 'Different Kind Of Buttons'},
		{url:'all-buttons2', name: 'Different Kind Of Buttons 2'},
		{url:'neumorphism-button', name: 'Neumorphism-Button'},
        //CheckBoxes
		{url:'glowing-checkbox', name: 'Glowing Checkbox'},
		{url:'checkbox', name: 'Checkbox'},
		{url:'yes-no-checkbox', name: 'Yes No Checkbox'},
		{url:'toggle-light-dark', name: 'Toggle Button Light and Dark Mode'},
		{url:'smiley-toggle', name: 'Smiley Toggle Button'},
		
		];
</script>

<main class='main-index'>
	<ul class="link-grid">
		{#each content as item, i}
		<li>{i+1}. <span on:click={()=> changePage(i)}>{item.name}</span></li>
		{/each}
	</ul>
</main>

<style lang="scss">
	@import '../../styles/vars';
</style>
