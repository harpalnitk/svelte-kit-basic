<main class="flex-center">
    <h3>Basic Loader</h3>
	<section class="basic-bars">
		<div class="loader" />
	</section>
<h3>Background position variation</h3>
    <section class="position-variation">
		<div class="loader" />
	</section>

    <h3>Advanced</h3>
    <section class="advanced">
		<div class="bars-1"></div>
<div class="bars-2"></div>
<div class="bars-3"></div>
<div class="bars-4"></div>
<div class="bars-5"></div>
<div class="bars-6"></div>
<div class="bars-7"></div>
<div class="bars-8"></div>
<div class="bars-9"></div>
<div class="bars-10"></div>
	</section>

    <h3>With Background masking</h3>
    <section class="with-background-masking">
		<div class="loader"></div>
	</section>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		background: #f8f8f8;
		flex-direction: column;
		h3 {
			font-weight: 700;
			font-size: 2em;
			margin-bottom: 1rem;
		}
	}
	section {
		width: 100%;
		padding: 1rem;
		margin-bottom: 1rem;
		border: 1px solid grey;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.basic-bars {
		.loader {
			// We start by defining the dimensions
			//    for them using width (or height) with
			//    aspect-ratio to maintain proportion
			width: 45px;
			aspect-ratio: 1;

			width: 45px;
			aspect-ratio: 1;
			--c: no-repeat linear-gradient(#000 0 0); /* we define the color here */
			// We sort of “fake” three bars with a linear
			// gradient on the background — very similar to
			//  how we created dot loaders in Part 2 of this series

            //0% 50%   50% 50%    100% 50%   are background positions
            //first bar is at x-0% (start) while y is at 50% (center)
            //second bar is at x 50% i.e. center   while y is at center
            //thir bar is at x 100%  i.e. right end while y is still at center
			background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
			
            //width height of each bar and white spaces
			background-size: 20% 100%; /* 20% * (3 bars + 2 spaces) = 100% */

			animation: load 1s infinite linear;
		}

        // See what’s happening there? Between 0% and 100%, 
        // the animation changes the background-size of the
        //  element’s background gradient. Each keyframe sets 
        //  three background sizes (one for each gradient).
        @keyframes load {
  0%  {background-size: 20% 100%,20% 100%,20% 100%}
  33% {background-size: 20% 10% ,20% 100%,20% 100%}
  50% {background-size: 20% 100%,20% 10% ,20% 100%}
  66% {background-size: 20% 100%,20% 100%,20% 10% }
  100%{background-size: 20% 100%,20% 100%,20% 100%}
}
	}

    //Let’s fix the size to 20% 50% and update the positions this time:

    .position-variation{
        .loader {
  width: 45px;
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(#000 0 0);
  background: 
    var(--c),
    var(--c),
    var(--c);
  background-size: 20% 50%;
  animation: load1 1s infinite linear;
}
@keyframes load1{
  0%   { background-position: 0% 100%, 50% 100%, 100% 100%; } /* 1 */
  20%  { background-position: 0% 50% , 50% 100%, 100% 100%; } /* 2 */
  40%  { background-position: 0% 0%  , 50% 50% , 100% 100%; } /* 3 */
  60%  { background-position: 0% 100%, 50% 0%  , 100% 50%;  } /* 4 */
  80%  { background-position: 0% 100%, 50% 100%, 100% 0%;   } /* 5 */ 
  100% { background-position: 0% 100%, 50% 100%, 100% 100%; } /* 6 */
}
    }

//ADVANCED EXAMPLES
    .advanced{
        gap: 2rem;
        display: flex;
        flex-wrap: wrap;
        .bars-1 {
  width: 45px;
  aspect-ratio: 1;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 20%,#0000 0 40%);
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 100% 26%;
  animation: b1 1.5s infinite;
}

@keyframes b1 {
 0%    {background-position:-50px calc(0*100%/3),-50px calc(1*100%/3),-50px calc(2*100%/3),-50px calc(3*100%/3)}
 12.5% {background-position:0     calc(0*100%/3),-50px calc(1*100%/3),-50px calc(2*100%/3),-50px calc(3*100%/3)}
 25%   {background-position:0     calc(0*100%/3),0     calc(1*100%/3),-50px calc(2*100%/3),-50px calc(3*100%/3)}
 37.5% {background-position:0     calc(0*100%/3),0     calc(1*100%/3),0     calc(2*100%/3),-50px calc(3*100%/3)}
 45%,
 55%   {background-position:0     calc(0*100%/3),0     calc(1*100%/3),0     calc(2*100%/3),0     calc(3*100%/3)}
 62.5% {background-position:50px  calc(0*100%/3),0     calc(1*100%/3),0     calc(2*100%/3),0     calc(3*100%/3)}
 75%   {background-position:50px  calc(0*100%/3),50px  calc(1*100%/3),0     calc(2*100%/3),0     calc(3*100%/3)}
 87.5% {background-position:50px  calc(0*100%/3),50px  calc(1*100%/3),50px  calc(2*100%/3),0     calc(3*100%/3)}
 100%  {background-position:50px  calc(0*100%/3),50px  calc(1*100%/3),50px  calc(2*100%/3),50px  calc(3*100%/3)}
}


.bars-2 {
  width: 45px;
  aspect-ratio: 1;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 20%,#0000 0 40%);
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 100% 26%;
  animation: b2 1.5s infinite;
}

@keyframes b2 {
 0%    {background-position:0 -20px        ,0 -20px         ,0 -20px         ,0 -20px}
 12.5% {background-position:0 -20px        ,0 -20px         ,0 -20px         ,0 calc(3*100%/3)}
 25%   {background-position:0 -20px        ,0 -20px         ,0 calc(2*100%/3),0 calc(3*100%/3)}
 37.5% {background-position:0 -20px        ,0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
 45%,
 50%   {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 calc(3*100%/3)}
 62.5% {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 calc(2*100%/3),0 50px}
 75%   {background-position:0 calc(0*100%/3),0 calc(1*100%/3),0 50px          ,0 50px}
 87.5% {background-position:0 calc(0*100%/3),0 50px          ,0 50px          ,0 50px}
 100%  {background-position:0 50px          ,0 50px          ,0 50px          ,0 50px}
}


.bars-3 {
  height: 45px;
  aspect-ratio: 1.6;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 20%,#0000 0 40%);
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 62.5% 26%;
  animation: b3 1s infinite;
}

@keyframes b3 {
 0%,
 10% {background-position:50%  calc(0*100%/3),50%              calc(1*100%/3),50%              calc(2*100%/3),50%  calc(3*100%/3)}
 33% {background-position:100% calc(0*100%/3),calc(100% - 9px) calc(1*100%/3),9px              calc(2*100%/3),0    calc(3*100%/3)}
 66% {background-position:0    calc(0*100%/3),9px              calc(1*100%/3),calc(100% - 9px) calc(2*100%/3),100% calc(3*100%/3)}
 90%, 
 100%{background-position:50% calc(0*100%/3),50%               calc(1*100%/3),50%              calc(2*100%/3),50%  calc(3*100%/3)}
}


.bars-4 {
  width: 45px;
  aspect-ratio: .8;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 20%,#0000 0 40%);
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 100% 21%;
  animation: b4 .75s infinite alternate;
}
@keyframes b4 {
 0%,
 10% {background-position:0 calc(0*100%/4),0 calc(1*100%/4),0 calc(2*100%/4),0 calc(3*100%/4)}
 25% {background-position:0 calc(0*100%/4),0 calc(1*100%/4),0 calc(2*100%/4),0 calc(4*100%/4)}
 50% {background-position:0 calc(0*100%/4),0 calc(1*100%/4),0 calc(3*100%/4),0 calc(4*100%/4)}
 75% {background-position:0 calc(0*100%/4),0 calc(2*100%/4),0 calc(3*100%/4),0 calc(4*100%/4)}
 90%,
 100%{background-position:0 calc(1*100%/4),0 calc(2*100%/4),0 calc(3*100%/4),0 calc(4*100%/4)}
}


.bars-5 {
  width: 45px;
  aspect-ratio: 1;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 calc(100%/7),#0000 0 calc(200%/7));
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 140% 26%;
  animation: b5 .75s infinite;
}

@keyframes b5 {
 0%   {background-position:0    calc(0*100%/3),100% calc(1*100%/3),0    calc(2*100%/3),100% calc(3*100%/3)}
 25%  {background-position:100% calc(0*100%/3),100% calc(1*100%/3),0    calc(2*100%/3),100% calc(3*100%/3)}
 50%  {background-position:100% calc(0*100%/3),0    calc(1*100%/3),0    calc(2*100%/3),100% calc(3*100%/3)}
 75%  {background-position:100% calc(0*100%/3),0    calc(1*100%/3),100% calc(2*100%/3),100% calc(3*100%/3)}
 100% {background-position:100% calc(0*100%/3),0    calc(1*100%/3),100% calc(2*100%/3),0    calc(3*100%/3)}
}

.bars-6 {
  width: 45px;
  aspect-ratio: 1;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 calc(100%/7),#0000 0 calc(200%/7));
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 140% 26%;
  animation: b6 .75s infinite linear;
}

@keyframes b6 {
 0%,
 5%   {background-position:0    calc(0*100%/3),0    calc(1*100%/3),0    calc(2*100%/3),0    calc(3*100%/3)}
 20%  {background-position:50%  calc(0*100%/3),0    calc(1*100%/3),0    calc(2*100%/3),0    calc(3*100%/3)}
 40%  {background-position:100% calc(0*100%/3),50%  calc(1*100%/3),0    calc(2*100%/3),0    calc(3*100%/3)}
 60%  {background-position:100% calc(0*100%/3),100% calc(1*100%/3),50%  calc(2*100%/3),0    calc(3*100%/3)}
 80%  {background-position:100% calc(0*100%/3),100% calc(1*100%/3),100% calc(2*100%/3),50%  calc(3*100%/3)}
 95%,
 100% {background-position:100% calc(0*100%/3),100% calc(1*100%/3),100% calc(2*100%/3),100% calc(3*100%/3)}
}

.bars-7 {
  width: 45px;
  aspect-ratio: 1;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 calc(100%/7),#0000 0 calc(200%/7));
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 140% 26%;
  background-repeat: no-repeat;
  animation: b7 .75s infinite linear;
}

@keyframes b7 {
 0%,20%   {background-position:0    calc(0*100%/3),100% calc(1*100%/3),0    calc(2*100%/3),100% calc(3*100%/3)}
 80%,100% {background-position:100% calc(0*100%/3),0    calc(1*100%/3),100% calc(2*100%/3),0    calc(3*100%/3)}
}

.bars-8 {
  height: 45px;    
  aspect-ratio: 1.4;
  --c:no-repeat repeating-linear-gradient(90deg,#000 0 20%,#0000 0 40%);
  background: 
    var(--c),
    var(--c),
    var(--c),
    var(--c);
  background-size: 72% 26%;
  animation: b8 1s infinite;
}

@keyframes b8 {
 0%,
 20%  {background-position:50% calc(0*100%/3),50%  calc(1*100%/3),50%  calc(2*100%/3),50% calc(3*100%/3)}
 40%  {background-position:50% calc(0*100%/3),100% calc(1*100%/3),0    calc(2*100%/3),50% calc(3*100%/3)}
 60%  {background-position:50% calc(0*100%/3),0    calc(1*100%/3),100% calc(2*100%/3),50% calc(3*100%/3)}
 80%,
 100% {background-position:50% calc(0*100%/3),50%  calc(1*100%/3),50%  calc(2*100%/3),50% calc(3*100%/3)}
}

.bars-9 {
  width: 9px;
  height: 9px;
  background: #000;
  box-shadow: 
    -18px -9px,0 -9px,18px -9px,
    -18px  0  ,       18px  0  ,
    -18px  9px,0  9px,18px  9px,
    -18px 18px,0 18px,18px 18px;
  animation: b9 2s infinite;
}

@keyframes b9 {
  10% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px #0000,0  9px,18px  9px #0000,
     -18px 18px,0 18px,18px 18px;
  }
  20% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px #0000,
     -18px 18px #0000,0 18px,18px 18px;
  }
  30% {
   box-shadow: 
     -18px -9px,0 -9px #0000,18px -9px,
     -18px  0   #0000,       18px  0  ,
     -18px  9px,0  9px #0000,18px  9px,
     -18px 18px #0000,0 18px,18px 18px #0000;
  }
  40% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0  #0000,       18px  0 #0000,
     -18px  9px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px;
  }
  50% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  #0000,
     -18px  9px #0000,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px;
  }
  60% {
   box-shadow: 
     -18px -9px,0 -9px #0000,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px #0000,0  9px,18px  9px,
     -18px 18px #0000,0 18px,18px 18px;
  }
  70% {
   box-shadow: 
     -18px -9px,0 -9px #0000,18px -9px #0000,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px,
     -18px 18px #0000,0 18px,18px 18px;
  }
  80% {
   box-shadow: 
     -18px -9px #0000,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px #0000;
  }
  90% {
   box-shadow: 
     -18px -9px #0000,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px #0000,18px  9px,
     -18px 18px,0 18px,18px 18px #0000;
  }
}


.bars-10 {
  width:9px;
  height: 9px;
  background: #000;
  box-shadow: 
    -18px -9px,0 -9px,18px -9px,
    -18px  0  ,       18px  0  ,
    -18px  9px,0  9px,18px  9px,
    -18px 18px,0 18px,18px 18px;
  animation: b10 2s infinite;
}

@keyframes b10 {
  10% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px 0 2px,0  9px,18px  9px 0 2px,
     -18px 18px,0 18px,18px 18px;
  }
  20% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px 0 2px,
     -18px 18px 0 2px,0 18px,18px 18px;
  }
  30% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0   0 2px,       18px  0  ,
     -18px  9px,0  9px 0 2px,18px  9px,
     -18px 18px 0 2px,0 18px,18px 18px 0 2px;
  }
  40% {
   box-shadow: 
     -18px -9px,0 -9px ,18px -9px,
     -18px  0  0 2px,       18px  0 0 2px,
     -18px  9px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px  0 2px;
  }
  50% {
   box-shadow: 
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  0 2px,
     -18px  9px 0 2px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px;
  }
  60% {
   box-shadow: 
     -18px -9px,0 -9px 0 2px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px 0 2px,0  9px,18px  9px,
     -18px 18px 0 2px,0 18px,18px 18px;
  }
  70% {
   box-shadow: 
     -18px -9px,0 -9px 0 2px,18px -9px 0 2px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px,
     -18px 18px 0 2px,0 18px,18px 18px;
  }
  80% {
   box-shadow: 
     -18px -9px 0 2px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px 0 2px;
  }
  90% {
   box-shadow: 
     -18px -9px 0 2px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px 0 2px,18px  9px,
     -18px 18px,0 18px,18px 18px 0 2px;
  }
}
    }
//     Gradients to create the shapes (dots or bars or maybe something else)
// Animating background-size and/or background-position to create the loader animation
// Adding mask to add a touch of colors

    .with-background-masking{
        .loader {
  width: 150px; /* control the size */
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(#000 0 0);
  -webkit-mask: var(--c),var(--c),var(--c);
  -webkit-mask-size: 20% 50%;
  background: conic-gradient(#BFB35A 25%,#5E8C6A 0 75%,#8C2318 0) 0%/200% 100%;
  animation: 
    back 2s infinite steps(1),
    load 1s infinite linear;
}
@keyframes back{
  50% {background-position: 100%}
}
@keyframes load {
  0%  {-webkit-mask-position: 0% 100%,50% 100%,100% 100%} 
  20% {-webkit-mask-position: 0% 50% ,50% 100%,100% 100%} 
  40% {-webkit-mask-position: 0% 0%  ,50% 50% ,100% 100%} 
  60% {-webkit-mask-position: 0% 100%,50% 0%  ,100% 50% } 
  80% {-webkit-mask-position: 0% 100%,50% 100%,100% 0%  } 
  100%{-webkit-mask-position: 0% 100%,50% 100%,100% 100%} 
}
    }
</style>
