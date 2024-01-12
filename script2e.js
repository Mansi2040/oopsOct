// // Es6 class
// // with constructor

// class Person {
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lstName = ln 
//         this.age = ag 
//         this.rollNo = rn 
//     }
// }
// let mansi = new Person("Mansi","Gurnule",19,4323)
// console.log(mansi)

// // Object.create

// let massu = Object.create({})
// console.log(massu)
// massu.firstName = "massu"
// massu.lstName = "Gurnule"
// massu.age = 20
// massu.rollNo = 9896
// console.log(massu)

// object literal

// let amol = {
//     firstName:"amol",
//     lstName:"rao",
//     displayName:function(){
//         console.log(this.firstName, this.lstName)
//     }
// }
// console.log(amol)
// amol.displayName()

// let chinmay = {
//     firstName:"chinmay",
//     lstName:"deshpande",
//     displayName:function(){
//         console.log(this.firstName , this.lstName)
//     }
// }
// chinmay.displayName()


// function cunstroctoe

function Person(fn,ln){
    this.firstName=fn 
    this.lastName=ln 
    this.displayName = function(){
        console.log(this.firstName , this.lastName)
    }
}
let amol = new Person("amol","rao")
console.log(amol)
amol.displayName()
let chinmay = new Person ("chinmay","despande")
console.log(chinmay)
chinmay.displayName()

// prototype inheritance
// every object has one __proto__ == Parent.protype
console.log(amol.__proto__ == Person.prototype)

function people(fn,ln){
    this.firstName = fn 
    this.lastName = ln
}

let swara = new people("swara", "moharle" )
let pari = new people("pari", "gurnule")
console.log(swara)
console.log(pari)
people.prototype.displayName = function(){
    console.log(this.firstName , this.lastName)
}

swara.displayName()
pari.displayName()

Array.prototype.hello = function(){
    console.log(" Hello Mansi")
}

let names = ["mansi","pari","rinku"]
names.hello()
console.log(names)

// type of function

// function declaration

function add(){
    console.log(2+5)
}
add()

// function expression

let add2 = function(){
    console.log(2+5)
}

let q1 = add2()
console.log(q1)