//ES5 Global Constants

const PI = 3.14;

//ES2015 Global Constant

const VALUE_OF_PI = 3.14;

// What is the difference between var and let?
The main differences between the var and let keywords is that let cannot be redeclared and differently from var 
let creates block scope, while var creates function scope. It is also possible to access a hoisted variable with var.

// What is the difference between var and const?
The main differences between the var and const keywords is that const cannot be reassigned or redeclared which is not the case with var. 
When it comes to scope rules, var creates a function scope while const creates block scope.
It is also possible to access a hoisted variable with var.

// What is the difference between let and const?
The let keyword can be reassigned.

// What is hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of 
whether their scope is global or local