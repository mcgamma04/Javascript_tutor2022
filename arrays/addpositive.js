function addpostive(arr){
    
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        if(arr[i] > 0){
            sum+= arr[i];
        }
    }
    return sum;
}
let res = [-4,6,-2];
console.log(addpostive(res));