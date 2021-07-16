<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';

    const deg = 6;
    let day= new Date();

    setInterval(()=>{
         day = new Date();
});

 $: hh = day.getHours() * 30;
 $: mm = day.getMinutes() * deg;
 $: ss = day.getSeconds() * deg;




</script>
<BasicPage title='Clock'></BasicPage>


<main>
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
</main>



<style lang="scss">
	@import '../../styles/vars';
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
    --shadow:  calc(var(--size)*(15/350));
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
.clock:before{
    content: '';
    position: absolute;
    width: calc(var(--size)* (3/70));
    height: calc(var(--size)* (3/70));
    background: #fff;
    border-radius: 50%;
    z-index: 10000;
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
</style>