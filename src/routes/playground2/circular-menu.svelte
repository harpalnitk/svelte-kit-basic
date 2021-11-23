<script>
    let toggle=false;
        const links = [
        {id:1, url:'home', icon:'fas fa-home',text:'Home'},
        {id:2, url:'profile', icon:'fa fa-user',text:'Profile'},
        {id:3, url:'settings', icon:'fas fa-cog',text:'Settings'},
        {id:4, url:'message', icon:'fas fa-envelope',text:'Message'},
        {id:5, url:'password', icon:'fa fa-key',text:'Password'},
        {id:6, url:'video', icon:'fas fa-video',text:'Video'},
        {id:7, url:'games', icon:'fas fa-gamepad',text:'Games'},
        {id:8, url:'camera', icon:'fas fa-camera',text:'Camera'},
    ]
</script>
<main class='flex-center'>
    <ul class="menu" class:active={toggle}>
        <div class="toggle" on:click="{()=> toggle=!toggle}">
            <i class="fas fa-plus"></i>
        </div>
        {#each links as link,index}
        <li style='--i:{index};'>
            <a href="#{link.url}"><i class='{link.icon}'></i></a>
        </li>
        {/each}

    </ul>
</main>

<style>
main{
    --height: 200px;
    --width:  200px;
    --icon-size: 40px;
    min-height: 100vh;
    background: linear-gradient(45deg, #8460ed,#ff1252);
}
.menu{
    position: relative;
    width: var(--width);
    height: var(--height);
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu li{
    position: absolute;
    left: 0;
    list-style: none;
    transform-origin: calc(var(--width) / 2);
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
    transform: rotate(0deg) translateX(calc(var(--icon-size) * 2));
    
}
.menu.active li{
    transform: rotate(calc(360deg / 8 * var(--i)));
}
.menu li a{
   display: flex;
   justify-content: center;
   align-items: center;
   width: var(--icon-size);
   height: 40px;
   background: #fff; 
   border-radius: 50%;
   transform: rotate(calc(360deg / -8 * var(--i)));
   box-shadow: 0 3px 4ps rgba(0,0,0,0.15);
   color: #111;
   transition: 0.5s;
   text-decoration: none;
}
.menu li a:hover{
    color: #ff1252;
}
.toggle{
    position: absolute;
    width: 60px;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0,0,0,0.15);
    font-size: 2em;
    transition: transform 1.25s;

}
.menu.active .toggle{
   transform: rotate(315deg); 
}
</style>