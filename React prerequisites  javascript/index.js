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



//spread operator using for make a copy of object to another object and 
//here changes only a value to person4
//it can work the same way in arrays also
const person3 = {
    name:"Rambo",
    age:2,
    isMarried:true,

}
const person4 = {...person3,isMarried:false}
console.log(person3)
console.log(person4)

//we are taking dogs name and putting a copy to dogsneeded and adding a new value to it cooper
const Dogs =['rubi','jubi','juno']

const DogsNeeded = [...Dogs,"cooper"]


//Next is three functions of javascript array
/**
.map()
.filter()
. reduce()

 */


let pets = ['rado','lado','sedo'];
let anotherPets =['rocky','lucky'];

//pets.push("mango") //Add new value to last
//pets.pop() Delete the last value
//pets.unshift("hello") Add new value to front
//pets.shift()// Delete the first value


//To join two arrays and to put a another variable
// const allPets = pets.concat(anotherPets);
// console.log(allPets)

//splice
//The first index which will be the changes will begin
//The next index is optional how may elements need to be deleted
// pets.splice(0,1,"Rado lado replaced")
// console.log(pets)


// pets.splice(1,2)//removes elements from first index and second
// console.log(pets)


//Slice returns a shallow copy of a portion of an array.
// const slicedPets = pets.slice(0,2)
// console.log(slicedPets)


//splice
console.log(pets,'==pets')
pets.splice(0,1,"added first element")
console.log(pets,"==replaced first element and added new one");

const numbers = [10,20,30,40];


/*
map(): This method creates a new array by 
applying a function to each element in the original array.
*/

// if did not put  brackets after => {} don't need to give return  

numbers.map((current,index,Arrayfull)=>
    console.log(current,index,Arrayfull)
    
)

//forEach(): Executes a provided function once for each array element.
const num = [1, 2, 3];
num.forEach(currNum => console.log(currNum,"current numbers")); // Logs each number (1, 2, 3)

//but if we give {} need to give return or it will not work sometimes
// numbers.map((current,index,Arrayfull)=>{
//    return console.log(current,index,Arrayfull)
    
// })

const dobuleValue = numbers.map(current=>
    current*2

)

console.log(dobuleValue,"dobule value")

const filterValue = dobuleValue.filter(curr=>
    curr%2===0)

    console.log(filterValue," even values")


//reduce

const reducedValue = dobuleValue.reduce((acc,curr)=>
    acc+=curr
    
    );

    console.log(reducedValue,"total values of the array is");