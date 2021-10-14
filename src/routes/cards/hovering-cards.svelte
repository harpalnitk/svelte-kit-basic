

<main>

      <div class="card card1">
        <img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="">
        <h3>Pyramids</h3>
        <p>The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt. As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids.</p>
      </div>
      
      <div class="card card2">
        <img src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png" alt="Eiffel Tower">
        <h3>Statue of Liberty</h3>
        <p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</p>
      </div>
      
      <div class="card card3">
        <img src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png" alt="">
        <h3>Taj Mahal</h3>
        <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.</p>
      </div>
   
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
     min-height: 100vh;
     position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem,1fr));
    gap: 1rem;
    place-content: center;
    place-items: center;
    // background-color: #dfe6e9;
    transform: perspective(900px);
    transform-style: preserve-3d;
  -webkit-transform: perspective(900px);
  -webkit-transform-style: preserve-3d;
}

.card{
  padding: .5rem;
  text-align:center;
  position: relative;
  width: 18rem;
  height: 25rem;
  transform: rotatex(50deg) translatey(-15rem) translatez(-7rem);
  box-shadow: 0px 20px 60px rgba(0,0,0, 0.5);
}
.card:hover{ 
  transform: rotatex(0deg);
  transform: rotatez(0deg);
  transition:.6s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
 
}
 .card1 {
  background: linear-gradient(rgb(225,150,58),rgb(227,144,91));
}
.card2 {
  background: linear-gradient(rgb(93,94,170),rgb(93,66,103));
}
.card3 {
  background: linear-gradient(#ff5252, #b33939);
}

.card img{
  transform: translateY(15px);
  width:80%;
  height:40%;
}
h3{
  font-size:1.5rem;
  font-family: 'Abel', sans-serif;
  color:rgb(255,255,255);
  text-shadow: 0 0 2px rgb(255,255,255);
  // transform: translatey(10px);
}

p{
  
  font-family: 'Abel', sans-serif;
  color: white;
  // text-align:center;
  // width: 90%;
  // transform: translatex(12px);
}

</style>