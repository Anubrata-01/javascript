// function hello(name){
//     console.log("hello",name);

// }
// function dis(callback){
//     console.log("i am in this functon")
//     callback("Anubrata");//hello function is called
 
// }
// const m=dis(hello);
// // m();
//
// function add(){
//    return ()=>{
//     console.log("hello")
//     }
// }
// const m2=add();
// m2();
// const m1=[
//     {"fname":"Anubrata","age":20},
//     {"fname":"Anirban","age":33},
//     {"fname":"Anu","age":43},
// ]
// // m1.forEach((name)=>{
// //     console.log(name.age);
// // })
// const m2=m1.map((ag)=>{
//     return ag.age;
// });
// console.log(m2);
// const m3=m1.filter((age)=>{
//     return age.age%2 ===0
// })
// console.log(m3);
// const m4=m1.reduce((totalage,currentage)=>{
//     return totalage+currentage.age;
// },0);
// console.log(m4)
// const my={
//     fname:"Anubrata",
//     age:23,
//     about:()=>{
//         return this.age;
//     },
//     Sh(){
//         return this.fname//this is the shorter function syntax
//     }
// }
// const m=my.about();
// // console.log(m);//this keyword is not allowed in arrow function
// console.log(m);
// const m2=my.Sh();
// console.log(m2)
//object creation using funtion
// const obejctfun={//methods storing in different object
//     box:function(){
//         console.log("My name is",this.name + " age is ",this.age
//         );
//     },
//     show:function(){
//         console.log("My id is",this.id + " address is",this.address)
//     }
// }
// function user(name,age,id,address){
//     const user1=Object.create(user.prototype);
//     user1.name=name;
//     user1.age=age;
//     user1.id=id;
//     user1.address=address;
//     // user1.about=obejctfun.box;//box mehod is called
//     // user1.about1=obejctfun.show;//show method is called
//     return user1;
// }
// user.prototype.box=function(){
//     console.log("My name is",this.name + " age is ",this.age
//     );}
// user.prototype.show=function(){
//     console.log("My id is",this.id + " address is",this.address);
// }

// const m1=user("suva",25,222,"contai");
// const m2=user("Anubrata",23,221,"Khejuri");
// const m3=user("Manab",25,"220","Kolkata");
// console.log(m1);
// console.log(m1.address);
// m1.box();
// user1.show();
// m2.show();
// m3.about();
// m3.about();
//Function prototype

// function hi(){
//     console.log("hi");
// }
// console.log(hi.prototype);
// hi.prototype.name="anu";
// console.log(hi.prototype.name)
// function use(name,age){
//     this.name=name;
//     this.age=age;
// }
// const use1=new use("anu",23);
// console.group(use1); 
// function create(name,age,id){
//     const obj={};
//     obj.name=name;
//     obj.age=age;
//     obj.id=id;
//     obj.about=function(){
//         return this.name;
//     }
//     return obj;
// }
// const m=create("Anubrata",24,222);
// // console.log(m.about);
// const a=m.about();
// console.log(a);
// //2nd way
// const method={
//     salary(){
//         console.log(this.salary);
//     }
// }
// function create2(fname,age,id,salary){
//     const u2=Object.create(method);
//     u2.fname=fname;
//     u2.age=age;
//     u2.id=id ;
//     u2.salary=salary;
//     // u2.show=method.salary;
//     return u2;
    
// }
// const m3=create2("suva",25,222,29003);
// // console.log(m3.show());
// // console.log(m3.show);
//
// m3.salary();
function create3(fname,age,id,salary){
    const ob2=Object.create(create3.prototype);
    ob2.fname=fname;
    ob2.age=age;
    ob2.id=id;
    ob2.salary=salary;
    return ob2;
}
create3.prototype.sal=function(){
    return this.salary;
}
// const m4=create3("manab",25,30000,333333);
// console.log(m4.fname);
const m1=create3("manab",24,444,30000);
console.log(m1);
console.log(m1.sal());
//4th wy wih new keyword
function create4(fname,age,id,salary){
    // const ob2=Object.create(create3.prototype);
    this.fname=fname;
    this.age=age;
    this.id=id;
    this.salary=salary;
    this.show=function(){
        return `my name is ${this.fname}  and  my age is ${this.age}`
    }
    
}
const m6=new create4("chnda",23,111,303030);
console.log(m6.fname);
console.log(m6.show());
// classs
class myclass{
    constructor(fname,age,id,salary){
        this.fname=fname;
    this.age=age;
    this.id=id;
    this.salary=salary;
    }
    get show(){
        return this.age;
    }
        bos(){
        return this.id;
            }
}
const me1=new myclass("grace",24,232,23000);
console.log(me1.fname);
const m2=me1.show;
console.log(m2);

//Object creation using function
const fun={
    display(city){
        console.log("My name is ",this.fname + "And my city is: ",city);
    }
}
function emp(fname,lname,age,address){
    const det=Object.create(fun);
    det.fname=fname;
    det.lname=lname;
    det.age=age;
    det.address=address;
    det.show=function(){
        return this.address;
    }
    return det;
}
const c=emp("Aniket","Dey","22","Bakura");
console.log(c);
c.display();
const l1=c.show();
console.log(l1);
// emp.prototype.salary=function(){
//    return(`My name is ${this.fname} ${lname}`)
// }
// const c1=emp("Aniket","Dey","22","Bakura",);
// c1.salary();
function emp1(fname,lname,age,address){
    const det1=Object.create(fun);
    det1.fname=fname;
    det1.lname=lname;
    det1.age=age;
    det1.address=address;
    // det1.city=city;
    det1.show=function(){
        return this.address;
    }
    return det1;
}
const c2=emp1("Akshay","Kumar",23,"Bombey");
c.display.call(c2,"kolkata");
