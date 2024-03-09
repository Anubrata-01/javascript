//arrays are good but not sufficient for real world data
//objects store key value pair
//object dont have ind

//syntax
//const object name={key:"value",key:"value",};
const car={name:"volvo",color:"white"};
document.write(car.name);//accesing object properties using dot(.) operator
console.log(car);
const person={
    name:"Anubrata",
    age:22,
    "hobbie":["politics","movies","cricet"],
    "ph no":8637094381
}
console.log(person);
document.write(typeof(person));
//how to add key value pair to existing object

person.gender="male";
console.log(person);

//another ways to access object properties
document.write(person["name"] + "<br>");//using braket[]

//difference beetween dot and braket notation
document.write(person["ph no"]);
person.email="iamvk473@gmail.com";
document.write(person.email);
console.log(person + "<br>");

//object iteration
//  const obj={
//     name:"Anubrata",
//     age:22,
//     "ph no":8637094381
//  }
// for(let i in obj){
//     document.write(obj[i] + "<br>");
// }
// document.write(obj.name);//obj["properties name"]
//delete objects properties
// delete obj["ph no"];
// document.write(obj["age"] + "<br>");
//Nested objects

const Anu={
    name:"Sucharita",
    age:21,
    "ph no":123456789,
    habits:{
        name:singing,
        name2:cheating,
        name:"playing with boys heart"
    }
}
document.write(Anu["name"] + "<br>");
