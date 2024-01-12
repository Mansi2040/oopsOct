// Object litteral
// program 1
let mansi = {
    firstName:"Mansi",
    lastName:"Gurnule",
    age:19,
    rollNo:2040
}
console.log(mansi)

// CRUD operation

// Retrive
console.log(mansi.firstName)
console.log(mansi['lastName'])

// Update
mansi.firstName = "Massu"
console.log(mansi.firstName)
mansi['age'] = 20
console.log(mansi.age)

// Add
mansi.city = "Nagpur"
console.log(mansi)
mansi['language'] = "marathi"
console.log(mansi)

// Delete
delete mansi.city
console.log(mansi)
delete mansi['language']
console.log(mansi)

// templete

// function constructor

function Person(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag 
    this.rollNo = rn
}

let p1 = new Person("mansi","Gurnule",19,2040)
console.log(p1)
let p2 = new Person()
console.log(p2)

console.log(p1.firstName)
console.log(p1.city="nagpur")
delete p1.age
console.log(p1)

// Es6 class

class Person2 {
    firstName
    lastName
    age
    rollNo
}

let p21 = new Person2()
console.log(p21)
p21.firstName = "Mansi2"
p21.lastName = "Gurnule2"
p21.age = 19
p21.rollNo = 2323
console.log(p21)