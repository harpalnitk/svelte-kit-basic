<script>
    let toggle = false;
    const links =[
        { id:1,index:0, name: 'Edit Profile', icon: 'fa fa-user', clr:'#f44336' },
        { id:2,index:1, name: 'Inbox', icon: 'fas fa-comment-alt', clr:'#ffa117' },
        { id:3,index:2, name: 'Settings', icon: 'fas fa-cog' , clr:'#0fc70f'},
        { id:4,index:3, name: 'Support', icon: 'fas fa-question-circle' , clr:'#2196f3'},
        { id:5,index:4, name: 'Logout', icon: 'fas fa-sign-out-alt' , clr:'#b145e9'},

    ];
    let index=-1;
</script>
<main class='flex-center'>
    <div class="navigation" class:open={toggle}>
        <div class="menuToggle"  on:click="{()=>{toggle= !toggle}}">

        </div>
        <ul>
            {#each links as link}
            <li class='list' style="--clr:{link.clr}" class:active={link.index === index} on:click="{()=>{index=link.index}}">
                <a href="#{link.name}">
   <span class="icon"><i class='{link.icon}'></i></span>
   <span class="text">{link.name}</span>
                </a>
            </li>
            {/each}
    
        </ul>
    </div>
</main>

<style>
    main{
        min-height: 100vh;
        background: #3d4152;
        position: relative;
    }
    .navigation{
        position: absolute;
        inset: 20px 0 20px 20px;
        width: 75px;
        background: #fff;
        transition: 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navigation.open{
        width: 250px;
    }
    .navigation .menuToggle{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        border-bottom: 1px solid rgba(0,0,0,0.25);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 23px;
    }
    .navigation .menuToggle::before{
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background: #333;
        transform: translateY(-8px);
        transition: 0.5s;
    }
    .navigation.open .menuToggle::before{
        transform: translateY(0px) rotate(45deg);
    }
    .navigation .menuToggle::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background: #333;
        transform: translateY(8px);
        transition: 0.5s;
        box-shadow: 0 -8px 0 #333;
    }
    .navigation.open .menuToggle::after{
        transform: translateY(0px) rotate(-45deg);
        box-shadow: 0 0 0 #333;
    }
    .navigation ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
    .navigation ul li{
        list-style: none;
        position: relative;
        width: 100%;
        height: 60px;
        padding: 0 10px;
        transition: 0.5s;
    }
    .navigation ul li.active{
        transform: translateX(30px);
    }
    .navigation.open ul li.active{
        transform: translateX(10px);
    }
    .navigation ul li a{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        text-align: center;
    }
    .navigation ul li a .icon{
        position: relative;
        display: block;
        min-width: 55px;
        height: 55px;
        line-height: 60px;
        transition: 0.5s;
        border-radius: 10px;
        font-size: 1.75em;
        color: #222;
    }
    .navigation ul li.active a .icon{
        color: #fff;
        background: var(--clr);
    }
    .navigation ul li a .icon::before{
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--clr);
        filter: blur(8px);
        opacity: 0;
        transition: 0.5s;
    }
    .navigation ul li.active a .icon::before{
opacity: 0.5;
    }
    .navigation ul li a .text{
        position: relative;
        padding: 0 15px;
        height: 60px;
        display: flex;
        align-items: center;
        color: #333;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
    }
    .navigation.open ul li a .text{
        opacity: 1;
        visibility: visible;
    }
    .navigation ul li.active a .text{
        color: var(--clr);
    }

</style>