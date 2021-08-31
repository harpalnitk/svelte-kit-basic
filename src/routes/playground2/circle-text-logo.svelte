<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
	import { onMount } from 'svelte';
	let wrapper;

	onMount(() => {
		const text = wrapper.querySelector('.text p');
		text.innerHTML = text.innerText
			.split('')
			.map((char, i) => `<span style="transform:rotate(${i * 8.9}deg)">${char}</span>`)
			.join('');
	});
</script>

<BasicPage title="Circle Text Logo" path="/playground2" />

<main>
	<div class="circle" bind:this={wrapper}>
		<div class="logo" />
		<div class="text">
			<p>Harpal Singh - Creative UX/UI Designer - </p>
		</div>
	</div>
</main>

<style lang="scss">
	@import '../../styles/vars';
	main {
		min-height: 70vh;
		position: relative;
		width: min(70rem, 90vw);
		margin: 0 auto;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.circle {
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		// background: #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo {
		position: absolute;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background: url('/img/profile/profile-1.jpg');
		background-size: cover;
		filter: brightness(1.5) contrast(1.5);
	}
	.text {
		position: absolute;
		width: 100%;
		height: 100%;
        animation: rotateText 10s linear infinite;
	}

    @keyframes rotateText{
        0%{
            transform: rotate(360deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    :global(.circle .text span){
        position: absolute;
        left: 50%;
        font-size: 1.2em;
        transform-origin: 0 100px; //width: 200px/2;
    }
</style>
