
// var firstname="ANubrata";//variable declearation//
// document.write(firstname);
// firstname="Chanda";
// document.write(firstname);
//rules for naming variables
//you cannot start variable name with number
//we can use onlu $ or Underscore symbol
//Tou cannot use space
// var fi_name="anirban"
// document.write(fi_name);
// let lname="Chanda"//let keyword
// document.write(lname);
// let lname="cHanda";
// document.write(lname);
//constant
// const a=5;
// document.write(a);
// a=9;
// document.write(lname);//we cannot change tha value of constatnt
//string indexing
let ani="Anirban";
document.write(ani.length);
document.write(ani[6]);
//string methods
//trim()
let b="    anubrata    ";
document.write(b.length);
document.write("<br>");
let a=b.trim();
document.write( a.length );
document.write(a);
//toUppercase
 a=a.toUpperCase;
document.write(a);
document.write("<br>");
//slicing
let m="Anubrata Chanda ";
let n=m.slice(0,6);
document.write(n);
document.write("<br>");
//typeof operator
//6 types of data types
//string,number,boolean,undefined,null,Bigint,synbol
let age=23;
let name="Anubrata";
document.write(typeof(age) + "<br>");
document.write(typeof(name));
// sage=String(age);
age=age +  "";
document.write(typeof(age) + "<br>");
name=Number(name);
document.write(typeof(name) + "<br>");
//string concatenation
// let str1="ANubrata";
// let str2="Chanda";
// let str3=str1 + " " + str2;
// document.write(str3 + "<br>");
// //template string
// let ag=23;
// let fname="Anubrata";
// let str4="My name is " + fname + " and my age is" + ag ;
// document.write(str4 + "<br>");
// //undefined data types
// let ln;
// document.write(typeof(ln) + "<br>");
// //null
// let my= null ;
// document.write(typeof(my) + "<br>");
// //bollean 
// let n1=4;
// let n2="4";
// document.write(n1 < n2 + "<br>");
// document.write(n1 === n2 + "<br>");
// document.write(n1 != n2 + "<br>");
