<script>
   
</script>



<main>
<section class="img">
    <h1>Displaying Broken Images</h1>
    <div class="container">
        <div class="flex">
          <div class="card">
            <img src="https://i.imgur.com/jFKonXQ.jpeg" alt="Red and white Chevrolet" width="300" height="200" />
            <div class="card-content">
              <h2 class="card-title">Chevrolet</h2>
              <p class="card-body">I am really fast car</p>
            </div>
          </div>
        </div>
    
        <div class="flex">
          <div class="card">
            <!-- Image broken by deleting the parts of the image extension -->
            <img src="https://i.imgur.com/jFKonXQ.jp" alt="Red and white Chevrolet" width="300" height="200" />
            <div class="card-content">
              <h2 class="card-title">Chevrolet</h2>
              <p class="card-body">I am broken car</p>
            </div>
          </div>
        </div>
      </div>
</section>

<section class="blockquote">
<h1>In Blockquotes</h1>
<blockquote>
    Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Eveniet temporibus
     eligendi eaque optio adipisci aliquid
      totam! Nostrum cupiditate nisi a 
      excepturi veniam atque error architecto
       eligendi inventore earum rem quos.
       
  </blockquote>
</section>

<section class="list">
    <h1>Styling lists with bullet icons</h1>
    <div>
        <ul class="name-list">
          <li>John</li>
          <li>Michael</li>
          <li>Simpson</li>
          <li>Johnson</li>
        </ul>
    </div>
</section>
<section class="toggle">
    <h1>Animated Toggle Switch</h1>
    <form class="container">
        <label class="switch">
          <input type="checkbox" />
        </label>
      </form>
</section>
<section class="g-border">
    <h1>Gradient Border</h1>
 
        <div class="gradient-border">
            <figure>
              <img src="https://i.imgur.com/jFKonXQ.jpeg" alt="White and Red Chevrolet">
            </figure>
          </div>
 
</section>

<section class="overlays">
    <h1>Geadient Overlays</h1>
    <div class="container">
        <figure>
              <img src="https://i.imgur.com/jFKonXQ.jpeg" alt="White and Red Chevrolet">
              <figcaption>Chevrolet</figcaption>
        </figure>
      </div>
</section>
<section class="radio">
    <h1>Custom radio buttons</h1>
    <form class="form flex-center">
        <div class="form-row flex-center">
          <input type="radio" name="gender" id="Male" class="form-input">
          <label for="Male" class="form-label">Male</label>
        </div>
        <div class="form-row flex-center">
          <input type="radio" name="gender" id="Female" class="form-input">
          <label for="Female" class="form-label">Female</label>
        </div>
      </form>
</section>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
section{
    margin-bottom: 1rem;
    h1{
        margin: 1rem 0;
        border: 1px solid #ccc;
        text-align: center;
    }
}
section.img{
    img {
  display: block; /* Avoid the space under the image caused by line height */
  position: relative;
  width: 100%
}
img::before {
  background-color: hsl(0, 0%, 93.3%);
  border: 1px dashed hsl(0, 0%, 66.7%);
  /* ... */
  display: block;
  height: 100%;
  border-radius: 4px;
  content: "";
  position: absolute;
  width: 100%;
}
img::after {
  content: attr(alt);

  /* Some light styling */
  font-weight: bold;
  position: absolute;
  height: 100%;
  left: 0px;
  text-align: center;
  top: 1px;
  width: 100%;
}
// For Firefox attr(alt) will not work
img[alt] {
  text-align: center;
  font-weight: bold;
  color: hsl(0, 0%, 60%);
}




.card {
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 85.1%);
  border-radius: 6px;
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.1);
  margin: 2em auto;
  max-width: 18.75em;
  overflow: hidden;
}

.card-content {
  padding: 1em;
}
.card-body {
  font-size: 1.1em;
  letter-spacing: 0.04em;
}

