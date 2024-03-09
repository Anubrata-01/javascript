// let x=4;
// let y=5;
// let z=x+y;
// let m=x*y;
// let n=x%y;

// x++;
// let a=5;
// let b=a**2;
// document.write(x + "<br>");
// document.write(y-x);
// document.write(b);
// let name="subhadip";
// document.write(typeof(name));
// // name=Number(name);
// // document.write(typeof(name));
// document.write("My name is: "+ name);//string template
// let s3="hello how are you?";
// let s4="i am fine!";
// document.write(s3 + s4 + "And you?");//string concatenation
// document.write(s3 == s4);//boolean
// let s2="Anubrata";
// let s1="Chnada";
// let ab="Anubrata";
// let age=23;
// if(ab[0]=== "A" && ab[1]=="n")
// {
//     document.write("heloo" + "<br>");
// }
// Nested if
let n1= +prompt("Enter a number: ");
if(n1<0)
{
document.write("invalid");
}
 else
 {
     if(n1 === 1)
     {
         document.write("fact of 1 is : ",n1);
     }
    else
    {
        let fact=1;
        for(let i=1;i<=n;i++)
        {
            fact=fact*i;
        }
    
     document.write(fact);
    }
}
