<main>
    <div class="container">
        <div class="card"><span>&#9634;</span></div>
        <div class="card"><span>&#9651;</span></div>
        <div class="card"><span>&#9711;</span></div>
    </div>
</main>
<style>
    .container{
        position: relative;
        width: 100%;
        height: 99.9vh;
        display: flex;
        background: #fff;
    }
    .container .card::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(90deg, #fff1 0px,#fff1 1px, transparent 1px, transparent 10px),
        repeating-linear-gradient(0deg, #fff1 0px,#fff1 1px, transparent 1px, transparent 10px);
        background-size: 10px 10px;
    }
    .container .card{
        position: relative;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
       
        transition: 0.5s ease-in-out;
        overflow: hidden;
    }
    .container .card:hover{
        flex-grow: 3; /*Will grow 3 times in size compared to other items in flexbox*/
        background: #1a1a1a;
    }
    .container .card span{
        font-size: 15vw;
        color: #1a1a1a;
        transition: 0.5s ease-in-out;
    }
    .container .card:hover span{
        font-size: 25vw;
        color: #fff;
        filter: drop-shadow(0 0 10px #ea4884)
        drop-shadow(0 0 30px #ea4884)
        drop-shadow(0 0 60px #ea4884)
        drop-shadow(0 0 100px #ea4884)
        drop-shadow(0 0 150px #ea4884);
    }
</style>