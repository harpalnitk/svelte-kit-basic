<script>
    let toggle=false;
</script>
<main class='flex-center'>
    <section class="flex-center">
        <div class="book" class:active={toggle} on:click="{()=> toggle= !toggle}">
            <img src="/img/card/book/cover.jpg" alt="book-cover"> 
        </div>
      </section>
</main>
<style>
    main{
min-height: 100vh;
    }
    section{
        transform-style: preserve-3d;
        perspective: 1000px;
    }
    section .book{
position: relative;
width: 383px;
height: 567px;
box-shadow: 20px 20px 20px rgba(0,0,0,0.2);
transform-style: preserve-3d;
transition: 0.5s;
    }
    section .book.active{
        transform: rotateY(180deg);
    }
    section .book:hover{
        transform: rotateY(35deg);
        box-shadow: 0px 20px 20px rgba(0,0,0,0.2);
    }
    section .book::before{
        content: '';
        position: absolute;
        width: 60px;
        height: 100%;
        transform-origin: left;
        background: url('/img/card/book/side.jpg');
        background-position: center;
        transform: rotateY(90deg);
    }
    section .book::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transform-origin: center;
        background: url('/img/card/book/back.jpg');
        background-position: center;
        transform: rotateY(180deg) translateZ(60px);
    }
    section .book img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>