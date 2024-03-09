//iterables means on which we can apply for-of loop
//string and array are the iterable but object is not terable
const arr=[2,3,4,5,7,8];//array
// for(let i of arr){
//     console.log(i);
// }
const nam="Anubrata";//string
// for(let i of nam){
//     console.log(i);
// }
const ob1={'name':"Manab",'Age':23}//object
// for(let i of ob1){
//     console.log(i);
// }

//array like object means those who has the length property and whose elements can access by index number
//string is array like object
// let a="Grace Halder";
// console.log(a.length);
// console.log(a[6]);



//Now we are going to learn a new iterable is set
//set is used to store unique data
//sets also have its own method
// we cant access sets elements using index
//sets does not guaranteed order
//it is iterable
// const s=new Set(["Anubrata","manab"]);
// console.log(s);
// const set1=new Set();
// set1.add(1);
// set1.add(2);
// set1.add(1);//this will not add to the set list because set does not allow copy elemenet

// set1.add(3);
// set1.add(['grace','halder']);//this is can be add because these are two different array
// set1.add(['grace','halder']);//
// console.log(set1);
// console.log(set1.has(1));//has method is used to check whether a element is in the set
// set1.delete(2);//delete method is used to delete an element from the set
// console.log(set1);
// s.forEach((se)=>{
//     console.log(se);
// });
// let length=0;
// for(let i of s){
//     console.log(i);
//     length++;
// }
// console.log(length);

