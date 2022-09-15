<main class="flex-center">
    <div class="box">

    </div>
</main>

<style>
    
    main{
        --clr: #4fb6ff;
        min-height: 100vh;
        background: var(--clr);
    }
    .box{
        position: relative;
        width: 400px;
        height: 320px;
        background: #fff radial-gradient(
            var(--clr) 0px,
            var(--clr) 7px,
            transparent 7px
            );
            background-size: 20px 20px;
            background-position: -10px;
    }
    .box::before{
        content: '';
        position: absolute;
        inset: 20px;
        background: url(/img/misc/stamp.jpg);
        background-size: cover;
        box-shadow: 0 0 0 10px #fff;
    }
</style>