const person =[ 
    
    {
    
    firstName:"Michael",
    lastname:"Adebayo",
    age:23,
    skills:['HTML','CSS','JAVASCRIPT'],
    canSpeakEnglish:true
    
},
{
    
    firstName:"King",
    lastname:"Prince",
    age:17,
    skills:['Python'],
    canSpeakEnglish:false,
    // address:{
    //     office:"Abc"
    // }
    
},
{
    
    firstName:"Amaka",
    lastname:"Chinedu",
    age:34,
    skills:['JAVA','CSS'],
    canSpeakEnglish:true
    
}
]


// //access he object
// console.log(person);
// //print fistname
// console.log(person.firstName);
// //
// console.log(person.skills[2]);
// //loop obj

// for(let pp in person){
//     console.log(pp +"=>"+person[pp])
// }

// for(let i =0; i<person.skills.length;i++){

//     console.log(person.skills[i]);
// }
//console.log(person)
// for(let i=0; i<person.length;i++){
//     let key =  person[i];
//     console.log(person);
// }

// if("lastname" in person){
//     console.log(person.lastname)
// }
// delete person.canSpeakEnglish
// console.log(person);

// for(let obj in person){

//     console.log(obj);
// }

// console.log(person[0]);

// for(let i= 0 ; i<person.length;i++){
//     let val =  person[i]

//     if(val['firstName'] === 'Michael' ){
//       break
//     }else{
//         console.log(val)
//     }
// }

console.log(Object.values(person));