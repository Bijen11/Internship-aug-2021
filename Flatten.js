let array= [20,[600,50]];
let newArray= [];
for (let index of array){
    newArray && newArray.push(index);
    if(Array.isArray(index)){
        for(let secIndex of index){
            newArray && newArray.push(secIndex);
            
        }
    }
}
console.log(newArray);





