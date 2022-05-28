
function multiplyOdd(arr){
let mul = 1;
for(let i=0; i<arr.length; i++){
    if(i%2 === 0){
        continue;
    }else{
        mul *= arr[i];
    }
}
return mul;
}
console.log(multiplyOdd([2,5,7,3]));