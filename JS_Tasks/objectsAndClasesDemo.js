const person = {
    name:"Dido",
    SayHello:function () {
        console.log(`Hello ${this.name}`);
    }
}
person.func = () => console.log('Call my function');
person.func()
person.SayHello()
console.log(Object.entries(person));