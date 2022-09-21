<script>
  

   
    export let size = 3 ;
</script>



<main>
<div class="loader" style="--size:{size}">
    <div class="rocket">
        <i class="fas fa-rocket"></i>
        <i class="fas fa-cloud" style="--i:0"></i>
        <i class="fas fa-cloud" style="--i:1"></i>
        <i class="fas fa-cloud" style="--i:2"></i>
        <i class="fas fa-cloud" style="--i:3"></i>
    </div>
    <span><i></i></span>
</div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eaeef0;
}
.loader{
    //  --size: 3;
    position: relative;
    display: flex;
   
}
.loader span{
    position: relative;
    width: calc(var(--size) * 80px);
    height:calc(var(--size) * 80px);
    background: #eaeef0;
    border: calc(var(--size) * 2px) solid #eaeef0;
    border-radius: 50%;
    box-shadow: -8px -8px 15px rgba(255,255,255,1),
                 8px 8px 25px rgba(0,0,0,.15);
    overflow: hidden;
}
.loader span::before{
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    box-shadow: inset 10px 10px 20px rgba(0,0,0,0.5),
    inset -5px -5px 15px rgba(255,255,255,1);
}
.loader span::after{
    content: '';
    position: absolute;
    inset: calc(var(--size) * 40px / 3);
    background: #eaeef0;
    border:  calc(var(--size) * 1px) solid #eaeef0;
    border-radius: 50%;
    box-shadow: inset -8px -8px 25px rgba(255,255,255,1),
    8px 8px 25px rgba(0,0,0,0.25),
    inset 3px 3px 10px rgba(0,0,0,0.15),
    inset -1px -1px 15px rgba(255,255,255,1);
    }
    .loader span i {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        filter: blur(5px);
        background: linear-gradient(#42abff,#ff4f8b,#ffeb3b);
        animation: animate 1s linear infinite;
    }
    @keyframes animate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .rocket{
        position: absolute;
        inset: calc(var(--size) * 50px / 3);
        z-index: 10;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .rocket .fa-rocket{
        position: absolute;
        color: #ff518c;
        font-size: calc(var(--size) * 1em);
        -webkit-text-stroke: calc(var(--size) * 2px / 3) #000;
        animation: animateRocket 0.2s linear infinite;
        
    }
    @keyframes animateRocket{
        0%,100%{
            transform: translate(0px,0px) rotate(-45deg);
        }
        50%{
            transform: translate(0px,3px) rotate(-45deg);
        }
    }
    .fa-cloud{
    --shift: calc(var(--size) * 35px / 3);
     position: absolute;
     top: calc(var(--shift) * var(--i));  
     left: calc(var(--shift) * var(--i)); 
     font-size: calc(var(--size) * 2em / 3);
     color: #fff; 
     -webkit-text-stroke: calc(var(--size) * 2px / 3) #000;
     animation: animateClouds 1s linear infinite;
     animation-delay: calc(-0.5s * var(--i));
    }
    @keyframes animateClouds{
        0%{
            transform: translateY(calc(-35 * 5px));
        }
        100%{
            transform: translateY(calc(35 * 5px));
        }
    }
</style>