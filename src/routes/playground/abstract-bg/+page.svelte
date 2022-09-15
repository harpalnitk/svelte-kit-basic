<script>
    
</script>



<main>
<section>
<div class="circle">
<i></i>
<i></i>
<i></i>
<i></i>
<j></j>
<h2>How to Make<br><span>Abstract</span><br>Background</h2>
</div>
</section>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background: linear-gradient(90deg,#49aeff,#ff4c89 );
}
.circle{
    position: relative;
    width: 400px;
    height: 400px;
    background: linear-gradient(90deg,#49aeff,#ff4c89 );
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.circle i{
    position: absolute;
    background: linear-gradient(90deg,#49aeff,#ff4c89 );
    z-index: 2;
    filter: blur(50px);
    inset: -5px;
}
.circle i:nth-child(4){
background: #fff;
z-index: 3;
inset: 5px;
}
.circle j{
  position: absolute;
  inset: -5px;
  z-index: 2;  
  border-radius: 50%;
  box-shadow: 20px 20px 50px rgba(0,0,0,.25),
                inset 20px 20px 50px rgba(0,0,0,.15);
}
.circle h2{
    position: relative;
    z-index: 20;
    text-align: center;
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 10px;
    line-height: 1.1em;
    color: #646464;
}
.circle h2 span{
    font-weight: 700;
    font-size: 2em;
    line-height: 1em;
    letter-spacing: 0;
}
</style>