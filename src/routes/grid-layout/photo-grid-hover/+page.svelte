<main class='flex-center'>
    <h3>Basic Grid</h3>
    <section class='basic'>
      
        <div class="grid one">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <div class="grid two">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
    </section>
    <section class="basic-photo">
        <div class="gallery">
            <img src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse">
            <img src="https://picsum.photos/id/15/300/300" alt="a waterfall and many rocks">
            <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain">
            <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers">
            <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees">
            <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky">
            <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape">
            <img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings">
            <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain">
          </div>
    </section>
    <h3>Variable rows and columns</h3>
    <section class="four-rows">
        <div class="gallery">
            <img src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse">
            <img src="https://picsum.photos/id/15/300/300" alt="a waterfall and many rocks">
            <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain">
            <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers">
            <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees">
            <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky">
            <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape">
            <img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings">
            <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain">
            <img src="https://picsum.photos/id/1016/300/300" alt="a great view of a canyon">
            <img src="https://picsum.photos/id/1015/300/300" alt="a great view of a river between mountains">
            <img src="https://picsum.photos/id/1020/300/300" alt="a wild bear appeared">
          </div>
    </section>
    <h3>Different width and height</h3>
    <section class="different-width-height">
        <div class="gallery">
            <img src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse">
            <img src="https://picsum.photos/id/15/300/300" alt="a waterfall and many rocks">
            <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain">
            <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers">
            <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees">
            <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky">
            <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape">
            <img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings">
            <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain">
            <img src="https://picsum.photos/id/1016/300/300" alt="a great view of a canyon">
            <img src="https://picsum.photos/id/1015/300/300" alt="a great view of a river between mountains">
            <img src="https://picsum.photos/id/1020/300/300" alt="a wild bear appeared">
          </div>
    </section>
    <h3>Expanding Panel</h3>
    <section class="expanding-panel">
        <div class="gallery">
            <img src="https://picsum.photos/id/1028/800/600" alt="a forest after an apocalypse">
            <img src="https://picsum.photos/id/15/800/600" alt="a waterfall and many rocks">
            <img src="https://picsum.photos/id/1040/800/600" alt="a house on a mountain">
            <img src="https://picsum.photos/id/106/800/600" alt="sime pink flowers">
            <img src="https://picsum.photos/id/136/800/600" alt="big rocks with some trees">
          </div>
    </section>
    </main>
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: #f8f8f8;
            flex-direction: column;
            h3{
                font-weight: 700;
                font-size: 2em;
                margin-bottom: 1rem;
            }
        }
        section{
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .basic{
            .grid {
  display: inline-grid;
  grid-gap: 5px;
  margin: 10px;
}
.one {
  grid-template-columns: repeat(3,auto);
  /* grid-auto-flow: row;  the default value */
}
.two {
  grid-template-rows: repeat(3,auto);
  grid-auto-flow: column;
}

/**/
.grid {
  max-width:600px;
  margin:10px;
  counter-reset:num;
}
.grid *{
  border:2px solid;
  font-size:30px;
  box-sizing:border-box;
  font-family:sans-serif;
  display:grid;
  place-content:center;
  padding:20px;
}
.grid *:before {
  content:counter(num);
  counter-increment:num;
}
        }

        .basic-photo{
            .gallery {
  --s: 150px; /* control the size */
  --g: 10px;  /* control the gap */
  --f: 1.5;   /* control the scale factor */
  
  display: grid;
  gap: var(--g);
  width: calc(3*var(--s) + 2*var(--g));
  aspect-ratio: 1;
  grid-template-columns: repeat(3,auto);
}

.gallery > img {
    //What I’m doing here is telling the browser that the 
    // images need to have 0 width and height but also need to 
    // have a minimum height equal to 100%… but 100% of what?
    //  When using percentages, the value is relative to
    //   something else. In this case, our image is placed
    //    inside a grid cell and we need to know that size
    //     to know what’s 100% is relative to.

    //The browser will first ignore min-height: 100% 
    // to calculate the size of the grid cells, but it will
    //  use the height: 0 in its calculation. That means 
    //  our images will not contribute to the size of the
    //   grid cells… because they technically have no physical size. 
  width: 0;
  height: 0;
  //Now that we have the dimensions of our grid’s cells,
//    the browser will use it with min-height: 100% 
//    (and min-width: 100%) which will force the images
//     to completely fill the space of each grid cell.
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: .35s linear;
}

.gallery img:hover{
    //What I said is still true but I am making an exception
    //  for the hovered image. I am telling the browser that 
    //  only one image will have a size that’s not equal 
    //  to zero — so it will contribute to the dimension 
    //  of the grid — while all the others remain equal to 0
  filter: grayscale(0);
  width:  calc(var(--s)*var(--f));
  height: calc(var(--s)*var(--f));
}
        }

        .four-rows{
            .gallery {
  --n: 3; /* number of rows*/
  --m: 4; /* number of columns */
  --s: 150px; /* control the size */
  --g: 10px;  /* control the gap */
  --f: 1.5;   /* control the scale factor */
  
  display: grid;
  gap: var(--g);
  width:  calc(var(--m)*var(--s) + (var(--m) - 1)*var(--g));
  height: calc(var(--n)*var(--s) + (var(--n) - 1)*var(--g));
  grid-template-columns: repeat(var(--m),auto);
}

.gallery > img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: .35s linear;
}

.gallery img:hover{
  filter: grayscale(0);
  width:  calc(var(--s)*var(--f));
  height: calc(var(--s)*var(--f));
}
 
        }

        //DIFFERENT WIDTH AND HEIGHT

        .different-width-height{
            .gallery {
  --n: 3; /* number of rows*/
  --m: 4; /* number of columns */
  --h: 120px; /* control the height */
  --w: 150px; /* control the width */
  --g: 10px;  /* control the gap */
  --f: 1.5;   /* control the scale factor */
  
  display: grid;
  gap: var(--g);
  width:  calc(var(--m)*var(--w) + (var(--m) - 1)*var(--g));
  height: calc(var(--n)*var(--h) + (var(--n) - 1)*var(--g));
  grid-template-columns: repeat(var(--m),auto);
}

.gallery > img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: .35s linear;
}

.gallery img:hover{
  filter: grayscale(0);
  width:  calc(var(--w)*var(--f));
  height: calc(var(--h)*var(--f));
}
 
        }

        .expanding-panel{
            .gallery {
  --n: 1; /* number of rows*/
  --m: 5; /* number of columns */
  --g: 0px;  /* control the gap */
  --f: .8;   /* control the scale factor */
  
  display: grid;
  gap: var(--g);
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(var(--m),auto);
}

.gallery > img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: .35s linear;
}

.gallery img:hover{
  filter: grayscale(0);
  width:  calc(100vh*var(--f)/var(--n));
  height: calc(100vw*var(--f)/var(--m));
}


        }
        
    </style>