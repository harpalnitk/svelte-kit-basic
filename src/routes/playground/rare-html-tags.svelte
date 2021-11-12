<main class="flex-center">
	<h3>Details-Summary Tag</h3>
	<section class="details-summary">
		<details>
			<summary>Heading of Paragraph</summary>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, consequatur. In minima
				consequatur vero autem, repellat delectus earum laudantium nisi molestias doloribus corrupti
				quas ipsa! Odio, minima amet. Dolorem eveniet dolorum quas accusamus eligendi sunt
				reiciendis amet inventore deserunt eum, corrupti ipsa consequatur, porro animi rem esse
				numquam facilis placeat fugit iste fugiat veniam. Pariatur sunt sapiente vero
				necessitatibus, corrupti voluptatum minus reprehenderit quasi. Accusamus debitis eos earum,
				maiores sed molestiae quae sequi cumque inventore, facilis repudiandae delectus veniam
				quisquam, quod id assumenda nulla labore rem quas odio obcaecati suscipit rerum maxime?
				Doloremque deleniti tenetur velit laudantium similique rem vitae!
			</p>
		</details>
	</section>
	<h3>Different Types of input Types</h3>
	<section class="input-types">
		<h4>Color input</h4>
		<input type="color" />
		<h4>Range input</h4>
		<input type="range" value="10" min="1" max="100" />
		<h4>Date</h4>
		<input type="date" />
		<h4>Date Time</h4>
		<input type="date-time" />
		<h4>Date Time Local</h4>
		<input type="datetime-local" />
		<h4>Time</h4>
		<input type="time" />
		<h4>Week</h4>
		<input type="week" />
	</section>
	<h3>Different Types of Tags</h3>
	<section class="tags">
		<h4>Meter tag</h4>
		<meter max="100" min="1" value="70" />
		<h4>Progress</h4>
		<progress />
		<h4>Progress with value</h4>
		<progress value="70" max="100" />
	</section>
	<h3>DataList</h3>
	<section class="datalist">
		<input type="text" list="suggestions" size="50px" placeholder="Search cars" />
        <datalist id='suggestions'>
            <option value='mercedes'>Detail: A nice car</option>
            <option>Volvo</option>
            <option>Maruti</option>
            <option>Hyundai</option>
            <option>Tata</option>
            <option>Kia</option>
        </datalist>
	</section>
    <h3>Optgroup</h3>
    <section class='optgroup'>
        <select>
            <optgroup label='A'>
                <option value="abc">ABC</option>
                <option value="adb">ADB</option>
                <option value="azx">AZX</option>
                <option value="acc">ACC</option>
            </optgroup>
            <optgroup label='B'>
                <option value="bbc">BBC</option>
                <option value="bdb">BDB</option>
                <option value="bzx">BZX</option>
                <option value="bcc">BCC</option>
            </optgroup>

        </select>
    </section>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		background: #f8f8f8;
		flex-direction: column;
		h3 {
			font-weight: 700;
			font-size: 2em;
			margin-bottom: 1rem;
		}
	}
	section {
		width: 80%;
		padding: 1rem;
		margin-bottom: 1rem;
		border: 1px solid greenyellow;
	}

	section.details-summary {
	}
	section.input-types {
		display: flex;
		flex-direction: column;
		input,
		h4 {
			margin: 1rem auto;
		}
	}

	section.tags {
		display: flex;
		flex-direction: column;
		h4 {
			margin: 1rem auto;
		}
	}
	section.datalist {
		input[type='text'] {
			margin: 50px;
			padding: 10px;
			border-radius: 10px;
			outline: none !important;
			border-width: 1px;
			box-shadow: 0 0 10px gray;
		}
	}
</style>
