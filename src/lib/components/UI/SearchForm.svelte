<script>
	export let searchTerm = undefined;
	export let placeholder;
</script>

<!-- The form -->
<form class="example" on:submit|preventDefault>
	<input type="text" {placeholder} bind:value={searchTerm} autocomplete="off" on:input />
	<button type="submit">
		<i class="fa fa-search" />
	</button>
</form>

<style lang="scss">
	@import '../../../styles/vars';
	/* Style the search field */
	form.example input[type='text'] {
		padding: 10px;
		font-size: 17px;
		border: 1px solid $text-bg-primary;
		float: left;
		width: 80%;
		background: $text-bg-primary;
		&:focus {
			border: 1px solid $secondary-color;
			box-shadow: 0 0 3px $secondary-color;
			outline-offset: 0px;
			outline: none;
		}
	}

	/* Style the submit button */
	form.example button {
		float: left;
		width: 20%;
		padding: 10px;
		background: $primary-color;
		color: white;
		font-size: 17px;
		border: 1px solid $secondary-color;
		border-left: none; /* Prevent double borders */
		cursor: pointer;
	}

	form.example button:hover {
		background: $secondary-color;
	}

	/* Clear floats */
	form.example::after {
		content: '';
		clear: both;
		display: table;
	}
</style>
