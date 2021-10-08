


<main>
<div class="container">
    <div class="card">
        <div class="icon">
            <i class="fas fa-rocket"></i>
        </div>
        <div class="content">
            <h2>Card One</h2>
            <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Quis, impedit, ex facilis 
                 libero ipsa odio corporis 
                 nam vel expedita maiores et 
                 error, quam dignissimos earum!
                  At repellendus aspernatur
                   voluptatibus dignissimos.</p>
        </div>
    </div>
    <div class="card">
        <div class="icon">
            <i class="fas fa-globe-africa"></i>
        </div>
        <div class="content">
            <h2>Card Two</h2>
            <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Quis, impedit, ex facilis 
                 libero ipsa odio corporis 
                 nam vel expedita maiores et 
                 error, quam dignissimos earum!
                  At repellendus aspernatur
                   voluptatibus dignissimos.</p>
        </div>
    </div>
    <div class="card">
        <div class="icon">
            <i class="far fa-gem"></i>
        </div>
        <div class="content">
            <h2>Card Three</h2>
            <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Quis, impedit, ex facilis 
                 libero ipsa odio corporis 
                 nam vel expedita maiores et 
                 error, quam dignissimos earum!
                  At repellendus aspernatur
                   voluptatibus dignissimos.</p>
        </div>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3c2846;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px;
}
.card{
    position: relative;
    width: 320px;
    height: 450px;
    margin: 30px;
    background: #287bff;
    border-radius: 20px;
    border-bottom-left-radius: 160px;
    border-bottom-right-radius: 160px;
    box-shadow: 0 15px 0 #fff,
                inset 0 -15px 0 rgba(255,255,255,0.25),
                0 45px 0 rgba(0,0,0,0.15);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;

}
.card::before{
    content: '';
    position: absolute;
    top: -140px;
    left: -40%;
    width: 100%;
    height: 120%;
    background: linear-gradient(90deg ,transparent,rgba(255,255,255,0.2));
    transform: rotate(35deg);
    pointer-events: none;
    filter: blur(5px);
   
}
.card:nth-child(1){
    background: linear-gradient(to bottom,#ff2ae0,#645bf6);
}
.card:nth-child(2){
    background: linear-gradient(to bottom,#ffec61,#f321d7);
}
.card:nth-child(3){
    background: linear-gradient(to bottom,#24ff72,#9a4eff);
}
.icon{
    position: relative;
    width: 140px;
    height: 120px;
    background: #3c2846;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    box-shadow: 0 10px 0 rgba(0,0,0,0.1),
                inset 0 -8px #fff;
    z-index: 1000;
    display: flex;
    justify-content: center;
}
.icon::before{
    content: '';
    position: absolute;
    top: 0;
    left: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-top-right-radius: 50px;
    box-shadow: 15px -15px 0 15px #3c2846;
}
.icon::after{
    content: '';
    position: absolute;
    top: 0;
    right: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-top-left-radius: 50px;
    box-shadow: -15px -15px 0 15px #3c2846;
}
.icon i{
    color: #fff;
     position: relative;
     font-size: 6em;
     z-index: 10000;
}
.content{
    position: absolute;
    width: 100%;
    padding: 30px;
    padding-top: 140px;
    text-align: center;
}
.content h2{
    font-size: 1.75em;
    color: #fff;
    margin-bottom: 10px;
}
.content p{
    color: #fff;
    line-height: 1.5em;
}
</style>