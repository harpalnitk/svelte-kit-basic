<main class='flex-center'>
    <div class="card">
<div class="imgBx">
    <img src="/img/avatar/avatar-1.jpg" alt="avatar-1">
</div>
<div class="content">
    <div>
        <h3>Maureen Smith<br><span>Creative Designer</span></h3>
        <ul class="sci">
            <li><a href="facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
            <li><a href="twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="instagram"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
            <li><a href="linkedin"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
    </div>
</div>
    </div>
</main>
<style>
    main{
        font-family: 'Ubuntu', sans-serif;
        min-height: 100vh;
        background: #eaf6ff;

    }
    .card{
        position: relative;
        width: 300px;
        height: 400px;
        padding: 20px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 25px 25px 50px rgba(9,148,255,0.25),
        -10px -10px 30px rgba(9,148,255,0.1),
        inset -5px -5px 15px rgba(9,148,255,0.5);
    }
    .card .imgBx{
        position: relative;
        width: 100%;
        height: 200px;
        border-radius: 6px;
        overflow: hidden;
    }
    .card .imgBx img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .card .content{
        width: 100%;
        padding: 30px 20px;
        display: grid;
        place-items: center;
    }
    .card .content h3{
        color: #0994ff;
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .card .content h3 span{
        font-size: 0.8em;
        font-weight: 500;
        color: #333;
        text-transform: initial;
    }
    .card .content .sci{
        position: relative;
        display: flex;
        margin-top: 15px;
        justify-content: center;

}
.card .content .sci li{
    list-style: none;
}
.card .content .sci li a{
    position: relative;
    width: 45px;
    height: 45px;
    margin: 0 8px;
    display: grid;
    place-items: center;
    text-decoration: none;
    background: #fff;
    color: #0994ff;
    font-size: 1.15em;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(9,148,255,0.25),
        -2px -2px 5px rgba(9,148,255,0.05),
        inset -2px -2px 5px rgba(9,148,255,0.25);

}
</style>