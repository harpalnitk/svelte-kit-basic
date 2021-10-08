<script>
    export let size = 300;
    export let color = '#6843d1';
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
    <div class="container" style='--size:{size};--color:{color};'>
        <div class="navigation" class:active={toggle} >
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
        width: calc(var(--size) * 1px);
        height: calc(var(--size) * 7px / 5);
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: 0.5s;
    }
    .container .navigation.active{
         width: calc(var(--size) * 4px / 15);
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
color: var(--color);
font-weight: 500;
    }
    .container .navigation ul li a .icon{
position: relative;
display: block;
min-width: calc(var(--size) * 4px / 15);
height: calc(var(--size) * 1px / 5);
line-height:calc(var(--size) * 1px / 5);
text-align: center;
    }
    .container .navigation ul li a .icon i{
        font-size: calc(var(--size) * 2px / 25);
    }
    .container .navigation ul li a .title{
position: relative;
display: block;
height: calc(var(--size) * 1px / 5);
line-height: calc(var(--size) * 1px / 5);
font-size: calc(var(--size) * 2px / 25);
white-space: nowrap;
    }
.toggle{
    position: absolute;
    top: calc(50% - var(--size) * 1px / 15);
    right:  calc(var(--size) * -1px / 15);
    width: calc(var(--size) * 2px / 15);
    height: calc(var(--size) * 2px / 15);
    background: #f5f5f5;
    cursor: pointer;
    border: calc(var(--size) * 1px / 60) solid #6843d1;
    border-radius: 50%;
}
.toggle i{
    line-height: calc(var(--size) * 1px / 10);
    font-size: calc(var(--size) * 4px / 75);
    color: var(--color);
    transition: 0.5s;
    transform: rotate(180deg);
}
.toggle.active i{
    transform: rotate(0deg);
}

</style>