//a string is a sequnce of characater. a, b c => abc
let message = "This is Port Harcourt";
//length;
function onlyLowest(arr){
    let result = '';
    let upper = '';
for(let i=0; i<arr.length;i++){
    if((arr.charCodeAt(i)>=97) && (arr.charCodeAt(i) <=122))
    {
       result +=arr.charAt(i);
    }else{
        upper +=arr.charAt(i);
    }
}
return  {"lower":result,"uppercase":upper}
}
console.log(onlyLowest(message));
//remove puntuation from the string
let letter = "This is, what i: love? most!"
function removepuntuation(str){
    let sen ='';
    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i)===46 || str.charCodeAt(i)===63|| str.charCodeAt(i)===44 || str.charCodeAt(i)===58 || str.charCodeAt(i)===59 || str.charCodeAt(i)===33 || str.charCodeAt(i)===34 ){
            continue;
        }else{
          sen +=str.charAt(i);
        }
    }
    return sen;
}
console.log(removepuntuation(letter));
console.log(removepuntuation("love ?!,good"));