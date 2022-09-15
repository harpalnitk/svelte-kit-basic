<main>
	<div class="container">
		<div class="left_Side">
			<div class="profileText">
				<div class="imgBx">
					<img src="/img/profile/profile-1.jpg" alt="" />
				</div>
				<h2>Harpal Singh<br /><span>Web Developer</span></h2>
			</div>
			<div class="contactInfo">
				<h3 class="title">ContactInfo</h3>
				<ul>
					<li>
						<span class="icon"><i class="fas fa-phone-alt" /></span>
						<span class="text">+1 234 5678 900</span>
					</li>
					<li>
						<span class="icon"><i class="far fa-envelope" /></span>
						<span class="text">john_doe@email.com</span>
					</li>
					<li>
						<span class="icon"><i class="fas fa-globe-americas" /></span>
						<span class="text">www.mywebsite.com</span>
					</li>
					<li>
						<span class="icon"><i class="fab fa-linkedin-in" /></span>
						<span class="text">www.linkedin.com</span>
					</li>
					<li>
						<span class="icon"><i class="fas fa-map-marker-alt" /></span>
						<span class="text">Jammu, J&K, India</span>
					</li>
				</ul>
			</div>
			<div class="contactInfo education">
				<h3 class="title">Education</h3>
				<ul>
					<li>
						<h5>2010-2013</h5>
						<h4>Master Degree in Computer Science</h4>
						<h4>University Name</h4>
					</li>
					<li>
						<h5>2007-2010</h5>
						<h4>Bachelor Degree in Computer Science</h4>
						<h4>University Name</h4>
					</li>
					<li>
						<h5>1997-2007</h5>
						<h4>Matriculation</h4>
						<h4>University Name</h4>
					</li>
				</ul>
			</div>
			<div class="contactInfo language">
				<h3 class="title">Languages</h3>
				<ul>
					<li>
						<span class="text">English</span>
						<span class="percent">
							<div style="width:90%;" />
						</span>
					</li>
					<li>
						<span class="text">Spanish</span>
						<span class="percent">
							<div style="width:48%;" />
						</span>
					</li>
					<li>
						<span class="text">Hindi</span>
						<span class="percent">
							<div style="width:85%;" />
						</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="right_Side">
			<div class="about">
				<h2 class="title2">Profile</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore architecto,
					cupiditate officia voluptas reiciendis alias reprehenderit odit adipisci? <br /><br
					/>Earum, ducimus molestias blanditiis iure numquam non repellendus quod animi corrupti
					veritatis, excepturi fugit, officiis quidem laborum sint enim eos? Exercitationem mollitia
					amet asperiores maiores eum ea libero magnam consequuntur enim?
				</p>
			</div>
			<div class="about">
				<h2 class="title2">Experience</h2>
				<div class="box">
					<div class="year_company">
						<h5>2019 - Present</h5>
						<h5>Company Name</h5>
					</div>
					<div class="text">
						<h4>Senior UX Designer</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero quaerat
							excepturi maxime praesentium impedit distinctio itaque blanditiis fuga sequi.
						</p>
					</div>
				</div>
				<div class="box">
					<div class="year_company">
						<h5>2016 - 2019</h5>
						<h5>Company Name</h5>
					</div>
					<div class="text">
						<h4>UX/UI Designer</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero quaerat
							excepturi maxime praesentium impedit distinctio itaque blanditiis fuga sequi.
						</p>
					</div>
				</div>
				<div class="box">
					<div class="year_company">
						<h5>2014-2016</h5>
						<h5>Company Name</h5>
					</div>
					<div class="text">
						<h4>Junior UX Designer</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero quaerat
							excepturi maxime praesentium impedit distinctio itaque blanditiis fuga sequi.
						</p>
					</div>
				</div>
			</div>
			<div class="abou skills">
				<h2 class="title2">Professional Skills</h2>
				<div class="box">
					<h4>Html</h4>
					<div class="percent">
						<div style="width:95%;"></div>
					</div>
				</div>
				<div class="box">
					<h4>CSS</h4>
					<div class="percent">
						<div style="width:45%;"></div>
					</div>
				</div>
				<div class="box">
					<h4>Javascript</h4>
					<div class="percent">
						<div style="width:65%;"></div>
					</div>
				</div>
				<div class="box">
					<h4>Photoshop</h4>
					<div class="percent">
						<div style="width:33%;"></div>
					</div>
				</div>
				<div class="box">
					<h4>Illustrator</h4>
					<div class="percent">
						<div style="width:88%;"></div>
					</div>
				</div>
				<div class="box">
					<h4>Adobe XD</h4>
					<div class="percent">
						<div style="width:78%;"></div>
					</div>
				</div>
			</div>
			<div class="about interest">
				<h2 class="title2">Interest</h2>
				<ul>
				<li><i class="fas fa-gamepad"></i> Gaming</li>	
				<li><i class="fas fa-microphone-alt"></i> Singing</li>	
				<li><i class="fas fa-book"></i> Reading</li>	
				<li><i class="fas fa-utensils"></i> Cooking</li>		
				</ul>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
	main {
		background: lightblue;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
	.container {
		position: relative;
		width: 100%;
		max-width: 1000px;
		min-height: 1000px;
		background: #fff;
		margin: 50px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
	}
	.container .left_Side {
		position: relative;
		background: #003147;
		padding: 40px;
	}
	.profileText {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 20px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
	.profileText .imgBx {
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
	}
	.profileText .imgBx img {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.profileText h2 {
		color: #fff;
		font-size: 1.5em;
		margin-top: 20px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 600;
		line-height: 1.4em;
	}
	.profileText h2 span {
		font-size: 0.8em;
		font-weight: 300;
	}
	.contactInfo {
		padding-top: 40px;
	}
	.title {
		color: #fff;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 1px;
		margin-bottom: 20px;
	}
	.contactInfo ul {
		position: relative;
	}
	.contactInfo ul li {
		list-style: none;
		position: relative;
		margin: 10px 0;
		cursor: pointer;
	}
	.contactInfo ul li .icon {
		display: inline-block;
		width: 30px;
		font-size: 18px;
		color: #03a9f4;
	}
	.contactInfo ul li span {
		color: #fff;
		font-weight: 300;
	}
	.contactInfo.education li {
		margin-bottom: 15px;
	}
	.contactInfo.education h5 {
		color: #03a9f4;
		font-weight: 500;
	}
	.contactInfo.education h4:nth-child(2) {
		color: #fff;
		font-weight: 500;
	}
	.contactInfo.education h4 {
		color: #fff;
		font-weight: 300;
	}
	.contactInfo.language .percent {
		position: relative;
		width: 100%;
		height: 6px;
		background: #081921;
		display: block;
		margin-top: 5px;
	}
	.contactInfo.language .percent div {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background: #03a9f4;
	}

	.container .right_Side {
		position: relative;
		background: #fff;
		padding: 40px;
	}
	.about {
		margin-bottom: 50px;
	}
	.about:last-child {
		margin-bottom: 0;
	}
	.title2 {
		color: #003147;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 10px;
	}
	p {
		color: #333;
	}
	.about .box{
		display: flex;
		flex-direction: row;
		margin: 20px 0;

	}
	.about .box .year_company{
min-width: 150px;

	}
	.about .box .year_company h5{
text-transform: uppercase;
color: #848c90;
font-weight: 600;
	}
	.about .box .text h4{
text-transform: uppercase;
color: #2a7da2;
font-size: 16px;
	}
	.skills .box{
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 150px 1fr; //same min -width as in .about .box .year_company{
			justify-content: center;
			align-items: center;
	}
	.skills .box h4{
		text-transform: uppercase;
		color: #848c99;
		font-weight: 500;
	}
	.skills .box .percent{
		position: relative;
		width: 100%;
		height: 10px;
		background: #f0f0f0;

	}
	.skills .box .percent div {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background: #03a9f4;
	}
	.interest ul{
		display: grid;
		grid-template-columns: repeat(4,1fr);
	}
	.interest ul li{
		list-style: none;
		color: #333;
		font-weight: 500;
		margin: 10px 0;
	}
	.interest ul li i{
		color: #03a9f4;
		font-size: 10px;
		width: 20px;
	}

	/// MAKE WEBSITE RESPONSIVE
	@media(max-width: 991px){
		.container{
			margin: 10px;
		grid-template-columns: repeat(1,1fr);
		}
		.interest ul{
			grid-template-columns: repeat(2,1fr);
		}
	}
	@media(max-width: 600px){
.about .box{
	flex-direction: column;
}
.about .box .year_company{

	margin-bottom: 5px;
}
.about .box .year_company h5{
margin-block-start: 3px;
margin-block-end: 3px;
}
.about .box .text h4{
	margin-block-start: 3px;
margin-block-end: 3px;	
}
.interest ul{
			grid-template-columns: repeat(1,1fr);
		}
		.skills .box{
			grid-template-columns: repeat(1,1fr);
		}
	}
</style>
