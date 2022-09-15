<main>
    <div class="error">
        <div class="sky">
            <h2>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h2>
            <div class="grass"></div>
            <img src="/img/misc/plane_404.png" alt="Plane" class='plane'>
        </div>
        <div class="field">
            <h2>Oops...looks like you got lost.</h2>
            <a href="/">Go Home</a>
        </div>
    </div>
</main>

<style>
    main{
        /* font-family: consolas; */
    }
    .error{
       min-height: 100vh;
       background: linear-gradient(0deg,#fff,#03a9f4); 
    }
    .sky{
        position: relative;
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sky h2{
      font-size: clamp(50px,25vw,200px);
      color: #fff;
      text-shadow: 1.5vw 1.5vw 0 rgba(0,0,0,0.1);  
      margin-block-start: 0em;
    }
    .sky h2 span{
       display: inline-block;
       animation: animate 2s ease-in-out infinite; 
    }
    .sky h2 span:nth-child(even){
        animation-delay: -1s;
    }
    @keyframes animate{
        0%,100%{
transform: translateY(-50px);
        }
        50%{
            transform: translateY(50px);
        }
    }
    .field{
        padding: 100px;
        height: 40vh;
        background: #6e2308;
        box-shadow: inset 0 20px 10px #51680c;
        text-align: center;
    }
    .field h2{
        color: #fff;
        font-size: 2em;
        margin-bottom: 20px;
    }
    .field a{
        background: #fff;
        color: #000;
        width: 160px;
        height: 50px;
        line-height: 50px;
        border-radius: 50px;
        display: inline-block;
        text-decoration: none;
        font-size: 20px;
    }
    .plane{
       position: absolute;
        bottom: 8vh;
        left: clamp(10vw,300px,30vw);
        width:clamp(150px,30vw,400px);
        transform: rotateY(180deg);
    }
    .grass{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20px;
        background: url('/img/misc/grass_404.png');
        background-position: bottom;
        animation: animateGrass 0.2s linear infinite;
    }
    @keyframes animateGrass{
        0%{
background-position: 0 0;
        }
        100%{
            /* 94px size of grass_404.png */
            background-position: -94px 0;
        }
    }
</style>