class Person{
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `Meu nome e ${this.name}`;
    }
}

module.exports = {
    Person
}