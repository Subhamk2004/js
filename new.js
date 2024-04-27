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












// string ****************
// strings are genereally quoted inside "" or ''
// but in today's time we use ``  for string as they also allow us to nest 
// variable inside them using the dollar sign ${} , ex:
let my_name = "Subham Kumar"; // old method 
let sentence  = `hello my name is ${my_name}`; // new method with variable name inside string

console.log(sentence);

let new_name =new String(`SKR1978`); // new keyword helps the string to be treated as object
console.log(new_name);
console.log(new_name[2]);
console.log(new_name.length);
// and just like that there are a lot of methods for strings that can be treated as objects
 
console.log(new_name.toLowerCase());
console.log(new_name.indexOf('K'));
console.log(new_name.charAt(4));

// making a substring byt using the string object operations

let sub_string = new_name.substring(0,3);
console.log(sub_string);

// using the slice function to string operastions

let sliced_string = new_name.slice(0,3);
console.log(sliced_string); 
// slice can have negative values , but substring can't have negative values;


// there's a method which removes extra spaces from start and end of strings which is , trim;

let spacey_name = "     Subham Kumar     ";
console.log(spacey_name.trim());

// ther's more a very useful string method know as : replace that replace a part of a string with another string of your choice

// ex is below:

let url = `https://skr1978.in/type_name=Web%20Developer`;
/* now whenever we are trying to fetch url from a website we get %20 or something
like that from the url instead of spaces , so we can use the replace method to replace 
that %20 witht the space*/

let new_url = url.replace(`%20` , ` `);
console.log(new_url);

// .includes() method is used to check if the string contains a particular substring or not

// another very useful method is .split( , ); example is below:

let split_url = new_url.split(`type_name=`);
console.log(split_url);

let new_num = new Number(100);
console.log(new_num.toString());
console.log(new_num.toFixed(3)); // defines for how much points we need value

console.log(Math); // check console on browser to see various function in maths library


// .round , .ceil , .floor can be used  for numbers

// .min, .max can be used to identify minimum or maximum vlaue in an array or something
// like that






// now we will be using a maths method that is used in games  like ludo , which is .random

let random_num  = Math.random();
console.log(random_num);

console.log(Math.random());
console.log((Math.random()*10) + 1);

