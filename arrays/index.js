const  arr = [4,6,8,9,10];

// console.log(arr.length);
// //print first element
// console.log(arr[0]);
// //print out last element
// console.log(arr[arr.length-1]);
// //print all 
// // console.log(arr);

//Array method
//1. indexOf
// let index = arr.indexOf(8);
// console.log(index);
// //write to modify array 8
// arr[index] = 34
// console.log(arr);
// write a program that will modify the given array with target element to newElement 
//which  should be square of the target elemet
// if the target is not in the array return -1
//input [2,5,8,9],target = 5
//  ouput = [2,25,8,9]
// function quest (){
//   let target1=5
// let input1=[2,5,8,9]
// let array1 = input1.indexOf(5);
// console.log(array1);
// let answer= input1.map(input=> input[1]* 5) 
// console.log(answer);
  
// }
// quest()
// case 2
// input [7,3,9], target = 9
//output [7,3,81]

//case 3
// input: [3,6,8] target = 10
// output =  -1

function arrayModify(array,target){
    let idex = array.indexOf(target);
      if(array.indexOf(target) != -1){
          array[idex] = target ** 2;
      }else{
          return -1;
      }

  return array;
}
//console.log(arrayModify([2,5,8,9],5));
//console.log(arrayModify([7,3,9],9));

const lang = ['HTML','CSS','JAVSCRIPT','JAVA'];
//ADD to end of array PUSH
lang.push("PYTHON");

//add to start of the array
lang.unshift("C++");
console.log(lang);
//REMOVE from end of array
lang.pop()
console.log(lang);
//remove the first elemnt in the array
lang.shift()
console.log(lang);
//remove elemnt from array
lang.splice(2,1,"C")
console.log(lang);
lang.splice(0,0,"JQUERY")
console.log(lang);
//make a copy of array
const newlang =lang.slice(3,5)
console.log(newlang);




