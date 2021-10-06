<script>
    let toggle= false;
    const webpages = [
        {name:'Home', url: 'home', icon:'fas fa-home'},
        {name:'Profile', url: 'profile', icon:'fa fa-user'},
        {name:'Message', url: 'message', icon:'fas fa-comment-alt'},
        {name:'Help', url: 'help', icon:'fas fa-question-circle'},
        {name:'Setting', url: 'setting', icon:'fas fa-cog'},
        {name:'Password', url: 'password', icon:'fas fa-lock'},
        {name:'Sign Out', url: 'sign-out', icon:'fas fa-sign-out-alt'},
    ];
</script>
<main class='flex-center main-page'>
    <div class="container" >
        <div class="navigation" class:active={toggle}>
            <ul>
                {#each webpages as page}
                <li>
                    <a href="{page.url}">
                        <span class="icon">
    <i class="{page.icon}"></i>
                        </span>
                        <span class="title">
    {page.name}
                        </span>
                    </a>
                </li>
                {/each}
    
            </ul>
        </div>
        <div class:active={toggle} class="toggle flex-center" on:click="{()=> toggle=!toggle}">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
</main>


<style>
    main{
background: #6843d1;
    }
    .container{
        position: relative;
    }
    .container .navigation{
        position: relative;
        width: 300px;
        height: 420px;
        background: #fff;
        border-radius: 10px;
        overflow-y: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: 0.5s;
    }
    .container .navigation.active{
         width:80px
    }
    .container .navigation ul{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .container .navigation ul li{
position: relative;
list-style: none;
width: 100%;
    }
    .container .navigation ul li:hover{
background: #efefef;
    }
    .container .navigation ul li a{
position: relative;
display: block;
width: 100%;
display: flex;
text-decoration: none;
color: #6843cf;
font-weight: 500;
    }
    .container .navigation ul li a .icon{
position: relative;
display: block;
min-width: 80px;
height: 60px;
line-height: 60px;
text-align: center;
    }
    .container .navigation ul li a .icon i{
        font-size: 24px;
    }
    .container .navigation ul li a .title{
position: relative;
display: block;
height: 60px;
line-height: 60px;
white-space: nowrap;
    }
.toggle{
    position: absolute;
    top: calc(50% - 20px);
    right: -20px;
    width: 40px;
    height: 40px;
    background: #f5f5f5;
    cursor: pointer;
    border: 5px solid #6843d1;
    border-radius: 50%;
}
.toggle i{
    line-height: 30px;
    font-size: 16px;
    color: #6843d1;
    transition: 0.5s;
}
.toggle.active i{
    transform: rotate(180deg);
}

</style>