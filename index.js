const express = require("express");
const path = require("path");



const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    // response.send("<h1>Hello, This is my First Node Application<h1>")
    const target = "Full stack MERN and DevOps Engineer";
    const name = "Ahmad";
    const nationality = "Nigeria";
    const age = 25
    response.render("index", {target:target, name:name, nationality:nationality, age:age});
});


app.listen(4000, () => {
    console.log('Server Ruuning at port 4000......');

});


