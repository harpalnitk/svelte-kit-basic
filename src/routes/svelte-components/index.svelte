<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Svelte Components" path="/" />
<main>
	<ul class="link-grid">
		<li>1. <a href="/svelte-components/timeline">Timeline</a></li>
		<li>2. <a href="/svelte-components/tree-view">Tree View</a></li>
		<li>3. <a href="/svelte-components/skill-bars">Skill Bars</a></li>
		<li>4. <a href="/svelte-components/sort-table">Sort Table</a></li>
		<li>5. <a href="/svelte-components/calendar">Calendar</a></li>
		<li>6. <a href="/svelte-components/autocomplete">Autocomplete</a></li>
		<li>7. <a href="/svelte-components/flip-box">Flip Box</a></li>
		<li>8. <a href="/svelte-components/emoji-chat">Emoji Chat</a></li>
		<li>9. <a href="/svelte-components/product-filter">Product Filter</a></li>
		<li>10. <a href="/svelte-components/progress-bar">Progress Bar</a></li>
		<li>11. <a href="/svelte-components/pwd-gen">Password Generator</a></li>
		<li>12. <a href="/svelte-components/checkbox">Checkbox</a></li>
		<li>13. <a href="/svelte-components/yes-no-checkbox">Yes No Checkbox</a></li>
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
