//methods that are inside object
function show(){
    console.log(this.fname);
}
const ob1={
    fname:"Anubrata",
    age:23,
    // about:function(){
    //     // console.log("welcome");
    //     console.log("My name is " +this.fname + ""+" my age is "+ +this.age);
    // }
    about:show

}
const ob2={
    fname:"Akamksa",
    age:23,
    // about:function(){
    //     // console.log("welcome");
    //     console.log("My name is " +this.fname + ""+" my age is "+ +this.age);
    // }
    about:show

}
const ob3={
    fname:"Anirban",
    age:23,
    // about:function(){
    //     // console.log("welcome");
    //     console.log("My name is " +this.fname + ""+" my age is "+ +this.age);
    // }
    // about:show

}
ob1.about();
// ob1.about.call(ob3);//call method
//call
const details={
    fname:"anirban",
    age:25,
    id:222,
    about:function(city,country){
        console.log("My name is : ",this.fname + " and my age is ",this.age + "and city is",city + " country is",country);
    }
}
const details1={
    fname:"Grace",
    age:24,
    id:221,
    // about:function(){
    //     console.log("My name is : ",this.fname + " and my age is ",this.age);
    // }
}
const details2={
    fname:"suva",
    age:25,
    id:220,
    // about:function(){
    //     console.log("My name is : ",this.fname + " and my age is ",this.age);
    // }
}
// details.about();
// details.about.call(details2,'oslo');
// //apply.apply is same as call method nut the only difference is in apply we pass arguments as a list but in call we pass argument a separately
// details.about.apply(details2,["Kolkata","India"]);
// //bind returns a function which can be used later on
// const fun=details.about.bind(details2,"Pune","India");
// fun();

