<main class='flex-center'>
    <video src="/vid/particles.mp4" muted autoplay></video>
    <h2><span>P</span>articles Di<span>st</span>ortion Effects</h2>
</main>

<style>
    main{
        min-height: 100vh;
        background: #000;
        position: relative;
    }
    h2{
        position: relative;
        margin: 0;
        font-size: 4em;
        font-weight: 900;
        color: #fff;
        z-index: 1;
        overflow: hidden;
    }
    h2::before{
        content: '';
        position: absolute;
        left: 110%;
        width: 120%;
        height: 100%;
        background: linear-gradient(90deg,transparent 0%,#000 5%,#000 100%);
        animation: animate 5.5s linear forwards;
        animation-delay: 2s;
    }
    @keyframes animate{
        0%{
left:110%;
        }
        100%{
left: -20%;
        }
    }
    h2 span{
        color: #ff022c
    }
    video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
        pointer-events: none;
        mix-blend-mode: screen;
    }
</style>