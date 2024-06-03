// promise means that the task given to it will not be completed at the moment, it will just
// be queued but will not happen at the moment, it may happen in future
//
// promises will be completed in future

//promise has 3 states which are:
//pending:
//fulfilled
//rejected

//now we will make promises

// promise is an object
//promise has only two parts, resolve or reject

//When you create a Promise using the
// Promise constructor, you provide an executor function that defines the asynchronous
// operation. This function has two arguments:
// 
//    resolve: A function to call when the operation succeeds, passing the resolve value.
//    reject: A function to call when the operation fails, passing the reason for
//    rejection (usually an error object).

// resolve and Its Role:
//
// Inside the executor function, once the asynchronous operation completes successfully,
//  you call the resolve function.
//  This signals that the Promise is fulfilled and provides the resolved value as
//  an argument to the resolve function.

//The (then) method is attached to a Promise object. It allows you to define a callback
// function that will be executed when the Promise is fulfilled (i.e., after resolve
// is called).

// The callback function you provide to (then) receives the resolved value that was
// passed to the resolve function in the executor.

// You can chain multiple (then) methods to perform subsequent operations based on the
// resolved value from the previous then. Each then receives the resolved value from
// the prior one.


console.log('NOTE!! that I have so many promises, so I have sequentially arranged all' +
    'the promises by the setTimeout() function, so each promise will occur one after another ' +
    'with a gap of 1 second');
console.log(`It's not like that the promises are automatically arranged to occur oner after
another`);
console.log(`I have manually set then like that to occur in a timely manner, otherwise 
promises are async so they will occur when they are to be executed`)





let promise1 = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls
    // Network calls
    setTimeout(function (){
        console.log('Async task 1 is complete');
        resolve();
    }, 1000);
});


// (resolve) and (then) are connected

promise1.then(function (){
    console.log('Promise task 1 is complete'); // this will always be executed at the last
    
})

// there is no need to staore promise in a variable we can also do as follows:


// below is promise 2
new Promise (function (resolve, reject){
    setTimeout(function (){
        console.log('Async task two is completed');
        resolve();
    }, 2000)
}).then(function (){
    console.log(`Async task two's promise is resolved`);
})

// below is promise 3
new Promise(function (resolve, reject){
    setTimeout(function (){
        console.log( 'Async task 3 is complete')
        resolve({username: 'skr2004',
        email:"skr2004@sadhf.com"});
        // most of the time in this resolve we pass an object, but we can also pass
        // array or something else also;
    }, 3000)
}).then(function (user){
    console.log( 'Promise task 3 is complete');
    console.log(user);
})

// the above promise three is very very important to understand
// whatever we pass in a reoslve can be considered as argument to the (then) function

// in the above promise3 we passed an object in reoslve and in (then) we take an
// argument as user which is an object



// promise 4 is below:
new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = true;
        if (!error)
        {
            console.log(`Async task 4 is complete`);
            resolve({username:"skr_1978", password:"skr_1978_pass"});
        }
        // below is our first reject statement
        else{
            reject('Error: Something went wrong in promise 4');
        }
    }, 4000)
}).then((user)=>{
    console.log(user.username);
    return user.password;
}).then((user_password) => {
    console.log(`Promise task 4 is complete, this is second then()`);
    console.log(user_password);
}).catch(function (err){
    console.log(err);
}).finally(() => {
    console.log('The promise 4 is either resolved or rejected, this statement is in (finally) ' +
        'so this will execute no matter what!!!!');
})


// .catch() is used to catch the error or the condition or the function
// or anything that has to be executed when a promise gets rejected;
// it is catched by the statement reject();

//           ATTENTION          */////////
// when we do chaining like .then().then()
// so in the above we have chained two (then)s and in the first then() we will get the thing
//that is passed in the resolve.
// but in the second then() we will get something that is returned by the first then()


let promise5 = new Promise ( (resolve,reject) => {
    setTimeout(function (){
        let error = true;
        if (!error)
        {
            console.log(`Async task 4 is complete`);
            resolve({username:"supersonic5", password:"@Super1978_@5"});
        }
        // below is our second reject statement
        else{
            reject('Error: Something went wrong in promise 5, gamer profile');
        }
    }, 5000)
});

//now we will handle the promises by async and await and not by then() or catch();

// below is our first async function

async function consume_promise_five(){
    let response = await promise5;
    console.log(response);
}
consume_promise_five();


// The
// (async) keyword before the function declaration (async function consume_promise_five()...)
// defines it as an asynchronous function.

//Asynchronous functions allow you to handle operations that take time to complete without
// blocking the main thread of execution.
// In JavaScript, this is often used for tasks that involve waiting for network requests
// reading from files, or using timers.


//Inside the async function, you can use the (await) keyword before a promise.
// The await expression (pauses) the execution of the async function until the promise
// settles (either resolves with a value or rejects with an error).
// Once the promise settles, the (await) expression is replaced with the (resolved) value
// of the promise.

// "this aync await only works when the promise is (resolved)", else we will get errors

// so to handle the errors in async await , we can use TRY()  or  CATCH()  blocks
// handle the errors, like below:


async function consume_promsei_five_second_time(){
    try {
        let response = await promise5;
        console.log(response);
    }
    catch (err) {   // in this we have the error that will be in reject
        console.log(err);
    }
}

consume_promsei_five_second_time();
// the above approach handles the errors gracefully, meanwhile the more above will cause system
// to throw errors, and they are not resolved or handled properly;


// below we are usng the fetch a little bit

async function get_details() {
    try {
        let response= await fetch('http://universities.hipolabs.com/search?country=United+States')
        //since the above response will be in string,so we need to convert into json
        // let data = response.json(); // now this conversion will also take
        // time so we have to make this also as await to first get converted then log the output
        let data = await response.json();
        console.log(data[0]);
    }
    catch (err)
    {
        console.log(err);
    }
}
get_details();


// now we will be using then and catch to do the same process as above

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data.results[0].email);
}).catch((err) => {
    console.log(err);
})

// we can also directly use fetch without promises, but we can also use promises as below:


new Promise((resolve, reject) => {
    setTimeout(function () {
        fetch('https://randomuser.me/api/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    }, 8000);
})
    .then(data => {
        console.log(data);
        console.log(typeof data);

        // Access specific data from the response (assuming results is an array)
        const users = data.results;

        // Process the user data here
        for (const user of users) {
            console.log(`User Name: ${user.name.title} ${user.name.first} ${user.name.last}`);
            // Access other user properties (email, phone, etc.) as needed
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



// fromt he above logs you notice that, some task are completed before the other tasks
// so how do we determine which task willl happen at which time.

// checkout the fetch.js file for that