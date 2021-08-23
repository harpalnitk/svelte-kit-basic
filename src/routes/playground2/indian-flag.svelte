<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Indian Flag' path='/playground2'></BasicPage>


<main>
    <div class="flag-container">
        <div class="flag">
            <div class="color1"></div>
            <div class="chakra">
                <img src="/img/misc/ashok_chakra2.png" alt="">
            </div>
            <div class="color2"></div>
        </div>
    </div>

</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.flag-container{
    --size:100px;
width: calc(var(--size)*3);
height: calc(var(--size)*2);
position: relative;
}
.flag{
position: relative;
width:100%;
height: 100%;

//animation: flagzoom 0.5s linear forwards;
 // animation-delay: 2s;
}
@keyframes flagzoom{
    0%{
    transform: rotate(0deg) scaleX(1);
}
100%{
    transform: rotate(-15deg) scaleX(1.5);
}  
}

.flag .color1{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:  calc(var(--size)*2/3);
  background: #ff9933; 
  transform: scaleX(0);
  animation: color1 1s linear forwards; 
  transform-origin: left;

}

@keyframes color1{
0%{
    transform: scaleX(0);
}
100%{
    transform: scaleX(1);
}
}
.flag .color2{
    position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:  calc(var(--size)*2/3);
  background: #138808;  
  transform: scaleX(0);
  animation: color1 1s linear forwards; 
  transform-origin: right;
  animation-delay: 1s;
}

.chakra{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    z-index: 1;
    animation: fadeIn 0.5s linear forwards;
    animation-delay: 3s;
}
@keyframes fadeIn{
    0%{
transform: translate(-50%,-50%) scale(5);
opacity: 0;
    }
    100%{
        transform: translate(-50%,-50%) scale(1);
opacity: 1;
    }
}
.chakra img{
    height:  calc(var(--size)*2*32/100);
    margin-top: calc(var(--size)*2/100);
    // margin-bottom: calc(var(--size)*1/100);
    animation: rotate 20s linear infinite;
}
@keyframes rotate{
   0%{
     transform: rotate(0deg);  
   } 
   100%{
       transform: rotate(360deg);
   }
}
</style>