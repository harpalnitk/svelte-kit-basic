<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Profile Hover Card' path='/cards'></BasicPage>


<main>
<div class="container">
<div class="card">
<div class="imgBx">
    <img src="/img/profile/profile-1.jpg" alt="profile_img">
</div>
<div class="content">
    <div class="details">
        <h2>John Doe<br><span>Senior Designer</span></h2>
        <ul class="social_icons">
            <li><a href="facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
            <li><a href="twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="instagram"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
            <li><a href="linkedin"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
    </div>
</div>
</div>
<div class="card">
    <div class="imgBx">
        <img src="/img/profile/profile-2.jpg" alt="profile_img">
    </div>
    <div class="content">
        <div class="details">
            <h2>John Doe<br><span>Senior Designer</span></h2>
            <ul class="social_icons">
                <li><a href="facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a href="twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="instagram"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                <li><a href="linkedin"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
    </div>
    <div class="card">
        <div class="imgBx">
            <img src="/img/avatar/avatar-3.png" alt="profile_img">
        </div>
        <div class="content">
            <div class="details">
                <h2>John Doe<br><span>Senior Designer</span></h2>
                <ul class="social_icons">
                    <li><a href="facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                    <li><a href="twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="instagram"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                    <li><a href="linkedin"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src="/img/profile/profile-1.jpg" alt="profile_img">
            </div>
            <div class="content">
                <div class="details">
                    <h2>John Doe<br><span>Senior Designer</span></h2>
                    <ul class="social_icons">
                        <li><a href="facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li><a href="twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="instagram"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                        <li><a href="linkedin"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
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
}
.container{
    position: relative;
    width: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

}
.container .card{
position: relative;
width: 300px;
height: 400px;
background: linear-gradient(#2196f3, #2196f3 30%, #1d3548 30%, #1d3548);
margin: 10px;
border-radius: 20px;
overflow: hidden;
}
.container .card .imgBx{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
border-radius: 20px;
transition: 0.5s;
z-index: 10000;
transform-origin: top;
}
.container .card:hover .imgBx{
transform: translateY(30px) scale(0.5);
}
.container .card .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.container .card .content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 30px;
    transform: translateY(100%);
    transition: 0.5s;
}
.container .card:hover .content{
    transform: translateY(0);
}
.container .card .content .details{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
}
.container .card .content .details h2{
color: #fff;
font-size: 1.5em;
font-weight: 500;
}
.container .card .content .details h2 span{
    font-size: 0.8em;
    font-weight: 400;
    color: #03a9f4;
}
.social_icons{
position: relative;
display: flex;
margin-top: 5px;
}
.social_icons li{
list-style: none;
margin: 4px;
}
.social_icons li a{
   width: 45px;
   height: 45px; 
   display: flex;
   justify-content: center;
   align-items: center;
   background: #294d69;
   border-radius: 50%;
   font-size: 1.5em;
   color: #fff;
   text-decoration: none;
   transition: 0.5s;
}
.social_icons li a:hover{
   transform: rotate(360deg); 
   background: #03a9f4;
}
</style>