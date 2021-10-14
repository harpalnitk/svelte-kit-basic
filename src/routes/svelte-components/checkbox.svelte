<script>
	export let size = '1rem';
</script>

<div class="center" style="--size:{size}">
	<label for="">
		<input type="checkbox" name="" /> I agree with all terms and conditions.
	</label>
</div>

<style>
	.center {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	input[type='checkbox'] {
		position: relative;
		top: calc(var(--size) / 8);
		width: var(--size);
		height: var(--size);
		-webkit-appearance: none;
		outline: none;
		transition: 0.5s;
	}
	input[type='checkbox']::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: calc(var(--size) / 8) solid #262626;
		box-sizing: border-box;
		transition: 0.5s;
	}
	input:checked[type='checkbox']::before {
		border-left: none;
		border-top: none;
		width: calc(var(--size) / 2);
		border-color: #0f0;
		transform: rotate(45deg) translate(calc(var(--size) / 8), calc(-1 * var(--size) / 4));
	}
	label {
		font-size: calc((var(--size) / 8) * 7);
		font-family: sans-serif;
	}
</style>
