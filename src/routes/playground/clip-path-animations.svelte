<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Clip Path Animations' path='/playground'></BasicPage>

<main>
    <!-- clip-path using inset -->
<div class="selector-inset box">

</div>
<div class="selector-inset-rounded-corner box">

</div>
<div class="selector-inset-rounded-corner2 box">

</div>
   <!-- clip-path using circle -->
<div class="selector-circle box">

</div>
 <!-- clip-path using ellipse -->
<div class="selector-ellipse box">

</div>
<!-- clip-path using path -->
<div class="myClip">
    <svg>
        <clipPath id="clipPath">
            <path d="M10,10 q60,60 100,0 q50,50 50,50 l40,0 l-40,40 l-100,-20"/>
        </clipPath>
    </svg>
 </div>
 <!-- clip-path using polygon -->
 <div class="selector-polygon-parallelogram box">

</div>
<div class="selector-polygon-caret box">

</div>
<div class="selector-polygon-pentagon box">

</div>
<div class="selector-polygon-diamond box">

</div>

<!-- Animations using clip-path -->

<!-- infinite circles -->
<div class="circles"></div>
<!-- Dancing squares -->
<div class="squares"></div>
<!-- Flipping Image -->
<div>
    <img class='flipping-image' src="/img/background/background-1.jpg" alt="Flipping Image" />
</div>
<!-- Changing-shape Image -->
<div class='img-container'>
    <img class='changing-shape-image' src="/img/background/background-1.jpg" alt="Flipping Image" />
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
        display: grid;
        place-items: center;
    }
    .box{
        width: 300px;
        height:300px;
        background: darkgoldenrod;
        border: 1px solid dodgerblue;
        margin-bottom: 1rem;
       
    }
    .selector-inset {
        //The inset() function allows you to clip an element 
       //from all four sides of the coordinate system. 
       // The result is a visible rectangle.

//The way you assign values to inset() 
//is similar to the way you assign values to the margin or padding property.
   clip-path: inset(20px 30px 35px 20px);
}
.selector-inset-rounded-corner {
   clip-path: inset(20px 30px 35px 20px round 20px);
}
.selector-inset-rounded-corner2 {
    clip-path: inset(20px 30px 35px 20px round 20px 50px);
}
.selector-circle {
   clip-path: circle(100px at 40%)
}
.selector-ellipse {
   clip-path: ellipse(80px 60px at 50% 50%);
}

.myClip {
   background-color: #1560bd;
   clip-path: url("#clipPath");
}

.selector-polygon-parallelogram {
   background-color: #1560bd;
   clip-path: polygon(20% 0%, 80% 0%, 70% 100%, 10% 100%);
}
.selector-polygon-caret {
   background-color: #1560bd;
   clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}
.selector-polygon-pentagon {
   background-color: #1560bd;
   clip-path: polygon(50% 0%, 100% 45%, 80% 100%, 20% 100%, 0% 45%);
}
.selector-polygon-diamond {
   background-color: #1560bd;
   clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

//Animations using Clip-path
//1. Circle

.circles {
    background: #1a1a1a;
    clip-path: circle(80px at 50% 50%);
    height: 200px;
    width: 200px;
    border-radius: 50%;
    animation-name: infiniteCircle;
    animation-duration: 3s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
}
@keyframes infiniteCircle {
    from {
        background: #f00;
        clip-path: circle(50%);
    }50% {
        background: #ffd700;
        clip-path: circle(35%);
    }to {
        background: #f0f;
        clip-path: circle(75%);
    }
}

//2. Dancing Squares

.squares {
    width: 250px;
    height: 250px;
    background-image: linear-gradient(to right, #000000, #e74c3c);
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    animation-name: dancingSquares;
    animation-duration: 4s;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
}

@keyframes dancingSquares {
    25% {
        background-image: linear-gradient(to right, #f0c27b, #4b1248);
        clip-path: polygon(20% 0%, 100% 40%, 70% 100%, 10% 100%);
    }50% {
        background-image: linear-gradient(to right, #c21500, #ffc500);
        clip-path: polygon(0% 45%, 100% 20%, 50% 75%, 0% 100%);
}75% {
        background-image: linear-gradient(to right, #00d2ff, #3a7bd5);
        clip-path: polygon(100% 38%, 100% 38%, 66% 100%, 0% 53%);
   }
}

//3. Flipping Image
.flipping-image {
    width: 600px;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    animation-name: flippingShapes;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
@keyframes flippingShapes {
    0% {
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    }50% {
        clip-path: polygon(50% 50%, 90% 88%, 80% 10%, 20% 10%, 8% 90%);
    }100% {
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
   }
}

//4. Changing Shape-Image
.img-container {
    width: 30em;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    animation-name: changeShapes;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}
.changing-shape-image {
    max-width: 100%;
}
@keyframes changeShapes {
    from {
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }50% {
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
   }75% {
      clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
  }to {
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
}
</style>