<script>
    
</script>



<main>
<div class="drops">
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
    <div class="drop"></div>
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
    background: #edeeed;
}
.drops{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

}
.drop{
    position: absolute;
    width: 10rem;
    height: 10rem;
    background: transparent;
    border-radius: 57% 43% 37% 63% / 45% 52% 48% 55%;// from website fancy border radius generator
    box-shadow: inset 10px 10px 10px rgba(0,0,0,0.05),
                  15px 25px 10px rgba(0,0,0,0.1),
                  15px 20px 20px rgba(0,0,0,.05),
                  inset -10px -10px 15px rgba(255,255,255,.9);
}
.drop::before{
    content: '';
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    background: #fff;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 25% 75% 37% 63% / 40% 43% 57% 60%;

}
.drop::after{
    content: '';
    position: absolute;
    top: 1.5rem;
    left: 4rem;
    background: #fff;
    width: .8rem;
    height: .8rem;
    border-radius:57% 43% 37% 63% / 48% 37% 63% 52%;

}
.drop:nth-child(2){
    transform: scale(0.5) translate(-15rem, 13rem);
    border-radius: 64% 36% 42% 58% / 42% 37% 63% 58%;
}
.drop:nth-child(3){
    transform: scale(0.5) translate(20rem, 1rem);
    border-radius: 49% 51% 42% 58% / 56% 47% 53% 44%;
}
.drop:nth-child(4){
    transform: scale(0.35) translate(8rem, -25rem);
    border-radius: 39% 61% 63% 37% / 77% 47% 53% 23%;
}
</style>