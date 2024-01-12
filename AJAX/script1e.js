// sync ==> dependent on each other
// Async ==> Parallel execute

// program 1
function additionA(){
    console.log("A is executed")
}

function additionB(){
    console.log("B is executed")
}
// execute line by line
// additionB()
// additionA()
// It execut line by line 
// B is executed
// A is executed

// program 2

function additionC(){
    setTimeout(function(){
        console.log("C is executed")
    },2000)
}

function additionD(){
    console.log("D is executed")
}

// additionC()
// additionD()
// It executed parallely ==> it's not depend on each other ==> dusre ka execution rokte nhi hai
// D is executed
// C is executed

// program 2  
// sync in nature ==> we make it Async nature
// create user ==> get id ==> get info by id

function GetId(){

    setTimeout(function(){
        console.log("User Created")
    },3000)

    setTimeout(function(){
        console.log("Get ID")
    },2000)

    setTimeout(function(){
        console.log("Get info by id")
    },1000)
}
//GetId()
// Output
// Get info by id ==> Get ID ==> User Created

// Call Back Hell

console.log("============================================================================")

function GetId1(){

    setTimeout(function(){
        console.log("User Created")
        setTimeout(function(){
            console.log("Get ID")
            setTimeout(function(){
                console.log("Get info by id")
            },1000)
        },2000)
    },3000)
}
GetId1()

// Output
// User Created ==> Get ID ==> Get info by id
// it is not the right way ==> this code is tightly coupled ==> this function can't use seprately

// promises ==> resolve , pending , reject

// promis 

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 20
    if(a>b){
        resolve("It is resolve")
    }
    else{
        reject("It is reject")
    }
})
