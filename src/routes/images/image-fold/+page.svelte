<main class='flex-center'>
    <div class="box">
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
    </div>
</main>

<style>
main{
    min-height: 100vh;
    background: #2f364f;
}
.box{
    width: 640px;
    height: 360px;
    /* //background: #fff; */
    transform: rotate(-25deg) skew(25deg);
    transition: 0.5s;
    display: flex;
}
.box:hover{
    transform: rotate(-25deg) skew(-25deg) translateY(-20px);
}
.box span{
    width: 25%;
    height: 100%;
    background: url(/img/background/background-3.jpg);
    background-position: calc(-160px * var(--i));
    background-size: cover;
    display: block;
    transition: 0.5s;
    pointer-events: none;
    border-top: 5px solid #fff;
    border-bottom: 5px solid #fff;
}
.box:hover span:nth-child(odd){
    transform: skewY(25deg);
    box-shadow: inset 20px 0 50px rgba(0,0,0,0.5);
}
.box:hover span:nth-child(even){
    transform: skewY(-25deg);
}
.box span:first-child{
    border-left: 5px solid #fff;
}
.box span:last-child{
    border-right: 5px solid #fff;
}
</style>   