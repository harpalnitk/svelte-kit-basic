


<main>
<div class="container">
    <div class="hexagon">
        <div class="shape">
            <img src="/img/avatar/avatar-1.jpg" alt="">
            <div class="content">
                <div>
                    <h2>Someone Famous</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Eligendi
                          distinctio et mollitia quod
                           quas, ipsam repellendus
                            consectetur possimus
                             inventore totam?</p>
                </div>
            </div>
        </div>
    </div>
    <div class="hexagon">
        <div class="shape">
            <img src="/img/avatar/avatar-2.jpg" alt="">
            <div class="content">
                <div>
                    <h2>Someone Famous</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Eligendi
                          distinctio et mollitia quod
                           quas, ipsam repellendus
                            consectetur possimus
                             inventore totam?</p>
                </div>
            </div>
        </div>
    </div>
    <div class="hexagon">
        <div class="shape">
            <img src="/img/avatar/avatar-3.png" alt="">
            <div class="content">
                <div>
                    <h2>Someone Famous</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Eligendi
                          distinctio et mollitia quod
                           quas, ipsam repellendus
                            consectetur possimus
                             inventore totam?</p>
                </div>
            </div>
        </div>
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
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.container .hexagon{
    position: relative;
    width: 350px;
    height: 400px;
    margin: 50px 20px 70px;
}
.container .hexagon::before{
    content: '';
    position: absolute;
    bottom: -70px;
    width: 100%;
    height: 60px;
    background: radial-gradient(rgba(0,0,0,0.15),transparent,transparent);
    border-radius: 50%;
    transition: 0.5s;
}
.container .hexagon:hover::before{
opacity: 0.8;
transform: scale(0.8);
}
.container .hexagon .shape{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    // https://bennettfeely.com/clippy/
 clip-path: polygon(0 25%,50% 0,100% 25%,100% 75%,50% 100%,0 75%);
 transition: 0.5s;
}
.container .hexagon:hover .shape{
    transform: translateY(-30px);
}
.container .hexagon .shape img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.container .hexagon .shape .content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    background: linear-gradient(45deg,#03a9f4,rgba(3,169,244,0.5));
    color: #fff;
    opacity: 0;
    transition: 0.5s;
}
.container .hexagon:hover .shape .content{
    opacity: 1;
}
</style>