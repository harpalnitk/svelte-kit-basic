<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Li element pseudo commas' path='/playground2'></BasicPage>


<main>
	<header>
		<h1>pseudo-commas</h1>
	</header>
	<section>
		 <p>There were times when you probably wanted to show your list items in a paragraph or in a statement. There must be commas and 'and's at appropriate places. That is why pseudo-commas were born. Of course, we could get brute force with fewer* lines of JavaScript, but there is no harm to give it a shot-in-wild with CSS (●'◡'●)</p>

		<input checked id="toggle-pseudos" type="checkbox"/>
		<label for="toggle-pseudos">Toggle pseudos(⌐■_■)</label>

		<input id="highlight-pseudos" type="checkbox"/>
		<label for="highlight-pseudos">Highlight pseudos(◉_◉)</label>

		<div class="container">
			<section>
				<h2>single-item</h2>
				<div>I want to have
					<ul>
						<li>a cup of coffee</li>
					</ul>
				</div>
			</section>

			<section>
				<h2>two-items</h2>
				<div>I would invite
					<ul>
						<li>Jim</li>
						<li>Tobu</li>
					</ul>
				</div>
			</section>

			<section>
				<h2>three-items</h2>
				<div>I want to learn
					<ul>
						<li>bicycling</li>
						<li>singing</li>
						<li>dancing</li>
					</ul>
				</div>
			</section>

			<section>
				<h2>four-items</h2>
				<div>My preferred programming languages are
					<ul>
						<li>CSS</li>
						<li>TypeScript</li>
						<li>C</li>
						<li>Ruby</li>
					</ul>
				</div>
			</section>

			<section>
				<h2>many-items</h2>
				<div>My best friends are
					<ul>
						<li>Prit</li>
						<li>Aditi</li>
						<li>Charu</li>
						<li>Srushti</li>
						<li>Sellami</li>
						<li>Gourav</li>
						<li>Chris</li>
						<li>Nazanin</li>
						<li>Zeenat</li>
						<li>Josias</li>
						<li>Toshiya</li>
					</ul>
				</div>
			</section>
		</div>
	</section>
</main>


<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}



/* relevant portion */
#toggle-pseudos:checked ~ .container ul{
	--separator: ",";
	--connector: "and";

	padding: 0;
	margin: 0;
	display: inline;
	list-style-type: none;
}

/* spread these list items as text nodes */
#toggle-pseudos:checked ~ .container li{
	display: inline;
}

#toggle-pseudos:not(:checked) ~ .container li{
	margin: 0.5em 0;
}

#toggle-pseudos:not(:checked) ~ .container li::after{
	content: none;
}

#highlight-pseudos:not(:checked) ~ .container li::after{
	color: inherit;
	font-weight: 500;
}

/* "Add a comma after each list item." */
li::after{
	content: var(--separator);
	color: #ef5016;
	transition: color ease 200ms;
	font-weight: 700;
}

/* "Hold on, add a comma along with an 'and' after the second last list item." */
li:nth-last-of-type(2)::after{
	content: var(--separator) " " var(--connector) " ";
	color: #0058ff;
}

/* "Hang on, only add an 'and' after the second last list item if it's the first list item as well." */
li:first-of-type:nth-last-of-type(2)::after{
	content: " " var(--connector);
	color: #178717;
}

/* "Finally, add a fullstop after the last list item." */
li:last-of-type::after{
	content: ".";
	color: #0000ff;
}

/* no margin for item containers */
ul{
	margin: 0;
	list-style-type: square;
}

li::marker{
	color: var(--accent-alpha);
}

/* layout and decoration */
main{
	--accent: #7a24f2;
	--accent-alpha: #7a24f2bb;
	--text: #000;
	--text-secondary: #000000cc;
	--container: #fff;
	--section-color: #fff;
}

::selection{
	background-color: var(--accent-alpha);
	color: var(--section-color);
}

// html, body{
// 	position: relative;
// 	inset: 0;
// 	width: 100%;
// 	min-height: 100vh;
// 	padding: 0;
// 	margin: 0;
// }

main{
	color: var(--text);
	font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 1.28em;
	font-weight: 500;
	display: block;
	background-image: radial-gradient(circle at 50%, #fff, #eee);
	background-size: 100% 100%;
	background-attachment: fixed;
}

main{
	display: grid;
	place-items: center;
	background-color: transparent;
}

/* keep the <main> thing the <main> thing */
main{
	position: relative;
	inset: 0;
	max-width: 950px;
	min-width: 480px;
	margin: 3em 2em;
}

h1, h2{
	padding: 0;
	margin: 0;
	margin-top: -0.3ch; /* wanna get rid of those annoying margin */
	font-weight: 700;
	color: var(--accent);
}

h2{
	font-size: 1em;
}

h1::before, h2::before{
	content: "#"; /* some icing, I suppose */
	color: var(--text-secondary);
	font-size: 0.8em;
}

h2::before{
	font-size: 1em;
}

p{
	margin: 1em 0;
	line-height: 1.7;
}

/* checkboxes (disguised as toggles) */
input{
	position: relative;
	left: 0;
	top: 0;
	opacity: 0;
	margin: 0 -7px; /* a typical Windows checkbox is 14x14 in size */
}

input:checked + label{
	color: var(--accent);
}

input:checked + label::before{
	transform: translateY(30%) scaleX(1);
	transform-origin: left top;
}

input:focus-visible + label{
	outline: 2px solid var(--accent);
	outline-offset: 4px;
}

label{
	position: relative;
	margin: 0 0.6em 1em 0;
	font-weight: 600;
	cursor: pointer;
	transition: color ease 0.4s;
	color: var(--text-secondary);
	display: inline-block;
}

label::before{
	content: "";
	position: absolute;
	left: 0;
	bottom: 0;
	transform: translateY(30%) scaleX(0);
	width: 100%;
	height: 0.72em;
	background-color: currentColor;
	z-index: -1;
	transform-origin: right top;
	transition: transform ease 0.4s;
	opacity: 0.4;
}

label:hover{
	color: var(--text);
}

/* showcase the concept */
.container{
	position: relative;
	width: 100%;
	background-color: var(--container);
	border-radius: 4px;
	box-shadow: 0.8em 0.8em 0 0 var(--accent-alpha);
	border: 2px solid var(--accent);
	margin-top: 1.5em;
	padding: 0 2em;
	box-sizing: border-box;
}

.container section{
	margin: 1.8em 0;
}

.container div{
	margin-top: 0.5em;
	font-size: 0.9em;
	line-height: 1.6;
}
</style>