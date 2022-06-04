//return the second smallest and second largest in the given array

function secondlest(arr){
//sort the array
arr = arr.sort((a,b)=>a-b);
//remove duplicate
arr = [... new Set(arr)];
arr.pop();
arr.shift();
let max = arr.pop();
let min = arr.shift();
return [min, max];
}
const array = [2,5,7,2,8,9];
console.log(secondlest(array));