// import { error } from '@sveltejs/kit';
// import hobbyStore from './http-store.js';

// let hobbies = [];
// export async function load({ params }) {
//     let getHobbies = await fetch('https://udemy-ng-http-59d8a.firebaseio.com/hobbies.json')
//       .then((res) => {
//        // isLoading = false;
//         if (!res.ok) {
//           throw new Error('Failed');
//         }
//         // console.log(res);
//         return res.json();
//       })
//       .then((jsonData) => {
//         //console.log(jsonData);
//         hobbies = Object.values(jsonData);
//         let keys = Object.keys(jsonData);
//         console.log(keys);
//         for (let key in jsonData) {
//           console.log(`Key: ${key} Data: ${jsonData[key]}`);
//         }
//         hobbyStore.setHobbies(hobbies);
//         return {hobbies};
//       })
//       .catch((err) => {
//         //isLoading = false;
//         console.log(err);
//         throw error(404, 'Not found');
//       });
    
//       if(getHobbies)
//       return getHobbies

//       throw error(404, 'Not found');
     
// }