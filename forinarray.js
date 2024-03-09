//for in array
let array=["Anubrata","Subhadip","Manab","Mir","Dip"];
for(let i=0;i<array.length;i++)//array.length is used to calculate the length of an array
{
    document.write(array[i] +"<br>");
    // document.write(array[array.length-2]);
}

//for of loop over an array

const array4=["Monday","Tuesday","Wednessday","Thrusday","Friday","Satarday","Sunday"];
//array clone
const ar4=[...array4];//using spread operator
document.write(ar4 === array4 + "<br>");
const ar5=[].concat(array4);
document.write(ar5 + "<br>");
document.write(ar5.pop() + "<br>");
document.write(ar5.push("Month") + "<br>");
document.write(ar5 + "<br>");
document.write(ar5.shift() + "<br>");
document.write(ar5 + "<br>");
document.write(ar5.unshift("Monday") + "<br>");
document.write(ar5 + "<br>");
document.write(ar5.length + "<br>");
document.write(ar5[6]="Sunday" + "<br>");
// document.write(ar5.splice() + "<br>");
for(let i=0;i<ar5.length-1;i++)
{
    document.write(ar5[i] +"<br>");
}
//while loop
// let i=0;
//  while(i<ar5.length)
//  {
//     document.write(ar5[i]);
//  }
//for of loop

const array5=[1,2,3,4,5,6];
for(let a of array5)
{
    document.write(a +"hello" + "<br>");
}

//for in loop
const a5=[9,6,3,7,8];
for(let index in a5)
{
    document.write(a5[index] + "<br>");
}
const fruit=["Apple","banana","Orange","Grapes"];
document.write(fruit +"</br>");
document.write(fruit[1]+"</br>");
for(let i=0;i<fruit.length;i++)
{
    document.write(fruit[i]+"</br>");
    document.write(fruit[fruit.length-1]+"</br>");
}
const a=[];//Another approch of array creation
a[0]="ANubrata"
a[1]="Chanda";
a[2]="Anirban";
document.write(a)+"</br>";
//Another way to create array with the new keyword
// const arr=new Array["subha","sintu","dev"];
// document.write(arr +"</br>")
//Chnaging an array element
fruit[2]="Guava";
document.write(fruit+"</br>");
//how to clone an array
const b=[...fruit];//using spread operator
document.write(b+"</br>");
const arr1=[].concat(a);
document.write(arr1);
document.write(b === arr1 + "</br>");
document.write(arr1.pop()+"</br>");



document.write(arr1.push("suva")+"</br>");


///////  String/////////
// let s1="Anubrata";
// let s2="Chanda";
// let s3=s1+s2;
// document.write(s3 + "<br>");
// document.write(s3.length + "<br>");
// let str1="Hello hoe are \"you\" ?";//The backslash (\) escape character turns special characters into string characters
// document.write(str1 + "<br>");
// let txt='it\'s alright.';
// document.write(txt + "<br>");//The sequence \'  inserts a single quote in a string:
// document.getElementById("a1").innerHTML = (s1==s2);
// //string methods//


//slicing
// let string="Anubrata Chanda";
// // let str3=string.slice(2,7);
// // document.write(str3 + "<br>");
// let str4=string.slice(1,-3);
// document.write(str4 + "<br>");
// let a="Subhadip Pussylover";
// document.write(a.slice(9,12));

//substring
let st1="apple , banana";
document.write(st1.substring(4,-7) + "<br>");
document.write(st1.slice(6,13));
document.write(st1.split(4,7));


// //substr
// let sr1="Apple,Bnana,kiwi";
// document.write(sr1.substr(3,7));


// //replace
// let a="Anubrata canhada";
// document.write(a.replace("canhada","Chanda"));//The replace() method replaces a specified value with another value in a string

// //toUpperCase
// document.write(a.toUpperCase() + "<br>");
// document.write(a.toLowerCase() + "<br>");

// //concat Method

// let a1="ANubrata";
// let b1="Chanda";
// document.write(a1.concat(" ",b1, " hello") + "<br>");
// //trim Method

// let a2="  Anubrata Chanda  ";
// document.write(a2.trim() + "<br>"); 
// document.write(a2.trimEnd() + "<br>");
// document.write(a2.trimStart()); 

// //charAt method
// a3=" jnsdcnfd ";
// document.write(a3.chartAt(5));
const arr2=["virat","Rohit","Surya","Bumrah"];
const ar2=["Gill","Ishan","Siraj"];
const ar3=arr2.concat(ar2);
document.write(ar3);
document.write(ar3.sort() + "</br>");
document.write(ar3.reverse()+"</br>");
document.write(ar3.toString()+"</br>");
document.write(typeof(ar3)+"</br>");

