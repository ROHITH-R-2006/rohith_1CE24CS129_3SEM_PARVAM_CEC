/*syntax:
function declaration and defination
function funcname(parameters){
      statements
}
function call
funcname(argument)
*/


function sayhi(){
    console.log(`hello world`);
}
sayhi();

function sayhello(name){
    console.log(`hi,${name}`);
}
sayhello("ajay");
sayhello("arjun");

function add(num1,num2){
    return num1+num2;
}
var num1=1,num2=2;
console.log(`sum of ${num1} and ${num2}:${add(1,2)}`);

function square(num)
{
    return num*num;
    //return num**2;
}
var num=2;
console.log(`square of ${num}:${square(num)}`);

function evenodd(num)
{
    if(num%2==0)
    {
        return true;
    }
    else
        return false;
}
var num=20;
console.log(`${num} is a even number :${evenodd(num)}`);
 