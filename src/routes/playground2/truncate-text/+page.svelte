<!-- https://css-tricks.com/recreating-mdns-truncated-text-effect/ -->
<main>
    <div class="card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur temporibus quae aliquam nobis nam accusantium, minima quam iste magnam autem neque laborum nulla esse cupiditate modi impedit sapiente vero?</p>
      </div>
</main>

<style>
main {
    --base: 1.35; /* Handy multiplier for consistency across elements */
  background-image: radial-gradient(circle at top, #ddd, #0000);
  display: grid;
  height: 100vh;
  place-items: center;
}

.card {
  border: 2px solid #000;
  border-radius: 16px;
  color: #000;
  font-size: calc(1rem * var(--base));
  line-height: var(--base);
  max-width: 35ch;
  padding: calc(1rem * var(--base));
}
.card p {
  max-height: calc(
    4rem * var(--base)
  ); /* Set a cut-off point for the content */
  overflow: hidden; /* Cut off the content */
  -webkit-mask: 
    linear-gradient(#000 0 0) top/100% calc(100% - calc(1rem * var(--base) + 1px)) no-repeat,
    linear-gradient(to left, #0000, #000 80%) bottom / 100% calc(1rem * var(--base) + 1px) no-repeat;
}

</style>