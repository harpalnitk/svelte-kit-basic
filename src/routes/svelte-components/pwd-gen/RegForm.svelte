<script>
import {createEventDispatcher} from 'svelte';

let dispatch= createEventDispatcher();

	let showPW = false;
    let pwdElement;
    let email;
	
	const handleSubmit = () => {
		console.log(`Form submitted Password: ${pwdElement.value} Email: ${email}`);
		pwdElement.value = "";
		email = "";
	}
</script>


<form on:submit|preventDefault={handleSubmit}>
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" 
					 placeholder="Enter Email" 
					 name="email" 
					 id="email"
					 autocomplete="off"
					 required
                     bind:value={email}>

    <label for="psw"><b>Password</b></label>
    <input type={showPW ? "text" : "password"} 
					 placeholder="Enter Password" 
					 name="psw" 
					 id="psw" 
					 minlength="8" 
					 required
                     bind:this={pwdElement}>
		
		<!-- Open PW Modal and Show PW -->
		<div>
			<button id="get-pw-btn" type="button" on:click={()=>dispatch('showPwdGenModal')}>Get Secure Password</button>
			<label for="showCheckbox">
				<input type="checkbox" 
							 id="showCheckbox"
							 on:change={() => showPW = !showPW}>
				Show Password
				</label> 
		</div>
		
    <hr>

    <p>By creating an account you agree to our <a href="#terms">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#sign">Sign in</a>.</p>
  </div>
</form>


<style>

	/* Add padding to containers */
	.container {
		padding: 16px;
	}

	/* Full-width input fields */
	input[type=text], input[type=password] {
		width: 100%;
		padding: 1rem;
		margin: .3rem 0 1.5rem 0;
		display: inline-block;
		border: none;
		background: #f1f1f1;
	}

	input[type=text]:focus, input[type=password]:focus {
		background-color: #ddd;
		outline: none;
	}
	
	input[type=checkbox], label {
		cursor: pointer;
	}

	/* Overwrite default styles of hr */
	hr {
		border: 1px solid #f1f1f1;
		margin-bottom: 25px;
	}

	button {
		cursor: pointer;
	}
	
	#get-pw-btn {
		background-color: #F2B705;
		margin-right: 20px;
	}
	
	/* Set a style for the submit/register button */
	.registerbtn {
		background-color: #568C04;
		color: white;
		padding: 16px 20px;
		margin: 8px 0;
		border: none;
		width: 100%;
		opacity: 0.9;
	}

	.registerbtn:hover {
		opacity:1;
	}

	/* Add a blue text color to links */
	a {
		color: hsl(191, 96%, 38%);
	}

	/* Set a grey background color and center the text of the "sign in" section */
	.signin {
		background-color: #f1f1f1;
		text-align: center;
	}
</style>