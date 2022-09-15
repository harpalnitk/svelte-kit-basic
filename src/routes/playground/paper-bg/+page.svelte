<main>
<section class='flex-center'>
    <div class="bg"></div>
    <div class="paper"></div>
</section>
</main>
<style>
    section{
        width:100%;
        height: 100vh;
    }
   .bg{
       position: absolute;
       width: 100%;
       height: 100%;
       background: url('/img/misc/paper-bg-pic.jpg');
       background-size: cover;
       background-position: center;
   }
   .paper{
    position: absolute;
       width: 100%;
       height: 100%;
       background: url('/img/misc/paper-bg.jpg');
       background-size: cover;
       background-position: center;
       mix-blend-mode: lighten;
       filter: brightness(1.1);
   }
    
</style>