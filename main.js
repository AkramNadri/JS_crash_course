// const name = 'Akram, Pardis, Ak, P';
// const age = '36';

// console.log(name);
// console.log(age);

// console.log('Hi my name is ' + name + ' and i am ' + age + ' years old' );

// console.log(name.toUpperCase());


// console.log(age.length);

// console.log(name.split(','));


// // Arrays - variables that hold multiple values

// const fruits = new Array('apple, banana, mango');

// fruits[1] = 'pear';

// fruits.push('orange');

// fruits.values();

// console.log(fruits);

// console.log(fruits[0]); 

// // check to see if something is an array
// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('apple'));



// // Object Literals

// const person = {
//     firstName: 'Akram',
//     lastName: 'Nadri',
//     age: 36,
//     hobbies: ['basketball', 'programming'],
//     address: {
//         street: 'Solaris',
//         city: 'Ottawa',
//         province: 'Ontario'
//     }
// }

// console.log(person);

// console.log(person.hobbies[1]);

// console.log(person.address.city);

// const {firstName, lastName, address: {city}} = person;

// console.log(firstName);

// person.email = 'Ak@gmail.com';

// console.log(person);



// // 

// const todos = [

//     {
//     id: 1,
//     text: 'take out the trash',
//     isCompleted: true
//     },  
//     {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true
//     },  
//     {
//     id: 3,
//     text: 'dentist appointment',
//     isCompleted: false
//     }
// ];

// // console.log(todos);

// // console.log(todos[1]);

// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);


// // For loop

// for(let i = 0; i <= 10; i++){


//     // backticks are used here
//     console.log(`For loop number: ${i}`);

// }


// // While loop

// let i = 0;
// while(i < 10) {

//     console.log(`While loop number: ${i}`);
//     i++;
// }


// // For Of loop

// for (let todo of todos){
// console.log(todo);

// }


// // High Order Array Methods

// // forEach - loops through

// todos.forEach(function(todo){

//     console.log(todo.text);
    
// });

// // Map - allow us to create a new Array from an Array 

// const todoText = todos.map(function(todo){
//     return todo.text;

// });

// console.log(todoText);


// // Filter - create a new Array based on a condition

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);




// // Conditionals 

// const x = 4;
// const y = 10;

// // will just check datatype
// if(x == 1){
//     console.log('x is 10');
// }

// // match dataype and value 
// if(x === 10){
//     console.log('x is 10');
// } else if(x > 10) {
//     console.log('x is greather then 10');
// } else {
//     console.log('x is less than 10');
// }


// //   Or || only one condition needs to be true
// if(x > 5 || y > 10){
//     console.log('x is more then 5 or y is more then 10');
// } 


// //   And && both conditions must be true
// if(x > 5 && y > 10){
//     console.log('x is more then 5 or y is more then 10');
// } 

// // Ternary operator - ? Than, if color = z is > 10 THAN ...

// const z = 10;
// const color = z >= 10 ? 'red' : 'blue';

// console.log(color);


// switch(color){

//     case 'red':
//         console.log('color is red');
//         break;

//     case 'blue':
//         console.log('color is blue');
//         break;
    
//     default:
//         console.log('color is not Red or Blue');
//         break;
// }


// // Functions

// function addNums(num1, num2){
//     return num1 + num2;

// }

// console.log(addNums(2,3));

// const addNums2 = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addNums2(6,4));



// // Can use => in one line without return or curly braces
// const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums3(3, 3));




// const addNums4 = num1 =>num1 + 5;
// console.log(addNums4(2));



// // OBJECT ORIENTED PROGRAMMING - ES5

// // Constructor function

// function Person(firstName, lastName, Dob){

//     // Create objects
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.Dob = new Date(Dob);
//     this.getBirthYear = function() {
//         return this.Dob.getFullYear();
//     }

//     this.getFullName = function(){
//         // use template literal here
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Using Prototype
// Person.prototype.getBirthYear = function() {
//     return this.Dob.getBirthYear();
// }

// // using ${} for multiple 
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;

// }

// // Instantiate object

// const person1 = new Person('Akram', 'Nadri', '5-1-1984');
// const person2 = new Person('Pardis', 'Honarvar', '5-1-1988');

// console.log(person1);
// console.log(person2.firstName);
// console.log(person2.Dob);
// console.log(person1.getBirthYear());

// console.log(person1.getFullName());

// // Console.log Prototype

// console.log(person2.getFullName());


/******************************************************/
// Classes were added to ES6
// Class

class Person1 {

    constructor(firstName, lastName, Dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.Dob = new Date(Dob);
    }

    getBirthYear(){
        return this.Dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Akram', 'Nadri', '5-1-1984');
const person2 = new Person('Pardis', 'Honarvar', '5-1-1988');