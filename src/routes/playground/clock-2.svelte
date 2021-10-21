<script>
        let day= new Date();
       // let am ="AM"

setInterval(()=>{
     day = new Date();
});

$: hh = day.getHours();
$: mm = day.getMinutes();
$: ss = day.getSeconds();
$: hh12 = hh > 12 ? hh-12 : hh;
$: hhh = ((hh12 < 10) ? '0' + hh12 : hh12);
$: mmm = ((mm < 10) ? '0' + mm : mm);
$: sss = ((ss < 10) ? '0' + ss : ss);
$: am = hh > 12 ? 'PM' : 'AM';

//ampm

// if(hh>12){
//     hh = hh - 12;
//     am = "PM"
// }
</script>
<main class='flex-center'>
    <div id="clock">
        <h2>The time is now</h2>
        <div id="time">
            <div><span id='hour'>{hhh}</span><span>Hours</span></div>
            <div><span id='hour'>{mmm}</span><span>Minutes</span></div>
            <div><span id='hour'>{sss}</span><span>Seconds</span></div>
            <div><span id='ampm'>{am}</span></div>
        </div>
    </div>
</main>


<style lang="scss">
	@import '../../styles/vars';
    main{
        background: #060a1f;
        min-height: 100vh;
    }
    #clock h2{
    position: relative;
    display: block;
    color: #fff;
    text-align: center;
    margin: 10px 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    font-size: 0.8em;
    }
    #clock #time{
        display: flex;
    }
    #clock #time div{
        position: relative;
        margin: 0 5px;
        -webkit-box-reflect: below 1px linear-gradient(
            transparent,#0004
        );
    }
    #clock #time div span{
        position: relative;
        display: flex;
        width: 100px;
        height: 80px;
        background: #2196f3;
        color: #fff;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3em;
        z-index: 10;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
    }
    #clock #time div span:nth-child(2){
        height: 30px;
        font-size: 0.7em;
        letter-spacing: 0.2em;
        font-weight: 500;
        z-index: 9;
        box-shadow: none;
        background: #127fd6;
        text-transform: uppercase;
    }
    #clock #time div:nth-last-child(2) span{
        background: #ff006a;
    }
    #clock #time div:nth-last-child(2) span:nth-child(2){
        background: #ec0062;
    }
    #clock #time div:nth-last-child(1) span{
        position: absolute;
        bottom: 0;
        width: 60px;
        height: 40px;
        font-size: 1.5em;
        background: #fff;
        color: #000;
        -webkit-box-reflect: below 1px linear-gradient(
            transparent,#0004
        );
    }
</style>