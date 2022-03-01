<script>
    let toggle= false;
</script>
<main class='flex-center'>
    <div class="list">
        <div class="user">
            <div class="imgBx">
                <img src="/img/avatar/avatar-1.jpg" alt="avatar-1">
            </div>
            <div class="details">
                <h3>Maureen Robinson</h3>
                <p>Aerospace Engineer</p>
            </div>
        </div>
        <div class="navigation" class:active={toggle} on:click="{()=> toggle= !toggle}">
            <span><i class="far fa-edit"></i></span>
            <span><i class='fas fa-heart'></i></span>
            <span><i class="fas fa-trash-alt"></i></span>
        </div>
    </div>
    
</main>

<style>
main{
    min-height: 100vh;
    background: #222327;
    font-family: 'Poppins', sans-serif;
}
.list{
 display: flex; 
 gap: 6px;  
}
.list .user{
    position: relative;
    background: #fff;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    gap :10px;
}
.list .user .imgBx{
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 6px;
}
.list .user .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.list .user .details{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.list .user .details h3{
    font-weight: 600;
    font-size: 1.1em;
}
.list .user .details p{
    font-weight: 500;
    font-size: 0.8em;
    color: rgba(0,0,0,0.6);
}
.navigation{
    position: relative;
    width: 40px;
    height: 70px;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navigation.active{
    width: 200px;
}
.navigation span{
    position: absolute;
    width: 6px;
    height: 6px;
    background: #222327;
    border-radius: 50%;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #222327;
}
.navigation span:nth-child(1){
    transform: translateY(-12px);
}
.navigation span:nth-child(3){
    transform: translateY(12px);
}
.navigation.active span{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
}
/* .navigation.active span:nth-child(1),
.navigation.active span:nth-child(3){
transform: translateY(0);
} */
.navigation.active span:nth-child(1){
    transform: translateY(0) translateX(-60px);
}
.navigation.active span:nth-child(3){
    transform: translateY(0) translateX(60px);
}

.navigation span i{
font-size: 0em;
transition: 0.5s;
}
.navigation.active span i{
color: #fff;
font-size: 1.25em;
}
.navigation.active span:hover {
background: #29fd53;
}

.navigation.active span:hover i{
color: #222327;
}

</style>