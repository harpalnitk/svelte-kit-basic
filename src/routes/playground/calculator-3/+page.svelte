<script>
	let toggle = false;
	let value = '';

	const evaluate = () => {
		value = eval(value);
	};
	let keys = [
		{ key: '/', value: '/', class: '' },
		{ key: '*', value: '*', class: '' },
		{ key: '7', value: '7', class: '' },
		{ key: '8', value: '8', class: '' },
		{ key: '9', value: '9', class: '' },
		{ key: '-', value: '-', class: '' },
		{ key: '4', value: '4', class: '' },
		{ key: '5', value: '5', class: '' },
		{ key: '6', value: '6', class: '' },
		{ key: '+', value: '+', class: 'plus' },
		{ key: '1', value: '1', class: '' },
		{ key: '2', value: '2', class: '' },
		{ key: '3', value: '3', class: '' },
		{ key: '0', value: '0', class: '' },
		{ key: '00', value: '00', class: '' },
		{ key: '.', value: '.', class: '' }
	];
</script>

<main class="flex-center" class:light={toggle}>
	<div class="btns" class:active={toggle} on:click={() => (toggle = !toggle)}>
		<strong>🌞</strong>
		<strong>🌙</strong>
	</div>
	<div class="container">
		<form name="calc" class="calculator">
			<input type="text" class="value" readonly name="txt" {value} />
			<span
				class="num clear"
				on:click={() => {
					value = '';
				}}><i>C</i></span
			>
			{#each keys as item}
				<span
					class="num {item.class}"
					on:click={() => {
						value += item.value;
					}}><i>{item.key}</i></span
				>
			{/each}

			<span class="num equal" on:click={evaluate}><i> =</i></span>
		</form>
	</div>
</main>

<style>
	main {
		font-family: consolas;
		background: #333;
		min-height: 100vh;
		position: relative;
	}
	main.light {
		background: #f8f8f8;
	}
	.container {
		position: relative;
		min-width: 300px;
		min-height: 400px;
		background: #333;
		padding: 40px 30px 30px;
		border-radius: 20px;
		box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25), 10px 10px 70px rgba(0, 0, 0, 0.25),
			inset -5px -5px 15px rgba(0, 0, 0, 0.5), inset 5px 5px 15px rgba(0, 0, 0, 0.5);
	}
    main.light .container{
        background: #fafafa;
        box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.15), 10px 10px 70px rgba(0, 0, 0, 0.15),
			inset -5px -5px 15px rgba(0, 0, 0, 0.15), inset 5px 5px 15px rgba(0, 0, 0, 0.05);
    }
	.calculator {
		position: relative;
		display: grid;
	}
	.calculator .value {
		position: relative;
		grid-column: span 4;
		height: 100px;
		left: 10px;
		width: calc(100% - 20px);
		border: none;
		outline: none;
		background: #a7af7c;
		margin-bottom: 10px;
		border-radius: 10px;
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.75);
		text-align: right;
		font-size: 2em;
		padding: 10px;
	}
	.calculator span {
		position: relative;
		display: grid;
		place-items: center;
		width: 80px;
		height: 80px;
		margin: 8px;
		background: linear-gradient(180deg, #2f2f2f, #3f3f3f);
		box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15), inset 0 -8px 8px rgba(0, 0, 0, 0.25),
			0 0 0 2px rgba(0, 0, 0, 0.75), 10px 20px 25px rgba(0, 0, 0, 0.4);
		color: #fff;
		user-select: none;
		cursor: pointer;
		border-radius: 10px;
	}
    main.light .calculator span{
        background: linear-gradient(180deg, #fafafa, #f4f4f4);
		box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15), inset 0 -8px 8px rgba(0, 0, 0, 0.15),
			0 0 0 2px rgba(0, 0, 0, 0.1), 10px 20px 25px rgba(0, 0, 0, 0.25);
    }
	.calculator span::before {
		content: '';
		position: absolute;
		top: 3px;
		left: 4px;
		bottom: 14px;
		right: 12px;
		background: linear-gradient(90deg, #2d2d2d, #4d4d4d);
		border-radius: 10px;
		box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.1), 10px 5px 10px rgba(0, 0, 0, 0.15);
		border-left: 1px solid #0004;
		border-bottom: 1px solid #0004;
		border-top: 1px solid #0009;
	}
    main.light .calculator span::before {
        background: linear-gradient(90deg, #e6e6e6, #efefef);
		border-radius: 10px;
		box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25), 10px 5px 10px rgba(0, 0, 0, 0.15);
		border-left: 1px solid #fff4;
		border-bottom: 1px solid #fff4;
		border-top: 1px solid #fff9;
    }
	.calculator span:active {
		filter: brightness(1.5);
	}
    main.light .calculator span:active {
		filter: brightness(0.9);
	}
	.calculator span i {
		position: relative;
		font-style: normal;
		font-size: 1.5em;
		font-weight: 400;
		text-transform: uppercase;
	}
    main.light .calculator span i {
color: #333;
    }
    main.light .calculator span.clear i,   main.light .calculator span.equal i  {
color: #fff;
    }
	main.light .calculator .clear,.calculator .clear {
		grid-column: span 2;
		width: 180px;
		background: #f00;
	}
	main.light .calculator .clear::before,.calculator .clear::before {
		background: linear-gradient(90deg, #d20000, #ffffff5c);
		border-left: 1px solid #fff4;
		border-bottom: 1px solid #fff4;
		border-top: 1px solid #fff4;
	}
	.calculator .plus {
		grid-row: span 2;
		height: 180px;
	}
	main.light .calculator .equal ,.calculator .equal {
		background: #2196f3;
	}
	main.light .calculator .equal::before ,.calculator .equal::before {
		background: linear-gradient(90deg, #1479c9, #ffffff5c);
		border-left: 1px solid #fff4;
		border-bottom: 1px solid #fff4;
		border-top: 1px solid #fff4;
	}
	.btns {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 60px;
		height: 60px;
		background: #333;
		font-size: 1.5em;
		box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25), 5px 5px 30px rgba(0, 0, 0, 0.25),
			inset -2px -2px 5px rgba(0, 0, 0, 0.25), inset 2px 2px 5px rgba(0, 0, 0, 0.25);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}
    main.light .btns{
        background: #fafafa;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 30px rgba(0, 0, 0, 0.05),
			inset -2px -2px 5px rgba(0, 0, 0, 0.1), inset 2px 2px 5px rgba(0, 0, 0, 0.05);
    }
	.btns strong:nth-child(2) {
		display: none;
	}
	.btns.active strong:nth-child(2) {
		display: block;
	}
	.btns.active strong:nth-child(1) {
		display: none;
	}
</style>
