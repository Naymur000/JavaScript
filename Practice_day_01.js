// Ans. 01
var result = 50;

if (result < 0)
{
    console.log("Failed");
}
else if(result >= 0 && result < 40)
{
    console.log("Grade C");
}
else if(result >= 40 && result < 60)
{
    console.log("Grade B");
}
else if(result >= 60 && result < 70)
{
    console.log("Grade A-");
}
else if(result >= 70 && result < 80)
{
    console.log("Grade A");
}
else
{
    console.log("Grade A+");
}




// Ans. 02
let value = window.prompt("Enter your number : ");

if (value % 2 ==0)
{
    console.log(`${value} is even`);
}
else
{
    console.log(`${value} is odd`);
}




//Ans. 03
const arr = [13,1,2,19,20,3,5,18,6,7,4,8,12,9,10,11,16,17,14,15];
console.log("Before sorting: ", ...arr)
arr.sort(function(a,b){return a-b});
console.log("After sorting: ",...arr);




//Ans. 04
const leap_year = (year) =>
{
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

let year = window.prompt("Enter the your: ");

if (leap_year(year))
{
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}




//Ans. 05
const arr1 = [];
for(let i=1 ;i<=50 ; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        arr1.push(i);
    }
}

console.log(`Result : ${arr1}`);




//Ans. 06
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let largest_name = friends[0];

for(let val of friends)
{
    if(largest_name.length < val.length)
    {
        largest_name = val;
    }
}

console.log(largest_name);




//Ans. 07
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let unique = new Set(numbers);
let numbers1 = [...unique];

console.log(numbers1);




//Ans. 08
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

console.log(Math.max(...numbers));




//Ans. 09
const monthlySavings = (payments , living_cost) =>
{
    let total_savings = 0;

    if(typeof payments === "number")
    {
        return "Invalid input";
    }
    else
    {
        for(let val of payments)
        {
            if (val >= 3000)
            {
                total_savings += 80*val/100;
            }
            else
            {
                total_savings += val;
            }
        }
        return total_savings -= living_cost;
    }
}

let payments1 = [1000, 2000, 3000];
let living_cost1 = 5400;

let payments2 = [1000, 2000, 2500];
let living_cost2 = 5000;

let payments3 = [900, 2700, 3400];
let living_cost3 = 10000;

let payments4 = [900, 2700, 3400];
let living_cost4 = 100;

let total_savings1 = monthlySavings(payments1, living_cost1);
let total_savings2 = monthlySavings(payments2, living_cost2);
let total_savings3 = monthlySavings(payments3, living_cost3);
let total_savings4 = monthlySavings(living_cost4 , payments4);

if(total_savings1 >= 0)
{
    console.log(`Total savings_1: ${total_savings1}`);
}
else
{
    console.log("earn more");
}

if(total_savings2 >= 0)
{
    console.log(`Total savings_2: ${total_savings2}`);
}
else
{
    console.log("earn more");
}

if(total_savings3 >= 0)
{
    console.log(`Total savings_3: ${total_savings3}`);
}
else
{
    console.log("earn more");
}

if(total_savings4 === "Invalid input")
{
    console.log(`Total savings_4: ${total_savings4}`);
}
else
{
    console.log("earn more");
}
