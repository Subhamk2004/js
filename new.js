//Bootstrap will figure out how wide your screen is and respond by resizing your HTML elements - hence the name responsive design.

// To link your html yo bootstrap we ad following element in our html:
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

//************** */
// To center our text we add (class= "text-center");

//////*************************** */
//To maintain the size of image on itself according to screen we add (class = "img-responsive")


//******************************* */
// To add buttons we use bootstrap as it offers various customizations
// we use classes ---> btn , btn-default , btn-block , btn-primary , btn-danger;
// 

//**************************** */ ThIS IS VERY IMP 
// To add how much space does the buttons take we use following class = "col-md-5";
// col-md-5  command inplace of md is our screen is small we use (xs) and we can take a suitable value according to our use instead of 5;
/******************************** */

//**************** */
// text-primary orrr btn-primary make them light blue
//  text-danger orrr btn-danger make them red


//********************************** */
// aDD THE FOLLOWING LINK ELEMENT  to add impressive font libraries;
//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
//</link>

////*-****************************************

//<i class = "fas fa-thumbs-up">Like</i>

// i element is used to make icons .
//*** Instead of that ((thumbs-up))   we can use any icon we want else syntax is that only*/



//********************** */
// To arrange elements on a webpage nest them in a div element and then add each of that parent dic element into div elements and give each one of them a class  = "col-xs-7"

//EXAMPLE to use "col-xs-3"   *************



//<div class="row">
//<div class="col-xs-4">
//<label><input type="checkbox" name="personality"> Loving</label>
//</div>
//<div class="col-xs-4">
//<label><input type="checkbox" name="personality"> Lazy</label>
//</div>
//<div class="col-xs-4">
//<label><input type="checkbox" name="personality"> Crazy</label>
//</div>

///****************** */

// give class = "container-fluid" ,,,,,,,, The .container-fluid class provides a full width container, spanning the entire width of the viewport


///*************** */
// The class = "well" The . well class adds a rounded border around the element with a gray background color and some padding

// the class = "target" is used to target the css classes using jquery !!!







/////////////                  JQUERY           /////////////////////





//Add below script element to link jquery to html and make it work
//   <script src="js/jquery-3.7.1.min.js">
// </script>

//<script>$(document).ready(function() {});
//</script>

// Add above script element to start with the JQuery
//***************************************************************** */

//*************************************************************** */


//  All jQuery functions start with a $, usually referred to as a 
//dollar sign operator, or as bling.

//jQuery often selects an HTML element with a selector, then does 
//something to that element.
//
//************************************ */



//You can also target elements by their id attributes.

//First target your button element with the id target3 by using 
//the $("#target3") selector.
//Note that, just like with CSS declarations, you type a # before 
//the id's name.

//********************code********************* */

//      $("#target6").addClass("animated fadeOut");

//***************************** 

//**************************/
//jQuery has a function called .css() that allows you to change
// the CSS of an element.
//Here's how we would change its color to blue:
//              $("#target1").css("color", "blue");






/////*****IMPORTANT******************** */
////



//jQuery has a function called .prop() that allows
// you to adjust the properties of elements.
//Here's how you would disable all buttons:
//              $("button").prop("disabled", true);




/////////////////////////////////////////////////////////////////
//jQuery has a function called .html() that lets you add HTML 
//tags and text within an element. Any content previously 
//within the element will be completely replaced with the
// content you provide using this function.
//Here's how you would rewrite and emphasize the text of our heading:

//           $("h3").html("<em>jQuery Playground</em>")

// jQuery has a function called .remove() that will remove 
//an HTML element entirely.





///////IMPORTANT**************************************

//jQuery has a function called appendTo() that allows you
// to select HTML elements and append them to another element.
//For example, if we wanted to move target4 from our right well 
//to our left well, we would use:

//         $("#target4").appendTo("#left-well");


/////////////////CLONING***************************
//
//In addition to moving elements, you can also copy them from 
//one place to another.
//jQuery has a function called clone() that makes a copy of an element.
//For example, if we wanted to copy target2 from our 
//left-well to our right-well, we would use:
//             $("#target2").clone().appendTo("#right-well");


//Add the classes animated and hinge to your body element.

//$("body").addClass("animated hinge");











//////////////       SASS                ///////////////////






//One feature of Sass that's different than CSS is it uses 
//variables. They are declared and set to store data, similar
// to JavaScript.


//In JavaScript, variables are defined using the let and const 
// keywords. 
//In Sass, variables start with a [ $ ] followed by the variable name.

//               EXAMPLE                      //


//<style type='text/scss'>

//$text-color  : red;
//.header{
//  text-align: center;
//}
//.blog-post, h2 {
//  color : $text-color;
//}
//</style>

// In the above example we declared the variable $text-color
// with  the value of (red) and then used in the css








//////////////           REACT                    //////////////







//React uses a syntax extension of JavaScript called JSX that
// allows you to write HTML directly within JavaScript. This
// has several benefits. It lets you use the full programmatic 
//power of JavaScript within HTML, and helps to keep your code 
//readable. For the most part, JSX is similar to the HTML that 
//you have already learned, however there are a few key differences
// that will be covered throughout these challenges.




const JSX = <h1>Hello JSX!</h1>


//One important thing to know about nested JSX is that 
//it must return a single element.
//This one parent element would wrap all of the other 
//levels of nested elements.

//Example of above statement is below 

const jsx2 = <div id = "done">
    <p>This is one</p>
    <p>This is second</p>
    <p>Ok enough examples</p>
</div>


//ReactDOM offers a simple method to render React elements to 
//the DOM which looks like this: 


// ReactDOM.render(componentToRender, targetNode)
ReactDOM.render(jsx2, document.getElementById("done"))



//where the first argument is the React element or 
//component that you want to render, and the second argument is 
//the DOM node that you want to render the component to.

//As you would expect, ReactDOM.render() must be called after 
//the JSX element declarations, just like how you must declare 
//variables before using them.

///One key difference in JSX is that you can no longer 
//use the word class to define HTML classes.
// This is because class is a reserved word in JavaScript.
// Instead, JSX uses className.

const jsx3 = <div id = "done" className = "myDiv">

    <p>This is one</p>
    <p>This is second</p>
    <p>Ok enough examples</p>
</div>





/***************js*********/

/*kkjdbnj
dlkjg dsfggit add*/