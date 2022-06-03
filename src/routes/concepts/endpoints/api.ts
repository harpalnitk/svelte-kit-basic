export function get({request}){
    return {
        body:{hello:'World'}
    }
}

//Make post request from POSTMAN
//http://localhost:3000/concepts/endpoints/api

//json
// export  async function post({request}){
//     const body = await request.json();
//     console.log("Request Body",body)
//     return {
//         body:{hello:'Post With JSOn Data', request:body}
//     }
// }

//FORM DATA
/** @type {import('@sveltejs/kit').RequestHandler} */
export  async function post({request,params,url}){
    const returnObject = {};
    const data = await request.formData();
    const formEntries = [...data.entries()];
    console.log('Form Data', formEntries);
    for(const [key,value] of formEntries){
        returnObject[key]= value;
    }
//query Paramas
//const query = await request.query;
console.log('Query_params',params);
console.log('URL',url);
console.log('Limit',url.searchParams.get('limit'));
console.log('Offset',url.searchParams.get('offset'));
const query_params={limit:url.searchParams.get('limit'), offset: url.searchParams.get('offset')};

for(const [key,value] of formEntries){
    returnObject[key]= value;
}

    return {
        body:{hello:'Post With Form Data', formData: returnObject, queryParams: query_params}
    }
}