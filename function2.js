// function mybirthday()
// {
//     document.write("heloo" + "<br>");
// }
// mybirthday();
// function fact(number)
// {
//     let fact=1;
//     for(let i=1;i<=number;i++)
//     {
//         fact=fact*i;

//     }
   
//     document.write("the factorial of " + number + " is :" + fact + "<br>");
// }
// fact(7);
// const odd=function(number)
// {
//     if(number%2 == 0)
//     {
//         document.write("even number" + "<br>");

//     }
//     else
//     {
//         document.write("odd number" + "<br>");
//     }
// }
// let m=odd(5);
// document.write(m + "<br>");
// //arrow function
// let sum=(n1,n2)=>{document.write(n1+n2)};
// sum(4,5);
// // functioms inside function
// // const my=()=>
// {
//     const mul=(n1,n2)=>
//     {
//         return n1*n2;
//     }
//     const sub=(n3,n4)=>
//     {
//         return n3-n4;
//     }
//     document.write(mul(3,4) + "<br>");
//     document.write(sub(7,5) + "<br>");

    
// }
// my();
//lexical scope:a var defined inside a function cannot access outside from the function
// const me=()=>
// {
//     const v1=4;
//     const sum2=(v2)=>
//     {
//         // let v1=5;
//         let v3=7;
//         document.write(v3);//block scope
//         return v1+v2+v3;
     
//     }
//     // document.write(v3);
//     document.write(sum2(6) + "<br>");
// }
// me();
// block scope vs function scope
//let and const are block scope:if we declared a variable with let or const keyword inside a block then we cannot acccess those variables from outside of the block
//var is function scope

//default parameters

// const add=(a,b)=>
// {
//     let b=1;
//     let s= a+b;
//     document.write(s);
// }
// add(5);
//rest parameter
// const fun3=(a1,b1,c1,...d1)=>
// {
//     document.write("a1 is: ", a1);
//     document.write("b1 is: ", b1);
//     document.write("c1 is: ", c1);
//     document.write("d1 is: ", d1);

// }
// fun3(2,3,4,5,8,97,0);
// //

// call method
// const ob2={
//     name:"Anirban",
//     age:26,
//     gender:"male",
//     designation:"Project Manager",
//     // gret:function(){
//     //      return this.name;
//     // }insted of calling the function we use call method 
// }
// ob.gret.call(ob2);
// document.write(gret.call(ob2 ));
//Another approch to acces the obejcts properties
/ 
// access();//we canot acces the obejet value in tis way necasue this a generic function which is defined outside the object and the this keyworkd is currently referencing the global object not the particular object
// document.write(access());

// document.write(access.call(car));
// console.log(access.call(car));
