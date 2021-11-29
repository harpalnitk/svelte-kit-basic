<main class='flex-center'>
    <div class="card">
        <span></span>
    </div>
</main>

<style>
 main{
min-height: 100vh;
background: #f8f8f8;
 }   
 .card{
     position: relative;
     width: 300px;
     height: 400px;
     background: #fff;
     border-radius: 20px;
     box-shadow: 0 25px 50px rgba(0,0,0,0.15);
 }
 .card span{
     position: absolute;
     top: -10px;
     left: -10px;
     width: 150px;
     height: 150px;
     /* background: #f00; */
     display: flex;
     justify-content: center;
     align-items: center;
     overflow: hidden;
     transform-style: preserve-3d;
 }
 .card span::before{
     content: 'Best Value';
     position: absolute;
     width: 150%;
     height: 40px;
     background: #62baea;
     transform: rotate(-45deg) translateY(-20px);
     display: flex;
     justify-content: center;
     align-items: center;
     text-transform: uppercase;
     font-weight: 600;
     color: #fff;
     letter-spacing: 0.1em;
     box-shadow: 0 5px 10px rgba(0,0,0,0.1);


 }
 .card span::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    background: #4a98bf; 
    z-index: -1;
box-shadow: 140px -140px #4a98bf;
    /* 150px -10px = 140px */
 }
</style>