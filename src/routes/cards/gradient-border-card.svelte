<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Gradient Border card' path='/cards'></BasicPage>


<main>
<div class="container">
    <div class="box">
        <span></span>
        <div class="content">
            <h2>Card One</h2>
            <p>Lorem ipsum, dolor sit amet
                 consectetur adipisicing elit.
                 Unde velit repellendus 
                 ratione quisquam reprehenderit 
                 adipisci illum, incidunt quas 
                 natus maxime.
                </p>
                <a href="read-more">Read More</a>
        </div>
    </div>
    <div class="box">
        <span></span>
        <div class="content">
            <h2>Card Two</h2>
            <p>Lorem ipsum, dolor sit amet
                 consectetur adipisicing elit.
                 Unde velit repellendus 
                 ratione quisquam reprehenderit 
                 adipisci illum, incidunt quas 
                 natus maxime.
                </p>
                <a href="read-more">Read More</a>
        </div>
    </div>
    <div class="box">
        <span></span>
        <div class="content">
            <h2>Card Three</h2>
            <p>Lorem ipsum, dolor sit amet
                 consectetur adipisicing elit.
                 Unde velit repellendus 
                 ratione quisquam reprehenderit 
                 adipisci illum, incidunt quas 
                 natus maxime.
                </p>
                <a href="read-more">Read More</a>
        </div>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    background: #111;
}
main, .container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    position: relative;
    padding: 20px 0;
    flex-wrap: wrap;
}
.container .box{
    position: relative;
    width: 320px;
    height: 400px;
    color: #fff;
    background: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 30px;
    transition: 0.5s;
}
.container .box:hover{
    transform: translateY(-20px);
}
.container .box::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#ffbc00,#ff0058);
}
.container .box::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#ffbc00,#ff0058);
    filter: blur(30px);
}
.container .box:nth-child(2):before,
.container .box:nth-child(2):after{
background: linear-gradient(315deg, #0319f4,#ff0058);
}
.container .box:nth-child(3):before,
.container .box:nth-child(3):after{
background: linear-gradient(315deg, #4dff03,#00d0ff);
}
.container .box span{
    position: absolute;
    inset: 6px;
    background: rgba(black, 0.6);
    z-index: 2;
}
.container .box span::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(white,0.1);
    pointer-events: none;
}
.container .box .content{
    position: relative;
    z-index: 10;
    padding: 20px 40px;
}
.container .box .content h2{
    font-size: 2em;
    color: #fff;
margin-bottom: 10px;
}
.container .box .content p{
font-size: 1.1em;
color: #fff;
margin-bottom: 10px;
line-height: 1.4em;
}
.container .box .content a{
    display: inline-block;
    font-size: 1.1em;
    color: #111;
    padding: 10px;
    background: #fff;
    text-decoration: none;
    font-weight: 700;
}
</style>