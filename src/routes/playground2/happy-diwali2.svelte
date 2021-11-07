<script>
    
</script>
<main class='flex-center'>
    <h2>
        <span style='--i:1;'>H</span>
        <span style='--i:2;'>a</span>
        <span style='--i:3;'>p</span>
        <span style='--i:4;'>p</span>
        <span style='--i:5;'>y</span>
        <span style='--i:7;margin-left:5vw;'>D</span>
        <span style='--i:8;'>i</span>
        <span style='--i:9;'>w</span>
        <span style='--i:10;'>a</span>
        <span style='--i:11;'>l</span>
        <span style='--i:12;'>i</span>
    </h2>
</main>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');
    main{
        min-height: 80vh;
        background: #111;
        font-family: 'Bad Script', cursive;
    }
    h2{
        color: transparent;
        font-size: 10vw;
    }
    h2 span{
        animation: animate 3s linear infinite;
        animation-delay: calc(0.1s * var(--i));
    }
    @keyframes animate{
        0%{
            color: #fff;
            filter: blur(2px) hue-rotate(0deg);
            text-shadow: 0 0 10px #00b3ff,
            0 0 20px #00b3ff,
            0 0 40px #00b3ff,
            0 0 80px #00b3ff,
            0 0 120px #00b3ff,
            0 0 200px #00b3ff,
            0 0 300px #00b3ff,
            0 0 400px #00b3ff;
        }
        30%,70%{
            color: #fff;
            filter: blur(2px) hue-rotate(360deg);
            text-shadow: 0 0 10px #00b3ff,
            0 0 20px #00b3ff,
            0 0 40px #00b3ff,
            0 0 80px #00b3ff,
            0 0 120px #00b3ff,
            0 0 200px #00b3ff;
        }
        100%{
color: transparent;
text-shadow: none;
filter: blur(2px) hue-rotate(0deg);
        }
    }
</style>