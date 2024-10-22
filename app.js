console.log ("The code is running");


//---------------------------------------------------PART 1 ---------------------------------------------------------------------------------
console.log ("Part 1");



//import required modules

const express = require ('express'); //import express framework
const path = require ('path'); //import path module for file paths

//create express application
const app = express();

//----------------------------------------------------------------------

//Set the view engine to EJS

app.set('view engine', "ejs"); //set the EJS as the view engine
app.set("views", path.join(__dirname, "views")); //set the views directory

//----------------------------------------------------------------------

//middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true })); //parse URL-encoded data

//----------------------------------------------------------------------

//serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));// serve static files

//----------------------------------------------------------------------

// define a basic route for the home page
app.get('/', (req, res) => {
    res.render('index'); //render the index.ejs view
});

//----------------------------------------------------------------------

//define a route to handle form submission
app.post('/submit', (req, res) => {
    console.log(req.body); //log the submitted form data to the console
    res.send("Success!"); //send a simple response
});

//----------------------------------------------------------------------

//define a route with a parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id; //get the user id from the route parametr
    res.send( `User ID: ${userId} `); //send back the user id
});

//----------------------------------------------------------------------

//start the server
const PORT = process.env.PORT || 3000; //set the port number
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);

});

//---------------------------------------------------PART 2 ---------------------------------------------------------------------------------
console.log ("Part 2");


//middleware function
const logRequests = (req, res, next) => {
    console.log (`${req.method} ${req.url}`); //log the HTTP method and url
    next(); // call the next middleware or route handler

};

app.use(logRequests); //use the logging middleware for all routes


//---------------------------------------------------PART 3 ---------------------------------------------------------------------------------
console.log ("Part 3");

