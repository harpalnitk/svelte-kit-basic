<script>

    export let background1 = '#a18cd1';
    export let background2 = '#fbc2eb'; 

</script>

<a href="gradient-button" 
style='background:linear-gradient(to right, {background1},{background2},{background1})'>Button</a>

<style>
a{
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none !important;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    color: #fff;
    transition: 0.5s;
    background-size: 200% !important;
    
   

}
a:hover{
    background-position-x: 100% !important;
    transform: translateY(-15px);
}
a::after{
content:'';
position: absolute;
top: 0;
left: 0;
width: 50%;
height: 100%;
background: rgba(255,255,255,.2);

}
a::before{
    content:'';
position: absolute;
bottom: 0;
left: 5%;
width: 90%;
height: 4px;
background: rgba(0,0,0,0.2);
border-radius: 50%;
transform: scale(0);
filter: blur(5px);
transition: 0.5s;
z-index: -1;
pointer-events: none;
}
a:hover::before{
    transform: scale(1);
    bottom: -15px;

}
</style>