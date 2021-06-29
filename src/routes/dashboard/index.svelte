<script context="module">
	export async function load(page, session) {
		let { user } = session;
		if (!user) {
		    return this.redirect(302, '/auth');
		}
	}
</script>


<h1>This is our protected dashboard! Only visible when you are logged in with Firebase</h1> 