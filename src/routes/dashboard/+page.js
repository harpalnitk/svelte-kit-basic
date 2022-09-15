
throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(page, session) {
	let { user } = session;
	if (!user) {
	    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	    return this.redirect(302, '/auth');
	}
}
