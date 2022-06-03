export function get({request,params}){
    console.log('Inside param testing');
    return {
        body:{hello:'World',params:params}
    }
}

//this will return below in browser
// {
//     hello: "World",
//     params: {
//     param1: "a",
//     param2: "b"
//     }
//     }