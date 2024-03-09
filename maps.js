//maps data structure,in which we can store data in key:value pair.
//order is guaranteed
//duplicate value is not allowed
//it islike object but main difference between object is 
//in object kay can have use only string and symbol as name
//but map we can use anything as key
// const person=new Map();
// person.set('name','Anubrata');
// person.set('age',23);
// person.set(1,"ami");
// person.set([1,2],'hi');
// console.log(person);
// // const ob={'name':'manav','age':26, [1,2]:"jh"};//this will not allowed
// // console.log(ob);
// console.log(person.get('name'));
// console.log(person.size);//size method returns the size of the map
// console.log(person.has('age'));
// console.log(person.delete('age'));
// // console.log(person.keys());
// for(let i of person.keys()){
//     console.log(i);
// }
// const det1=new Map();
// det1.set('name','grace');
// det1.set({'age':24},{'id':21});
// console.log(det1);
// console.log(det1.get());
const user={
    'name':'Anubrata',
    'age':23,

}
const m=new Map();
m.set(user,{'hobby':'criket','gender':'male'});
const ma=new Map([['name','Anirban'],['age',26]]);
// console.log(ma);
// ma.set('id',111);
// ma.set('address','Khejuri');
// console.log(ma);

// console.log(ma.get('address'));
console.log(m);
console.log(user.age);
console.log(m.get(user).hobby);

