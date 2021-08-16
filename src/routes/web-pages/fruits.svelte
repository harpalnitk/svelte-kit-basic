<script>
	//Add Active class in selected thumbnail
	let thumb = 'apple';
    let index = 0;
    let menuToggle = false;

    let fruits = [{
        src: 'apple.png',
        bg:'#fc4a55'
    },
    {
        src: 'mango.png',
        bg:'#ffcc02'
    },
    {
        src: 'watermelon.png',
        bg:'#92ba3c'
    },
    {
        src: 'dragonFruits.png',
        bg:'#fb6cb2'
    },
    {
        src: 'pineApple.png',
        bg:"#ffb42b"
    },
]
    //Change image on click
</script>

<main>
	<section>
		<div class="bg" style="background:{fruits[index].bg}"/>
		<header>
			<a href="" class="logo">Fruits</a>
            <div class="toggle" class:active={menuToggle} on:click={() => {menuToggle = !menuToggle}}></div>
			<ul class="navigation" class:active={menuToggle}>
				<li><a href="/home" class="active">Home</a></li>
				<li><a href="/menu">Menu</a></li>
				<li><a href="/new">What's new</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</header>
		<div class="content">
			<div class="textBox">
				<h2>Eat Fresh Everyday</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, possimus sunt? Explicabo
					eaque porro voluptatum assumenda, officiis iure repellat necessitatibus quae corrupti
					nesciunt exercitationem impedit molestiae cum eveniet ea labore magnam incidunt maiores
					ducimus enim.
				</p>
				<a href="">Learn More</a>
			</div>
			<div class="imgBox">
				<img src="/img/web-pages/fruits/{fruits[index].src}" class='fruits' alt="apple" />
			</div>
		</div>
		<ul class="thumb">
			<li data-text="Apple" class:active={thumb === 'apple'} on:click={() => {thumb = 'apple'; index = 0;}}>
				<img src="/img/web-pages/fruits/apple.png" alt="apple" />
			</li>
			<li data-text="Mango" class:active={thumb === 'mango'} on:click={() => {thumb = 'mango';index = 1;}}>
				<img src="/img/web-pages/fruits/mango.png" alt="mango" />
			</li>
			<li
				data-text="Watermelon"
				class:active={thumb === 'watermelon'}
				on:click={() => {thumb = 'watermelon';index=2;}}
			>
				<img src="/img/web-pages/fruits/watermelon.png" alt="watermelon" />
			</li>
			<li
				data-text="Dragon Fruits"
				class:active={thumb === 'dragonfruit'}
				on:click={() => {thumb = 'dragonfruit';index=3;}}
			>
				<img src="/img/web-pages/fruits/dragonFruits.png" alt="dragonFruits" />
			</li>
			<li
				data-text="Pineapple"
				class:active={thumb === 'pineapple'}
				on:click={() => {thumb = 'pineapple';index=4;}}
			>
				<img src="/img/web-pages/fruits/pineApple.png" alt="pineApple" />
			</li>
		</ul>
        <ul class="sci">
            <li><a href=""><img src="/img/web-pages/fruits/facebook.png" alt="facebook"></a></li>
            <li><a href=""><img src="/img/web-pages/fruits/twitter.png" alt="twitter"></a></li>
            <li><a href=""><img src="/img/web-pages/fruits/instagram.png" alt="instagram"></a></li>
        </ul>
	</section>
</main>

