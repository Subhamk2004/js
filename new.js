/***************js**************/

age = 21;// not a good practice to name a varibvale , we should always use the keywords to name the varibales

console.log(age);
let price = 100;// like this we should declare the varibales
console.log(price);

console.log(typeof (price));// gives the type of the data type of the variable

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
