let request_url ="https://randomuser.me/api/"; // in this we created a variable which
// contains the link from which wwe will be fetching the data;

let xhr = new XMLHttpRequest(); // here we setup the XM document
xhr.open('GET', request_url); // we made a get request from the url;
xhr.onreadystatechange = function (){
    console.log(xhr.readyState);
    let data = this.responseText;
    
    if (xhr.readyState === 4)
    {
        console.log(data); // in this we got the data from the api
        console.log(data.info);// this will cause errors because we can't acces
        // the data as it is string check below:
        console.log(typeof data); // most of the time we get response in  string
        
        let data_in_object = JSON.parse(data);
        console.log(data_in_object.results[0]); // now we iwll get data
        
    }
}

// xhr.onreadyStatechange will have a function that will be executed when a stare is changed
// xhr. readyState will give the current state of the http request
xhr.send();// here we actually called the url or the data to be fetched