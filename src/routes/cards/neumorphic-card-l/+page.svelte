


<main>
<div class="container">
    <div class="card">
        <div class="imgBx">
            <i class="fas fa-rocket"></i>
        </div>
        <div class="contentBx">
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                 elit. Sunt quam iure quisquam modi adipisci
                  aspernatur, consequuntur nam dolor minima
                   ipsam.</p>
                   <a href="read-more"><span>Read More</span></a>
        </div>
    </div>
    <div class="card">
        <div class="imgBx">
            <i class="fas fa-rocket"></i>
        </div>
        <div class="contentBx">
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                 elit. Sunt quam iure quisquam modi adipisci
                  aspernatur, consequuntur nam dolor minima
                   ipsam.</p>
                   <a href="read-more"><span>Read More</span></a>
        </div>
    </div>
    <div class="card">
        <div class="imgBx">
            <i class="fas fa-rocket"></i>
        </div>
        <div class="contentBx">
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                 elit. Sunt quam iure quisquam modi adipisci
                  aspernatur, consequuntur nam dolor minima
                   ipsam.</p>
                   <a href="read-more"><span>Read More</span></a>
        </div>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
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
    background: #ebf5fc;
}
.container{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 1100px;
}
.container .card{
    width: 320px;
    margin: 20px;
    padding: 40px 30px;
    background: #ebf5fc;
    border-radius: 40px;
    box-shadow: -6px -6px 20px rgba(255,255,255,1),
                 6px 6px 20px rgba(0,0,0,0.1);
}
.container .card:hover{
    box-shadow: inset -6px -6px 10px rgba(255,255,255,0.5),
               inset  6px 6px 20px rgba(0,0,0,0.05);
}
.container .card .imgBx{
    position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
    width: 100%;
}
.container .card .imgBx i{
font-size: 5em;
max-width: 120px;
color: #32a3b1;
}
.container .card .contentBx{
    position: relative;
    margin-top: 20px;
    text-align: center;
}
.container .card .contentBx h2{
color: #32a3b1;
font-weight: 700;
font-size: 1.4em;
letter-spacing: 2px;
}
.container .card .contentBx p{
    color: #32a3b1;
}
.container .card .contentBx a{
    display: inline-block;
    padding: 10px 20px;
    margin-top: 15px;
    border-radius: 40px;
    font-size: 1em;
    color: #32a3b1;
    text-decoration: none;
    box-shadow: -4px -4px 15px rgba(255,255,255,1),
                 4px 4px 15px rgba(0,0,0,0.1);
}
.container .card .contentBx a:hover{
    box-shadow: inset -4px -4px 10px rgba(255,255,255,0.5),
                inset 4px 4px 10px rgba(0,0,0,0.1);
}
.container .card .contentBx a:hover span{
    display: block;
    transform: scale(0.98);
}
.container .card:hover .contentBx,
.container .card:hover .imgBx{
    transform: scale(0.98);
}
</style>