@media screen and (min-width: 48em ) {
  .flex {
    display: flex;
    flex-wrap: wrap;
    padding: 0.6em;
  }

  .container {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
}
section.blockquote{
    blockquote {
  font-style: italic;
  line-height: 1.618;
  font-size: 1.2em;
  width: 30em;
  position: relative;
  padding: 40px 80px;
}
blockquote::before {
  content: open-quote;
  /* Place it at the top-left */
  top: 0;
  left: 0;
}

blockquote::after {
  content: close-quote;
  /* Place it at thee bottom-right */
  bottom: 0;
  right: 0;
}
blockquote::before,
blockquote::after {
  background-color: #cccccc;
  display: block;
  width: 60px;
  height: 60px;
  line-height: 1.618;
  font-size: 3em;
  border-radius: 100%;
  text-align: center;
  position: absolute;
}
}
section.list{
    .name-list {
  list-style: none;
}

.name-list li {
  font-size: 2em;
}

.name-list li::before {
  content: "😊";
  margin-right: 15px;
  font-size: 20px;
}
// While this is great and all, it’s 
// worth noting that we could actually 
// reach for the ::marker pseudo-element, 
// which is designed specifically for styling list markers
//https://css-tricks.com/list-markers-and-string-styles/
}
section.toggle{
    .container {
  background: #212221;
  background: linear-gradient(to right, #1560bd, #e90);
  border-radius: 50px;
  height: 40px;
  position: relative;
  width: 75px;    
}
// We’re going to “hide” the checkbox’s default 
// appearance while making it take up the full
//  amount of space. Weird, right? It’s invisible
//   but still technically there. We do that by:

// changing its position to absolute,
// setting the appearance to none, and
// setting its width and height to 100%.
input {
  -webkit-appearance: none; /* Safari */
  cursor: pointer; /* Show it's an interactive element */
  height: 100%;
  position: absolute;
  width: 100%;
}
// Now, let’s style the <input> element with its ::before
//  pseudo-element. This styling will change the appearance
//   of the input, bringing us closer to the final result.
input::before {
  background: #fff;
  border-radius: 50px;
  content: "";
  height: 70%;
  position: absolute;
  top: 50%;
  transform: translate(7px, -50%); /* Move styling to the center of the element */
  width: 85%;
}
// Next, we need to create the “toggle” button
//  and it just so happens we still have the
//   ::after pseudo-element available to make 
//   it. But, there are two things worth mentioning:

// The background is a linear-gradient.
// The “toggle” button is moved to the 
// center of the <input> with the transform property.
input::after {
  background: linear-gradient(to right, orange, #8e2de2);
  border-radius: 50px;
  content: "";
  height: 25px;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  transform: translate(7px, -50%);
  transition: all .4s;
  width: 25px;
}
input:checked::after {
  opacity: 1;
  transform: translate(170%, -50%);
}
}

section.g-border{
    position: relative;
    // The core idea is to create a gradient 
    // over the image and use the CSS z-index
    //  property with a negative value. The
    //   negative value pulls the gradient 
    //   below the image in the stacking order.
    //    This means the image always appears 
    //    on top as long as the gradient
    //     has a negative z-index.
    figure {
  margin: 0;
  padding: 10px;
}

img {
  width: 100%;
  display: block;
}

.gradient-border {
  width: 50%;
  position: relative;
  margin: 0 auto;
}

.gradient-border::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(#1a1a1a, #1560bd);
}

}

section.overlays{
    // This is similar to what we did in
    //  the previous example, but here,
    //   we’re applying the gradient on
    //    top of the image. Why would we 
    //    do that? It can be a nice way
    //    to add a little texture and 
    //    depth to the image. Or perhaps
    //     it can be used to either lighten
    //      or darken an image if 
    //      there’s text on top it
    //       that needs extra contrast
    //        for legibility.
    .container {
  margin: 0 auto;
  position: relative;
  width: 30%;
}

figure {
  width: 100%;
}

figure img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
// See that? There’s no z-index because
//  it’s OK for the gradient to stack
//   on top of the image. We’re also 
//   introducing transparency in the
//    background gradient, which lets 
//    the image bleed through the gradient.
//     You know, like an overlay.
figure::before {
  background-image: linear-gradient(to top right, #1a1a1a, transparent);
  content: "";
  height: 100%;
  position: absolute;
  width: 100%;
}

figcaption {
  margin: 0;
  font-weight: bold;
  font-size: 3em;
  position: absolute;
  bottom: 0.7em;
  color: #ffffff;
}
}
section.radio{
    /* Centers everything */
.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

/* Styles the form element */
.form {
  background: #ccc;
  height: 10vh;
  width: 80%;
  margin: 0 auto;
}

/* Styles the inputs */
.form-row {
  background: #fff;
  border-radius: 50px;
  height: 40px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  width: 150px;
}
// Now let’s remove the default styling of
//  the radio buttons, again, with appearance: none;
.form-input {
  -webkit-appearance: none; /* Safari */
  appearance: none;
}
// ::before should be positioned at the
//  top-left corner of the radio button,
//   and when it’s checked, we change its
//    background color.
.form-input::before {
  /* Renders the styles */
  content: '';
  /* Shows that it's interactive */
  cursor: pointer;
  /* Positions it to the top-left corner of the input */
  position: absolute;
  top: 0;
  left: 0;
  /* Takes up the entire space */
  height: 100%;
  width: 100%;
}

/* When the input is in a checked state... */
.form-input:checked::before {
  /* Change the background color */
  background: #21209c;
}

// We still need to iron a few things out using
//  ::after. Specifically, when the radio
//   button is checked, we want to change
//    the color of the circular ring to white 
//    because, in its current state, 
//    the rings are blue.
.form-input::after {
  /* Renders the styles */
  content: '';
  /* Shows that it's interactive */
  cursor: pointer;
  /* A little border styling */
  border-radius: 50px;
  border: 4px solid #21209c;
  /* Positions the ring */
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translate(0, -50%);
  /* Sets the dimensions */
  height: 15px;
  width: 15px;
}

/* When the input is in a checked state... */
.form-input:checked::after {
  /* Change ::after's border to white */
  border: 4px solid #ffffff;
}
.form-label {
  color: #21209c;
  font-size: 1.1rem;
  margin-left: 10px;
  z-index: 1; /* Makes sure the label is stacked on top */
  /* position: absolute; This is an alternative option */
}
.form-input:checked ~ .form-label {
  color: #ffffff;
}
}
</style>