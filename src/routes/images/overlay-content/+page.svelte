<script>
   
    let hideOverflow;
</script>



<main>
    <label class="checkbox">
        <input type="checkbox" id="overflow" bind:checked={hideOverflow} /> Hide image overflow
      </label>
      <div class="container" style="overflow: {hideOverflow ? 'hidden' : 'visible'}">
        <h2 class="title">Welcome to the snuggle zone</h2>
        <img class="image" src='https://images.unsplash.com/photo-1611003228577-e610e9a727c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjgzMzExNw&ixlib=rb-1.2.1&q=80&w=1200' width="1200" height="675" alt='Puppy on its stomach with eyes closed'>
      </div>
</main>



<style lang="scss">
	@import '../../styles/vars';
  //  @import url("https://fonts.googleapis.com/css2?family=Gorditas&display=swap");

.container {
  display: grid;
  grid-template: "container";
  place-items: center;
  place-content: center;
  overflow: hidden;
  max-height: clamp(450px, 50vh, 600px);
}

.container > * {
  grid-area: container;
  max-width: 1000px;
}

.container .image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* Absolute position method */

/* .container {
  position: relative;
  max-height: clamp(400px, 50vh, 600px);
}

.container::before {
  content: '';
  display: block;
  padding-top: 52.25%;
}

.container > * {
  max-width: 1000px;
}

.container .image {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
} */

/* Other element styles */



main {
  --space: 6rem;
  display: grid;
  place-items: center;
  padding: var(--space) 0;
  grid-gap: var(--space);
  font-family: "Helvetica", sans-serif;
  line-height: 1.2;
  position: relative;
}

.checkbox {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  background-color: inherit;
  padding: 1rem;
  opacity: 0.9;
}

.container {
  --border: 4px dashed dodgerblue;
  position: relative;
  border-top: var(--border);
  border-bottom: var(--border);
  margin: 0 auto;
  width: 100%;
  color: white;
}

.title {
  position: relative;
  z-index: 1;
  //font-family: "Gorditas", sans-serif;
  font-size: clamp(1rem, 5vw, 3rem);
  padding: 0.5rem;
  text-align: center;
}

/* Pull image behind dashed border */
.container .image {
  position: relative;
  z-index: -1;
}
</style>