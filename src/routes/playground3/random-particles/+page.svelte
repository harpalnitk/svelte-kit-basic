<script>
</script>



<main class='main-page flex-center'>
<div class="circle">
    <div class="dots"></div>
</div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
        background: #888;
    }
    .circle{
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .circle::before{
        content: '';
        position: absolute;
inset: 20px;
border-radius: 50%;
box-shadow: 0 0 0 10px #333,
0 0 0 20px #444,
0 0 0 30px #555,
0 0 0 40px #666,
0 0 0 50px #777,
inset 0 0 0 40px rgba(0,0,0,0.5);
    }
    .dots{
        position: absolute;
        inset: 10px;
        border-radius: 50%;
        background: #fff;
        animation: animate 10s linear infinite;
    }

    .dots::before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
        left: calc(50% - 5px);
        top: 0;
        box-shadow: 50px 0 0 #fff,
                    -65px -50px 0 #fff,
                    -65px 50px 0 #ff0,
                    -55px 0 0 #fff,
                    45px 35px 0 #ff0,
                    -40px -40px 0 #fff,
                    40px -40px 0 #ff0,
                    55px -59px 0 #fff;
                    animation: animate 10s linear infinite;
    }
    .dots::after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
        left: calc(50% - 5px);
        bottom: 0;
        box-shadow: -50px 0 0 #fff,
                    65px 50px 0 #fff,
                    65px -50px 0 #ff0,
                    55px 0 0 #fff,
                    -45px -35px 0 #ff0,
                    40px 40px 0 #fff,
                    -40px 40px 0 #ff0,
                    -55px 59px 0 #fff;
                    animation: animate 10s linear infinite;
    }
    @keyframes animate{
        0%{
         transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>