<main class='flex-center'>
    <div class="loader">
        <div class="semi-circle"></div>
        <div class="ball"></div>
        <div class="ball ball2"></div>
    </div>
</main>

<style>
    main{
        background: #001f38;
        min-height: 100vh;
        position: relative;
    }
    main::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        background: rgba(0,0,0,0.2);
    }
    .loader{
        position: relative;
        height: 100vh;
        width: 200px;
    }
    .loader::before{
        content: '';
        position: absolute;
        bottom: 50px;
        height: 10px;
        width: 60px;
        background: #000;
        border-radius: 50%;
        filter: blur(4px);
        opacity: 0.5;
        animation: shadow 2s linear infinite;
        animation-delay: -1s;
    }
    @keyframes shadow{
        0%,100%{
            transform: scale(1.5);
            opacity: 0,2;
        }
        30%{
            transform: scale(0.8);
            opacity: 0.5;
        }
    }
    .loader .semi-circle{
        position: absolute;
        top: calc(50% - 100px);
        left: calc(50% - 100px);
        width: 200px;
        height: 200px;
        border-bottom: 100px solid #2196f3;
        border-radius: 50%;
        animation: rotate 2s linear infinite;
    }
    @keyframes rotate{
        0%{
transform: rotate(360deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    .ball{
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% + 50px);
    height: 50px;
    width: 50px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    animation: bounce 2s linear infinite;
    }
    @keyframes bounce{
        0%,100%{
          transform: translateY(0px);
        }
        30%{
            transform: translateY(-150px);
        }
        40%{
            transform: translateY(-200px);
        }
    }
    .ball2{
        position: absolute;
    top: calc(50% + 0px);
    left: calc(50% - 100px);
    z-index: 1;
    animation: bounce2 2s linear infinite;
    animation-delay: -1s;
    }
    @keyframes bounce2{
        0%,100%{
          transform: translateY(0px);
        }
        30%{
            transform: translateY(150px);
        }
        40%{
            transform: translateY(200px);
        }
    }
</style>