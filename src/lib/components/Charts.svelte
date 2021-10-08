<script>
    import { onMount } from 'svelte';
    // Chart data Input Variables
    // export let type = 'polarArea';
    // export let labels = ['Facebook', 'Youtube', 'Amazon'];
    // export let label = 'Traffic Source';
    // export let data = [1200, 1950, 3000];
    // export let backgroundColor = ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'];
    export let type;
    export let labels;
    export let label;
    export let data;
    export let backgroundColor;




    let jsReady = false;
    let mounted= false;


    onMount(() => {
            // The payment-form is ready.
            mounted = true;
            if (jsReady) {
                loadCharts();
                console.log('mounted');
            }
        });

        function jsLoaded(){
            jsReady = true;
            if (mounted){
                console.log('script loaded');
                loadCharts();
            }
        }
        var ctx;
        var myChart;
        function loadCharts(){
            if(myChart) myChart.destrot();
	 //ctx = document.getElementById('myChart');
     myChart = new Chart(ctx, {
    type,
    data: {
        labels,
        datasets: [{
            label,
            data,
            backgroundColor
        }]
    },
    options: {
          responsive:true,
    }
});
		}
</script>
<svelte:head>
    <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js" on:load={jsLoaded}></script> -->
	<script src="../js/charts/chart.min.js" on:load={jsLoaded}></script>
</svelte:head>

<canvas id='myChart' bind:this={ctx}></canvas>