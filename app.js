console.log ("The code is running");


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
})