//1.原型链继承
// function Parent() {
//     this.name = ['kevin','daisy'];
// }
// Parent.prototype.getName = function () {
//     console.log(this.name);
// }
// function Child() {
//
// }
// Child.prototype = new Parent();
// var child1 = new Child();
// child1.name.push('yaya');
// console.log(child1.getName())
// var child2 = new Child();
// console.log(child2.getName());
//问题：
// 1、引用属性被所有实例共享
// 2、在创建Child时不能向Parent传参


//借用构造函数
// function Parent() {
//     this.name = ['kevin','daisy']
// }
//
// function Child() {
//     Parent.call(this)
// }
//
// var child1 = new Child();
// child1.name.push('yaya');
// console.log(child1.name);
// var child2 = new Child();
// console.log(child2.name);
//
// 优点：
// 1.避免了引用类型的属性被共享
// 2.可以在child中向Parent传参
// 缺点：
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法

//组合继承
// function Parent(name) {
//     this.name = name;
//     this.colors = ['red','green','blue']
// }
// Parent.prototype.getName = function () {
//     console.log(this.name)
// }
//
// function Child(name,age) {
//     Parent.call(this,name);
//     this.age = age;
// }
// Child.prototype = new Parent();
// var child1 = new Child('kevin',18);


//原型式继承
// function createObj(o) {
//     function F() {};
//     F.prototype = o;
//     return new F();
// }
//就是ES5 Object.create的模拟实现

//寄生式继承
// function createObj(o) {
//     var clone = Object.create(o);
//     clone.sayName = function () {
//         console.log('Hi')
//     }
//     return clone
// }

//寄生组合式继承
// function object(o) {
//     function F() {};
//     F.prototype = o;
//     return new F();
// }
// function prototype(child,parent) {
//     var prototype = object(parent.prototype);
//     prototype.constructor = child;
//     child.prototype = prototype;
// }







