import { error } from '@sveltejs/kit';



export async function load({ params }) {
    const tree = {
        label: "USA", children: [
            {label: "Florida", children: [
                {label: "Jacksonville"},
                {label: "Orlando", children: [
                    {label: "Disney World"},
                    {label: "Universal Studio"},
                    {label: "Sea World"},
                ]},
                {label: "Miami"},
            ]},
            {label: "California", children: [
                {label: "San Francisco"},
                {label: "Los Angeles"},
                {label: "Sacramento"},
            ]},
        ],
    };
    if(tree){
       return tree;
    }
    throw error(404, 'Not found');
   }