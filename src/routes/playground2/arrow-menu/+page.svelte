<script>
    let marker;
    let m = { x: 0, y: 0 };

function handleMousemove(event) {
    m.x = event.target.offsetTop;
    m.y = event.target.offsetWidth;
    console.log(`m.x= ${m.x} m.y= ${m.y}`);
}
 const links = [{id:1,name: 'Home'},
 {id:1,name: 'About Us'},
 {id:1,name: 'Our Services'},
 {id:1,name: 'Portfolio'},
 {id:1,name: 'Team'},
 {id:1,name: 'Contact'},]
</script>
<main class="flex-center">
    <ul>
        <span id="marker" style='top:{m.x}px;width:{m.y}px'></span>
        {#each links as link}
        <li><a href="#{link.id}" on:mousemove="{handleMousemove}">{link.name}</a></li>
        {/each}
    </ul>
</main>

<style>
    main{
        min-height: 100vh;
        background: #333;
    }
    ul {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    ul li{
        list-style: none;
    }
    ul li a{
        position: relative;
        font-size: 2em;
        color: #fff;
        text-decoration: none;
        margin: 10px 0;
        display: inline-block;
    }
    #marker{
position: absolute;
top: 0;
margin-top: -5px;
/* width: 100px; */
height: 50px;
transition: 0.5s;
display: flex;
justify-content: space-between;
align-items: center;
    }
    #marker::before{
        content: '';
        /* position: absolute; */
        width: 15px;
        height: 15px;
        border-top: 4px solid #30a3ff;
        border-right: 4px solid #30a3ff;
        transform: rotate(45deg) translate(-20px,20px);
    }
    #marker::after{
        content: '';
        /* position: absolute; */
        width: 15px;
        height: 15px;
        border-top: 4px solid #30a3ff;
        border-right: 4px solid #30a3ff;
        transform: rotate(225deg) translate(-20px,20px);
    }
</style>