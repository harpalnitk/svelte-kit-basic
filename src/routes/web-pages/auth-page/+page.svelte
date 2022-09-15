<script>
	let toggle = false;
</script>

<main class:active={toggle}>
	<div class="container">
		<div class="blueBg">
			<div class="box signin">
				<h2>Already Have an Account ?</h2>
				<button class="signinBtn" on:click={() => (toggle = !toggle)}>Sign in</button>
			</div>
			<div class="box signup">
				<h2>Don't Have an Account ?</h2>
				<button class="signupBtn" on:click={() => (toggle = !toggle)}>Sign up</button>
			</div>
		</div>
		<div class="formBx" class:active={toggle}>
			<div class="form signinForm">
				<form>
					<h3>Sign In</h3>
					<input type="text" placeholder="Username" />
					<input type="password" placeholder="Password" />
					<input type="submit" value="Login" />
					<a href="forgot-pwd" class="forgot">Forgot Password ?</a>
				</form>
			</div>
			<div class="form signupForm">
				<form>
					<h3>Sign Up</h3>
					<input type="text" placeholder="Username" />
					<input type="email" placeholder="Email Address" />
					<input type="password" placeholder="Password" />
					<input type="password" placeholder="Confirm Password" />
					<input type="submit" value="Register" />
				</form>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #03a9f4;
		transition: 0.5s;
		min-height: 100vh;
	}
	main.active {
		background: #f43648;
	}
	.container {
		position: relative;
		width: 800px;
		height: 500px;
		margin: 20px;
	}
	.blueBg {
		position: absolute;
		top: 40px;
		width: 100%;
		height: 420px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
	}
	.blueBg .box {
		position: relative;
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.blueBg .box h2 {
		color: #fff;
		font-size: 1.2em;
		font-weight: 500;
		margin-bottom: 10px;
	}
	.blueBg .box button {
		cursor: pointer;
		padding: 10px 20px;
		background: #fff;
		color: #333;
		font-size: 16px;
		font-weight: 500;
		border: none;
	}
	.formBx {
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: #fff;
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
		transition: 0.5s ease-in-out;
		overflow: hidden;
	}
    .formBx .form {
		position: absolute;
		left: 0;
		width: 100%;
		padding: 50px;
		transition: 0.5s;
	}
	.formBx.active {
		left: 50%;
	}
	.formBx .signinForm {
		transition-delay: 0.25s;
	}
	.formBx.active .signinForm {
		left: -100%;
		transition-delay: 0s;
	}
	.formBx .signupForm {
		left: 100%;
        transition-delay: 0s;
	}
	.formBx.active .signupForm {
		left: 0;
        transition-delay: 0.25s;
	}


	.formBx .form form {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.formBx .form form h3 {
		font-size: 1.5em;
		color: #333;
		font-weight: 500;
		margin-bottom: 20px;
	}
	.formBx .form form input {
		width: 100%;
		margin-bottom: 20px;
		padding: 10px;
		outline: none;
		font-size: 16px;
		border: 1px solid #333;
	}
	.formBx .form form input[type='submit'] {
		background: #03a9f4;
		border: none;
		color: #fff;
		max-width: 100px;
		cursor: pointer;
	}
    .formBx.active .signupForm input[type='submit'] {
background: #f43648;
    }
	.formBx .form form .forgot {
		color: #333;
	}

    /**RESPONSIVE*/
    @media (max-width: 991px){
        .container{
            max-width: 400px;
            height: 650px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container .blueBg{
            top: 0;
            height: 100%;
        
        }
        .formBx{
            width: 100%;
            height: 500px;
            top: 0;
            box-shadow: none;
        }
        .container .blueBg .box{
            position: absolute;
            width: 100%;
            height: 150px;
            bottom: 0;
        }
        .container .blueBg .box.signin{
            top: 0;
        }
        .formBx.active{
            left: 0;
            top: 150px;
        }
    }
</style>
