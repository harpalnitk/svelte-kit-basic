<script>
let min_x = -1;
let max_x = 1;
let min_y = .2;
let max_y = .8;
let variableName= 'p';

$: a = +((max_y - min_y) / (max_x - min_x)).toFixed(2);
$: b = +(min_y - a * min_x).toFixed(2);

</script>
<main>
    <div mv-app="rangeMapping" mv-mode="edit">
        <p>Our variable is <code>--<span>{variableName}</span></code>.
        <p>When <code>--{variableName}</code> is <code><input type="number" bind:value="{min_x}"></code>, we want to output <code><input type="number" bind:value="{min_y}">em</code>.
        <p>When <code>--{variableName}</code> is <code><input type="number" bind:value="{max_x}"></code>, we want to output <code><input type="number" bind:value="{max_y}">em</code>.
        
        <p>The expression we need is <code>calc({a}em * var(--{variableName}) + {b}em)</code></p>
    </div>
</main>

<style>
    main {
	margin: 0;
	min-height: 100vh;
	font: 200%/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding: 1em;
}

input {
	display: inline-block;
	font: inherit;
	width: 20vw;
}

code {
	font-family: Consolas, Monaco, monospace;
	background: hsl(220 10% 95%);
	padding: .2em .3em;
	border-radius: .2em;
	border: none;
}

</style>