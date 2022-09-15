<script>
    let i = 1;
    let menuList = [
        {id:1, url:'home', icon:'fas fa-home',text:'Home'},
        {id:2, url:'about', icon:'fa fa-info-circle',text:'About'},
        {id:3, url:'services', icon:'fas fa-people-carry',text:'Services'},
        {id:4, url:'team', icon:'fas fa-users',text:'Team'},
        {id:5, url:'contact', icon:'fas fa-address-card',text:'Contact'},
    ]
</script>
<main class='flex-center'>
    <section class='navigation'>
        <ul>
            {#each menuList as item}
            <li class='list' on:mouseover="{()=>{i = item.id}}" on:focus="{()=>{i = item.id}}" class:active= {i === item.id}>
                <a href="#{item.url}">
                <span class='icon'><i class='{item.icon}'></i></span>
                <span class='text'>{item.text}</span>
            </a>
        </li>
            {/each}
<div class="indicator"></div>
           
        </ul>
    </section>
    </main>
    <style>
main{
    min-height: 100vh;
    background: #333;
}
.navigation{
   position: relative;
   width: 350px; /* 70px * 5 = 350px */
   height: 70px;

}
.navigation ul{
    display: flex;
}
.navigation ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}
.navigation ul li a{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-align: center;
}
.navigation ul li a .icon{
position: relative;
line-height: 75px;
transition: 0.5s;
font-size: 30px;
}
.navigation ul li.active a .icon{
font-size: 20px;
transform: translateY(-6px);
}
.navigation ul li a .text{
    position: absolute;
    font-size: 12px;
    color: #fff;
    bottom: 20px;
    font-weight: 400;
    transform: scale(0);
    transition: 0.25s;
    text-transform: uppercase;
}
.navigation ul li.active a .text{
    transform: scale(1);
}
.indicator{
    position: absolute;
    left: 0;
    width: 70px;
    height: 70px;
    border-radius: 10px;
    transition: 0.5s;
}
.navigation ul li:nth-child(1).active ~ .indicator{
background: #f53b57;
box-shadow: 0 15px 25px #f53b5799;
transform: translateX(calc(70px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator{
background: #5d62fb;
box-shadow: 0 15px 25px #5d62fb99;
transform: translateX(calc(70px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator{
background: #05c46b;
box-shadow: 0 15px 25px #05c46b99;
transform: translateX(calc(70px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator{
background: #0fbcf9;
box-shadow: 0 15px 25px #0fbcf999;
transform: translateX(calc(70px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator{
background: #ffa801;
box-shadow: 0 15px 25px #ffa80199;
transform: translateX(calc(70px * 4));
}
    </style>