<main class="flex-center">
<div class="drop">
    <i class="fab fa-apple"></i>
</div>
</main>
<style>
    main{
        min-height: 100vh;
        background: #eee;
        }
        .drop{
           position: relative;
           width: 150px;
           height: 150px;
           box-shadow: inset 10px 10px 10px rgba(0,0,0,.05),
           15px 25px 10px rgba(0,0,0,.05),
           15px 20px 20px rgba(0,0,0,.05),
           inset -10px -10px 15px rgba(255,255,255,0.9); 
           border-radius: 50%;
           display: flex;
           justify-content: center;
           align-items: center;
        }
        .drop::before{
            content:'';
            position: absolute;
            top: 35px;
            left: 25px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #fff;

        }
        .drop::after{
            content:'';
            position: absolute;
            top: 25px;
            left: 55px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #fff;

        }
        .drop i{
            font-size: 5em;
            color: #444;

        }
</style>