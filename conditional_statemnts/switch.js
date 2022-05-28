
// let option = parseInt(prompt("1: Add\n2:substract\n3:Multiply\n4:Divide\n5Exit"));
// let message ="";
// switch(option){
//     case 1:
//         message = "addition function will called";
//          break;
//      case 2:
//         message = "subatract function will called";
//         break;
//     case 3:
//         message = "Multply function will called";
//         break;
//     case 5  :
//         message = "Bye bye";
//         break;
//     default:
//         message = "wrong input";

// }
// console.log(message);

let fname = prompt("Enter fname: ");
if(fname.length === 0 || fname === null){
    alert("name cannot be empty");
}
document.write("Hello, "+fname.toUpperCase());