console.log (Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







let now_date = new Date();

console.log(now_date);

let string_date = now_date.toString();
console.log(string_date, " toString()");
console.log(now_date.toDateString(), " toDateString()");
console.log(now_date.toISOString(), " toISOString()");
console.log(now_date.toJSON(), " toJSON()");
console.log(now_date.toLocaleDateString(), " toLocaleString()", "Date is an object");

let new_date = new Date("08-14-2004");
// we can also declare date just like this as of our own choice

console.log(new_date.toLocaleString('default', {
    weekday:'long'
}));

// date can be converted to time in miliseconds starting from january as below:

console.log(new_date.getTime());

// Date.now() gives current date in miliseconds

// Date also has many methods like getMonth, getDay, getTime etc for various projects

///////////////////************************ */













// arrays

let arr = [0, `Subham Kumar`, true, 0.7834587, 'a'];
// arrays in js are resizable
console.log(arr);

let new_arr = new Array(92, "ighh", false);
console.log(new_arr);

// array methods

arr.push("Rahar");
console.log(arr);
arr.pop();
console.log(arr);

console.log(arr.includes('Subham Kumar'));
console.log(arr.indexOf(true));

// slice , splice

// if we use slice then it does not change the original array, but in splice we get a section of an array 
// from where to where we want, but that portion will be also deleted from the original array
// that is spliced

// we can also push an literal array in our arrays
let arr1 = arr;
arr.push(new_arr);
console.log(arr);
// but if we don't want an array to be in an array and just want the content of the arrays to be merged 
// then we use concat as below

let concated_arr = arr1.concat(new_arr);
console.log(concated_arr);

// .join on array converts the array to string and joins all the elements of arrays 
// seperated with commas

const sliced_arr = arr.slice(1,4);
console.log(sliced_arr); // this will not change the original array

const spliced_arr = arr.splice(1,4); // this will affect the original array
console.log(spliced_arr);
console.log(arr); 


// two or more arrays can be merged

// we have a method in arrays in which if an array in an array in an array and we want all 
// the content to be in just one array then we can use the .flat() methods
// which eliminated all the inside arrays and put all the contents in a 
// single array as below;

let in_arr = [2,3,5, [1,3,4], 5, [3,5,[3,4,6]]];

// now we will just use the method .flat() and will pass a parameter to how much depth
// we want to the content be out as below

let open_arr = in_arr.flat(Infinity);

console.log(open_arr);

// 3 imp array methods are Array.from("string") converts the string to 
// an array of characters 
// Array.of(var1, var2, var3, var4); this will retunr an array of the following variables you pass to them
// Array.isArray, this will return if the passed parameter is an array or not













// object literals

let obj1  = {} // this is an empty object

let obj2 = {
    name:"Subham",
    age:20,
    profession:"Web developer",
    isPlaying:false,
    favourite_games:["coc", "nfs 2005", "cod", "rr3", "gta 5"],
    "laptop type": "HP notebook series",
    fun2:function(){
        console.log("Hello");
    }
}

// now accessing the object values
// two methods

console.log(obj2.name);

console.log(obj2["laptop type"]);

// changing object key values

obj2.isPlaying = true;
// Object.freeze(obj2); // now no one can change the values of the object


let sym = Symbol("skr");

// but if we used that same variable sym in object then we have to define it as 
// [sym]:"skr1978"

obj2.new_key = "new value"; /* here we have made a new key outside the object which
will be added at the end of the object
*/
obj2.fun1 = function(){
    console.log("Hello JS user");
    return 0;
}
console.log(obj2);
console.log(obj2.fun1());

obj2.fun3 = function(){
    console.log(`Hello ${this.name}, you are using ${this["laptop type"]}`);/*
    in the above console statement we have used 'this' keyword which is here is used
    to refer to the object the function is in*/
}

console.log(obj2.fun3());

// other ways to intitiliase a object:

const supercell_user = new Object();

supercell_user.user_name = 'skr1978'
supercell_user.townhall = 'th11'
console.log(supercell_user);

// below are object in objects

const data_base = {
    user1: {
        user_id:2678762857,
        user_th:'th12'
    },
    user2:{
        user_id:2678452857,
        user_th:'th14'
    }
}

console.log(data_base.user2?.user_id);

//here the question mark is used so that it will check if the property or key exists in the 
// object or not, if not then it won't throw an error just a warning and code won't crash

/* content of objects can be combined as below syntax 
*/

let obj3 = Object.assign(obj2, supercell_user);
console.log(obj3);

// a more simple way to combine objects and array is below:

const obj4 = {...obj1, ...obj2, ...obj3};
console.log('4th object is ', obj4);

// I can get only all the keys of an object as below:

const obj_keys = Object.keys(supercell_user);
console.log(obj_keys);
// and just like that we can also get the values

// destructuring objects

const course = {
    course_name:"Js full",
    price:"999",
    course_mentor:"yt"
}









// functions

function fun1(){
    console.log("running fun1");
    console.log('Hello Skr_1978');
}

fun1();

function add(num1, num2)
{
    console.log(num1 + num2);
}
let sum1 = add(2,5); 
console.log("sum 1 is ", sum1); // ingteresting check console

function add2(num1, num2)
{
    console.log(num1 + num2);
    return num1 + num2; //************/ */
}
let sum2 = add2(2,5);
console.log("sum 2 is ", sum2);

// return statement won't print if only function is called if we log the 
// function then we will see the return statement 

// shoping cart function 

function cart_price (var1, ...num1){// check console
    return num1;
}

console.log(cart_price(110, 300, 289, 2786));

// we can pass anything to a function even objects also as below:

function object_handler (anyobject){
    console.log(`price is ${anyobject.price}`);
}
object_handler(course);
// we can also pass array and objects directly in our function as below:

object_handler({
    price:"98456"
});

function array_handler (arr){
    console.log(`price is ${arr[4]}`);
}
array_handler(
    [234,24,3252,326,3245,345,345]
);

// don't use 'var' keyword to initiliaze variable




//            ☠️☠️☠️☠️☠️☠️☠️            
//                this                        

const web_user = {
    username:"skr_1978",
    price:1099,

    welcome_message: function()
    {
        let new_user = "skr"
        console.log(`${this.new_user} welcome to the website`);
        console.log(`${this.username} welcome to the website`);

        // check both of the above logs in console /***interesting */
        // 'this' keyword refers to the current context
        // context means = kiske baare me baat ho rahi hai, main mudda kya hai
        // so here main mudda is web_user object
    }
}

web_user.welcome_message();

// but what if we log "this" keyword here what will it give ans is below:

console.log(this); // this will refer to an emoty object as it is referring to none

// but if we check the above log in browser then we will get windows properties

function skr(){
    console.log(this); // check this in console
    let user_name = "skr"
    console.log(this.user_name); // you will not get the value by this method;
    // this type of syntax is used in object mainly for accessing key values
}
skr();


//            ☠️☠️☠️☠️☠️☠️☠️            
//            arrow functions      

// normally we define function as below:

let fun4 = function(){
    console.log(`hello`);
}
 // or we do like below:

 function fun5 (){
    return 0;
 }

//  but in arrow function we do like below:

let fun6 = (parameters) => {
    console.log(this); // it will give empty object
    return `hello arrow function`;
}

console.log(fun6());

// below are more ways to use arrow functions

const add_num = () => `no return statement needed`
const add_num2 = () => (`no return statement needed`)

console.log(add_num()); 
console.log(add_num2());

// Immediately Invoked Function Expressions IIFE
// to immediately invoke function we wrap our function inside () and then use ()
// immediately to immediately invoke that function to stop golbal scope polution

(function iife_fun () { 
    // it is named iife
    console.log(`iife function`);
})(); // this semicolon is necessary

// or use it as arrow function 

( (parameter_here) => {
    // it is unamed iife0
    console.log(`${parameter_here} is using arrow iife function`);
})('arguments_here');










///     js code execution and call

// first of all global execution context is made for sure

// function execution context
// eval execution context

// code runs in two phase
// 1) Memory creation phase
// 2) execution phase

let a = 10;
let b = 5;
function add_nums (num1 , num2){
    let total = num1 + num2;
    return total;
}

let result1 = add_nums(a, b);

// so now we will understand how the above piece of code will run

// firstly global execution will occur and it can be seen 
// by logging a simple "this" in the global scope

// then memory creation will occur so iin this,
// a,b will be allocated as undefined 
// add_nums will contain the logic 
// and result1 will also be undefined 


// now execution will occur as below
// a will be assigned 10, b as 5
// function is already created 
// then for assigning result1 a value from the function a "new variable environment "
// will be created so now everytime the function comes memory phase and execution phase 
// will occur for that function 

// after the function is executed the that new environment variable is deleted








// control flow ☠️☠️☠️☠️☠️



