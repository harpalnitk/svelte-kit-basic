<style>
	.row {
		width: 100%;
		display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1em;
        /* grid-auto-rows: 150px;	 */
	}
</style>


<div class="row">
	<slot></slot>
</div>