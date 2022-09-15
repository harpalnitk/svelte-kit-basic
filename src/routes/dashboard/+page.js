
export async function load(page, session) {
	let { user } = session;
	if (!user) {
	    return this.redirect(302, '/auth');
	}
}
