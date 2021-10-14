<script>
 
</script>



<main>
<section>
    <ul>
        <li><a href="home" data-text='Home'>Home</a></li>
        <li><a href="about" data-text='About'>About</a></li>
        <li><a href="services" data-text='Services'>Services</a></li>
        <li><a href="team" data-text='Team'>Team</a></li>
        <li><a href="contact" data-text='Contact'>Contact</a></li>
    </ul>
</section>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
section{
    position: relative;
    width: 100%;
    height: 70vh;
    display: flex;
   
    justify-content: center;
    align-items: center;
    background: #222;
    overflow: hidden;
}
ul{
    position: relative;
    display: flex;
    flex-direction: column;
}
ul li{
    list-style: none;
}
ul li a{
    position: relative;
    display: block;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    font-size: 4em;
    font-weight: 700;
    transition: 0.5s;
    transition-delay: 0.5s;
}
ul li a:hover{
    color: rgba(255,255,255,0.1);
    transition-delay: 0s;
}
ul li a::before{
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 0.35em;
    color: #3bffe8;
    text-shadow: 0 0 10px #3bffe8,
                 0 0 30px #3bffe8,
                 0 0 80px #3bffe8;
    font-weight: 500;
    letter-spacing: 40px;
    white-space: nowrap;
    text-align: center;
    opacity: 0;
    transition: 0.5s;
}
ul li a:hover::before{
opacity: 1;
letter-spacing: 6px;
transition-delay: 0.5s;
}
</style>