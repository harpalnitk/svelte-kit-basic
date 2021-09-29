<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='3D Flip Card' path='/cards'></BasicPage>


<main>
<div class="container">
    <div class="box">
        <div class="imgBx">
            <img src="/img/avatar/avatar-1.jpg" alt="avatar-1">
        </div>
        <div class="contentBx">
            <h2>Post 1 Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Sunt reprehenderit 
                 id nihil voluptate illum nulla
                  praesentium quibusdam pariatur
                   voluptas at?

            </p>
        </div>
    </div>
    <div class="box">
        <div class="imgBx">
            <img src="/img/avatar/avatar-2.jpg" alt="avatar-2">
        </div>
        <div class="contentBx">
            <h2>Post 2 Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Sunt reprehenderit 
                 id nihil voluptate illum nulla
                  praesentium quibusdam pariatur
                   voluptas at?
            </p>
        </div>
    </div>
    <div class="box">
        <div class="imgBx">
            <img src="/img/avatar/avatar-3.png" alt="avatar-3">
        </div>
        <div class="contentBx">
            <h2>Post 3 Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Sunt reprehenderit 
                 id nihil voluptate illum nulla
                  praesentium quibusdam pariatur
                   voluptas at?

            </p>
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

}
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 1000px;
    transform-style: preserve-3d;
    
}
.container .box{
position: relative;
width: 320px;
height: 400px;
margin: 20px 0;
perspective: 1000px;
overflow: hidden;
transform-style: preserve-3d;
}
.container .box .imgBx{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: top;
    transform-style: preserve-3d;
    transition: 0.5s;
    transition-delay: 0.2s;
}
.container .box:hover .imgBx{
transform: rotateX(-90deg);
opacity: 0;
transition-delay: 0s;
}
.container .box .imgBx img{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
}
.container .box .contentBx{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #333;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
transform-origin: bottom;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: rotateX(90deg);
    opacity: 0;
    color: #fff;
}
.container .box:hover .contentBx{
transform: rotateX(0deg);
opacity: 1;
transition-delay: 0.2s;
}

</style>