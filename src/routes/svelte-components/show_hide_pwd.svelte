<script>
    let toggle = false;
</script>
<main class='flex-center'>
    <div class="inputBox">
        <input type="{toggle ? 'text': 'password'}" name='' placeholder="Enter password" id='password'>
        <div id="toggle" class:active={toggle} on:click="{()=>{toggle=!toggle}}">
            <i class="fa fa-eye" aria-hidden="true"></i>
            <i class="fa fa-eye-slash" aria-hidden="true"></i>
        </div>
    </div>
</main>
<style>
    main{
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
        background: #f8f8f8;
    }
    .inputBox{
        position: relative;
        width: 400px;
        height: 60px;
    }
    .inputBox input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        padding: 0 20px;
        font-size: 18px;
        outline: none;
        border-radius: 8px;
        box-shadow: -4px -4px 10px rgba(255,255,255,1),
        inset 4px 4px 10px rgba(0,0,0,0.05),
        inset -4px -4px 10px rgba(255,255,255,1),
        4px 4px 10px rgba(0,0,0,0.05);
    }
    .inputBox input::placeholder{
        color: #ccc;
    }
    #toggle{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    #toggle i:nth-child(2){
        display: none;
    }
    #toggle.active i:nth-child(2){
        display: block;
    }
    #toggle.active i:nth-child(1){
        display: none;
    }

</style>