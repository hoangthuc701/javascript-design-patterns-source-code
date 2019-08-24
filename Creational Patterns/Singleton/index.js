class Singleton{
    constructor(name=""){
        if (Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.name = name;
        return this;
    }
    getName(){
        return this.name;
    }
}
const instanceOne = new Singleton("Nguyen");
const instanceTwo = new Singleton("Hoang");
const instanceThree = new Singleton("Thuc");
console.log(instanceOne.getName());
console.log(instanceTwo.getName());
console.log(instanceThree.getName());
