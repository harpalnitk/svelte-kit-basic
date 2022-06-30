<main>
	<div class="container">
		<div class="box" style="--clr:#fc5f9b;">
			<div class="content">
				<div class="icon"> 
                    <i class="fas fa-palette"></i>
                </div>
				<div class="text">
					<h3>Website Designing</h3>
					<p>5 Projects</p>
				</div>
			</div>
		</div>
		<div class="box" style="--clr:#a362ea;">
			<div class="content">
				<div class="icon">
                    <i class="fas fa-code"></i>
                </div>
				<div class="text">
					<h3>Website Development</h3>
					<p>3 Projects</p>
				</div>
			</div>
		</div>
		<div class="box" style="--clr:#0ed095;">
			<div class="content">
				<div class="icon">
                    <i class="fas fa-globe-africa"></i>
                </div>
				<div class="text">
					<h3>SEO</h3>
					<p>12 Projects</p>
				</div>
			</div>
		</div>
	</div>
</main>
<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #f7f7f7;

    }
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .container .box{
        position: relative;
        width: 400px;
        height: 100px;
        background: #fff;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        box-shadow: 10px 10px 15px rgba(0,0,0,0.025);
    }
    .container .box:nth-child(1){
        transform: translateX(-70px);
     }
     .container .box:nth-child(3){
        transform: translateX(70px);
     }
     .container:hover .box:nth-child(1){
        transform: translateX(0);
     }
     .container:hover .box:nth-child(3){
        transform: translateX(0);
     }
     .container .box::before{
content: '';
position: absolute;
width: 6px;
height: 100%;
background: var(--clr);
transition: 0.5s ease-in-out;
     }
     .container .box:hover::before{
width: 100%;
     }
     .container .box .content{
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
     }
     .container .box .content .icon{
        position: relative;
        min-width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
     }
     .container .box .content .icon i{
font-size: 2.5em;
color: var(--clr);
transition: 0.5s ease-in-out;
     }
     .container .box:hover .content .icon i{
        color: #fff;
     }
     .container .box .content .text h3{
font-weight: 500;
color: var(--clr);
transition: 0.5s ease-in-out;
     }
     .container .box .content .text p{
font-size: 0.9em;
color:#999;
transition: 0.5s ease-in-out;
     }
     .container .box:hover .content .text h3,
     .container .box:hover .content .text p{
color: #fff;
     }
</style>
