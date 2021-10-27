<script>
let array = [1,3,16,5,20,6,7,10,17,11,12,13,14,2,9,15,4,19];
</script>
<main class='flex-center'>
    <div class="container">
        <div class="plate"></div>
        <div class="cup">
<div class="top">
    <div class="vapour">
        {#each array as a}
        <span style="--i:{a+1}"></span>
        {/each}
    </div>
    <div class="circle">
<div class="tea"></div>
    </div>
</div>
<div class="handle"></div>
        </div>
    </div>
</main>

<style>
main{
    min-height: 100vh;
    background: #607d8b;
}
.container{
    position: relative;
    top: 50px;
}
.cup{
    position: relative;
    width: 280px;
    height: 300px;
    background: linear-gradient(to right, #f9f9f9,#d9d9d9);
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;

}
.top{
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right, #f9f9f9,#d9d9d9);
    border-radius: 50%;
}
.circle{
    position: absolute;
    top: 5px;
    left: 10px;
     width: calc(100% - 20px);/*double of left */
     height: 50px;
     background: linear-gradient(to left, #f9f9f9,#d9d9d9);
     border-radius: 50%;
     overflow: hidden;
     /* box-sizing: border-box; */

}
.tea{
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#c57e65,#e28462);
    border-radius: 50%;
}
.handle{
    position: absolute;
    right: -70px;
    top: 40px;
    width: 160px;
    height: 180px;
    border: 25px solid #dcdcdc;
    border-left: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-radius: 50%;
    transform: rotate(42deg);
}
.plate{
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 200px;
    background: linear-gradient(to right, #f9f9f9,#e7e7e7);
    border-radius: 50%;
    box-shadow: 0 35px 35px rgba(0,0,0,0.2);
}
    .plate::before{
content: '';
position: absolute;
inset: 10px;
border-radius: 50%;
background: linear-gradient(to left, #f9f9f9,#e7e7e7);
    }
    .plate::after{
content: '';
position: absolute;
inset: 30px;
border-radius: 50%;
background: radial-gradient(rgba(0,0,0,0.2) 25%, transparent, transparent);
    }
    .vapour{
        position: relative;
        display: flex;
        z-index: 1;
        padding: 0 20px;
    }
    .vapour span{
        position: relative;
        bottom: 50px;
        display: block;
        margin: 0 2px 50px;
        min-width: 8px;
        height: 120px;
        background: #fff;
        border-radius: 50%;
        filter: blur(8px);
        animation: animate 5s linear infinite;
        animation-delay: calc(var(--i) * -0.5s);
    }
    @keyframes animate{
        0%{
            transform: translateY(0) scaleX(1);
            opacity: 0;
        }
        15%{
            opacity: 1;
        }
        50%{
            transform: translateY(-150px) scaleX(5);
           
        }
        95%{
            opacity: 0;
        }
        100%{
            transform: translateY(-300px) scaleX(10);
           
        }
    }
</style>