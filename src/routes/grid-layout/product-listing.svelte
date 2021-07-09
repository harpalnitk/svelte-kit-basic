<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Product Listing With Auto Placement' path='/grid-layout'></BasicPage>


<main>
    <ul class="listing">
        <li>
          <h2>Item One</h2>
          <div class="body">
            <p>The content of this listing item goes here.</p>
          </div>
          <div class="cta">
            <a href="">Call to action!</a>
          </div>
        </li>
        <li>
          <h2>Item Two</h2>
          <div class="body">
            <p>The content of this listing item goes here.</p>
          </div>
          <div class="cta">
            <a href="">Call to action!</a>
          </div>
        </li>
        <li class="wide">
          <h2>Item Three</h2>
          <div class="body">
            <p>The content of this listing item goes here.</p>
            <p>This one has more text than the other items.</p>
            <p>Quite a lot more</p>
            <p>Perhaps we could do something different with it?</p>
          </div>
          <div class="cta">
            <a href="">Call to action!</a>
          </div>
        </li>
        <li>
          <h2>Item Four</h2>
          <div class="body">
            <p>The content of this listing item goes here.</p>
          </div>
          <div class="cta">
            <a href="">Call to action!</a>
          </div>
        </li>
        <li>
          <h2>Item Five</h2>
          <div class="body">
            <p>The content of this listing item goes here.</p>
          </div>
          <div class="cta">
            <a href="">Call to action!</a>
          </div>
        </li>
      </ul>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
        width: 90vw;
        margin: 0 auto;
    }
    .listing {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
}
.listing .wide {
  grid-column-end: span 2;
}

.listing li {
  border: 1px solid cadetblue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.listing li h2{
background: goldenrod;
color: white;
margin: 0;
padding: 1rem;
text-align: center;
}
.listing .cta {
  margin-top: auto;
  border-top: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
  background: gold;
  color: whitesmoke;
}
.listing .body {
  padding: 10px;
}

</style>