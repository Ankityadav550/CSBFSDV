// // console.log("Hello World");


// var a=23;
// if(a>10){
//     var a=300;
//     console.log("a inside:"+a);
// }
// else{
//     console.log("else statement");
// }
// console.log("a outside:"+a);

// let b=23;
// if(b>10){
//     let b=300;
//     console.log("b inside:"+b);
// }
// else{
//     console.log("else statement");
// }
// console.log("b outside:"+b);

// let a='20';
// if(a==20){
//     console.log("equal data");
// }else{
//     console.log("not equal data");
// }

const myname="ankit";
// console.log("Hii...."+myname);
// console.log(`Hii....${myname}`);

// console.log(typeof myname);

// function msg(name){
//     return name +" welcome to JS";
// }

// const data=msg("Ram");
// console.log(data);

// const data2 = function msg2(name){
//     return name +" welcome to JS";
// }
// const msg2=data2("Rahul");
// console.log(msg2);

// const add = (myname) => {
//     // console.log("Hiiii....Hello "+myname);
//     return "Hiiii....Hello "+myname;
// }
// const result=add(myname);
// console.log(result);

// const data =msg=>msg;console.log(data("greetings"))0

// IIFE immediately invoked function expression

// (function(){
//     console.log("hello world");
// }
// )();

// (()=>{
//     console.log("hello world");
// }
// )();

// setTimeout(()=>{
// },1000);

// setInterval(()=>{
//     console.log("Hii.... I m using setInterval");
// },1000);

// function greetings(msg="welcome"){
//     console.log("Hiii "+msg);
// }
// greetings("Ankit");

function selectlanguage(lang){
    let data;
    if(lang=="Java"){
        function javacompiler(){
            return "java compiler selected";
        }
        data=javacompiler();
        
    }else if(lang=="C"){
        function ccompiler(){
            return "C compiler selected";
        }
        data=ccompiler(); 
    }  
    else{
        data="No such compiler available";
    }  
    return data;
}

console.log(selectlanguage('Java')) ;
console.log(selectlanguage('C')) ;
console.log(selectlanguage('Python')) ;

