<main>
    <div class="container">
        <p>darken:</p>
        <div class="stationary">
          <div class="move"> </div>
        </div> 
      </div>
      
      <div class="container">
        <p>lighten:</p>
        <div class="stationary" id="stationary2">
          <div class="move" id="move2"> </div>
        </div> 
      </div>
      
      <div class="container">
        <p>difference:</p>
        <div class="stationary" id="stationary3">
          <div class="move" id="move3"> </div>
        </div> 
      </div>
      
      <div class="container">  
        <p>screen:</p>
        <div class="stationary" id="stationary4">
          <div class="move" id="move4"> </div>
        </div> 
      </div>
      
      <div class="container">
        <p>multiply:</p>
        <div class="stationary" id="stationary5">
          <div class="move" id="move5"> </div>
        </div> 
      </div>
</main>

<style>
.stationary .move {
  mix-blend-mode: darken;
}

#stationary2 #move2 {
  mix-blend-mode: lighten;
}

#stationary3 #move3 {
  mix-blend-mode: difference;
}

#stationary4 #move4 {
  mix-blend-mode: screen;
}

#stationary5 #move5 {
  mix-blend-mode: multiply;
}


.container {
  position: relative;
  width: 50%;
  height: fit-content;
  margin: 20px auto;
  outline: black solid 1px;
  padding: 20px;
}

.container>p{
  margin: 0;
  padding: 0;
  font-size:2rem;
  font-wight: 700;
}


.stationary {
  width: 100%;
  height: 50px;
  background-color: red;
  margin: 0 auto;
  background-image: linear-gradient(45deg, #000000 12.50%, #f7f7f7 12.50%, #f7f7f7 25%, #b0aeae 25%, #b0aeae 37.50%, #858585 37.50%, #858585 50%, #000000 50%, #000000 62.50%, #f7f7f7 62.50%, #f7f7f7 75%, #b0aeae 75%, #b0aeae 87.50%, #858585 87.50%, #858585 100%);
}

.move {
  width: 200px;
  height: 50px;
/*   color: blue; */
  position: absolute;
  animation: mymove 9s infinite alternate cubic-bezier(0.63, 0.07, 0.15, 0.57);
  font-size: 3rem;
  font-weight: 700;
  background-image: linear-gradient(145deg, #000000 12.50%, #f7f7f7 12.50%, #f7f7f7 25%, #b0aeae 25%, #b0aeae 37.50%, #858585 37.50%, #858585 50%, #000000 50%, #000000 62.50%, #f7f7f7 62.50%, #f7f7f7 75%, #b0aeae 75%, #b0aeae 87.50%, #858585 87.50%, #858585 100%);
}

@keyframes mymove {
  0%   {left: 0%;}
  100% {left: calc(100% - 50px);}
}
</style>