

<main>
	<div class="grid-body">
		<div class="photo-grid">
			<div
				class="card card-tall card-wide"
				style="background-image:url('/img/background/background-1.jpg')"
			>
				1
			</div>
			<div class="card card-tall" style="background-image:url('/img/background/background-2.jpg')">
				2
			</div>
			<div class="card" style="background-image:url('/img/background/background-3.jpg')">3</div>
			<div class="card" style="background-image:url('/img/background/background-4.jpg')">4</div>
			<div class="card" style="background-image:url('/img/background/background-5.jpg')">5</div>
			<div class="card" style="background-image:url('/img/background/background-6.jpg')">6</div>
			<div class="card card-wide" style="background-image:url('/img/background/background-1.jpg')">
				7
			</div>
			<div class="card" style="background-image:url('/img/background/background-2.jpg')">8</div>
			<div class="card" style="background-image:url('/img/background/background-3.jpg')">9</div>
			<div class="card" style="background-image:url('/img/background/background-4.jpg')">10</div>
			<div class="card" style="background-image:url('/img/background/background-5.jpg')">11</div>
			<div class="card" style="background-image:url('/img/background/background-6.jpg')">12</div>
		</div>
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
	.photo-grid {
		//GRID CSS
		display: grid;
		gap: 1rem;

		//grid-template-columns: repeat(12, 1fr);
		/*3 better sizing but overflows*/
		//grid-template-columns: repeat(12, minmax(240px, 1fr));
		/*Create implicit grid with auto-fit. it tells grid to fit contents*/
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		/* Make all implicit rows of same width*/
		grid-auto-rows: 240px;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #353535;
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
	}

	//Without media query in smaller screen photos will be squeezed

	@media screen and (min-width: 600px) {
		.card-tall {
			grid-row: span 2 / auto; /// START ROW/ END ROW
		}

		.card-wide {
			grid-column: span 2 / auto; // START COLUMN/ END COLUMN  ;; auto automatically figures the ending column line
		}
	}
</style>
