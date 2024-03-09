const ob1={
    'namde':'Anubrata',
    'age':23,
    'id':222
    // 'gender':'male'
}
const ob2={...ob1};
ob1.gender='male';
const ob3=Object.assign({},ob2);//this is another way of objet cloning
// console.log(ob1);
// console.log(ob2);
// console.log(ob3);
//optional chaining
const d={
    fname:'manav',
    // age:25
    // hobbies:{'criket':'virat'}
}
console.log(d.fname);
console.log(d?.hobbies?.criket);
