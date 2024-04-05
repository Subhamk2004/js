/***************js**************/

age = 21;// not a good practice to name a varibvale , we should always use the keywords to name the varibales

console.log(age);
let price = 100;// like this we should declare the varibales
console.log(price);

console.log(typeof price);// gives the type of the data type of the variable

// below we are creating a object

let student = {
    student_name: "Subham",
    age: 19,
}

student.age++;
console.log("changing the age of the studemnt as student.age++", age);
num = '123';
real_num = 1;
ans = num + real_num + 1;
console.log(ans);
console.log("Object student is :", student);
console.log("accessing the object vale with the help of the key as object_name.key_name:", student.student_name)

// operators and conditions loops 

console.table([price, ans, num, real_num]);// console.table is used to print varibales in tabular form

// alert("Subham Kumar");  // this alert startement will not work in node js but will work in the browser

// null is an object;

/************ type conversions********/

let password = "1234";

let password_in_number = Number(password); // now that string password in converted in number;

// string like 123abc when convertewd tyo number then it gives NaN
// true when converted gives 1 as in number  

// not only we can convert the numbers but also to stringsd and boolean as:

let num1 = 1;
let bool_conversion  = Boolean(num1);
let str1 = 1468712;
let string_conversion = String(str1);
console.log(bool_conversion);
console.log(string_conversion);

// 1 in boolean is true
// 0 is false
// empty string is false
// non empty string is true;

// (*) is multiply and (**) is raised to the power;

// JAVASCRIPT starts from the start to end as left to right operation ex:
console.log("checkout below conversions for strings and number");
console.table([1+2+"3" , "1" +2 +3]);

/* only two types of data types based on how they are stored in the memory */
/* 1. Primite data types , => string , number , boolean , null ,undefined  , symbol , binint*/
// 2. Non primitive data types, => array , objects , functions
// stack memory for priomitive 
// heap memory for non primitive

let my_obj = {
    name:"Subham",
    age:Number(20)
} 

