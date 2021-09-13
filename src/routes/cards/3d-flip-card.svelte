<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='3D Flip Card' path='/cards'></BasicPage>


<main>
<div class="container">
    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src="/svg/data.png" alt="img-1">
                <h3>Data</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum, dolor sit amet consectetur
                     adipisicing elit. Nisi in, tempore harum 
                    unde natus delectus, consectetur libero distinctio
                    quaerat quod minus amet sit explicabo</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src="/svg/startup.png" alt="img-1">
                <h3>Startup</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum, dolor sit amet consectetur
                     adipisicing elit. Nisi in, tempore harum 
                    unde natus delectus, consectetur libero distinctio
                    quaerat quod minus amet sit explicabo</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face face1">
            <div class="content">
                <img src="/svg/sketch.png" alt="img-1">
                <h3>Sketch</h3>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <p>Lorem ipsum, dolor sit amet consectetur
                     adipisicing elit. Nisi in, tempore harum 
                    unde natus delectus, consectetur libero distinctio
                    quaerat quod minus amet sit explicabo</p>
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
    background: #1e1e1e;
}
.container{
    width: 1000px;
    position: relative;
    display: flex;
    justify-content: space-between;
}
.container .card{
position: relative;
width: 300px;
height: 200px;
}
.container .card .face{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
}
.container .card .face.face1{
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform-origin: bottom;
}
.container .card .face.face1 img{
max-width: 100px;
}
.container .card .face.face1 h3{
margin: 10px 0 0;
color: #fff;
text-align: center;
font-size: 1.5em;
}
.container .card:hover .face.face1{
transform: translateY(-100%) rotateX(90deg);
background: #ff0057;
}
.container .card .face.face2{
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
transform-origin: top;
transform: translateY(100%) rotateX(90deg);
}
.container .card:hover .face.face2{
    transform: translateY(0) rotateX(0deg);
}
</style>