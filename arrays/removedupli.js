
//write a program to return the array without a duplicate.

function removedupl(arr){
    //create new array and initialize it
let newarr = [];
//loop through the array
for(let i=0; i<arr.length; i++){
    let elem =  arr[i];
    if(newarr.indexOf(elem) === -1)
    {
         newarr.push(elem);
    }else{
        continue
    }
}
return newarr;

}
const arr = [2,7,3, 8,9,2,3,5,7];
console.log(removedupl(arr));
const arr2 = [4,6,3,3,3,3,7,2];
console.log(removedupl(arr2));
//second method usingn spread oprator
function secondMethd(arr){
    return [... new Set(arr)];
}
console.log("*********************");
console.log(secondMethd(arr));

//use include 
//third
function thirdMethod(arr){
    let newarr = [];
    for(let d of arr){
        if(!newarr.includes(d)){
         newarr.push(d);
        
        }
    }
    return newarr;
}
console.log("The program to remove dup: "+thirdMethod(arr));
console.log(arr+"=> elimate dupla: "+thirdMethod(arr));