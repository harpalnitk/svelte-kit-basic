<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Photo Grid Animated" path="/grid-layout" />

<main>
	<div class="grid-body">
		<section class="animated-grid">
			<div
				class="card"
				style="background-image:url('/img/background/background-1.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-2.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-3.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-4.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-5.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-6.jpg')"
			/>
			<div
				class="card card-wide"
				style="background-image:url('/img/background/background-1.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-2.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-3.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-4.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-5.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-6.jpg')"
			/>
			<div
				class="card"
				style="background-image:url('/img/background/background-1.jpg')"
			/>
		</section>

		<section class="animated-grid">
			<div class="card">a</div>
			<div class="card">b</div>
			<div class="card">c</div>
			<div class="card">d</div>
			<div class="card">e</div>
			<div class="card">f</div>
			<div class="card">g</div>
			<div class="card">h</div>
			<div class="card">i</div>
			<div class="card">j</div>
			<div class="card">k</div>
			<div class="card">l</div>
			<div class="card">main</div>
		</section>
	</div>
</main>

<style lang="scss">
	@import '../../styles/vars';
	main {
		padding: 1rem;
		margin: 0 auto;
		width: min(70rem, 90vw);
	}
	.grid-body {
		background: rgb(19, 19, 19);
		color: #fff;
		overflow: scroll;
		height: 100%;
	}
	.animated-grid {
		height: 85vh;
        margin-bottom: 6rem;
       //GRID CSS
		display: grid;
		gap: 1rem;

		//Explicit Grid
		grid-template-areas:
			'a b c d'
			'l m m e'
			'k m m f'
			'j i h g';
		grid-template-rows: repeat(4, 25%);
		grid-template-columns: 240px auto auto 240px;

		--stagger-delay: 100ms;
	}

	.card:nth-child(1) {
		grid-area: a;
		animation-delay: calc(1 * var(--stagger-delay));
	}
	.card:nth-child(2) {
		grid-area: b;
		animation-delay: calc(2 * var(--stagger-delay));
	}
	.card:nth-child(3) {
		grid-area: c;
		animation-delay: calc(3 * var(--stagger-delay));
	}
	.card:nth-child(4) {
		grid-area: d;
		animation-delay: calc(4 * var(--stagger-delay));
	}
	.card:nth-child(5) {
		grid-area: e;
		animation-delay: calc(5 * var(--stagger-delay));
	}
	.card:nth-child(6) {
		grid-area: f;
		animation-delay: calc(6 * var(--stagger-delay));
	}
	.card:nth-child(7) {
		grid-area: g;
		animation-delay: calc(7 * var(--stagger-delay));
	}
	.card:nth-child(8) {
		grid-area: h;
		animation-delay: calc(8 * var(--stagger-delay));
	}
	.card:nth-child(9) {
		grid-area: i;
		animation-delay: calc(9 * var(--stagger-delay));
	}
	.card:nth-child(10) {
		grid-area: j;
		animation-delay: calc(10 * var(--stagger-delay));
	}
	.card:nth-child(11) {
		grid-area: k;
		animation-delay: calc(11 * var(--stagger-delay));
	}
	.card:nth-child(12) {
		grid-area: l;
		animation-delay: calc(12 * var(--stagger-delay));
	}
	.card:last-child {
		grid-area: m;
		animation-delay: calc(13 * var(--stagger-delay));
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgb(36, 243, 147);
		font-size: 3rem;
		color: #fff;
		box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
		height: 100%;
		width: 100%;
		border-radius: 4px;
		transition: all 500ms;
		overflow: hidden;

		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		&:hover {
			box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35rem 1.175rem, rgba(2, 8, 20, 0.08) 0px 0.175rem 0.5rem;
			transform: translateY(-3px) scale(1.1);
		}

		animation: cardEntrance 700ms ease-out;
		animation-fill-mode: backwards; // this will set the elements to their
		//first keyframe value which in our case will be invisible
	}

	//allow movement from one set of properties to another
	@keyframes cardEntrance {
		from {
			opacity: 0;
			transform: scale(0.3);
			filter: hue-rotate(180deg); // creates rainbow like color when item moves
		}
		to {
			opacity: 1;
			transform: scale(1);
			filter: hue-rotate(0deg);
		}
	}
</style>
