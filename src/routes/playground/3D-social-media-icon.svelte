<script>
    let links= [
        {id:1, name:'facebook',icon:'fab fa-facebook-f'},
        {id:2, name:'twitter',icon:'fab fa-twitter'},
        {id:3, name:'whatsapp',icon:'fab fa-whatsapp'},
        {id:4, name:'linkedin',icon:'fab fa-linkedin-in'},
        {id:5, name:'instagram',icon:'fab fa-instagram'},
        ]
</script>
<main class='flex-center'>
   <ul>
       {#each links as link}
       <li>
        <a href="#{link.name}">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class='{link.icon}'></span>
        </a>
    </li>
       {/each}
   </ul> 
</main>
<style>
    main{
min-height: 100vh;
background: #222;
    }
    ul{
       position: relative;
       display: flex;
       transform-style: preserve-3d;
       transform: rotate(-25deg) skew(25deg); 
    }
    ul li {
        position: relative;
        list-style: none;
        width: 60px;
        height: 60px;
        margin: 0 10px;

    }
    ul li::before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        background: #2a2a2a;
        transform-origin: top;
        transform: skewX(-41deg);
    }
    ul li::after {
        content: '';
        position: absolute;
        top: 0;
        left: -9px;
        width: 9px;
        height: 100%;
        background: #2a2a2a;
        transform-origin: right;
        transform: skewY(-49deg);
    }
    ul li span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex !important;
        justify-content: center;
        align-items: center;
        background: #333;
        color: rgba(255,255,255,0.2);
        font-size: 30px !important;
        transition: 0.2s;
    }
    ul li:hover span{
        z-index: 1000;
        transition: 0.5s;
        color: #fff;
        box-shadow: -1px 1px 1px rgba(0,0,0,0.05);
    }
    ul li:hover span:nth-child(5){
        transform: translate(40px, -40px);
        opacity: 1;
    }
    ul li:hover span:nth-child(4){
        transform: translate(30px, -30px);
        opacity: 0.8;
    }
    ul li:hover span:nth-child(3){
        transform: translate(20px, -30px);
        opacity: 0.6;
    }
    ul li:hover span:nth-child(2){
        transform: translate(10px, -10px);
        opacity: 0.4;
    }
    ul li:hover span:nth-child(1){
        transform: translate(0px, 0px);
        opacity: 0.2;
    }
    ul li:nth-child(1):hover span{
        background: #3b5999;
    }
    ul li:nth-child(2):hover span{
        background: #55acee;
    }
    ul li:nth-child(3):hover span{
        background: #25d366;
    }
    ul li:nth-child(4):hover span{
        background: #007b55;
    }
    ul li:nth-child(5):hover span{
        background: #e4405f;
    }
</style>