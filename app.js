// javaScript play 

// declace a veriable like in javaScript
const  namer = "rashid";
var age = 24;
var areYouAProgramer= true;


// let and const 

// let 
let userAge = 26;
//const
const userName = "rashid";

userAge = 30;

//arrow function

const userData = (userName)=>{
    return userName;
};
// if you have only one statement and also you have only one argumet you no need to add "()" 
// only one argument
const addRandom = a => a+2;
// more than one argument  
const add = (a,b)=>a+b;




// function

function user(names,age,programer){
    userData("rashid");
    return("name is " + names+" age is "+age+" are you a programer " + programer);

}



console.log(user(namer,age,areYouAProgramer));
console.log(userData("Joma"));