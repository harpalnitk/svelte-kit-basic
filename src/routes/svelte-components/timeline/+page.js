// https://holidayapi.com/dashboard
// Signup with harpalnitk@gmail.com N$nn with capital and get the API key 
// API KEY: f632c789-e5ae-48e2-b70d-6410896c9e9b

import { error } from '@sveltejs/kit';
const key ="f632c789-e5ae-48e2-b70d-6410896c9e9b";
let language = "en";
let country="US";

/*API endpoint to get holiday data*/

const apiURL = `https://holidayapi.com/v1/holidays?
pretty&key=${key}&country=${country}&year=2022&language=${language}`;

const getData = async (fetch)=>{
    try {
        const response = await fetch(apiURL);
        if(response.ok){
            const jsonResponse = await response.json();
            //console.log('Holiday API response:',jsonResponse.holidays);
            return jsonResponse.holidays;
        }
    } catch (error) {
        console.log('Error in fetching data from Holiday API', error);
    }
}

export async function load({ fetch, params }) {
 let data = await getData(fetch);
 if(data){
    return {holidayData: data};
 }
 throw error(404, 'Not found');
}