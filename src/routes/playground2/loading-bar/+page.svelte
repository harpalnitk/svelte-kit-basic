<script>
   

    export let width = 200;
</script>
<main class="main-page flex-center">
    <div class="container" style='--width:{width}'>
        <div class="loading">
            <span class="text">Loading</span>
            <div class="percent">
                <div class="progress"></div>
            </div>
        </div>
    </div>
</main>
<style lang="scss">
	@import '../../../styles/vars';
main{
    background: #1c1c1c;
}
.container{
    position: relative;
    width: calc(var(--width) * 1px);
}
.container .loading{
    position: relative;
    display: flex;
    background: linear-gradient(#616161 0%,#333 10%,#222);
    border: 2px solid #000;
    padding: calc(var(--width) * 2px / 50 );
    border-radius: 8px;
    box-shadow: 0 20px 35px rgba(0,0,0,0.5);
}
.container .loading::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255,255,255,0.1);
    z-index: 10;
    pointer-events: none;
}
.container .loading::after{
    content: '';
    position: absolute;
    top:calc(var(--width) * 27px / 500 );
    right: calc(var(--width) * 2px / 50 );
    width: calc(var(--width) * 1px / 50 );
    height: calc(var(--width) * 1px / 50 );
    border-radius: calc(var(--width) * 1px / 50 );
    background: #22e4e3;
    box-shadow: 0 0 5px #22e4e3,
    0 0 10px #22e4e3,
    0 0 40px #22e4e3;
    animation: animateLight 1s linear infinite;
}
@keyframes animateLight{
    0%,49.99%{
        background: #22e4e3;
    box-shadow: 0 0 5px #22e4e3,
    0 0 10px #22e4e3,
    0 0 40px #22e4e3; 
    }
    50%,100%{
        background: #111;
        box-shadow: none;
    }
}
.container .loading .text{
    position: relative;
    width: calc(var(--width) * 8px / 50 );
    color: #fff;
    text-align: right;
    font-size: calc(var(--width) * 4px / 125 );
    letter-spacing: 1px;
}
.container .loading .percent{
    position: relative;
    width: calc(100% - var(--width) * 6px / 25);
    top: calc(var(--width) * 1px / 250 );
    height: calc(var(--width) * 2px / 50 );
    background: #151515;
    border-radius: calc(var(--width) * 2px / 50 );
    margin: 0 calc(var(--width) * 1px / 50 );
    box-shadow: inset 0 0 10px #000;
    overflow: hidden;
}
.container .loading .percent .progress{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: calc(var(--width) * 2px / 50 );
    background: linear-gradient(45deg,#22ffde,#2196f3);
    animation: animate 6s ease-in-out infinite;
}
@keyframes animate{
    0%{
       width: 0;
       left: 0;
    }
    50%{
       width: 100%;
       left: 0;
    }
    100%{
        width: 100%;
        left: 100%;
    }
}


    </style>