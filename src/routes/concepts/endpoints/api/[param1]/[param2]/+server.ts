import { json } from '@sveltejs/kit';

export function GET({request,params}){
    console.log('Inside param testing');
    return json({hello:'World',params:params})
}

//this will return below in browser
// {
//     hello: "World",
//     params: {
//     param1: "a",
//     param2: "b"
//     }
//     }