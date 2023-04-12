const express = require("express");
const app = express(); // create express instance that = app
    
require("./config/mongoose.config");//calling the mongoose.config and running the connect function
    
app.use(express.json(), express.urlencoded({ extended: true }));// app config settings for express server 
    
const JokesRoutes = require("./routes/Jokes.routes"); // routes configuration 
JokesRoutes(app); // calling the routes function and passing express as app parameter 
    
app.listen(8000, () => console.log("The server is all fired up on port 8000")); // listening on port 8000
