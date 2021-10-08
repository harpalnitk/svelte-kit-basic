<script>
   
</script>



<main>
    <section>
        <div class="box">
            <div class="textBox">
                <div class="text">
                    <h2>Harpal</h2>
                </div>
                <div class="text">
                    <h2>Singh</h2>
                </div>
            </div>
            <div class="shadow"></div>
        </div>
    </section>

</main>



<style lang="scss">
	@import '../../styles/vars';
   
    main{
    --section-height: 70vh;
    min-height: var(--section-height);
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{

    background: radial-gradient(#93d9f9,#0c80b5);
    overflow: hidden;
}
main::before{
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: calc(var(--section-height) * 0.7);
background: rgba(black,0.1);
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100%;
    min-height: var(--section-height);
    transform-style: preserve-3d;
    perspective: 1000px;
}
.box{
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    animation: textEntry 6s linear infinite;
}
@keyframes textEntry{
    0%,5%{
        transform: translateZ(1500px);
    }
    15%,95%{
        transform: translateZ(0px);
    }
    100%{
        transform: translateZ(1500px);
    }
}
.textBox{
    position: relative;
    width: 100%;
    height: calc(var(--section-height) * 0.7);
    transform-style: preserve-3d;
    animation: animate 2s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animate{
    0%{
        transform: rotateY(360deg);
    }
    100%{
        transform: rotateY(0deg);
    }
}
.shadow{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50px;
    background: radial-gradient(rgba(black,0.2),transparent,transparent);
    filter: blur(5px);
    animation: animateShadow 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animateShadow{
    0%,100%{
        transform: translateX(-50%) scale(1);
    }
    50%{
        transform: translateX(-50%) scale(0.2);
    }
}
.textBox .text{
    position: absolute;
inset: 0;
display: flex;
justify-content: center;
align-items: center;
backface-visibility: hidden;
}
.textBox .text:nth-child(2){
    transform: rotateY(180deg);
}
.textBox .text h2{
    font-size: calc(var(--section-height) * 0.16);
    color: #fff;
}
</style>