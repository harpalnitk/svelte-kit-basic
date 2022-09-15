<script>
    let toggle= false;
    let selection = '';
</script>
<main class="flex-center">
   <div class="dropdown" class:active={toggle} on:click="{()=>{toggle=!toggle}}">
       <input type="text" class='textBox' placeholder="Dropdown Menu" value={selection}>
       <div class="option">
           <div on:click={()=>{selection='Html'}}><i class="fa fa-html5" aria-hidden="true"></i> Html</div>
           <div><i class="fa fa-book" aria-hidden="true"></i>React</div>
           <div><i class="fa fa-css3" aria-hidden="true"></i>CSS</div>
           <div><i class="fa fa-code" aria-hidden="true"></i>Javascript</div>
           <div><i class="fa fa-angellist" aria-hidden="true"></i>Angular</div>
    </div>
   </div> 
</main>
<style>
    main{
        min-height: 100vh;
        background: #fafafa;
    }
    .dropdown{
        position: relative;
        margin-top: 100px;
        width: 300px;
        height: 50px;
    }
    .dropdown::before{
        content: '';
        position: absolute;
        right: 20px;
        top: 15px;
        z-index: 10000;
        width: 8px;
        height: 8px;
        border: 2px solid #333;
        border-top: 2px solid #fff;
        border-right:2px solid #fff;
        transform: rotate(-45deg);
        transition: 0.5s;
        pointer-events: none;

       
    }
    .dropdown.active::before{
        top: 22px;
        transform: rotate(-225deg);
    }
    .dropdown input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background: #fff;
        border: none;
        outline: none;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        padding: 12px 20px;
        border-radius: 10px;
    }
    .dropdown .option{
        position: absolute;
        top: 70px;
        width: 100%;
        background: #fff;
        box-shadow: 0 30px 30px rgba(0,0,0,0.05);
        border-radius: 10px;
        overflow: hidden;
        display: none;
        transition: 0.5s;
    }
    .dropdown.active .option{
        display: block;
    }
    .dropdown .option div{
        padding: 12px 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .dropdown .option div:hover{
        background: #62baea;
        color: #fff;
    }
    .dropdown .option div i {
        position: relative;
        /* top: 4px; */
        font-size: 1.2em;
        margin-right: 5px;
    }
</style>