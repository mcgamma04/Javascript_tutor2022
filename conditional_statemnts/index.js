//conditional statements are bulding blocks or a means of testing various conditions
/*
let age = prompt("please enter your age");
//Types of conditional statements in js
// 1. if, 2. else, 3. if elseif else, 4. switch
if(age < 18){
    alert("Sorry, you are too young to vote");
} else{
    document.write(`Congrat, please click <a href="vote.html">here</a> to vote`)
}
*/

//if else if, else

//0 - 39: F, 40 -49: D, 50-59:C, 60 - 69: B, 70 - 100: A

let score = prompt("Please enter score: ");
if(score < 40){
    console.log("F");
}else if(score>=40 && score < 50){
    console.log("D");
}
else if(score>=50 && score < 60){
    console.log("C");
}
else if(score>=60 && score < 70){
    console.log("B");
}
else if(score>=70 && score < 100){
    console.log("A");
}else{
    console.log("Opps, seems your input is out of score");
}

//
