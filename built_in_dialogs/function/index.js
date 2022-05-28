
function add(a,b){
    let sum =  a + b;
    console.log("Sum = "+sum);
}
// console.log(add(3,6));
//write a program to check users age
//access should be denied if user age below 18
//othewise grant access

let msg =  document.getElementById("message");
let btn = document.getElementById("btn");

function validate(){
let userAge = parseInt(document.getElementById("age").value);
if(userAge < 18){
  msg.innerHTML = "Age cannot below 18";
}
else{
    msg.innerHTML = `<strong>Congrations since you are ${userAge} years old</strong>`//"Congrations since you are "+userAge +" years old";
}
}


// btn.addEventListener('click',validate());
//console.log(validate(age));
