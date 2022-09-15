<script>
    let toggle= false;
</script>
<main class="flex-center">
    <div class="container flex-center" class:active={toggle}>
        <div class="content">
            <h2>Heading...</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quasi quibusdam nisi magnam. Dolorem harum odit, natus eum sint debitis.</p>
        </div>
        <div class="toggleBtn" on:click="{()=>toggle=!toggle}">

        </div>
    </div>
</main>
<style>
   main{
       min-height: 100vh;
       background: #1a242a;
   } 
   .container{
       position: relative;
       width: 0px;
       height: 0px;
       background: #37444b;
       border-radius: 25px;
       transition: 0.5s;
   }
   .container.active{
       width: 400px;
       height: 400px;
       transition-delay: 0.5s;
   }
   .container::before{
       content: '';
       position: absolute;
       bottom: -15px;
       width: 40px;
       height: 40px;
       background: #37444b;
       border-radius: 5px;
       opacity: 0;
       transition: 0.5s;
       transform: rotate(45deg);
   }
   .container.active::before{
       opacity: 1;
       transition-delay: 0.5s;
   }
   .container .content{
       min-width: 400px;
       padding: 40px;
       color: #fff;
       opacity: 0;
       transition: 0.5s;
       transform: scale(0);
   }
   .container.active .content{
opacity: 1;
transition-delay:0.5s;
transform: scale(1);
   }
   .toggleBtn{
       position: absolute;
       bottom: -20px;
       min-width: 60px;
       height: 60px;
       background: #0bcf9c;
       border-radius: 50%;
       cursor: pointer;
       display: flex;
       justify-content: center;
       align-items: center;
       transition: 0.5s;
   }
   .toggleBtn::before{
       content: '+';
       font-size: 2.5em;
       color: #fff;
   }
   .container.active .toggleBtn{
      bottom: -90px; 
      transform: rotate(135deg);
      background: #ff5a57;
   }
</style>