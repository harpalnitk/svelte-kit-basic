<script>
    let menuToggle = false;
</script>

<main>
<!--NAVIGATION PAGE WHICH APPEARS FROM LEFT START-->
<div class="navigation" class:active={menuToggle}>
   <div class="banner">
       <img src="/img/web-pages/portfolio/banner.jpg" class='cover' alt="banner">
   </div>
   <div class="navlink">
       <ul>
           <li><a href="/home">Home</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/services">Services</a></li>
           <li><a href="/portfolio">Portfolio</a></li>
           <li><a href="/contact">Contact</a></li>
       </ul>
   </div>
</div>
<!--NAVIGATION PAGE WHICH APPEARS FROM LEFT END-->
<section class="sec" class:active={menuToggle}>
   <header>
       <div class="toggle" class:active={menuToggle} on:click={() => {menuToggle = !menuToggle}}></div>
<a href="/hire" class='btn'>Hire Me</a>
   </header>
   <div class="imgBx">
       <img src="/img/web-pages/portfolio/girl.jpg" class='cover' alt="">
   </div>
   <div class="content">
       <h2>Hi, I am<br><span>Elina Smith</span></h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Suscipit cum perspiciatis ea fuga iure
             laborum obcaecati, voluptas aperiam quas
              quis neque aut. Voluptatibus consequatur corporis,
               accusamus aliquam nisi omnis ipsum.</p>
<a href="/web-pages/personal-portfolio/resume" class="btn">Download My CV</a>
   </div>
   <footer>
       <ul class="sci">
           <li><a href="/facebook"><img src="/img/web-pages/portfolio/facebook.png" alt="facebook"></a></li>
           <li><a href="/twitter"><img src="/img/web-pages/portfolio/twitter.png" alt="twitter"></a></li>
           <li><a href="/instagram"><img src="/img/web-pages/portfolio/instagram.png" alt="instagram"></a></li>
       </ul>
       <p class="copyrightText">@Harpal Singh Pvt. Limited</p>
   </footer>
</section>
</main>


<style lang="scss">
   @import '../../../styles/vars';
main{
   overflow-x: hidden;
}
   .navigation{
       position: fixed;
       top: 0;
       left: -100%; //initially hide
       height: 100vh;
       width: 100%;
       display: flex;
       background: #333;
       justify-content: center;
       align-items: center;
       transition: 1s;
   }
   .navigation.active{
       left: 0; //on menu click button show
   }
   .banner{
       position: relative;
       width: 50%;
       height: 100vh;
   }
   .cover{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       object-fit: cover;
   }
   .navlink{
       position: relative;
       width: 50%;
       height: 100%;
       display: flex;
       align-items: center;
   }
   .navlink ul{
       position: relative;
       width: 100%;
   }
   .navlink ul li{
       position: relative;
       list-style: none;
   }
   .navlink ul li a{
       position: relative;
       color: #fff;
       font-size: 2em;
       font-weight: 500;
       text-decoration: none;
       margin: 5px 0;
       margin-left: 100px;
       display: inline-block;
       letter-spacing: 1px;
       text-transform: uppercase;
   }
   .navlink ul li a:hover{
     color: #2196f3;  
   }






   .sec{
       position: relative;
       left: 0;
       width: 100%;
       min-height: 100vh;
       padding: 100px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       transition: 1s;
   }
   .sec.active{
       left: 100%;
   }
   header{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       padding: 40px 100px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       transform: 0.5s;
   }
   .toggle{
       position: relative;
       left: 0;
       width: 40px;
       height: 40px;
       display: flex;
       justify-content: center;
       align-items: center;
       cursor: pointer;
       transition: 0.5s;
       // background: #ccc;
   }
   .toggle.active{
       left: -200px;
   }
   .toggle::before{
       content: '';
       position: absolute;
       width: 30px;
       height: 3px;
       background: #777;
       transform: translateY(-6px);
       transition: 0.5s;
   }
   .toggle::after{
       content: '';
       position: absolute;
       width: 30px;
       height: 3px;
       background: #777;
       transform: translateY(6px);
       transition: 0.5s;
   }
   .toggle.active::before{
       transform: translateY(0px) rotate(45deg);
       background: #fff;
   }
   .toggle.active::after{
       transform: translateY(0px) rotate(-45deg);
       background: #fff;
   }

   .btn{
       position: relative;
       display: inline-block;
       padding: 10px 20px;
       text-decoration: none;
       background: #ff1455;
       color: #fff;
       border-radius: 4px;
       letter-spacing: 1px;
}
.sec .imgBx{
   position: relative;
   min-width: 500px;
   height: 500px;
   border-radius: 50%;
   overflow: hidden;
}
.sec .content{
   max-width: 700px;
   margin-left: 40px;
}
.sec .content h2{
   font-weight: 500;
   letter-spacing: 1px;
   color: #777;
   line-height: 2.5em;
}
.sec .content h2 span{
font-weight: 700;
color: #2196f3;
font-size: 3em;
}
.sec .content p{
   color: #777;
   font-size: 1.2em;
   margin-bottom: 20px;
}
.sec .content .btn{
   background: #2196f3;

}
footer{
 position: absolute;
 bottom: 0;
 left: 0;
 padding: 20px 100px;  
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.sci{
   position: relative;
   display: flex;
   align-items: center;
}
.sci li{
  list-style: none; 
}
.sci li a{
position: relative;
margin-right: 20px;
display: inline-block;
transform: scale(0.75); 
opacity: 0.8; 
}
.copyrightText{
   font-weight: 500;
   color: #777;
   letter-spacing: 1px;

}

// NOW MAKE THE SITE RESPONSIVE
@media(max-width: 991px){
.sec{
   padding: 40px;
   flex-direction: column;
   justify-content: center;
}
header,footer{
   padding: 20px 40px;
}
.sec .imgBx{
   width: 300px;
   min-width: 300px;
   height: 300px;
   margin-top: 100px;
}
.sec .content{
   margin-bottom: 100px;
   margin-left: 0;
   max-width: 100%;
}
footer{
   flex-direction: column;
   align-items: flex-start;
}
footer ul{
   padding-inline-start: 0;
}
.sec .content h2 span{
font-size: 2em;
}
.banner{
   display: none;
}
.navlink{
   width: 100%;
}
.navlink ul li a{
font-size: 1.5em;
margin-left: 50px;
}
.toggle.active{
   left: -120px;
}




}
   </style>