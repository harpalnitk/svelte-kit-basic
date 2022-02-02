<main class='flex-center'>
    <div class="container">
        <form action="">
            <h3>Log In</h3>
            <div class="inputBox">
                <span>Username</span>
                <div class="box">
                    <div class="icon"><i class='fa fa-user'></i></div>
                    <input type="text">
                </div>
            </div>
            <div class="inputBox">
                <span>Password</span>
                <div class="box">
                    <div class="icon"><i class='fas fa-lock'></i></div>
                    <input type="password">
                </div>
            </div>
            <label for="">
                <input type="checkbox"> Remember me
            </label>
            <div class="inputBox">
             
                <div class="box">
                    <div class="icon"></div>
                    <input type="submit" value='Log in'>
                </div>
            </div>
            <a href="#forget-password" class='forgot'>Forget password</a>
        </form>
    </div>
</main>

<style>
    main{
min-height: 100vh;
background: #2f363e;
    }
    .container{
        position: relative;
        width: 350px;
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #2f363e;
        box-shadow: 25px 25px 75px rgba(0,0,0,0.25),
    10px 10px 70px rgba(0,0,0,0.25),
    inset 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);
    border-radius: 30px;
    padding: 50px;

    }
    form{
        position: relative;
        width: 100%;
    }
    .container h3{
        color: #fff;
        font-weight: 600;
        font-size: 2em;
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
        letter-spacing: 2px;
        text-transform: uppercase;

    }
    .inputBox{
        position: relative;
        width: 100%;
        margin-bottom: 20px;
    }
    .inputBox span{
        display: inline-block;
        color: #fff;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.75em;
        border-left: 4px solid #fff;
        padding-left: 4px;
        line-height: 1em;
    }
    .inputBox .box{
        display: flex;
    }
    .inputBox .box .icon{
position: relative;
min-width: 40px;
height: 40px;
background: #ff2c74;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 10px;
color: #fff;
font-size: 1.15em;

    }
</style>