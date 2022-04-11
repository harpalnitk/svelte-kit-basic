<main class="flex-center">
    {#each Array(16) as _,i}
    <label for="name">
        <input type="radio" name='pink'>
        <div class="face"></div>
    </label>
    <label for="green">
        <input type="radio" name='green'>
        <div class="face"></div>
    </label>
    {/each}


</main>
<style>
    main{
        --clr1: #ff0087;
        --clr2: #01ff5f;
        min-height: 100vh;
        flex-wrap: wrap;
        gap: 4px;
        background: #222;
        overflow: hidden;
    }
    label{
        position: relative;
        width: 150px;
        height: 150px;
    }
    label input[type="radio"]{
        position: relative;
        z-index: 1;
        appearance: none;
        -webkit-appearance: none !important;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    label .face{

        position: absolute;
        inset: 0;
        background: #333;
        border-radius: 50%;
        cursor: pointer;
        mix-blend-mode: lighten;
        transition: 0.5s;
    }

    label input[type="radio"]:checked ~ .face{
        background: var(--clr1);
        z-index: 1000;
        filter: drop-shadow(0 0 50px var(--clr1))
        drop-shadow(0 0 100px var(--clr1))
        drop-shadow(0 0 150px var(--clr1));
    }
    label:nth-child(even) input[type="radio"]:checked ~ .face{
        background: var(--clr2);
        filter: drop-shadow(0 0 50px var(--clr2))
        drop-shadow(0 0 100px var(--clr2))
        drop-shadow(0 0 150px var(--clr2));
    }
    label .face::before{
        content: '';
        position: absolute;
        top: 60px;
        left: 45px;
        width: 15px;
        height: 15px;
        background: #111;
        opacity: 0.5;
        border-radius: 50%;
        box-shadow: 45px 0 0 #111;
    }
    label .face::after{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 45px;
        width: 40px;
        height: 8px;
        border-radius: 8px;
        background: #111;
        opacity: 0.5;
        transition: 0.5s;
        }
        label input[type="radio"]:checked ~ .face::after{
           width: 40px;
           height: 20px;
           border-radius: 0;
           border-bottom-left-radius: 20px;
           border-bottom-right-radius: 20px;
           transform: translateX(-50%) translateY(10px);
        }
</style>