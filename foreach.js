const my={
    name:"Anubrata",
    age:23,
    address:"Khejuri",
    car:["Volvo","BMW","Bike"]
    
}
// function fun2(name){
//     console.log('name is ${name} age is ${age}');

// }

const details=[
    {fname:"Mrinal",Lname:"Kar",age:29},
    {fname:"Anubrata",Lname:"Chanda",age:23},
    {fname:"Anirban",Lname:"Chanada", age:27},
    // 2,3,4,5

]
// console.log(details[details.fname]);
// details.forEach((name)=>{
//     console.log(name.fname);
// })

// details.forEach((name)=>{
//     console.log(name.fname,name.age,name.Lname);
// });


//Map Method
// const num=[2,5,7,3,1];
// const sqaure=function(number){
//     return number*number;
// }
// const sq=num.map(sqaure);
// console.log(sq);
const arr=[3,5,8,2];
console.log(arr[1]);
const add=(num)=>{
    return num+num;
}
const my2=arr.map(add);
console.log(my2);