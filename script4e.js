// Inheritance
// program 1
// class Student {
//     constructor(fn,ln,adNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.adharNo = adNo
//     }
// }
// let s1 = new Student("Mansi","Gurnule",56789091)
// console.log(s1)

// class Teacher {
//     constructor(posi,sal){
//         this.position = posi 
//         this.salary = sal 
//     }
// }
// let t1 = new Teacher("Developer",50000)
// console.log(t1)

// // program 2
// // Single inheritance 
// class GrandFather {
//     constructor(gfn,ln){
//         this.GrandFatherName = gfn
//         this.lastName = ln 
//     }
//     displayGName(){
//         console.log(this.GrandFatherName, this.lastName)
//     }
// }
// class Father extends GrandFather {
//     constructor(gfn,ln,fn){
//         super(gfn,ln)
//         this.Father = fn
//     }
//     displayFName(){
//         console.log(this.Father , this.lastName)
//     }
// }
// let mansi = new Father("Natthu","Gurnule","Ravindra")
// mansi.displayGName()
// mansi.displayFName()

// program 3
// Multilevel Inheritance
class GrandFather1 {
    constructor(gn,ln){
        this.GrandFatherName = gn 
        this.lastName = ln 
    }
    displayGName1(){
        console.log(this.GrandFatherName , this.lastName)
    }
}
class Father extends GrandFather1 {
    constructor(gn,ln,fn){
        super(gn,ln)
        this.fatherName = fn 
    }
    displayFname(){
        console.log(this.fatherName , this.lastName)
    }
}
class Son extends Father {
    constructor(gn,ln,fn,sn){
        super(gn,ln,fn)
        this.SonName = sn 
    }
    displaySname(){
        console.log(this.SonName , this.lastName)
    }
}
let dhiraj = new Son("Natthu","Gurnule","Ravindra","Dhiraj")
dhiraj.displayGName1()
dhiraj.displayFname()
dhiraj.displaySname()

// program 4
// Herarchical Inheritance
class Mother {
    constructor(mn,ln){
        this.MotherName = mn 
        this.Lastname = ln 
    }
    displayMname(){
        console.log(this.MotherName , this.Lastname)
    }
}

class Son1 extends Mother {
    constructor(mn,ln,sn){
        super(mn,ln)
        this.SonName = sn 
    }
    displaySonName(){
        console.log(this.SonName , this.Lastname)
    }
}

class Doughter extends Mother{
    constructor(mn,ln,dn){
        super(mn,ln)
        this.DoughterName = dn
    }
    displayDname(){
        console.log(this.DoughterName , this.Lastname)
    }
}

let mansi1 = new Doughter("Ujjwala","Gurnule","Mansi")
let dhiraj1 = new Son1("Ujjwala","Gurnule","Dhiraj")

mansi1.displayDname()
mansi1.displayMname()
dhiraj1.displaySonName()



