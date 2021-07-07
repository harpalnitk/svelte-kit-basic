<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Responsive Grid" path="/grid-layout" />

<main>
	<div class="grid-body">
		<h1>Auto-Fit</h1>
		<section class="basic-grid-fit">
			<div class="card">1</div>
			<div class="card">2</div>
			<div class="card">3</div>
			<div class="card">4</div>
			<!-- <div class="card">5</div>
          <div class="card">6</div>
          <div class="card">7</div>
          <div class="card">8</div>
          <div class="card">9</div>
          <div class="card">10</div>
          <div class="card">11</div>
          <div class="card">12</div> -->
		</section>
		<h1>Auto-Fill</h1>
		<section class="basic-grid-fill">
			<div class="card">1</div>
			<div class="card">2</div>
			<div class="card">3</div>
			<div class="card">4</div>
			<!-- <div class="card">5</div>
          <div class="card">6</div>
          <div class="card">7</div>
          <div class="card">8</div>
          <div class="card">9</div>
          <div class="card">10</div>
          <div class="card">11</div>
          <div class="card">12</div> -->
		</section>
	</div>

	<!-- Note: auto-fill and auto-fit differs only in first row;
      if items move to second row there is no difference between the two -->
</main>

<style lang="scss">
	@import '../../styles/vars';
	main {
		// padding: 1rem;
		margin: 0 auto;
		width: min(70rem, 90vw);
	}
	.grid-body {
		background: rgb(19, 19, 19);
		color: #fff;
		overflow: scroll;
		height: 100%;
		h1 {
			color: white;
		}
	}
	.basic-grid-fit {
		//GRID CSS
		display: grid;
		gap: 1rem;

		//grid-template-columns: repeat(12, 1fr);
		/*3 better sizing but overflows*/
		//grid-template-columns: repeat(12, minmax(240px, 1fr));
		/*Create implicit grid with auto-fit. it tells grid to fit contents*/
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	}

	.basic-grid-fill {
		//GRID CSS
		display: grid;
		gap: 1rem;

		//grid-template-columns: repeat(12, 1fr);
		/*3 better sizing but overflows*/
		//grid-template-columns: repeat(12, minmax(240px, 1fr));
		/*Create implicit grid with auto-fill. it tells grid to fill contents*/
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
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
</style>
