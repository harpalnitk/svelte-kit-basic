


<main>
    <div class="card-list1">
        <div class="card1">
          <div class="card1__header">
            <div class="card1__header-date">May 25th 2020</div>
            <div class="card1__header-text">
              Card tricks are fun! Hi Hazel Card tricks are fun! Hi Hazel Card
              tricks are fun! Hi Hazel Card tricks are fun! Hi Hazel Card tricks are
              fun! Hi Hazel Card tricks are fun! Hi Hazel Card tricks are fun! Hi
              Hazel Card tricks are fun! Hi Hazel
            </div>
          </div>
          <div class="card1__author">
            <a href="" class="card1__author-avatar">
              <img src="/img/avatar/avatar-3.png" alt="" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div class="card1__author-name">
              <div class="card1__author-name--prefix">Author</div>
              Hazel Kour
            </div>
          </div>
        </div>
        <div class="card1">
          <div class="card-header1">
            <p>May 25th 2020</p>
            <h2>Card tricks are fun! Hi Hazel</h2>
          </div>
        </div>
        <div class="card1">
          <div class="card-header1">
            <p>May 25th 2020</p>
            <h2>Card tricks are fun! Hi Hazel</h2>
          </div>
        </div>
        <div class="card1">
          <div class="card-header1">
            <p>May 25th 2020</p>
            <h2>Card tricks are fun! Hi Hazel</h2>
          </div>
        </div>
        <div class="card1">
          <div class="card-header1">
            <p>May 25th 2020</p>
            <h2>Card tricks are fun! Hi Hazel</h2>
          </div>
        </div>
        <div class="card1">
          <div class="card-header1">
            <p>May 25th 2020</p>
            <h2>Card tricks are fun! Hi Hazel</h2>
          </div>
        </div>
        <div class="card1">
          <div class="card-header1">
            <p>May 25th 2020</p>
            <h2>Card tricks are fun! Hi Hazel</h2>
          </div>
        </div>
      </div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');

main {
  padding: 0;
  margin: 0;
		margin: 0 auto;
		width: min(70rem, 90vw);
  background-color: #17141d !important;
  color: white !important;
  font-family: 'DM Mono', monospace;
}
.card-list1 {
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
}

.card-list1::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.card-list1::-webkit-scrollbar-thumb {
  background: #201c29;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
.card-list1::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
}
.card1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: inherit;
  position: relative;

  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;

  border-radius: 16px;
  background-color: #17141d;
  box-shadow: -1rem 0 3rem #000; //h-offset (positive right negative left) | v-offset (positive  below, negative top)
  //| blur(optional)-the blur radius, higher the number, more blur will be the sahdow | spread(optional)-spread radius,
  //positive value increase size, negative value decreases |
  //color (optional)- text color is used if no value provided | inset (changes from outer to inner shadow)
  transition: 0.2s ease;

  //PSEUDO SELECTORS
  &:hover {
    transform: translateY(-1rem); // move card up
  }
  &:hover ~ .card1 {
    transform: translateX(130px);
  } //~ selects all siblings after the element

  &:not(:first-child) {
    margin-left: -130px;
  } // move all cards to the right except the first one

  //NESTED ELEMENTS
  &__header {
    max-height: 8.3rem; // 7*1(line-height for text * 6 lines)
    // // + (.8)(line height for p) + (.5) margin bottom for p

    // overflow: hidden;
    // text-overflow: ellipsis;

    color: white !important;

    &-text {
      font-size: 0.8rem;
      line-height: 1rem;
      margin-top: 0;

      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &:hover {
        background: linear-gradient(
          90deg,
          #ff8a00,
          #e52e71
        ); // trick to give linear gradient to text
        //first set background and then clip text
        text-shadow: none;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &-date {
      font-size: 0.5rem;
      line-height: 0.8rem;
      margin-bottom: 0.5rem;
    }
  }
  &__author {
    position: relative;
    display: grid;
    grid-template-columns: 75px 1fr;
    align-items: center;
    &-avatar img {
      display: block; // because images are inline
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      filter: grayscale(100%); //turns pic to black and white image
      margin: 16px 10px;
    }
    &-name {
      color: white;
      &--prefix {
        font-style: normal;
        font-weight: 700;
        color: #7a7a8c;
      }
    }
  }
}

.half-circle {
  position: absolute; // to position anywhere in the grid
  bottom: 0;
  left: 0;

  width: 60px; // all below to change semi circle to semi circle arc
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
}

</style>