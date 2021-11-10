<main class='flex-center'>
    <div class="card">
        <div class="cover"></div>
        <div class="details">
            <div>
                <img src="/img/misc/apple_watch2.jpg" alt="Apple Watch">
                <h3>New Apple Watch</h3>
                <h2><sup>$</sup> 450</h2>
                <a href="#buy_now">Buy Now</a>
            </div>
        </div>
    </div>
</main>

<style>
    main{
        min-height: 80vh;
        background: #09383e;
    }
    .card{
        position: relative;
        width: 300px;
        height: 400px;
        background: #fff;
        transform-style: preserve-3d;
    }
    .card .details{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-align: center;
    }
    .card .details h3{
        font-weight: 500;
        margin: 5px 0;
    }
    .card .details h2{
        font-size: 1.5em;
        color: #e82a5b;
        font-weight: 600;
    }
    .card .details a{
        display: inline-block;
        padding: 8px 20px;
        background: #47bfce;
        margin-top: 5px;
        letter-spacing: 1px;
        border-radius: 25px;
        text-decoration: none;
    }
</style>