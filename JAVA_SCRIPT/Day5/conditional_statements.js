var num1=20;
var num2=13;
var num3=30;
// if condition
if(num1 %2==0)
{
    console.log(`${num1} is even`);
}
else{
    console.log(`${num1} is odd`);
}
if(num2 %2==0)
{
    console.log(`${num2} is even`);
}
else{
    console.log(`${num2} is odd`);
}
// nested if condition
if(num1 %2==0)
{
    console.log(`${num1} is divisible by 2`);
}
else if(num1 % 5==0)
{
    console.log(`${num1} is divisible by 5`);
}
else{
    console.log(`${num1} is not divisible by 2 or 5`);
}
// nested if else condition
if(num1>num2)
{
    if(num1>num3)
    {
        console.log(`${num1} is the greatest`);
    }
    else{
        console.log(`${num3} is the greatest`);
    }
}
else
{
    console.log(`${num2} is the greatest`);
}
