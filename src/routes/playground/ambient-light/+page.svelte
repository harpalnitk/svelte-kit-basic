<main class='flex-center'>
    <div class="cube">
        <div class="top"></div>
        <div>
            <span style='--i:0;'>
                <h2>02</h2>
                <h2>02</h2>
            </span> 
            <span style='--i:1;'>
                <h2>02</h2>
                <h2>02</h2>
            </span>  
            <span style='--i:2;'>
                <h2>02</h2>
                <h2>02</h2>
            </span>  
            <span style='--i:3;'>
                <h2>02</h2>
                <h2>02</h2>
            </span>     
        </div>
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&display=swap');
    main{
        --size: 150px;
        min-height: 80vh;
        background: #050505;
        font-family: 'Oswald', sans-serif;
    }
    .cube{
        position: relative;
        width: var(--size);
        height: var(--size);
        transform-style: preserve-3d;
       
        animation: animate 4s linear infinite;
    }

    @keyframes animate{
        0%{
            transform: rotateX(-30deg) rotateY(0deg);
        }
        100%{
            transform: rotateX(-30deg) rotateY(360deg);
        }
    }
    .cube div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }
    .cube div span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#151515,#00ec00);
        transform: rotateY(calc(90deg * var(--i))) translateZ(calc(var(--size) / 2));
        display: flex;
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
    }
    .cube div span h2{
       position: absolute;
       font-size: calc(var(--size) / 3); 
       color: #fff;
       transform: translateZ(calc(var(--size) / 5));
    }
    .cube div span h2:nth-child(1){
        transform: translateZ(0) translateY(calc(var(--size) * (1 / 50) ));
        color: rgba(0,0,0,0.1);
        filter: blur(2px);
    }
    .top{
        position: absolute;
        top: 0;
        left: 0;
        width: var(--size);
        height: var(--size);
        background: #222;
        transform: rotateX(90deg) translateZ(calc(var(--size) / 2));
    }
    .top::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: var(--size);
        height: var(--size);
        background: #0f0;
        transform: translateZ(calc(var(--size) * (-3.8 / 3)));
        filter: blur(20px);
        box-shadow: 0 0 120px rgba(0,255,0,0.2),
        0 0 200px rgba(0,255,0,0.4),
        0 0 300px rgba(0,255,0,0.6),
        0 0 400px rgba(0,255,0,0.8),
        0 0 500px rgba(0,255,0,1);
    }
</style>