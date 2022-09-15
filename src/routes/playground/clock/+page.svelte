<script>
   
let toggle = false;
    const deg = 6;
    let day= new Date();

    setInterval(()=>{
         day = new Date();
});

 $: hh = day.getHours() * 30;
 $: mm = day.getMinutes() * deg;
 $: ss = day.getSeconds() * deg;




</script>



<main class:light={toggle}>
<div class="clock">
    <div class="hour">
        <div class="hr" id="hr" 
        style='transform:rotateZ({(hh)+(mm/12)}deg)'></div>
    </div>
    <div class="min">
        <div class="mn" id="mn"
        style='transform:rotateZ({mm}deg)'
        ></div>
    </div>
    <div class="sec">
        <div class="sc" id="sc"
        style='transform:rotateZ({ss}deg)'
        ></div>
    </div>
    <div class="disp twelve">12</div>
    <div class="disp three">3</div>
    <div class="disp six">6</div>
    <div class="disp nine">9</div>
</div>
<div class="toggleClass" on:click="{()=>{toggle= !toggle}}"></div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #091921;

    --size: 20rem;
    --disp-size: calc(var(--size)/ 15);
    --shadow:  calc(var(--size)*(15/700));
    --shadow-light:  calc(var(--size)*(15/700));
}
main.light{
    background: #d1dae3;;
}
.clock{
    position: relative;
    width: var(--size);
    height:  var(--size);
    display: flex;
    justify-content: center;
    align-items: center;
    // background: url(/img/misc/clock.png);
    // background-size: cover;
    border: calc(var(--size)*(8/350)) solid #091921;
    border-radius: 50%;
    box-shadow: 0 calc(var(--shadow) * -1) var(--shadow) rgba(255,255,255,0.05),
                inset 0 calc(var(--shadow) * -1) var(--shadow) rgba(255,255,255,0.05),
                0 var(--shadow) var(--shadow) rgba(0, 0, 0, 0.3),
                inset 0 var(--shadow) var(--shadow) rgba(0,0,0,0.3);
}

main.light .clock{
    border: 4px solid #cad3dc;
    box-shadow: 0 calc(var(--shadow) * -1) var(--shadow) rgba(255,255,255,0.5),
                inset 0 calc(var(--shadow) * -1) var(--shadow) rgba(255,255,255,0.5),
                0 var(--shadow-light) var(--shadow-light) rgba(0, 0, 0, 0.1),
                inset 0 var(--shadow-light) var(--shadow-light) rgba(0,0,0,0.1);
}
.clock:before{
    content: '';
    position: absolute;
    width: calc(var(--size)* (3/70));
    height: calc(var(--size)* (3/70));
    background: #fff;
    border-radius: 50%;
    z-index: 10000;
}
main.light .clock:before{
background: #008eff;
}
.clock .hour,
.clock .min,
.clock .sec{
    position: absolute;
}

.clock .hour, .hr{
    width: calc(var(--size)*(16/35));
    height: calc(var(--size)*(16/35));
}
.clock .min, .mn{
    width: calc(var(--size)*(19/35));
    height: calc(var(--size)*(19/35));
}
.clock .sec, .sc{
    width: calc(var(--size)*(23/35)); // height of perfect square inside circle
    height: calc(var(--size)*(23/35));
}
.hr, .mn, .sc{
    display: flex;
    justify-content: center;
    // align-items: center;
    position: absolute;
    border-radius: 50%;
}
.hr::before{
    content: '';
    position: absolute;
    width:calc(var(--size)*(8/350));
    height:calc(var(--size)*(8/35));
    background: #ff105e;
    z-index: 10;
    border-radius: 6px 6px 0 0;

}
.mn::before{
    content: '';
    position: absolute;
    width: calc(var(--size)*(4/350));
    height: calc(var(--size)*(9/35));
    background: #fff;
    z-index: 11;
    border-radius: 6px 6px 0 0;

}
main.light .mn::before{
    background: #091921;
}
.sc::before{
    content: '';
    position: absolute;
    width: calc(var(--size)*(2/350));
    height: calc(var(--size)*(15/35));
    background: #fff;
    z-index: 12;
    border-radius: 6px 6px 0 0;

}
.disp{
    position: absolute;
    font-size: var(--disp-size);
    color: #fff;
}
.twelve{
    top: 5%;
}
.three{
    top: calc((100% - var(--disp-size))/2);
    right: 5%;
}
.six{
    bottom: 5%;
}
.nine{
    top: calc((100% - var(--disp-size))/2);
    left: 5%;
}
.toggle{
    position: absolute;
    top: 30px;
    right: 150px;
    width: 20px;
    height: 20px;
    font-size: 18px;
    border-radius: 50%;
    background: #d1dae3;
    color: #d1dae3;
    font-family: consolas;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;
}
.toggle::before{
    position: absolute;
    content: 'Light Mode';
    left: 25px;
    white-space: nowrap;
}
.toggleClass{
    position: absolute;
    top: 30px;
    right: 150px;
    width: 20px;
    height: 20px;
    font-size: 18px;
    border-radius: 50%;
    background: #d1dae3;
    color: #d1dae3;
    font-family: consolas;
    cursor: pointer;
    display: flex;
    align-items: center;

}
.toggleClass::before{
    position: absolute;
    content: 'Light Mode';
    left: 25px;
    white-space: nowrap;
}
main.light .toggleClass{
    background: #091921;
    color: #091921;
}
main.light .toggleClass::before{
    content: 'Dark Mode'; 
}
</style>