b//variables are container used to store data
//There are 4 ways to declare variable:follows using let,var,const,nothing
// var x=4;
// var y=7;
// var z=x+y;
// document.write(z);
//if we think the value of var can be changed then declare the variable with let
// let a=10;
// let b=15;
// let c=a+b;
// document.write(c + "</br>");
//we can declare many variables with in one statement;
// let m = 10, n = 15, d = 25;
// const l=m+n+d;
// document.write(l + "</br>");
;
// let a1;
// document.write((a1));
// document.write(typeof(l));
//we only re-declare variable declared with var,but we cant re-declare a variable declared with let or const
//variable defined with let have block scope,means a varible defined inside a {} block cannot be accesed from outside of block
// {
//     let x = 2;
//   }
  // x can NOT be used here
// let x = "John Doe";

// let x = 0;

// SyntaxError: 'x' has already been declared
// The const keyword was introduced in ES6 (2015).

// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error
// When to use JavaScript const?
// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp
// Constant Objects and Arrays
// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object
//Arithmetic operator

// let v=4;
// let o=8;
// let t=v*o;
// document.write(t);
//In javascript there are 8 datatypes-string,number,bigint,boolean,undefined,null,symbol,object
// Numbers:
// let length = 16;
// let weight = 7.5;

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// // Booleans
// let x = true;
// let y = false;

// // Object:
// const person = {firstName:"John", lastName:"Doe"};

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object:
// const date = new Date("2022-03-25");
// let x=17+5+"Anubrata";
// document.write(x + "</br>");
// let y="Chanda" + 5 + 6;
// document.write(y);
//function is a block of code which is used to perform some task when something invokes it
// Why Functions?
// You can reuse code: Define the code once, and use it many times.

// You can use the same code many times with different arguments, to produce different results.
//syntax:function functionname(args)
// function myname(){
//   let x="Anubrata Chanda";
//   return x;
// }
// document.write(myname() + "</br>");
// function add(a,b){
  
//   let m,n;
//   m=a;
//   n=b;
//   o=m*n;
//   return o;
// }
// document.write(add(44,5));
// const a=add(44,5);
// document.write("The multiplication is: "+ a );
//Arrow function
// Anu=()=>{
//   return "hello world";
// }
// document.write(Anu()+"</br>");
div=(q,p)=>{
  // let m;
  // let n;
  // m=q;
  // n=p;

  return q*p;
}
div(5,1);