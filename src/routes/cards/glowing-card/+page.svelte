<script>
  
</script>



<main>
<div class="box">
    <div class="imgBx">
        <img src="/img/avatar/avatar-1.jpg" alt="">
    </div>
    <div class="content">
        <h2>Cosima Avatar<br><span>Creative Designer</span></h2>
    </div>
</div>
<div class="box">
    <div class="imgBx">
        <img src="/img/avatar/avatar-3.png" alt="">
    </div>
    <div class="content">
        <h2>Marty Avatar<br><span>Creative Designer</span></h2>
    </div>
</div>
<div class="box">
    <div class="imgBx">
        <img src="/img/avatar/avatar-2.jpg" alt="">
    </div>
    <div class="content">
        <h2>Sarah Avatar<br><span>Creative Designer</span></h2>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    place-content: center;
    place-items: center;
    gap: 3rem;
    background: #010615;
    z-index: 0;
}

.box{
    position: relative;
    width: 15rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #060c21;
    transition: 0.5s;
}
.box:hover{
    height: 18rem;
}
.box .imgBx{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: .5rem;
}
.box .imgBx img{
    width: 100%;
    opacity: 0.1;
    transition: 0.5s;
}
.box:hover .imgBx img{
    opacity: 1;
}
.box::before{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
}
.box::after{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px);
}

.box::before,
.box::after{
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}
.box:nth-child(2)::before,
.box:nth-child(2)::after{
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
}
.box:nth-child(3)::before,
.box:nth-child(3)::after{
    background: linear-gradient(235deg, #772aff, #010615, #2196F3);
}

.box .content{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 5rem;
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: 0.5s;
}
.box:hover .content{
opacity: 1;
}
.box .content h2{
    font-size: 1.2rem;
    color: #fff;
    font-weight: 500;
    line-height: 1.2rem;
    letter-spacing: 1px;
}
.box .content h2 span{
    font-size: .8rem;
    color: #fff;
    font-weight: 200;
    line-height: .8rem;
    letter-spacing: 2px;
}

</style>