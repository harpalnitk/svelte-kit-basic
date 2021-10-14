<script>
	
</script>



<main>
	<section>
        <div class="clouds">
            <img src="/img/misc/cloud1.png" style="--i:1;" alt="cloud1">
            <img src="/img/misc/cloud2.png" style="--i:2;" alt="cloud2">
            <img src="/img/misc/cloud3.png" style="--i:3;" alt="cloud3">
        </div>
        <div class="clouds clouds2">
            <img src="/img/misc/cloud1.png" style="--i:1;" alt="cloud1">
            <img src="/img/misc/cloud2.png" style="--i:2;" alt="cloud2">
            <img src="/img/misc/cloud3.png" style="--i:3;" alt="cloud3">
        </div>
		<div class="runway" />
        <i class="fas fa-plane plane"></i>
		<!-- <img src="/img/misc/plane_v-1.jpg" alt="plane" class="plane" /> -->
	</section>
</main>

<style lang="scss">
	@import '../../styles/vars';
	main {
		min-height: 100vh;
		position: relative;
		width: min(70rem, 90vw);
		margin: 0 auto;
        overflow: hidden;
	}
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: #034071;
       
	}
	section .runway {
		position: relative;
		width: 400px;
		height: 100vh;
		background: #1378bc;
		border-left: 20px solid rgba(black, 0.25);
		border-right: 20px solid rgba(black, 0.25);
        transition: transform 1s;
        transition-delay: 1s;
        transform-origin: top;
	}
    /**Plane fly on click left + hold*/
    section:active .runway {
transform: scaleX(0.7) scaleY(0);
transition-delay: 0s;
transform-origin: bottom;
    }
	section .runway::before {
		content: '';
		position: absolute;
		top: 0;
		width: 15px;
		height: 100%;
		left: 50%;
		transform: translateX(-50%);
		background: repeating-linear-gradient(transparent 0%, transparent 50%, #fff 50%, #fff 100%);
		background-size: 20px 320px;
		animation: animateRunway 0.5s linear infinite;
	}
	//** Add effect on left click on hold*/
	section:active .runway::before {
		animation: animateRunway 0.25s linear infinite;
	}
	@keyframes animateRunway {
		0% {
			background-position-y: 0px;
		}
		100% {
			background-position-y: 640px;
		}
	}
	.plane {
		position: absolute;
        transform: rotate(-90deg);
        font-size: 250px;
		bottom: 100px;
        color: hsl(208, 83%, 9%); 
		// max-width: 250px;
		pointer-events: none;
		filter: drop-shadow(10px 10px 0 rgba(black, 0.5));
		transition:  5s;
	}
	section:active .plane {
		// max-width: 500px;
        font-size: 500px;
		filter: drop-shadow(200px 200px 0 rgba(black, 0));
	}
    .clouds{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        pointer-events: none;

opacity: 0;
transition: opacity 2s;
transition-delay: 0s;
    }
    section:active .clouds{
        opacity: 1;
        transition-delay: 1s;
    }
    .clouds img{
            position: absolute;
            left: 0;
            width: 800px;
            animation: animateClouds 4s linear infinite;
            animation-delay: calc(-1.5s * var(--i));
        }
        @keyframes animateClouds{
            0%{
                transform: translateY(-100%);
            }
            100%{
                transform: translateY(100%);
            }
        }
        .clouds2{
            right: 0;
            transform: rotate(180deg);
        }
        .clouds2 img{
            animation: animateClouds2 4s linear infinite;
            animation-delay: calc(-1.5s * var(--i));
        }
        @keyframes animateClouds2{
            0%{
                transform: translateY(100%);
            }
            100%{
                transform: translateY(-100%);
            }
        }
</style>
