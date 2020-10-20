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



// 

const todos = [

    {
    id: 1,
    text: 'take out the trash',
    isCompleted: true
    },  
    {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
    },  
    {
    id: 3,
    text: 'dentist appointment',
    isCompleted: false
    }
];

// console.log(todos);

// console.log(todos[1]);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// For loop

for(let i = 0; i <= 10; i++){


    // backticks are used here
    console.log(`For loop number: ${i}`);

}


// While loop

let i = 0;
while(i < 10) {

    console.log(`While loop number: ${i}`);
    i++;
}


// For Of loop

for (let todo of todos){
console.log(todo);

}


// High Order Array Methods

// forEach - loops through

todos.forEach(function(todo){

    console.log(todo.text);
    
});

// Map - allow us to create a new Array from an Array 

const todoText = todos.map(function(todo){
    return todo.text;

});

console.log(todoText);


// Filter - create a new Array based on a condition

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);
