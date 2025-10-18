//arrow function 
//syntax:
//declaration_type functionName=(parameter) =>{
// statements
//}

let sayHi=() =>{console.log(`Hello Student!`);}
sayHi();
let sayHello=(fullNmae)=>{console.log(`hi ${fullNmae}!`);}
sayHello("rick");
sayHello("morty");
let findSum=(num1,num2)=>{return num1+num2};
n1=3,n2=5;
console.log(`sum of ${n1} and ${n2} is: ${findSum(n1,n2)}`);
console.log(`sum : ${findSum(100,20)}`);
let cube=(num)=>{return num**3};
num=4;
console.log(`cube of ${num}  is: ${cube(num)}`);
console.log(`cube : ${cube(5)}`);
let checkeven=(num)=>{return (num%2==0?true:false)};
num=30;
console.log(`the number ${num}  is even: ${checkeven(num)}`);
console.log(`the number 5 is even: ${checkeven(5)}`);