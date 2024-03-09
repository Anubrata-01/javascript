let s1="Anubrata";
let s2="Chanda";
let s3=s1+s2;
document.write(s3 + "<br>");
document.write(s3.length + "<br>");
let str1="Hello hoe are \"you\" ?";//The backslash (\) escape character turns special characters into string characters
document.write(str1 + "<br>");
let txt='it\'s alright.';
document.write(txt + "<br>");//The sequence \'  inserts a single quote in a string:
document.getElementById("a1").innerHTML = (s1==s2);
//string methods


//slicing
let string="Anubrata Chanda";
// let str3=string.slice(2,7);
// document.write(str3 + "<br>");
let str4=string.slice(1,-3);
document.write(str4 + "<br>");

//substring
let st1="apple , banana";
document.write(st1.substring(2,7) + "<br>");


//substr
let sr1="Apple,Bnana,kiwi";
document.write(sr1.substr(3,7));


//replace
let a="Anubrata canhada";
document.write(a.replace("canhada","Chanda"));//The replace() method replaces a specified value with another value in a string

//toUpperCase
document.write(a.toUpperCase() + "<br>");
document.write(a.toLowerCase() + "<br>");

//concat Method

let a1="ANubrata";
let b1="Chanda";
document.write(a1.concat(" ",b1, " hello") + "<br>");
//trim Method

let a2="  Anubrata Chanda  ";
document.write(a2.trim() + "<br>"); 
document.write(a2.trimEnd() + "<br>");
document.write(a2.trimStart()); 

//charAt method
a3=" jnsdcnfd ";
document.write(a3.chartAt(5));

