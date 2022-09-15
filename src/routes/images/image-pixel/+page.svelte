<main class='flex-center'>
    <div class="box">
        <img src="/img/misc/monalisa.jpg" alt="monalisa">
    </div>
    <div class="box pixel">
        <img src="/img/misc/monalisa_pixel.jpg" alt="monalisa_pixel">
    </div>
</main>
<style>
    main{
min-height: 100vh;
    }
    .box{
        position: relative;
        width: 400px;
        height: 600px; 
        /* size of the image monalisa.jpg is 400x600 
        size of the image monalisa_pixel.jpg is 40x60
        */
        margin: 10px;
        background: #000;
    }
    .box img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .box.pixel img {
        image-rendering: pixelated;
        filter: contrast(1.4);
    }
    .box.pixel::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: repeating-linear-gradient(0deg, #0006 0%, #0006 4%, transparent 4%, transparent 96%, #0006 96%, #0006 100%),
        repeating-linear-gradient(90deg, #0006 0%, #0006 4%, transparent 4%, transparent 96%, #0006 96%, #0006 100%);
        background-size: 10px 10px;

    }
</style>