<script>
    
</script>



<main>
<div class="loader">
    <span></span>
    <span></span>
    <span></span>
    <h2>Loading...</h2>
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
    background: #111;
}
.loader{
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loader span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    pointer-events: none;
    animation: animate 5s linear infinite;
}
.loader span:nth-child(1){
    //Fancy Border Radius Generator
    //https://9elements.github.io/fancy-border-radius/
border-radius: 38% 62% 64% 36% / 43% 35% 65% 57%;
}
.loader span:nth-child(2){
animation-direction: reverse;
border-radius: 41% 59% 40% 60% / 65% 66% 34% 35%;
}
.loader span:nth-child(3){
animation-duration: 3s;
border-radius: 73% 27% 56% 44% / 57% 74% 26% 43%;
}
@keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.loader h2{
font-weight: 500;
color: #fff;
font-family: Consolas;
}

</style>