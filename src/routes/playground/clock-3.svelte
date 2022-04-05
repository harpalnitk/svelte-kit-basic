<script>
            let day= new Date();
       // let am ="AM"

setInterval(()=>{
     day = new Date();
});

//Analog
$: hr = day.getHours() * 30;
$: mn = day.getMinutes() * 6;
$: sc = day.getSeconds() * 6;



$: hh = day.getHours();
$: mm = day.getMinutes();
$: ss = day.getSeconds();
$: hh12 = hh > 12 ? hh-12 : hh;
$: hhh = ((hh12 < 10) ? '0' + hh12 : hh12);
$: mmm = ((mm < 10) ? '0' + mm : mm);
$: sss = ((ss < 10) ? '0' + ss : ss);
$: am = hh > 12 ? 'PM' : 'AM';
</script>
<main class='flex-center'>
<div class="container">
    <div class="clock">
        <div id='sc' class="circle" style='--clr:#04fc43;transform:rotateZ({sc}deg)'><i></i></div>
        <div id='mn' class="circle circle2" style='--clr:#fee800;transform:rotateZ({mn}deg)'><i></i></div>
        <div id='hr' class="circle circle3" style='--clr:#ff2572;transform: rotateZ({hr+(mn/12)}deg)'><i></i></div>
{#each Array(12) as _,i}
    <span style="--i:{i+1}"><b>{i+1}</b></span>
{/each}
    </div>
    <!-- digital clock -->
    <div id="time">
        <div id="hour" style='--clr:#ff2572;'>{hhh}</div>
        <div id="minutes" style='--clr:#fee800;'>{mmm}</div>
        <div id="seconds" style='--clr:#04fc43;'>{sss}</div>
        <div id="ampm">{am}</div>
    </div>
</div>
</main>

<style>
main{
    min-height: 100vh;
    background: #2f363e;
}
.container{
    position: relative;
    background: #2f363e;
    /* min-height: 500px; */
    border-radius: 30px;
    border-top-left-radius: 225px;/* 450px /2 */
    border-top-right-radius: 225px;
    box-shadow: 25px 25px 75px rgba(0,0,0,0.75),
    10px 10px 70px rgba(0,0,0,0.25),
    inset 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.clock{
    position: relative;
    width: 450px;
    height: 450px;
    background: #2f363e;
    border-radius: 50%;
    box-shadow: 10px 50px 70px rgba(0,0,0,0.25),
    inset 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}
.clock::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #2f363e;
    border: 3px solid #fff;
    border-radius: 50%;
    z-index: 10000;

}
.clock span{
    position: absolute;
    inset: 20px;
    color: #fff;
    text-align: center;
    transform: rotate(calc(30deg * var(--i)));
    /* 360 / 12 = 30deg */
}
.clock span b{
    font-size: 2em;
    opacity: 0.25;
    font-weight: 600;
    display: inline-block;
    transform: rotate(calc(-30deg * var(--i)));
}
.circle{
    position: absolute;
    width: 300px;
    height: 300px;
    border: 2px solid rgba(0,0,0,0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 10;
    
}
.circle i{
    position: absolute;
    width: 6px;
    height: 50%;
    background: var(--clr);
    opacity: 0.75;
    transform-origin: bottom;
    transform: scaleY(0.5);
}
.circle:nth-child(1) i{
    width: 2px;
}
.circle:nth-child(2) i{
    width: 6px;
}
.circle2{
    width: 240px;
    height: 240px;
    z-index: 9;
}
.circle3{
    width: 180px;
    height: 180px;
    z-index: 8;
}
.circle::before{
    content: '';
    position: absolute;
    top: -8.5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--clr);
    box-shadow: 0 0 20px var(--clr),
    0 0 60px var(--clr);
}

/* digital clock */
#time{
    margin-bottom: 40px;
    display: flex;
    padding: 10px 20px;
    font-size: 2em;
    font-weight: 600;
    border: 2px solid rgba(0,0,0,0.5);
    border-radius: 40px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);
}
#time div{
    position: relative;
    width: 50px;
    text-align: center;
    font-weight: 500;
    color: var(--clr);
}
#time div:nth-child(1)::after,
#time div:nth-child(2)::after{
    content: ':';
    position: absolute;
    right: -4px;
}
#time div:last-child{
    font-size: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
#time div:nth-child(2)::after{
    animation: animate 1s steps(1) infinite;
}
@keyframes animate{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
}
</style>
