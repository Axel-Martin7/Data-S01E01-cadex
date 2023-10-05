/* eslint-disable */
class A {
  toStr() {
    return '[object Object]';
  }
}

class B extends A {
  constructor(){
    super();
    this.name = "Bob"
  }
  toStr(){
    return `Bonjour ${this.name}`
  }
}

const bInstance = new B();

console.log(bInstance.name)
console.log(bInstance.toStr())