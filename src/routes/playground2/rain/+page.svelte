<script>
   	import { onMount } from 'svelte';

    
     
       let w;
    
       let qty = 100;
       let mounted = false;

       onMount(async () => {
        mounted = true;
        });
  //let wrapper;
//    let innerWidth,innerHeight;
//     function rain(){
//         let amount = 1;
//         let i=0;
//         while(i < amount){
//             let drop = document.createElement('i');
// let size= Math.random() * 5;
// drop.style.width = 0.2 + size + 'px';
// let posX = Math.floor(Math.random() * w);
// let delay = Math.random() * -20;
// let duration = Math.random() * 5;
// drop.style.left = posX + 'px';
// drop.style.animationDelay = delay + 's';
// drop.style.animationDuration = 1 + duration + 's';

//             wrapper.appendChild(drop);
//             i++;
//         }
//     }

    const getWidth = () => {
        return 0.2 + Math.random() * 5;
    }
    const getLeft = () => {
        return Math.floor(Math.random() * w);
    }
</script>

<!-- <svelte:window bind:innerWidth bind:innerHeight/> -->
<main class='rain' bind:clientWidth={w}>
    {#if mounted}
    {#each Array(qty) as _,i}
    <i
    style="
    --w:{getWidth()}px;
    --left: {getLeft()}px;
    width:var(--w);
    left:var(--left);
    animation-delay:{Math.random() * -20}s;
    animation-duration:{1+ Math.random() * 5}s;
    "
    ></i>
{/each}
    {/if}

</main>


<style>
   main{
       --height: 200px;
       background: #000;
       overflow: hidden;
       height: 100vh;
   } 

   :global(.rain i){
       position: absolute;
       height: var(--height);
       background: linear-gradient(transparent, #fff);
       border-bottom-left-radius: 5px;
       border-bottom-right-radius: 5px;
       animation: animate 5s linear infinite;
   }
   :global(.rain i:nth-child(3n+1)){
background: linear-gradient(transparent,#0ff);
   }
   :global(.rain i:nth-child(3n+2)){
background: linear-gradient(transparent,#0f0);
   }
   :global(.rain i:nth-child(3n+3)){
background: linear-gradient(transparent,#f00);
   }

   @keyframes animate{
       0%{
           transform: translateY(calc(var(--height) * -1));
       }
       100%{
           transform: translateY(calc(100vh + var(--height)));
       }
   }
</style>