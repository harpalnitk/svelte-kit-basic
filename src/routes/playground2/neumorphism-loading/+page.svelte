<main class='flex-center'>
    <div class="loader">
        <span style='--i:0;'></span>
        <span style='--i:1;'></span>
        <span style='--i:2;'></span>
        <span style='--i:3;'></span>
        <span style='--i:4;'></span>
        <span style='--i:5;'></span>
        <span style='--i:6;'></span>
    </div>
</main>

<style>
main{
    min-height: 100vh;
    background: #eaeef0;
}
.loader{
    --size: 25px;
    position: relative;
    display: flex;
}
.loader span{
    position: relative;
    width: var(--size);
    height: var(--size);
    background: #eaeef0;
    margin: 0 calc(var(--size) / 10);
    border-radius: 50%;
    border: calc(var(--size) * 3 / 25) solid #eaeef0;
    box-shadow: -8px -8px 15px rgba(255,255,255,1),
    8px 8px 15px rgba(0,0,0,0.2),
    inset 3px 3px 5px rgba(0,0,0,0.1),
    inset -1px -1px 5px rgba(255,255,255,1);
}
.loader span::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5c89ff;
    border-radius: 50%;
    box-shadow: inset 3px 3px 5px rgba(0,0,0,0.1),
    inset -1px -1px 5px rgba(255,255,255,1);
    transform: scale(0);
    animation: animate 3.5s linear infinite, animateColor 5s linear infinite;
    animation-delay: calc(var(--i) * 0.2s);
}
@keyframes animate{
    0%,9.99%,70.0001%{
      transform:scale(0);
    }

10%,70%{
transform: scale(1);
}
}
@keyframes animateColor{
0%{
    filter: hue-rotate(0deg);
}
100%{
    filter: hue-rotate(360deg);
}
}
</style>