<main class='flex-center'>
    <div class="container flex-center">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <p>Loading...</p>
    </div>
</main>

<style>
    main{
min-height: 80vh;
background: #111;
    }
    .container{
        position: relative;
        width: 100%;

    }
    .container .ring{
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: -30px;
        border: 4px solid transparent;
        border-top: 4px solid #24ecff;
        animation: animate 4s linear infinite;
    }
    @keyframes animate{
      0%{
          transform: rotate(0deg);
      } 
      100%{
        transform: rotate(360deg);
      } 
    }
    /*Small Dot */
    .container .ring::before{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        top: 12px;
        right: 12px;
        border-radius: 50%;
        background: #24ecff;
        box-shadow: 0 0 0 5px #24ecff33,
        0 0 0 10px #24ecff22,
        0 0 0 20px #24ecff11,
        0 0  20px #24ecff,
        0 0  50px #24ecff;
    }
    .container .ring:nth-child(2){
       animation: animate2 4s linear infinite;
       animation-delay: -1s;
       border-top: 4px solid transparent;
       border-left: 4px solid #93ff2d;
    }
    .container .ring:nth-child(2)::before{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        top: initial;
        bottom: 12px;
        left: 12px;
        border-radius: 50%;
        background: #93ff2d;
        box-shadow: 0 0 0 5px #93ff2d33,
        0 0 0 10px #93ff2d22,
        0 0 0 20px #93ff2d11,
        0 0  20px #93ff2d,
        0 0  50px #93ff2d;
    }
    @keyframes animate2{
      0%{
          transform: rotate(360deg);
      } 
      100%{
        transform: rotate(0deg);
      } 
    }
    .container .ring:nth-child(3){
        animation: animate2 4s linear infinite;
       animation-delay: -3s;
        position: absolute;
        top: -66.66px;

        border-top: 4px solid transparent;
       border-left: 4px solid #e41cf8;
    }
    .container .ring:nth-child(3)::before{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        top: initial;
        bottom: 12px;
        left: 12px;
        border-radius: 50%;
        background: #e41cf8;
        box-shadow: 0 0 0 5px #e41cf833,
        0 0 0 10px #e41cf822,
        0 0 0 20px #e41cf811,
        0 0  20px #e41cf8,
        0 0  50px #e41cf8;
    }
    .container p{
        position: absolute;
        color: #fff;
        font-family:consolas;
        font-size: 1.5em;
        bottom: -80px;
        letter-spacing: 0.15em;
    }
</style>