<script>
let toggle = false;
let menuToggle = false;
const webpages = [
        {name:'Home', url: 'home'},
        {name:'News', url: 'news'},
        {name:'Contact', url: 'contact'},
        {name:'About', url: 'about'},
        {name:'Services', url: 'services'},
        {name:'Team', url: 'team'},
    ];
</script>

<!-- \img\web-pages\light-dark -->

<main class:dark={toggle}>
    <header>
        <a href="/home" class='logo'>Logo</a>
        <div class="rightSide">
            <div class="btns dayNight"
            class:active={toggle} 
            on:click={() => toggle= !toggle}>
                <i class="far fa-moon"></i>
                <i class="fas fa-sun"></i>
            </div>
            <div class="btns menuToggle"
             class:active={menuToggle}
              on:click={() => menuToggle= !menuToggle}>
             <i class="fas fa-bars"></i>
             <i class="fas fa-times"></i>
            </div>
        </div>
    </header>
    <section class="main">
        <video src='/img/web-pages/light-dark/video.mp4'></video>
        <img src="/img/web-pages/light-dark/mask.jpg" class='mask' alt="mask-image">
    <h2>Ocean</h2>
    <p class="copyrightText">@Lotus Group International Private Ltd.</p>
    <ul class="sci">
        <li><a href="facebook"><i class='fab fa-facebook-f'></i></a></li>  
        <li><a href="twitter"><i class='fab fa-twitter'></i></a></li>  
        <li><a href="instagram"><i class='fab fa-instagram'></i></a></li>    
    </ul>
    </section>

    <!-- Sidebar Navigation -->
    <ul class="navigation"  class:active={menuToggle}>
        {#each webpages as page}
             <li><a href="#{page.url}">{page.name}</a></li>
        {/each}
    </ul>
</main>

<style>
main{
    --black: #333;
    --white:#fff;
}
main.dark{
    --black: #fff;
    --white:#333;
}
header{
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 40px 100px;
    z-index: 10000;
}
header .logo{
    position: relative;
    display: inline-block;
    color: var(--black);
    text-decoration: none;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
.rightSide{
    display: flex;
}
.btns{
    position: relative;
    width: 40px;
    height: 40px;
    /* background: #ccc; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
}
.btns i{
    font-size: 1.5em;
    color: var(--black);
}
.btns.menuToggle i{
    font-size: 3em;
}
.btns i:nth-child(2){
    display: none;
}
.btns.active i:nth-child(2){
    display: block;
}
.btns.active i:nth-child(1){
    display: none;
}
.main {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.main .mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    user-select: none;
    mix-blend-mode: screen;
}
.dark .main .mask{
    filter: invert(1);
    mix-blend-mode: multiply;
}
.main h2{
    position: relative;
    z-index: 3;
    font-size: 16vw;
    color: #fff;
    text-shadow: 0 20px 30px rgb(black,0.2);
}
.navigation{
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    z-index: 4;
    transition: 0.5s;
}
.navigation.active{
left:0;
}
.navigation li{
    list-style: none;
}
.navigation li a{
    display: inline-flex;
    margin: 5px 0;
    font-size: 1.35em;
    text-decoration: none;
    color: var(--black);
    padding: 5px 20px;
    border-radius: 40px;
}
.navigation li a:hover{
    background: var(--black);
    color: var(--white);
}
.copyrightText{
    position: absolute;
    left: 100px;
    bottom: 40px;
    z-index: 4;
    font-weight: 500;
    font-size: 1.2em;
    color: var(--black);
}
.sci{
    position: absolute;
    right: 100px;
    bottom: 40px;
    z-index: 4;
    display: flex;
    flex-direction: column;
    }
    .sci li{
        list-style: none;
    }
    .sci li a{
        text-decoration: none;
        color: var(--black);
        font-size: 1.75em;
    }
    @media(max-width:768px){
        header{
            padding: 20px;
        }
        .copyrightText{
            left: 20px;
            bottom: 30px;
        }
        .sci{
            right: 20px;
            bottom: 20px;
        }
    }
</style>