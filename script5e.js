//Encapsulation
// lexical scope

//program 1
function additionA(){
    let a = 2
    let b = 6
   // console.log(s+t) ==> s is not defined
    console.log(a+b) // 8
    function additionB(){
        let s = 12
        let t = 43
        console.log(s + t) // 55
        console.log(a+b+s+t) // 63
        function additionC(){
            let q = 4 
            let r = 9
            console.log(q+r) // 13
            console.log(a+b+s+t+q+r) // 76
        }
        additionC()
    }
    additionB()
}
additionA()

// program 2
function additionD(x,y){
    console.log(x+y) // 55
    return x+y  // 55
    console.log("Hello") // return is the last sentense of any function (closers)
}
let q1 = additionD(12,43)
console.log(q1) // 55

// program 3

// number as parameter and number as return type
function add(c,v){
    return(c+v)
}
let q2 = add(23,54)
console.log(q2) // 77

// string as parameter and string as return type
function greet(word){
    return "Hello " + word
}
let q3 = greet("Mansi")
console.log(q3) // Hello Mansi

// boolean as parameter and boolean as return type
 function canDrive(age,haveVehical){
    if(age >= 18 && haveVehical){
        return true
    }
 }
let q4 = canDrive(34,true) // true
q4 = canDrive(12,true) // undefined
q4 = canDrive(21,false) // -||-
console.log(q4)

// array as parameter and array as return type
let cities = ["Nagpur", "Pune","Bangluru"]
function addCity(city){
    return cities.push(city)
}
let q5 = addCity("Wardha")
console.log(q5) // 4
console.log(cities) // [ 'Nagpur', 'Pune', 'Bangluru', 'Wardha' ]

// object as parameter and as return type
let info = {
    firstName:"Mansi",
    lasName:"Gurnule"
}
function addLang(obj){
    obj.city = "Pune"
    obj.language = "Marathi"
    return obj
}
let q6 = addLang(info)
console.log(q6) // { firstName: 'Mansi',lasName: 'Gurnule',city: 'Pune', language: 'Marathi' }

// return as function

function addB(){
    return function(){
        console.log("Hello")
    }
}
let q7 = addB()
console.log(q7)
q7()









