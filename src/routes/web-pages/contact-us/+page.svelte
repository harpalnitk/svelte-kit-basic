<script></script>

<main>
    <section>
        <div class="container">
            <div class='contactInfo'>
                <div>
                    <h2>Contact Info</h2>
                    <ul class="info">
                      
                        <li>
                            <span><i class='fas fa-map-marker-alt'></i></span>
                            <span>2912 Greater East<br>
                            Los Angeles, CA<br>
                        90017</span>
                        </li>
                        <li>
                            <span><i class='far fa-envelope'></i></span>
                            <span>user@gmail.com</span>
                        </li>
                        <li>
                            <span><i class='fas fa-phone-alt'></i></span>
                            <span>412-312-9800</span>
                        </li>
                    </ul>
                </div>
                <ul class="sci">
                    <li><a href="facebook"><i class='fab fa-facebook-f'></i></a></li>  
                    <li><a href="twitter"><i class='fab fa-twitter'></i></a></li>  
                    <li><a href="instagram"><i class='fab fa-instagram'></i></a></li> 
                    <li><a href="youtube"><i class='fab fa-youtube'></i></a></li>  
                    <li><a href="linkedin"><i class='fab fa-linkedin-in'></i></a></li>     
                </ul>
            </div>
            <div class="contactForm">
                <h2>Send a Message</h2>
                <div class="formBox">
                    <div class="inputBox w50">
                        <input type="text" name='' required>
                        <span>First Name</span>
                    </div>
                    <div class="inputBox w50">
                        <input type="text" name='' required>
                        <span>Last Name</span>
                    </div>
                    <div class="inputBox w50">
                        <input type="email" name='' required>
                        <span>Email Address</span>
                    </div>
                    <div class="inputBox w50">
                        <input type="text" name='' required>
                        <span>Mobile Number</span>
                    </div>
                    <div class="inputBox w100">
                       <textarea name="" required></textarea>
                        <span>Write your message here...</span>
                    </div>
                    <div class="inputBox w100">
                      <input type="submit" value='Send'>
                     </div>
                </div>
            </div>
        </div>
    </section>
   
</main>

<style>
section{
    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #112d42;
}
section::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #03a9f4;

}
section .container{
    position: relative;
    min-width: 1100px;
    min-height: 550px;
    display: flex;
    z-index: 1000;
}
section .container .contactInfo{
position: absolute;
top: 40px;
width: 350px;
height: calc(100% - 80px);
background: #0f3959;
z-index: 1;
padding: 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0 20px 20px rgba(0,0,0, 0.2);
}
section .container .contactInfo  h2{
color: #fff;
font-size: 24px;
font-weight: 500;
}
section .container .contactInfo .info{
position: relative;
margin: 20px 0;
}
section .container .contactInfo .info li{
    position: relative;
    list-style: none;
    display: flex;
    margin: 20px 0;
    cursor: pointer;
    align-items: flex-start;
}
section .container .contactInfo .info li span:nth-child(1){
    width: 30px;
    min-width: 30px;
}
section .container .contactInfo .info li span:nth-child(1) i{
    max-width: 100%;
    /* filter: invert(1); */
    color: white;
    opacity: 0.5;
}
section .container .contactInfo .info li span:nth-child(2){
   color: #fff;
   margin-left: 10px;
   font-weight: 300;
   opacity: 0.5;
}
section .container .contactInfo .info li:hover span:nth-child(1) i,
section .container .contactInfo .info li:hover span:nth-child(2){
    opacity: 1;
}

section .container .contactInfo .sci{
    position: relative;
    display: flex;
}
section .container .contactInfo .sci li{
    list-style: none;
    margin-right: 15px;
}
section .container .contactInfo .sci li a i{
color: #fff;
opacity: 0.5;
font-size: 1.5em;
}
section .container .contactInfo .sci li:hover a i{
opacity: 1;
}

/* contact form */

section .container .contactForm{
    position: absolute;
    padding: 70px 50px;
    background: #fff;
    margin-left: 150px;
    padding-left: 250px;
    width: calc(100% - 150px);
    height: 100%;
    box-shadow: 0 50px 50px rgba(0,0,0,0.5);
}
section .container .contactForm h2{
color: #0f3959;
font-size: 24px;
font-weight: 500;
}
section .container .contactForm .formBox{
position: relative;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding-top: 30px;
}
section .container .contactForm .formBox .inputBox{
position: relative;
margin: 0 0 35px 0;
}
section .container .contactForm .formBox .inputBox.w50{
width: 47%;
}
section .container .contactForm .formBox .inputBox.w100{
width: 100%;
}
section .container .contactForm .formBox .inputBox input,
section .container .contactForm .formBox .inputBox textarea{
    width: 100% !important;
    padding: 5px 0;
    resize: none;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    border: none;
    border-bottom: 1px solid #777;
    outline: none;
}
section .container .contactForm .formBox .inputBox textarea{
    min-height: 120px;
}
section .container .contactForm .formBox .inputBox span{
   position: absolute;
   left: 0;
   padding: 5px 0;
   font-size: 18px;
   font-weight: 300;
   color: #333;
   transition: 0.3s;
   pointer-events: none;
}
section .container .contactForm .formBox .inputBox input:focus ~ span,
section .container .contactForm .formBox .inputBox textarea:focus ~ span,
section .container .contactForm .formBox .inputBox input:valid ~ span,
section .container .contactForm .formBox .inputBox textarea:valid ~ span{
transform: translateY(-20px);
font-size: 12px;
font-weight: 400;
letter-spacing: 1px;
color: #ff568c;
}

section .container .contactForm .formBox .inputBox input[type="submit"]{
    position: relative;
    cursor: pointer;
    background: #0f3959;
    color: #fff;
    border: none;
    max-width: 150px;
    padding: 12px;
}

section .container .contactForm .formBox .inputBox input[type="submit"]:hover{
background: #ff568c;
}

/**Now make it RESPONSIVE*/
@media screen and (max-width:1200px){
    section .container{
        width: 90%;
        min-width: auto;
        margin: 20px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.2);
    }
    section .container .contactInfo{
        top: 0;
        height: 550px;
        position: relative;
        box-shadow: none;
    }
    section .container .contactForm{
        position: relative;
        width: calc(100%-350px);
        padding-left: 0;
        margin-left: 0;
        padding: 40px;
        height: 550px;
        box-shadow: none;
    }
}


@media screen and (max-width:991px){
    section{
        background: #03a9f4;
    }
    section::before{
        display: none;
    }
    section .container{
        display: flex;
        flex-direction: column-reverse;
    }
    section .container .contactForm, 
    section .container .contactInfo{
width: 100%;
height: auto;
    }
    section .container .contactInfo{
        flex-direction: row;
    }
    section .container .contactInfo ul.sci{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (max-width:600px){
  section .container .contactForm, 
    section .container .contactInfo{
padding: 25px;
    }
    section .container .contactInfo{
        flex-direction: column;
        align-items: flex-start;
    }
    section .container .contactInfo ul.sci{
        margin-top: 40px;
    }
    section .container .contactForm .formBox .inputBox.w50{
     width: 100%;
}
}

</style>