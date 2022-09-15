// saved in static folder
// export const audioData = [
// 	{
// 		name: "The Practice of Giving",
// 		url: "/audio/Great_Compassion.mp3",
// 	},
// 	{
// 		name: "Lumbini",
// 		url: "/audio/Lumbini.mp3",
// 	},
// 	{
// 		name: "Sample_1",
// 		url: "/audio/sample_700Kb.mp3",
// 	},
// 	{
// 		name: "Sample_9s",
// 		url: "/audio/sample-9s.mp3",
// 	},
// 	{
// 		name: "Sample_12s",
// 		url: "/audio/sample-12s.mp3",
// 	},
// 	{
// 		name: "Sample_15s",
// 		url: "/audio/sample-15s.mp3",
// 	}
// ]


import { error } from '@sveltejs/kit';
 
// /** @type {import('../../../../.svelte-kit/types/src/routes/audio/audioData/$types').PageServerLoad} */
export async function load({ params }) {
  //const post = await getPostFromDatabase(params.slug);

   const audioData = [
	{
		name: "The Practice of Giving",
		url: "/audio/Great_Compassion.mp3",
	},
	{
		name: "Lumbini",
		url: "/audio/Lumbini.mp3",
	},
	{
		name: "Sample_1",
		url: "/audio/sample_700Kb.mp3",
	},
	{
		name: "Sample_9s",
		url: "/audio/sample-9s.mp3",
	},
	{
		name: "Sample_12s",
		url: "/audio/sample-12s.mp3",
	},
	{
		name: "Sample_15s",
		url: "/audio/sample-15s.mp3",
	}
]
 
  if (audioData) {
    return {audioData};
  }
 
  throw error(404, 'Not found');
}