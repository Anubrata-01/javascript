// const obj3={//objects creation in nested form
//     name:"manab",
//     age: 23,
//     "ph no":123456789,
//     "hobies":{
//         hobie1:"singing",
//         hobie2:"gaming",
//         hobies:"loving"
//     }

// }
// console.log(obj3.name);
// document.write(obj3.age);
// document.write(obj3["name"] +"<br>");//inside the objects all the elements are by defaults objects
// obj3.gf="Grace";
// document.write(obj3);
// for(let a in obj3){
//     document.write(a+"<br>");
// }
//object destructering
// let a3=obj3.name;
// document.write(a3);
// let a4=obj3.age;
// document.write(a4);
// // there are new approch to destructer the objects
// let{name: var1,age: var2}=obj3;
// document.write(var1);
// const ar=[
//     {
//         id:1,
//         name:'Anu',
//         gender:"male"
//     },
//     {
//         id:2,
//         name:"Chanda",
//         gender:"female"
//     }
    
// ]
// // for(let i of ar){
// //     document.write(i.id);
// // }
// const [{name}]=ar;
// document.write(name);
// function operation(){
//     function add(a,b){
//         return a+b;
//     }
//     const mul=(d,e)=>{
//         return d*e;
//     }
//     // return add(4,5);
//     return mul(5,6);
// }
// document.write(operation())+"<br>";
// const print=(name)=>{
//     return name;
// }
// const hello=()=>{
//     document.write("i am ANubrata");
// }
// print(hello());//This is an example of lexicle scope
// const fun2=()=>{
//     let v=" Chanda";
//     const fun3=()=>{
//         let v1="chnaad";
//         document.write(v);
//     }
//     fun3();
// }
// fun2();
//default para,eter
// const div=(a,b)=>{
    
//     return a/b;
    
// }
// div(15,5);
const my={
    name:"Anubrata",
    age:23,
    address:"Khejuri",
    car:["Volvo","BMW","Bike"]
    
}
console.log(my["name"]);