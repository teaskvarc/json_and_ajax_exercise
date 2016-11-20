// JSON DATA = objects and arrays

//OBJECT

var myCat = {
    "name"      : "Tea",
    "species"   : "cat",
    "favFood"   : "tuna"
}

//how to access data that lives in object
console.log(myCat.name);

// ARRAY

var myFavColors = ["blue", "green", "purple"];

console.log(myFavColors[1]);

// ARRAY OF OBJECTS

var thePets = [
    {
        "name"      : "Tea",
        "species"   : "cat",
        "favFood"   : "tuna"
    },
    {
        "name"      : "Ver",
        "species"   : "dog",
        "favFood"   : "fish"
    }
];

// if I want access second object in array
// this will return value - fish
console.log(thePets[1].favFood);


//how do I find the JSON endpoint URLs?
    // look: REST API
    // look: fill text JSON