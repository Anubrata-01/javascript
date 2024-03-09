class obj{
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    get displahy(){
        return this.address;
    }
}
class boka extends obj{
    constructor(name,address,phno){
        super(name,address);
        this.phno=phno;
    }
}
const m1=new boka("Anubr","kolkata","8637094381");
console.log(m1.phno);