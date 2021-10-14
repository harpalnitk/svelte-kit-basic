// https://holidayapi.com/dashboard
// Signup with harpalnitk@gmail.com N$nn with capital and get the API key 
// API KEY: f632c789-e5ae-48e2-b70d-6410896c9e9b


const key ="f632c789-e5ae-48e2-b70d-6410896c9e9b";
let language = "en";
let country="US";

/*API endpoint to get holiday data*/

const apiURL = `https://holidayapi.com/v1/holidays?
pretty&key=${key}&country=${country}&year=2020&language=${language}`;

export const getData = async ()=>{
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