//global variables
var semester=3;
let sem=3;
//js is case sensitive
const Sem=3;
//global scope
console.log(`(var)currently iam studying in sem:${semester}`);
console.log(`(let)currently iam studying in sem:${sem}`);
console.log(`(const)currently iam studying in sem:${Sem}`);
// --------------------------------------------------------------------------------------------------

//block scope/local scope
{
    var fullname="harsha";//lower case
    let fullName="harsha kumar";//camel case
    const FullName="harsha kumar k";//pascal case
    //inside the scope
     console.log(`(var)Full Name:${fullname}`);
    //throws error as let variable fullname is declared out of the function scope under block scope
    console.log(`(let)Full Name:${fullName}`);
    ////throws error as const variable fullname is declared out of the function scope under block scope
    console.log(`(const)Full Name:${FullName}`);
}
//outside the scope
function showvariables(){
    let fullName="harsha kumar";
    const FullName="harsha kumar k";
    console.log(`(var)Full Name:${fullname}`);
    //throws error as let variable fullname is declared out of the function scope under block scope
    console.log(`(let)Full Name:${fullName}`);
    ////throws error as const variable fullname is declared out of the function scope under block scope
    console.log(`(const)Full Name:${FullName}`);
}
showvariables();
//-------------------------------------------------------------------------------------------------------

//function scope
function printvariables(){
    var collegename="CEC";
    let collegeName="CEC";
    const CollegeName="CEC";
   // function variables can be accessed within the function
    console.log(`Inside function:`);
    console.log(`(var) College: ${collegename}`);
    console.log(`(let) College: ${collegeName}`);
    console.log(`(const) College: ${CollegeName}`);
}
printvariables();
// Out of the function, I can't access var, let and const variables
console.log(`Outside function:`);
console.log(`(var) College: ${collegename}`);
console.log(`(let) College: ${collegeName}`);
console.log(`(const) College: ${CollegeName}`);


