function myname(a,b,c)
{
    let sum=a+b+c;
    return sum;
}
let a=myname(3,9,5);
document.write(a);
document.getElementById("p1").innerHTML="hello";
function isodd(nu1)
{
    if(nu1 % 2 === 0)
        return false;
    else 
        return true;
}
let m=isodd(12);
document.write(m);
function firstchar(st1)//function decleration
{
    return st1[0];
}
let a1=firstchar("Anu");
document.write(a1);
function findt(array,target)
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i] === target)
        {
        
            return i;
        }
    }
    return 0;
}
const ar1=[1,2,4,5,6];

let b1=findt(ar1,6);
document.write(b1);
//function expression
// const anu= function (a,b,c)
// {
//     return a+b+c;
// }
// document.write(anu(3,4,5));


//arrow functions
let ab = (a,b,c) => a+b+c;


let m3= ab(6,7,8);
document.write(m3);
let odd=num1=>//if there are single paraetre we can ommit parenthesis
{
    if(num1%2===0)
        return true;
    else
        return false;
}
m7=odd(6);
document.write(m7 + "<br>");


//practice function


