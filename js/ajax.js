// AJAX - Asynchronous JavaScript and XML,
// ceprav ne uporabljamo vec XML, ampak JSON, sam ime ostaja

// web browsers have build in tool named: XMLHttpRequest - this tool will establish connection to URL that
// we specify and lets us send/receive data

var ourRequest = new XMLHttpRequest();

//we want download data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

//what should happened once data is loaded
ourRequest.onload = function () {

    // by the default browser does not know we have JSON object data
    // by the default it is interpreting as giant plain text
    var ourData = JSON.parse(ourRequest.responseText);
    //first item in the array
    console.log(ourData[0]);

};
ourRequest.send();
