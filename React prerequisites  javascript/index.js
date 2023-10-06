//normal function
//export default
 function sum(){
    const num1 = 10;
    const num2 = 30;
    return console.log(num1+num2,"==normal function");
}

sum();

//arrow functions

//export 
const DoSum = () =>{
    const num1 = 40;
    const num2 = 50;

    return console.log(num1+num2,"==arrow function")
}

DoSum();



//


// in java script we pass the name of  the function in button
//but in react it allows to use anonymous function
//it recommeded in some cases
// {/* <button onClick={()=> console.log("hello")}>
//     click 
// </button> */}

 //Ternary operator

 //without ternary need to write like this

 if(true){

 }
 else{

 }

 //with ternary
 let age = 10;
 let name ='abi';

//  if(age>10){

//     name="abi"
//  }else{
//     name ="jack"
//  }

/*
 && and || are not ternary operators, these are logical operators. It's a really clever way to use them, but it's important to 
 know why exactly they work that way and that if the condition
 isn't or is (&& or ||) satisfied the variable will be assigned a boolean value (false / true) 
*/
//we saying like this if age is > 9 then then set perdo name to names variable
let names = age > 9 && "Perdo"
console.log(names)

//this works in other way it's not give person variable ramu value because it's condition is true 
// so it returns true value but if the condition is not true it will return ramu
let person = age > 7 || "ramu"
console.log(person,'==person value')


                //if        then       else                  
let nameDecide = age >= 10 ? 'Gpaedo': 'Lpardo';
console.log(nameDecide)

//example in react

// const component = () =>{
//     return age >= 10 ? <div> gperdo </div> :<div>Lpardo</div>
// };


//objects 

const person1 ={
    name:"abay",
    age:20,
    isMarried:false,
};

//imagine if we want to represent specific values inside this object
// const NamePerson1 = person1.name;
// const AgePerson1 = person1.age;
// const MarriedPerson1 = person1.isMarried;

// how we can do the same using destrcturing property of object
//we take any key value pair data to a variable
//NOTE
/*
When you destructure an object, the variable names inside the curly braces {} should match the property 
names of the object you are destructuring.
 If you want to use different variable names, you need to specify the new names using a colon 

*/

const {name:namep1,age:agep1,isMarried} =  person1
console.log(namep1)
