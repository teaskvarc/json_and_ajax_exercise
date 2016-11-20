// we want to download new data if and when someone click blue button
// let's add EVENT listener

var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
   var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);

        renderHTML(ourData);
    };

    // RIGHT BEFORE WE SEND AJAX REQUEST - here you say what happens if connection fails
    ourRequest.onerror = function () {
      console.log("Connection error");
    };


    ourRequest.send();

    //next time we click the button it's going to be animals-2.json
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add ("hide-me");
    }
});

// function for adding HTML to the page
// its going to add HTML to empty div element: "animal-info"

function renderHTML(data) {

    //when we first define variable, let it be empty string
    var htmlString = "";

    // loop through our array of pet objects
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
          if (ii == 0) {
              htmlString += data[i].foods.likes[ii];
          } else {
              htmlString += " and " + data[i].foods.likes[ii];
          }
        }

        htmlString += " and dislikes ";

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>';

    }

    //method available to all DOM elements
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}