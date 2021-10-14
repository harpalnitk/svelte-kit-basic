import { writable } from 'svelte/store'

const store = () => {
    const state = {
        title:'',
        url:''
    }
    const {subscribe, set, update} = writable(state);

    const methods = {
        init(){
            console.log('*: pageData -> init()');

            update(state => {
                state.title = '';
                state.url = '';
                return state;
            })
        },
        setTitle(title){
            console.log('*: pageData -> setTitle()');
            update(state =>{
                return {...state, title: title}
            })
           
        },
        setUrl(url){
            console.log('*: pageData -> setUrl()');
            update(state =>{
                return {...state, url: url}
            })
        }
    }
    return {
        subscribe,
        set,
        update,
        ...methods
    }
}

export default store();