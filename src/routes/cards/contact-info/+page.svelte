<script>
   
</script>



<main>
<div class="container">
    <div class="box">
        <div class="imgBx">
<img src="/img/misc/call.png" alt="">
        </div>
        <div class="content">
<div class="icon">
    <img src="/img/misc/call.png" alt="">
</div>
<h3>Phone No.</h3>
<h4>9419215035</h4>
<h4>9419189780</h4>
</div>
    </div>
    <div class="box">
        <div class="imgBx">
<img src="/img/misc/email.png" alt="">
        </div>
        <div class="content">
            <div class="icon">
                <img src="/img/misc/email.png" alt="">
            </div>
            <h3>Email</h3>
            <h4>support@email.com</h4>
            <h4>care@email.com</h4>
        </div>
    </div>
    <div class="box">
        <div class="imgBx">
<img src="/img/misc/location.png" alt="">
        </div>
        <div class="content">
            <div class="icon">
                <img src="/img/misc/location.png" alt="">
            </div>
            <h3>Address</h3>
            <h4>282-A Kings Valley, Georgia</h4>
         
        </div>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}

main{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f7fcff;

}
.container{
    position: relative;
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px 0;
}
.container .box{
    position: relative;
    width: 300px;
    height: 300px;
    margin: 30px;
    background: #fff;
    box-shadow: 0px 30px 50px rgba(0,0,0,0.05);
}

.container .box .imgBx{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
transition: 0.5s;
transition-delay: 0.5s;
}
.container .box:hover .imgBx{
transform: scale(0);
transition-delay: 0s;
}
.container .box .imgBx img{
    max-width: 100px;

}
.container .box .content{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
transition: 0.5s;
background: #ff3579;
transform: scale(0);
transition-delay: 0s;
}
.container .box:hover .content{
    transform: scale(1);
    transition-delay: 0.5s;
}
.container .box:nth-child(2) .content{
    background: #2ba1ff;
}
.container .box:nth-child(3) .content{
    background: #c630e0;
}
.container .box .content .icon img{
max-width: 80px;
filter: invert(1);
}
.container .box .content h3{
color: #fff;
text-transform: uppercase;
font-size: 16px;
letter-spacing: 2px;
margin-top: 20px;
}
.container .box .content h4{
color: #fff;
font-size: 16px;
font-weight: 500;
margin: 0;
}
</style>