<style lang="scss">
	@import '../../styles/vars';
	section {
		position: relative;
		width: 100%;
		min-height: 100vh;
		padding: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: hidden;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fc4a55;
        transition: 0.5s;
	}
	.bg::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 80%;
		height: 100%;
		background: rgba(0, 0, 0, 0.1);
	}
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 20px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header .logo {
		position: relative;
		font-weight: 600;
		color: #fff;
		text-decoration: none;
		font-size: 2em;
	}
	header .navigation {
		position: relative;
		display: flex;
	}
	header .navigation li {
		list-style: none;
	}
	header .navigation li a {
		display: inline-block;
		color: #fff;
		font-weight: 400;
		margin-left: 10px;
		padding: 8px 15px;
		border-radius: 40px;
		text-decoration: none;
	}
	header .navigation li a.active,
	header .navigation li a:hover {
		background: #fff;
		color: #333;
	}

	.content {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content .textBox {
		position: relative;
		max-width: 600px;
	}
	.content .textBox h2 {
		color: #fff;
		font-size: 4em;
		line-height: 1.2em;
		font-weight: 700;
	}
	.content .textBox p {
		color: #fff;
		margin-top: 20px;
	}
	.content .textBox a {
		display: inline-block;
		margin: 20px;
		padding: 8px 20px;
		background: #fff;
		color: #333;
		border-radius: 40px;
		font-weight: 500;
		letter-spacing: 1px;
		text-decoration: none;
	}
	.content .imgBox {
		position: relative;
		width: 600px;
		z-index: 1;
		display: flex;
		justify-content: flex-end;
	}
	.content .imgBox img {
		max-width: 400px;
	}
	.thumb {
		position: absolute;
		left: 50%;
		bottom: 20px;
		transform: translateX(-50%);
		display: flex;
	}
	.thumb li {
		list-style: none;
		display: inline-block;
		margin: 0 10px;
		cursor: pointer;
		height: 70px;
		background: rgba(255, 255, 255, 0.1);
		padding: 5px;
		border: 2px solid rgba(255, 255, 255, 0.25);
	}
	.thumb li.active {
		border: 2px solid rgba(255, 255, 255, 1);
	}
	.thumb li::before {
		content: attr(data-text);
		position: absolute;
		top: -200px;
		left: -100px;
		white-space: nowrap;
		font-size: 8em;
		color: rgba(0, 0, 0, 0.1);
		opacity: 0;
		font-weight: 700;
		pointer-events: none;
	}
	.thumb li.active::before {
		opacity: 1;
	}
	.thumb li img {
		max-width: 60px;
	}
	.thumb li.active {
		border: 2px solid rgba(255, 255, 255, 1);
	}
    .sci{
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .sci li{
        list-style: none;
    }
    .sci li a{
        display: inline-block;
        margin: 5px 0;
        transform: scale(0.6);
        filter: invert(1);
    }

    /*Make website responsive*/

    @media(max-width:991px){
       .bg::before{
           display: none;
       } 
       header {
           padding: 20px;
       }
       section{
           padding: 20px;
           padding-bottom: 120px;
       }
       .content{
           margin-top: 100px;
           flex-direction: column;
       }
       .content .textBox{
           max-width: 100%;
       }
       .content .textBox h2{
           font-size: 2.5em;
           margin-bottom: 15px;
       }
       .content .imgBox{
           max-width: 100%;
           justify-content: center;
       }
       .content .imgBox img{
           max-width: 300px;
       }
       .thumb li{
           margin: 0 3px;
           height: 55px;
       }
       .thumb li img{
           max-width: 40px;
       }
       .thumb li::before{
           position: absolute;
           top: -150px;
           left: 0;
           font-size: 6em;
       }
       .sci{
           background: rgba(0,0,0,0.1);
           right: 0;
           width: 50px;
           border-top-left-radius: 5px;
           border-bottom-left-radius: 5px;
           padding-inline-start: 0;
       }
       header .navigation{
           display: none;
       }
       header .navigation.active{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #fc4a55;
z-index: 10;
flex-direction: column;
       }
       header .navigation li a{
           font-size: 1.2em;
           margin: 5px 0;
       }
       .toggle{
           position: relative;
           width: 30px;
           height: 30px;
           cursor: pointer;
           background: url('/img/web-pages/fruits/menu.png');
           background-size: 30px;
           background-position: center;
           background-repeat: no-repeat;
           z-index: 10000;
       }
       .toggle.active{
           position: fixed;
           right: 20px;
           background: url('/img/web-pages/fruits/close.png');
           background-size: 25px;
           background-position: center;
           background-repeat: no-repeat;
       }
    }
</style>
