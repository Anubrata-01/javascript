const selector=(csssel)=>{
   return document.querySelector(csssel);
}

let contain=document.querySelector(".container");
let parent=selector(".parent");
let child=selector(".child");
let list=selector(".list");
contain.addEventListener("click",()=>{
    console.log("i am container");
})
parent.addEventListener("click",()=>{
    console.log("i am parent");
})
// child.addEventListener("click",()=>{
//     console.log("i am child");
// })
// list.addEventListener("click",()=>{
//     console.log("i am list");
// })

//event capturing
contain.addEventListener("click",()=>{
    console.log("i am container capture");
},true);
parent.addEventListener("click",()=>{
    console.log("i am parent capture");
})
child.addEventListener("click",()=>{
    console.log("i am child capture");
})
list.addEventListener("click",()=>{
    console.log("i am list capture");
})
// console.log(contain);
// console.log(p);

// let parent=document.querySelector(".parent");
// let child=document.querySelector(".child");
// let list=document.querySelector(".list");
// asynchronous javascript
// function sum(a,b){
//     console.log(`a is${a} and b is ${b}`);
//     console.log(`sum is: ${a+b}`);
// }
// // sum(3,4);
// // console.log("hii");
// function my(){
//     console.log("geeee")
// }
// setTimeout(my,4000);
// setTimeout(function sum(a,b){
//     console.log(`a is ${a} and b is${b}`);
// },3000)
// console.log("Hello Anubrata");

//setinterval

// setInterval(my,200);
//calbacks
// function hello(callback){
//     console.log("hi1");
//     callback();
// }
// function dis(){
//     console.log("i am anubrata");
// }
// hello(dis);
// //higher order function
//  function sum(a,b){
//     function display(){
//         console.log(a+b)
//     }
//     // return display(){
//     //     console.log(a+b);
//     // }
//     // return function helo(){
//     //     console.log(a+b);
//     // }
//     return display();
//  }
//  sum(3,4);
 //
 
 function num(r,s,callback){
    return `sum is ${r+s+callback}`;
 }
  //
  function sum(a,b,c){
    return a+b+c;
 }
 const m=sum(1,2,3)
 const m1=num(4,6,m);
console.log(m1);
// m(1,2,3);
//callback hell
setTimeout(()=>{
    console.log("hii1");
    setTimeout(()=>{
        console.log("hii2");
        setTimeout(()=>{
            console.log("hii3");
            setTimeout(()=>{
                console.log("hii4");
                
            },4000)
        },3000)
    },2000)
},1000)

//pyramid of doom
