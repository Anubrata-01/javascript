//intro to array:collection of similar data types in ordered
//Array Creation
let ar=["car","bike","ship"];
let number=[1,2,3,4,5]
document.write(number[0]);
//array accesing
document.write(ar[2]);
document.write(ar[0]);
//in javascript array is mutable,we can change the value of  any index's in array
number[3]=7;
document.write(number[3]);
document.write(number);
//in javacript array is object

document.write(typeof(ar) + "<br>");
//using Array.isarray() method we can check that array is a array
ar.push("aroplane");
document.write(ar + "<br>");
document.write(Array.isArray(ar) + "<br>");
let ar1=ar.pop();
document.write(ar1 + "<br>");
let array=[ar1,"BMW"];
document.write(array + "<br>");
//unshift:it is used to add element at start of an array
number.unshift(0);
document.write(number + "<br>");
//shift:it is used to remove element from start of an array
number.shift();
document.write(number);

//premitive data types vs reference data types
// array clone
 let arr2=[1,3,,5,6];
 let arr3=arr2;
 document.write( arr2 == arr3);
//  let arr4=arr2.slice(0);
//  document.write(arr2!==arr4);
 let arr5=[].concat(arr2);
 document.write(arr5 + "<br>");
 let arr6=[...arr5];//spread operator
 document.write(arr6);
//Array destructuring
