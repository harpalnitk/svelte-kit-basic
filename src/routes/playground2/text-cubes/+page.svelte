<main class="flex-center">
    <div class="container">
        <div class="text" style="--j:0;">
            <span style='--i:0'>2</span>
            <span style='--i:1'>3</span>
            <span style='--i:2'>4</span>
            <span style='--i:3'>5</span>
        </div>
        <div class="text" style="--j:1;">
            <span style='--i:0'>0</span>
            <span style='--i:1'>1</span>
            <span style='--i:2'>2</span>
            <span style='--i:3'>3</span>
        </div>
        <div class="text" style="--j:2;">
            <span style='--i:0'>2</span>
            <span style='--i:1'>3</span>
            <span style='--i:2'>4</span>
            <span style='--i:3'>5</span>
        </div>
        <div class="text" style="--j:3;">
            <span style='--i:0'>1</span>
            <span style='--i:1'>2</span>
            <span style='--i:2'>3</span>
            <span style='--i:3'>4</span>
        </div>
    </div>
</main>

<style>
    main{
        min-height: 100vh;
        background: #3d3d3d;
    }
    .container{
        display: flex;
        transform-style: preserve-3d;
        gap: 10px;
        transform: rotateY(30deg) rotateX(10deg);
    }
    .container .text{
        position: relative;
        width: 100px;
        height: 100px;
        transform-style: preserve-3d;
        transition: 2.5s ease-in-out;
        transition-delay: calc(0.25s * var(--j));
    }
    .container .text::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transform-origin: left;
        background: #373737;
        transform: rotateY(90deg) translateX(-50px);
    }
    .container:hover .text{
        transform: rotateX(-360deg);
    }
    .container:hover .text:last-child{
        transform: rotateX(630deg);
    }
    .container .text:last-child::before{
background: #29ab3c;
    }
    .container .text span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#434343,#535353);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4em;
        color: #fff;
        transform-style: preserve-3d;
        transform: rotateX(calc(90deg * var(--i))) translateZ(50px);
    }
    .container .text:last-child span{
        background: linear-gradient(#29c040,#32ed4e);
        color: #333;
    }
</style>