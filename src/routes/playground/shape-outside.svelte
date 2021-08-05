<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Shape Outside Property" />

<section class="first">
	<img src="/img/misc/bottle.png" alt="" />
	<div>
		<input type="radio" name="blue" checked /> <br />
		<input type="radio" name="blue" /> <br />
		<input type="radio" name="blue" /> <br />
		<input type="radio" name="blue" />
	</div>
</section>

<section class="second">
	<div>
		<img
			alt="globe"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Globcal_medium_resolution_globe.png/460px-Globcal_medium_resolution_globe.png"
		/>
		<div class="l">
			<a href="1">Formation</a><br />
			<a href="2">Atmosphere</a><br />
			<a href="3">Heat</a><br />
			<a href="4">Gravitation</a>
		</div>
	</div>

	<div>
		<img
			alt="globe"
			src="/img/misc/globe.png"
		/>
		<div class="r">
			<a href="1">Moon</a><br />
			<a href="2">Climate</a><br />
			<a href="3">Rotation</a><br />
			<a href="4">Orbit</a>
		</div>
	</div>
</section>

<section class="third">
   
        <img alt='diamond' src='/img/misc/diamond.png' >
        <details>
          <summary>Click to know more!</summary>
          <ul>
            <li>The diamond is now known as the Sancy</li>
            <li>It comprises two back-to-back crowns</li>
            <li>It's likely of Indian origin</li>
          </ul>
        </details>
       
</section>

<section class="fourth">
    <img alt='' src='/img/misc/nasa.png'>
<div><!-- triangle --></div>
<ul>
  <li><a href='1'>Home</a></li>
  <li><a href='2'>Projects</a></li>
  <li><a href='3'>Shop</a></li>
  <li><a href='4'>Contact</a></li>
  <li><a href='5'>Media</a></li>
</ul>
</section>

<style lang="scss">
	@import '../../styles/vars';
	//     main{
	//     min-height: 100vh;
	//     position: relative;
	//     width: min(70rem, 90vw);
	//     margin: 0 auto;
	// }
	section.first div {
		padding-top: 80px;
	}

	section.first {
		margin: auto;
		margin-top: calc(50vh - 250px);
		width: 380px;
		height: 500px;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		background-color: ghostwhite;
	}

	section.first img {
		height: 500px;
		width: auto;
		shape-outside: url('/img/misc/bottle.png');
		float: left;
		filter: brightness(1.5);
	}

	section.first input {
		width: 25px;
		height: 25px;
		box-sizing: content-box;
		background: linear-gradient(45deg, pink, beige);
		border: 10px solid #231714;
		margin-left: 20px;
		appearance: none;
		-webkit-appearance: none;
		border-radius: 50%;
		cursor: pointer;
	}

	section.first input:not(:first-child) {
		margin-top: 5px;
	}

	section.first input:checked {
		background: #d02017;
	}

	section.first input:checked::after {
		font-weight: bold;
	}

	section.first input::after {
		display: inline-block;
		text-indent: 50px;
		font-size: 24px;
		font-family: 'Satisfy', cursive;
		width: max-content;
		background: linear-gradient(to right, #231714 40%, #d02017);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	section.first input:nth-of-type(1)::after {
		content: 'One bottle';
	}
	section.first input:nth-of-type(2)::after {
		content: 'Set of six';
	}
	section.first input:nth-of-type(3)::after {
		content: 'Twelve';
	}
	section.first input:nth-of-type(4)::after {
		content: 'A whole crate';
	}

	section.first input:hover::after {
		text-decoration-line: underline;
		text-decoration-color: #d02017;
		text-decoration-style: solid;
	}

	@media (max-width: 440px) {
		section.first {
			transform: scale(0.6);
		}
	}

	///////////////////SECOND///////////////
	.second {
		width: 500px;
		display: grid;
		margin: auto;
		margin-top: 2rem;
		transform: translateX(125px);
	}

	.second img {
		height: 250px;
		float: left;
		shape-outside: circle(40%);
	}
/* stack both sets of menus on the same grid cell */
	section.second > div {
		grid-area: 1/1;
	}
/* one set of menus is flipped and moved sideways over the other */
	.second .r {
		transform: rotateY(180deg) translateX(250px);
	}
/* links inside the flipped set of menus are rotated back */
	.second .r > a {
		display: inline-block;
		transform: rotateY(180deg) translateX(-40px);
	}

	.second .l {
		transform: translateX(30px);
	}
/* hide one of the images */
	section.second > div:nth-of-type(2) img {
		visibility: hidden;
	}

	section.second img + div {
		line-height: 70px;
	}

    /*An element only ever floats left or right.
     There’s no center floating element where 
     content wraps around both the sides. 
     In order to achieve the design where links
      wrap on both the sides of the image,
       I made two sets of links and flipped
        one of the sets horizontally. 
        I used the same image with a circle()
         CSS shape value in both the sets
          so the shapes match even after
           the rotation.
            The text of the links of the 
            flipped set will appear upside
             down sideways,
              so it’s rotated back.*/

	.second a {
		font: bold 24px 'eb garamond';
		color: seagreen;
		text-decoration: none;
		padding: 10px;
	}

	.second a:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 650px) {
		section.second {
			transform: scale(0.6);
		}
	}


    //////////////////////THIRD///////////////////////

    section.third{
        width: 400px;
  margin: auto;
  margin-top: calc(50vh - 100px);
  border-bottom: 20px solid red;
  user-select: none;
  -webkit-user-select:  none;
  -moz-user-select:  none;

        img {
  height: 200px;
  float: left;
  shape-outside: url("/img/misc/diamond.png");
  shape-margin: 20px;
}

summary {
  background: red;
  color: white;
  cursor: pointer;
  font-weight: bold;
  width: 80%; 
  height: 30px; line-height: 30px;
}

summary:focus { outline: none; }
summary::-webkit-details-marker, summary::marker { display: none; }

details { font-family: 'eb garamond'; }

ul { list-style: none; margin: 0; }

li { margin: 30px 10px; }
    }

    //////////////////////FOURTH////////////////////////

    section.fourth{

  background: ghostwhite;
  font-family: 'eb garamond';
  margin: auto;
  margin-top: 12rem;
  position: relative;
  width: 385px;
   height: 400px;

        div{
      width: 0; height: 0;
      --d:  200px;
      border-right: var(--d) solid transparent;
      border-bottom: var(--d) solid transparent;
      border-left: var(--d) solid red;
      float: left;
      shape-outside: polygon(0 0, var(--d) 0, 0 var(--d));
}

ul{
  list-style: none;
  padding-top: 25px;
}

li:not(:first-child){ margin-top: 10px; }

li{
  background: gold;
  padding-left: 50px;
  margin-left: -40px;
}

a:link{
  color: navy;
  font-weight: bold;
  text-decoration: none;
}

img{
  position: absolute;
  left: 10px; top: 10px;
  width: 100px;
}

@media (max-width: 440px){
   transform: scale(.8); 
}
    }
</style>
