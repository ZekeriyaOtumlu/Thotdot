// Dependencies
var path = require("path");

module.exports = function(app){
     // GET route display for home page "index.html" file
     app.get("", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // GET route to "/survey", will display survey.html file
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
   
};
