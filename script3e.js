// Es6 class
// program 1 ( Hard code value )
// class Person {
//     firstName = "mansi"
//     lastName = "gurnule"
//     age = 19
//     rollNo = 2010
// }

// let chinmay = new Person()
// let amol = new Person()
// console.log(chinmay)
// console.log(amol)

// program 2 (using constructor)
// class Person {
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lastName = ln 
//         this.age = ag
//         this.rollNo = rn
//     }

//     displayName(){
//         console.log(this.firstName , this.lastName)
//     }
// }
// let mansi = new Person("Mansi","Gurnule",19,2010)
// console.log(mansi)
// let reshma = new Person("Reshma","Kotrange",17,3424)
// console.log(reshma)

// program 3 (using function)
// class Person{

//     setFirstName(fn){
//         this.firstName = fn
//     }

//     getFirstName(){
//         return this.firstName
//     }

//     setLastName(ln){
//         this.lastName = ln
//     }

//     getLastName(){
//         return this.lastName
//     }
// }
// let mansi = new Person()
// mansi.setFirstName("Mansi")
// let m1 = mansi.getFirstName()
// console.log(m1)
//console.log(mansi)

// program 4 (using set & get keyword)
class Person{
    set first_nm(fn){
        this.firstName = fn
    }
    get first_nm(){
        return this.firstName
    }
    set last_nm(ln){
        this.lastName = ln
    }
    get last_nm(){
        return this.lastName
    }
}
let mansi = new Person()
mansi.firstName = "mansi"
console.log(mansi.firstName)
mansi.lastName = "gurnule1"
mansi.last_nm = "gurnule2"
console.log(mansi.lastName)
console.log(mansi.last_nm)
console.log("------------------------------------------------------------------------")

// program 

let chinmay = {
    firstName:"Mansi",
    lastName:"gurnule" 
}
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
chinmay.city = "Pune"
console.log(chinmay)

// program

class Bank {
    constructor(ffn,bal){
        this.full_Name = ffn 
        this.balance = bal
        this.transaction = []
    }

    withdrawl(amt){
        if(this.balance > amt){
            this.balance = this.balance - amt
            this.transaction.push(-amt)
            return this.balance
        }
        else{
            console.log("Insufficient fund")
        }
    }

    deposit(amt){
        this.balance = this.balance+amt
        this.transaction.push(amt)
        return this.balance
    }

    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
}

let mansi1 = new Bank("Mansi Gurnule", 10000000)
let q1 = mansi1.withdrawl(5000000)
console.log(q1)





