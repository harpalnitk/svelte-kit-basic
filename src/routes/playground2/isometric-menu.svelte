<main class='flex-center'>
<ul>
    <li style="--i:6;"><a href="#home">Home</a></li>
    <li style="--i:5;"><a href="#home">About</a></li>
    <li style="--i:4;"><a href="#home">Services</a></li>
    <li style="--i:3;"><a href="#home">Portfolio</a></li>
    <li style="--i:2;"><a href="#home">Our Team</a></li>
    <li style="--i:1;"><a href="#home">Contact</a></li>
</ul>
</main>

<style>
main{
    min-height: 100vh;
    background: #434750;
}
ul{
    position: relative;
    transform: skewY(-15deg);
   
}
ul li {
    position: relative;
    list-style: none;
    width: 200px;
    background: #3e3f46;
    padding: 15px;
    z-index: var(--i);
    transition: 0.5s;
}
ul li:hover{
    background: #33a3ee;
    /* for left mmovement */
    /* transform: translateX(-50px); */
    /* for right movement */
    transform: translateX(50px);
}
ul li::before{
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
}
ul li:hover::before{
    background: #1f5378;
}
ul li::after{
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #35383e;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
}
ul li:hover::after{
    background: #2982b9;
}
ul li a{
    text-decoration: none;
    color: #999;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: 0.5s;
}
ul li:hover a{
    color: #fff;
}
ul li:last-child::after{
    box-shadow: -100px 120px 20px rgba(0,0,0,.25);
}
</style>