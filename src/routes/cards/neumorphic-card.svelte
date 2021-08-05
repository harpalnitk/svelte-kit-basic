<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Neumorphic Cards' path='/cards'></BasicPage>


<main>
<div class="container">
    <div class="card">
        <div class="box">
            <div class="content">
                <h2>01</h2>
                <h3>Card One</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eum unde voluptatum. Molestiae adipisci quia non necessitatibus laudantium provident a quaerat placeat sint cupiditate. Reprehenderit temporibus quasi iste voluptatibus animi. Optio, nemo ea repudiandae nostrum voluptatibus qui </p>
                <a href="1">Read More</a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="box">
            <div class="content">
                <h2>02</h2>
                <h3>Card Two</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eum unde voluptatum. Molestiae adipisci quia non necessitatibus laudantium provident a quaerat placeat sint cupiditate. Reprehenderit temporibus quasi iste voluptatibus animi. Optio, nemo ea repudiandae nostrum voluptatibus qui </p>
                <a href="1">Read More</a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="box">
            <div class="content">
                <h2>03</h2>
                <h3>Card Three</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eum unde voluptatum. Molestiae adipisci quia non necessitatibus laudantium provident a quaerat placeat sint cupiditate. Reprehenderit temporibus quasi iste voluptatibus animi. Optio, nemo ea repudiandae nostrum voluptatibu</p>
                <a href="1">Read More</a>
            </div>
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
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebf5fc;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    padding: 40px 0;
}
.container .card{
    position: relative;
    width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                inset -5px -5px 5px rgba(255,255,255 ,0.5),
                5px 5px 5px rgba(0,0,0,0.05),
                -5px -5px 5px rgba(255,255,255 ,0.5);
    border-radius: 15px;
    margin: 30px;
}
.container .card .box{
position: absolute;
inset: 20px;// equivalent to top,bottom,left,right
background: #ebf5fc;
box-shadow: 0 10px 20px rgba(0,0,0,.1);
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
transition: 0.5s;
}
.container .card:hover .box{
transform: translateY(-50px);
box-shadow: 0 10px 40px rgba(0,0,0,.2);
background: linear-gradient(45deg, #b95ce4,#4f29cd);
}
.container .card .box .content{
    padding: 20px;
    text-align: center;
}
.container .card .box .content h2{
position: absolute;
top: -10px;
right: 30px;
font-size: 8em;
margin: 0;
color: rgba(0,0,0,.02);
transition: 0.5s;
pointer-events: none;
}
.container .card:hover .box .content h2{
    color: rgba(0,0,0,.05);
}
.container .card .box .content h3{
font-size: 1.8em;
color: #777;
z-index: 1;
transition: all 0.5s;
}
.container .card .box .content p{
font-size: 1em;
font-weight: 300;
color: #777;
z-index: 1;
transition: all 0.5s;
}
.container .card:hover .box .content h3,
.container .card:hover .box .content p{
    color: #fff;
}
.container .card .box .content a{
position: relative;
display: inline-block;
padding: 8px 20px;
background: #03a9f4;
border-radius: 20px;
color: #fff;
text-decoration: none;
font-weight: 400;
box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.container .card:hover .box .content a{
background: #ff568f;
}

</style>