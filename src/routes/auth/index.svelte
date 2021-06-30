<script>
	// import Profile from '../../components/Auth/Profile.svelte';
	// import {auth, googleProvider} from '../../lib/helpers/firebase';
	//import {authState} from 'rxfire/auth';

	import { getFirestore, getFirebaseAuth, getGoogleProvider } from '$lib/helpers/firebase.js';

	let user;
	let db;
	let auth;

	$: db =  getFirestore();
	$: auth = getFirebaseAuth();

	console.log('auth', auth);

	//$: user = auth.onAuthStateChanged();
	// shape of stores of svelte is similar to shape of rxjs observables
	// const unsubscribe = authState(auth).subscribe(u => user = u);
	//Instead of subscribing like above we will subscribe directly using user$ in the template
	let email = '';
	let password = '';

	async function loginWithGoogle(){
		try {
			//const db = await getFirestore();
			console.log('before sending google signin request', db);
			// const auth = await getFirebaseAuth();
			//user =  auth.signInWithPopup(await getGoogleProvider());
			await auth.signInWithPopup(await getGoogleProvider());
			console.log('Result in google signin', user);
			// auth.signInWithEmailAndPassword(email, password).then((res) => {
			// 	// goto('/dashboard');
			// 	console.log('signed in with email password', res);
			// });
		} catch (e) {
			let message = e.message || e;
			console.log('Something went wrong:', message);
		}
	}
    
	// async function login() {
	// 	try {
	// 		const db = await getFirestore();
	// 		console.log('before sending request', db);
	// 		const auth = await getFirebaseAuth();
	// 		//auth.signInWithPopup(await getGoogleProvider());
	// 		user = auth.signInWithEmailAndPassword(email, password)
	// 	} catch (e) {
	// 		let message = e.message || e;
	// 		console.log('Something went wrong:', message);
	// 	}
	// }
	// async function signout() {
	// 	try {
	// 		const db = await getFirestore();
	// 		console.log('before sending request', db);
	// 		const auth = await getFirebaseAuth();
	// 		if(user){
	// 			auth.signOut();
	// 		}
              
	// 	} catch (e) {
	// 		let message = e.message || e;
	// 		console.log('Something went wrong in signout:', message);
	// 	}
	// }
</script>

<section>
	{#if user}
		<!-- <Profile {...user}/> -->
		<button on:click={() => signout()}>Logout</button>
		<hr />
	{:else}
	<div>
		<button on:click={loginWithGoogle}>Signin with Google</button>
		<section>
			<h1>Login form</h1>
		
			<input type="email" bind:value={email} placeholder="your email" />
			<br />
		
			<input type="password" bind:value={password} placeholder="your password" />
			<br />
		
			<button on:click={login}>Login</button>
		</section>
	</div>

	{/if}
</section>



<style>
	section {
		background: rgb(235, 235, 235);
		padding: 20px;
	}
</style>
