<main class="flex-center">
<div class="thunderbolt">
<div class="shape1"></div>
<div class="shape2"></div>
<div class="shape3"></div>
<div class="shape4"></div>
</div>
</main>

<style>
    main{
        --clr:#5ff436;
        min-height: 100vh;
        background: #222;
    }
    .thunderbolt{
display: flex;
gap: 60px;
    }
    .thunderbolt .shape1{
       position: relative;
       width: 0;
       height: 0;
       border-bottom: 60px solid var(--clr);
       border-left: 30px solid transparent;
       transform: skewX(-25deg) translate(-50%,-50%);
    }
    .thunderbolt .shape1::before{
        content: '';
        position: absolute;
        bottom: -110px;
        right: -20px;
        width: 0;
       height: 0;
       border-top: 60px solid var(--clr);
       border-right: 30px solid transparent;
    }
    .thunderbolt .shape2{
position: relative;
width: 25px;
height: 25px;
background: var(--clr);
transform: skewX(-30deg);
    }
    .thunderbolt .shape2::before{
        content: '';
        position: absolute;
        top: -50px;
        left: -20px;
        border-bottom: 60px solid var(--clr);
        border-left: 30px solid transparent;
    }
    .thunderbolt .shape2::after{
        content: '';
        position: absolute;
        bottom: -50px;
        right: -20px;
        border-top: 60px solid var(--clr);
        border-right: 30px solid transparent;
    }
    .thunderbolt .shape3{
position: relative;
width: 25px;
height: 25px;
background: var(--clr);
transform: skewX(-30deg);
    }
    .thunderbolt .shape3::before{
        content: '';
        position: absolute;
        top: -50px;
        left: -20px;
        border-bottom: 60px solid var(--clr);
        border-left: 30px solid var(--clr);
    }
    .thunderbolt .shape3::after{
        content: '';
        position: absolute;
        bottom: -50px;
        right: -20px;
        border-top: 60px solid var(--clr);
        border-right: 30px solid transparent;
    }
    .thunderbolt .shape4{
       position: relative;
       width: 25px;
       height: 60px;
    background: var(--clr);
       transform: skewX(-25deg) translate(-50%,-50%);
    }
    .thunderbolt .shape4::before{
        content: '';
        position: absolute;
        bottom: -50px;
        right: -20px;
        width: 0;
       height: 0;
       border-top: 60px solid var(--clr);
       border-right: 30px solid transparent;
    }

</style>