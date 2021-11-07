<main class="flex-center">
    <div class="container">
        <div class="card">
            <img src="/img/profile/profile-1.jpg" alt="profile-1">
        </div>
        <div class="card">
            <img src="/img/profile/profile-2.jpg" alt="profile-2">
        </div>
        <div class="card">
            <img src="/img/profile/profile-cover.jpg" alt="profile-3">
        </div>
        <div class="card">
            <img src="/img/avatar/avatar-1.jpg" alt="avatar-1">
        </div>
    </div>
</main>
<style>
main{
    min-height: 100vh;
}
.container{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 600px;
    gap: 10px;
}
.container .card{
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    margin: 0 -75px; 
    /* adjust 75 px for placing the triangles in triangle shape */
    clip-path: polygon(50% 100%,0% 0%,100% 0%);
}
.container .card:nth-child(2){
    clip-path: polygon(50% 0%,0% 100%,100% 100%);
}
.container .card img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    object-fit: cover;
    transition: 0.5s;


}
.container .card:hover img{
    transform: scale(1.5);
}
</style>