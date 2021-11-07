<script>
  
    const links = [
        {id:1, url:'home', icon:'fas fa-home',text:'Home'},
        {id:2, url:'about', icon:'fa fa-info-circle',text:'About'},
        {id:3, url:'portfolio', icon:'far fa-images',text:'Portfolio'},
        {id:4, url:'services', icon:'fas fa-people-carry',text:'Services'},
        {id:5, url:'team', icon:'fas fa-users',text:'Team'},
        {id:6, url:'contact', icon:'fas fa-address-card',text:'Contact'},
    ]
    
</script>

<main class='flex-center'>
    <ul>
{#each links as link}
<li> 
    <a href="#link.url">
        <div class="icon">
            <i class={link.icon} aria-hidden="true"></i>
            <i class={link.icon} aria-hidden="true"></i>
        </div>
        <div class="name"><span data-text='{link.text}'>{link.text}</span></div>
    </a>

</li>
{/each}

    </ul>

</main>

<style>
    main{
        min-height: 80vh;
        background: #188aff;

    }
    ul{
        position: relative;
        padding: 20px;
        width: 300px;
        background: #fff;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1) ;
    }
    ul li{
        position: relative;
        list-style: none;
    }
    ul li::before{
        content: '';
        position: absolute;
        top: 26px;
        right: 10px;
        width: 10px;
        height: 10px;
        background: #e0e0e0;
        border-radius: 50px;
        transition: 0.5s;
    }
    ul li:hover::before{
        background: #188aff;
    }
    ul li a{
        text-decoration: none;
        display: flex;
    }
    ul li a .icon{
        width: 60px;
        height: 40px;
        text-align: center;
        overflow: hidden;
        margin: 10px;

    }
    ul li a .icon i{
        width: 100%;
        height: 100%;
        line-height: 40px;
        font-size: 34px;
        color: #333;
        transition: 0.5s;
    }
    ul li a .icon i:last-child{
        color: #188aff;
    }
    ul li a:hover .icon i{
        transform: translateY(-100%);
    }
    ul li a:hover .icon i:last-child{
        transform: translateY(-100%);
    }
    ul li a .name{
        position: relative;
        top: 20px;
        height: 20px;
        width: 100%;
        display: block;
        overflow: hidden;
    }
    ul li a .name span{
        display: block;
        position: relative;
        color: #333;
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        transition: 0.5s;
    }
    ul li a .name span::before{
        content: attr(data-text);
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        color: #188aff;
    }
    ul li a:hover .name span{
      transform: translateY(20px);
    }
</style>