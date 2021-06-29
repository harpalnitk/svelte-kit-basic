<div class="row">
    <div class="leftcolumn">
        <div class="card-neon neonTextFlicker">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg" style="height:200px;">Image</div>
            <p>Some text..</p>
        </div>
        <div class="card-neon neonTextPulsate">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div class="fakeimg" style="height:200px;">Image</div>
            <p>Some text..</p>
        </div>
    </div>
    <div class="rightcolumn">
        <div class="card">
            <h2>About Me</h2>
            <div class="fakeimg" style="height:100px;">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div class="card">
            <h3>Popular Post</h3>
            <div class="fakeimg">Image</div>
            <br />
            <div class="fakeimg">Image</div>
            <br />
            <div class="fakeimg">Image</div>
        </div>
        <div class="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
        </div>
    </div>
</div>

<style lang="scss">
	@import '../../styles/vars';
    	/* Create two unequal columns that floats next to each other */
	/* Left column */
	.leftcolumn {
		float: left;
		width: 75%;
	}

	/* Right column */
	.rightcolumn {
		float: left;
		width: 25%;
		padding-left: 20px;
	}

	/* Fake image */
	.fakeimg {
		background-color: #aaa;
		width: 100%;
		padding: 20px;
	}

	/* Add a card effect for articles */
	.card {
		background-color: white;
		padding: 20px;
		margin-top: 20px;
	}

	.card-neon {
		background-color: #010a01;
		color: white;
		padding: 20px;
		margin-top: 20px;
		h2{
			border: 0.2rem solid #fff;
			border-radius: 2rem;
			padding: 0.4rem;
			box-shadow: 0 0 .2rem #fff,
			0 0 .2rem #fff,
			0 0 2rem #bc13fe,
			0 0 .8rem #bc13fe,
			0 0 2.8rem #bc13fe,
			inset 0 0 1.3rem #bc13fe;
		}

	}

    	/* Clear floats after the columns */
	.row:after {
		content: '';
		display: table;
		clear: both;
	}

    	/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 800px) {
		.leftcolumn,
		.rightcolumn {
			width: 100%;
			padding: 0;
		}
	}

	.neonTextFlicker{
		h2{
			color: #fff;
		animation: flicker 1.5s infinite alternate;
		}

	}
	.neonTextPulsate{
       h2{
	color: #fff;
		animation: pulsate .11s ease-in-out infinite alternate;
}
	}

	@keyframes flicker{
		0%, 18%, 22%, 25%, 53%, 57%, 100% {
			text-shadow: 
		/*text-shadow: [x-offset] [y-offset] [blur-radius] [color]*/
		/* white glow */
		0 0 7px #fff,
		0 0 10px #fff,
		0 0 21px #fff,
		/* green glow */
		0 0 42px #0fa,
		0 0 82px #0fa,
		0 0 92px #0fa,
		0 0 102px #0fa,
		0 0 151px #0fa;
		}
		20%, 24%, 55% {
			text-shadow: none;
		}

	}

	@keyframes pulsate{
		 100% {
	    text-shadow: 
        0 0 4px #fff,
		0 0 11px #fff,
		0 0 19px #fff,
		0 0 40px #f09,
		0 0 80px #f09,
		0 0 90px #f09,
		0 0 100px #f09,
		0 0 150px #f09;
		}
		0% {
	    text-shadow: 
        0 0 4px #fff,
		0 0 10px #fff,
		0 0 18px #fff,
		0 0 38px #f09,
		0 0 73px #f09,
		0 0 80px #f09,
		0 0 94px #f09,
		0 0 140px #f09;
		}

	}

	// for users who have selected prefers-reduced-motion in their browsers we need to disable the flicker animation

	@media screen and (prefers-reduced-motion){
		h2{
			animation: none;
		}
	}
</style>