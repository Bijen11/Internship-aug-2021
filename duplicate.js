let array = [1,45,3];
function findDuplicate(array){
    array.sort();
    console.log(array);
    let arrLen = array.length;
    for(let index = 0; index<=arrLen; index++){
        for(let secIndex = index+1; secIndex<=arrLen;secIndex++){
            if(array[index] == array[secIndex]){
                console.log(here);
                console.log('found dups of', array[index]);
            }
        }
    }

}

findDuplicate(array);