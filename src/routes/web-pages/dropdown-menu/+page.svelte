<script>
let toggle = false;
const webpages = [
        {name:'Home', url: 'home'},
        {name:'News', url: 'news'},
        {name:'Contact', url: 'contact'},
        {name:'About', url: 'about'},
        {name:'Services', url: 'services'},
        {name:'Team', url: 'team'},
    ];
</script>
<main>
    <div class="navigation"  class:active={toggle}>
        <div class="toggle" 
        class:active={toggle} 
        on:click="{()=> toggle = !toggle}">
            <span></span>
        </div>
    <ul>
        {#each webpages as page}
             <li><a href="#{page.url}">{page.name}</a></li>
        {/each}
    </ul>
    </div>
    {#each webpages as page}
    <section id="{page.url}">
        <h2>{page.name}</h2>
    </section>
    {/each}

   
</main>


<style lang="scss">
	@import '../../../styles/vars';
    main{
        scroll-behavior: smooth; // will work with * tag; not working here
    }
    .navigation{
        position: fixed;
        top: 50px;
        right: 50px;
        height: 50px;
        width: 250px;
        background: #2196f3;
        transition: 0.5s;
        z-index: 10000;
        overflow: hidden;
    }
    .navigation.active{
        height: 350px;
    }
    .navigation .toggle{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #2196f3;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 20px;
        font-size: 20px;
        cursor: pointer;
    }
    .navigation .toggle::before{
        content: 'Menu';
        margin-right: 10px;
    }
    .navigation .toggle.active::before{
        content: 'Close';
        margin-right: 10px;
    }
    .navigation .toggle span{
        position: relative;
        width: 20px;
        height: 50px;
    }
    .navigation .toggle span::before{
content: '';
position: absolute;
top: 20px;
left: 0;
width: 100%;
height: 2px;
background: #fff;
transition: 0.5s;
    }

    .navigation .toggle.active span::before{
        transform: rotate(225deg);
        top: 24px;
    }
    .navigation .toggle span::after{
content: '';
position: absolute;
bottom: 20px;
left: 0;
width: 100%;
height: 2px;
background: #fff;
transition: 0.5s;
    }
    .navigation .toggle.active span::after{
        transform: rotate(135deg);
        bottom: 24px;
    }
    .navigation ul{
position: relative;
background: #111;
    }
    .navigation ul li{
list-style: none;

    }
    .navigation ul li a{
      position: relative;
      text-decoration: none;
      display: block;
      padding: 10px 20px;
      height: 50px;
      color: #fff;
      font-size: 18px;
      transition: 1s;
    }
    .navigation ul li a:hover{
        transition: 0s;
        background: #2196f3;
    }
    section{
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e3f2fd;
    }
    section h2{
        font-size: 12vw;
        color: rgba(33,150,243,0.2);
    }
    
</style>