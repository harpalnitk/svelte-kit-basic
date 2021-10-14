<main class='flex-center main-page'>
    <div class="container flex-center">
        <div class="serviceBox">
            <div class="icon flex-center" style='--i:#4eb7ff'>
                <i class="fas fa-palette"></i>
            </div>
            <div class="content">
                <h2>Design</h2>
                <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. 
                Odit nobis quae corrupti,
                culpa quasi nisi!</p>
            </div>
        </div>
        <div class="serviceBox">
            <div class="icon flex-center" style='--i:#fd6494'>
                <i class="fas fa-code"></i>
            </div>
            <div class="content">
                <h2>Development</h2>
                <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. 
                Odit nobis quae corrupti,
                culpa quasi nisi!</p>
            </div>
        </div>
        <div class="serviceBox">
            <div class="icon flex-center" style='--i:#43f390'>
                <i class='fas fa-search'></i>
            </div>
            <div class="content">
                <h2>SEO</h2>
                <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. 
                Odit nobis quae corrupti,
                culpa quasi nisi!</p>
            </div>
        </div>
        <div class="serviceBox">
            <div class="icon flex-center" style='--i:#ffb508'>
                <i class="fas fa-chart-bar"></i>
            </div>
            <div class="content">
                <h2>Digital Marketing</h2>
                <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. 
                Odit nobis quae corrupti,
                culpa quasi nisi!</p>
            </div>
        </div>
        <div class="serviceBox">
            <div class="icon flex-center" style='--i:#37ba82'>
                <i class="fas fa-gamepad"></i>
            </div>
            <div class="content">
                <h2>Games Development</h2>
                <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. 
                Odit nobis quae corrupti,
                culpa quasi nisi!</p>
            </div>
        </div>
        <div class="serviceBox">
            <div class="icon flex-center" style='--i:#cd57ff'>
                <i class="fas fa-video"></i>
            </div>
            <div class="content">
                <h2>Video editing</h2>
                <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. 
                Odit nobis quae corrupti,
                culpa quasi nisi!</p>
            </div>
        </div>
    </div>
</main>

<style>
    main{
        background: #3f3752;
    }
    .container{
        position: relative;
        width: 1200px;
        gap: 20px;
        flex-wrap: wrap;
    }
    .container .serviceBox{
      position: relative;
      width: 350px;
      height: 280px;
      background: #51446e;
      border-radius: 20px;
      overflow: hidden;
    }
    .container .serviceBox .icon{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--i);
        transition: 0.5s;
        z-index: 2;
        transition-delay: 0.25s;
    }

    .container .serviceBox:hover .icon{
        top: 30px;
        left: calc(50% - 40px);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        transition-delay: 0s;
}
.container .serviceBox .icon i{
font-size: 5em;
color: #fff;
transition: 0.5s;
transition-delay: 0.25s;
}
.container .serviceBox:hover .icon i{
    font-size: 2em;
    transition-delay: 0s;
}
.container .serviceBox .content{
    position: relative;
    padding: 20px;
    color: #fff;
    text-align: center;
    margin-top: 100px;
    z-index: 1;
    transform: scale(0);
    transition: 0.5s;
    transition-delay: 0s;
}
.container .serviceBox:hover .content{
    transform: scale(1);
    transition-delay: 0.25s;
}
.container .serviceBox .content h2{
    margin-top: 10px;
    margin-bottom: 5px;
}
.container .serviceBox .content p{
    font-weight: 300;
    line-height: 1.5em;
}
</style>