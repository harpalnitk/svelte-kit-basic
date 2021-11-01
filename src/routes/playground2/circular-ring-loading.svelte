<main>
    <section class='flex-center'>
        <div class="loading">
            {#each Array(20) as _,j}
                <div class="blocks" style='--i:{j+1};'></div>
            {/each}
            <h3>Loading</h3>
        </div>
    </section>
</main>
<style>
    main{

    }
    section{
min-height: 100vh;
background: #001d10;
animation: animateBackgroundColor 10s linear infinite;
    }
    @keyframes animateBackgroundColor{
        0%{
            filter: hue-rotate(0deg);
        }
        100%{
            filter: hue-rotate(360deg);
        }
    }
    .loading{
        position: relative;
        width: 250px;
        height: 250px;
    }
    .loading .blocks{
        position: absolute;
        width: 8px;
        height: 25px;
        background: #050c09;
        border-radius: 8px;
        left: 50%;
        transform: rotate(calc(18deg * var(--i))); /*360deg/20 =18deg */
        transform-origin: 0 125px; /* width(250px)/2*/
        animation: animate 1.9s ease-in-out infinite;
        animation-delay: calc(0.05s * var(--i)); /* 1/20 = 0.05s*/
    }
    @keyframes animate{
        0%,50%{
            background: #050c09;
            box-shadow: none;
        }
        50.1%,100%{
            background: #0f0;
            box-shadow: 0 0 5px #0f0,
            0 0 15px #0f0,
            0 0 30px #0f0,
            0 0 60px #0f0,
            0 0 90px #0f0;
        }
    }
    .loading h3{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 2em;
        letter-spacing: 2px;
        animation: animateText 2s ease-in-out infinite;
        animation-delay: -1s;
    }
    @keyframes animateText{
        0%,50%{
            color: #050c09;
            text-shadow: none;
        }
        50.1%,100%{
            color: #0f0;
            text-shadow: 0 0 5px #0f0,
            0 0 15px #0f0;
        }
    }
</style>