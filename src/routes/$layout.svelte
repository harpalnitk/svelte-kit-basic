<script>
	import '../app.scss';
	import Navbar from '$lib/components/UI/Navigation/Navbar.svelte';
	import Sidebar from '$lib/components/UI/Navigation/Sidebar.svelte';
	let open= false;
  //The framework give value of url{/about, /page} to this variable
  export let segment;
</script>
<Sidebar bind:open/>
<Navbar bind:sidebar={open} {segment}/>

<main on:click={()=>open =false}>
	<slot/>
</main>
