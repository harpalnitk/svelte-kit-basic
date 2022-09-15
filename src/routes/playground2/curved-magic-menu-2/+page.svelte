<script>

    let index = 0;
    let links= [
        {id:1, url:'home',icon:'fas fa-home', name:'Home'},
        {id:2, url:'profile',icon:'fa fa-user', name:'Profile'},
        {id:3, url:'message',icon:'fas fa-envelope', name:'Message'},
        {id:4, url:'photo',icon:'fas fa-camera', name:'Photo'},
        {id:5, url:'setting',icon:'fas fa-cog', name:'Setting'},

    ];
</script>
<main class='flex-center'>
    <nav class="navigation flex-center">
<ul>
    {#each links as link,i}
    <li class="list" on:mouseenter={()=> index = i} class:active={index === i} >
        <a href="#{link.url}">
            <span class="icon"><i class='{link.icon}'></i></span>
            <span class="text">{link.name}</span>
        </a>

    </li>
    {/each}
<div class="indicator" style='--i:{index}'></div>
    
</ul>
    </nav>
</main>
<style>
    main{
        min-height: 100vh;
        background: #222327;
    }
    .navigation{
        position: relative;
        width: 400px;
        height: 60px;
        background: #fff;
        border-radius: 10px;
    }
    .navigation ul{
        display: flex;
        width: 350px;
    }
    .navigation ul li{
        list-style: none;
        position: relative;
        /* 350/5 = 70 */
        width: 70px;
        height: 60px;
        z-index: 2;

    }
    .navigation ul li a{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        font-weight: 500;
        list-style: none;
    }
    .navigation ul li a .icon{
        position: relative;
        display: block;
        line-height: 65px;
        font-size: 1.5em;
        transition: 0.5s;
        color: #222327;
    }
    .navigation ul li.active a .icon{
transform: translateY(-32px);
color: #2196f3;
    }
    .navigation ul li a .text{
       position: absolute;
       background: #2196f3;
       color: #fff;
       padding: 2px 7px;
       border-radius: 12px;
       font-weight: 400;
       font-size: 0.75em;
       letter-spacing: 0.05em;
       transition: 0.5s;
       opacity: 0;
       transform: translateY(15px);


    }
    .navigation ul li.active a .text{
        transform: translateY(-4px);
        opacity: 1;
    }
    .indicator{
        position: absolute;
        top: -35px;
        width: 70px;
        height: 70px;
        background: #fff;
        border-radius: 50%;
        z-index: 1;
        transition: 0.5s;
    }
    .indicator::before{
       content: '';
       position: absolute;
       width: 30px;
       height: 30px;
       top: 5px;
       left: -28px;
       background: transparent;
       border-radius: 50%;
       box-shadow: 15px 18px #fff;
    }
    .indicator::after{
       content: '';
       position: absolute;
       width: 30px;
       height: 30px;
       top: 5px;
       right: -28px;
       background: transparent;
       border-radius: 50%;
       box-shadow: -15px 18px #fff;
    }
    .navigation ul li.active ~ .indicator{
       transform: translateX(calc(70px * var(--i))); 
    }
</style>