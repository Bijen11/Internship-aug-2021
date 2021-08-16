import {addToLocal,renderTodos} from "./store.js";
//import Moment from 'moment';


export const addTodo = (item) =>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    if(item == ""){
        throw new Error("List is empty");
    }
    addToLocal(item,date);    
}

export const deleteTodo =(e) =>{
let item = e.target.parentNode;
window.localStorage.removeItem('item');

}

export const markTodo =(item) =>{
    
}

export const sortsTodo =() =>{
    var data = JSON.parse(window.localStorage.getItem('todo'));
    console.log(data);
    const sortedArray  = data.sort((a,b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'));
    console.log('sorted',sortedArray);
}



