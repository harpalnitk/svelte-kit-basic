<script></script>
<main class='flex-center'>
    <div class="tree">
        {#each Array(4) as _,j}
        <div class="top" style='--j:{j}'>
            {#each Array(4) as _,i}
            <span style='--i:{i};'></span>
            {/each}
        </div>
        {/each}
        <div class="bottom">
            {#each Array(4) as _,i}
            <span style='--i:{i};'></span>
            {/each}
        </div>
        <span class='shadow'></span>
        <div class="text">
            <span style='--i:0;' data-text='Happy'>Happy</span>
            <span style='--i:1;' data-text='New'>New</span>
            <span style='--i:2;' data-text='Year'>Year</span>
            <span style='--i:3;' data-text='2022'>2022</span>
        </div>
    </div>
</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap');
main{
    --size:100px;
min-height: 100vh;
background: #e8ffe8;
font-family: 'Oswald', sans-serif;
}
.tree{
    position: relative;
    top: -120px;
    width: var(--size);
    height: var(--size);
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg);
    animation: animate 6s linear infinite;
}
.tree::before{
    content:'\2B50';
    position: absolute;
    top: -42px;
    left: calc(50% - 17px);
    font-size: 1.5em;
}
@keyframes animate{
    0%{
        transform: rotateX(-20deg) rotateY(360deg);
    }
    100%{
        transform: rotateX(-20deg) rotateY(0deg);
    }
}
.tree div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(50px * var(--j)));
}
.tree div.top span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,#69c069,#77dd77);
    clip-path: polygon(50% 0,0% 100%,100% 100%);
    transform-origin: bottom;
    border-bottom: 5px solid #00000019;
    transform: rotateY(calc(90deg * var(--i))) rotateX(30deg)
    translateZ(57px) ;
}
.tree div.bottom span{
    position: absolute;
    top: calc(var(--size) * 2);
    left: calc(50% - 10px);
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg,#bb4622,#df7214);
    /* clip-path: polygon(50% 0,0% 100%,100% 100%); */
    transform-origin: bottom;
    border-bottom: 5px solid #00000055;
    transform: rotateY(calc(90deg * var(--i))) 
    translateZ(10px) ;

}
.shadow{
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: #0000000f;
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-250px);
    filter: blur(12px);
}

.tree div.text span{
    position: absolute;
    top: calc(var(--size) * 2);
    left: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(90deg,#69c069,#77dd77); */
    /* clip-path: polygon(50% 0,0% 100%,100% 100%); */
    transform-origin: bottom;
    /* border-bottom: 5px solid #00000019; */
    transform: rotateY(calc(90deg * var(--i))) 
    translateZ(57px) ;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #ff4242;
    font-size: 2.5em;
    text-transform: uppercase;
    line-height: 1em;
    -webkit-text-stroke: 1px #fff;
    font-weight: 700;
    transform-style: preserve-3d;
}
.tree div.text span:nth-child(1){
    font-size: 2em;
}
.tree div.text span::before{
    content: attr(data-text);
    position: absolute;
    bottom: 5px;
    transform-origin: bottom;
    transform: rotateX(-90deg);
    -webkit-text-stroke: 0px #fff;
    color: rgba(0,0,0,0.1);
    filter: blur(2px);
}
</style>