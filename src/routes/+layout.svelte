<script>
	import '../app.scss';
	import Navbar from '$lib/components/UI/Navigation/Navbar.svelte';
	import Sidebar from '$lib/components/UI/Navigation/Sidebar.svelte';
	let open= false;
</script>
<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>

<main on:click={()=>open =false}>
	<slot/>
</main>
