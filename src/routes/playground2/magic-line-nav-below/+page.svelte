<main class='flex-center'>
<ul>
    <li><a href="#twitter"><i class='fab fa-twitter'></i></a></li>
    <li><a href="#whatsapp"><i class='fab fa-whatsapp'></i></a></li>
    <li><a href="#youtube"><i class='fab fa-youtube'></i></a></li>
</ul>
</main>

<style>
main{
    min-height: 100vh;
    background: #000;
}
ul{
   position: relative; 
   display: flex;
}
ul li{
    position: relative;
    list-style: none;
    margin: 0 20px;
    cursor: pointer;
}
ul li a{
    text-decoration: none;
}
ul li a .fab{
    font-size: 6em;
    color: #222;
}
ul li::before{
    font-family: "Font Awesome 5 Brands";
/* font-weight: 900; */
    position: absolute;
    top: 0;
    left: 0;
    font-size: 6em;
    height: 0;
    overflow: hidden;
    transition: 0.5s ease-in-out;

}
ul li:nth-child(1)::before{
    content: '\f099';
    color: #1da1f2;
    border-bottom: 4px solid #1da1f2;
}
ul li:nth-child(2)::before{
    content: '\f232';
    color: #25d366;
    border-bottom: 4px solid #25d366;
}
ul li:nth-child(3)::before{
    content: '\f167';
    color: #ff0000;
    border-bottom: 4px solid #ff0000;
}
ul li:hover::before{
    height: 100%;
}
</style>