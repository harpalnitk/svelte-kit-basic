<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
	import { onMount } from 'svelte';

	let wrapper;
	let tpl;

	onMount(async () => {
		const grid = wrapper.querySelector('.grid');
		for (let i = 0; i < 10; i++) {
			let temp = tpl.cloneNode(true);
			grid.append(temp.querySelector('.card'));
		}

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((posts) => {
				grid.innerHTML = '';
				posts.forEach((post) => {
					const tempDiv = tpl.cloneNode(true);
					const div = tempDiv.querySelector('.card');
					div.querySelector('[data-title]').textContent = post.title;
					div.querySelector('[data-body]').textContent = post.body;
					grid.append(div);
				});
			});
	});
</script>

<!-- template is not working in svelte -->
<div bind:this={tpl} class="template">
	<div class="card">
		<div class="header">
			<img class="header-img skeleton" src="https://source.unsplash.com/100x100/?nature" />
			<div class="title" data-title>
				<div class="skeleton skeleton-text" />
				<div class="skeleton skeleton-text" />
			</div>
		</div>
		<div data-body>
			<div class="skeleton skeleton-text" />
			<div class="skeleton skeleton-text" />
			<div class="skeleton skeleton-text" />
			<div class="skeleton skeleton-text" />
		</div>
	</div>
</div>
<BasicPage title="Skeleton Loading" path="/playground2" />

<main bind:this={wrapper}>
	<div class="grid" />
</main>

<style lang="scss">
	@import '../../styles/vars';
	main {
		min-height: 100vh;
		position: relative;
		width: min(70rem, 90vw);
		margin: 0 auto;
	}

	.skeleton {
		opacity: 0.7;
		animation: skeleton-loading 1s linear infinite alternate;
	}

	.skeleton-text {
		width: 100%;
		height: 0.5rem;
		margin-bottom: 0.25rem;
		border-radius: 0.125rem;
	}

	.skeleton-text:last-child {
		margin-bottom: 0;
		width: 80%;
	}

	@keyframes skeleton-loading {
		0% {
			background-color: hsl(200, 20%, 70%);
		}

		100% {
			background-color: hsl(200, 20%, 95%);
		}
	}

	.template {
		display: none;
	}
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		padding: 1rem;
	}

	.card {
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		padding: 16px;
		border-radius: 4px;
	}

	.header {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
	}

	.header-img {
		width: 50px;
		height: 50px;
		object-fit: cover;
		border-radius: 100%;
		margin-right: 1rem;
		flex-shrink: 0;
	}

	.title {
		font-weight: bold;
		font-size: 1.25rem;
		text-transform: capitalize;
		word-wrap: none;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		flex-grow: 1;
	}
</style>
