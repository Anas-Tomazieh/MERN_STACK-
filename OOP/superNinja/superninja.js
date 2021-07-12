class Ninja{
    constructor(name,health, speed=3,strength=3){
        this.name = name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayname(){
        console.log(this.name);
    }
    showstats(){
     console.log(`my name is ${this.name}, my health is ${this.health} my speed is ${this.speed}, my strength is ${this.strength}`);
    }
    drinkSake(){
        this.health +=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayname();
ninja1.showstats();


class Sensei extends Ninja {
    constructor(name,wisdom=10){
        super(name,200,10,10);
        this.wisdom=wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Anything");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showstats();
