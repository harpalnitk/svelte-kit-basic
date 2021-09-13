<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='3D-Foldable-Card' path='/cards'></BasicPage>


<main>
<div class="card">
    <div class="imgBox">
        <img src="/img/profile/profile-1.jpg" alt="profile-1">
        <img src="/img/profile/profile-2.jpg" alt="profile-2">
    </div>
    <div class="details">
        <div class="content">
            <h2>Someone Famous<br><span>Graphic Designer</span></h2>
            <div class="social-icons">
                <a href="facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="twitter"><i class="fab fa-twitter"></i></a>
                <a href="linkedin"><i class="fab fa-linkedin-in"></i></a>
                <a href="instagram"><i class="fab fa-instagram"></i></a>
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
    background: #fbe9e7;
}
.card{
    position: relative;
    width: 300px;
    height: 400px;
    background: #fff;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40px rgba(0,0,0,0.25);
    transition: 1s;
}
.card:hover{
    transform: translateX(50%);
}
.card .imgBox{
position: relative;
width: 100%;
height: 100%;   
z-index: 1; 
transform-origin: left;
transform-style: preserve-3d;
background: #000;
transition: 1s;
box-shadow: 10px 20px 40px rgba(0,0,0,0.25);
}
.card:hover .imgBox{
transform: rotateY(-180deg);
}
.card .imgBox img{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
transform-style: preserve-3d;
backface-visibility: hidden;
}
.card .imgBox img:nth-child(2){
transform: rotateY(180deg);
}
.card .details{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card .details .content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.card .details .content h2{
text-align: center;
font-weight: 700;
line-height: 1em;
}
.card .details .content h2 span{
color: #e21212;
font-size: 0.8em;
}
.card .details .content .social-icons{
    position: relative;
    display: flex;
    margin-top: 10px;
}
.card .details .content .social-icons a{
    // display: inline-block;
    width: 35px;
    height: 35px;
    color: #fff;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 5px;
    font-size: 18px;
    transition: 0.2s;

}
.card .details .content .social-icons a:hover{
    background: #e21212;
}
</style>