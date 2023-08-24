<script>
  

    let toggle =false;
    let mode = true;  //false for dark mode and true for light mode
    export let size = 40;
</script>
<main class:active={mode} style="--size:{size}">
    <div id="toggle" class:active={toggle} on:click="{()=> toggle=!toggle}">
<i class="indicator"></i> 
    </div>
    <span>Text</span>
</main>

<style>
    
    main{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        /* min-height: calc(var(--size) * 2px); */
        background: #2b2b2b;
        transition: 0.5s;
        padding: 10px 0;
    }
    main.active{
        background: #f8f8f8;
    }
    #toggle{
position: relative;
display: block;
width:  calc(var(--size) * 2px);
height: calc(var(--size) * 1px);
border-radius: calc(var(--size) * 1px);
background: #222;
transition: 0.5s;
box-shadow: inset 0 calc(var(--size) * 1px)  calc(var(--size) * 3 / 8 * 1px) rgba(0,0,0,0.1),
            inset 0 8px 8px rgba(0,0,0,0.1),
            inset 0 -4px 4px rgba(0,0,0,0.1);
            cursor: pointer;
    }
    main.active #toggle{
       background: #fff;
       box-shadow: inset 0 2px calc(var(--size) * 3 / 8 * 1px) rgba(0,0,0,0.1),
                   inset 0 2px 8px rgba(0,0,0,0.1),
                   inset 0 -4px 4px rgba(0,0,0,0.05);
    }
    #toggle .indicator{
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--size) * 1px);
        height: calc(var(--size) * 1px);
        background: linear-gradient(to bottom, #444,#222);
        border-radius: 50%;
        transform: scale(0.9) ;
        box-shadow: 0 8px calc(var(--size) / 4 * 1px)  rgba(0,0,0,0.5),
            inset 0 4px 4px rgba(255,255,255,0.2),
            inset 0 -4px 4px rgba(255,255,255,0.2);
            transition: 0.5s;
    }
    #toggle.active .indicator{
        left: calc(var(--size) * 1px);
    }
    main.active  #toggle .indicator{
       background: linear-gradient(to bottom, #eaeaea,#f9f9f9);
       box-shadow: 0 8px 20px rgba(0,0,0,0.5),
            inset 0 4px 4px rgba(255,255,255,1),
            inset 0 -4px 4px rgba(255,255,255,1);
    }
    main span{
        margin-left: 10px;
        font-weight: 500;
        font-size: 1em;
        color: #fff;

    }
    main.active span{
        color:#2b2b2b
    }
</style>
