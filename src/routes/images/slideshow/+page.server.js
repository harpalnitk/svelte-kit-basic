

import { error } from '@sveltejs/kit';
 
// /** @type {import('../../../../.svelte-kit/types/src/routes/audio/audioData/$types').PageServerLoad} */
export async function load({ params }) {
	 const quotes = [
		{
			quote: "The road to success is always under construction.",
			author: "Lily Tomlin"
		},
		{
			quote: "A day without sunshine is like, you know, night.",
			author: "Steve Martin"
		},
		{
			quote: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
			author: "Ellen Degeneres"
		},
		{
			quote: "Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.",
			author: "Denis Wholey"
		},
		{
			quote: "Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.",
			author: "Helen Rowland"
		},	
		{
			quote: "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
			author: "Alan Dundes"
		},
		{
			quote: "I want my children to have all the things I couldn't afford. Then I want to move in with them.",
			author: "Phyllis Diller"
		},
		{
			quote: "Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?",
			author: "George Carlin"
		},	
		{
			quote: "Folks, I don't trust children. They're here to replace us.",
			author: "Stephen Colbert"
		}	
	];
	
 
  if (quotes) {
    return {quotes};
  }
 
  throw error(404, 'Not found');
}