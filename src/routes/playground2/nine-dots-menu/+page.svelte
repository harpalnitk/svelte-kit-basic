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
    <div class="navigation" class:active={toggle} on:click="{()=> toggle= !toggle}">
 
        <span style='--i:0;--x:-1;--y:0;'><i class='fas fa-home'></i></span>
        <span style='--i:1;--x:1;--y:0;'><i class='fa fa-user'></i></span>
        <span style='--i:2;--x:0;--y:-1;'><i class='fas fa-cog'></i></span>
        <span style='--i:3;--x:0;--y:1;'><i class='fas fa-envelope'></i></span>
        <span style='--i:4;--x:1;--y:1;'><i class='fa fa-key'></i></span>
        <span style='--i:5;--x:-1;--y:-1;'><i class='fas fa-video'></i></span>
        <span style='--i:6;--x:0;--y:0;'><i class='fas fa-gamepad'></i></span>
        <span style='--i:7;--x:-1;--y:1;'><i class='fas fa-camera'></i></span>
        <span style='--i:8;--x:1;--y:-1;'><i class='far fa-images'></i></span> 
    </div>
</main>

<style>
main{
    min-height: 100vh;
    background: #10131c;
}
.navigation{
    position: relative;
    width: 70px;
    height: 70px;
    background: #212532;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-delay: 0.8s;
}
.navigation.active{
    width: 200px;
    height: 200px;
    transition-delay: 0s;
}
.navigation span{
    position: absolute;
    width: 7px;
    height: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    transform: translate(calc(12px * var(--x)), calc(12px * var(--y)));
    transition: transform 0.5s, width 0.5s, height 0.5s, background 0.5s;
    transition-delay: calc(0.1s * var(--i));
}
.navigation.active span{
    width: 45px;
    height: 45px;
    background: #333849;
    transform: translate(calc(60px * var(--x)), calc(60px * var(--y)));
}
.navigation span i{
transition: 0.5s;
font-size: 0em;
}
.navigation.active span i{
    font-size: 1.35em;
    color: #fff;
}
.navigation.active span:hover i{
    color: #2dfc52;
    filter: drop-shadow(0 0 2px #2dfc52)
    drop-shadow(0 0 5px #2dfc52)
    drop-shadow(0 0 15px #2dfc52);
}
</style>