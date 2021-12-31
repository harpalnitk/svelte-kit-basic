<script>
    import { onMount } from 'svelte';
    let jsReady = false;
    let cssReady = false;
    let mounted = false;
    let drawnCalendar = false;
    let mainDiv;
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
            new Calendar(mainDiv.querySelector('.calendar'));
        }
</script>
<svelte:head>
    <!-- <link rel="stylesheet" type="text/css" href="https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.css" on:load={cssLoaded}/>
    <script src="https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.js" on:load={jsLoaded}></script> -->
    <link rel="stylesheet" type="text/css" href="/css/full-calendar.css" on:load={cssLoaded}/>
    <script src="../js/full-calendar.js" on:load={jsLoaded}></script>
</svelte:head>


<main bind:this="{mainDiv}">
    <div class="calendar"></div>
</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Quicksand:wght@300;400;500;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Oswald:wght@500;700&family=Quicksand:wght@300;400;500;600&display=swap');
    main{
        font-family: 'Quicksand', sans-serif;
        background: #f1fbff;
    }
    .calendar{
        padding: 20px 40px;
    }
    :global(.calendar .months-container){
        gap: 40px;
        justify-content: center;
    }
    :global(.calendar .months-container .month-container){
        background: #fff;
        padding: 20px;
        min-width: 280px;
        box-shadow: 15px 15px 40px rgba(0,0,0,0.15);
    }
    :global(.calendar table.month th.month-title){
color: #5a8990;
font-size: 1.9em;
font-weight: 200;
font-family: 'Dancing Script', cursive;

    }
    :global(.calendar table.month td:first-child,
    .calendar table.month td:last-child,
    .calendar table.month thead tr:nth-child(2) th:first-child,
    .calendar table.month thead tr:nth-child(2) th:last-child){
color: #f75c90;

    }
    :global(.calendar table.month td.day .day-content){
      padding: 6px 8px;
    }
    :global(.calendar table.month td.day-header){
        color: #777;
        font-size: 0.9em;
        font-weight: 700;
    }
    :global(.calendar .month tr td){
        font-size: 0.9em;
        font-weight: 500;
        color: #777;
    }
    :global(.calendar table.month td.day .day-content:hover){
background: #f75c90;
color: #fff;
    }
    :global(.calendar .calendar-header){
   border: none !important;
    }
    :global(.calendar .calendar-header table th:hover){
        background: transparent;
    }
    :global(.calendar .calendar-header .year-title){
       font-size: 4em;
       color: #f75c90;
       font-family: 'Dancing Script', cursive;

    }
    :global(.calendar .calendar-header .year-neighbor){
        font-size: 2.25em;

    }
    :global(.calendar .calendar-header .year-neighbor2){
        font-size: 1em;
        
    }
</style>