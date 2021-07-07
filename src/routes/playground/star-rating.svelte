<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Scalable Star Rating Without JS Image SVG'></BasicPage>


<main>
    <div class="test">

    </div>
    <p>5 star rating </p>
    <div class="stars">
      <input type="radio" name="rating" value="1" />
      <input type="radio" name="rating" value="2" />
      <input type="radio" name="rating" value="3" />
      <input type="radio" name="rating" value="4" />
      <input type="radio" name="rating" value="5" />
      <i></i>
    </div>
    <p>more stars with a bigger size </p>
    <div class="stars" style="--s:80px">
      <input type="radio" name="rating2" value="1" />
      <input type="radio" name="rating2" value="2" />
      <input type="radio" name="rating2" value="3" />
      <input type="radio" name="rating2" value="4" />
      <input type="radio" name="rating2" value="5" />
      <input type="radio" name="rating2" value="6" />
      <input type="radio" name="rating2" value="7" />
      <i></i>
    </div>
    <p>only 3 stars and small size </p>
    <div class="stars" style="--s:30px">
      <input type="radio" name="rating3" value="1" />
      <input type="radio" name="rating3" value="2" />
      <input type="radio" name="rating3" value="3" />
      <i></i>
    </div>
    <p>5 star rating with a default value</p>
    <div class="stars">
      <input type="radio" name="rating4" value="1" />
      <input type="radio" name="rating4" value="2" />
      <input type="radio" name="rating4" value="3" checked />
      <input type="radio" name="rating4" value="4" />
      <input type="radio" name="rating4" value="5" />
      <i></i>
    </div>
</main>



<style lang="scss">

	@import '../../styles/vars';
    main{
    width: min(100rem, 90vmin);
	height: min(100rem, 90vmin);
    margin: 0 auto;
    position: relative;
    }

    .test{
    // width: 20rem;
    // height:20rem;
    
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 5px;    // the element covers entire height except 5px from the bottom
    left: 0px;
    border: 1px solid grey;
    background:
      linear-gradient(rgba(255,0,0,1) 0 0),   // for hover effect; 
      //top most background is used; but if the variable value is not set
      //then top most is not used and second one is used
     linear-gradient(gold 0 0),   //for selection
     linear-gradient(blue 0 0),
     #ccc;
     background-size:10px 10px,20px 20px;// background-size can be used only with position absolute element with inset
     background-repeat:no-repeat;
}

    .stars {
  --s:50px;
  position:relative;
  display:inline-flex;
}
.stars input {
    // The variable --s will define the size of 
    //our inputs that we make invisible using opacity:0.
    // Everything is within a flexbox container
    // (an inline one to easily integrate the star 
    //rating like an image or a simple text).
  width:var(--s);
  height:var(--s);
  margin:0;
  opacity:0;
  cursor:pointer;
}
.stars i {
  position:absolute;
  inset:0 0 calc(var(--s)*0.1);
  pointer-events:none;

  //First, we make it an absolute element 
  //that will cover all the div and logically 
  //all the inputs. We use pointer-events:none; 
  //to be able to interact with the inputs but 
  //still have the mouse cursor on the <i>.

// FOR STAR MASKING START
  --v1:transparent,#000 0.5deg 108deg,#0000 109deg;
  --v2:transparent,#000 0.5deg  36deg,#0000  37deg;
  -webkit-mask:
    conic-gradient(from 54deg  at calc(var(--s)*0.68) calc(var(--s)*0.57),var(--v1)),
    conic-gradient(from 90deg  at calc(var(--s)*0.02) calc(var(--s)*0.35),var(--v2)),
    conic-gradient(from 126deg at calc(var(--s)*0.5)  calc(var(--s)*0.7) ,var(--v1)),
    conic-gradient(from 162deg at calc(var(--s)*0.5)  0                  ,var(--v2));
  -webkit-mask-size: var(--s) var(--s);
  -webkit-mask-composite: xor,destination-over;
  mask-composite: exclude,add;
  // FOR STAR MASKING END
  background:
      linear-gradient(rgba(255,0,0,var(--o,0.3)) 0 0),   // for hover effect
     linear-gradient(gold 0 0)   //for selection
     #ccc;
   
  background-size:calc(var(--l,0)*var(--s)) 100%,calc(var(--p,0)*var(--s)) 100%; 
  //first linear gradient of background applied on first backround-size
  //second linear gradient of background applied on second backround-size
   //third linear gradient applied on full width and height of the element as no background-size is specified
  background-repeat:no-repeat;
}

.stars:focus-within {
  outline:1px solid;
}


//:focus-within will allow me to style the whole div when 
//interacting with the inputs (good for accessibility)

//When an input is active (clicked on) I change the 
//semi-transparent color to an opaque one to highlight the click action.

//On :checked I update the variable --p based on 
//the input index. We can easily generate the code using 
//SASS/LESS or by doing some copy/past (it only take few 
//seconds to write the code that can cover up to 20 inputs)

//On :hover we do the same logic but with the variable --l.

input:active ~ i{--o:1}

input:nth-child(1):checked ~ i {--p:1}
input:nth-child(2):checked ~ i {--p:2}
input:nth-child(3):checked ~ i {--p:3}
input:nth-child(4):checked ~ i {--p:4}
input:nth-child(5):checked ~ i {--p:5}
input:nth-child(6):checked ~ i {--p:6}
input:nth-child(7):checked ~ i {--p:7}
input:nth-child(8):checked ~ i {--p:8}
input:nth-child(9):checked ~ i {--p:9}
input:nth-child(10):checked ~ i {--p:10}
/*input:nth-child(N):checked ~ i {--p:N}*/

input:nth-child(1):hover ~ i {--l:1}
input:nth-child(2):hover ~ i {--l:2}
input:nth-child(3):hover ~ i {--l:3}
input:nth-child(4):hover ~ i {--l:4}
input:nth-child(5):hover ~ i {--l:5}
input:nth-child(6):hover ~ i {--l:6}
input:nth-child(7):hover ~ i {--l:7}
input:nth-child(8):hover ~ i {--l:8}
input:nth-child(9):hover ~ i {--l:9}
input:nth-child(10):hover ~ i {--l:10}
/*input:nth-child(N):hover ~ i {--l:N}*/



</style>