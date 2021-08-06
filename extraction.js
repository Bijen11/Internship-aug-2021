let array = [1,2,3,4];
function extractElements(array,number){
    let arrLen= array.length;
    array = array.reverse();
    for(let index= 0; index<=number-1; index++){
        console.log(array[index]);
    }



}

extractElements(array,2)