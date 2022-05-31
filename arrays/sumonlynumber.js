
function sumonlynumber(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        let elem =  arr[i];
        if(typeof elem === 'number')
          {
              sum +=elem;
          }
    }
    return sum;
}
console.log(sumonlynumber([3,"6",9,"5",2]));



