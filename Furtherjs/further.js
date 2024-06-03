// fetch return a promise
// 404 is also a response

// if we want to send a header or a value to our api we can do as below;

// let headers = {
//     'content-type': 'text/xml',
//     'Breaking-bad': '300'
// }
//
// fetch("http://example.com", {headers});

// refer to mdn's documents to learn about fetch more and it's methods

//a special queue is made for fetch, so it is executed first
// that special queue is Micro task queue, or priority queue
//
//please check images or screenshots for more details






// below this we will be learning about some OOPS

// (new) keyword is a constructor function

let player = {
    username: 'SKR_1978',
    login_count: '10',
    password: '123456',
    get_user_details: function () {
        console.log(this);
    }
}


function User(username, login_count, password)
{
    this.username = username; // the left side is our variable, and right side
    // is the value that is assigned from the function's parameters
    this.password = password;
    this.login_count = login_count;
    return this;
}
//In the provided function User(username, login_count, password), the (this)
// keyword is being used to create properties within the function that will
// become part of a new user object.



// let user_one = User('skr_19782004', 20, 'asddf34tf3');
// console.log(user_one);
// let user_two = User('skr_19782007', 40, 'asd');


// the above thing will create a problem as even if we don't log the user_two
// when the user_one is logged, then also we will get the output of user_two
// so, we will use the (new) keyword

let user_one = new User('skr_19782004', 20, 'asddf34tf3');
console.log(user_one);
let user_two = new User('skr_19782007', 40, 'asd');

// whenever (new) keyword is used a new object is created.
// a new constructor function is called
// whatever we have in the function we get them as an object in the log

// array, string is also an object
// but object is alone and has no parent
// it's like that object is parent of all these things, so the properties that
// object has arrays or strings also have those by inheritance


// simplest definition of this is = current context
// this is jisne bhi bulaya hai uska kaam karna hai
