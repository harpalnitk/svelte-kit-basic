<script>
    export let color = '#ff22bb';
    export let index = 0;
</script>
<a href="border-glow" style='--clr:{color};--i:{index}'><span>Button</span></a>

<style>
    a{
        position: relative;
        padding: 20px 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);
        transition: 1s;
        overflow: hidden;
        text-decoration: none;
        -webkit-box-reflect: below 1px linear-gradient(transparent,transparent,#0004 );
    }
    a:hover{
        background: var(--clr);
        box-shadow:  0 0 10px var(--clr),
        0 0 20px var(--clr),
        0 0 30px var(--clr),
        0 0 40px var(--clr);
    }
    a::before{
        content: '';
        position: absolute;
        width: 40px;
        height: 400%;
        background: var(--clr);
        transition: 1s;
        animation: animate 2s linear infinite;
        animation-delay: calc(0.33s * var(--i));
    }
    a:hover::before{
width: 120%;
    }
    @keyframes animate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    a::after{
        content: '';
        position: absolute;
        inset: 4px;
        background: #0e1538;
        transition: 0.5s;
    }
    a:hover::after{
     background: var(--clr);
    }
     a span{
         position: relative;
         z-index: 1;
         font-size: 2em;
         color: #fff;
         opacity: 0.5;
         text-transform: uppercase;
         letter-spacing: 4px;
         transition: 0.5s;

     }
     a:hover span{
         opacity: 1;
     }
</style>