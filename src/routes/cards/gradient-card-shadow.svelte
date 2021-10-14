


<main>
<div class="card">
<h2>Gradient Box Shadow</h2>
</div>
<div class="link">
    <a class='fancy-link'>Gradient Link</a>
</div>

</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;
}
.card{
    position: relative;
    width: 400px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(315deg, #ffec61, #f321d7);
}
.card::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #ffec61, #f321d7);
    filter: blur(25px);
    transform: translateY(30px) scale(0.9);
}
.card h2{
    position: relative;
    color: #fff;
    font-weight: 500;

}
.link{
    margin: 3rem auto;
   
}
.fancy-link{
    
background: linear-gradient(90deg, red,blue);
background-size: 0% 3px;
background-repeat: no-repeat;
background-position: left bottom;
text-decoration: none;
font-weight: 900;
transition: background-size 300ms ease;
}
.fancy-link:hover{
    background-size: 100% 3px;
}
</style>