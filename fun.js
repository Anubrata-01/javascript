//call method


let me={
    name:"Anubrata",
    age:23,
    height:5.7,
    weight:60,
    hello:function(){
        return this.height;
    }
   
    
}
document.write(me.hello());

let me2={
    name:"Chanda",
    age:25,
    height:5.7,
    weight:70,
    // hello:function(){
    //     return this.height;
    // }
   
    
}
document.write(me.hello.call(me2));
let me3={
    name:"Anirban",
    age:45,
    height:6.7,
    weight:80,
    // hello:function(){
    //     return this.height;
    // }
   
    
}
// document.write(me.hello.call(me3));
// //another approch to access object
// const fr={
//     name:"apple",
//     weight:250,
//     color:"red"
// }
// let print=function(state,country){
//     document.write(this.name+" "+state+" "+country );
// }
// print.call(fr,"Delhi","India");

// //apply method
// print.apply(fr,["Delhi","indonesia"]);//in apply method we can pass arguments as a list of items
// //Bind
// let my=print.bind(fr,"Delhi","India");
// my();
// //object destructering
// document.write(fr.name+"<br>");//this is the traditinal way
// //modified way
// const {color,name,weight} =fr;
// document.write(weight+"<br>");

//higher order function
function hello(a){
    return a;
}
function hi(){
    document.write("Anubrata");
}
hello(hi());//calback
//
function add(){
    function sum(a,b){
        let c=a+b
        return c;
    }
    return sum(6,9);
}
const ad=add();
add();//funtion returning a funtion
