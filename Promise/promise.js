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

let promise1 = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls
    // Network calls
    setTimeout(function (){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});


// (resolve) and (then) are connected

promise1.then(function (){
    console.log('Promise task is complete'); // this will always be executed at the last
    
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
        resolve({username: 'skr2004',
        email:"skr2004@sadhf.com"});
        // most of the time in this resolve we pass an object, but we can also pass
        // array or something else also;
    }, 3000)
}).then(function (user){
    console.log(user);
})

// the above promise three is very very important to understand
// whatever we pass in a reoslve can be considered as argument to the (then) function

// in the above promise3 we passed an object in reoslve and in (then) we take an
// argument as user which is an object



// promise 4  is below:
