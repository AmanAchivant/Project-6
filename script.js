// var naam=prompt("Enter your name :")
// console.log(naam)

// ******************************************************************************************************

// alert("This is an alert")
// confirm("male ho ya female")

// var naam=prompt("Enter your name :")
// console.log('username is',naam)

// ******************************************************************************************************

// Primitive Data Types ke liye single data type hota hai
// 1. Number(1,2,3,4,5)
// 2. String 
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. Nan (Not a Number)

// Reference
// 1. Array
// 2. Object
// 3. Function

// *****************************************************************************************************

// var a='Hello '
// var b='World'

// console.log(a+b)  // this is known as concatenation

// var a='Hello'
// var b='World'

// console.log(a+b)
// console.log(a-b)
// console.log(a/b)             // ye teeno ko support nhi karta , this is a Nan
// console.log(a*b)

// *****************************************************************************************************


// var a='3'
// if(a>0){
//     console.log("positive")
// }
// else {
//     console.log("negative")
// }

// *****************************************************************************************************

// var age=prompt("Enter your age :")
// if(age>18){
//     console.log("You can see xyz")
// }
// else if(age==0){
//     console.log("oye ye koi shi age nhi hai , sahi age likh")
// }
// else{
//     console.log("You can't see xyz")
// }


// *****************************************************************************************************

// by using while loop

// var andar='10'

// if (andar===10){
//     console.log("Andar aao")
// }
// else {
//     console.log("Andar nhi aana")
// }

// *****************************************************************************************************

// function walk(){
//     console.log("Walking")
// }

// function sing(){
//     console.log("MAi huuun Doremon")
// }

// function dance(){
//     console.log("Nachooo Guyzzzz")
// }


// sing()
// dance()
// walk()

// *****************************************************************************************************


// var a=12;
// console.log(a)


// var a=[1,2,3,4];
// var b=a;

// b.pop();


// for(var i=0;i<11;i++){
//     console.log(i)
// }

// var i=0;
// while(i<10){
//     console.log(i)
//     i++;
// }

// var i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=8)

//*****************************************************************************************************


// function abcd(a,b,c){           //parameters
//     console.log(a+b+c);
// }

// abcd(1,4,79)                        //functions arguments


// var arr=[1,2,3,4,5,66]

// console.log(arr);


/*
arr pop {piche se hatana}
arr push {last mai add karna}
arr unshift {front mai add karna}
arr shift{front se hatana}}
arr splice{index se hatana with the help of pehle index phir jitne number tk hatana hai woh likho}
*/


// var ghadi={
//     brand:'Rolex',
//     price:100000,
//     color:'sea blue',                     //property
//     type:'analogue',
//     weight:'light',
// }

// console.log(ghadi.color)

//*****************************************************************************************************


// function abcd(){
//         for(var i=0;i<12;i++){
//             console.log(i);
//     }
//     console.log(i);
// }



// abcd()

// *****************************************************************************************************

// Advanced Java Script

// function abcd(){
//     for(let i=0;i<12;i++){
//         console.log(i);
//     }
//     console.log(i);          // let and const mai nhi aata hai
// }

// abcd()

// *****************************************************************************************************

// console.log("Aman Bhushan")

// *****************************************************************************************************


// Copy the reference Value

// var a=[1,2,33,4,5];
// var b=[...a];

// console.log(b.pop())
// console.log(b)

// *****************************************************************************************************

// truthy and falsy= 0,undefined , not defined , NaN , false aaye toh woh falsy kahlata hai 
// if(7){
//     console.log("hey");
// }
// else{
//     console.log("hello");
// }

// *****************************************************************************************************

// For Each
// var a=[1,2,5,8,9];

// a.forEach(function(val){
//     console.log(val+6);
// })

// *****************************************************************************************************

// For In

// var obj={
//     name:"Aman",
//     age:69,
//     city:"Agra"
// }

// for(var key in obj){
//     console.log(key,obj[key]);
// }

// *****************************************************************************************************

// var a=document.querySelector("h1")

// a.innerHTML='bobuuu'

// a.style.color='red'
// a.style.backgroundColor='black'


// *****************************************************************************************************

// var h1=document.querySelector("h1")

// h1.addEventListener('click',function(){
//     h1.innerHTML="Aman BHushan"
//     h1.style.color='Red'
//     h1.style.backgroundColor='black'
//     // console.log("AMan bhushan")
// })


// *****************************************************************************************************

var bulb=document.querySelector("#bulb")
var btn= document.querySelector("button")

var flag=0;

btn.addEventListener('click',function(){
    if(flag ==0)
    {
        bulb.style.backgroundColor='yellow'
        console.log("Clicoid")
        flag=1
    }
    else{
        bulb.style.backgroundColor='white'
        console.log("Un-clicked")
        flag=0
    }
})
