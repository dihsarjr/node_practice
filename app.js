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
// create a object

const person={

  name: "rashid",
  age: 30,   
  // function
  seyName(){
      console.log("hi my name is "+this.name);
  },
  // function
  seyAge: function(){
    console.log("hi my name is "+this.age);
}
};

// arrays

const hobbies = ["footbal","programing"];


// add a elament to arry

hobbies.push("rojo");

//for loop

for(let hobby of hobbies){
    console.log(hobby)
}

//to map 
const data = hobbies.map(hobby1=>"hoby: "+hobby1);

//spred oprator
const copy  = ["dart",...hobbies];

console.log(copy);


// rest 

const ney = (...neys)=>{
    return neys;
}

console.log(ney(1,2,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,2,1,2,2,1,));





console.log(user(namer,age,areYouAProgramer));
console.log(userData("Joma"));