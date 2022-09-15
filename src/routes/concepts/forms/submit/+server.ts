

import type {RequestHandler} from '@sveltejs/kit';

export const get: RequestHandler = async ({request, url}) => {
    console.log('received get data');
    console.log(url.searchParams.get('name'));
    console.log(url.searchParams.get('email'));
    return {
        body:{
            name: url.searchParams.get('name'),
            email:url.searchParams.get('email')
        }
    }
}

export const post: RequestHandler = async ({request, url}) => {
    console.log('received post data');
// const form = await request.formData();
// console.log('received post data',form);
//Above is not working
const returnObject = {};
const data = await request.formData();
const formEntries = [...data.entries()];
console.log('Form Data', formEntries);
for(const [key,value] of formEntries){
    returnObject[key]= value;
}
    return {
// status:303,
// headers:{
//     location:'/concepts/forms'
// },
// body:{
// name: form.has('name') ? form.get('name').toString : 'No name submitted',
// email: form.has('email') ? form.get('email').toString : 'No email submitted',
body:{formData:returnObject}
}
    }

//DELETE nad PUT not working


//before using put or delete we will have to add below in svelet.config.js file
// const config = {
// 	// Consult https://github.com/sveltejs/svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: preprocess(),

// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		// target: '#svelte'
// 		methodOverride:{
// 			allowed:['PUT','DELETE']
// 		}
    export const put: RequestHandler = async ({request, url}) => {
        console.log('put request handler');

    }
    export const del: RequestHandler = async ({request, url}) => {
            console.log('delete request handler');
    }
