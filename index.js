// initializes teh expresss framework module and the path module
const express = require("express");
const path = require("path");

// creating the express application
const app = express();

// joining the created views folder and the ejs view engine to the directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// set up the request response cycle with the template view render and variables
app.get("/", (request, response) => {
    const target = "Full stack MERN and DevOps Engineer";
    const name = "Ahmad";
    const nationality = "Nigeria";
    const age = 25
    response.render("index", {target:target, name:name, nationality:nationality, age:age});
});

// create a server to listen to a specified port host 
app.listen(4000, () => {
    console.log('Server Ruuning at port 4000......');

});


