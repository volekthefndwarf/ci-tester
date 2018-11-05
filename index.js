const cloud = require("@pulumi/cloud");
const express = require("express"); 
const bodyParser = require("body-parser"); 
const echoHandler = require("./api/echo").echo; 

function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err });
    console.error(err.stack)
}

let server = new cloud.HttpServer("echo-app", () => {
    const app = express();

    app.use(bodyParser.json());
//    app.use(errorHandler);
  
    // Serve all files in the 'www' folder under '/'
    // 'index.html' will be automatically served as '/' as well as '/index.html'.
    app.use("/", express.static("www"));

    // GET
    app.get("/echo", echoHandler); 

    return app;
});

// Publish
module.exports = {
  url: server.url
}; 
