<script>
    let toggle=false;
</script>
<main>
    <section class:dark={toggle}>
        <div class="card">
            <div class="toggle flex-center" on:click="{()=> toggle= !toggle}" class:active={toggle}>
                <i class="far fa-moon"></i>
                <i class="fas fa-sun"></i>
            </div>
            <div class="content">
                <div class="imgText">
                    <div class="imgBx">
                        <img src="/img/avatar/avatar-1.jpg" alt="avatar-1">
                    </div>
                    <h3>Sarah Johnson<br><span>Graphic Designer</span></h3>
                </div>
                <ul class="sci">
                    <ul class="sci">
                        <li><a href="facebook"><i class='fab fa-facebook-f'></i></a></li>  
                        <li><a href="twitter"><i class='fab fa-twitter'></i></a></li>  
                        <li><a href="linkedin"><i class='fab fa-linkedin-in'></i></a></li>     
                    </ul>
                </ul>
            </div>
        </div>
    </section>
</main>

<style>
    section{
        position: relative;
        background: #f0f8ff;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.5s;
    }
    section.dark{
        background: #24292d;
    }
    section .card{
        position: relative;
        width: 300px;
        height: 380px;
        background: #fff;
        box-shadow: 0 15px 25px rgba(0,0,0,0.025);
        border-radius:16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.5s;
    }
    section.dark .card{
        background: #323840;
    }
    section .card .content,
    section .card .content .imgText{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        }
        section .card .content .imgText .imgBx{
            position: relative;
            width: 120px;
            height: 120px;
            overflow: hidden;
            border-radius: 50%;
            margin-bottom: 15px;
        }
        section .card .content .imgText .imgBx img{
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        section .card .content .imgText h3{
            font-weight: 500;
            font-size: 1.4em;
            line-height: 1.2em;
            text-align: center;
            color: #2fa1ff;
        }
        section .card .content .imgText h3 span{
            font-weight: 400;
            color: #777;
            font-size: 0.75em;
        }
        section.dark .card .content .imgText h3 span{
         color:#ccc;
        }
        section .card .content .sci{
            display: flex;
            margin-top: 15px;
        }
        section .card .content .sci li{
            list-style: none;
        }
        section .card .content .sci li a{
            position: relative;
            width: 50px;
            height: 50px;
            background: #e9f5ff;
            color: #2fa1ff;
            margin: 0.5px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            border-radius: 50%;
            font-size: 20px;
            transition: 0.5s;
        }

        section.dark .card .content .sci li a{
            background: #404852;
        }
        section .card .content .sci li a:hover{
            color: #fff;
        }
        section .card .content .sci li a i{
            position: relative;
            z-index: 1000;
        }
        section .card .content .sci li a::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #2fa1ff;
            border-radius: 50%;
            transform: scale(0);
            transition: 0.5s;
        }
        section .card .content .sci li a:hover::before{
            transform: scale(1);
        }
        .toggle{
            position: absolute;
            top: 20px;
            right: 20px;
            background: #e9f5ff;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            color: #2fa1ff;
        }
        section.dark .toggle{
            background: #404852;
            color:#fff;
        }

        .toggle i:nth-child(2){
    display: none;
}
.toggle.active i:nth-child(2){
    display: block;
}
.toggle.active i:nth-child(1){
    display: none;
}

        section.dark .toggle{

        }
</style>