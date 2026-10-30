// #1 Even Or Odd using Arrow Func

//CODE:
// const num = (a) => {
//     if (a % 2  === 0 ) {
//         console.log("Even Number");
//     }
//     else {
//         console.log("Odd Number");
//     }
// } 
// num(5); num(7) ; num(0)




// #2 Result Evaluator — Pass or Fail

//CODE:
// function marks (mark) {
//     if (mark >= 50 && mark <101) {
//         console.log("Pass");
//     }
//     else if (mark <50 && mark>=0) {
//         console.log("Fail");
//     }
//     else {
//         console.log("Invalid Marks");
//         return null;
//     }
// }
// marks(75) ; marks(40) ; marks(120);




// #3 Maximum Finder — Largest of Three Numbers

//CODE:
// const num = (a,b,c) => {
//     if (a>=b && a>=c) {
//         return a;
//     }
//     else if (b>=a && b>=c) {
//         return b;
//     }
//     else {
//         return c;
//     }
// }
// console.log(num(10, 25, 15));
// console.log(num(5, 3, 8));
// console.log(num(9, 9, 2));
// console.log(num(7, 7, 7));




// #4 Accumulator — Sum from 1 to N

//CODE:
// function acc (n) {
//     if (n>=0) {
//         let i;
//         let sum = 0;
//         for (i = 1 ; i <= n ; i++) {
//             sum = sum + i;
//         }
//         return sum;
//     }
// }
// console.log(acc(5));
// console.log(acc(10));




// 5 Multiplication Table Generator

//CODE:
// function mul(n) {
//     let i;
//     for (i=1; i<=10; i++) {
//         console.log(n ,'x', i, '=',n*i ); 
//     };
// }
// mul(3)



// #6 Digit Counter — Number Length Finder

//CODE:
// function countDigits (num) {
//     if (num === 0) {
//         return 1;
//     }
//     else {
//     }
//     let i = 0;
//     while (num > 0) {
//         num = Math.floor (num/10) ;
//         i ++ ;
//     } 
//     return i;
//     }
// console.log(countDigits(1234));
// console.log(countDigits(9));
// console.log(countDigits(10000));




// #7 Number Reverser

//CODE:
// function reverseNumber (num) {
//     let rev = 0;
//     let digit ;

// while (num>0) {
//    digit = num % 10 ;            
//    rev = rev * 10 + digit ;       
//    num = Math.floor(num/10);      
// } 
// return rev;
// }
// console.log(reverseNumber(1234));
// console.log(reverseNumber(500));
// console.log(reverseNumber(91));




// 8) Factorial Engine

//CODE:
// function factorial (n) {
//     if (n===0) {
//         return  1;
//     }
//     let k =1 ;
//     while (n>1) {
//         k = k* n;
//         n = n-1;
//     }
//     return k; 
// }
// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));




// # 9 Prime Validator

//CODE:
// function prime(a) {
//     if (a<1) {
//         return false;
//     }
//     for( let i=2 ; i<a ; i++) {
//         if (a % i === 0)
//         {
//             return false;
//         }
//     }   
//     return true;  
// }
// console.log(prime(7));
// console.log(prime(10));
// console.log(prime(2));
// console.log(prime(9));




// #10 Pattern Builder — Star Triangle

//CODE:
// let star = () => {

//     for(let i = 1; i<5 ; i++){
//         let row = "" ;
         
//     for(let j =1; j<=i; j++) {
//         row = row + "*";
//     }
//     console.log(row);
// }
    
// }
// star();
