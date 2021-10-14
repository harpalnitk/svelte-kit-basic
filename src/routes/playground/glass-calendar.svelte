<script>
  
    import { onMount } from 'svelte';
    let jsReady = false;
    let cssReady = false;
    let mounted = false;
    let drawnCalendar = false;
    onMount(() => {
            // The payment-form is ready.
            mounted = true;
            if (jsReady && cssReady) {
                if(!drawnCalendar){
                    drawCalendar();
                }
                console.log('mounted');
            }
        });
    function jsLoaded() {
            // The external Stripe javascript is ready.
            jsReady = true;
            if (mounted && cssReady) {
                if(!drawnCalendar){
                    drawCalendar();
                }
                console.log('jsloaded');
            }
        }
        function cssLoaded() {
            // The external Stripe javascript is ready.
            cssReady = true;
            if (mounted && jsReady) {
                if(!drawnCalendar){
                    drawCalendar();
                }
                console.log('jsloaded');
            }
        }

        function drawCalendar(){
            drawnCalendar = true;
            dycalendar.draw({
                target:'#dycalendar',
                type:'month',
                dayformat:'full',
                monthformat:'full',
                highlighttargetdate: true,
                prevnextbutton:'show'
            })
        }
</script>


<svelte:head>
    <link rel="stylesheet" href="/css/dycalendar.css" on:load={cssLoaded}>
    <script src="../js/dycalendar.js" on:load={jsLoaded}></script>
</svelte:head>

<main>
<section>
    <div class="box">
        <div class="container">
<div id="dycalendar"></div>
        </div>
    </div>
</section>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #161623;
    overflow: hidden;
}
section::before{
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(#ffc107,#e91e63);
    border-radius: 50%;
    transform: translate(-250px,-120px);
}
section::after{
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    background: linear-gradient(#2196f3,#31ff38);
    border-radius: 50%;
    transform: translate(250px,150px);
}
.box{
    position: relative;
    z-index: 1000;
}
.container{
    position: relative;
    width: 400px;
    min-height: 400px;
    background: rgba(255,255,255,0.1);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.5);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(25px);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}


// p:global(.red) {
// 		/* this will apply to all <p> elements belonging to this 
// 			 component with a class of red, even if class="red" does
// 			 not initially appear in the markup, and is instead 
// 			 added at runtime. This is useful when the class 
// 			 of the element is dynamically applied, for instance 
// 			 when updating the element's classList property directly. */
// 	}

#dycalendar{
    width: 100%;
    padding: 20px;
}
#dycalendar :global(table){
    width: 100%;
    margin-top: 40px;
    border-spacing: 5px;
}
#dycalendar :global(table td){
    color: #fff;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
}
#dycalendar :global(table td:hover){
    background: #fff !important;
    color: #111 !important;
}
#dycalendar :global(table tr:nth-child(1) td){
 background: #fff;
 color: #111;
 border-radius: 4px;
 font-weight: 600;
}

:global(.dycalendar-month-container .dycalendar-today-date,
.dycalendar-month-container .dycalendar-target-date){
    background: #fff !important;
    color: #111 !important;
}

:global(.dycalendar-month-container .dycalendar-header
 .dycalendar-prev-next-btn.prev-btn){
background: #fff;
color: #111;
width: 44px;
height: 38px;
left: 4px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
}
:global(.dycalendar-month-container .dycalendar-header
 .dycalendar-prev-next-btn.next-btn){
background: #fff;
color: #111;
width: 44px;
height: 38px;
right: 4px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
}
:global(.dycalendar-month-container .dycalendar-span-month-year){
    color: #fff;
    font-size: 1.5em;
    font-weight: 500;
}
</style>